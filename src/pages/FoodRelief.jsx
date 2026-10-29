import React from "react";
import Hero from "../components/hero/Hero";
import FoodReliefOverview from "../components/FoodRelief/FoodReliefOverview";
import ImpactCards from "../components/impactCards/ImpactCards";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import FoodReliefImpactStats from "../components/FoodRelief/FoodReliefImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./FoodRelief.css";

// Assets
import heroBgImage from "../assets/img/FoodRelief/Food-Relief.webp";
import impactImg1 from "../assets/img/FoodRelief/1G5A6162.webp";
import impactImg2 from "../assets/img/FoodRelief/1G5A6779.webp";
import impactImg3 from "../assets/img/FoodRelief/1G5A681.webp";

// Media Gallery Assets
import galleryImg1 from "../assets/img/FoodRelief/food-relief-1.webp";
import galleryImg2 from "../assets/img/FoodRelief/food-relief-2.webp";
import galleryImg3 from "../assets/img/FoodRelief/food-relief-3.webp";
import galleryImg4 from "../assets/img/FoodRelief/food-relief-4.webp";
import galleryImg5 from "../assets/img/FoodRelief/food-relief-5.webp";
import galleryImg6 from "../assets/img/FoodRelief/food-relief-6.webp";
import galleryImg7 from "../assets/img/FoodRelief/food-relief-7.webp";

const impactCardsData = [
  {
    image: impactImg1,
    title: "Ration Package for 1 Day",
    amount: "$10",
    description:
      "This ration is carefully prepared to support a family’s daily food needs, bringing dignity and relief to those facing hardship.",
    donateLink: "#donate-section",
  },
  {
    image: impactImg2,
    title: "One-Month Family Ration Package",
    amount: "$90",
    description:
      "This ration is carefully prepared to provide a family with essential food support for a full month, bringing dignity and relief during difficult times.",
    donateLink: "#donate-section",
  },
  {
    image: impactImg3,
    title: "Support the Food Relief Program",
    amount: "$200",
    description:
      "Feed 10 people with your Zakat and Sadaqah. Your support strengthens our Ummah by helping provide meals to those who need them most.",
    donateLink: "#donate-section",
  },
];

const galleryImages = [
  { src: galleryImg1, alt: "Food Relief distribution in Pakistan" },
  { src: galleryImg2, alt: "Volunteers packing ration supplies" },
  { src: galleryImg3, alt: "Families receiving essential food packs" },
  { src: galleryImg4, alt: "Food bags loaded onto relief trucks" },
  { src: galleryImg5, alt: "Elderly beneficiaries receiving rations" },
  { src: galleryImg6, alt: "Distribution of flour, oil, and lentils" },
  { src: galleryImg7, alt: "Community members at food relief center" },
];

const FoodRelief = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("foodRelief");
    }
  };

  return (
    <div className="food-relief-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="food-relief-hero"
        backgroundImage={heroBgImage}
        mobileImage={heroBgImage}
        showRightImage={false}
        title="FOOD RELIEF"
        boldTitle={true}
        titleColor="#ffffff"
        description="Picture a struggling family in Pakistan sitting down to a nourishing meal because Allah’s mercy reached them through you: flour, rice, oil, and lentils to help feed them through the month."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: Help Feed People in Need (4 Feature Cards + Donation Card) */}
      <FoodReliefOverview
        onDonate={({ frequency, amount }) => {
          openDonation("foodRelief", { frequency, amount });
        }}
      />

      {/* 3. Choose How Allah's Mercy Flows Through You (3 Impact Cards) */}
      <ImpactCards
        className="food-relief-impact-cards"
        title="CHOOSE HOW ALLAH'S MERCY FLOWS THROUGH YOU"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 90;
          openDonation("foodRelief", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="food-relief-video-section">
        <div className="food-relief-video-container">
          <VideoSection
            videoId="KPg1Ux3juAU"
            title="How we are Fighting Hunger in Pakistan"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="foodRelief"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 6. Media Gallery */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
        desktopVisible={4}
      />

      {/* 7. The Impact of Your Giving (4 Photo-Stat Cards) */}
      <FoodReliefImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default FoodRelief;
