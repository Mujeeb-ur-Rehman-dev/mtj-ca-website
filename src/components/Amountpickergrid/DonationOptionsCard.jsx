import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './DonationOptionsCard.css';

const defaultOptions = [
  {
    id: 'option-1',
    amount: 'Rs 8,000',
    text: 'provides a hygiene kit',
  },
  {
    id: 'option-2',
    amount: 'Rs 10K',
    text: 'provides shelter and bedding to a family',
  },
  {
    id: 'option-3',
    amount: 'Rs 12K',
    text: "provides 2 week's ration pack to a family",
  },
  {
    id: 'option-4',
    amount: 'Other amount',
    text: '',
    isOther: true,
  },
];

const currencies = ['PKR', 'USD', 'EUR', 'GBP', 'CAD', 'AED'];

export default function DonationOptionsCard({
  title = 'Nepal Floods Appeal',
  options = defaultOptions,
  buttonText = 'Donate and Support',
  onSelect,
  onDonate,
  className = '',
}) {
  const [selectedId, setSelectedId] = useState(
    options.find((option) => option.selected)?.id ?? options[0]?.id ?? null
  );
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('PKR');

  useEffect(() => {
    if (selectedId && !options.some((option) => option.id === selectedId)) {
      const nextSelectedId =
        options.find((option) => option.selected)?.id ?? options[0]?.id ?? null;
      setSelectedId(nextSelectedId);
    }
  }, [options, selectedId]);

  const selectedOption =
    options.find((option) => option.id === selectedId) ?? options[0] ?? null;

  const isOtherOption = (option) =>
    option?.isOther === true ||
    option?.id === 'other' ||
    /^other\b/i.test(String(option?.amount ?? ''));

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelect) onSelect(id);
  };

  const handleDonate = () => {
    const donationOption =
      selectedOption && isOtherOption(selectedOption)
        ? {
            ...selectedOption,
            amount: customAmount ? `${currency} ${customAmount}` : selectedOption.amount,
            currency,
            text: customAmount ? 'Custom amount' : selectedOption.text,
          }
        : { ...selectedOption, currency };

    if (onDonate) {
      onDonate(donationOption);
    }
  };

  return (
    <section className={`donation-options-card ${className}`.trim()}>
      <h2 className="donation-options-card__title">{title}</h2>

      <div className="donation-options-card__panel">
        <div className="donation-options-card__list">
          {options.map((option) => {
            const isSelected = option.id === selectedId;
            const isOther = isOtherOption(option);

            if (isOther) {
              return (
                <div
                  key={option.id}
                  className={`donation-options-card__item donation-options-card__other-item ${
                    isSelected ? 'is-selected' : ''
                  }`}
                  onClick={() => handleSelect(option.id)}
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    className="donation-options-card__other-input"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setCustomAmount(val);
                      handleSelect(option.id);
                    }}
                  />
                  <div className="donation-options-card__currency-wrap">
                    <select
                      className="donation-options-card__currency-select"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {currencies.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="donation-options-card__dropdown-icon" size={12} />
                  </div>
                </div>
              );
            }

            return (
              <button
                key={option.id}
                type="button"
                className={`donation-options-card__item ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleSelect(option.id)}
                aria-pressed={isSelected}
              >
                <span className="donation-options-card__amount">{option.amount}</span>
                {option.text && (
                  <span className="donation-options-card__text">{option.text}</span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="donation-options-card__button"
          onClick={handleDonate}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}