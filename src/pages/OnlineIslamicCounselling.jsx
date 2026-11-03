import React, { useEffect } from "react";
import CounsellingHero from "../components/OnlineIslamicCounselling/CounsellingHero";
import CounsellingAssistanceSection from "../components/OnlineIslamicCounselling/CounsellingAssistanceSection";
import CounsellingStatsCarousel from "../components/OnlineIslamicCounselling/CounsellingStatsCarousel";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";

const OnlineIslamicCounselling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Online Islamic Counselling | MTJ Foundation Canada";
  }, []);

  return (
    <main className="online-islamic-counselling-page">
      {/* 1. Hero Banner */}
      <CounsellingHero />

      {/* 2. Empathy & Support Section ("YOU DON'T HAVE TO CARRY THIS ALONE") */}
      <CounsellingAssistanceSection />

      {/* 3. Scalloped Stamp Stats Carousel ("CREATE MEANINGFULL CHANGE") */}
      <CounsellingStatsCarousel />

      {/* 4. Newsletter Subscription ("ADD IMPACT TO YOUR INBOX") */}
      <Newsletter />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
};

export default OnlineIslamicCounselling;
