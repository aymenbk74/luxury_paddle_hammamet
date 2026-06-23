import { useState } from 'react';
import Admin from './Admin';
import './Header.css';

export default function Header() {
  const [adminOpen, setAdminOpen] = useState(false);

  const handleLogoClick = () => {
    setAdminOpen(true);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} title="Click for admin">
              <img className="logo-icon" src="src/assets/logo_paddle.jpg" alt="Luxury Paddle Logo" />
              <span className="logo-text">Luxury Paddle</span>
            </div>
            <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tours" className="nav-link">Tours</a>
            <a href="#guides" className="nav-link">Guides</a>
            <a href="#availability" className="nav-link">Availability</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#reviews" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </header>
      <Admin isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
    </>
  );
}
