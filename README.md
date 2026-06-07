# 💧 Suqya API

RESTful backend for the **Suqya** water donation platform — connecting donors with mosques in need of clean water.

Built with **Node.js + Express + MongoDB (Mongoose)**, deployed on Render.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Node.js + Express 5 | Web framework |
| MongoDB + Mongoose | Database & ODM |
| JWT (jsonwebtoken) | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| cors | Cross-origin requests |
| nodemon | Development server |

---

## 📁 Project Structure

```
suqya-api/
├── index.js               # App entry point, routes registration
├── models/
│   ├── db.js              # MongoDB connection
│   ├── User.js            # User schema (bcrypt pre-save hook)
│   ├── Request.js         # Donation request schema
│   ├── Mosqe.js           # Mosque schema
│   ├── City.js            # City schema
│   └── Role.js            # Role schema
├── controllers/
│   ├── user.controller.js     # register, login
│   ├── request.controller.js  # create, getByUserId, getAll
│   ├── mosqe.controller.js    # addMosqe
│   ├── city.controller.js
│   └── role.controller.js
├── routes/
│   ├── user.route.js
│   ├── request.route.js
│   ├── mosqe.route.js
│   ├── city.route.js
│   └── role.route.js
└── middlewares/
    ├── authintication.js  # JWT verification
    └── authorization.js   # Role-based access control
```

---

## 🔌 API Endpoints

Base URL: `https://suqya-api.onrender.com/api/v1`

### 👤 Users
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/users/register` | ❌ | Register a new user |
| POST | `/users/login` | ❌ | Login, returns JWT token |

### 📋 Requests
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/requests/create` | ✅ | Create a donation request |
| GET | `/requests/getByUserid` | ✅ | Get current user's requests |
| GET | `/requests/` | ✅ | Get all requests |

### 🕌 Mosques
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/mosqe/create` | ❌ | Add a new mosque |

### 🏙️ Cities
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| (see city.route.js) | `/cities` | — | City management |

### 🔑 Roles
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| (see role.route.js) | `/roles` | — | Role management |

---

## 🔐 Authentication

JWT-based. After login, include the token in every protected request:

```
Authorization: Bearer <token>
```

Token expires in **1 hour**.

---

## 🗄️ Data Models

### User
```js
{
  firstName, lastName, email, phoneNum,
  password,           // hashed with bcrypt
  role,               // ref: Role
  city                // ref: City
}
```

### Request
```js
{
  quantity,           // water amount
  user,               // ref: User
  mosque,             // ref: Mosque
  status,             // default: "Pending"
  isDeleted,          // soft delete flag
  createdAt, updatedAt
}
```

### Mosque
```js
{
  name,
  city    // ref: City
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone & Install

```bash
git clone https://github.com/aissar-eftaiha/Suqya-api.git
cd Suqya-api
npm install
```

### 2. Environment Variables

Create a `.env` file in the root:

```env
MONGO=mongodb+srv://<username>:<password>@cluster.mongodb.net/suqya
SECRET=your_jwt_secret_key
SALT=10
PORT=8000
```

> ⚠️ Never commit your `.env` file. Add it to `.gitignore`.

### 3. Run

```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:8000`

---

## ☁️ Deployment

Deployed on **Render**. Set the environment variables (`MONGO`, `SECRET`, `SALT`) in the Render dashboard under *Environment*.