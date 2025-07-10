# Spark Matching Engine for Hyperlocal Cart Pooling

This module clusters user carts in real-time by geospatial proximity, item similarity, and delivery window, and sends matched pools to the backend API.

## How it works
- Ingests cart events from Kafka
- Clusters users within 1km, same item category, and overlapping delivery window
- Sends suggested pools to backend for confirmation

## Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Configure `config.py` as needed
3. Start your Kafka server and backend API
4. Run: `python main.py`

## Files
- `main.py`: Entry point
- `schema.py`: Cart event schema
- `geo_utils.py`: Geospatial helpers
- `pool_matcher.py`: Pooling logic
- `backend_client.py`: API integration
