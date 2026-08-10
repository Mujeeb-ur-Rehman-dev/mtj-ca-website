import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";

const Careers = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Careers"
        description="Explore career opportunities with us and join a team dedicated to making a positive impact on the world."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CategoryCarousel />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Careers;
