import React from "react";
import Hero from "../components/hero/Hero";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import VideoSection from "../components/VideoSection/VideoSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/nepal-web.jpg";
import mobileImage from "../assets/img/home/nepal-mbl.jpg";
import { useDonation } from "../context/DonationContext";
import "./Home.css";

const Home = () => {
  const { openDonation } = useDonation();

  return (
    <main className="home-page">
      <Hero
        className="home-nepal-hero"
        backgroundImage={backgroundImage}
        heroImage={null}
        mobileImage={mobileImage}
        title={
          <>
            NEPAL FLOOD
            <br />
            EMERGENCY
          </>
        }
        mobileTitle={
          <>
            NEPAL FLOODS
            <br />
            EMERGENCY
          </>
        }
        boldTitle={true}
        textSectionMarginTop="10%"
        textSectionMarginLeft="10%"
        descriptionColor="#FFFFFF"
        mobileDescriptionColor="#312D2D"
        description="Severe floods swept through Nepal’s Bhotekoshi–Trishuli river basin on August 26, destroying homes, roads, and critical infrastructure."
        buttonText="Donate Now"
        onButtonClick={() => openDonation("nepal")}
        secondaryButtonText="Learn More"
        secondaryButtonLink="/nepal-floods"
        showMobileButtonAboveText={true}
        buttonVariant="maroon"
      />

      <CategoryCarousel />

      <ImpactSection1 />

      <VideoSection
        videoId="KPg1Ux3juAU"
        title="How we are Fighting Hunger in Pakistan"
        channel="MTJ Foundation Canada"
      />

      <Newsletter />

      <Footer />
    </main>
  );
};

export default Home;
