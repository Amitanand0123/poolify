from pyspark.sql import SparkSession

def create_spark_session(app_name="OrderPooling"):
    return (
        SparkSession.builder
        .appName(app_name)
        .config("spark.sql.streaming.checkpointLocation", "/tmp/checkpoint_order_pooling")
        .getOrCreate()
    )
