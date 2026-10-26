import React from "react";
import Hero from "../components/hero/Hero";
import sadaqahHeroBg from "../assets/img/sadaqahJariyah/Sadaqah.webp";
import sadaqahInfoImg from "../assets/img/sadaqahJariyah/Image-2.webp";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import { sadaqahImpactCardsData } from "../components/data/impactCardsData";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import { sadaqahImpactStats } from "../components/data/impactSectionData";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";

// Donation Context
import { useDonation } from "../context/DonationContext";

const Sadaqah = () => {
  const { openDonation } = useDonation();

  return (
    <>
      <Hero
        className="sadaqah-hero"
        backgroundImage={sadaqahHeroBg}
        mobileImage={sadaqahHeroBg}
        showRightImage={false}
        title="SADAQAH"
        titleColor="#ffffff"
        boldTitle={true}
        description="For a parent who can’t fill the table, relief is a simple meal. For a child who’s sick, it’s access to medical care. For a family drinking unsafe water, it’s a clean source nearby. Your Sadaqah is that relief."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Give Sadaqah"
        onButtonClick={() => openDonation('sadaqah')}
      />
      <InfoSection
        className="sadaqah-info-section"
        title="YOUR SADAQAH IS AN IMMEDIATE RELIEF"
        paragraphs={[
          "Every day, people face struggles they can’t overcome alone – hunger, sickness, and poverty.",
          "Every smile, every meal you share, every bit of help you give, all of it counts as Sadaqah.",
          "The Prophet ﷺ said: “Charity extinguishes sins just as water extinguishes fire.” (Tirmidhi)",
          "Give with a pure heart, for what you give in the name of Allah never truly leaves your hands; it returns multiplied.",
          "When you give through the MTJ Foundation, your Sadaqah reaches families wherever needed most. It can put food on a table, help a child go to school, or bring comfort to someone in distress.",
          "Make Sadaqah part of your life. Every drop of water, every child fed, every life saved is a source of continuous reward for you."
        ]}
        image={sadaqahInfoImg}
        imageAlt="MTJF clean water hand pump"
        buttonText="Donate Now"
        onButtonClick={() => openDonation('sadaqah')}
      />
      <ImpactCards
        className="sadaqah-impact-cards"
        title="CHOOSE WHERE YOUR SADAQAH MAKES AN IMPACT"
        isCarousel={false}
        cards={sadaqahImpactCardsData}
        onDonate={() => openDonation('sadaqah')}
      />
      <ImpactSection1
        stats={sadaqahImpactStats}
        eyebrow="How Your Donations Help"
        title="THE IMPACT OF OUR WORK"
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Sadaqah;
