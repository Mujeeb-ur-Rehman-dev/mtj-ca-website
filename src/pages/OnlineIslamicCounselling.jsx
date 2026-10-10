import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { useDonation } from "../context/DonationContext";

const OnlineIslamicCounselling = () => {
  const { openDonation } = useDonation();

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        title="ONLINE ISLAMIC COUNSELLING"
        description="Providing faith-based, compassionate mental and emotional guidance rooted in Islamic teachings and professional support."
        buttonText="Donate to Support Sessions"
        onButtonClick={() => openDonation("counselling")}
        cardContent={
          <DonatinCards
            campaignTitle="Islamic Counselling Support"
            defaultSelectedIndex={1}
            options={[
              { amount: "$50", description: "Sponsor 1 Confidential Counselling Session" },
              { amount: "$150", description: "Sponsor a Month of Family Therapy & Guidance" },
              { amount: "$300", description: "Comprehensive Mental Well-being Support" },
            ]}
            onDonate={({ frequency, amount }) => {
              openDonation("counselling", { frequency, amount });
            }}
          />
        }
      />

      <InfoSection
        title="Compassionate Guidance for Mind and Soul"
        paragraphs={[
          "Life challenges, anxiety, grief, and family stress affect individuals and communities worldwide. Islamic Counselling bridges professional psychological support with spiritual reassurance.",
          "Our qualified counsellors provide confidential, empathetic, and culturally sensitive care that respects Islamic values while utilizing modern therapeutic frameworks.",
          "By sponsoring counselling sessions, you ensure that individuals who cannot afford mental health services receive the professional spiritual and psychological support they urgently need.",
        ]}
        image=""
      />

      <ImpactCards
        title="How Your Support Empowers Lives"
        backgroundColor="#0B212A"
        cards={[
          {
            title: "Individual Counselling",
            amount: "$50",
            description: "Sponsor one-on-one sessions for youth and adults navigating anxiety, depression, and personal struggles.",
            donateLink: "#donate",
          },
          {
            title: "Family & Marital Mediation",
            amount: "$150",
            description: "Help families heal and build stronger relationships through dedicated faith-informed mediation.",
            donateLink: "#donate",
          },
          {
            title: "Community Mental Health Seminars",
            amount: "$300",
            description: "Fund educational workshops raising awareness and eliminating stigma surrounding mental health in Muslim communities.",
            donateLink: "#donate",
          },
        ]}
      />

      <VideoSection
        videoId="KPg1Ux3juAU"
        title="Spiritual Peace and Emotional Healing | MTJ Foundation Canada"
        channel="MTJ Foundation Canada"
      />

      <FAQAccordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default OnlineIslamicCounselling;
