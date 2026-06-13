import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-icon">🏄‍♂️</span>
            <span className="logo-text">Luxury Paddle</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#tours" className="nav-link">Tours</a>
            <a href="#guides" className="nav-link">Guides</a>
            <a href="#booking" className="nav-link">Book Now</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </header>
  );
}
