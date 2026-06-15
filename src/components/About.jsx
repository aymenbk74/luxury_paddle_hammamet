import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          
          {/* Main heading section */}
          <div className="about-section">
            <h2>About this activity</h2>
            
            {/* These first lines are now neatly arranged inside their own distinct cards */}
            <div className="about-columns" style={{ marginBottom: '3rem' }}>
              <div className="about-column">
                <p><strong>Free cancellation:</strong> Cancel up to 24 hours in advance for a full refund.</p>
              </div>
              <div className="about-column">
                <p><strong>Reserve now & pay later:</strong> Keep your travel plans flexible — book your spot and pay nothing today.</p>
              </div>
              <div className="about-column">
                <p><strong>Duration:</strong> 2 hours. Check availability to see starting times.</p>
              </div>
              <div className="about-column">
                <p><strong>Live tour guide:</strong> Our experienced guides speak French, English, Italian, Arabic, and Portuguese.</p>
              </div>
              <div className="about-column">
                <p><strong>Small group:</strong> Limited to 6 participants to ensure a personalized experience.</p>
              </div>
            </div>
          </div>

          {/* Logistics and Details Layer */}
          <div className="about-columns2">
            <div className="about-column">
              <h3>Includes</h3>
              <p>
                This tour includes energy drinks, soft drinks, water, pizzas, sandwiches, and transport (optional). 
                Everything you need for a comfortable and enjoyable paddleboarding experience.
              </p>
            </div>

            <div className="about-column">
              <h3>Not suitable for</h3>
              <ul className="not-suitable-list">
                <li>This activity is not suitable for people with altitude sickness or individuals over 70 years of age.</li>
                <li>If you have any medical concerns, please contact us in advance.</li>
              </ul>
            </div>

            <div className="about-column">
              <h3>What to bring</h3>
              <p>
                Please bring a towel and beachwear. We provide all paddleboarding equipment, but personal comfort items 
                are essential for enjoying your experience.
              </p>
            </div>
          </div>

          {/* Meeting Point Box */}
          <div className="meeting-point">
            <p className="location">
              Meeting point: <strong>The Medina</strong>
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="maps-link">
              Open in Google Maps →
            </a>
          </div>

          {/* Important Info Alert Box */}
          <div className="info-text">
            <h3>Important information</h3>
            <p>
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