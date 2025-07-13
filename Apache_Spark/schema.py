from pyspark.sql.types import (
    StructType, StructField, StringType, DoubleType, ArrayType
)

order_schema = StructType([
    StructField("userId", StringType(), True),
    StructField("lat", DoubleType(), True),
    StructField("lng", DoubleType(), True),
    StructField("itemCategory", StringType(), True),
    StructField("cartItems", ArrayType(StringType()), True),
    StructField("deliveryTime", StringType(), True),
    StructField("regionType", StringType(), True),
])
