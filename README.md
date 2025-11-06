# 🌿 GreenLeaf - E-Commerce Plant Shop

A full-stack MERN (MongoDB, Express, React, Node) application for buying and managing indoor and outdoor plants online.  
Built for learning, portfolio presentation, and demonstrating scalable web app architecture.

---

## 📋 Table of Contents
- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Database Schemas](#-database-schemas)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [System Design](#-system-design)
- [Best Practices](#-best-practices)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## 🌱 About

**GreenLeaf** is a responsive e-commerce web application where users can browse, search, and purchase plants.  
The goal is to demonstrate **end-to-end full-stack development** using modern technologies and best practices.

**Key Objectives:**
- Build RESTful APIs using Node.js & Express.
- Manage data using MongoDB & Mongoose.
- Create a responsive React frontend.
- Implement authentication, authorization, and admin controls.

---

## ⚙️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS / Material UI
- Redux Toolkit / Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv, express-validator, morgan

### Tools
- Postman (API Testing)
- Git / GitHub
- Nodemon (Development)
- VS Code

---

## ✨ Features

### 👥 User
- Register and log in using JWT authentication.
- Browse all plants with filters and search.
- Add plants to the shopping cart.
- Place and view orders.
- Write and view reviews.

### 🧑‍🌾 Admin
- Add, edit, or delete plant products.
- Manage user accounts and orders.
- Update stock levels and product visibility.

### 🌿 Plants
- Filter by type (Foliage, Flowering, Succulent, etc.).
- Filter by light or watering requirement.
- Sort by price or popularity.

---

## 🗂️ Project Structure

plant-shop/
│
├── server/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ ├── Plant.js
│ │ ├── User.js
│ │ ├── Cart.js
│ │ ├── Order.js
│ │ └── Review.js
│ ├── routes/
│ │ ├── plantRoutes.js
│ │ ├── userRoutes.js
│ │ ├── cartRoutes.js
│ │ ├── orderRoutes.js
│ │ └── reviewRoutes.js
│ ├── controllers/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
└── client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── context/ or redux/
│ └── App.js
└── package.json

yaml
Copy code

---

## 🧾 Database Schemas

### 🌿 Plant Schema (`Plant.js`)
```javascript
{
  name: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true },
  type: String,                 // Foliage, Succulent, Flowering, etc.
  light: String,                // Bright, indirect, low light
  watering: String,             // Weekly, twice a week, etc.
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}
👤 User Schema (User.js)
javascript
Copy code
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}
🛒 Cart Schema (Cart.js)
javascript
Copy code
{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: Number,
  updatedAt: { type: Date, default: Date.now }
}
📦 Order Schema (Order.js)
javascript
Copy code
{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  address: String,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
}
⭐ Review Schema (Review.js)
javascript
Copy code
{
  plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
}
🔗 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and get JWT token
GET	/api/users/profile	Get logged-in user details
PUT	/api/users/profile	Update user profile

🌿 Plant Routes
Method	Endpoint	Description
GET	/api/plants	Get all plants
GET	/api/plants/:id	Get a specific plant
POST	/api/plants	Add a new plant (Admin only)
PUT	/api/plants/:id	Update plant details (Admin only)
DELETE	/api/plants/:id	Delete a plant (Admin only)

🛒 Cart Routes
Method	Endpoint	Description
POST	/api/cart/add	Add item to cart
GET	/api/cart	Get current user's cart
PUT	/api/cart/update/:itemId	Update cart item quantity
DELETE	/api/cart/:itemId	Remove item from cart

📦 Order Routes
Method	Endpoint	Description
POST	/api/orders	Create new order
GET	/api/orders/:id	Get order details
GET	/api/orders/user/:userId	Get user’s order history
PUT	/api/orders/:id/status	Update order status (Admin)

⭐ Review Routes
Method	Endpoint	Description
POST	/api/reviews	Add a new review
GET	/api/reviews/:plantId	Get all reviews for a plant
DELETE	/api/reviews/:id	Delete a review (Admin or user)

🧑‍💻 Installation & Setup
1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/yourusername/greenleaf-plantshop.git
cd greenleaf-plantshop
2️⃣ Setup Backend
bash
Copy code
cd server
npm install
npm run dev
3️⃣ Setup Frontend
bash
Copy code
cd client
npm install
npm start
🔐 Environment Variables
Create a .env file in /server directory:

ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
🧠 System Design
Architecture:
Frontend (React) → API Layer (Express) → Database (MongoDB)

Flow:

User interacts with React UI.

API requests sent via Axios to Express routes.

Express controllers handle logic and talk to MongoDB using Mongoose.

JWT manages authentication.

Responses are sent back to frontend for rendering.

Key Design Patterns:

MVC (Model-View-Controller)

Modular route/controller structure

Centralized error handling

Middleware-based authentication

🧩 Best Practices
✅ Follow MVC structure
✅ Use environment variables for secrets
✅ Use bcrypt for password hashing
✅ Implement JWT authentication
✅ Validate all inputs using express-validator
✅ Centralize error handling
✅ Keep frontend & backend decoupled
✅ Use pagination and filtering for product list
✅ Handle CORS properly

🚀 Future Improvements
✅ Payment Gateway (Stripe or Razorpay)

✅ Wishlist feature

✅ Admin dashboard with analytics

✅ Product categories & tagging

✅ Cloud storage for images (Cloudinary / AWS S3)

✅ Deployment with Docker or Render

✨ Author
Your Name
📧 your.email@example.com
🔗 GitHub | LinkedIn






