import React from 'react';
import './EducationImpactStats.css';
import brick1Img from '../../assets/img/Education/brick-1.webp';
import brick2Img from '../../assets/img/Education/brick-2.webp';

const defaultStatsData = [
  {
    value: "9",
    title: "Dream Schools",
    desc: "For widows and their children",
    bgImage: brick1Img
  },
  {
    value: "205+",
    title: "Students Enrolled",
    desc: "Phase 1 complete",
    bgImage: brick2Img
  }
];

export default function EducationImpactStats({
  title = "EVERY BRICK COUNTS",
  subtitle = "How Your Donations Help",
  stats = defaultStatsData,
  onDonateClick
}) {
  const handleDonate = () => {
    if (onDonateClick) {
      onDonateClick();
      return;
    }
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="education-impact-stats-section">
      <div className="education-impact-stats-container">
        {/* Header: Title + Subtitle + Donate Now Pill Button */}
        <div className="education-impact-stats-header">
          <h2 className="education-impact-stats-title">{title}</h2>
          <p className="education-impact-stats-subtitle">{subtitle}</p>
          <button
            type="button"
            className="education-impact-stats-btn"
            onClick={handleDonate}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 20.096 16.447"
              className="education-impact-btn-icon"
              aria-hidden="true"
            >
              <path
                d="M17.953,20.546l-.274-.021a9.939,9.939,0,0,0-1.455-.057.263.263,0,0,0-.169.08c-.48.48-.962.931-1.249,1.181a1.9,1.9,0,0,1-1.524.45,1.882,1.882,0,0,1-1.329-.881.6.6,0,0,1,.082-.738L15.56,17,14.025,15.42a4.584,4.584,0,0,0-6.626,0,4.959,4.959,0,0,0,0,6.859l2.4,2.479,5.454,5.509a.626.626,0,0,0,.461.18,1.015,1.015,0,0,0,.7-.313.855.855,0,0,0,.132-1.174l-3.006-3.038a.234.234,0,0,1,.332-.331l3.006,3.035.2.2a.629.629,0,0,0,.457.178,1,1,0,0,0,.7-.313,1.04,1.04,0,0,0,.31-.71.659.659,0,0,0-.178-.466l-3.006-3.038a.236.236,0,0,1,0-.331.233.233,0,0,1,.329,0l3.2,3.234a.625.625,0,0,0,.457.178,1.006,1.006,0,0,0,.7-.313,1.04,1.04,0,0,0,.31-.71.644.644,0,0,0-.183-.466l-3-3.035a.234.234,0,1,1,.331-.331l3.2,3.231a.851.851,0,0,0,1.16-.135,1.018,1.018,0,0,0,.313-.708A.64.64,0,0,0,22,24.625l-4.045-4.091Z"
                transform="translate(-6.022 -14)"
                fill="#ffffff"
              />
            </svg>
            <span>Donate Now</span>
          </button>
        </div>

        {/* 2 Photo-Stat Cards: 2-column grid on desktop, stacked on mobile */}
        <div className="education-impact-stats-grid">
          {stats.map((stat, idx) => (
            <div
              className={`education-stat-card education-stat-card-${idx + 1}`}
              key={idx}
              style={{ backgroundImage: `url(${stat.bgImage})` }}
            >
              <div className="education-stat-card-overlay" />
              <div className="education-stat-card-content">
                <strong className="education-stat-value">{stat.value}</strong>
                <h3 className="education-stat-title">{stat.title}</h3>
                <p className="education-stat-desc">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
