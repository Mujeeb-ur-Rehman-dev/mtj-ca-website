import React from "react";
import Hero from "../components/hero/Hero";
import HotMealsOverview from "../components/HotMeals/HotMealsOverview";
import HotMealsHelpSection from "../components/HotMeals/HotMealsHelpSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import HotMealsImpactStats from "../components/HotMeals/HotMealsImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./HotMeals.css";

// Assets
import hotMealsHeroImg from "../assets/img/HotMeals/hot-meals-hero.webp";

// Media Gallery Assets
import galleryImg1 from "../assets/img/HotMeals/gallery-1.webp";
import galleryImg2 from "../assets/img/HotMeals/gallery-2.webp";
import galleryImg3 from "../assets/img/HotMeals/gallery-3.webp";
import galleryImg4 from "../assets/img/HotMeals/gallery-4.webp";
import galleryImg5 from "../assets/img/HotMeals/gallery-5.webp";
import galleryImg6 from "../assets/img/HotMeals/gallery-6.webp";
import galleryImg7 from "../assets/img/HotMeals/gallery-7.webp";

const galleryImages = [
  { src: galleryImg1, alt: "MTJF hot meals street distribution Toronto" },
  { src: galleryImg2, alt: "Volunteers preparing and packing meal boxes" },
  { src: galleryImg3, alt: "Community volunteers distributing hot food packs" },
  { src: galleryImg4, alt: "MTJF volunteer meal operations outdoors" },
  { src: galleryImg5, alt: "Serving hot freshly prepared food to neighbours" },
  { src: galleryImg6, alt: "Packaging nutritious meals for food bank visitors" },
  { src: galleryImg7, alt: "Community members receiving hot meals support" },
];

const HotMeals = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("hotMeals");
    }
  };

  return (
    <div className="hot-meals-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="hot-meals-hero"
        backgroundImage={hotMealsHeroImg}
        mobileImage={hotMealsHeroImg}
        showRightImage={false}
        title="$10 HOT MEAL - REAL IMPACT"
        boldTitle={false}
        titleColor="#FFFAEE"
        description="Canada is facing a food crisis we can't ignore. In a single month last year, food banks recorded over 2 million visits: the highest number ever reported, and one third of these visitors were children."
        descriptionColor="#FFFAEE"
        mobileDescriptionColor="#FFFAEE"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: One-Third of Food Bank Visitors Are Children (4 Features + Donation Card) */}
      <HotMealsOverview
        onDonate={({ frequency, amount }) => {
          openDonation("hotMeals", { frequency, amount });
        }}
      />

      {/* 3. How You Can Help (3 Cards with Photos) */}
      <HotMealsHelpSection
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 10;
          openDonation("hotMeals", { amount: amt });
        }}
      />

      {/* 4. Frequently Asked Questions (5 Accordions) */}
      <FAQAccordion
        faqKey="hotMeals"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 5. Media Gallery (Deep Wine Background, 4 Visible on Desktop) */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
        desktopVisible={4}
      />

      {/* 6. Every Brick Counts (4 Photo-Stat Cards) */}
      <HotMealsImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 7. Newsletter */}
      <Newsletter />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default HotMeals;
