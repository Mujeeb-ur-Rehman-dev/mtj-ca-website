import React from "react";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import { impactSectionData, generalImpactStats } from "../components/data/impactSectionData";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
     <ContactForm/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ContactUs;
