import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h2>Stay Connected</h2>
        <p>
          Get plant care tips, new arrival notifications, and exclusive offers
          delivered to your inbox
        </p>
        <div className="footer-input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="footer-input"
          />
          <button className="footer-submit-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <div className="nav-logo">P</div>
          <span className="nav-title">
            Plant<span className="shop">Shop</span>
          </span>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
        </div>
        <div className="footer-links">
          <h3>Contact Us</h3>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
        </div>
      </div>
    </div>
  );
}
