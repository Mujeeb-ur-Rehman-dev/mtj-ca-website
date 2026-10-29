import React from 'react';
import './KASBImpactStats.css';
import womenTrainedIcon from '../../assets/img/KASB/women-trained.svg';
import rationIcon from '../../assets/img/KASB/ration.svg';
import qurbaniMeatIcon from '../../assets/img/KASB/qurbani-meat.svg';
import iftarMealIcon from '../../assets/img/KASB/iftar-meal.svg';

const defaultStatsData = [
  {
    icon: womenTrainedIcon,
    value: "600+",
    label: "Women trained in income-generating skills"
  },
  {
    icon: rationIcon,
    value: "500+",
    label: "Ration bags delivered monthly"
  },
  {
    icon: qurbaniMeatIcon,
    value: "3,500+",
    label: "Families received Qurbani meat this year"
  },
  {
    icon: iftarMealIcon,
    value: "16,000+",
    label: "People provided with iftar meals this year"
  }
];

export default function KASBImpactStats({
  eyebrow = "How Your Donations Help",
  title = "THE IMPACT OF OUR WORK",
  stats = defaultStatsData
}) {
  return (
    <section className="kasb-impact-stats-section">
      <div className="kasb-impact-stats-container">
        {/* Header: Eyebrow + Title */}
        <div className="kasb-impact-stats-header">
          <p className="kasb-impact-stats-eyebrow">{eyebrow}</p>
          <h2 className="kasb-impact-stats-title">{title}</h2>
        </div>

        {/* 4 Cards: 4-column row on desktop, stacked on mobile */}
        <div className="kasb-impact-stats-grid">
          {stats.map((stat, idx) => (
            <div className="kasb-stat-card" key={idx}>
              <div className="kasb-stat-icon-wrap">
                <img src={stat.icon} alt="" className="kasb-stat-icon" aria-hidden="true" />
              </div>
              <strong className="kasb-stat-value">{stat.value}</strong>
              <div className="kasb-stat-divider" />
              <p className="kasb-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
