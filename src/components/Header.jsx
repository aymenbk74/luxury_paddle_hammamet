import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <img className="logo-icon" src="src/assets/logo_paddle.jpg" alt="Luxury Paddle Logo" />
            <span className="logo-text">Luxury Paddle</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tours" className="nav-link">Tours</a>
            <a href="#guides" className="nav-link">Guides</a>
            <a href="#availability" className="nav-link">Availability</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </header>
  );
}
