import React, { useState, useEffect, useMemo, useRef } from 'react';
import { FaHeart, FaShieldAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './DonationPopup.css';
import defaultLogo from '../../assets/img/logos/favicon.png';
import quickDonateLogo from '../../assets/img/logos/quick_donate_logo.png';
import visaLogo from '../../assets/img/payment/card-visa.png';
import mastercardLogo from '../../assets/img/payment/card-mastercard.png';
import amexLogo from '../../assets/img/payment/card-amex.png';
import discoverLogo from '../../assets/img/payment/card-discover.png';

// Branded SVGs and Cards matching live Fundraise Up design
const GooglePayIcon = () => (
  <svg width="50" height="24" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#FFFFFF">
      <path d="m25.0109 13.6094v5.8583h-1.8898v-14.48821h4.9134c1.1968 0 2.3307.44095 3.2126 1.25984.8819.75591 1.3228 1.88977 1.3228 3.08662s-.4409 2.26775-1.3228 3.08665-1.9528 1.2598-3.2126 1.2598zm0-6.86613v5.03933h3.1496c.6929 0 1.3858-.2519 1.8267-.7559 1.0079-.9448 1.0079-2.51965.063-3.46453l-.063-.06299c-.5039-.50394-1.1338-.8189-1.8267-.75591z"/>
      <path d="m36.9168 9.2627c1.3858 0 2.4567.37795 3.2756 1.1339.8189.7559 1.1968 1.7637 1.1968 3.0236v6.0472h-1.7638v-1.3858h-.063c-.7559 1.1339-1.8267 1.7008-3.0866 1.7008-1.0708 0-2.0157-.315-2.7716-.9449-.6929-.6299-1.1339-1.5118-1.1339-2.4567 0-1.0079.378-1.8268 1.1339-2.4567s1.8267-.8819 3.0866-.8819c1.1338 0 2.0157.189 2.7086.6299v-.4409c0-.6299-.2519-1.2598-.7559-1.6378-.5039-.4409-1.1338-.6929-1.8267-.6929-1.0709 0-1.8898.4409-2.4567 1.3228l-1.6378-1.0078c1.0079-1.32288 2.3307-1.9528 4.0945-1.9528zm-2.3937 7.1811c0 .5039.2519.9449.6299 1.1968.4409.315.9449.504 1.4488.504.7559 0 1.5118-.315 2.0787-.8819.63-.5669.9449-1.2598.9449-2.0158-.5669-.4409-1.3858-.6929-2.4567-.6929-.7559 0-1.3858.189-1.8897.567-.504.3149-.7559.7559-.7559 1.3228z"/>
      <path d="m51.5939 9.57812-6.2363 14.29918h-1.8897l2.3307-4.9763-4.0945-9.25988h2.0157l2.9607 7.11808h.063l2.8976-7.11808h1.9528z"/>
    </g>
    <path d="m17.5146 12.3497c0-.5669-.0629-1.1338-.1259-1.7008h-7.87405v3.2126h4.47245c-.189 1.0079-.7559 1.9528-1.6378 2.5197v2.0787h2.7087c1.5748-1.4488 2.4566-3.5905 2.4566-6.1102z" fill="#4285F4"/>
    <path d="m9.5151 20.4755c2.2677 0 4.1575-.7559 5.5433-2.0157l-2.7087-2.0788c-.7559.504-1.7007.8189-2.8346.8189-2.14173 0-4.03149-1.4488-4.66142-3.4645h-2.77165v2.1417c1.44882 2.8346 4.28347 4.5984 7.43307 4.5984z" fill="#34A853"/>
    <path d="m4.85386 13.7352c-.37795-1.0079-.37795-2.1417 0-3.2126v-2.14174h-2.77165c-1.196852 2.33074-1.196852 5.10234 0 7.49604z" fill="#FBBC04"/>
    <path d="m9.51461 7.12126c1.19689 0 2.33069.44095 3.21259 1.25985l2.3937-2.3937c-1.5118-1.38583-3.5276-2.20473-5.5433-2.14174-3.1496 0-6.04724 1.76378-7.43307 4.59843l2.77165 2.1417c.56693-2.01572 2.4567-3.46454 4.59843-3.46454z" fill="#EA4335"/>
  </svg>
);

const VisaLogo = () => (
  <img src={visaLogo} alt="Visa" className="card-badge-img" />
);

const MastercardLogo = () => (
  <img src={mastercardLogo} alt="Mastercard" className="card-badge-img" />
);

const AmexLogo = () => (
  <img src={amexLogo} alt="American Express" className="card-badge-img" />
);

const DiscoverLogo = () => (
  <img src={discoverLogo} alt="Discover" className="card-badge-img" />
);

const DownChevronIcon = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 6.5L5.5 10.5L14.5 1.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Calendar icon for "Become a monthly supporter"
const CalendarMonthlyIcon = () => (
  <div className="monthly-calendar-icon">
    <div className="calendar-header-bar">
      <span className="cal-pin" />
      <span className="cal-pin" />
    </div>
    <div className="calendar-body">
      <div className="calendar-heart-badge">
        <FaHeart size={16} color="#e11d48" />
      </div>
    </div>
  </div>
);

// Envelope Bell icon for "Maybe next time?"
const ExitNotificationIcon = () => (
  <div className="exit-notification-graphic">
    <div className="exit-envelope">
      <div className="exit-bell">
        🔔
      </div>
      <div className="exit-heart-badge">
        <FaHeart size={10} color="#3b82f6" />
      </div>
    </div>
  </div>
);

const CURRENCY_LIST = ['PKR', 'CAD', 'USD', 'GBP', 'EUR', 'AED'];

const DonationPopup = ({ isOpen, onClose, data, prefill }) => {
  const [frequency, setFrequency] = useState('once');
  const [currency, setCurrency] = useState('PKR');
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('5000');
  const [designation, setDesignation] = useState('general');
  const [isDesignationOpen, setIsDesignationOpen] = useState(false);

  // Multi-step navigation
  const [currentStep, setCurrentStep] = useState('main'); // 'main' | 'upsell' | 'details' | 'summary' | 'success'

  // Exit screen modal
  const [showExitScreen, setShowExitScreen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');

  // Comment drawer
  const [showCommentDrawer, setShowCommentDrawer] = useState(false);
  const [comment, setComment] = useState('');

  // Security tooltip & Report problem modal
  const [showSecureTooltip, setShowSecureTooltip] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportText, setReportText] = useState('');
  const [reportConfirm, setReportConfirm] = useState(false);

  // Donor Details
  const [donorDetails, setDonorDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+92',
  });
  const [detailsErrors, setDetailsErrors] = useState({});

  // Summary options
  const [coverCosts, setCoverCosts] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const designationDropdownRef = useRef(null);
  const secureTooltipRef = useRef(null);

  // Active currency config
  const activeCurrencyConfig = useMemo(() => {
    if (data?.currencyConfig && data.currencyConfig[currency]) {
      return data.currencyConfig[currency];
    }
    return {
      symbol: currency === 'PKR' ? 'Rs' : (currency === 'CAD' || currency === 'USD' ? '$' : currency),
      amountsOnce: data?.amountsOnce || [],
      amountsMonthly: data?.amountsMonthly || [],
      defaultOnce: data?.amountsOnce?.[1]?.value || 5000,
      defaultMonthly: 6000,
    };
  }, [data, currency]);

  // Current amount options for the selected frequency
  const currentAmounts = useMemo(() => {
    return frequency === 'once'
      ? activeCurrencyConfig.amountsOnce
      : activeCurrencyConfig.amountsMonthly;
  }, [frequency, activeCurrencyConfig]);

  // Sync state on open or campaign change
  useEffect(() => {
    if (isOpen && data) {
      setFrequency('once');
      const initialCurrency = 'PKR';
      setCurrency(initialCurrency);

      const cfg = data.currencyConfig?.[initialCurrency] || {
        defaultOnce: 5000,
        amountsOnce: data.amountsOnce || [],
      };
      const defAmt = cfg.defaultOnce || 5000;
      setSelectedAmount(defAmt);
      setCustomAmount(defAmt.toString());

      setDesignation(data.designationOptions?.[0]?.value || 'general');
      setIsDesignationOpen(false);
      setCurrentStep('main');
      setShowExitScreen(false);
      setShowCommentDrawer(false);
      setComment('');
      setShowSecureTooltip(false);
      setShowReportModal(false);
      setReportText('');
      setReportConfirm(false);
      setExitEmail('');
      setCoverCosts(true);
      setIsProcessing(false);
      setDetailsErrors({});
      setDonorDetails({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: initialCurrency === 'PKR' ? '+92' : (initialCurrency === 'CAD' ? '+1' : '+1'),
      });

      if (prefill) {
        const popupFreq = prefill.frequency === 'monthly' ? 'monthly' : 'once';
        setFrequency(popupFreq);
        if (prefill.amount) {
          const numeric = prefill.amount.toString().replace(/[^0-9]/g, '');
          if (numeric) {
            const numVal = parseInt(numeric, 10);
            setSelectedAmount(numVal);
            setCustomAmount(numVal.toString());
          }
        }
      }
    }
  }, [isOpen, data, prefill]);

  // Close designation dropdown and secure tooltip on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (designationDropdownRef.current && !designationDropdownRef.current.contains(e.target)) {
        setIsDesignationOpen(false);
      }
      if (secureTooltipRef.current && !secureTooltipRef.current.contains(e.target)) {
        setShowSecureTooltip(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When currency changes, update amounts & phone code
  const handleCurrencyChange = (newCurr) => {
    setCurrency(newCurr);
    const cfg = data?.currencyConfig?.[newCurr];
    if (cfg) {
      const def = frequency === 'once' ? cfg.defaultOnce : cfg.defaultMonthly;
      setSelectedAmount(def);
      setCustomAmount(def.toString());
    }
    const phoneMap = { PKR: '+92', CAD: '+1', USD: '+1', GBP: '+44', EUR: '+33', AED: '+971' };
    setDonorDetails((prev) => ({
      ...prev,
      countryCode: phoneMap[newCurr] || '+1',
    }));
  };

  // When frequency changes
  const handleFrequencyChange = (newFreq) => {
    setFrequency(newFreq);
    if (newFreq === 'monthly') {
      // In monthly mode, default to 5000 or custom amount if present
      const match = activeCurrencyConfig.amountsMonthly.find((a) => a.value === selectedAmount);
      if (!match) {
        // Keep customAmount as 5000 or default
        setSelectedAmount(null);
      }
    } else {
      setSelectedAmount(5000);
      setCustomAmount('5000');
    }
  };

  // Amount selection
  const handleSelectAmount = (val) => {
    setSelectedAmount(val);
    setCustomAmount(val.toString());
  };

  const handleCustomAmountChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(raw);
    const numeric = parseInt(raw, 10);
    if (!isNaN(numeric)) {
      const match = currentAmounts.find((a) => a.value === numeric);
      setSelectedAmount(match ? match.value : null);
    } else {
      setSelectedAmount(null);
    }
  };

  // Formatted numeric amount
  const numericAmount = parseInt(customAmount, 10) || selectedAmount || 0;

  // Format currency display (e.g. Rs 5,000 or Rs5,000 for input)
  const formatAmount = (amt, curr = currency) => {
    const sym = activeCurrencyConfig.symbol || (curr === 'PKR' ? 'Rs' : '$');
    const formattedNum = Number(amt).toLocaleString('en-US');
    if (curr === 'PKR') {
      return `Rs ${formattedNum}`;
    }
    if (sym === '$' || sym === '£' || sym === '€') {
      return `${sym}${formattedNum}`;
    }
    return `${sym} ${formattedNum}`;
  };

  // Input formatted value e.g. "Rs5,000" (no space, matching Image 1 & 2)
  const displayInputValue = useMemo(() => {
    if (!customAmount) return '';
    const num = parseInt(customAmount, 10);
    if (isNaN(num)) return '';
    const formatted = num.toLocaleString('en-US');
    return `${activeCurrencyConfig.symbol}${formatted}`;
  }, [customAmount, activeCurrencyConfig.symbol]);

  // Transaction fee calculation (2.9% + 30 cents/Rs 30)
  const transactionFee = useMemo(() => {
    if (!coverCosts || numericAmount <= 0) return 0;
    const fixed = currency === 'PKR' ? 30 : 0.3;
    const fee = numericAmount * 0.029 + fixed;
    return currency === 'PKR' ? Math.round(fee) : Math.round(fee * 100) / 100;
  }, [coverCosts, numericAmount, currency]);

  const totalAmount = numericAmount + transactionFee;

  // Monthly upsell suggestions calculated based on one-time gift
  const upsellOption1 = useMemo(() => {
    if (currency === 'PKR') {
      if (numericAmount >= 20000) return 10000;
      if (numericAmount >= 10000) return 6000;
      return 3000;
    }
    if (numericAmount >= 100) return 50;
    if (numericAmount >= 50) return 30;
    return 15;
  }, [numericAmount, currency]);

  const upsellOption2 = useMemo(() => {
    if (currency === 'PKR') {
      if (numericAmount >= 20000) return 5000;
      if (numericAmount >= 10000) return 3000;
      return 1500;
    }
    if (numericAmount >= 100) return 25;
    if (numericAmount >= 50) return 15;
    return 10;
  }, [numericAmount, currency]);

  // Primary action click on Main Step
  const handleMainDonateClick = () => {
    if (frequency === 'once') {
      setCurrentStep('upsell');
    } else {
      setCurrentStep('details');
    }
  };

  // Decline monthly upsell
  const handleDeclineUpsell = () => {
    setCurrentStep('details');
  };

  // Accept monthly upsell option
  const handleAcceptUpsell = (chosenMonthlyAmount) => {
    setFrequency('monthly');
    setSelectedAmount(chosenMonthlyAmount);
    setCustomAmount(chosenMonthlyAmount.toString());
    setCurrentStep('details');
  };

  // Validate and submit donor details
  const handleContinueDetails = () => {
    const errors = {};
    if (!donorDetails.firstName.trim()) errors.firstName = 'First name is required';
    if (!donorDetails.lastName.trim()) errors.lastName = 'Last name is required';
    if (!donorDetails.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(donorDetails.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!donorDetails.phone.trim()) errors.phone = 'Phone number is required';

    if (Object.keys(errors).length > 0) {
      setDetailsErrors(errors);
      return;
    }

    setDetailsErrors({});
    setCurrentStep('summary');
  };

  // Final payment donation submission
  const handleFinalPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('success');
    }, 1200);
  };

  // Outside close button click
  const handleCloseClick = () => {
    if (showExitScreen) {
      handleFinalClose();
      return;
    }
    if (currentStep === 'success') {
      handleFinalClose();
      return;
    }
    setShowExitScreen(true);
  };

  const handleFinalClose = () => {
    setShowExitScreen(false);
    onClose();
  };

  const designationOptions = data?.designationOptions || [
    { value: 'general', label: 'General Amount' },
    { value: 'zakat', label: 'Zakat' },
  ];

  const selectedDesignationLabel =
    designationOptions.find((d) => d.value === designation)?.label || 'General Amount';

  if (!isOpen || !data) return null;

  return (
    <div className="donation-overlay">
      {/* Close Button – Pinned to top-right of screen matching original */}
      <button
        className="close-btn-outside"
        onClick={handleCloseClick}
        aria-label="Close modal"
      >
        <IoClose size={14} />
      </button>

      <div className="donation-modal-wrapper">
        <div className="donation-modal">
          {/* ================= LEFT CARD (Cause Details) ================= */}
          <div className="donation-left">
            <div className="donation-image-wrapper">
              <img
                src={data.image}
                alt={data.title}
                className="donation-hero"
              />
            </div>
            <div className="donation-info">
              <div className="donation-logo">
                <img
                  src={quickDonateLogo || defaultLogo}
                  alt="MTJF Logo"
                  className="logo-img"
                  onError={(e) => {
                    e.currentTarget.src = defaultLogo;
                  }}
                />
              </div>
              <h2>{data.title || 'Donate where Most Needed'}</h2>
              <p>
                {data.description ||
                  'Your contributions provide critical support to those in need, empowering communities and uplifting lives through sustainable development and direct aid. From essential relief to fulfilling your Zakat, every donation delivers lasting impact and reflects the core values of our faith.'}
              </p>
            </div>
          </div>

          {/* ================= RIGHT CARD (Multi-Step Form) ================= */}
          <div className={`donation-right ${showExitScreen ? 'exit-mode' : ''}`}>
            {showExitScreen ? (
              /* ===== EXIT SCREEN ("Maybe next time?") ===== */
              <div className="exit-screen">
                <div className="exit-header">
                  <button
                    className="back-btn"
                    onClick={() => setShowExitScreen(false)}
                    aria-label="Back to donation form"
                  >
                    ‹
                  </button>
                  <h3>Maybe next time?</h3>
                </div>

                <div className="exit-graphic-container">
                  <ExitNotificationIcon />
                </div>

                <p className="exit-text">
                  Please leave your email address below, and we'll send you a gentle reminder later.
                </p>

                <div className="exit-input-wrapper">
                  <input
                    type="email"
                    className="exit-email-input"
                    placeholder="Email address"
                    value={exitEmail}
                    onChange={(e) => setExitEmail(e.target.value)}
                  />
                </div>

                <button
                  className="ui-button ui-button-primary ui-button-fullwidth mb-2"
                  onClick={handleFinalClose}
                >
                  Remind me later
                </button>

                <button
                  className="ui-button ui-button-secondary ui-button-fullwidth"
                  onClick={handleFinalClose}
                >
                  No thanks
                </button>
              </div>
            ) : currentStep === 'upsell' ? (
              /* ===== STEP 2: MONTHLY UPSELL ===== */
              <div className="monthly-supporter-screen">
                <div className="screen-header">
                  <button
                    className="back-btn"
                    onClick={() => setCurrentStep('main')}
                    aria-label="Back"
                  >
                    ‹
                  </button>
                  <h3>Become a monthly supporter</h3>
                </div>

                <div className="monthly-calendar-wrapper">
                  <CalendarMonthlyIcon />
                </div>

                <h4 className="monthly-headline">
                  Give {formatAmount(upsellOption1)} every month instead of a one-time gift
                </h4>

                <p className="monthly-subtext">
                  Steady support allows us to plan ahead and make a lasting impact.
                </p>

                <div className="cancel-anytime-pill">
                  <span>Cancel anytime</span>
                  <span className="info-icon" title="You can pause or cancel recurring gifts anytime.">ⓘ</span>
                </div>

                <div className="monthly-actions">
                  <button
                    className="ui-button ui-button-accent ui-button-fullwidth mb-2"
                    onClick={() => handleAcceptUpsell(upsellOption1)}
                  >
                    <FaHeart size={14} style={{ marginRight: 6 }} />
                    Donate {formatAmount(upsellOption1)}/month
                  </button>

                  <button
                    className="ui-button ui-button-primary ui-button-fullwidth mb-3"
                    onClick={() => handleAcceptUpsell(upsellOption2)}
                  >
                    Donate {formatAmount(upsellOption2)}/month
                  </button>

                  <button
                    className="ui-button-link text-center w-100"
                    onClick={handleDeclineUpsell}
                  >
                    No, keep my one-time {formatAmount(numericAmount)} gift
                  </button>
                </div>
              </div>
            ) : currentStep === 'details' ? (
              /* ===== STEP 3: ENTER YOUR DETAILS ===== */
              <div className="details-screen">
                <div className="screen-header">
                  <button
                    className="back-btn"
                    onClick={() => setCurrentStep(frequency === 'once' ? 'upsell' : 'main')}
                    aria-label="Back"
                  >
                    ‹
                  </button>
                  <h3>Enter your details</h3>
                </div>

                <div className="details-fields-card">
                  <div className={`details-field-row ${detailsErrors.firstName ? 'has-error' : ''}`}>
                    <input
                      type="text"
                      placeholder="First name"
                      value={donorDetails.firstName}
                      onChange={(e) => {
                        setDonorDetails({ ...donorDetails, firstName: e.target.value });
                        if (detailsErrors.firstName) setDetailsErrors({ ...detailsErrors, firstName: '' });
                      }}
                    />
                    {detailsErrors.firstName && <span className="field-error-icon">!</span>}
                  </div>

                  <div className={`details-field-row ${detailsErrors.lastName ? 'has-error' : ''}`}>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={donorDetails.lastName}
                      onChange={(e) => {
                        setDonorDetails({ ...donorDetails, lastName: e.target.value });
                        if (detailsErrors.lastName) setDetailsErrors({ ...detailsErrors, lastName: '' });
                      }}
                    />
                    {detailsErrors.lastName && <span className="field-error-icon">!</span>}
                  </div>

                  <div className={`details-field-row ${detailsErrors.email ? 'has-error' : ''}`}>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={donorDetails.email}
                      onChange={(e) => {
                        setDonorDetails({ ...donorDetails, email: e.target.value });
                        if (detailsErrors.email) setDetailsErrors({ ...detailsErrors, email: '' });
                      }}
                    />
                    {detailsErrors.email && <span className="field-error-icon">!</span>}
                  </div>

                  <div className={`details-field-row phone-field-row ${detailsErrors.phone ? 'has-error' : ''}`}>
                    <div className="country-flag-selector">
                      <span>{currency === 'PKR' ? '🇵🇰' : (currency === 'CAD' ? '🇨🇦' : (currency === 'USD' ? '🇺🇸' : (currency === 'GBP' ? '🇬🇧' : '🌐')))}</span>
                      <span className="chevron-mini">▾</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={donorDetails.phone}
                      onChange={(e) => {
                        setDonorDetails({ ...donorDetails, phone: e.target.value });
                        if (detailsErrors.phone) setDetailsErrors({ ...detailsErrors, phone: '' });
                      }}
                    />
                    <span className="field-help-icon" title="We only contact you regarding your donation tax receipts.">?</span>
                  </div>
                </div>

                {(detailsErrors.firstName || detailsErrors.email || detailsErrors.phone) && (
                  <div className="validation-error-msg">
                    {detailsErrors.firstName || detailsErrors.email || detailsErrors.phone}
                  </div>
                )}

                <div className="details-actions mt-4">
                  <button
                    className="ui-button ui-button-primary ui-button-fullwidth"
                    onClick={handleContinueDetails}
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : currentStep === 'summary' ? (
              /* ===== STEP 4: SUMMARY & PAYMENT ===== */
              <div className="summary-screen">
                <div className="screen-header">
                  <button
                    className="back-btn"
                    onClick={() => setCurrentStep('details')}
                    aria-label="Back"
                  >
                    ‹
                  </button>
                  <h3>You donate</h3>
                </div>

                <div className="donation-summary-box">
                  <label className="cover-cost-checkbox-row">
                    <input
                      type="checkbox"
                      checked={coverCosts}
                      onChange={(e) => setCoverCosts(e.target.checked)}
                    />
                    <span className="checkbox-label-text">Cover transaction costs</span>
                    <span className="field-help-icon" title="Covers payment gateway fees so 100% of your gift reaches recipients.">?</span>
                  </label>

                  {coverCosts && transactionFee > 0 && (
                    <div className="fee-breakdown-row">
                      <span>Processing fee</span>
                      <span>+{formatAmount(transactionFee)}</span>
                    </div>
                  )}

                  <div className="summary-divider" />

                  <div className="summary-total-row">
                    <span>Total</span>
                    <strong>
                      {formatAmount(totalAmount)} {currency}
                      {frequency === 'monthly' ? '/month' : ''}
                    </strong>
                  </div>
                </div>

                <div className="payment-action-group mt-4">
                  <button
                    className="google-pay-btn ui-button-fullwidth mb-2"
                    onClick={handleFinalPayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : <GooglePayIcon />}
                  </button>

                  <button
                    className="ui-button ui-button-primary ui-button-fullwidth"
                    onClick={handleFinalPayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      'Processing donation...'
                    ) : (
                      `Donate ${formatAmount(totalAmount)}${frequency === 'monthly' ? '/month' : ''}`
                    )}
                  </button>
                </div>

                <div className="payment-card-logos mt-3">
                  <VisaLogo />
                  <MastercardLogo />
                  <AmexLogo />
                  <DiscoverLogo />
                </div>
              </div>
            ) : currentStep === 'success' ? (
              /* ===== STEP 5: SUCCESS THANK YOU ===== */
              <div className="success-screen">
                <div className="success-icon-badge">✓</div>
                <h3>Thank you for your donation!</h3>
                <p>
                  Your generous gift of{' '}
                  <strong>
                    {formatAmount(totalAmount)} {currency}
                    {frequency === 'monthly' ? '/month' : ''}
                  </strong>{' '}
                  has been received with sincere gratitude.
                </p>
                <p className="success-subtext">
                  A tax receipt and confirmation email has been sent to{' '}
                  <strong>{donorDetails.email || 'your email'}</strong>.
                </p>

                <button
                  className="ui-button ui-button-primary ui-button-fullwidth mt-4"
                  onClick={handleFinalClose}
                >
                  Close
                </button>
              </div>
            ) : (
              /* ===== STEP 1: INITIAL MAIN FORM (Matches Image 1 & Image 2) ===== */
              <>
                <div className="donation-right-header">
                  <div className="secure-badge">
                    <FaShieldAlt color="#10b981" size={14} />
                    <span>Secure donation</span>
                  </div>
                </div>

                {/* Frequency Tabs (Give once / Monthly) */}
                <div className="frequency-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${frequency === 'once' ? 'active' : ''}`}
                    onClick={() => handleFrequencyChange('once')}
                  >
                    Give once
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${frequency === 'monthly' ? 'active' : ''}`}
                    onClick={() => handleFrequencyChange('monthly')}
                  >
                    <FaHeart color="#e11d48" size={10} style={{ marginRight: 4 }} />
                    Monthly
                  </button>
                </div>

                {/* Preset Amount Grid (3 x 2) */}
                <div className="amount-grid-6">
                  {currentAmounts.slice(0, 6).map((item) => {
                    const isSelected = selectedAmount === item.value && numericAmount === item.value;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        className={`amount-tile ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectAmount(item.value)}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                {/* Integrated Amount & Currency Input Box (Shows e.g. Rs5,000 and PKR ∨) */}
                <div className="amount-currency-input-wrapper">
                  <div className="amount-input-left">
                    <input
                      type="text"
                      className="amount-input-control"
                      value={displayInputValue}
                      onChange={handleCustomAmountChange}
                      placeholder="Other amount"
                    />
                  </div>
                  <div className="currency-select-container">
                    <span className="currency-code-text">{currency}</span>
                    <select
                      className="currency-dropdown-hidden"
                      value={currency}
                      onChange={(e) => handleCurrencyChange(e.target.value)}
                      aria-label="Select currency"
                    >
                      {CURRENCY_LIST.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <DownChevronIcon />
                  </div>
                </div>

                {/* Custom Designation Dropdown (Matches Image 3) */}
                {data.showDesignation !== false && (
                  <div
                    ref={designationDropdownRef}
                    className={`designation-custom-box ${isDesignationOpen ? 'open' : ''}`}
                  >
                    <div
                      className="designation-header-trigger"
                      onClick={() => setIsDesignationOpen(!isDesignationOpen)}
                    >
                      <div className="designation-labels">
                        <span className="designation-mini-label">Designation</span>
                        <span className="designation-current-val">{selectedDesignationLabel}</span>
                      </div>
                      <div className={`chevron-wrapper ${isDesignationOpen ? 'rotate' : ''}`}>
                        <DownChevronIcon />
                      </div>
                    </div>

                    {isDesignationOpen && (
                      <div className="designation-dropdown-menu">
                        {designationOptions.map((opt) => {
                          const isSelected = designation === opt.value;
                          return (
                            <div
                              key={opt.value}
                              className={`designation-option-item ${isSelected ? 'selected' : ''}`}
                              onClick={() => {
                                setDesignation(opt.value);
                                setIsDesignationOpen(false);
                              }}
                            >
                              <span>{opt.label}</span>
                              {isSelected && <CheckmarkIcon />}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Add comment link */}
                <div className="extra-links-row">
                  <button
                    type="button"
                    className="text-link-comment"
                    onClick={() => setShowCommentDrawer(true)}
                  >
                    {comment.trim() ? 'Edit comment' : 'Add comment'}
                  </button>
                </div>

                {/* Main Action Buttons */}
                <div className="main-actions-container">
                  <button
                    type="button"
                    className="google-pay-btn"
                    onClick={handleMainDonateClick}
                  >
                    <GooglePayIcon />
                  </button>

                  <button
                    type="button"
                    className="ui-button ui-button-primary ui-button-fullwidth"
                    onClick={handleMainDonateClick}
                  >
                    Donate with other methods
                  </button>
                </div>

                {/* Branded Payment Icons */}
                <div className="payment-card-logos">
                  <VisaLogo />
                  <MastercardLogo />
                  <AmexLogo />
                  <DiscoverLogo />
                </div>
              </>
            )}

            {/* ================= COMMENT DRAWER (Matches Image 4) ================= */}
            {showCommentDrawer && (
              <>
                <div
                  className="drawer-backdrop-overlay"
                  onClick={() => setShowCommentDrawer(false)}
                />
                <div className="comment-bottom-drawer">
                  <div className="drawer-header">
                    <h4>Add comment</h4>
                    <button
                      type="button"
                      className="drawer-close-btn"
                      onClick={() => setShowCommentDrawer(false)}
                      aria-label="Close comment drawer"
                    >
                      <IoClose size={16} />
                    </button>
                  </div>
                  <div className="drawer-divider" />
                  <div className="drawer-body">
                    <div className="drawer-comment-box">
                      <span className="drawer-input-label">Your comment</span>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <button
                      type="button"
                      className="drawer-save-btn"
                      onClick={() => setShowCommentDrawer(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ================= BOTTOM FOOTER LINKS & TOOLTIP (Matches Image 5) ================= */}
        <div className="donation-footer-links">
          <div className="secure-link-container" ref={secureTooltipRef}>
            <button
              type="button"
              className={`footer-link-text ${showSecureTooltip ? 'active-outlined' : ''}`}
              onClick={() => setShowSecureTooltip(!showSecureTooltip)}
            >
              Is my donation secure?
            </button>

            {/* Secure Tooltip Popover with Arrow Pointer (Matches Image 5) */}
            {showSecureTooltip && (
              <div className="secure-tooltip-box">
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

          <span className="footer-dot">·</span>
          <button
            type="button"
            className="footer-link-text"
            onClick={() => setShowReportModal(true)}
          >
            Report a problem
          </button>
        </div>
      </div>

      {/* ================= REPORT PROBLEM MODAL ================= */}
      {showReportModal && (
        <div
          className="mini-popup-backdrop"
          onClick={() => setShowReportModal(false)}
        >
          <div
            className="mini-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mini-popup-header">
              <h4>Report a technical problem</h4>
              <button
                type="button"
                className="mini-popup-close"
                onClick={() => setShowReportModal(false)}
              >
                <IoClose size={20} />
              </button>
            </div>
            <p className="report-hint">
              Explain the step reached and the action that didn't work.
            </p>
            <textarea
              className="report-textarea"
              rows={4}
              maxLength={500}
              placeholder="Describe the issue..."
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
            />
            <div className="char-counter">{reportText.length}/500</div>

            <label className="report-confirm-label">
              <input
                type="checkbox"
                checked={reportConfirm}
                onChange={(e) => setReportConfirm(e.target.checked)}
              />
              <span>I confirm no personal or payment details are included</span>
            </label>

            <div className="report-action-buttons">
              <button
                type="button"
                className="ui-button ui-button-primary"
                disabled={!reportConfirm || reportText.trim().length < 5}
                onClick={() => {
                  setShowReportModal(false);
                  setReportText('');
                  setReportConfirm(false);
                }}
              >
                Send report
              </button>
              <button
                type="button"
                className="ui-button ui-button-secondary"
                onClick={() => setShowReportModal(false)}
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