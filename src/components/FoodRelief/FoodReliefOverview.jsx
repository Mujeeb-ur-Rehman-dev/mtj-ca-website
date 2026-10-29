import React from 'react';
import './FoodReliefOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import homesIcon from '../../assets/img/FoodRelief/homes.png';
import waterTapIcon from '../../assets/img/FoodRelief/water-tap.png';
import solarIcon from '../../assets/img/FoodRelief/solar.png';
import briefcaseIcon from '../../assets/img/FoodRelief/briefcase.png';

const features = [
  {
    icon: homesIcon,
    title: "Families in Need",
    text: "For millions in Pakistan, that picture still feels out of reach. More than 40% of children under five are malnourished."
  },
  {
    icon: waterTapIcon,
    title: "Harder Than Ever",
    text: "Floods have destroyed farms. Drought has ruined crops. Rising food costs have made it harder than ever for parents to feed their children."
  },
  {
    icon: solarIcon,
    title: "Impossible Choices",
    text: "Families are being forced to make impossible choices. Food or medicine? Dinner tonight or rent tomorrow?"
  },
  {
    icon: briefcaseIcon,
    title: "Your Support Matters",
    text: "MTJF’s Food Relief Program supports more than 500 families every month. Your donation becomes a bridge of mercy, connecting our Ummah to those who need it most."
  }
];

export default function FoodReliefOverview({ onDonate }) {
  return (
    <section className="food-relief-overview-section" id="donate-section">
      <div className="food-relief-overview-container">
        {/* Left Column: Heading + Paragraph + 4 Feature Cards */}
        <div className="food-relief-overview-left">
          <h2 className="food-relief-overview-title">
            HELP FEED PEOPLE IN NEED
          </h2>
          <p className="food-relief-overview-desc">
            Picture a struggling family in Pakistan sitting down to a nourishing meal because Allah’s mercy reached them through you: flour, rice, oil, and lentils to help feed them through the month.
          </p>

          <div className="food-relief-overview-grid">
            {features.map((feat, index) => (
              <div className="food-relief-overview-card" key={index}>
                <div className="food-relief-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="food-relief-overview-icon" />
                </div>
                <div className="food-relief-overview-card-body">
                  <h3 className="food-relief-overview-card-title">{feat.title}</h3>
                  <p className="food-relief-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="food-relief-overview-right">
          <div className="food-relief-donation-box">
            <DonatinCards
              campaignKey="foodRelief"
              campaignTitle="Provide Food Security"
              currencyPrefix="Rs"
              currencyCode="PKR"
              options={[
                { amount: "20K", description: "Provide food packs for 1 month for 1 family" },
                { amount: "40K", description: "Provide food packs for struggling families." },
                { amount: "100K", description: "Deliver food aid to multiple households." },
              ]}
              monthlyOptions={["5,000", "10K", "20K", "40K", "60K", "100K"]}
              defaultSelectedIndex={0}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
