import React from "react";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import VolunteerSection from "../components/VolunteerSection/VolunteerSection";
import VolunteerHeroSection from "../components/VolunteerSection/VolunteerHeroSection";


const Volunteer = () => {
  return (
    <>
    <VolunteerSection/>
    {/* <VolunteerHeroSection/> */}
    <FAQAccordion/>
     <Newsletter />
      <Footer />
    </>
  );
};

export default Volunteer;
