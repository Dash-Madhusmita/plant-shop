import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

function Navbar() {
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
        <div className="nav-item">
          <Link to="/plants">Plant</Link>
        </div>
        <div className="nav-item">
          <Link to="/caretips">Care Tips</Link>
        </div>
        <div className="nav-item">
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
        <div className="nav-item">
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
