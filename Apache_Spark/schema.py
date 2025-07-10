from pyspark.sql.types import (
    StructType, StructField, StringType, DoubleType, ArrayType, TimestampType, BooleanType
)

cart_event_schema = StructType([
    StructField("user_id", StringType(), True),
    StructField("cart_id", StringType(), True),
    StructField("lat", DoubleType(), True),
    StructField("lon", DoubleType(), True),
    StructField("item_category", StringType(), True),
    StructField("item_ids", ArrayType(StringType()), True),
    StructField("cart_time", TimestampType(), True),
    StructField("delivery_window", StructType([
        StructField("start", TimestampType(), True),
        StructField("end", TimestampType(), True)
    ])),
    StructField("pool_id", StringType(), True),
    StructField("is_pool_opt_in", BooleanType(), True),
    StructField("address", StringType(), True),
])
