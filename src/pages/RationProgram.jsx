import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import { impactSectionData, rationImpactStats } from "../components/data/impactSectionData";

const RationProgram = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Ration Program"
        description=""
        buttonText="Donate Now"
        buttonLink="#donate"
        customContent={<DonatinCards title="Provide Food Security" />}
      />
      <CategoryCarousel />
      <ImpactSection1
        stats={rationImpactStats}
        eyebrow="Ration Program"
        title="PROVIDING FOOD SECURITY"
      />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default RationProgram;
