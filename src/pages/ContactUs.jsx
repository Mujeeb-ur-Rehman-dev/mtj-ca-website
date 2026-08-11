import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";

const ContactUs = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Contact Us"
        description="Get in touch with us for any inquiries, partnership opportunities, or to learn more about our humanitarian work."
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

export default ContactUs;
