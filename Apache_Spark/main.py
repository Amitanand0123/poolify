from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col
from config import KAFKA_BOOTSTRAP_SERVERS, KAFKA_TOPIC
from schema import cart_event_schema
from pool_matcher import find_pools
from backend_client import send_pool_to_backend

def process_batch(df, epoch_id):
    pools = find_pools(df, spark)
    for row in pools.collect():
        pool = {
            "item_category": row["item_category"],
            "members": [member.asDict() for member in row["members"]],
            "pool_size": row["pool_size"]
        }
        send_pool_to_backend(pool)

if __name__ == "__main__":
    spark = SparkSession.builder.appName("CartStreamMatchingEngine").getOrCreate()
    raw_df = spark.readStream \
        .format("kafka") \
        .option("kafka.bootstrap.servers", KAFKA_BOOTSTRAP_SERVERS) \
        .option("subscribe", KAFKA_TOPIC) \
        .load()
    cart_events = raw_df.select(from_json(col("value").cast("string"), cart_event_schema).alias("data")).select("data.*")
    query = cart_events.writeStream \
        .foreachBatch(process_batch) \
        .outputMode("append") \
        .start()
    query.awaitTermination()
