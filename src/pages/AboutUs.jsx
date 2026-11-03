import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutVisionMission from "../components/AboutVisionMission/AboutVisionMission";
import WhyChooseUsSection from "../components/WhyChooseUsSection/WhyChooseUsSection";
import OurStorySection from "../components/OurStorySection/OurStorySection";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { aboutUsFaqItems } from "../components/data/faqData";

// Action section images downloaded directly from live site
import palestineImg from "../assets/img/AboutUs/Palestine-Emergency-Relief.png";
import educationImg from "../assets/img/AboutUs/Education.png";
import healthcareImg from "../assets/img/AboutUs/Healthcare.png";
import waterReliefImg from "../assets/img/AboutUs/Water-Relief.png";

const aboutCategories = [
  {
    title: "Healthcare",
    image: healthcareImg,
    path: "/medical-care-health",
  },
  {
    title: "Water Relief",
    image: waterReliefImg,
    path: "/clean-water",
  },
  {
    title: "Palestine Emergency Relief",
    image: palestineImg,
    path: "/palestine-relief",
  },
  {
    title: "Education",
    image: educationImg,
    path: "/education",
  },
];

const AboutUs = () => {
  return (
    <main className="about-us-page">
      {/* 1. Hero Section */}
      <AboutHero
        title={
          <>
            GUIDED BY FAITH. DRIVEN BY<br />
            COMPASSION. SERVING<br />
            HUMANITY.
          </>
        }
        subtitle="MTJ Foundation serves humanity through faith and kindness, providing disaster relief, education, healthcare, and clean water to restore dignity and hope."
        buttonText="Support Our Mission"
        buttonLink="#donate"
      />

      {/* 2. Vision & Mission Section */}
      <AboutVisionMission />

      {/* 3. What Makes Us Different Section */}
      <WhyChooseUsSection />

      {/* 4. Our Story Timeline Section */}
      <OurStorySection />

      {/* 5. Ready to Take Action Section */}
      <CategoryCarousel
        className="about-category-carousel"
        title="READY TO TAKE ACTION?"
        description="Every act of giving matters. You could put food on a table, send a child to school, or bring hope back to someone who’s lost everything through emergency relief."
        categories={aboutCategories}
        sectionStyle={{
          "--category-section-bg": "#68101A",
          "--category-heading-color": "#FFFAEE",
          "--category-copy-color": "#FFFAEE",
          "--category-control-color": "#FFFAEE",
          "--category-dot-color": "rgba(255, 250, 238, 0.45)",
          "--category-active-dot-color": "#FFFAEE",
        }}
      />

      {/* 6. Frequently Asked Questions Section */}
      <FAQAccordion
        items={aboutUsFaqItems}
        defaultOpenIndex={0}
        titleAlign="left"
        backgroundColor="#FFFAEE"
      />

      {/* 7. Newsletter Section */}
      <Newsletter />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
};

export default AboutUs;
