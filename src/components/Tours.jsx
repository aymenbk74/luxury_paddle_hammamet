import './Tours.css';

export default function Tours() {
  return (
    <section id="tours" className="tours">
      <div className="container">
        <div className="tours-content">
          <div className="tours-image">
            <img src="src/assets/maps.png" alt="Paddleboarding in Hammamet" />
          </div>
          <div className="tours-text">
            <h2>Discover Our Paddleboarding Tours</h2>
            <p>
              Experience the crystal-clear waters of Hammamet with our expertly guided paddleboarding tours. 
              Whether you're a beginner looking for a relaxing morning paddle or an experienced adventurer seeking 
              challenging offshore expeditions, we have the perfect tour for you.
            </p>
            <p>
              Our team of certified guides will ensure your safety while sharing their deep knowledge of the Mediterranean 
              coast, local marine life, and the rich cultural heritage of Tunisia. Every tour is customized to match your 
              skill level and preferences.
            </p>
            <p>
              From sunrise paddles that paint the sky in golden hues to romantic sunset tours with champagne, 
              we create unforgettable memories on the water. All equipment is provided, including premium paddle boards, 
              safety gear, and refreshments to keep you energized throughout your adventure.
            </p>
            <button className="tours-btn">Browse Our Tours</button>
          </div>
        </div>
      </div>
    </section>
  );
}
