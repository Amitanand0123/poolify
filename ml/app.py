from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Define the path to the models directory
MODELS_DIR = os.path.join(os.path.dirname(__file__), 'models')

# Load the models
try:
    pool_viability_model = joblib.load(os.path.join(MODELS_DIR, 'pool_viability_model_pipeline.joblib'))
    suggested_expiry_time_model = joblib.load(os.path.join(MODELS_DIR, 'suggested_expiry_time_model_pipeline.joblib'))
    print("Models loaded successfully.")
except Exception as e:
    print(f"Error loading models: {e}")
    pool_viability_model = None
    suggested_expiry_time_model = None

@app.route('/predict/pool_viability', methods=['POST'])
def predict_pool_viability():
    if pool_viability_model is None:
        return jsonify({'error': 'Pool viability model not loaded.'}), 500

    try:
        data = request.get_json()
        df = pd.DataFrame([data])
        prediction = pool_viability_model.predict(df)[0]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict/suggested_expiry_time', methods=['POST'])
def predict_suggested_expiry_time():
    if suggested_expiry_time_model is None:
        return jsonify({'error': 'Suggested expiry time model not loaded.'}), 500

    try:
        data = request.get_json()
        df = pd.DataFrame([data])
        prediction = suggested_expiry_time_model.predict(df)[0]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/')
def home():
    return "Welcome to the ML Model API!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
