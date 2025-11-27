import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

function Navbar({ isLoggedIn, userInfo }) {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <div className="nav-logo">P</div>
          <span className="nav-title">
            Plant<span className="shop">Shop</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center">
        <div
          className={`${
            selectedPage === "plant" ? "selected-nav-item" : "nav-item"
          }`}
          onClick={() => setSelectedPage("plant")}
        >
          <Link to="/plants">Plant</Link>
        </div>
        <div
          className={`${
            selectedPage === "caretips" ? "selected-nav-item" : "nav-item"
          }`}
          onClick={() => setSelectedPage("caretips")}
        >
          <Link to="/caretips">Care Tips</Link>
        </div>
        <div
          className={`${
            selectedPage === "about" ? "selected-nav-item" : "nav-item"
          }`}
          onClick={() => setSelectedPage("about")}
        >
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search plants..."
        />
      </div>

      <div className="navbar-right">
        <div className="nav-item cart">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
        {isLoggedIn && (
          <div
            className={`${
              selectedPage === "admin-dashboard" ? "selected-nav-item" : "nav-item"
            }`}
            onClick={() => setSelectedPage("admin-dashboard")}
          >
            <Link to="/admin-dashboard">Admin</Link>
          </div>
        )}
        {isLoggedIn ? (
          <div className="nav-item user-greeting">
            Hello, {userInfo && userInfo.name ? userInfo.name : "User"}
          </div>
        ) : null}
        {isLoggedIn ? (
          <div
            className="nav-item user-greeting"
            onClick={() => {
              localStorage.removeItem("userInfo");
              window.location.reload();
            }}
          >
            Logout{" "}
          </div>
        ) : null}
        {!isLoggedIn && (
          <div
            className={`${
              selectedPage === "login" ? "selected-nav-item" : "nav-item"
            }`}
            onClick={() => setSelectedPage("login")}
          >
            <Link to="/login">Login</Link>
          </div>
        )}

        {!isLoggedIn && (
          <div
            className={`${
              selectedPage === "signup" ? "selected-nav-item" : "nav-item"
            }`}
            onClick={() => setSelectedPage("signup")}
          >
            <Link to="/signup">Sign Up</Link>
          </div>
        )}

        
      </div>
    </nav>
  );
}
export default Navbar;
