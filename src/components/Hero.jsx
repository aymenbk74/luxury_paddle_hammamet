import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Beauty of Hammamet</h1>
        <p className="hero-subtitle">
          Experience unforgettable paddleboarding adventures with expert guides along Tunisia's most beautiful coastline
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Book Your Tour Today</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Adventurers</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Expert Guides</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="floating-card card-1">
          <span>🌊 Crystal Waters</span>
        </div>
        <div className="floating-card card-2">
          <span>☀️ Perfect Weather</span>
        </div>
        <div className="floating-card card-3">
          <span>🏖️ Beautiful Beaches</span>
        </div>
      </div>
    </section>
  );
}
