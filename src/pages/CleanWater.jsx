import React from "react";
import Hero from "../components/hero/Hero";
import CleanWaterOverview from "../components/CleanWater/CleanWaterOverview";
import CleanWaterHelpSection from "../components/CleanWater/CleanWaterHelpSection";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import CleanWaterImpactStats from "../components/CleanWater/CleanWaterImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./CleanWater.css";

// Assets
import cleanWaterHeroImg from "../assets/img/CleanWater/hero.webp";
import cleanWaterVideoThumb from "../assets/img/CleanWater/water-video-thumb.jpg";

// Media Gallery Assets (Ordered to match target view)
import galleryImg1 from "../assets/img/CleanWater/gallery-1.webp";
import galleryImg2 from "../assets/img/CleanWater/gallery-2.webp";
import galleryImg3 from "../assets/img/CleanWater/gallery-3.webp";
import galleryImg4 from "../assets/img/CleanWater/gallery-4.webp";
import galleryImg5 from "../assets/img/CleanWater/gallery-5.webp";

const galleryImages = [
  { src: galleryImg4, alt: "Hand pump installation in rural community near brick wall" },
  { src: galleryImg5, alt: "Community water access celebration with MTJF representatives" },
  { src: galleryImg1, alt: "Villager pumping fresh drinking water from installed hand pump" },
  { src: galleryImg2, alt: "Workers laying foundation bricks for clean water station" },
  { src: galleryImg3, alt: "Water project inauguration and ribbon cutting ceremony" },
];

const CleanWater = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("cleanWater");
    }
  };

  return (
    <div className="clean-water-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="clean-water-hero"
        backgroundImage={cleanWaterHeroImg}
        mobileImage={cleanWaterHeroImg}
        showRightImage={false}
        title="SAFE WATER FOR FAMILIES WHO HAVE NONE"
        mobileTitle={
          <>
            SAFE WATER FOR<br />
            FAMILIES WHO HAVE<br />
            NONE
          </>
        }
        boldTitle={false}
        titleColor="#FFFAEE"
        description="Millions of people in Pakistan still don’t have safe drinking water. In places like Sindh and Balochistan, families collect water from ponds, rivers, even floodwater, there’s no better option."
        descriptionColor="#FFFAEE"
        mobileDescriptionColor="#FFFAEE"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: Water - The Best Form of Charity (4 Features + Embedded Donation Card) */}
      <CleanWaterOverview
        onDonate={({ frequency, amount } = {}) => {
          openDonation("cleanWater", { frequency, amount });
        }}
      />

      {/* 3. How You Can Help (3 Cards with Photos) */}
      <CleanWaterHelpSection
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 815;
          openDonation("cleanWater", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="clean-water-video-section">
        <div className="clean-water-video-container">
          <VideoSection
            videoId="Ky8vkHMajxI"
            posterImage={cleanWaterVideoThumb}
            title="Build Water Wells in Pakistan | MTJF"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 5. Frequently Asked Questions (6 Accordions) */}
      <FAQAccordion
        className="clean-water-faq"
        faqKey="cleanWater"
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

      {/* 7. Every Brick Counts (4 Photo-Stat Cards) */}
      <CleanWaterImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default CleanWater;
