import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Luxury Paddle</h3>
            <p>We provide unforgettable paddleboarding experiences in the beautiful waters of Hammamet, Tunisia. Our expert guides are dedicated to making your adventure safe and memorable.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61590940465817" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/luxury_paddle_hammamet/" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#tours">Our Tours</a></li>
              <li><a href="#guides">Our Guides</a></li>
              <li><a href="#availability">Availability</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Hammamet, Tunisia</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+216 26 063 374</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <p>5 AM - 8 PM Daily only in summer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2026 Luxury Paddle. All rights reserved.</p>
          <p>Crafted with ❤️ for paddleboarding enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}
