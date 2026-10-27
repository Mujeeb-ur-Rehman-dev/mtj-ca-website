import React from "react";
import Hero from "../components/hero/Hero";
import ApnaGharOverview from "../components/ApnaGhar/ApnaGharOverview";
import ImpactCards from "../components/impactCards/ImpactCards";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import ApnaGharImpactStats from "../components/ApnaGhar/ApnaGharImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./ApnaGhar.css";

// Assets
import heroBgImage from "../assets/img/ApnaGhar/apna-ghar.webp";
import image4Img from "../assets/img/ApnaGhar/Image-4.webp";
import dsc3883Thumb from "../assets/img/ApnaGhar/DSC03883-thumb.webp";
import dji0013Thumb from "../assets/img/ApnaGhar/DJI_0013-thumb.webp";
import dji0019Stat from "../assets/img/ApnaGhar/DJI_0019-stat.webp";
import dsc3901Stat from "../assets/img/ApnaGhar/DSC03901-stat.webp";
import dsc3883Stat from "../assets/img/ApnaGhar/DSC03883-stat.webp";
import dji0013Stat from "../assets/img/ApnaGhar/DJI_0013-stat.webp";

const impactCardsData = [
  {
    image: image4Img,
    title: "Lay the First Bricks",
    amount: "$100",
    description: "Provide 20 bricks to lay the foundation and start building a home.",
    donateLink: "#donate-section"
  },
  {
    image: dsc3883Thumb,
    title: "Build the Walls",
    amount: "$500",
    description: "Provide 100 bricks to help raise the walls of a home.",
    donateLink: "#donate-section"
  },
  {
    image: dji0013Thumb,
    title: "Build a Full Home",
    amount: "$10,000",
    description: "Build a complete 2-bedroom home with solar energy, water, and skill training for a mother.",
    donateLink: "#donate-section"
  }
];

const galleryImages = [
  { src: dsc3883Stat, alt: "Worker finishing ceiling" },
  { src: dji0019Stat, alt: "Aerial view of Apna Ghar village" },
  { src: dsc3901Stat, alt: "Front entrance of finished home" },
  { src: dji0013Stat, alt: "Aerial view of completed housing rows" }
];

const ApnaGhar = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("apnaGhar");
    }
  };

  return (
    <div className="apna-ghar-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="apna-ghar-hero"
        backgroundImage={heroBgImage}
        mobileImage={heroBgImage}
        showRightImage={false}
        title="APNA GHAR"
        boldTitle={true}
        titleColor="#ffffff"
        description="Building homes that offer sustainable relief to widows and orphans in Pakistan, empowering them to break free from the cycle of vulnerability and build a brighter future."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: A Home That Keeps Families Together (4 Icons + Hadith + Donation Card) */}
      <ApnaGharOverview
        onDonate={({ frequency, amount }) => {
          openDonation("apnaGhar", { frequency, amount });
        }}
      />

      {/* 3. How You Can Help (3 Impact Cards) */}
      <ImpactCards
        className="apna-ghar-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 100;
          openDonation("apnaGhar", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="apna-ghar-video-section">
        <div className="apna-ghar-video-container">
          <VideoSection
            videoId="cKKrE2S7Zu8"
            title="Together for Humanity | Support Those in Need"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="apnaGhar"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 6. Media Gallery */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
      />

      {/* 7. Every Brick Counts (4 Photo-Stat Cards) */}
      <ApnaGharImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default ApnaGhar;
