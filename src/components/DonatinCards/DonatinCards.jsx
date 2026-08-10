import React, { useState } from 'react';
import { FaHeart, FaChevronDown } from 'react-icons/fa';
import './DonatinCards.css';

/**
 * DonatinCards
 *
 * Fully prop-driven donation amount picker — matches the
 * "One-time / Monthly" tabbed card used on emergency/campaign pages
 * (e.g. the "Lebanon Emergency Relief" card).
 *
 * Per the live design reference, One-time and Monthly are NOT just two
 * states of the same list — they use two different layouts:
 *   - One-time: a vertical list of rows, each with an amount + a short
 *     description (e.g. "Emergency support for a family")
 *   - Monthly: a 2-column grid of plain amount pills, no descriptions
 * Both end with an "Other amount" row with a currency-code dropdown
 * affordance (e.g. "ALL ⌄") next to it.
 *
 * Props:
 *   campaignTitle    {string}   – subtitle shown under the tabs (e.g. "Lebanon Emergency Relief")
 *   currencySuffix   {string}   – currency code shown after each amount (default: "ALL")
 *   options          {array}    – One-time amounts: [{ amount, description }]
 *   monthlyOptions   {array}    – Monthly amounts: plain strings — no description shown
 *   otherAmountLabel {string}   – placeholder for the free-input "other amount" row (default: "Other amount")
 *   buttonText       {string}   – donate button label (default: "Donate Now")
 *   showMonthlyTab   {bool}     – show the One-time/Monthly tab row (default: true)
 *   defaultFrequency {string}   – "one-time" | "monthly" (default: "one-time")
 *   defaultSelectedIndex {number} – which option is pre-selected (default: 0)
 *   onDonate         {func}     – called with { frequency, amount } when the button is clicked
 */
const DonatinCards = ({
  campaignTitle,
  currencySuffix = 'ALL',
  options = [
    { amount: '15K', description: 'Emergency support for a family' },
    { amount: '30K', description: 'Covers essentials for 2 families' },
    { amount: '40K', description: 'Helps 3 families survive' },
  ],
  monthlyOptions = ['1,500', '3,000', '4,000', '6,000', '9,000', '12K'],
  otherAmountLabel = 'Other amount',
  buttonText = 'Donate Now',
  showMonthlyTab = true,
  defaultFrequency = 'one-time',
  defaultSelectedIndex = 0,
  onDonate,
}) => {
  const [frequency, setFrequency] = useState(defaultFrequency);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [otherValue, setOtherValue] = useState('');

  const activeOptions = frequency === 'monthly' ? monthlyOptions : options;
  const isOtherSelected = selectedIndex === activeOptions.length;

  // Switching frequency changes the whole amount set (different numbers,
  // different layout) — the previously selected index almost never lines
  // up with a sensible option in the other list, so reset on switch.
  const handleFrequencyChange = (nextFrequency) => {
    setFrequency(nextFrequency);
    setSelectedIndex(0);
    setOtherValue('');
  };

  const handleDonateClick = () => {
    const amount = isOtherSelected
      ? otherValue
      : frequency === 'monthly'
      ? activeOptions[selectedIndex]
      : activeOptions[selectedIndex]?.amount;
    if (onDonate) onDonate({ frequency, amount });
  };

  const otherAmountRow = (
    <div
      className={`dcard__option dcard__option--other${isOtherSelected ? ' dcard__option--selected' : ''}`}
      onClick={() => setSelectedIndex(activeOptions.length)}
    >
      {isOtherSelected ? (
        <input
          type="number"
          className="dcard__other-input"
          placeholder={otherAmountLabel}
          value={otherValue}
          onChange={(e) => setOtherValue(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          autoFocus
        />
      ) : (
        <span className="dcard__option-desc dcard__option-desc--other">{otherAmountLabel}</span>
      )}
      <span className="dcard__currency-select">
        {currencySuffix} <FaChevronDown className="dcard__chevron" />
      </span>
    </div>
  );

  return (
    <div className="dcard">
      {/* One-time / Monthly tabs */}
      {showMonthlyTab && (
        <div className="dcard__tabs">
          <button
            type="button"
            className={`dcard__tab${frequency === 'one-time' ? ' dcard__tab--active' : ''}`}
            onClick={() => handleFrequencyChange('one-time')}
          >
            One-time
          </button>
          <button
            type="button"
            className={`dcard__tab${frequency === 'monthly' ? ' dcard__tab--active' : ''}`}
            onClick={() => handleFrequencyChange('monthly')}
          >
            <FaHeart className="dcard__tab-icon" /> Monthly
          </button>
        </div>
      )}

      {/* Campaign name */}
      {campaignTitle && <p className="dcard__campaign">{campaignTitle}</p>}

      {frequency === 'one-time' ? (
        /* ── One-time: vertical list, amount + description ── */
        <div className="dcard__options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`dcard__option${selectedIndex === index ? ' dcard__option--selected' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="dcard__option-text">
                <span className="dcard__option-amount">
                  {option.amount} {currencySuffix}
                </span>
                <span className="dcard__option-desc">{option.description}</span>
              </div>
              {selectedIndex === index && <span className="dcard__check">✓</span>}
            </div>
          ))}
          {otherAmountRow}
        </div>
      ) : (
        /* ── Monthly: 2-column grid of plain amount pills, no description ── */
        <>
          <div className="dcard__grid">
            {monthlyOptions.map((amount, index) => (
              <div
                key={index}
                className={`dcard__pill${selectedIndex === index ? ' dcard__pill--selected' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                {amount} {currencySuffix}
              </div>
            ))}
          </div>
          <div className="dcard__options dcard__options--standalone">
            {otherAmountRow}
          </div>
        </>
      )}

      <button className="dcard__btn" type="button" onClick={handleDonateClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default DonatinCards;