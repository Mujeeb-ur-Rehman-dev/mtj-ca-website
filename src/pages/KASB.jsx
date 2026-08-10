import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/KASB/mobileImg.png";
import heroImage from "../assets/img/KASB/heroImage.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { impactSectionData, kasbImpactStats } from "../components/data/impactSectionData";

const KASB = () => {
  return (
    <>
         <Hero
             backgroundImage={backgroundImage}
             mobileImage={mobileImg}  
             heroImage={heroImage}
             title="PALESTINE EMERGENCY"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       campaignTitle="Palestine Emergency Relief"
                       defaultSelectedIndex={0}   // "Rs 70K" pre-selected hai screenshot mein
                       options={[
                               { amount: "20K", description: "Feed's a Family for a Day" },
                               { amount: "35K", description: "Feed's a Family for a Week" },
                               { amount: "90K", description: "Feed's a Family for a Month" },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
         />
       }
           />
        <InfoSection
                                   title="One-Third of Food Bank Visitors Are Children - $10 Feeds a Child"
                                   paragraphs={[
                                    "Canada is facing a food crisis we can’t ignore. In a single month last year, food banks recorded over 2 million visits, the highest number ever recorded, and one-third of those visitors were children",
                          "Rising food prices mean more neighbours are struggling to feed their families.",
                          "Our $10 Hot Meal initiative makes sure our neighbours don’t go to bed on an empty stomach. We’re currently serving hot, freshly prepared meals to those experiencing hunger in downtown Toronto.",
                          "With your support, we’re working to expand this across the GTA, reaching more shelters, communities, and people in need.",
                          "Every meal is made with care, rooted in the Islamic values of service, mercy, and dignity.",
                          "The goal is simple: Feed more people. Serve more communities. And remind them that they’re not forgotten.",
                          "With just $10, you can be part of this great cause.",
                          "In collaboration with MDI."
                          ]}
                                    image ='' 
                                    />
      <VideoSection />
          <ImpactCards
                               title="how you can help"
                               backgroundColor="#0B212A"
                                cards={[
                                         { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
                                         { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
                                         { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
                                        ]}
                                        />  
      <ImpactSection1
        stats={kasbImpactStats}
        eyebrow="KASB Vocational Training"
        title="SKILLS THAT CREATE OPPORTUNITIES"
      />
       <FAQAccordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default KASB;
