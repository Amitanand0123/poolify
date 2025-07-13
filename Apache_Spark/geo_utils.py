import math

def haversine(lat1, lon1, lat2, lon2):
    R = 6371e3
    φ1, φ2 = map(math.radians, (lat1, lat2))
    Δφ = math.radians(lat2 - lat1)
    Δλ = math.radians(lon2 - lon1)
    a = math.sin(Δφ/2)**2 + math.cos(φ1)*math.cos(φ2)*math.sin(Δλ/2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

def region_radius(region):
    return {"urban":1000, "suburban":3000}.get(region, 2000)
