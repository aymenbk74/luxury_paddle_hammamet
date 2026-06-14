import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-item">
            <h2>About this activity</h2>
            <p>
              <strong>Free cancellation:</strong> Cancel up to 24 hours in advance for a full refund.
            </p>
            <p>
              <strong>Reserve now & pay later:</strong> Keep your travel plans flexible — book your spot and pay nothing today.
            </p>
            <p>
              <strong>Duration:</strong> 2 hours. Check availability to see starting times.
            </p>
            <p>
              <strong>Live tour guide:</strong> Our experienced guides speak French, English, Italian, Arabic, and Portuguese.
            </p>
            <p>
              <strong>Small group:</strong> Limited to 6 participants to ensure a personalized experience.
            </p>
          </div>

          <div className="about-item">
            <h3>Includes</h3>
            <p>
              This tour includes energy drinks, soft drinks, water, pizzas, sandwiches, and transport (optional). 
              Everything you need for a comfortable and enjoyable paddleboarding experience.
            </p>
          </div>

          <div className="about-item">
            <h3>Not suitable for</h3>
            <p>
              This activity is not suitable for people with altitude sickness or individuals over 70 years of age. 
              If you have any medical concerns, please contact us in advance.
            </p>
          </div>

          <div className="about-item">
            <h3>What to bring</h3>
            <p>
              Please bring a towel and beachwear. We provide all paddleboarding equipment, but personal comfort items 
              are essential for enjoying your experience.
            </p>
          </div>

          <div className="about-item">
            <h3>Meeting point</h3>
            <p>
              We meet at <strong>The Medina</strong>. 
              <a href="https://maps.google.com/?q=@36.4040068,10.568994799999984" target="_blank" rel="noopener noreferrer" className="maps-link">
                Open in Google Maps →
              </a>
            </p>
          </div>

          <div className="about-item">
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
}
