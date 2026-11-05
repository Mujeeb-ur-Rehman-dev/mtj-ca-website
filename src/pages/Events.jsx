import React, { useEffect } from "react";
import PastEventsSection from "../components/PastEventsSection/PastEventsSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";

const Events = () => {
  useEffect(() => {
    document.title = "Events - MTJ Foundation";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PastEventsSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Events;
