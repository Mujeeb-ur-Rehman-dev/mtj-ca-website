import React from "react";
import Hero from "../components/hero/Hero";
import KASBOverview from "../components/KASB/KASBOverview";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import ImpactCards from "../components/impactCards/ImpactCards";
import KASBImpactStats from "../components/KASB/KASBImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./KASB.css";

// Assets
import kasbHeroImg from "../assets/img/KASB/kasb-hero.webp";

const impactCardsData = [
  {
    title: "Essential tools and materials",
    amount: "$60",
    description:
      "From sewing kits to stitching supplies, your contribution ensures participants have everything they need to learn and succeed.",
    donateLink: "#donate-section",
  },
  {
    title: "Fund a vocational training session",
    amount: "$120",
    description:
      "Cover the cost of a complete session, providing students with vital tools, guidance, and practical expertise for self-sufficiency.",
    donateLink: "#donate-section",
  },
  {
    title: "Skill development for Women",
    amount: "$180",
    description:
      "Support women in underprivileged communities through training, so they can earn an income and build a stable future for their family.",
    donateLink: "#donate-section",
  },
];

const KASB = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("kasb");
    }
  };

  return (
    <div className="kasb-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="kasb-hero"
        backgroundImage={kasbHeroImg}
        mobileImage={kasbHeroImg}
        showRightImage={false}
        title="KASB"
        boldTitle={true}
        titleColor="#ffffff"
        description="Empowering women to learn and earn, breaking the cycle of poverty."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: Vocational Training to Empower Communities in Pakistan (4 Feature Cards + Donation Card) */}
      <KASBOverview
        onDonate={({ frequency, amount }) => {
          openDonation("kasb", { frequency, amount });
        }}
      />

      {/* 3. Video Section */}
      <section className="kasb-video-section">
        <div className="kasb-video-container">
          <VideoSection
            videoId="LLNrQt_KtoE"
            title="How KASB Vocational Training is Transforming Lives in Pakistan | MTJF"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="kasb"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 5. How You Can Help (3 Impact Cards) */}
      <ImpactCards
        className="kasb-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 60;
          openDonation("kasb", { amount: amt });
        }}
      />

      {/* 6. The Impact of Our Work (4 Stat Cards) */}
      <KASBImpactStats
        eyebrow="How Your Donations Help"
        title="THE IMPACT OF OUR WORK"
      />

      {/* 7. Newsletter */}
      <Newsletter />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default KASB;
