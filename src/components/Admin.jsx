import { useState, useEffect } from 'react';
import './Admin.css';

export default function Admin({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [bookedSlots, setBookedSlots] = useState({});
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Admin credentials (in production, this would be validated on a server)
  const ADMIN_EMAIL = 'admin@luxurypaddle.com';
  const ADMIN_PASSWORD = 'admin123';

  const times = [
    '5:00 - 6:30',
    '6:30 - 8:00',
    '8:00 - 9:30',
    '9:30 - 11:00',
    '11:00 - 12:30',
    '12:30 - 14:00',
    '14:00 - 15:30',
    '15:30 - 17:00',
    '17:00 - 18:30',
    '18:30 - 20:00'
  ];

  // Load booked slots from API when date changes
  useEffect(() => {
    if (!isLoggedIn || !selectedDate) return;

    const fetchBookedSlots = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/booked-slots/${selectedDate}`);
        if (!response.ok) throw new Error('Failed to fetch slots');
        const slots = await response.json();
        const slotsMap = {};
        slots.forEach(slot => {
          if (slot.isBooked) {
            slotsMap[`${slot.date}-${slot.time}`] = true;
          }
        });
        setBookedSlots(slotsMap);
      } catch (error) {
        console.error('Failed to fetch booked slots:', error);
      }
    };

    fetchBookedSlots();
  }, [isLoggedIn, selectedDate]);

  const handleLogin = () => {
    setLoginError('');
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedDate('');
  };

  const toggleTimeSlot = async (time) => {
    if (!selectedDate) {
      alert('Please select a date first');
      return;
    }

    const key = `${selectedDate}-${time}`;
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/booked-slots/${selectedDate}/${time}`,
        { method: 'POST' }
      );

      if (!response.ok) throw new Error('Failed to toggle slot');

      const updatedSlot = await response.json();
      const updatedSlots = { ...bookedSlots };

      if (updatedSlot.isBooked) {
        updatedSlots[key] = true;
      } else {
        delete updatedSlots[key];
      }

      setBookedSlots(updatedSlots);
    } catch (error) {
      console.error('Failed to toggle slot:', error);
      alert('Failed to update slot. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <button className="admin-close-btn" onClick={onClose}>
          ✕
        </button>

        {!isLoggedIn ? (
          <div className="admin-login">
            <h2>Admin Panel</h2>
            <p className="admin-subtitle">Manage Time Slots</p>

            <div className="login-form">
              <div className="form-group">
                <label htmlFor="admin-email">Email</label>
                <input
                  type="email"
                  id="admin-email"
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>

              <div className="form-group">
                <label htmlFor="admin-password">Password</label>
                <input
                  type="password"
                  id="admin-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>

              {loginError && <div className="login-error">{loginError}</div>}

              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="admin-panel">
            <div className="admin-header">
              <h2>Time Slot Management</h2>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>

            <div className="admin-form-group">
              <label htmlFor="admin-date">Select Date</label>
              <input
                type="date"
                id="admin-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={getToday()}
                max={getMaxDate()}
              />
            </div>

            {selectedDate && (
              <div className="admin-slots">
                <h3>Time Slots for {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                <div className="slots-grid">
                  {times.map((time) => {
                    const key = `${selectedDate}-${time}`;
                    const isBooked = bookedSlots[key];
                    return (
                      <button
                        key={time}
                        className={`slot-button ${isBooked ? 'booked' : 'available'}`}
                        onClick={() => toggleTimeSlot(time)}
                      >
                        <span className="slot-time">{time}</span>
                        <span className="slot-status">
                          {isBooked ? '🔴 BOOKED' : '🟢 AVAILABLE'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
