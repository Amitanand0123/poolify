import json
from datetime import datetime
from pyspark.sql.functions import udf, col, from_json, to_json, struct
from pyspark.sql.types import StringType
from src.schemas import order_schema
from src.utils.geo import haversine, region_radius
from src.utils.similarity import jaccard, time_compatible
from src.utils.redis_client import redis_client

def match_order(userId, lat, lng, itemCategory, cartItems, deliveryTime, regionType):
    radius = region_radius(regionType)
    best = {"score":0}
    for key in redis_client.keys("pool:*"):
        p = redis_client.hgetall(key)
        if int(p.get("members",0)) >= int(p.get("maxCapacity",10)): continue
        d = haversine(lat, lng, float(p["lat"]), float(p["lng"]))
        if d > radius: continue
        geo = (radius - d)/radius
        cat = 1.0 if itemCategory == p["category"] else 0.0
        itm = jaccard(cartItems, json.loads(p["cartItems"]))
        tim = 1.0 if time_compatible(deliveryTime, p["expiresAt"]) else 0.0
        total = geo*0.4 + cat*0.3 + itm*0.2 + tim*0.1
        if total > best["score"] and total > 0.5:
            best = {"score":total, "key":key, "p":p}
    if best.get("key"):
        pool_id = best["key"].split(":",1)[1]
        return json.dumps({
            "action":"join_pool",
            "matchedPoolId": pool_id,
            "matchScore": round(best["score"],2),
            "poolDetails":{
                "lat": float(best["p"]["lat"]),
                "lng": float(best["p"]["lng"]),
                "category": best["p"]["category"],
                "members": int(best["p"]["members"]),
                "expiresAt": best["p"]["expiresAt"]
            }
        })
    dur = {"urban":"6h","suburban":"8h"}.get(regionType,"6h")
    return json.dumps({
        "action":"create_pool",
        "suggestedDuration": dur,
        "reason":"No match in radius with same category or time window"
    })

match_udf = udf(match_order, StringType())
