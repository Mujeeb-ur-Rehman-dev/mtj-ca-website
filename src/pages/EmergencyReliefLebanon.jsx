import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import { lebanonImpactStats } from "../components/data/impactSectionData";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactCards from "../components/impactCards/ImpactCards";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import InfoSection from "../components/InfoSection/InfoSection";
import { useDonation } from "../context/DonationContext";



const lebanonStats = lebanonImpactStats;

const EmergencyReliefLebanon = () => {
  const { openDonation } = useDonation();

  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Lebanon Emergency"
        description=""
        buttonText=""
        buttonLink=""
         cardContent={
    <DonatinCards
      campaignTitle="Lebanon Emergency Relief"
      // options={[
      //   { amount: "50K", description: "Emergency support for a family" },
      //   { amount: "100K", description: "Covers essentials for 2 families" },
      //   { amount: "150K", description: "Helps 3 families survive" },
      // ]}
      // monthlyOptions={["5,000", "10K", "15K", "20K", "40K", "60K"]}
      onDonate={({ frequency, amount }) => {
              openDonation("lebanon", { frequency, amount });
            }}
    />
  }
      />
         <InfoSection
             title="FAMILIES IN LEBANON NEED YOU NOW"
             paragraphs={[
              "The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal.",
    "For $250, you put an emergency pack in the hands of a family that fled their homes with nothing.",
    "Each pack includes:",
    ["Ready-to-eat food", "Hygiene essentials", "Gas stove", "Floor mats"],
    "MTJF is already on the ground, and 45 families have already received their kits. More are waiting.",
    "Without your support, they wait longer.",
    "Send an emergency pack today."
             ]}
              image ='' 
              buttonText="Donate Now"
              onButtonClick={() => openDonation('lebanon')}
              />
               <ImpactCards
                        title="YOUR GENEROSITY CAN BRING COMFORT IN THEIR DARKEST HOUR"
                        backgroundColor="#0B212A"
                        cards={[
                               { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
                               { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
                               { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
                               ]}
                          />
    
       <ImpactSection1
         stats={lebanonStats}
         desktopVisibleCount={3}
         eyebrow="How Your Donation Helps"
         title="Why your donation matters"
       />
      <Newsletter />
      <Footer />
    </>
  );
};

export default EmergencyReliefLebanon;
