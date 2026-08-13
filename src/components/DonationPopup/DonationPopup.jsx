import React, { useState, useEffect } from 'react';
import './DonationPopup.css';

const DonationPopup = ({ isOpen, onClose, data }) => {
  const [frequency, setFrequency] = useState('once'); // 'once' | 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showExitScreen, setShowExitScreen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFrequency('once');
      setSelectedAmount(null);
      setCustomAmount('');
      setShowExitScreen(false);
      setEmail('');
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleCloseClick = () => {
    setShowExitScreen(true); // X dabane pe exit screen dikhao
  };

  const handleFinalClose = () => {
    setShowExitScreen(false);
    onClose();
  };

  const handleRemindLater = () => {
    if (email.trim()) {
      console.log('Reminder Email:', email);
      // Yahan apna API call kar sakte ho
    }
    handleFinalClose();
  };

  const currentAmounts =
    frequency === 'once' ? data.amountsOnce : data.amountsMonthly;

  return (
    <div className="donation-overlay">
      <div className="donation-modal-wrapper">
        
        {/* ✅ X button ab cards ke bahar hai */}
        {!showExitScreen && (
          <button className="close-btn-outside" onClick={handleCloseClick}>
            ×
          </button>
        )}

        <div className="donation-modal">
          {/* LEFT SIDE */}
          <div className="donation-left">
            <div className="donation-image-wrapper">
              <img src={data.image} alt={data.title} className="donation-hero" />
            </div>

            <div className="donation-info">
              <div className="donation-logo">
                <span className="logo-text">MTJF</span>
              </div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={`donation-right ${showExitScreen ? 'exit-mode' : ''}`}>
            {!showExitScreen ? (
              <>
                <div className="donation-right-header">
                  <div className="secure-badge">
                    <span className="shield">🛡️</span> Secure donation
                  </div>
                  {/* ❌ Yahan se close button hata diya */}
                </div>

                {/* Tabs */}
                <div className="frequency-tabs">
                  <button
                    className={frequency === 'once' ? 'active' : ''}
                    onClick={() => {
                      setFrequency('once');
                      setSelectedAmount(null);
                    }}
                  >
                    Give once
                  </button>
                  <button
                    className={frequency === 'monthly' ? 'active' : ''}
                    onClick={() => {
                      setFrequency('monthly');
                      setSelectedAmount(null);
                    }}
                  >
                    ♥ Monthly
                  </button>
                </div>

                {/* Amounts */}
                <div className="amount-grid">
                  {currentAmounts.map((item) => (
                    <button
                      key={item.value}
                      className={`amount-btn ${selectedAmount === item.value ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedAmount(item.value);
                        setCustomAmount('');
                      }}
                    >
                      <span className="amount-value">{item.label}</span>
                      {item.desc && <span className="amount-desc">{item.desc}</span>}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="custom-amount">
                  <input
                    type="text"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />
                  <span className="currency">PKR</span>
                </div>

                <button className="add-comment">Add comment</button>

                <button className="btn-google-pay">G Pay</button>
                <button className="btn-primary">Donate with other methods</button>

                <div className="payment-icons">
                  <span>Visa</span>
                  <span>Mastercard</span>
                  <span>Amex</span>
                  <span>Discover</span>
                </div>
              </>
            ) : (
              /* EXIT SCREEN */
              <div className="exit-screen">
                <div className="exit-header">
                  <button className="back-btn" onClick={() => setShowExitScreen(false)}>
                    ←
                  </button>
                  <h3>Maybe next time?</h3>
                </div>

                <div className="exit-icon">🔔</div>

                <p className="exit-text">
                  Please leave your email address below, and we'll send you a gentle reminder later.
                </p>

                <input
                  type="email"
                  className="exit-email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button className="btn-primary" onClick={handleRemindLater}>
                  Remind me later
                </button>

                <button className="btn-secondary" onClick={handleFinalClose}>
                  No thanks
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPopup;