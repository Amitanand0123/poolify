# Order Pooling Spark Service

## Overview
Reads customer orders from Kafka, matches to existing pools in Redis, and writes join/create decisions back to Kafka.

## Setup
1. `pip install -r requirements.txt`
2. Ensure Kafka topic `orders` and `order_pool_results` exist.
3. Populate Redis with existing `pool:` hashes.

## Run
