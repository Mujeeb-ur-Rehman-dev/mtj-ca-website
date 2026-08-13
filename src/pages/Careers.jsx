import React from "react";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import CareersHeroSection from "../components/CareersHeroSection/CareersHeroSection";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";

const Careers = () => {
  return (
    <>
     <CareersHeroSection />
      <ImpactSection1
             stats={impactSectionData}
             eyebrow="Our Work For Humanity"
             title="The Impact of Your Donations"
           />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Careers;
