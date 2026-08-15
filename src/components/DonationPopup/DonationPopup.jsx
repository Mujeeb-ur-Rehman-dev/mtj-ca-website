import React, { useState, useEffect } from 'react';
import { FaHeart, FaShieldAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './DonationPopup.css';

const DonationPopup = ({ isOpen, onClose, data }) => {
  const [frequency, setFrequency] = useState('once');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('PKR');
  const [designation, setDesignation] = useState('');
  const [showExitScreen, setShowExitScreen] = useState(false);
  const [email, setEmail] = useState('');

  // Comment popup
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [comment, setComment] = useState('');

  // Secure tooltip
  const [showSecureTooltip, setShowSecureTooltip] = useState(false);

  // Report problem popup
  const [showReportPopup, setShowReportPopup] = useState(false);
  const [reportText, setReportText] = useState('');
  const [reportConfirm, setReportConfirm] = useState(false);

  useEffect(() => {
    if (isOpen && data) {
      setFrequency('once');
      setSelectedAmount(null);
      setCustomAmount('');
      setCurrency('PKR');
      setDesignation(data.designationOptions?.[0]?.value || '');
      setShowExitScreen(false);
      setEmail('');
      setComment('');
      setShowCommentPopup(false);
      setShowSecureTooltip(false);
      setShowReportPopup(false);
      setReportText('');
      setReportConfirm(false);
    }
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  const handleCloseClick = () => setShowExitScreen(true);

  const handleFinalClose = () => {
    setShowExitScreen(false);
    onClose();
  };

  const handleRemindLater = () => {
    if (email.trim()) console.log('Reminder Email:', email);
    handleFinalClose();
  };

  // Only numbers allowed
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSelectAmount = (value) => {
    setSelectedAmount(value);
    setCustomAmount(value.toString());
  };

  const currentAmounts =
    frequency === 'once' ? data.amountsOnce : data.amountsMonthly;

  // Layout decision
  const isGridLayout =
    frequency === 'once'
      ? data.layoutOnce === 'grid'
      : data.layoutMonthly === 'grid';

  const layoutClass = isGridLayout ? 'amount-list--grid' : 'amount-list--vertical';

  const currencies = ['PKR', 'USD', 'EUR', 'GBP', 'CAD', 'AED'];

  return (
    <div className="donation-overlay">
      <div className="donation-modal-wrapper">
        {/* Close Button */}
        {!showExitScreen && (
          <button className="close-btn-outside" onClick={handleCloseClick}>
            <IoClose size={22} />
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
                    <FaShieldAlt color="#16a34a" size={16} />
                    <span>Secure donation</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="frequency-tabs">
                  <button
                    className={frequency === 'once' ? 'active' : ''}
                    onClick={() => {
                      setFrequency('once');
                      setSelectedAmount(null);
                      setCustomAmount('');
                    }}
                  >
                    Give once
                  </button>
                  <button
                    className={frequency === 'monthly' ? 'active' : ''}
                    onClick={() => {
                      setFrequency('monthly');
                      setSelectedAmount(null);
                      setCustomAmount('');
                    }}
                  >
                    <FaHeart color="#e11d48" size={13} style={{ marginRight: 5 }} />
                    Monthly
                  </button>
                </div>

                {/* Amounts */}
                <div className={`amount-list ${layoutClass}`}>
                  {currentAmounts.map((item) => (
                    <button
                      key={item.value}
                      className={`amount-btn ${selectedAmount === item.value ? 'selected' : ''}`}
                      onClick={() => handleSelectAmount(item.value)}
                    >
                      <span className="amount-value">{item.label}</span>
                      {data.showImpactText && item.desc && (
                        <span className="amount-desc">{item.desc}</span>
                      )}
                    </button>
                  ))}

                  {/* Other amount + Currency */}
                  <div
                    className={`amount-btn other-amount ${
                      !selectedAmount && customAmount ? 'selected' : ''
                    }`}
                  >
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Other amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                    <select
                      className="currency-select"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      {currencies.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Designation Dropdown */}
                {data.showDesignation && data.designationOptions && (
                  <div className="designation-wrapper">
                    <label className="designation-label">Designation</label>
                    <select
                      className="designation-select"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      {data.designationOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Extra Links (Dedicate + Add comment) */}
                <div className="extra-links">
                  {data.showDedicate && (
                    <>
                      <button className="extra-link">Dedicate this donation</button>
                      <span className="link-separator">·</span>
                    </>
                  )}
                  <button
                    className="extra-link"
                    onClick={() => setShowCommentPopup(true)}
                  >
                    Add comment
                  </button>
                </div>

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

        {/* Bottom Links */}
        {!showExitScreen && (
          <div className="donation-footer-links">
            <button
              className="footer-link"
              onClick={() => setShowSecureTooltip(!showSecureTooltip)}
            >
              Is my donation secure?
            </button>
            <span className="footer-dot">·</span>
            <button
              className="footer-link"
              onClick={() => setShowReportPopup(true)}
            >
              Report a problem
            </button>

            {showSecureTooltip && (
              <div className="secure-tooltip">
                <strong>Is my donation secure?</strong>
                <p>
                  Yes, we use industry-standard SSL technology to keep your information secure.
                </p>
                <p>
                  We partner with Stripe, the industry's established payment provider trusted by
                  some of the world's largest companies.
                </p>
                <p>
                  Your sensitive financial information never touches our servers. We send all data
                  directly to Stripe's PCI-compliant servers through SSL.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ADD COMMENT POPUP */}
      {showCommentPopup && (
        <div className="mini-popup-overlay" onClick={() => setShowCommentPopup(false)}>
          <div className="mini-popup" onClick={(e) => e.stopPropagation()}>
            <div className="mini-popup-header">
              <h4>Add comment</h4>
              <button onClick={() => setShowCommentPopup(false)}>
                <IoClose size={20} />
              </button>
            </div>
            <textarea
              placeholder="Your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
            />
            <button
              className="btn-primary"
              onClick={() => {
                console.log('Comment saved:', comment);
                setShowCommentPopup(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* REPORT PROBLEM POPUP */}
      {showReportPopup && (
        <div className="mini-popup-overlay" onClick={() => setShowReportPopup(false)}>
          <div className="mini-popup report-popup" onClick={(e) => e.stopPropagation()}>
            <div className="mini-popup-header">
              <h4>Report a technical problem</h4>
              <button onClick={() => setShowReportPopup(false)}>
                <IoClose size={20} />
              </button>
            </div>
            <p className="report-desc">
              Explain the step reached and the action that didn't work.
            </p>
            <textarea
              value={reportText}
              onChange={(e) => setReportText(e.target.value.slice(0, 500))}
              rows={4}
            />
            <div className="char-count">{reportText.length}/500</div>

            <label className="report-checkbox">
              <input
                type="checkbox"
                checked={reportConfirm}
                onChange={(e) => setReportConfirm(e.target.checked)}
              />
              I confirm no personal or payment details are included
            </label>

            <div className="report-actions">
              <button
                className="btn-primary"
                disabled={!reportConfirm || reportText.trim().length < 5}
                onClick={() => {
                  console.log('Report sent:', reportText);
                  setShowReportPopup(false);
                  setReportText('');
                  setReportConfirm(false);
                }}
              >
                Send report
              </button>
              <button
                className="btn-secondary"
                onClick={() => setShowReportPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPopup;