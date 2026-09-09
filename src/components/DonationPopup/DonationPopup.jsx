import React, { useState, useEffect } from 'react';
import { FaHeart, FaShieldAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './DonationPopup.css';
import logo from '../../assets/img/logos/favicon.png';

const DonationPopup = ({ isOpen, onClose, data, prefill }) => {
  const [frequency, setFrequency] = useState('once');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('PKR');
  const [designation, setDesignation] = useState('');
  const [showExitScreen, setShowExitScreen] = useState(false);
  const [showMonthlySupporterCard, setShowMonthlySupporterCard] = useState(false);
  const [showDonationSummaryCard, setShowDonationSummaryCard] = useState(false);
  const [donationSummaryTotal, setDonationSummaryTotal] = useState('Rs3,300 PKR/month');
  const [showDetailsCard, setShowDetailsCard] = useState(false);
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [comment, setComment] = useState('');

  const [showSecureTooltip, setShowSecureTooltip] = useState(false);

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
      setShowMonthlySupporterCard(false);
      setShowDonationSummaryCard(false);
      setDonationSummaryTotal('Rs3,300 PKR/month');
      setShowDetailsCard(false);
      setEmail('');
      setDetails({ firstName: '', lastName: '', email: '', phone: '' });
      setComment('');
      setShowCommentPopup(false);
      setShowSecureTooltip(false);
      setShowReportPopup(false);
      setReportText('');
      setReportConfirm(false);

      if (prefill) {
        const popupFreq = prefill.frequency === 'monthly' ? 'monthly' : 'once';
        const amounts = popupFreq === 'once' ? data.amountsOnce : data.amountsMonthly;
        const match = amounts.find(
          (item) => item.label.replace(/^Rs\s+/, '') === prefill.amount
        );
        if (match) {
          setFrequency(popupFreq);
          setSelectedAmount(match.value);
          setCustomAmount(match.value.toString());
        } else {
          setFrequency(popupFreq);
          if (prefill.amount) {
            const numericOnly = prefill.amount.toString().replace(/[^0-9]/g, '');
            if (numericOnly) {
              setSelectedAmount(null);
              setCustomAmount(numericOnly);
            }
          }
        }
      }
    }
  }, [isOpen, data, prefill]);

  if (!isOpen || !data) return null;

  const handleCloseClick = () => {
    if (showExitScreen) {
      handleFinalClose();
      return;
    }

    setShowDonationSummaryCard(false);
    setShowDetailsCard(false);
    setShowMonthlySupporterCard(false);
    setShowExitScreen(true);
  };

  const handleFinalClose = () => {
    setShowExitScreen(false);
    onClose();
  };

  const handleMonthlyAmount = (amount) => {
    setFrequency('monthly');
    setSelectedAmount(null);
    setCustomAmount(amount.toString());
    setShowMonthlySupporterCard(false);
  };

  const handleMonthlySupporterChoice = (amount) => {
    if (amount === 3000) {
      setDonationSummaryTotal('Rs3,300 PKR/month');
      setShowDonationSummaryCard(true);
      return;
    }

    setDonationSummaryTotal('Rs1,684 PKR/month');
    setShowDonationSummaryCard(true);
  };

  const handleRemindLater = () => {
    if (email.trim()) console.log('Reminder Email:', email);
    handleFinalClose();
  };

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

  const isGridLayout =
    frequency === 'once'
      ? data.layoutOnce === 'grid'
      : data.layoutMonthly === 'grid';

  const layoutClass = isGridLayout ? 'amount-list--grid' : 'amount-list--vertical';

  const currencies = ['PKR', 'USD', 'EUR', 'GBP', 'CAD', 'AED'];

  return (
    <div className="donation-overlay">
      <div className="donation-modal-wrapper">
        {/* Close Button – outside on the right */}
        <button className="close-btn-outside" onClick={handleCloseClick}>
          <IoClose size={22} />
        </button>

        <div className="donation-modal">
          {/* LEFT SIDE */}
          <div className="donation-left">
            <div className="donation-image-wrapper">
              <img src={data.image} alt={data.title} className="donation-hero" />
            </div>
            <div className="donation-info">
              <div className="donation-logo">
                <img src={logo} alt="MTJF Logo" className="logo-img" />
                <span className="logo-text">MTJF</span>
              </div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {showDonationSummaryCard ? (
            <div className="donation-right donation-summary-card">
              <div className="donation-summary-header">
                <button
                  className="donation-summary-back"
                  type="button"
                  aria-label="Back to monthly supporter options"
                  onClick={() => setShowDonationSummaryCard(false)}
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <h2>You donate</h2>
              </div>

              <div className="donation-summary-content">
                <div className="donation-summary-panel">
                  <label className="donation-summary-costs">
                    <input type="checkbox" defaultChecked />
                    <span className="donation-summary-check" aria-hidden="true">&#10003;</span>
                    <span>Cover transaction costs</span>
                    <span className="donation-summary-help" aria-label="Transaction cost information">?</span>
                  </label>
                  <div className="donation-summary-divider" />
                  <div className="donation-summary-total">
                    <span>Total</span>
                    <strong>{donationSummaryTotal}</strong>
                  </div>
                </div>
              </div>

              <div className="donation-summary-actions">
                <button className="donation-summary-pay" type="button">
                  Donate with <span className="donation-summary-google">G</span> Pay
                </button>
              </div>
            </div>
          ) : showDetailsCard ? (
            <div className="donation-right details-card">
              <div className="details-card-header">
                <button
                  className="details-card-back"
                  type="button"
                  aria-label="Back to donation form"
                  onClick={() => setShowDetailsCard(false)}
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <h2>Enter your details</h2>
              </div>

              <div className="details-card-content">
                <div className="details-card-fields">
                  <input
                    type="text"
                    placeholder="First name"
                    value={details.firstName}
                    onChange={(event) => setDetails({ ...details, firstName: event.target.value })}
                    autoComplete="given-name"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={details.lastName}
                    onChange={(event) => setDetails({ ...details, lastName: event.target.value })}
                    autoComplete="family-name"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={details.email}
                    onChange={(event) => setDetails({ ...details, email: event.target.value })}
                    autoComplete="email"
                  />
                  <div className="details-card-phone">
                    <span className="details-card-flag" aria-hidden="true">🇵🇰</span>
                    <span className="details-card-chevron" aria-hidden="true">⌄</span>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={details.phone}
                      onChange={(event) => setDetails({ ...details, phone: event.target.value })}
                      autoComplete="tel"
                    />
                    <span className="details-card-help" aria-label="Phone number help">?</span>
                  </div>
                </div>
              </div>

              <div className="details-card-actions">
                <button className="details-card-continue" type="button">Continue</button>
              </div>
            </div>
          ) : showMonthlySupporterCard ? (
            <div className="donation-right monthly-supporter-card">
              <div className="monthly-supporter-header">
                <button
                  className="monthly-supporter-back"
                  type="button"
                  aria-label="Back to donation form"
                  onClick={() => setShowMonthlySupporterCard(false)}
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <h2>Become a monthly supporter</h2>
              </div>

              <div className="monthly-supporter-content">
                <p>
                  Will you convert your <strong>Rs 5,000</strong> contribution into a monthly donation?
                  <br />
                  Your ongoing support can help us focus better on our work.
                </p>
              </div>

              <div className="monthly-supporter-actions">
                <button
                  className="monthly-supporter-button monthly-supporter-button--red"
                  type="button"
                  onClick={() => handleMonthlySupporterChoice(3000)}
                >
                  <FaHeart size={18} /> Donate Rs 3,000/month
                </button>
                <button
                  className="monthly-supporter-button monthly-supporter-button--blue"
                  type="button"
                  onClick={() => handleMonthlySupporterChoice(1500)}
                >
                  Donate Rs 1,500/month
                </button>
                <button
                  className="monthly-supporter-decline"
                  type="button"
                  onClick={() => {
                    setDonationSummaryTotal('Rs5,455 PKR');
                    setShowDonationSummaryCard(true);
                  }}
                >
                  No, keep my one-time Rs 5,000 gift
                </button>
              </div>
            </div>
          ) : (
          <div className={`donation-right ${showExitScreen ? 'exit-mode' : ''}`}>
            {!showExitScreen ? (
              <>
                <div className="donation-right-header">
                  <div className="secure-badge">
                    <FaShieldAlt color="#16a34a" size={16} />
                    <span>Secure donation</span>
                  </div>
                </div>

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

                <button
                  className="btn-google-pay"
                  type="button"
                  onClick={() => setShowMonthlySupporterCard(true)}
                >
                  G Pay
                </button>
                <button
                  className="btn-primary"
                  type="button"
                  onClick={() => setShowDetailsCard(true)}
                >
                  Donate with other methods
                </button>

                <div className="payment-icons">
                  <span>Visa</span>
                  <span>Mastercard</span>
                  <span>Amex</span>
                  <span>Discover</span>
                </div>
              </>
            ) : (
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

    <button className="btn-primary exit-remind-btn" onClick={handleRemindLater}>
      Remind me later
    </button>

    <button className="btn-secondary exit-no-thanks" onClick={handleFinalClose}>
      No thanks
    </button>
  </div>
            )}
          </div>
          )}
        </div>

        {/* Bottom Links – always visible */}
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