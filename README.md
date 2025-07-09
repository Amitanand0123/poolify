# 🛒 AI-Powered Smart Cart Pooling System

> **Revolutionizing delivery efficiency through intelligent order pooling and real-time matching**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18+-blue.svg)](https://reactjs.org/)
[![Apache Spark](https://img.shields.io/badge/Apache%20Spark-v3.4+-orange.svg)](https://spark.apache.org/)
[![Python](https://img.shields.io/badge/Python-v3.9+-blue.svg)](https://www.python.org/)

## 💡 Concept Overview

The Smart Cart Pooling System intelligently groups customer orders based on location proximity, item similarity, and delivery timing to optimize delivery efficiency and reduce costs. When customers add items to their cart, they can opt into Order Pooling, where our AI-powered system automatically matches them with nearby customers with similar orders.

### Key Features

- **🤖 AI-Powered Matching**: Intelligent pool recommendations based on multiple factors
- **⚡ Real-time Processing**: Apache Spark engine for millisecond-level clustering
- **🗺️ Geo-spatial Optimization**: Dynamic radius-based pool creation
- **⏰ Smart Timing**: AI-predicted optimal pool closure windows
- **🔄 Live Updates**: Real-time pool status via WebSocket connections
- **🌱 Eco-Friendly**: Environmental impact tracking and scoring

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   AI Module     │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (Python)      │
│   - Cart UI     │    │   - Pool APIs   │    │   - ML Models   │
│   - Map Display │    │   - Lifecycle   │    │   - Predictions │
│   - Timer UI    │    │   - WebSocket   │    │   - Viability   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │ Apache Spark    │
                    │ Matching Engine │
                    │ - Geo Clustering│
                    │ - Item Similarity│
                    │ - Real-time     │
                    │   Streaming     │
                    └─────────────────┘
```

## 🚀 How It Works

### User Flow
1. **Cart Addition**: Customer adds items to cart
2. **Pool Option**: System presents "Opt for Order Pooling" toggle
3. **Pool Search**: Spark engine searches for compatible pools within dynamic radius
4. **AI Decision**: ML model evaluates pool viability and recommends action
5. **Pool Join/Create**: User either joins existing pool or creates new one
6. **Timer Management**: Pool operates within AI-predicted time window
7. **Order Lock**: When timer expires, all orders in pool are locked and confirmed
8. **Delivery Optimization**: Combined delivery route executed

### Pool Matching Criteria
- **📍 Location**: Geographic proximity (dynamic radius)
- **🛍️ Item Similarity**: Product categories and types
- **⏱️ Delivery Window**: Compatible time slots
- **🎯 Pool Viability**: AI-predicted success probability

## 🔧 Technical Stack

### Module 1: Frontend (React)
**Responsibility**: User interface and real-time updates  
**Team Member**: Member 1

**Technologies:**
- React 18+ with TailwindCSS
- Socket.IO client for real-time updates
- Axios for API communication
- Mapbox SDK for location visualization

**Features:**
- Cart screen with pooling toggle
- Pool member display with countdown timer
- Interactive map showing pool locations
- Real-time status updates

### Module 2: Backend (Node.js + Express)
**Responsibility**: Pool lifecycle management and APIs  
**Team Member**: Member 2

**Technologies:**
- Node.js & Express.js
- MongoDB Atlas (geo-queries & item matching)
- Redis (pool timers & order locking)
- Socket.IO for real-time communication

**API Endpoints:**
```
POST /register-cart      # Register new cart for pooling
GET  /find-or-create-pool # Find existing or create new pool
POST /join-pool          # Join an existing pool
POST /close-pool         # Close pool and lock orders
```

### Module 3: AI Module (Smart Decision Engine)
**Responsibility**: Pool viability prediction and optimization  
**Team Member**: Member 3

**Technologies:**
- Python (Flask/FastAPI)
- scikit-learn / XGBoost / LightGBM
- Deployment: Render or Fly.io

**ML Capabilities:**
- Pool viability prediction
- Optimal timer duration calculation
- Success probability scoring
- Dynamic radius adjustment

### Module 4: Apache Spark + Geo Matching
**Responsibility**: Real-time stream processing and clustering

**Technologies:**
- Apache Spark (PySpark/Scala)
- Kafka for real-time streams
- H3/GeoSpark for geo-indexing
- DataFrames with Broadcast Joins

**Processing:**
- Real-time cart stream analysis
- Coordinate-based clustering
- Item category matching
- Time window optimization

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.9+
- Apache Spark 3.4+
- MongoDB Atlas account
- Redis instance

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/your-org/smart-cart-pooling.git
cd smart-cart-pooling
```

2. **Install dependencies**
```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install

# AI Module
cd ../ai-module && pip install -r requirements.txt

# Spark Module
cd ../spark-engine && pip install -r requirements.txt
```

3. **Environment Setup**
```bash
# Copy environment templates
cp .env.example .env

# Configure your environment variables
# - MongoDB Atlas connection
# - Redis connection
# - Mapbox API key
# - Spark cluster details
```

4. **Start Services**
```bash
# Start all services
docker-compose up -d

# Or start individually
npm run start:frontend
npm run start:backend
python ai-module/app.py
spark-submit spark-engine/main.py
```

## 📊 Example Scenario

**Step-by-Step Flow:**

1. **Alice** adds grocery items from `123 Main Street`
2. System searches for pools within `1km radius`
3. **Spark engine** identifies **Bob** (`900m away`, same item types, overlapping ETA)
4. **AI module** confirms viability with score: `0.88`
5. **Alice** auto-joined to pool with `6-hour timer`
6. Timer expires → orders locked → combined delivery executed

## 🌟 Bonus Features

- **🌱 Eco-Score**: Environmental impact tracking per user
- **🎁 Referral Rewards**: Community pooling incentives
- **🚛 Partner Integration**: Optimized delivery route visualization
- **⚠️ Emergency Cancellation**: Cooldown-based cancellation system

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Team Structure
- **Frontend Developer**: React UI/UX implementation
- **Backend Developer**: API and pool lifecycle management
- **AI/ML Engineer**: Prediction models and optimization
- **Data Engineer**: Spark streaming and geo-processing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions and support:
- 📧 Email: support@smartcartpooling.com
- 💬 Discord: [Join our community](https://discord.gg/smartcartpooling)
- 📝 Issues: [GitHub Issues](https://github.com/your-org/smart-cart-pooling/issues)

---

**Built with ❤️ for sustainable delivery solutions**