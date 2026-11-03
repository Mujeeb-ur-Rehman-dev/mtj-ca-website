import React, { useRef, useState } from 'react';
import './WhyChooseUsSection.css';

import iconProfit from '../../assets/img/AboutUs/icon-profit.png';
import iconTrust from '../../assets/img/AboutUs/icon-trust.svg';
import iconCosts from '../../assets/img/AboutUs/icon-costs.svg';
import iconGlobal from '../../assets/img/AboutUs/icon-global.svg';

const cardsData = [
  {
    id: 1,
    title: 'We Are Not\nHere For Profit',
    description:
      "We serve for Allah's sake alone. Every project is built on sincerity, without any profit or agenda. We are driven by the mission to serve humanity, helping those who can't help themselves.",
    icon: iconProfit,
    iconAlt: 'We Are Not Here For Profit',
    iconClass: 'different-card-icon--profit',
  },
  {
    id: 2,
    title: 'Projects You\nCan Trust',
    description:
      'What you see is what we do. From local volunteers to on-the-ground delivery, every step is honest, transparent and focused on real change.',
    icon: iconTrust,
    iconAlt: 'Projects You Can Trust',
    iconClass: 'different-card-icon--trust',
  },
  {
    id: 3,
    title: 'No Hidden\nCosts',
    description:
      'We believe in transparency, ensuring your contribution is used responsibly to support the people you choose to help, making a meaningful difference for those facing crisis, poverty, and hardship.',
    icon: iconCosts,
    iconAlt: 'No Hidden Costs',
    iconClass: 'different-card-icon--costs',
  },
  {
    id: 4,
    title: 'We Are\nTruly Global',
    description:
      'From Pakistan to Gaza, Sudan to Canada, our teams work where help is needed most, bringing relief and compassion to every corner we can reach.',
    icon: iconGlobal,
    iconAlt: 'We Are Truly Global',
    iconClass: 'different-card-icon--global',
  },
];

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="different-section" aria-label="What makes us different">
      <div className="different-container">
        <h2 className="different-title">WHAT MAKES US DIFFERENT?</h2>

        {/* Desktop Grid (4 Solid Cream Rounded Rectangular Cards) */}
        <div className="different-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="different-card">
              <h3 className="different-card-title">{card.title}</h3>
              <div className="different-card-icon-wrap">
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className={`different-card-icon ${card.iconClass}`}
                  loading="lazy"
                />
              </div>
              <p className="different-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View Slider (1 Card Displayed with Touch Swipe) */}
        <div
          className="different-mobile-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="different-card">
            <h3 className="different-card-title">{cardsData[currentIndex].title}</h3>
            <div className="different-card-icon-wrap">
              <img
                src={cardsData[currentIndex].icon}
                alt={cardsData[currentIndex].iconAlt}
                className={`different-card-icon ${cardsData[currentIndex].iconClass}`}
              />
            </div>
            <p className="different-card-desc">{cardsData[currentIndex].description}</p>
          </div>

          <div className="different-carousel-controls">
            <button className="different-nav-btn" onClick={handlePrev} aria-label="Previous card">
              &larr;
            </button>
            <div className="different-carousel-dots">
              {cardsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`different-dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="different-nav-btn" onClick={handleNext} aria-label="Next card">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;