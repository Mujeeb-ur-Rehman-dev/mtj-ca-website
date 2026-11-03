import React from "react";
import "./CounsellingAssistanceSection.css";

const CounsellingAssistanceSection = () => {
  return (
    <section className="counselling-assist" aria-label="Support & Financial Assistance">
      <div className="counselling-assist__container">
        <div className="counselling-assist__content">
          <h2 className="counselling-assist__title">
            YOU DON&apos;T HAVE TO CARRY THIS ALONE
          </h2>
          <p className="counselling-assist__text">
            We know how heavy it gets when there&apos;s nowhere that feels safe to
            talk about it and how much harder that is when you&apos;re also worried
            about what it costs.
          </p>
          <p className="counselling-assist__text">
            If money has been holding you back, that shouldn&apos;t be the reason
            you go without support.
          </p>
          <div className="counselling-assist__link-wrapper">
            <a
              href="https://forms.gle/t14uosyy7oXsDkrJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="counselling-assist__link"
            >
              Apply For Financial Assistance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingAssistanceSection;
