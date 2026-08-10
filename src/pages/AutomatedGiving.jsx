import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, automatedGivingImpactStats } from "../components/data/impactSectionData";

const AutomatedGiving = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Automated Giving"
        description="Set up automated giving and make a consistent impact every month. Your regular support sustains our life-changing work."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CategoryCarousel />
      <ImpactSection1
        stats={automatedGivingImpactStats}
        eyebrow="Automated Giving"
        title="SUSTAINED IMPACT THROUGH REGULAR GIVING"
      />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AutomatedGiving;
