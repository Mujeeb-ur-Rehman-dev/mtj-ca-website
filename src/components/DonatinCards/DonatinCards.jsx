import React, { useState, useMemo } from 'react';
import { FaHeart, FaChevronDown } from 'react-icons/fa';
import './DonatinCards.css';
import { campaigns } from '../data/campaigns';

/**
 * DonatinCards
 *
 * Fully prop-driven donation amount picker — matches the
 * "One-time / Monthly" tabbed card used on emergency/campaign pages
 * (e.g. the "Apna Ghar Project" card).
 *
 * Per the live design reference, One-time and Monthly are NOT just two
 * states of the same list — they use two different layouts:
 *   - One-time: a vertical list of rows, each with an amount (Rs prefix)
 *     + a short description (e.g. "20 Bricks - Lay the first stone").
 *     Last row is a plain "Other amount" free-input row (no currency
 *     dropdown in this mode).
 *   - Monthly: a 3-column grid of plain amount pills (Rs prefix). Below
 *     the grid sits a dedicated amount row that always shows the active
 *     selection (displayed as "Rs" + large green amount) AND also acts
 *     as the custom-amount input entry point, with a "PKR ⌄" currency
 *     selector on the right.
 *
 * Props:
 *   campaignKey      {string}   – if provided, loads options, monthlyOptions
 *                                 and campaignTitle from campaigns.js
 *                                 (explicit props take priority over lookup)
 *   campaignTitle    {string}   – subtitle shown under the tabs (e.g. "Support Widows & Orphans...")
 *   currencyPrefix   {string}   – currency symbol shown before each amount (default: "Rs")
 *   currencyCode     {string}   – currency code shown in the Monthly-mode dropdown (default: "PKR")
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
  campaignKey,
  campaignTitle,
  currencyPrefix = 'Rs',
  currencyCode = 'PKR',
  options,
  monthlyOptions,
  otherAmountLabel = 'Other amount',
  buttonText = 'Donate Now',
  showMonthlyTab = true,
  defaultFrequency = 'one-time',
  defaultSelectedIndex = 0,
  onDonate,
}) => {
  const resolved = useMemo(() => {
    const fallbackTitle = 'Support Widows & Orphans By donating to the Apna Ghar Project';
    const fallbackOptions = [
      { amount: '20K', description: '20 Bricks - Lay the first stone' },
      { amount: '100K', description: '100 Bricks — Help raise the walls' },
      { amount: '2M', description: 'Full House — Give them a home' },
    ];
    const fallbackMonthly = ['5,000', '10K', '15K', '20K', '40K', '60K'];

    const cData = campaignKey ? campaigns[campaignKey] : null;

    const pickOptions = () => {
      if (options && options.length) return options;
      if (cData && cData.amountsOnce) {
        return cData.amountsOnce.map((item) => ({
          amount: item.label.replace(/^Rs\s+/, ''),
          description: item.desc || '',
        }));
      }
      return fallbackOptions;
    };

    const pickMonthly = () => {
      if (monthlyOptions && monthlyOptions.length) return monthlyOptions;
      if (cData && cData.amountsMonthly) {
        return cData.amountsMonthly.map((item) =>
          item.label.replace(/^Rs\s+/, '')
        );
      }
      return fallbackMonthly;
    };

    const pickTitle = () => {
      if (campaignTitle) return campaignTitle;
      if (cData && cData.title) return cData.title;
      return fallbackTitle;
    };

    return {
      options: pickOptions(),
      monthlyOptions: pickMonthly(),
      campaignTitle: pickTitle(),
    };
  }, [campaignKey, campaignTitle, options, monthlyOptions]);

  const [frequency, setFrequency] = useState(defaultFrequency);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [otherValue, setOtherValue] = useState('');

  const activeOptions = frequency === 'monthly' ? resolved.monthlyOptions : resolved.options;
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

  // ── One-time "Other amount" row — plain, no currency dropdown ──
  const oneTimeOtherRow = (
    <div
      className={`dcard__option dcard__option--other${isOtherSelected ? ' dcard__option--selected' : ''}`}
      onClick={() => setSelectedIndex(activeOptions.length)}
    >
      {isOtherSelected ? (
        <div className="dcard__other-wrap">
          <span className="dcard__other-prefix">{currencyPrefix}</span>
          <input
            type="text"
            className="dcard__other-input"
            placeholder={otherAmountLabel}
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            autoFocus
          />
        </div>
      ) : (
        <span className="dcard__option-desc dcard__option-desc--other">{otherAmountLabel}</span>
      )}
    </div>
  );

  // ── Monthly amount display row — mirrors selected pill OR acts as
  //    custom-amount input, with currency dropdown always on right ──
  const monthlyAmountRow = (() => {
    const activeAmount = isOtherSelected
      ? otherValue
      : resolved.monthlyOptions[selectedIndex] ?? '';

    return (
      <div
        className={`dcard__amount-row${isOtherSelected ? ' dcard__amount-row--edit' : ''}`}
        onClick={() => {
          if (!isOtherSelected) {
            setSelectedIndex(resolved.monthlyOptions.length);
          }
        }}
      >
        <div className="dcard__amount-left">
          <span className="dcard__amount-prefix">{currencyPrefix}</span>
          {isOtherSelected ? (
            <input
              type="text"
              className="dcard__amount-input"
              placeholder={otherAmountLabel}
              value={otherValue}
              onChange={(e) => setOtherValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          ) : (
            <span className="dcard__amount-value">{activeAmount}</span>
          )}
        </div>
        <span className="dcard__currency-select">
          {currencyCode} <FaChevronDown className="dcard__chevron" />
        </span>
      </div>
    );
  })();

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
      {resolved.campaignTitle && <p className="dcard__campaign">{resolved.campaignTitle}</p>}

      {frequency === 'one-time' ? (
        /* ── One-time: vertical list, amount + description ── */
        <div className="dcard__options">
          {resolved.options.map((option, index) => (
            <div
              key={index}
              className={`dcard__option${selectedIndex === index ? ' dcard__option--selected' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="dcard__option-text">
                <span className="dcard__option-amount">
                  {currencyPrefix} {option.amount}
                </span>
                <span className="dcard__option-desc">{option.description}</span>
              </div>
              {selectedIndex === index && <span className="dcard__check">✓</span>}
            </div>
          ))}
          {oneTimeOtherRow}
        </div>
      ) : (
        /* ── Monthly: 3-column grid of plain amount pills + dedicated amount row below ── */
        <>
          <div className="dcard__grid">
            {resolved.monthlyOptions.map((amount, index) => (
              <div
                key={index}
                className={`dcard__pill${selectedIndex === index ? ' dcard__pill--selected' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                {currencyPrefix} {amount}
              </div>
            ))}
          </div>
          {monthlyAmountRow}
        </>
      )}

      <button className="dcard__btn" type="button" onClick={handleDonateClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default DonatinCards;