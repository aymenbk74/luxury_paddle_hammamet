import { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    tourType: 'sunrise-paddle',
    participants: '1',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking! We will contact you soon to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      tourType: 'sunrise-paddle',
      participants: '1',
      message: ''
    });
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <div className="booking-wrapper">
          <div className="booking-info">
            <h2>Ready to Book Your Adventure?</h2>
            <p>Fill out the form below and our team will get back to you within 24 hours to confirm your reservation.</p>
            
            <div className="info-boxes">
              <div className="info-box">
                <span className="info-icon">🕐</span>
                <h3>Quick Response</h3>
                <p>Confirmation within 24 hours</p>
              </div>
              <div className="info-box">
                <span className="info-icon">💳</span>
                <h3>Flexible Payment</h3>
                <p>Multiple payment options available</p>
              </div>
              <div className="info-box">
                <span className="info-icon">❓</span>
                <h3>Questions?</h3>
                <p>Call us at +216 123 456 789</p>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="participants">Number of Participants *</label>
                <select
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="tourType">Select Tour *</label>
              <select
                id="tourType"
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
              >
                <option value="sunrise-paddle">🌅 Sunrise Paddle - $45</option>
                <option value="coastal-explorer">🏖️ Coastal Explorer - $65</option>
                <option value="adventure-quest">⛵ Adventure Quest - $95</option>
                <option value="sunset-romance">🌇 Sunset Romance - $55</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your experience level, any special requests, or questions..."
                rows="4"
              ></textarea>
            </div>

            <div className="form-terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            <button type="submit" className="submit-btn">Reserve Your Tour Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
