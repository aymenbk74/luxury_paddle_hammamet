import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews/average-rating');
        const data = await response.json();
        setAverageRating(data.averageRating || 0);
      } catch (error) {
        console.error('Failed to fetch average rating:', error);
      }
    };

    fetchAverageRating();
    // Refresh rating every 10 seconds
    const interval = setInterval(fetchAverageRating, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Beauty of Hammamet</h1>
        <p className="hero-subtitle">
          Experience unforgettable paddleboarding adventures with expert guides along Tunisia's most beautiful coastline
        </p>
        <div className="hero-buttons">
          <a href="#guides">
            <button className="btn btn-primary">Book Your Tour Today</button>
          </a>
          <a href="#about">
            <button className="btn btn-secondary">Learn More</button>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Happy Adventurers</span>
          </div>
          <div className="stat">
            <span className="stat-number">{averageRating > 0 ? `${averageRating}★` : '—'}</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">2</span>
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
