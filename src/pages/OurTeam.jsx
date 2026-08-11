import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";

const OurTeam = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Our Team"
        description="Meet our passionate team members who are dedicated to serving communities in need around the world."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CategoryCarousel />
      <ImpactSection1
        stats={generalImpactStats}
        eyebrow="Our Work For Humanity"
        title="THE IMPACT OF YOUR DONATIONS"
      />
      <VideoSection
        videoId="KPg1Ux3juAU"
        title="How we are Fighting Hunger in Pakistan"
        channel="MTJ Foundation Canada"
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default OurTeam;
