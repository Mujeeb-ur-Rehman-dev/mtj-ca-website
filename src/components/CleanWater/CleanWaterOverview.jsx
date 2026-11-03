import React from 'react';
import './CleanWaterOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import hoursWaterIcon from '../../assets/img/CleanWater/hours-water.svg';
import bacterialBurdenIcon from '../../assets/img/CleanWater/bacterial-burden.svg';
import childhoodThreatsIcon from '../../assets/img/CleanWater/childhood-threats.svg';
import lastingSolutionsIcon from '../../assets/img/CleanWater/lasting-solutions.svg';

const features = [
  {
    icon: hoursWaterIcon,
    title: "Hours For Water",
    text: "Many women spend 3-5 hours a day just trying to bring water home."
  },
  {
    icon: bacterialBurdenIcon,
    title: "Bacterial burden",
    text: "UNICEF reports around 70% of households drink contaminated water."
  },
  {
    icon: childhoodThreatsIcon,
    title: "Childhood threats",
    text: "Poor water and sanitation are linked to around 53,000 deaths of children each year from diarrhea."
  },
  {
    icon: lastingSolutionsIcon,
    title: "Lasting solutions",
    text: "MTJ Foundation has installed 150+ hand pumps and supports long-term solutions so families have clean water day after day."
  }
];

export default function CleanWaterOverview({ onDonate }) {
  return (
    <section className="cleanwater-overview-section" id="donate-section">
      <div className="cleanwater-overview-container">
        {/* Left Column: Heading + Paragraph + 2x2 Feature Cards */}
        <div className="cleanwater-overview-left">
          <h2 className="cleanwater-overview-title">
            WATER – THE BEST FORM OF CHARITY
          </h2>
          <p className="cleanwater-overview-desc">
            Millions in Pakistan still lack safe drinking water. In Sindh and Balochistan, families collect water from ponds, rivers, and even floodwater because there is no better option.
          </p>

          <div className="cleanwater-overview-grid">
            {features.map((feat, index) => (
              <div className="cleanwater-overview-card" key={index}>
                <div className="cleanwater-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="cleanwater-overview-icon" />
                </div>
                <div className="cleanwater-overview-card-body">
                  <h3 className="cleanwater-overview-card-title">{feat.title}</h3>
                  <p className="cleanwater-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded CAD Donation Card */}
        <div className="cleanwater-overview-right">
          <div className="cleanwater-donation-box">
            <DonatinCards
              campaignKey="cleanWater"
              campaignTitle="Support Clean Water"
              currencyPrefix="$"
              currencyCode="CAD"
              oneTimeTabLabel="Give Once"
              options={[
                { amount: "655", description: "Provide a Hand Pump for 1 Family" },
                { amount: "815", description: "Community Hand Pump (no zakat)" },
                { amount: "16,240", description: "RO Filtration Plant (no zakat)" },
              ]}
              monthlyOptions={["10", "25", "50", "100", "250", "500"]}
              defaultSelectedIndex={1}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
