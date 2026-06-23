import { useState } from 'react';
import './Availability.css';

export default function Availability() {
  const [selectedDate, setSelectedDate] = useState('');

  // Single tour data
  const tourData = {
    name: '🏄‍♂️ Paddleboard Tour',
    price: '$30 per person',
    duration: '75 minutes',
    times: ['5:00 - 6:30', '6:30 - 8:00', '8:00 - 9:30','9:30 - 11:00', '11:00 - 12:30', '12:30 - 14:00', '14:00 - 15:30', '15:30 - 17:00', '17:00 - 18:30', '18:30 - 20:00']
  };

  // Get minimum date (today) and maximum date (30 days from today) for calendar
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  // Check if date is a Monday (unavailable)
  const isDateAvailable = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() !== 1; // Monday = 1
  };

  // Check if time is available (mock logic: some times might be unavailable)
  const isTimeAvailable = (time) => {
    // Simulate some unavailable times
    const unavailableTimes = ['9:30 AM', '2:30 PM'];
    return !unavailableTimes.includes(time);
  };

  const handleTimeClick = (time) => {
    if (isTimeAvailable(time)) {
      alert(`You selected ${tourData.name} at ${time}. Please fill out your details to complete the booking!`);
    }
  };

  return (
    <section id="availability" className="availability">
      <div className="container">
        <div className="availability-header">
          <h2>Check Tour Availability</h2>
          <p>Find the perfect time for your paddleboard adventure</p>
        </div>

        <div className="availability-wrapper">
          {/* Left side - Filters */}
          <div className="availability-filters">
            <div className="filter-group">
              <label htmlFor="date-picker">Select Date</label>
              <input
                type="date"
                id="date-picker"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getToday()}
                max={getMaxDate()}
                className="date-picker"
              />
            </div>

            {selectedDate && !isDateAvailable(selectedDate) && (
              <div className="warning-box">
                <p>⚠️ We're closed on Mondays. Please select another date.</p>
              </div>
            )}

            <div className="tour-details">
              <div className="detail-item">
                <span className="detail-label">Tour:</span>
                <span className="detail-value">{tourData.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">{tourData.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Price:</span>
                <span className="detail-value">{tourData.price}</span>
              </div>
            </div>
          </div>

          {/* Right side - Available Times */}
          <div className="availability-times">
            <div className="times-header">
              <h3>Available Times</h3>
              {selectedDate && (
                <p className="selected-date">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              )}
            </div>

            {!selectedDate && (
              <div className="no-selection">
                <p>👈 Select a date to view available times</p>
              </div>
            )}

            {selectedDate && !isDateAvailable(selectedDate) && (
              <div className="no-availability">
                <p>❌ We're closed on Mondays</p>
              </div>
            )}

            {selectedDate && isDateAvailable(selectedDate) && (
              <div className="times-grid">
                {tourData.times.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${isTimeAvailable(time) ? 'available' : 'unavailable'}`}
                    onClick={() => handleTimeClick(time)}
                    disabled={!isTimeAvailable(time)}
                  >
                    <span className="time">{time}</span>
                    {!isTimeAvailable(time) && <span className="badge">Booked</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Info boxes */}
        <div className="availability-info">
          <div className="info-box">
            <span className="info-icon">✓</span>
            <h4>Easy Booking</h4>
            <p>check availability and book your spot by contacting us on whatsapp</p>
          </div>
          <div className="info-box">
            <span className="info-icon">📱</span>
            <h4>Instant Booking</h4>
            <p>book now and pay later</p>
          </div>
          <div className="info-box">
            <span className="info-icon">🔄</span>
            <h4>Easy Rescheduling</h4>
            <p>Need to change your time? Reschedule anytime before 24 hours</p>
          </div>
          <div className="info-box">
            <span className="info-icon">💬</span>
            <h4>Support</h4>
            <p>Questions? We can help! Call us at +216 26 063 374</p>
          </div>
        </div>
      </div>
    </section>
  );
}
