import React, { useState, useRef } from "react";
import "./CounsellingStatsCarousel.css";

const statsData = [
  {
    id: 1,
    number: "11,000+",
    label: "Clients served in 2023.",
  },
  {
    id: 2,
    number: "5,600+",
    label: "Total client sessions in 2023.",
  },
  {
    id: 3,
    number: "5",
    label: "Average sessions per client.",
  },
];

const CounsellingStatsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? statsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === statsData.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -45) {
      // Swiped right -> prev
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="counselling-stats" aria-label="Community Impact Statistics">
      <div className="counselling-stats__container">
        <div
          className="counselling-stats__stamp"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h2 className="counselling-stats__title">
            CREATE MEANINGFULL CHANGE
          </h2>

          <div className="counselling-stats__track">
            <div className="counselling-stats__grid" role="region" aria-live="polite">
              {statsData.map((stat, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={stat.id}
                    className={`counselling-stats__item ${
                      isActive ? "counselling-stats__item--active" : ""
                    }`}
                  >
                    <div className="counselling-stats__number">{stat.number}</div>
                    <p className="counselling-stats__label">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="counselling-stats__nav">
            <button
              type="button"
              className="counselling-stats__arrow counselling-stats__arrow--prev"
              onClick={handlePrev}
              aria-label="Previous statistic"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <polygon
                  points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="counselling-stats__dots">
              {statsData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`counselling-stats__dot ${
                    index === activeIndex ? "counselling-stats__dot--active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="counselling-stats__arrow counselling-stats__arrow--next"
              onClick={handleNext}
              aria-label="Next statistic"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <polygon
                  points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingStatsCarousel;
