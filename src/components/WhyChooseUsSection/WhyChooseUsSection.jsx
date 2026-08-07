import React, { useState } from 'react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      id: 1,
      title: 'We Are Not\nHere For Profit',
      description:
        "We serve for Allah's sake alone. Every project is built on sincerity, without any profit or agenda. We are driven by the mission to serve humanity, helping those who can't help themselves.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Projects You\nCan Trust',
      description:
        'What you see is what we do. From local volunteers to on-the-ground delivery, every step is honest, transparent and focused on real change.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="46" height="46">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'No Hidden\nCosts',
      description:
        'We are transparent and committed, ensuring that every dollar you contribute goes directly to the people you choose to support, making life better for those in crisis, poverty, and hardship.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="46" height="46">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      id: 4,
      title: 'We Are\nTruly Global',
      description:
        'From Pakistan to Gaza, Sudan to Canada, our teams work where help is needed most, bringing relief and compassion to every corner we can reach.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="46" height="46">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
        </svg>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="different-section">
      <div className="different-container">
        <h2 className="different-title">WHAT MAKES US DIFFERENT?</h2>

        {/* Desktop Grid (4 Cards Side-by-Side) */}
        <div className="different-grid">
          {cardsData.map((card) => (
            <div key={card.id} className="stamp-card">
              <div className="stamp-card-content">
                <h3 className="stamp-card-title">{card.title}</h3>
                <div className="stamp-card-icon">{card.icon}</div>
                <p className="stamp-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Slider (Exactly 1 Card Displayed) */}
        <div className="different-mobile-wrapper">
          <div className="stamp-card">
            <div className="stamp-card-content">
              <h3 className="stamp-card-title">{cardsData[currentIndex].title}</h3>
              <div className="stamp-card-icon">{cardsData[currentIndex].icon}</div>
              <p className="stamp-card-desc">{cardsData[currentIndex].description}</p>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="nav-btn" onClick={handlePrev} aria-label="Previous card">
              &larr;
            </button>
            <div className="carousel-dots">
              {cardsData.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <button className="nav-btn" onClick={handleNext} aria-label="Next card">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;