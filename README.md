# ✨ IrCosmetics - E-Commerce Cosmetic & Skin Care Platform

An elegant, fully responsive full-stack e-commerce web application specializing in cosmetics, skin care, makeup, and baby care products. Built using the **MERN (MongoDB, Express.js, React, Node.js)** stack and integrated with **Firebase** and **JWT** for secure authentication and authorization.

## 🔗 Live Links
- **Frontend Live Site:** [https://ir-cosmetics-client-site.vercel.app](https://ir-cosmetics-client-site.vercel.app)
- **Backend Server API:** [https://ir-server-site-1.onrender.com](https://ir-server-site-1.onrender.com)

---

## 🚀 Key Features

- **Product Categorization:** Dedicated pages and sections for Skin Care, Makeup, Baby Products, and general Cosmetics.
- **Dynamic Cart System:** Users can easily add items to the cart, view cart totals, delete items, or clear the entire cart.
- **Admin Dashboard:** Fully protected dashboard where administrators can:
  - Add, Update, and Delete products across all categories.
  - Manage user roles (Promote standard users to Admin).
  - View, confirm, and manage customer orders.
  - View and delete product reviews left by users.
- **Secure Authentication:** Implemented via Firebase for standard login/signup alongside JWT token verification for secure API routes.
- **Elegant UI:** Built using modern styling tools like Tailwind CSS and daisyUI for a complete responsive mobile-first grid layout.

---

## 🛠️ Tech Stack Used

### Frontend:
- **React.js** (Functional components, Hooks, and Router)
- **Tailwind CSS & daisyUI** (For UI components & glass-morphism effects)
- **SweetAlert2 (Swal)** (For beautiful interactive user alerts)
- **Axios / Fetch API** (For seamless server communication)

### Backend:
- **Node.js & Express.js** (RESTful API architecture)
- **MongoDB** (NoSQL Database for fast and reliable data transactions)
- **Firebase Admin SDK & jsonwebtoken (JWT)** (For multi-layered security and route protection)

---
## 🔐 Admin Dashboard Access Guide

This project features a secure dynamic Admin Role Management system. There are no hardcoded admin credentials. To access the Admin Dashboard, follow these steps:

### 1. Register a Standard User
Go to the Live Site or your Localhost server, and create a new account using the **Sign Up** form with your email and password.

### 2. Promote User to Admin via MongoDB (Atlas/Compass)
Since first-time users are registered as standard customers by default, you need to manually grant Admin privileges through the database:
1. Log into your **MongoDB Atlas Dashboard** or connect via **MongoDB Compass**.
2. Navigate to the `my_app` database and open the `users` collection.
3. Locate the document containing your registered email.
4. Update or add the `role` field and set its value to `"admin"`:
   ```json
   {
     "email": "your-email@example.com",
     "role": "admin"
   }
## 📦 Installation & Local Setup

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/tabassummoni/IrCosmetics-client-site.git](https://github.com/tabassummoni/IrCosmetics-client-site.git)
cd IrCosmetics-client-site

2.npm install

3. Set up Environment Variables
Create a .env file in the root directory and append the necessary configurations:

PORT=4000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret_key
FB_SERVICE_KEY=your_firebase_base64_encoded_json_key

4. Start the development server
Bash
npm start
