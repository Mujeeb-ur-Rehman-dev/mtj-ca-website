import React from 'react';
import './LiftingGazaSection.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import homesIcon from '../../assets/img/PalestineRelief/homes.png';
import suppliesIcon from '../../assets/img/PalestineRelief/supplies.png';
import childrenIcon from '../../assets/img/PalestineRelief/children.png';
import sirenIcon from '../../assets/img/PalestineRelief/siren.png';

const crisisFeatures = [
  {
    icon: homesIcon,
    title: "Families Displaced",
    text: "Millions have been forced from their homes, losing safety, stability, and livelihoods."
  },
  {
    icon: suppliesIcon,
    title: "Hunger Spreading",
    text: "2.15 million people face acute food insecurity, while children and families go hungry."
  },
  {
    icon: childrenIcon,
    title: "Children at Risk",
    text: "An estimated 19,000 children have been orphaned or separated from their families."
  },
  {
    icon: sirenIcon,
    title: "Urgent Essentials",
    text: "Access to safe drinking water, nutritious food, and basic necessities remains critical."
  }
];

export default function LiftingGazaSection({ onDonate }) {
  return (
    <section className="lifting-gaza-section" id="donate-section">
      <div className="lifting-gaza-container">
        {/* Left Column: Heading + Intro + 4 Feature Cards */}
        <div className="lifting-gaza-left">
          <h2 className="lifting-gaza-title">LIFTING GAZA OUT OF CRISIS</h2>
          <p className="lifting-gaza-desc">
            Families in Gaza are facing a devastating humanitarian crisis. Displacement, destroyed homes, and limited access to food and clean water have left millions struggling to survive.
          </p>

          <div className="lifting-gaza-grid">
            {crisisFeatures.map((feat, index) => (
              <div className="lifting-gaza-card" key={index}>
                <div className="lifting-gaza-card-icon-wrap">
                  <img src={feat.icon} alt="" className="lifting-gaza-card-icon" />
                </div>
                <div className="lifting-gaza-card-body">
                  <h3 className="lifting-gaza-card-title">{feat.title}</h3>
                  <p className="lifting-gaza-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="lifting-gaza-right">
          <div className="lifting-gaza-donation-box">
            <DonatinCards
              campaignKey="palestine"
              campaignTitle="PALESTINE EMERGENCY FUND"
              currencyPrefix="$"
              currencyCode="CAD"
              options={[
                { amount: "95", description: "Food Distribution" },
                { amount: "175", description: "School Kits" },
                { amount: "475", description: "Family Support" },
              ]}
              monthlyOptions={["25", "50", "95", "175", "250", "475"]}
              defaultSelectedIndex={0}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
