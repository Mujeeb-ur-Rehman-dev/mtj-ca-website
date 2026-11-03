import React from "react";
import Hero from "../components/hero/Hero";
import EducationOverview from "../components/Education/EducationOverview";
import EducationHelpSection from "../components/Education/EducationHelpSection";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import EducationImpactStats from "../components/Education/EducationImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./Education.css";

// Assets
import educationHeroImg from "../assets/img/Education/education-hero.webp";

// Media Gallery Assets
import galleryImg1 from "../assets/img/Education/gallery-1.webp";
import galleryImg2 from "../assets/img/Education/gallery-2.webp";
import galleryImg3 from "../assets/img/Education/gallery-3.webp";
import galleryImg4 from "../assets/img/Education/gallery-4.webp";
import galleryImg5 from "../assets/img/Education/gallery-5.webp";
import galleryImg6 from "../assets/img/Education/gallery-6.webp";

const galleryImages = [
  { src: galleryImg1, alt: "MTJF dream school building Pakistan" },
  { src: galleryImg2, alt: "Students learning with books in classroom" },
  { src: galleryImg3, alt: "Students studying together with teachers" },
  { src: galleryImg4, alt: "MTJF dream school entrance and students" },
  { src: galleryImg5, alt: "Classroom activities at dream school" },
  { src: galleryImg6, alt: "Aerial view of dream school complex" },
];

const Education = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("education");
    }
  };

  return (
    <div className="education-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="education-hero"
        backgroundImage={educationHeroImg}
        mobileImage={educationHeroImg}
        showRightImage={false}
        title="BREAKING THE CYCLE OF POVERTY THROUGH EDUCATION"
        mobileTitle={
          <>
            BREAKING THE CYCLE<br />
            OF POVERTY THROUGH<br />
            EDUCATION
          </>
        }
        boldTitle={false}
        titleColor="#FFFAEE"
        description="In Pakistan, more than 25 million school-age children are out of school, that’s nearly half of the country’s children. Without education, children remain vulnerable to illiteracy, and hopelessness."
        descriptionColor="#FFFAEE"
        mobileDescriptionColor="#FFFAEE"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: Help Rewrite the Story of Pakistan’s Children (4 Features + Donation Card) */}
      <EducationOverview
        onDonate={({ frequency, amount } = {}) => {
          openDonation("education", { frequency, amount });
        }}
      />

      {/* 3. How You Can Help (3 Cards with Photos) */}
      <EducationHelpSection
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 60;
          openDonation("education", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="education-video-section">
        <div className="education-video-container">
          <VideoSection
            videoId="7-oiIcqfvnY"
            title="Pakistan Independence Day Celebrations | MTJ Foundation Dream Schools | MTJF | DONATE NOW"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 5. Frequently Asked Questions (6 Accordions) */}
      <FAQAccordion
        faqKey="education"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 6. Media Gallery (Deep Wine Background, 4 Visible on Desktop) */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
        desktopVisible={4}
      />

      {/* 7. Every Brick Counts (2 Photo-Stat Cards) */}
      <EducationImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default Education;
