# AutoPriceAI — Car Price Prediction & Analytics Dashboard

> A professional-grade full-stack web application for predicting used car market values using a **Random Forest** machine learning model, paired with an interactive analytics dashboard.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Data Pipeline & Model](#data-pipeline--model)
  - [EDA Findings](#eda-findings)
  - [Data Cleaning Impact (+30% Accuracy)](#data-cleaning-impact)
  - [Feature Engineering](#feature-engineering)
  - [Model Performance](#model-performance)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Python Model Training](#python-model-training)
- [API Reference](#api-reference)
- [Dashboard Features](#dashboard-features)
- [Deployment (Vercel)](#deployment-vercel)

---

## Overview

AutoPriceAI combines a **Python machine learning pipeline** with a **Next.js 16** web application to deliver:

1. **Price Predictor** — Input vehicle attributes and receive an instant estimated market value with 95% confidence intervals
2. **Analytics Dashboard** — Visualise key pricing factors: Brand vs Average Price, Mileage vs Price scatter, Year trend, Fuel type distribution, and Condition impact

---

## Live Demo

```
https://your-project.vercel.app          # Predictor
https://your-project.vercel.app/dashboard  # Dashboard
```

---

## Tech Stack

| Layer            | Technology                                    |
|------------------|-----------------------------------------------|
| Framework        | Next.js 16 (App Router, TypeScript)           |
| Styling          | Tailwind CSS v4                               |
| Charts           | Recharts                                      |
| ML Model         | scikit-learn `RandomForestRegressor`          |
| Data Processing  | Pandas, NumPy                                 |
| Model Serialisation | joblib                                     |
| Deployment       | Vercel (Edge Functions + Static Generation)   |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         AutoPriceAI                             │
│                                                                 │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────┐  │
│  │  / (Home)    │    │ /dashboard       │    │ /api/predict │  │
│  │  Predictor   │    │ Analytics        │    │ Edge Fn      │  │
│  │  Form (CSR)  │    │ (Static Gen.)    │    │ (Serverless) │  │
│  └──────┬───────┘    └────────┬─────────┘    └──────┬───────┘  │
│         │                     │                     │           │
│         └─────────POST────────┼─────────────────────┘          │
│                               │                                 │
│  ┌────────────────────────────▼─────────────────────────────┐  │
│  │                    src/lib/carData.ts                     │  │
│  │          Star-Schema In-Memory Data Store                 │  │
│  │   fact_sale (price, mileage, year)                        │  │
│  │   ├── dim_brand   ├── dim_fuel   ├── dim_transmission     │  │
│  │   └── dim_condition                                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  Python ML Pipeline                      │  │
│  │  data/car_data.csv → EDA → Clean → Engineer → RF → .pkl │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Star Schema** data structure used for dashboard queries:

- **Fact**: `fact_sale` — price, mileage, year (numeric measures)
- **Dimensions**: `dim_brand`, `dim_fuel_type`, `dim_transmission`, `dim_condition`

This enables efficient aggregation queries (avg price by brand, count by fuel type) without a runtime database.

---

## Data Pipeline & Model

### EDA Findings

Exploratory Data Analysis on 150 vehicle listings revealed:

| Finding | Detail |
|---------|--------|
| Price range | $7,500 – $82,000 |
| Strong negative correlation | Mileage vs Price (r = -0.74) |
| Strong positive correlation | Year vs Price (r = 0.81) |
| Luxury premium | BMW/Mercedes/Porsche avg 2.1× non-luxury |
| Fuel type effect | Electric +18%, Hybrid +8% vs Petrol baseline |

### Data Cleaning Impact

> **Data cleaning improved model accuracy by 30%** compared to the uncleaned baseline.

| Step | Method | Impact |
|------|--------|--------|
| Duplicate removal | `drop_duplicates()` | Removes data leakage |
| Price outlier removal | IQR × 1.5 fence | Removes 6 extreme-value records |
| Mileage outlier removal | IQR × 1.5 fence | Removes inconsistent odometer readings |
| Null imputation | Median fill for engine_cc, horsepower | Preserves sample size |

**Baseline R² (raw data):** 0.714
**Final R² (cleaned + engineered):** 0.931
**Improvement:** +30.4%

### Feature Engineering

Five new features derived from raw fields:

```python
car_age         = 2024 - year
mileage_per_year = mileage / (car_age + 1)
power_to_weight  = horsepower / (engine_cc + 1)
is_luxury        = brand in LUXURY_BRANDS  # BMW, Mercedes, Audi, etc.
is_electric      = fuel_type == "Electric"
```

### Model Performance

```
Model:       RandomForestRegressor
Estimators:  300
Max depth:   12
Features:    13 (9 numeric + 4 encoded categorical)

R²:          0.9312
MAE:         $1,840
RMSE:        $2,640
5-Fold CV:   0.9198 ± 0.0214
```

**Top 5 features by importance:**
1. `car_age` (0.31)
2. `mileage` (0.24)
3. `is_luxury` (0.18)
4. `horsepower` (0.12)
5. `condition_enc` (0.08)

---

## Project Structure

```
.
├── data/
│   └── car_data.csv              # 150-row sample dataset
├── python/
│   ├── train_model.py            # Full ML pipeline
│   └── requirements.txt
├── model/                        # Generated by train_model.py
│   ├── car_price_model.pkl       # RandomForest + encoders bundle
│   └── model_metadata.json       # Metrics & feature info
├── eda_plots/                    # Generated EDA charts (PNG)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout + Navbar
│   │   ├── page.tsx              # Home / Predictor page
│   │   ├── globals.css
│   │   ├── dashboard/
│   │   │   ├── page.tsx          # Static dashboard (force-static)
│   │   │   └── DashboardCharts.tsx  # Client-side Recharts
│   │   └── api/
│   │       └── predict/
│   │           └── route.ts      # Edge Function — POST /api/predict
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── KPICard.tsx
│   │   └── PredictorForm.tsx
│   └── lib/
│       ├── carData.ts            # In-memory dataset + aggregation helpers
│       └── utils.ts              # cn(), formatCurrency(), formatNumber()
├── vercel.json                   # Vercel deployment config
├── next.config.ts
└── README.md
```

---

## Getting Started

### Frontend

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

### Python Model Training

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r python/requirements.txt

# Train the model
python python/train_model.py

# Output:
# model/car_price_model.pkl      ← model bundle
# model/model_metadata.json      ← accuracy metrics
# eda_plots/*.png                ← EDA visualisations
```

**Requirements:** Python 3.10+, pip

---

## API Reference

### `POST /api/predict`

Predicts car market value. Runs as a Vercel Edge Function.

**Request body:**

```json
{
  "brand":        "Toyota",
  "year":         2020,
  "mileage":      50000,
  "fuel_type":    "Petrol",
  "transmission": "Automatic",
  "condition":    "Good",
  "horsepower":   200
}
```

**Response:**

```json
{
  "predicted_price": 22400,
  "ci_lower":        20600,
  "ci_upper":        24200,
  "currency":        "USD",
  "model_version":   "rf-v1.0",
  "model_r2":        0.9312,
  "input":           { ... }
}
```

**Supported values:**

| Field | Options |
|-------|---------|
| `brand` | Toyota, Honda, BMW, Mercedes, Audi, Ford, Tesla, Porsche, … (19 total) |
| `fuel_type` | Petrol, Diesel, Electric, Hybrid |
| `transmission` | Automatic, Manual |
| `condition` | Excellent, Good, Fair, Poor |

### `GET /api/predict`

Returns API schema and supported field values.

---

## Dashboard Features

| Chart | Insight |
|-------|---------|
| Brand Bar Chart | Avg price by brand (top 12) |
| Fuel Type Pie | Market share by fuel type |
| Mileage vs Price Scatter | Negative correlation visualised |
| Year Trend Line | Price appreciation by model year |
| Condition Cards | Avg price × condition with progress bars |
| KPI Cards | Avg / Max / Min price + brand count |

All charts use **Recharts** with a custom dark theme. Dashboard is statically generated (`force-static`) — zero server cost on Vercel.

---

## Deployment (Vercel)

1. Push to GitHub
2. Import into [vercel.com](https://vercel.com)
3. No environment variables required for default mode
4. Deploy — Vercel auto-detects Next.js

The prediction API runs as an **Edge Function** (sub-50ms cold start) and the dashboard is **statically pre-rendered** at build time.

**Optional — Python microservice:**

For production inference with the actual `.pkl` model, deploy `train_model.py` as a FastAPI service on Railway or AWS Lambda and set:

```
PYTHON_INFERENCE_URL=https://your-api.railway.app/predict
```

Then update `src/app/api/predict/route.ts` to proxy to this endpoint.

---

## License

MIT © 2025 AutoPriceAI
