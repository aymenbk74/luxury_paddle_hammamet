import './Tours.css';

export default function Tours() {
  const tours = [
    {
      id: 1,
      title: 'Sunrise Paddle',
      duration: '3 hours',
      price: '$45',
      difficulty: 'Beginner',
      image: '🌅',
      description: 'Start your day with a magical sunrise paddling experience. Perfect for beginners and families.',
      includes: ['Paddle board', 'Life jacket', 'Professional guide', 'Snacks & water']
    },
    {
      id: 2,
      title: 'Coastal Explorer',
      duration: '5 hours',
      price: '$65',
      difficulty: 'Intermediate',
      image: '🏖️',
      description: 'Explore hidden coves and secluded beaches along Hammamet\'s pristine coastline.',
      includes: ['Paddle board', 'Life jacket', 'Professional guide', 'Lunch', 'Snorkeling gear']
    },
    {
      id: 3,
      title: 'Adventure Quest',
      duration: '7 hours',
      price: '$95',
      difficulty: 'Advanced',
      image: '⛵',
      description: 'Challenge yourself with advanced paddling techniques and explore remote areas. For experienced paddlers.',
      includes: ['Premium paddle board', 'Safety gear', 'Expert guide', 'Full meal', 'Photography service']
    },
    {
      id: 4,
      title: 'Sunset Romance',
      duration: '4 hours',
      price: '$55',
      difficulty: 'Beginner',
      image: '🌇',
      description: 'Romantic paddle during golden hour with views of the Mediterranean sunset. Includes champagne.',
      includes: ['Paddle board', 'Life jacket', 'Guide', 'Champagne', 'Cheese platter']
    }
  ];

  return (
    <section id="tours" className="tours">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Tours</h2>
          <p className="section-subtitle">Choose from our carefully curated paddleboarding experiences</p>
        </div>

        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">{tour.image}</div>
              <div className="tour-content">
                <div className="tour-header">
                  <h3>{tour.title}</h3>
                  <span className={`difficulty difficulty-${tour.difficulty.toLowerCase()}`}>
                    {tour.difficulty}
                  </span>
                </div>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-details">
                  <div className="detail">
                    <span className="detail-icon">⏱️</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">💰</span>
                    <span>{tour.price}</span>
                  </div>
                </div>
                <div className="tour-includes">
                  <h4>What's Included:</h4>
                  <ul>
                    {tour.includes.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
