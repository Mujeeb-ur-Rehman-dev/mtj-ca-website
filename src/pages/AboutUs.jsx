import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/zakat/hero/background-img.png";
import mobileImg from "../assets/img/AboutUs/mobileImg.png";
import heroImage from "../assets/img/AboutUs/heroImage.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import AboutVisionMission from "../components/AboutVisionMission/AboutVisionMission";
import WhyChooseUsSection from "../components/WhyChooseUsSection/WhyChooseUsSection";
import OurStorySection from "../components/OurStorySection/OurStorySection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { aboutUsFaqItems } from "../components/data/faqData";

const AboutUs = () => {
  return (
    <>
      <Hero
        className="about-us-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}  
        heroImage={heroImage}
        title={
          <>
            Guided by Faith.
            <br />
            Driven by
            <br />
            Compassion.
            <br />
            Serving Humanity.
          </>
        }
        description="MTJ Foundation was born from a lifelong mission to serve humanity through faith and kindness. From disaster relief to education, healthcare, and clean water, we help families rebuild, restore dignity, and believe in a better tomorrow."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <AboutVisionMission />
      <WhyChooseUsSection/>
       <OurStorySection/>
      <CategoryCarousel
        className="about-category-carousel"
        title={
          <>
            Ready to take action?
          </>
        }
        description="Every act of giving matters. You could put food on a table, send a child to school, or bring hope back to someone who’s lost everything through emergency relief."
        sectionStyle={{
          "--category-section-bg": "#68101A",
          "--category-heading-color": "#fff5f4",
          "--category-copy-color": "#fff5f4",
          "--category-control-color": "#fff5f4",
          "--category-dot-color": "rgba(255, 245, 244, 0.45)",
          "--category-active-dot-color": "#fff5f4",
        }}
      />
       <FAQAccordion items={aboutUsFaqItems}/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUs;
