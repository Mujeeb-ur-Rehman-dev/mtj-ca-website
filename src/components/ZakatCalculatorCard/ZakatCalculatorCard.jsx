import React, { useState } from "react";
import "./ZakatCalculatorCard.css";

const ZakatCalculatorCard = ({ onClose, onContinue, onManualEntry }) => {
  const [currency, setCurrency] = useState("PKR");
  const [metal, setMetal] = useState("Silver");
  const [nisabThreshold, setNisabThreshold] = useState("Rs341,349.34");
  const [currentStep, setCurrentStep] = useState("setup");
  const [cashAssets, setCashAssets] = useState({
    cashOnHand: "",
    bankBalances: "",
    cryptocurrency: "",
  });
  const [preciousMetals, setPreciousMetals] = useState({
    goldUnit: "grams",
    goldValue: "",
    silverUnit: "grams",
    silverValue: "",
  });
  const [investments, setInvestments] = useState({
    resale: false,
    holding: false,
    financialTradingAssets: "",
    realEstateResale: "",
    stockPortfolioValue: "",
    retirementFunds: "",
  });
  const [business, setBusiness] = useState({
    ownsBusiness: false,
    inventory: "",
    accountsReceivable: "",
    businessCash: "",
    shortTermLiabilities: "",
  });
  const [debts, setDebts] = useState({
    repayableLoans: "",
    immediateLivingExpenses: "",
    creditCardsAndBills: "",
    taxesDue: "",
    personalLoansOwed: "",
    longTermDebtInstallments: "",
  });
  const [manualAmount, setManualAmount] = useState("");

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
    if (currentStep === "setup") {
      setCurrentStep("cash");
      return;
    }

    if (currentStep === "cash") {
      setCurrentStep("metals");
      return;
    }

    if (currentStep === "metals") {
      setCurrentStep("investments");
      return;
    }

    if (currentStep === "investments") {
      setCurrentStep("business");
      return;
    }

    if (currentStep === "business") {
      setCurrentStep("debts");
      return;
    }

    if (currentStep === "debts") {
      setCurrentStep("result");
      return;
    }

    if (onContinue) {
      onContinue({ currency, metal, nisabThreshold, cashAssets, preciousMetals, investments, business, debts });
    }
  };

  const handleManualEntry = () => {
    setCurrentStep("manual");
  };

  const handleManualContinue = () => {
    if (onManualEntry) {
      onManualEntry({ currency, metal, manualAmount });
    }
  };

  const handleCashAssetChange = (e) => {
    const { name, value } = e.target;
    setCashAssets((currentAssets) => ({
      ...currentAssets,
      [name]: value,
    }));
  };

  const handlePreciousMetalChange = (e) => {
    const { name, value } = e.target;
    setPreciousMetals((currentMetals) => ({
      ...currentMetals,
      [name]: value,
    }));
  };

  const handleInvestmentChange = (e) => {
    const { name, type, checked, value } = e.target;
    setInvestments((currentInvestments) => ({
      ...currentInvestments,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBusinessChange = (e) => {
    const { name, type, checked, value } = e.target;
    setBusiness((currentBusiness) => ({
      ...currentBusiness,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDebtChange = (e) => {
    const { name, value } = e.target;
    setDebts((currentDebts) => ({
      ...currentDebts,
      [name]: value,
    }));
  };

  const getMetalTotal = (value, unit, rate) => {
    const amount = Number(value) || 0;
    return unit === "value" ? amount : amount * rate;
  };

  const goldTotal = getMetalTotal(preciousMetals.goldValue, preciousMetals.goldUnit, 39254.24);
  const silverTotal = getMetalTotal(preciousMetals.silverValue, preciousMetals.silverUnit, 600.13);

  return (
    <div className={`zcc-overlay${currentStep === "business" || currentStep === "debts" || currentStep === "result" || currentStep === "manual" ? " zcc-overlay--business" : ""}`}>
      <div className={`zcc-card zcc-card--${currentStep}${currentStep === "business" && business.ownsBusiness ? " zcc-card--business-active" : ""}`}>
        {/* Close Button */}
        <button className="zcc-close" onClick={onClose} aria-label="Close calculator">
          ✕
        </button>

        {/* Header */}
        <div className="zcc-header">
          {currentStep === "cash" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("setup")}
              aria-label="Back to calculator setup"
            >
              &#8249;
            </button>
          )}
          {currentStep === "metals" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("cash")}
              aria-label="Back to cash and savings"
            >
              &#8249;
            </button>
          )}
          {currentStep === "investments" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("metals")}
              aria-label="Back to precious metals"
            >
              &#8249;
            </button>
          )}
          {currentStep === "business" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("investments")}
              aria-label="Back to investments"
            >
              &#8249;
            </button>
          )}
          {currentStep === "debts" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("business")}
              aria-label="Back to business"
            >
              &#8249;
            </button>
          )}
          {currentStep === "result" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("debts")}
              aria-label="Back to debts"
            >
              &#8249;
            </button>
          )}
          {currentStep === "manual" && (
            <button
              className="zcc-back"
              onClick={() => setCurrentStep("setup")}
              aria-label="Back to calculator"
            >
              &#8249;
            </button>
          )}
          <h2 className="zcc-title">
            {currentStep === "cash"
              ? "Cash and savings"
              : currentStep === "metals"
                ? "Precious metals"
                : currentStep === "investments"
                  ? "Investments"
                  : currentStep === "business"
                    ? "Business"
                    : currentStep === "debts"
                      ? "Debts"
                      : currentStep === "result"
                        ? "Zakat not required"
                        : currentStep === "manual"
                          ? "Zakat amount"
                : "Zakat Calculator"}
          </h2>
        </div>

        <div className="zcc-content">
          {currentStep === "manual" ? (
            <div className="zcc-manual-step">
              <p className="zcc-manual-intro">
                Enter the exact value you calculated manually. This amount will be processed as your Zakat donation.
              </p>

              <div className="zcc-manual-input-wrap">
                <input
                  className="zcc-manual-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  placeholder="Zakat amount"
                  value={manualAmount}
                  onChange={(e) => setManualAmount(e.target.value)}
                />
                <select
                  className="zcc-manual-currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                  aria-label="Zakat amount currency"
                >
                  <option value="PKR">PKR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="AED">AED</option>
                  <option value="SAR">SAR</option>
                </select>
              </div>

              <button
                className="zcc-btn zcc-btn--primary zcc-manual-continue"
                onClick={handleManualContinue}
                disabled={!manualAmount}
              >
                Continue
              </button>

              <button
                className="zcc-btn zcc-btn--secondary zcc-manual-back"
                onClick={() => setCurrentStep("setup")}
              >
                Back to calculator
              </button>
            </div>
          ) : currentStep === "setup" ? (
            <>
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
            </>
          ) : currentStep === "cash" ? (
            <div className="zcc-cash-step">
              <p className="zcc-cash-intro">
                Enter the total value of your available funds.
              </p>

              <div className="zcc-amount-group">
                <input
                  id="cashOnHand"
                  name="cashOnHand"
                  className="zcc-amount-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  placeholder="Cash on hand"
                  value={cashAssets.cashOnHand}
                  onChange={handleCashAssetChange}
                />
              </div>

              <div className="zcc-amount-group">
                <input
                  id="bankBalances"
                  name="bankBalances"
                  className="zcc-amount-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  placeholder="Bank and wallet balances"
                  value={cashAssets.bankBalances}
                  onChange={handleCashAssetChange}
                />
                <p className="zcc-helper-text">
                  Include checking, savings, and apps like PayPal or Venmo.
                </p>
              </div>

              <div className="zcc-amount-group">
                <input
                  id="cryptocurrency"
                  name="cryptocurrency"
                  className="zcc-amount-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  placeholder="Cryptocurrency value"
                  value={cashAssets.cryptocurrency}
                  onChange={handleCashAssetChange}
                />
                <p className="zcc-helper-text">
                  Include all crypto assets held in wallets or on exchanges
                </p>
              </div>

              <button
                className="zcc-btn zcc-btn--primary zcc-cash-continue"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : currentStep === "metals" ? (
            <div className="zcc-metals-step">
              <p className="zcc-metals-intro">
                Enter the weight or value of your physical gold and silver. Include bars, coins, and jewellery not worn regularly. Do not include gemstones, stocks, or futures.
              </p>

              <div className="zcc-metal-group">
                <h3 className="zcc-metal-title">Gold</h3>
                <div className="zcc-metal-entry">
                  <label className="zcc-metal-mode">
                    <span>Enter by</span>
                    <select
                      name="goldUnit"
                      value={preciousMetals.goldUnit}
                      onChange={handlePreciousMetalChange}
                      aria-label="Enter gold by"
                    >
                      <option value="grams">By grams</option>
                      <option value="value">By value</option>
                    </select>
                  </label>
                  <input
                    name="goldValue"
                    className="zcc-metal-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder={preciousMetals.goldUnit === "grams" ? "Grams" : "Value"}
                    value={preciousMetals.goldValue}
                    onChange={handlePreciousMetalChange}
                  />
                </div>
                <div className="zcc-metal-total">
                  <span>Total gold value</span>
                  <strong>
                    {currency === "PKR" ? "Rs " : `${currency} `}{goldTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <small>{preciousMetals.goldUnit === "grams" ? "Rs 39,254.24/g" : ""}</small>
                  </strong>
                </div>
              </div>

              <div className="zcc-metal-group">
                <h3 className="zcc-metal-title">Silver</h3>
                <div className="zcc-metal-entry">
                  <label className="zcc-metal-mode">
                    <span>Enter by</span>
                    <select
                      name="silverUnit"
                      value={preciousMetals.silverUnit}
                      onChange={handlePreciousMetalChange}
                      aria-label="Enter silver by"
                    >
                      <option value="grams">By grams</option>
                      <option value="value">By value</option>
                    </select>
                  </label>
                  <input
                    name="silverValue"
                    className="zcc-metal-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder={preciousMetals.silverUnit === "grams" ? "Grams" : "Value"}
                    value={preciousMetals.silverValue}
                    onChange={handlePreciousMetalChange}
                  />
                </div>
                <div className="zcc-metal-total">
                  <span>Total silver value</span>
                  <strong>
                    {currency === "PKR" ? "Rs " : `${currency} `}{silverTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <small>{preciousMetals.silverUnit === "grams" ? "Rs 600.13/g" : ""}</small>
                  </strong>
                </div>
              </div>

              <button
                className="zcc-btn zcc-btn--primary zcc-metals-continue"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : currentStep === "investments" ? (
            <div className="zcc-investments-step">
              <label className="zcc-investment-option">
                <input
                  type="checkbox"
                  name="resale"
                  checked={investments.resale}
                  onChange={handleInvestmentChange}
                />
                <span>
                  <strong>Assets intended for resale</strong>
                  <small>Items bought specifically to sell for quick profit, such as day-trading stocks or commodities</small>
                </span>
              </label>

              {investments.resale && (
                <div className="zcc-investment-fields">
                  <div className="zcc-investment-field">
                    <input
                      name="financialTradingAssets"
                      className="zcc-investment-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Financial trading assets"
                      value={investments.financialTradingAssets}
                      onChange={handleInvestmentChange}
                    />
                    <p>Current market value of stocks, ETFs, and crypto</p>
                  </div>

                  <div className="zcc-investment-field">
                    <input
                      name="realEstateResale"
                      className="zcc-investment-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Real estate for resale"
                      value={investments.realEstateResale}
                      onChange={handleInvestmentChange}
                    />
                    <p>Excludes primary residence and rental properties</p>
                  </div>
                </div>
              )}

              <label className="zcc-investment-option">
                <input
                  type="checkbox"
                  name="holding"
                  checked={investments.holding}
                  onChange={handleInvestmentChange}
                />
                <span>
                  <strong>Assets intended for holding</strong>
                  <small>Assets held for dividends, income, or long-term growth</small>
                </span>
              </label>

              {investments.holding && (
                <div className="zcc-investment-fields zcc-investment-fields--holding">
                  <div className="zcc-investment-field">
                    <div className="zcc-investment-input-wrap">
                      <input
                        name="stockPortfolioValue"
                        className="zcc-investment-input"
                        type="number"
                        min="0"
                        inputMode="decimal"
                        placeholder="Stock portfolio value"
                        value={investments.stockPortfolioValue}
                        onChange={handleInvestmentChange}
                      />
                      <span className="zcc-investment-help" aria-hidden="true">?</span>
                    </div>
                    <p>Total market value of your shares</p>
                  </div>

                  <div className="zcc-investment-field">
                    <input
                      name="retirementFunds"
                      className="zcc-investment-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Retirement funds"
                      value={investments.retirementFunds}
                      onChange={handleInvestmentChange}
                    />
                    <p>Net withdrawal value minus taxes and penalties</p>
                  </div>
                </div>
              )}

              <button
                className="zcc-btn zcc-btn--primary zcc-investments-continue"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : currentStep === "business" ? (
            <div className={`zcc-business-step${business.ownsBusiness ? " zcc-business-step--active" : ""}`}>
              <label className="zcc-business-option">
                <input
                  type="checkbox"
                  name="ownsBusiness"
                  checked={business.ownsBusiness}
                  onChange={handleBusinessChange}
                />
                <span>
                  <strong>I own a business</strong>
                  <small>Ownership with active management participation.<br />Passive stock ownership is not included.</small>
                </span>
              </label>

              {business.ownsBusiness && (
                <div className="zcc-business-fields">
                  <h3>Business assets</h3>
                  <p className="zcc-business-description">Fixed assets like offices, machinery, and equipment are not subject to Zakat.</p>

                  <div className="zcc-business-field">
                    <input
                      name="inventory"
                      className="zcc-business-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Inventory"
                      value={business.inventory}
                      onChange={handleBusinessChange}
                    />
                    <p>Current market value of finished goods, raw materials, and work in progress</p>
                  </div>

                  <div className="zcc-business-field">
                    <input
                      name="accountsReceivable"
                      className="zcc-business-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Accounts receivable"
                      value={business.accountsReceivable}
                      onChange={handleBusinessChange}
                    />
                    <p>Outstanding debts owed to the business with a high probability of repayment</p>
                  </div>

                  <div className="zcc-business-field">
                    <input
                      name="businessCash"
                      className="zcc-business-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Cash in business accounts"
                      value={business.businessCash}
                      onChange={handleBusinessChange}
                    />
                    <p>Total balance across all company accounts</p>
                  </div>

                  <h3 className="zcc-business-liabilities-title">Business liabilities</h3>
                  <div className="zcc-business-field">
                    <input
                      name="shortTermLiabilities"
                      className="zcc-business-input"
                      type="number"
                      min="0"
                      inputMode="decimal"
                      placeholder="Short-term liabilities"
                      value={business.shortTermLiabilities}
                      onChange={handleBusinessChange}
                    />
                    <p>Debts due within one year, including suppliers, taxes, rent, and salaries</p>
                  </div>
                </div>
              )}

              <button
                className="zcc-btn zcc-btn--primary zcc-business-continue"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : currentStep === "debts" ? (
            <div className="zcc-debts-step">
              <section className="zcc-debt-section">
                <h3>Money owed to you</h3>
                <p>Personal loans given to others that you expect to be repaid</p>
                <input
                  name="repayableLoans"
                  className="zcc-debt-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  placeholder="Repayable loans"
                  value={debts.repayableLoans}
                  onChange={handleDebtChange}
                />
              </section>

              <section className="zcc-debt-section zcc-debt-liabilities">
                <h3>Your liabilities</h3>
                <p>Debts due immediately or within the current year that reduce your zakatable amount</p>

                <div className="zcc-debt-field">
                  <input
                    name="immediateLivingExpenses"
                    className="zcc-debt-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Immediate living expenses"
                    value={debts.immediateLivingExpenses}
                    onChange={handleDebtChange}
                  />
                  <small>Unpaid bills for rent, utilities, and food due this month</small>
                </div>

                <div className="zcc-debt-field">
                  <input
                    name="creditCardsAndBills"
                    className="zcc-debt-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Credit cards and bills"
                    value={debts.creditCardsAndBills}
                    onChange={handleDebtChange}
                  />
                  <small>Credit card balances and unpaid bills for insurance or medical services</small>
                </div>

                <div className="zcc-debt-field">
                  <input
                    name="taxesDue"
                    className="zcc-debt-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Taxes due"
                    value={debts.taxesDue}
                    onChange={handleDebtChange}
                  />
                  <small>Overdue taxes and tax liabilities for the current year</small>
                </div>

                <div className="zcc-debt-field">
                  <input
                    name="personalLoansOwed"
                    className="zcc-debt-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Personal loans owed"
                    value={debts.personalLoansOwed}
                    onChange={handleDebtChange}
                  />
                  <small>Loans from family or friends repayable within one year</small>
                </div>

                <div className="zcc-debt-field">
                  <input
                    name="longTermDebtInstallments"
                    className="zcc-debt-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    placeholder="Long-term debt instalments"
                    value={debts.longTermDebtInstallments}
                    onChange={handleDebtChange}
                  />
                  <small>Principal amount due within the current year, excluding interest</small>
                </div>
              </section>

              <button
                className="zcc-btn zcc-btn--primary zcc-debts-continue"
                onClick={handleContinue}
              >
                Calculate Zakat
              </button>
            </div>
          ) : (
            <div className="zcc-result-step">
              <div className="zcc-result-notice">
                <h3>Donate Sadaqah</h3>
                <p>
                  Your wealth is below the Nisab threshold, so Zakat is not required. However, you can still make a voluntary donation.
                </p>
              </div>

              <div className="zcc-result-summary">
                <div>
                  <span>Total assets</span>
                  <strong>Rs 0.00</strong>
                </div>
                <div>
                  <span>Total liabilities</span>
                  <strong>Rs 0.00</strong>
                </div>
                <div>
                  <span>Net zakatable wealth</span>
                  <strong>Rs 0.00</strong>
                </div>
                <div className="zcc-result-threshold">
                  <span>Nisab threshold</span>
                  <strong>{nisabThreshold}</strong>
                </div>
              </div>

              <button
                className="zcc-btn zcc-btn--primary zcc-result-continue"
                onClick={() => onContinue && onContinue({ currency, metal, nisabThreshold, cashAssets, preciousMetals, investments, business, debts })}
              >
                Donate Sadaqah
              </button>
            </div>
          )}

          {/* Privacy Notice */}
          <p className="zcc-privacy">
            Data is used only for calculation and stays on your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZakatCalculatorCard;
