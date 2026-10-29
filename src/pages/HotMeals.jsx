import React from "react";
import Hero from "../components/hero/Hero";
import HotMealsOverview from "../components/HotMeals/HotMealsOverview";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import ImpactCards from "../components/impactCards/ImpactCards";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./HotMeals.css";

// Assets
import hotMealsHeroImg from "../assets/img/HotMeals/hot-meals-hero.webp";

const impactCardsData = [
  {
    title: "Feed one person",
    amount: "$10",
    description:
      "One hot meal. One moment of relief. Your $10 brings warmth, dignity, and hope to someone who's been hungry all day long.",
    donateLink: "#donate-section",
  },
  {
    title: "Feed 5 people",
    amount: "$50",
    description:
      "Provide five people with hot, wholesome meals. You'll pass warmth and relief to seniors, children, and newcomers who live in our communities.",
    donateLink: "#donate-section",
  },
  {
    title: "Feed 10 people",
    amount: "$100",
    description:
      "With $100, you fund an entire evening supper: ten warm plates, ten smiles returned, ten souls reminded that someone cares enough to feed them.",
    donateLink: "#donate-section",
  },
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

      {/* 2. Overview: One-Third of Food Bank Visitors Are Children (4 Feature Cards + Donation Card) */}
      <HotMealsOverview
        onDonate={({ frequency, amount }) => {
          openDonation("hotMeals", { frequency, amount });
        }}
      />

      {/* 3. Video Section */}
      <section className="hot-meals-video-section">
        <div className="hot-meals-video-container">
          <VideoSection
            videoId="KPg1Ux3juAU"
            title="How we are Fighting Hunger in Pakistan | MTJF"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="hotMeals"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 5. How You Can Help (3 Impact Cards) */}
      <ImpactCards
        className="hot-meals-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 10;
          openDonation("hotMeals", { amount: amt });
        }}
      />

      {/* 6. Newsletter */}
      <Newsletter />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default HotMeals;
