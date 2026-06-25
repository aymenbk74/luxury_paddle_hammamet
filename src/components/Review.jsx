import { useState, useEffect } from 'react';
import './Review.css';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        const data = await response.json();
        setReviews(data.map(review => ({
          id: review._id,
          userName: review.userName,
          rating: review.rating,
          text: review.text,
          date: new Date(review.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })
        })));
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
    // Refresh reviews every 5 seconds
    const interval = setInterval(fetchReviews, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePublishReview = async () => {
    setError('');
    if (rating === 0 || userName.trim() === '' || reviewText.trim() === '') {
      alert('Please provide your name, a rating, and a review');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          rating,
          text: reviewText
        })
      });

      if (!response.ok) throw new Error('Failed to publish review');

      const newReview = await response.json();
      setReviews([{
        id: newReview._id,
        userName: newReview.userName,
        rating: newReview.rating,
        text: newReview.text,
        date: new Date(newReview.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }, ...reviews]);

      // ensure the newly published review is visible
      setVisibleCount((c) => Math.max(c, 5));

      setRating(0);
      setReviewText('');
      setUserName('');
      alert('Review published successfully!');
    } catch (err) {
      console.error('Error publishing review:', err);
      setError('Failed to publish review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-wrapper">
          <h2>Guest Reviews</h2>
          
          {/* Review Form */}
          <div className="review-form">
            <h3>Share Your Experience</h3>
            
            <div className="form-group">
              <label htmlFor="userName">Your Name</label>
              <input
                type="text"
                id="userName"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`star ${
                      star <= (hoveredRating || rating) ? 'active' : ''
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    type="button"
                  >
                    ★
                  </button>
                ))}
                <span className="rating-text">
                  {rating > 0 && `${rating} out of 5`}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reviewText">Your Review</label>
              <textarea
                id="reviewText"
                placeholder="Tell us about your paddleboard experience..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="5"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              className="publish-btn" 
              onClick={handlePublishReview}
              disabled={loading}
            >
              {loading ? 'Publishing...' : 'Publish Review'}
            </button>
          </div>

          {/* Reviews Display */}
          {reviews.length > 0 && (
            <div className="reviews-list">
              <h3>Recent Reviews ({reviews.length})</h3>
              {reviews.slice(0, visibleCount).map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <h4>{review.userName}</h4>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <div className="review-rating">
                      {'★'.repeat(review.rating)}
                      <span className="rating-number">({review.rating}/5)</span>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}

              {visibleCount < reviews.length && (
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    className="view-more"
                    onClick={() => setVisibleCount((c) => c + 5)}
                  >
                    View more reviews
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
