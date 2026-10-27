import React from "react";
import Hero from "../components/hero/Hero";
import LiftingGazaSection from "../components/PalestineRelief/LiftingGazaSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import VideoSection from "../components/VideoSection/VideoSection";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import PalestineImpactWork from "../components/PalestineRelief/PalestineImpactWork";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./PalestineRelief.css";

// Assets
import heroBgImage from "../assets/img/PalestineRelief/Palestine-Hero.webp";
import foodDisImg from "../assets/img/PalestineRelief/food-dis.webp";
import schoolKitImg from "../assets/img/PalestineRelief/school-kit.webp";
import familySuppImg from "../assets/img/PalestineRelief/family-supp.webp";
import palestine01 from "../assets/img/PalestineRelief/palestine-01.webp";
import palestine02 from "../assets/img/PalestineRelief/palestine-02.webp";
import palestine03 from "../assets/img/PalestineRelief/palestine-03.webp";
import palestine04 from "../assets/img/PalestineRelief/palestine-04.webp";
import videoPoster from "../assets/img/PalestineRelief/Group-5354.png";

const impactCardsData = [
  {
    image: foodDisImg,
    title: "Food Distribution",
    amount: "$95",
    description: "Provide a food parcel with essential staples such as rice, lentils, oil, tea, and canned foods.",
    donateLink: "#donate-section"
  },
  {
    image: schoolKitImg,
    title: "School Kits",
    amount: "$175",
    description: "Help five children continue learning with school bags and educational supplies.",
    donateLink: "#donate-section"
  },
  {
    image: familySuppImg,
    title: "Family Support",
    amount: "$475",
    description: "Provide five families with monthly food parcels filled with essential household staples.",
    donateLink: "#donate-section"
  }
];

const galleryImages = [
  { src: palestine01, alt: "Palestine Relief Work 1" },
  { src: palestine02, alt: "Palestine Relief Work 2" },
  { src: palestine03, alt: "Palestine Relief Work 3" },
  { src: palestine04, alt: "Palestine Relief Work 4" }
];

const PalestineRelief = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("palestine");
    }
  };

  return (
    <div className="palestine-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="palestine-relief-hero"
        backgroundImage={heroBgImage}
        mobileImage={heroBgImage}
        showRightImage={false}
        title="PALESTINE EMERGENCY"
        boldTitle={true}
        titleColor="#ffffff"
        description="Hunger is Spreading Fast: 2.15 million people in Gaza face high levels of acute food insecurity, with over 133,000 at risk of famine. Children are starving, parents are unable to feed their families, and the elderly are going without meals."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Lifting Gaza Out of Crisis (with 4 Icon-Boxes & Embedded Donation Card) */}
      <LiftingGazaSection
        onDonate={({ frequency, amount }) => {
          openDonation("palestine", { frequency, amount });
        }}
      />

      {/* 3. Your Generosity Can Bring Comfort In Their Darkest Hour */}
      <ImpactCards
        className="palestine-impact-cards"
        title={<>YOUR GENEROSITY CAN BRING<br />COMFORT IN THEIR DARKEST HOUR</>}
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 95;
          openDonation("palestine", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="palestine-video-section">
        <div className="palestine-video-container">
          <VideoSection
            videoId="XHOmBV4js_E"
            title="Help Gaza This Ramadan | MTJF"
            posterImage={videoPoster}
          />
        </div>
      </section>

      {/* 5. Media Gallery */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
      />

      {/* 6. The Impact of Our Work */}
      <PalestineImpactWork
        onDonateClick={handleHeroDonate}
      />

      {/* 7. Newsletter */}
      <Newsletter />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default PalestineRelief;
