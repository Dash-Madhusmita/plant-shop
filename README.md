# 🌿 GreenLeaf - E-Commerce Plant Shop

A full-stack **MERN (MongoDB, Express, React, Node)** application for buying and managing indoor and outdoor plants online.  
Built for **learning**, **portfolio showcasing**, and demonstrating **scalable web architecture**.

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
- [Author](#-author)
- [License](#-license)

---

## 🌱 About

**GreenLeaf** is a modern e-commerce platform for selling and managing indoor & outdoor plants.  
It’s a full-stack MERN project demonstrating real-world app architecture and clean code practices.

**Goals:**
- Learn REST API design using Express.js
- Practice database modeling in MongoDB
- Build a responsive React frontend
- Implement JWT-based authentication and admin control

---

## ⚙️ Tech Stack

### **Frontend**
- React.js
- React Router
- Axios
- Tailwind CSS / Material UI
- Redux Toolkit or Context API

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv, express-validator, morgan

### **Tools**
- Postman (API Testing)
- Git / GitHub
- Nodemon (Development)
- VS Code

---

## ✨ Features

### 👥 User
- Register and log in with JWT authentication
- Browse plants and filter by type, light, or price
- Add items to the cart and place orders
- View order history
- Leave reviews on plants

### 🧑‍🌾 Admin
- Manage users, products, and orders
- Add, update, or delete plants
- Manage inventory and stock

### 🌿 Plant Catalog
- Filter by type (Foliage, Succulent, etc.)
- Sort by price, popularity, or date added
- View detailed plant descriptions

---

## 🗂️ Project Structure

```bash
plant-shop/
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Plant.js
│   │   ├── User.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── plantRoutes.js
│   │   ├── userRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── reviewRoutes.js
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── redux/ or context/
    │   └── App.js
    └── package.json
🧾 Database Schemas
🌿 Plant Schema (Plant.js)
javascript
Copy code
const PlantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true },
  type: String,                 // Foliage, Succulent, Flowering, etc.
  light: String,                // Bright, indirect, or low light
  watering: String,             // Weekly, twice a week, etc.
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
👤 User Schema (User.js)
javascript
Copy code
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
🛒 Cart Schema (Cart.js)
javascript
Copy code
const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: Number,
  updatedAt: { type: Date, default: Date.now }
});
📦 Order Schema (Order.js)
javascript
Copy code
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  address: String,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});
⭐ Review Schema (Review.js)
javascript
Copy code
const ReviewSchema = new mongoose.Schema({
  plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});
🔗 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and get JWT token
GET	/api/users/profile	Get logged-in user profile
PUT	/api/users/profile	Update user profile

🌿 Plant Routes
Method	Endpoint	Description
GET	/api/plants	Get all plants
GET	/api/plants/:id	Get a single plant by ID
POST	/api/plants	Add a new plant (Admin only)
PUT	/api/plants/:id	Update plant details (Admin only)
DELETE	/api/plants/:id	Delete plant (Admin only)

🛒 Cart Routes
Method	Endpoint	Description
POST	/api/cart/add	Add item to cart
GET	/api/cart	Get user's cart
PUT	/api/cart/update/:itemId	Update item quantity
DELETE	/api/cart/:itemId	Remove item from cart

📦 Order Routes
Method	Endpoint	Description
POST	/api/orders	Create new order
GET	/api/orders/:id	Get order details
GET	/api/orders/user/:userId	Get user’s order history
PUT	/api/orders/:id/status	Update order status (Admin only)

⭐ Review Routes
Method	Endpoint	Description
POST	/api/reviews	Add new review
GET	/api/reviews/:plantId	Get all reviews for a plant
DELETE	/api/reviews/:id	Delete review (Admin or user)

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
Create a .env file inside the /server directory:

ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
🧠 System Design
Architecture
scss
Copy code
Frontend (React) → REST API (Express) → MongoDB (Database)
Data Flow
User interacts with React UI.

API requests are sent via Axios to Express routes.

Express controllers handle business logic.

MongoDB stores and retrieves data.

JWT handles authentication and authorization.

Design Patterns
MVC (Model-View-Controller)

Modular routes & controllers

Centralized error handling

Middleware-based authentication

🧩 Best Practices
✅ Use MVC structure

✅ Secure credentials in .env

✅ Hash passwords with bcrypt

✅ Use JWT for authentication

✅ Validate input using express-validator

✅ Implement centralized error handling

✅ Add pagination and search filters

✅ Handle CORS properly

✅ Follow RESTful API design

🚀 Future Improvements
 Payment Gateway (Stripe / Razorpay)

 Wishlist / Favorites

 Admin dashboard with analytics

 Product tagging & category pages

 Cloud storage for images (Cloudinary / AWS S3)

 Docker deployment

 Email notifications for orders

✨ Author
Your Name
📧 your.email@example.com
🔗 GitHub | LinkedIn

