import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/Reports/backgroundImage.png";
import mobileImage from "../assets/img/Reports/mobileImage.png";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Button from "../common/components/buttons/Button";
import ReportsList from "../components/ReportsList/ReportsList";

const reportHeroCard = (
  <div className="reports-hero-card">
    <div className="reports-hero-card-inner">
      <h2 className="reports-hero-card-title">SEE YOUR IMPACT</h2>
      <p className="reports-hero-card-text">
        Every report tells a story of lives changed through your generosity.
        Explore our latest reports, from audited financials to on-ground
        program updates; every page reflects our commitment to honesty,
        accountability, and lasting change.
      </p>
      <Button
        text="Read Now"
        size="md"
        wrapperClass="reports-hero-button-wrap"
        buttonClass="btn btn-donate-animated reports-hero-button"
        ariaLabel="Read the latest reports"
      />
    </div>
  </div>
);

const Reports = () => {
  return (
    <>
      <Hero
        className="reports-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImage}
        heroImage={null}
        showRightImage={false}
        customContent={reportHeroCard}
        customContentClassName="reports-hero-custom-content"
      />
      <ReportsList />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Reports;
