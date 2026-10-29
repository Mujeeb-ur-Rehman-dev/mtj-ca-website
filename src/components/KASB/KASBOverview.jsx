import React from 'react';
import './KASBOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import moneyIcon from '../../assets/img/KASB/money.png';
import savingIcon from '../../assets/img/KASB/saving.png';
import employeeIcon from '../../assets/img/KASB/employee.png';
import briefcaseIcon from '../../assets/img/KASB/briefcase.png';

const features = [
  {
    icon: moneyIcon,
    title: "Skills that pay",
    text: "From football stitching to e-commerce, we teach skills that lead to real work, not just certificates."
  },
  {
    icon: savingIcon,
    title: "Earn while training",
    text: "Trainees earn an income during training, so families see the benefit from the very first month."
  },
  {
    icon: employeeIcon,
    title: "Job placement",
    text: "When training ends, our team helps each trainee find stable employment."
  },
  {
    icon: briefcaseIcon,
    title: "Small business start-up",
    text: "For those who want to work for themselves, we help start a small business so stability lasts."
  }
];

export default function KASBOverview({ onDonate }) {
  return (
    <section className="kasb-overview-section" id="donate-section">
      <div className="kasb-overview-container">
        {/* Left Column: Heading + Paragraph + 4 Feature Cards */}
        <div className="kasb-overview-left">
          <h2 className="kasb-overview-title">
            VOCATIONAL TRAINING TO EMPOWER COMMUNITIES IN PAKISTAN.
          </h2>
          <p className="kasb-overview-desc">
            Pakistan needs over one million skilled workers every year, yet less than half are trained. This gap keeps families in poverty, especially widows and vulnerable groups. The KASB Vocational Training Program exists to change that.
          </p>

          <div className="kasb-overview-grid">
            {features.map((feat, index) => (
              <div className="kasb-overview-card" key={index}>
                <div className="kasb-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="kasb-overview-icon" />
                </div>
                <div className="kasb-overview-card-body">
                  <h3 className="kasb-overview-card-title">{feat.title}</h3>
                  <p className="kasb-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="kasb-overview-right">
          <div className="kasb-donation-box">
            <DonatinCards
              campaignKey="kasb"
              campaignTitle="Support KASB Vocational Program"
              currencyPrefix="Rs"
              currencyCode="PKR"
              options={[
                { amount: "15K", description: "Essential Tools & Materials" },
                { amount: "30K", description: "Vocational Training Session" },
                { amount: "45K", description: "Skill Development for Women" },
              ]}
              monthlyOptions={["5,000", "10K", "15K", "20K", "30K", "45K"]}
              defaultSelectedIndex={2}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
