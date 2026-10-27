import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import lebanonHeroBg from "../assets/img/EmergencyReliefLebanon/Lebanon-Emergency-Hero.webp";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import { lebanonImpactStats } from "../components/data/impactSectionData";
import { lebanonImpactCardsData } from "../components/data/impactCardsData";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import { useDonation } from "../context/DonationContext";

const EmergencyReliefLebanon = () => {
  const { openDonation } = useDonation();

  return (
    <div className="emergency-relief-lebanon-page" style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
      <Hero
        className="lebanon-emergency-hero"
        title="LEBANON EMERGENCY"
        backgroundImage={lebanonHeroBg}
        mobileImage={lebanonHeroBg}
        showRightImage={false}
        titleColor="#ffffff"
        boldTitle={true}
        description="The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={() => openDonation("lebanon")}
      />

      <InfoSection
        className="lebanon-info-section"
        title="FAMILIES IN LEBANON NEED YOU NOW"
        showImage={false}
        showDeco={false}
        paragraphs={[
          "The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal.",
          "For $250, you put an emergency pack in the hands of a family that fled their homes with nothing.",
          "Each pack includes:",
          ["Ready-to-eat food", "Hygiene essentials", "Gas stove", "Floor mats"],
          "MTJF is already on the ground, and 45 families have already received their kits. More are waiting.",
          "Without your support, they wait longer.",
          "Send an emergency pack today."
        ]}
        buttonText="Donate Now"
        onButtonClick={() => openDonation("lebanon", { amount: 250 })}
      />

      <ImpactCards
        className="lebanon-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={lebanonImpactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 50;
          openDonation("lebanon", { amount: amt });
        }}
      />

      <ImpactSection1
        stats={lebanonImpactStats}
        desktopVisibleCount={3}
        eyebrow="How Your Donation Helps"
        title="WHY YOUR DONATION MATTERS"
      />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default EmergencyReliefLebanon;
