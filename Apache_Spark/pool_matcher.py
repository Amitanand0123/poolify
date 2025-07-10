from pyspark.sql.functions import col, udf, collect_list, struct, count
from pyspark.sql.types import BooleanType
from geo_utils import within_radius
from config import POOL_RADIUS_KM

def register_udfs(spark):
    spark.udf.register("within_radius", lambda lat1, lon1, lat2, lon2: within_radius(lat1, lon1, lat2, lon2, POOL_RADIUS_KM), BooleanType())

def find_pools(df, spark):
    register_udfs(spark)
    df.createOrReplaceTempView("carts")
    # Find pairs of users who can be pooled
    query = """
    SELECT a.cart_id as cart_a, b.cart_id as cart_b, a.item_category, a.lat as lat_a, a.lon as lon_a, b.lat as lat_b, b.lon as lon_b,
           a.delivery_window as window_a, b.delivery_window as window_b, a.user_id as user_a, b.user_id as user_b
    FROM carts a
    JOIN carts b
      ON a.item_category = b.item_category
     AND within_radius(a.lat, a.lon, b.lat, b.lon)
     AND a.user_id != b.user_id
     AND a.is_pool_opt_in = true
     AND b.is_pool_opt_in = true
    """
    pairs = spark.sql(query)
    # Group into pools by item_category and location
    pools = pairs.groupBy("item_category").agg(
        collect_list(struct("user_a", "lat_a", "lon_a", "window_a")).alias("members"),
        count("*").alias("pool_size")
    )
    return pools
