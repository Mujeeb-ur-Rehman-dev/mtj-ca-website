import React from 'react';
import './HotMealsOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import soupIcon from '../../assets/img/HotMeals/soup.png';
import locationIcon from '../../assets/img/HotMeals/location.png';
import healthcareIcon from '../../assets/img/HotMeals/healthcare.png';
import trayIcon from '../../assets/img/HotMeals/tray.png';

const features = [
  {
    icon: soupIcon,
    title: "Hot meals today",
    text: "Freshly prepared hot meals are served to those facing hunger in downtown Toronto."
  },
  {
    icon: locationIcon,
    title: "Growing across the GTA",
    text: "With your support, we’re expanding to reach more shelters, communities, and people in need."
  },
  {
    icon: healthcareIcon,
    title: "Made with care",
    text: "Every meal is rooted in the Islamic values of service, mercy, and dignity."
  },
  {
    icon: trayIcon,
    title: "Just $10",
    text: "One small gift provides a meal and reminds someone they are not forgotten."
  }
];

export default function HotMealsOverview({ onDonate }) {
  return (
    <section className="hot-meals-overview-section" id="donate-section">
      <div className="hot-meals-overview-container">
        {/* Left Column: Heading + Paragraph + 4 Feature Cards */}
        <div className="hot-meals-overview-left">
          <h2 className="hot-meals-overview-title">
            ONE-THIRD OF FOOD BANK VISITORS ARE CHILDREN - $10 FEEDS A CHILD
          </h2>
          <p className="hot-meals-overview-desc">
            Last year, Canadian food banks recorded over 2 million visits in a single month: the highest ever, and one-third of those visitors were children. With food prices rising, more neighbours are struggling to feed their families. Our $10 Hot Meal initiative makes sure no one goes to bed hungry.
          </p>

          <div className="hot-meals-overview-grid">
            {features.map((feat, index) => (
              <div className="hot-meals-overview-card" key={index}>
                <div className="hot-meals-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="hot-meals-overview-icon" />
                </div>
                <div className="hot-meals-overview-card-body">
                  <h3 className="hot-meals-overview-card-title">{feat.title}</h3>
                  <p className="hot-meals-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="hot-meals-overview-right">
          <div className="hot-meals-donation-box">
            <DonatinCards
              campaignKey="hotMeals"
              campaignTitle="Provide Food Security"
              currencyPrefix="Rs"
              currencyCode="PKR"
              options={[
                { amount: "2,000", description: "Provide 1 Hot Meal to someone in need" },
                { amount: "10K", description: "Serve 5 fresh, nourishing meals" },
                { amount: "20K", description: "Feed 10 people battling hunger" },
              ]}
              monthlyOptions={["1,000", "2,000", "5,000", "10K", "20K", "50K"]}
              defaultSelectedIndex={0}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
