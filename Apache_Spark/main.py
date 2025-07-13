import os
from pyspark.sql.functions import from_json, col
from configs.spark_conf import create_spark_session
from src.schemas import order_schema
from src.jobs.pooling_job import match_udf

# Config
KAFKA_BOOT = os.getenv("KAFKA_BOOTSTRAP","localhost:29092")
IN_TOPIC   = os.getenv("INPUT_TOPIC","orders")
OUT_TOPIC  = os.getenv("OUTPUT_TOPIC","order_pool_results")
CP_LOC     = os.getenv("CHECKPOINT_LOCATION","/tmp/checkpoint_order_pooling")

# Spark session
spark = create_spark_session()

# Read Kafka stream
df = (
    spark.readStream.format("kafka")
    .option("kafka.bootstrap.servers", KAFKA_BOOT)
    .option("subscribe", IN_TOPIC)
    .load()
)

# Parse JSON and apply matching UDF
orders = df.selectExpr("CAST(value AS STRING) as json_str") \
    .select(from_json(col("json_str"), order_schema).alias("o")) \
    .select("o.*")

results = orders.withColumn(
    "value", match_udf(
        col("userId"), col("lat"), col("lng"),
        col("itemCategory"), col("cartItems"),
        col("deliveryTime"), col("regionType")
    )
).selectExpr("CAST(userId AS STRING) AS key", "value")

# Write back to Kafka
query = (
    results.writeStream.format("kafka")
    .option("kafka.bootstrap.servers", KAFKA_BOOT)
    .option("topic", OUT_TOPIC)
    .option("checkpointLocation", CP_LOC)
    .start()
)

query.awaitTermination()
