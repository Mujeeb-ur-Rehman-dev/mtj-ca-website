import React from 'react';
import { useDonation } from '../../context/DonationContext';
import './AboutHero.css';
import heroBanner from '../../assets/img/AboutUs/about-hero-desktop.webp';

const AboutHero = ({
  title = (
    <>
      GUIDED BY FAITH. DRIVEN BY<br />
      COMPASSION. SERVING<br />
      HUMANITY.
    </>
  ),
  subtitle = "MTJ Foundation serves humanity through faith and kindness, providing disaster relief, education, healthcare, and clean water to restore dignity and hope.",
  buttonText = "Support Our Mission",
  buttonLink = "#donate",
}) => {
  const donationContext = useDonation();

  const handleButtonClick = () => {
    if (donationContext && donationContext.openDonation) {
      donationContext.openDonation('quick');
    } else if (buttonLink) {
      if (buttonLink.startsWith('#')) {
        const target = document.querySelector(buttonLink);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = buttonLink;
      }
    }
  };

  return (
    <section className="about-hero-section" aria-label="About MTJ Foundation">
      {/* Background image showing the MTJ team volunteers */}
      <div className="about-hero-bg-wrapper">
        <img
          src={heroBanner}
          alt="MTJ Foundation Volunteers and Team Serving Humanity"
          className="about-hero-bg-image"
          loading="eager"
        />
      </div>

      {/* Dark gradient overlay for contrast */}
      <div className="about-hero-overlay" />

      {/* Hero Content */}
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">{title}</h1>
          <p className="about-hero-subtitle">{subtitle}</p>
          <div className="about-hero-action">
            <button
              type="button"
              className="about-hero-btn"
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
