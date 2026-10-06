import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/nepal-web.jpg";
import mobileImage from "../assets/img/home/nepal-mbl.jpg";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import { impactSectionData } from "../components/data/impactSectionData";
import "./Home.css";

// Donation Context
import { useDonation } from "../context/DonationContext";


const Home = () => {
  const { openDonation } = useDonation();

  return (
    <>
      <Hero
        className="home-nepal-hero"
        backgroundImage={backgroundImage}
        heroImage={null}
        mobileImage={mobileImage}
        title={<>NEPAL FLOOD<br />EMERGENCY</>}
        boldTitle={true}
        textSectionMarginTop="10%"
        textSectionMarginLeft="10%"
        descriptionColor="#FFFFFF"
        mobileDescriptionColor="#000000"
        description="Severe floods swept through Nepal’s Bhotekoshi–Trishuli river basin on August 26, destroying homes, roads, and critical infrastructure."
        buttonText="Donate Now"
        onButtonClick={() => openDonation('nepal')}
        secondaryButtonText="Learn More"
        secondaryButtonLink="/nepal-floods"
        showMobileButtonAboveText={true}
        buttonVariant="maroon" />

      <CategoryCarousel />

      <ImpactSection1
        stats={impactSectionData}
        eyebrow="Our Work For Humanity"
        title="The Impact of Your Donations"
      />

    
      <VideoSection
        videoId="KPg1Ux3juAU"
        title="Together for Humanity | Support Those in Need"
        channel="MTJ Foundation Canada"
      />
       <Newsletter />

      <Footer />
    </>
  );
};

export default Home;