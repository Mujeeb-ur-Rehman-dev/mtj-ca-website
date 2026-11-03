import React from "react";
import "./CounsellingHero.css";

const CounsellingHero = () => {
  return (
    <section className="counselling-hero" aria-label="Online Islamic Counselling Hero Banner">
      <div className="counselling-hero__container">
        <div className="counselling-hero__content">
          <h1 className="counselling-hero__title">
            ONLINE ISLAMIC COUNSELLING
          </h1>
          <p className="counselling-hero__description">
            You&apos;ve probably put this off longer than you should have. Maybe
            you weren&apos;t sure a therapist would understand your faith. Maybe
            the cost felt out of reach. MTJF collaborated with CMC for exactly
            those reasons, so you have qualified Muslim therapists who honour
            both your deen and your wellbeing, with financial assistance
            available for those who need it.
          </p>
          <div className="counselling-hero__tagline">
            Online. Accessible. Across Ontario and Canada.
          </div>
          <a
            href="http://muslimcounselling.ca/appointments"
            target="_blank"
            rel="noopener noreferrer"
            className="counselling-hero__btn"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CounsellingHero;
