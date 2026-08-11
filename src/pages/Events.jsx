import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";

const Events = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Events"
        description="Join our upcoming events and fundraisers to support our humanitarian initiatives and make an impact together."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CategoryCarousel />
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

export default Events;
