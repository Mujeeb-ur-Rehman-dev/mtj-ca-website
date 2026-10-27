import React from 'react';
import './ApnaGharOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import homesIcon from '../../assets/img/ApnaGhar/homes.png';
import waterTapIcon from '../../assets/img/ApnaGhar/water-tap.png';
import solarIcon from '../../assets/img/ApnaGhar/solar.png';
import briefcaseIcon from '../../assets/img/ApnaGhar/briefcase.png';

const features = [
  {
    icon: homesIcon,
    title: "A home of her own",
    text: "A fully furnished 2-bedroom house of 1,100 sq ft, so she can raise her children herself, under a roof that is truly theirs."
  },
  {
    icon: waterTapIcon,
    title: "Clean water",
    text: "Clean drinking water in every home, for healthier children and fewer long walks to fetch it."
  },
  {
    icon: solarIcon,
    title: "Solar energy",
    text: "Solar electricity powers the whole community, keeping lights on and costs down."
  },
  {
    icon: briefcaseIcon,
    title: "Skill training",
    text: "KASB skill training that helps a mother earn her own income and stand on her own feet."
  }
];

export default function ApnaGharOverview({ onDonate }) {
  return (
    <section className="apna-ghar-overview-section" id="donate-section">
      <div className="apna-ghar-overview-container">
        {/* Left Column: Heading + Intro + 4 Icon Features + Hadith Box */}
        <div className="apna-ghar-overview-left">
          <h2 className="apna-ghar-overview-title">A HOME THAT KEEPS FAMILIES TOGETHER</h2>
          <p className="apna-ghar-overview-desc">
            When a widow loses her home, she faces a choice no mother should make: keep her children, or keep them safe at an orphanage. Apna Ghar exists so she never has to make that choice.
          </p>

          <div className="apna-ghar-overview-grid">
            {features.map((feat, index) => (
              <div className="apna-ghar-overview-card" key={index}>
                <div className="apna-ghar-overview-icon-wrap">
                  <img src={feat.icon} alt="" className="apna-ghar-overview-icon" />
                </div>
                <div className="apna-ghar-overview-card-body">
                  <h3 className="apna-ghar-overview-card-title">{feat.title}</h3>
                  <p className="apna-ghar-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hadith Quote Box */}
          <div className="apna-ghar-hadith-box">
            <h4 className="apna-ghar-hadith-text">
              “The one who looks after a widow or a poor person is like a Mujahid in the cause of Allah.”
            </h4>
            <span className="apna-ghar-hadith-source">— Sahih Bukhari 6006</span>
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="apna-ghar-overview-right">
          <div className="apna-ghar-donation-box">
            <DonatinCards
              campaignKey="apnaGhar"
              campaignTitle="Support Widows & Orphans By donating to the Apna Ghar Project"
              currencyPrefix="$"
              currencyCode="CAD"
              options={[
                { amount: "100", description: "Lay the First Bricks" },
                { amount: "500", description: "Build the Walls" },
                { amount: "10,000", description: "Build a Full Home" },
              ]}
              monthlyOptions={["25", "50", "100", "250", "500", "1,000"]}
              defaultSelectedIndex={0}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
