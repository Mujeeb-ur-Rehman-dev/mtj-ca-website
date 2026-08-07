import React from "react";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import VolunteerSection from "../components/VolunteerSection/VolunteerSection";
import GoogleFormSection from "../components/GoogleFormSection/GoogleFormSection";

const Volunteer = () => {
  return (
    <>
    <VolunteerSection/>
    {/* <GoogleFormSection/> */}
    <FAQAccordion/>
     <Newsletter />
      <Footer />
    </>
  );
};

export default Volunteer;
