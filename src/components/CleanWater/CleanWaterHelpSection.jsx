import React from 'react';
import './CleanWaterHelpSection.css';
import help1Img from '../../assets/img/CleanWater/help-1.webp';
import help2Img from '../../assets/img/CleanWater/help-2.webp';
import help3Img from '../../assets/img/CleanWater/help-3.webp';

const helpCardsData = [
  {
    image: help1Img,
    title: "Water Access",
    amount: "$655",
    description:
      "Your gift helps build a hand pump that gives a family in Pakistan safe access to clean water, day after day.",
  },
  {
    image: help2Img,
    title: "Community Water Access",
    amount: "$815",
    description:
      "Fund a community hand-pump water access point. One donation can serve many families in remote regions across Pakistan.",
  },
  {
    image: help3Img,
    title: "Water Filtration Plant",
    amount: "$16,240",
    description:
      "Help provide a community in Pakistan with access to safe, clean drinking water through the installation of a Reverse Osmosis filtration plant.",
  },
];

export default function CleanWaterHelpSection({ onDonate }) {
  const handleDonate = (card) => {
    if (onDonate) {
      onDonate(card);
      return;
    }
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cleanwater-help-section">
      <div className="cleanwater-help-container">
        <h2 className="cleanwater-help-title">HOW YOU CAN HELP</h2>

        <div className="cleanwater-help-grid">
          {helpCardsData.map((card, idx) => (
            <div className="cleanwater-help-card" key={idx}>
              <div className="cleanwater-help-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="cleanwater-help-image"
                  loading="lazy"
                />
              </div>

              <div className="cleanwater-help-card-body">
                <h3 className="cleanwater-help-card-title">{card.title}</h3>
                <div className="cleanwater-help-card-amount">{card.amount}</div>
                <p className="cleanwater-help-card-desc">{card.description}</p>

                <button
                  type="button"
                  className="cleanwater-help-btn"
                  onClick={() => handleDonate(card)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 20.096 16.447"
                    className="cleanwater-help-btn-icon"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
