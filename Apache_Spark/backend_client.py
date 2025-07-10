import requests
from config import BACKEND_API_URL

def send_pool_to_backend(pool):
    try:
        resp = requests.post(BACKEND_API_URL, json=pool)
        resp.raise_for_status()
        print(f"Pool sent to backend: {pool}")
    except Exception as e:
        print(f"Error sending pool: {e}")
