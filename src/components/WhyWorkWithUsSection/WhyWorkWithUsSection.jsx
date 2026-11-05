import React, { useState, useRef } from "react";
import "./WhyWorkWithUsSection.css";
import bgPattern from "../../assets/img/careers/Group-5225a.png";
import iconBelieve from "../../assets/img/careers/belive.svg";
import iconDifference from "../../assets/img/careers/difference.svg";
import iconHope from "../../assets/img/careers/hope.svg";
import arrowLeft from "../../assets/img/careers/leftarrow.png";
import arrowRight from "../../assets/img/careers/arrowright.png";

const slidesData = [
  {
    id: 1,
    icon: iconBelieve,
    titleDesktop: "Believe in the cause",
    titleMobile: "Believe in the cause",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    alt: "Believe in the cause",
  },
  {
    id: 2,
    icon: iconDifference,
    titleDesktop: "Make A Difference",
    titleMobile: "Make A Difference",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    alt: "Make A Difference",
  },
  {
    id: 3,
    icon: iconHope,
    titleDesktop: "Give people Hope",
    titleMobile: "Give people Hope",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    alt: "Give people Hope",
  },
];

const WhyWorkWithUsSection = () => {
  // Mobile slider state (starts with index 1 "Make A Difference" just like live mobile screenshot)
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
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
    <div className="why-work-outer-wrapper">
      {/* DESKTOP SECTION */}
      <section
        className="why-work-section-desktop"
        style={{ backgroundImage: `url(${bgPattern})` }}
        aria-label="Why Work With Us Desktop"
      >
        <div className="why-work-inner-container">
          <p className="why-work-eyebrow">Careers</p>
          <h2 className="why-work-title">WHY WORK WITH US?</h2>

          <div className="why-work-grid-desktop">
            {slidesData.map((item) => (
              <div key={item.id} className="why-work-card-desktop">
                <div className="why-work-icon-wrap">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="why-work-icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="why-work-card-title">{item.titleDesktop}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE SECTION */}
      <section
        className="why-work-section-mobile"
        style={{ backgroundImage: `url(${bgPattern})` }}
        aria-label="Why Work With Us Mobile"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="why-work-mobile-inner">
          <p className="why-work-eyebrow-mobile">Careers</p>
          <h2 className="why-work-title-mobile">
            WHY WORK <br /> WITH US?
          </h2>

          {/* Active Slide */}
          <div className="why-work-slide-content">
            <div className="why-work-slide-icon-wrap">
              <img
                src={slidesData[currentSlide].icon}
                alt={slidesData[currentSlide].alt}
                className="why-work-slide-icon"
              />
            </div>
            <h3 className="why-work-slide-title">
              {slidesData[currentSlide].titleMobile}
            </h3>
            <p className="why-work-slide-desc">
              {slidesData[currentSlide].desc}
            </p>
          </div>

          {/* Slider Controls (Arrows & Dots) */}
          <div className="why-work-slider-controls">
            <button
              type="button"
              className="why-work-arrow-btn prev"
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              <img src={arrowLeft} alt="Previous" />
            </button>

            <div className="why-work-dots-wrapper">
              {slidesData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`why-work-dot ${currentSlide === idx ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="why-work-arrow-btn next"
              onClick={handleNext}
              aria-label="Next Slide"
            >
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUsSection;
