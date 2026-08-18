import React, { useState, useEffect } from "react";
import "./ZakatCalculatorCard.css";

const ZakatCalculatorCard = ({ onClose, onContinue, onManualEntry }) => {
  const [currency, setCurrency] = useState("PKR");
  const [metal, setMetal] = useState("Silver");
  const [nisabThreshold, setNisabThreshold] = useState("Rs341,349.34");

  // Handle currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    // Update Nisab threshold based on currency (you can add dynamic calculation here)
    updateNisabThreshold(e.target.value, metal);
  };

  // Handle metal change
  const handleMetalChange = (e) => {
    setMetal(e.target.value);
    // Update Nisab threshold based on metal (you can add dynamic calculation here)
    updateNisabThreshold(currency, e.target.value);
  };

  // Update Nisab threshold (placeholder - integrate with real calculations)
  const updateNisabThreshold = (selectedCurrency, selectedMetal) => {
    // Mock data - replace with actual API/calculation
    const thresholds = {
      "PKR-Silver": "Rs341,349.34",
      "PKR-Gold": "Rs5,451,180.00",
      "USD-Silver": "$2,050.00",
      "USD-Gold": "$32,700.00",
      "EUR-Silver": "€1,850.00",
      "EUR-Gold": "€29,500.00",
    };
    const key = `${selectedCurrency}-${selectedMetal}`;
    setNisabThreshold(thresholds[key] || "Value");
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue({ currency, metal, nisabThreshold });
    }
  };

  const handleManualEntry = () => {
    if (onManualEntry) {
      onManualEntry({ currency, metal });
    }
  };

  return (
    <div className="zcc-overlay">
      <div className="zcc-card">
        {/* Close Button */}
        <button className="zcc-close" onClick={onClose} aria-label="Close calculator">
          ✕
        </button>

        {/* Header */}
        <h2 className="zcc-title">Zakat Calculator</h2>

        {/* Instructions */}
        <p className="zcc-instructions">
          Calculate your obligation based on your assets and debts. Include only funds you can access and use.
        </p>

        {/* Currency Field */}
        <div className="zcc-field-group">
          <label htmlFor="currency" className="zcc-label">
            Currency for Zakat
          </label>
          <select
            id="currency"
            className="zcc-select"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="PKR">PKR · Pakistani Rupee</option>
            <option value="USD">USD · US Dollar</option>
            <option value="EUR">EUR · Euro</option>
            <option value="GBP">GBP · British Pound</option>
            <option value="AED">AED · UAE Dirham</option>
            <option value="SAR">SAR · Saudi Riyal</option>
          </select>
        </div>

        {/* Metal Field */}
        <div className="zcc-field-group">
          <label htmlFor="metal" className="zcc-label">
            Metal for Nisab
          </label>
          <select
            id="metal"
            className="zcc-select"
            value={metal}
            onChange={handleMetalChange}
          >
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
          </select>
        </div>

        {/* Nisab Threshold Display */}
        <div className="zcc-threshold-box">
          <span className="zcc-threshold-label">Nisab threshold</span>
          <span className="zcc-threshold-value">{nisabThreshold}</span>
        </div>

        {/* Primary Button */}
        <button
          className="zcc-btn zcc-btn--primary"
          onClick={handleContinue}
        >
          Continue
        </button>

        {/* Secondary Button */}
        <button
          className="zcc-btn zcc-btn--secondary"
          onClick={handleManualEntry}
        >
          Enter amount manually
        </button>

        {/* Privacy Notice */}
        <p className="zcc-privacy">
          Data is used only for calculation and stays on your device.
        </p>
      </div>
    </div>
  );
};

export default ZakatCalculatorCard;
