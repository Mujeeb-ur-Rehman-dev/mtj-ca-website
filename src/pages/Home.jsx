import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import heroImage from "../assets/img/home/palestine-cut.png";
import mobileImage from "../assets/img/home/mbl-background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { impactSectionData } from "../components/data/impactSectionData";

// Sample impact cards data (exactly 4 cards as in reference)
const impactCardsData = [
  {
    icon: "help",
    title: "100,000+",
    description: "People helped during the floods in Pakistan"
  },
  {
    icon: "medicine",
    title: "500,000+",
    description: "Free tests and medicines provided"
  },
  {
    icon: "clean-water",
    title: "350,000+",
    description: "People given access to clean water"
  },
  {
    icon: "scholarship",
    title: "10,000+",
    description: "Scholarships gifted to students"
  }
];

const Home = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        mobileImage={mobileImage}
        title="LEBANON EMERGENCY"
        boldTitle={true}
        description="The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal."
        buttonText="Donate Now"
        buttonLink="#donate"
        showMobileButtonAboveText={true}
        buttonVariant="maroon"
      />
      <CategoryCarousel />
      <ImpactSection1
        stats={impactSectionData}
        eyebrow="Our Work For Humanity"
        title="The Impact of Your Donations"
      />
      {/* <FAQAccordion /> */}
      <VideoSection
        videoId="KPg1Ux3juAU"
        title="Together for Humanity | Support Those in Need"
        channel="MTJ Foundation Canada"
      />
      <Newsletter/>
      <Footer />
    </>
  );
};

export default Home;
