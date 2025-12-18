# 🛒 College E-Commerce Store (MERN Stack)

A Full-Stack E-Commerce application built using MongoDB, Express.js, React, and Node.js. This project features user authentication, product management, a shopping cart, and a secure checkout process.

## 🚀 Features

* **User Authentication:** Secure Login and Registration using JWT (JSON Web Tokens) and Bcrypt for password hashing.
* **Product Catalog:** Dynamic product display fetched from a MongoDB database.
* **Shopping Cart:** Add and remove items from the cart with real-time total calculation.
* **Checkout System:** Saves orders to the database and links them to the logged-in user.
* **Protected Routes:** Users must be logged in to place orders.
* **Persistent Login:** Keeps users logged in even after refreshing the page (using LocalStorage).

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router, Axios, Vite.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB (Mongoose ODM).
* **Security:** JWT, Bcryptjs, CORS.

---

## ⚙️ Installation & Setup

### 1. Backend Setup (Server)
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/college-ecommerce
JWT_SECRET=mysecretkey123


🧪 API Endpoints

GET	  |  /api/products   	|Fetch all products
POST  |	/api/users/register	|Register a new user
POST  |	/api/users/login	|Login user & get Token
POST  |	/api/orders	        |Place a new order (Requires Login)
