import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-section">
            <h2>About this activity</h2>
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <div>
                  <h3>Free cancellation</h3>
                  <p>Cancel up to 24 hours in advance for a full refund</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">💳</span>
                <div>
                  <h3>Reserve now & pay later</h3>
                  <p>Keep your travel plans flexible — book your spot and pay nothing today.</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">⏱️</span>
                <div>
                  <h3>Duration 2 hours</h3>
                  <p>Check availability to see starting times</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">👤</span>
                <div>
                  <h3>Live tour guide</h3>
                  <p>French, English, Italian, Arabic, Portuguese</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">👥</span>
                <div>
                  <h3>Small group</h3>
                  <p>Limited to 6 participants</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-columns">
            <div className="about-column">
              <h3>Includes</h3>
              <ul className="includes-list">
                <li>✓ Energy drinks</li>
                <li>✓ Soft drinks</li>
                <li>✓ Water</li>
                <li>✓ Pizzas</li>
                <li>✓ Sandwiches</li>
                <li>✓ Transport (if you want, of course)</li>
              </ul>
            </div>

            <div className="about-column">
              <h3>Not suitable for</h3>
              <ul className="not-suitable-list">
                <li>✗ People with altitude sickness</li>
                <li>✗ People over 70 years</li>
              </ul>
            </div>

            <div className="about-column">
              <h3>What to bring</h3>
              <ul className="bring-list">
                <li>→ Towel</li>
                <li>→ Beachwear</li>
              </ul>
            </div>
          </div>

          <div className="about-section">
            <h3>Meeting point</h3>
            <div className="meeting-point">
              <p className="location">The Medina</p>
              <a href="https://maps.google.com/?q=@36.4040068,10.568994799999984" target="_blank" rel="noopener noreferrer" className="maps-link">
                📍 Open in Google Maps
              </a>
            </div>
          </div>

          <div className="about-section">
            <h3>Important information</h3>
            <p className="info-text">
              Please ensure you have all necessary equipment and meet the physical requirements for this activity. 
              Our guides will provide detailed instructions at the meeting point. In case of any medical conditions, 
              please inform us in advance so we can provide appropriate accommodations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
