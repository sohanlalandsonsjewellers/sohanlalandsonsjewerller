<div align="center">

# 💎 Sohan Lal And Sons Jewellers

### Frontend Documentation

**Luxury Jewellery E-Commerce Platform**

Built using React • TypeScript • Material UI • AI Ready Architecture

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![MaterialUI](https://img.shields.io/badge/MUI-7-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-success)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Express](https://img.shields.io/badge/API-Express-black)
![Analytics](https://img.shields.io/badge/AI-Analytics-purple)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Goals](#-goals)
- [Features](#-features)
- [AI Commerce Features](#-ai-commerce-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-high-level-architecture)
- [Project Structure](#-project-structure)
- [Folder Description](#-folder-description)
- [Installation](#️-installation-guide)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Authentication](#-authentication-flow)
- [Routing / Protected Routes](#-protected-routes)
- [Core Flows](#-shopping-cart-flow)
- [Local Storage](#-local-storage)
- [API Integration](#-api-integration)
- [Analytics & AI Pipeline](#-analytics-module)
- [Performance Optimization](#-performance-optimization)
- [Security](#-security)
- [Deployment](#-deployment)
- [AI Roadmap](#-artificial-intelligence-roadmap)
- [Versioning & Roadmap](#-versioning-strategy)
- [Author](#-author)

---

## 📖 About the Project

**Sohan Lal And Sons Jewellers** is a modern, AI-ready luxury jewellery e-commerce platform built with **React, TypeScript, Material UI, Express**, and **MongoDB**.

This project is more than an e-commerce website — it is designed as an **intelligent commerce platform** capable of collecting behavioural analytics that will later power Machine Learning, Recommendation Systems, and Artificial Intelligence modules.

> This project is being developed as an **M.Tech AI & Data Science** project.

---

## 🎯 Goals

The platform focuses on:

- Luxury shopping experience
- Modern UI
- High performance
- AI-ready architecture
- Behaviour analytics
- Recommendation system
- Demand forecasting
- Customer segmentation

---

## 🚀 Features

### Authentication
- JWT login & register
- Secure logout
- Token persistence
- Protected routes
- Role-based authorization

### Customer Features
- Beautiful homepage
- Product collections & details
- Smart search & category filtering
- Wishlist & shopping cart
- Checkout & shipping
- Order history
- Notifications
- Responsive design

### Admin Features
- Dashboard
- Product management
- User management
- Order management
- Billing
- Shipping management
- Analytics dashboard *(upcoming)*

---

## 🧠 AI Commerce Features

This application is designed for artificial intelligence from the ground up.

**Current AI modules:**

| Status | Module |
|:---:|---|
| ✅ | Product view tracking |
| ✅ | Product click tracking |
| ✅ | Search tracking |
| ✅ | Cart behaviour |
| ✅ | Wishlist behaviour |
| ✅ | Checkout analytics |

**Future AI modules:**
- Recommendation engine
- Smart search
- Customer segmentation
- Demand forecasting
- AI shopping assistant

---

## 🛠 Technology Stack

### Frontend
React · TypeScript · Material UI · React Router · Axios · Context API · React Hooks

### Backend
Express.js · TypeScript · Prisma ORM · MongoDB · JWT Authentication · REST APIs

### AI Stack
Python · Pandas · NumPy · Scikit-learn · TensorFlow · PyTorch · FastAPI

---

## 🏗 High Level Architecture

```
React Frontend
      │
      ▼
Axios REST APIs
      │
      ▼
Express Backend
      │
      ▼
Behaviour Analytics
      │
      ▼
   MongoDB
      │
      ▼
Dataset Generator
      │
      ▼
  Python ML
      │
      ▼
Recommendation Engine
      │
      ▼
Personalized UI
```

---

## 📈 Behaviour Analytics

The platform continuously records user behaviour. Currently supported events:

- `PRODUCT_VIEW`
- `PRODUCT_CLICK`
- `SEARCH`
- `ADD_TO_CART`
- `REMOVE_FROM_CART`
- `ADD_TO_WISHLIST`
- `REMOVE_FROM_WISHLIST`
- `ORDER_CREATED`

These events will be used to train future Machine Learning models.

---

## 🎓 Academic Purpose

| | |
|---|---|
| **Program** | M.Tech — Artificial Intelligence & Data Science |
| **Institute** | Indian Institute of Technology Patna |

The architecture has been intentionally designed to support future research publications and AI models.

---

## 📁 Project Structure

```
frontend/
│
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   ├── logo192.png
│   ├── logo512.png
│   └── static/
│
├── src/
│   ├── api/
│   │   ├── axios.ts
│   │   ├── auth.ts
│   │   ├── analyticsService.ts
│   │   ├── product.ts
│   │   ├── order.ts
│   │   ├── shipping.ts
│   │   ├── adminUser.ts
│   │   ├── adminProduct.ts
│   │   ├── adminOrder.ts
│   │   └── ...
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── Admin/
│   │   │   ├── Dashboard/
│   │   │   ├── User/
│   │   │   ├── Product/
│   │   │   ├── Order/
│   │   │   ├── Shipping/
│   │   │   ├── Billing/
│   │   │   ├── Analytics/
│   │   │   └── Layout/
│   │   │
│   │   └── Users/
│   │       ├── Navbar/
│   │       ├── Banner/
│   │       ├── Categories/
│   │       ├── Collections/
│   │       ├── Product/
│   │       ├── Cart/
│   │       ├── Wishlist/
│   │       ├── Checkout/
│   │       ├── Feedback/
│   │       ├── Footer/
│   │       └── Common/
│   │
│   ├── contexts/
│   │   ├── AuthProvider.tsx
│   │   ├── CartProvider.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useCart.ts
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Admin/
│   │   ├── User/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Checkout/
│   │   ├── Wishlist/
│   │   ├── Orders/
│   │   └── Profile/
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── AdminRoute.tsx
│   │   └── UserRoute.tsx
│   │
│   ├── services/
│   │
│   ├── theme/
│   │   ├── index.ts
│   │   ├── palette.ts
│   │   └── typography.ts
│   │
│   ├── types/
│   │
│   ├── utils/
│   │   ├── imageOptimizer.ts
│   │   ├── formatter.ts
│   │   ├── helper.ts
│   │   └── validators.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── serviceWorkerRegistration.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📂 Folder Description

| Folder | Description |
|---|---|
| **public/** | Publicly accessible assets served directly by the web server (favicon, robots.txt, manifest, static images). |
| **src/** | The complete application source code. |
| **api/** | Handles all backend communication — authentication, products, orders, shipping, analytics, and Axios config. Keeps UI fully decoupled from backend logic. |
| **assets/** | Images, icons, fonts, and logos. No application logic should live here. |
| **components/** | Reusable UI components, split into `Admin/` and `Users/`. Business logic should be avoided here. |
| **contexts/** | Global state via React Context API — currently `Authentication` and `Shopping Cart`; `Wishlist`, `Notifications`, and `Theme` planned. |
| **hooks/** | Custom React hooks for reusable logic and cleaner components (e.g. `useAuth`, `useCart`). |
| **pages/** | Top-level screens composing multiple reusable components (Home, Product Details, Checkout, Wishlist, Login, Register). |
| **routes/** | Application routing — public, protected, and admin routes with role validation. |
| **services/** | Business logic that shouldn't live in UI components — recommended home for AI, recommendation, search, and analytics logic. |
| **theme/** | Centralized Material UI theme — colors, typography, breakpoints, component overrides. |
| **utils/** | Utility functions — image optimization, formatting, validation, helpers. |

### Key Files

| File | Responsibility |
|---|---|
| `axios.ts` | Global Axios instance — base URL, authorization header, JWT injection, global error handling. |
| `analyticsService.ts` | AI Behaviour Analytics service — tracks views, clicks, search, cart, wishlist, and checkout. Planned: batch upload, retry queue, offline analytics, session tracking. |

---

## 🏗 Frontend Layered Architecture

```
Presentation Layer
        ↓
      Pages
        ↓
Reusable Components
        ↓
Context Providers
        ↓
    API Layer
        ↓
Express Backend
        ↓
    Database
```

---

## 🎯 Design Principles

- Component-based architecture
- Separation of concerns
- Reusable components
- Type safety
- Context-driven state management
- API isolation
- AI-ready analytics
- Responsive design
- Maintainable folder structure

---

## ⚙️ Installation Guide

### 📋 Prerequisites

**Required**
- Node.js ≥ 20
- npm ≥ 10
- Git
- A modern web browser

**Recommended**
- Visual Studio Code
- ESLint extension
- Prettier extension
- GitHub Desktop

### 📦 Clone the Repository

```bash
git clone https://github.com/yourusername/SohanLalAndSonsJewellers.git
cd frontend
```

### 📦 Install Dependencies

```bash
npm install
```

### ▶ Start the Development Server

```bash
npm run dev
```

Runs at: `http://localhost:5173`

### 🏗 Production Build

```bash
npm run build
npm run preview
```

---

## 🌍 Environment Variables

Create a `.env` file in the project root.

**Development**
```env
VITE_API_BASE_URL=http://localhost:8000
```

**Production**
```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

> ⚠️ **Never commit** `.env`, secrets, or API keys.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Runs the production build locally |

---

## 🔐 Authentication Flow

```
User → Login Page → POST /auth/login → JWT Token
     → LocalStorage → AuthProvider → Protected Routes
     → Authenticated User
```

### JWT Storage

The JWT is stored in Local Storage under the key:

```
queues_token
```

Every request automatically includes:

```
Authorization: Bearer JWT_TOKEN
```

via Axios interceptors.

### 🔄 Axios Request Flow

```
React Component → API Function → Axios Instance
     → JWT Injection → Express Backend → MongoDB
```

### 👤 AuthProvider Responsibilities

- Login / Register / Logout
- Decode JWT
- Track current user
- Token validation
- Authentication state

---

## 🛡 Protected Routes

| Route | Access |
|---|---|
| `/admin/*` | Only when `adminRole = true` |
| `/profile`, `/orders`, `/wishlist`, `/checkout` | Requires valid login |

---

## 🛒 Shopping Cart Flow

```
Product → Add to Cart → CartProvider → Local Storage
        → Cart Drawer → Checkout
```

`CartProvider` manages: cart items, quantity, totals, stock validation, local storage sync, and analytics tracking.

---

## ❤️ Wishlist Flow

```
Product → Heart Button → Local Storage → Wishlist Page → Analytics Event
```

Tracked events: `ADD_TO_WISHLIST`, `REMOVE_FROM_WISHLIST`

---

## 🔍 Search Flow

```
Navbar → User Types → Product Filtering → Suggestions
       → Analytics Event → Backend Storage
```

Tracked event: `SEARCH` — stores query, source, timestamp, and user.

---

## 📦 Product Flow

```
Homepage → Product Card → PRODUCT_CLICK
         → Product Details → PRODUCT_VIEW → Wishlist / Cart
```

---

## 🛍 Checkout Flow

```
Cart → Shipping Selection → Courier Selection
     → Order Creation → ORDER_CREATED → WhatsApp Confirmation
```

---

## 🚚 Shipping Flow

```
Checkout → Shipping API → Available Couriers
         → Customer Selects Courier → Shipping Charge Added → Order Created
```

Current features: dynamic shipping, courier selection, shipping charges, delivery support.

---

## 🔔 Behaviour Analytics Flow

```
Visitor → Search → Click Product → View Product
        → Wishlist → Cart → Checkout → Order → MongoDB Analytics
```

This behavioural data is the foundation for future recommendation engines, customer segmentation, demand forecasting, and AI models.

---

## 💾 Local Storage

| Key | Purpose |
|---|---|
| `queues_token` | JWT token |
| `sl_cart` | Shopping cart |
| `sls_wishlist` | Wishlist |
| `cached_products` | Offline product cache |

**Benefits:** faster loading, offline experience, session persistence.

---

## 🎯 Frontend Responsibilities

The frontend is responsible for user experience, state management, API communication, analytics tracking, authentication, the shopping experience, and responsive UI. Business logic remains inside the backend.

---

## 📡 API Integration

The frontend communicates with the backend using RESTful APIs, all centralized inside `src/api/`.

**Benefits:** single API layer, easier maintenance, cleaner components, reusable functions, JWT injection, better error handling.

### 🌐 API Architecture

```
React Component → API Layer → Axios Instance
     → Express Backend → Prisma ORM → MongoDB
```

### 📁 API Modules

| Module | Responsibility |
|---|---|
| `auth.ts` | Authentication APIs |
| `product.ts` | Product management |
| `order.ts` | Order APIs |
| `shipping.ts` | Shipping APIs |
| `analyticsService.ts` | Behaviour analytics |
| `axios.ts` | Axios configuration |

### 🔐 Authentication APIs

**Login**
```
POST /auth/login
```
```json
// Request
{
  "email": "user@gmail.com",
  "password": "********"
}
```
```json
// Response
{
  "token": "JWT_TOKEN"
}
```

**Register**
```
POST /auth/register
```

**Current User**
```
GET /auth/profile
Authorization: Bearer JWT_TOKEN
```

### 💎 Product APIs

```
GET /product          # Supports search, category filter, pagination
GET /product/:id       # Product details
```

### 📦 Order APIs

**Create Order**
```
POST /order
```
```json
{
  "items": [ ... ],
  "shippingCharge": 100,
  "courierId": "..."
}
```

**User Orders**
```
GET /order/my-orders
```

### 🚚 Shipping APIs

**Current:** courier list, shipping charges, delivery estimate
**Future:** shipment tracking, delivery status

---

## 📊 Analytics Module

The frontend sends user behaviour to the backend.

```
POST /analytics/track
```

```json
{
  "eventType": "PRODUCT_VIEW",
  "productId": "...",
  "page": "/product/123",
  "metadata": {
    "productName": "Ring",
    "price": 2500
  }
}
```

### 📈 Supported Events

| Event | Description |
|---|---|
| `PRODUCT_VIEW` | Product page opened |
| `PRODUCT_CLICK` | Product card clicked |
| `SEARCH` | Search performed |
| `ADD_TO_CART` | Added to shopping cart |
| `REMOVE_FROM_CART` | Removed from cart |
| `ADD_TO_WISHLIST` | Added to wishlist |
| `REMOVE_FROM_WISHLIST` | Removed from wishlist |
| `ORDER_CREATED` | Successful checkout |

### 🔄 Event Flow

```
Homepage → Search → Product Click → Product View
         → Wishlist → Cart → Checkout → Order Created → Analytics Database
```

### 📊 Sample Analytics Payload

```json
{
  "eventType": "ADD_TO_CART",
  "userId": "...",
  "productId": "...",
  "page": "/product/123",
  "metadata": {
    "productName": "Ring",
    "price": 2500,
    "quantity": 1
  }
}
```

---

## 🤖 AI-Ready Architecture

**Current**
```
User → Behaviour Events → MongoDB
```

**Future**
```
MongoDB → Dataset Generator → CSV → Pandas
        → Scikit-learn → Recommendation Engine → Frontend
```

### 🧠 Machine Learning Pipeline (Planned Use Cases)

- Product recommendation
- Similar products
- Customer segmentation
- Purchase prediction
- Demand forecasting
- Trending products

### 📈 Recommendation Flow (Example)

```
User → Viewed Ring → Viewed Necklace → Added Necklace
     → Purchased Necklace → Recommendation Engine → Matching Earrings
```

### 📉 Customer Behaviour Funnel

```
SEARCH → PRODUCT_CLICK → PRODUCT_VIEW
       → ADD_TO_WISHLIST → ADD_TO_CART → ORDER_CREATED
```

The funnel enables conversion analysis and drop-off detection.

### Behaviour Tracking Details

| Area | Currently Tracked | Planned |
|---|---|---|
| **Cart** | Product, quantity, price, SKU, timestamp | Cart value, abandonment prediction |
| **Wishlist** | Favourite products, preferences, removals | Recommendation input |
| **Search** | Query, source, timestamp | Suggestions, semantic search, AI search |
| **Orders** | Products, quantity, final amount, shipping, courier | Repeat purchase prediction, CLV, market basket analysis |

---

## 🔌 Error Handling

- Try/catch throughout the API layer
- Axios error interceptors
- Unauthorized request handling
- Session expiry detection
- Graceful user feedback

**Planned:** global error boundary, toast notifications, crash reporting.

---

## 📋 API Design Principles

RESTful APIs · Stateless communication · JSON responses · JWT authorization · Reusable API functions · Centralized configuration

---

## 🚀 Performance Optimization

- Lazy component rendering
- Image optimization
- Context API state management
- Local storage caching
- Memoization (`useMemo`, `useCallback`)
- Minimal re-render strategy
- API layer separation

### ⚡ Rendering Strategy

`useMemo()` · `useCallback()` · Context separation · Controlled components · State isolation

**Benefits:** faster UI, lower CPU usage, better mobile performance.

### 🖼 Image Optimization

**Current:** optimized product images, responsive images, lazy-loading ready, placeholder images
**Future:** Cloudinary transformations, WebP images, CDN support

### 📱 Responsive Design

Designed mobile-first, supporting mobile, tablet, laptop, and desktop using Material UI breakpoints: `xs` `sm` `md` `lg` `xl`

### 🎨 UI Design Philosophy

Clean layout · Premium typography · Elegant colors · Minimalistic design · High readability · Spacious layout

---

## 🔒 Security

### Current Features
- JWT authentication
- Protected routes
- Admin authorization
- Axios authorization header
- Secure API calls
- Token validation
- Session handling

### 🔐 Authentication Security Flow

```
User Login → JWT Generated → Local Storage
           → Axios → Backend Verification → Authorized Request
```

**Future:** refresh tokens, secure cookies, OAuth login, MFA authentication

### 🛡 Authorization

| Role | Access |
|---|---|
| Customer | Standard customer routes |
| Administrator | `/admin/*` routes |

Protected routes: `/admin`, `/profile`, `/orders`, `/checkout`

---

## 📊 Logging & Testing

**Logging** — Current: console logging (development). Future: Sentry, Application Insights, centralized logging.

**Testing** — Current: manual testing. Future: Jest (unit), React Testing Library (component), Playwright/Cypress (E2E).

---

## 🌐 Deployment

| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

**Future:** Docker, Kubernetes, Nginx

```bash
npm run build     # Generate production build
npm run preview   # Preview locally
# Deploy via Vercel
```

### 📊 Monitoring

**Recommended:** Vercel Analytics, Google Analytics, Microsoft Clarity
**Future:** AI dashboard, behaviour dashboard

---

## 📋 Coding Standards

TypeScript strict mode · Functional components · Hooks-based architecture · Component reusability · Single responsibility principle · Clean folder structure · REST API standards · Modular development

## ♿ Accessibility

**Current:** semantic HTML, Material UI accessibility, keyboard navigation ready
**Future:** screen reader support, ARIA labels, WCAG compliance

## 🌍 Browser Support

Google Chrome · Microsoft Edge · Mozilla Firefox · Safari · Brave

## 📈 Scalability

The frontend architecture supports future modules — AI recommendation engine, AI search, customer segmentation, demand forecasting, analytics dashboard, and inventory prediction — without requiring major architectural changes.

---

## 🤖 Artificial Intelligence Roadmap

This project is designed as an **AI-Powered Commerce Platform** for academic research and real-world deployment. The current implementation focuses on collecting high-quality behavioural data; future versions will transform this data into Machine Learning models capable of predicting customer behaviour and improving the shopping experience.

### 🧠 Machine Learning Pipeline

```
Customer → Frontend Behaviour → Analytics Events → Express Backend
        → MongoDB → Dataset Generator → CSV → Pandas
        → Feature Engineering → Machine Learning → FastAPI
        → Recommendation API → React Frontend
```

### 📊 Behaviour Dataset

```
SEARCH → PRODUCT_CLICK → PRODUCT_VIEW
       → ADD_TO_WISHLIST → REMOVE_FROM_WISHLIST
       → ADD_TO_CART → REMOVE_FROM_CART → ORDER_CREATED
```

### 🤖 Planned AI Modules

| Module | Details |
|---|---|
| **Recommendation Engine** | Based on user history, similar customers, shopping behaviour, purchase history |
| **Customer Segmentation** | Algorithms: K-Means, DBSCAN — segments: VIP, new, returning, high-value customers |
| **Demand Forecasting** | Predicts product demand, seasonal trends, inventory needs — Prophet, ARIMA, LSTM |
| **AI Search** | Semantic search, similar products, query understanding, NLP, typo correction |
| **Smart Homepage** | Recently viewed, similar products, trending products, frequently bought together |
| **AI Shopping Assistant** | Product recommendation, order status, jewellery suggestions, FAQs, natural language search |

### 📈 Recommendation Architecture

```
User → Behaviour → MongoDB → Feature Engineering
     → ML Model → Top Products → Recommendation API → Frontend
```

### 📚 Research Paper Potential

**Possible topics:** AI-powered jewellery recommendation system · Behaviour-based recommendation · Customer purchase prediction · Smart retail analytics · AI commerce platform · Behaviour analytics using MERN

**Potential publication targets:** IEEE · Springer · Scopus-indexed journals

---

## 🎓 Academic Information

| | |
|---|---|
| **Degree** | Master of Technology |
| **Specialization** | Artificial Intelligence & Data Science |
| **Institute** | Indian Institute of Technology Patna |
| **Research Areas** | AI, Machine Learning, Recommendation Systems, Customer Analytics, Data Science |

---

## 🏗 Software Design Principles

SOLID principles · Separation of concerns · Component-based architecture · Reusable components · Modular development · Clean code · RESTful APIs · Scalable folder structure

---

## 🔄 Versioning Strategy

### v1.0 — ✅ Completed
Authentication · Product module · Wishlist · Cart · Checkout · Shipping · Analytics

### v2.0 — Upcoming
Analytics dashboard · Recommendation engine · AI search · Smart homepage

### v3.0 — Upcoming
Demand forecasting · Customer segmentation · AI assistant

---

## 🗺 Development Roadmap

| Phase | Focus | Status |
|---|---|---|
| **Phase 1** | Authentication, Product, Cart, Wishlist, Checkout, Shipping, Behaviour Analytics | ✅ Complete |
| **Phase 2** | Analytics dashboard — charts, top products, top searches, conversion funnel | 🔜 Planned |
| **Phase 3** | Machine learning — dataset generator, recommendation engine, customer segmentation | 🔜 Planned |
| **Phase 4** | AI — search, smart recommendation, personalized homepage, AI assistant | 🔜 Planned |

---

## 🤝 Contributing

Currently this project is maintained privately. Future collaboration guidelines:

1. Fork the repository
2. Create a branch
3. Commit changes
4. Push the branch
5. Open a pull request

---

## 📦 Deployment Architecture

```
Frontend → Vercel → Express Backend → Render
         → MongoDB Atlas → Cloudinary
         → Analytics Module → Future AI Services
```

---

## 🙏 Acknowledgements

Special thanks to the React team, Material UI, Prisma, MongoDB, Express.js, TypeScript, and the open-source community.

---

## 📄 License

**Private & Proprietary** — developed exclusively for **Sohan Lal And Sons Jewellers**. Unauthorized distribution or commercial use without permission is prohibited.

---

## 👨‍💻 Author

**Hariom Verma**
M.Tech — Artificial Intelligence & Data Science
Indian Institute of Technology Patna

**Areas of Interest:** Artificial Intelligence · Machine Learning · Deep Learning · Recommendation Systems · MERN Stack · Data Science

---

## 🌟 Final Notes

This project is more than a traditional e-commerce application — it is a complete **AI-Ready Commerce Platform** combining React, TypeScript, Express, Prisma, MongoDB, behaviour analytics, machine learning, and artificial intelligence to create a scalable, production-ready research platform suitable for both industrial deployment and academic research.

<div align="center">

### ⭐ Thank You ⭐

If you found this project useful, consider giving it a ⭐ on GitHub.

*Made with ❤️ by Hariom Verma*

</div>
