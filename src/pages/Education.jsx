import React from "react";
import Hero from "../components/hero/Hero";
import EducationOverview from "../components/Education/EducationOverview";
import ImpactCards from "../components/impactCards/ImpactCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import { educationImpactStats } from "../components/data/impactSectionData";
import "./Education.css";

// Assets
import educationHeroImg from "../assets/img/Education/education-hero.webp";

const impactCardsData = [
  {
    title: "Learning Materials",
    amount: "$60",
    description:
      "Provides learning materials to children from low-income families. The kit contains books, uniforms, and school supplies.",
    donateLink: "#donate",
  },
  {
    title: "Scholarship Program",
    amount: "$120",
    description:
      "Fund the education of a student from a struggling family so they are not forced to drop out before finishing school.",
    donateLink: "#donate",
  },
  {
    title: "School Construction",
    amount: "$180",
    description:
      "Help build or renovate a school in a remote community so every child has a school to learn and grow.",
    donateLink: "#donate",
  },
];

const Education = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    openDonation("education");
  };

  const handleCardDonate = (card) => {
    const amount = parseInt(card.amount.replace(/\D/g, ""), 10) || 60;
    openDonation("education", { amount });
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

      {/* 2. Overview Section */}
      <EducationOverview onDonate={() => openDonation("education")} />

      {/* 3. How You Can Help (3 Impact Cards) */}
      <ImpactCards
        className="education-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={handleCardDonate}
      />

      {/* 4. The Impact of Our Work (Stamp Carousel) */}
      <ImpactSection1
        className="education-impact-section"
        eyebrow="How Your Donation Helps"
        title="THE IMPACT OF OUR WORK"
        stats={educationImpactStats}
        desktopVisibleCount={1}
      />

      {/* 5. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="education"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 6. Newsletter */}
      <Newsletter />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default Education;
