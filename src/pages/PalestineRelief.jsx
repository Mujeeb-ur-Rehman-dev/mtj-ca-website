import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/PalestineRelief/mobile-image.png"
import heroImage from "../assets/img/PalestineRelief/heroImage.png";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import ImpactCards from "../components/impactCards/ImpactCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import { impactSectionData, palestineImpactStats } from "../components/data/impactSectionData";

const PalestineRelief = () => {
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
                        title="Lifting Gaza Out of Crisis"
                        paragraphs={[
                         "The humanitarian crisis in Gaza has reached an unprecedented level. Nine in ten residents — 1.9 million people — have been forcibly displaced, fleeing relentless airstrikes and destruction. Families have lost their homes, livelihoods, and sense of security. With limited access to food and clean water, they are struggling to survive each day.",
               "Hunger is Spreading Fast: 2.15 million people in Gaza face high levels of acute food insecurity, with over 133,000 at risk of famine. Children are starving, parents are unable to feed their families, and the elderly are going without meals.",
               "Thousands of Children Orphaned: The war has devastated an entire generation. An estimated 19,000 children have been orphaned or separated from their families, left vulnerable without anyone to protect them, losing their childhoods to war."
                        ]}
                         image ='' 
                         />
             <ImpactCards
                   title="YOUR GENEROSITY CAN BRING COMFORT IN THEIR DARKEST HOUR"
                   backgroundColor="#0B212A"
                    cards={[
                             { title: "Food Distribution", amount: "$95", description: "Provide a food parcel with essential staples such as rice, lentils, oil, tea, and canned foods.", donateLink: "#donate" },
                             { title: "School Kits", amount: "$175", description: "Help five children continue learning with school bags and educational supplies.", donateLink: "#donate" },
                             { title: "Family Support", amount: "$475", description: "Provide five families with monthly food parcels filled with essential household staples.", donateLink: "#donate" },
                            ]}
                            />               
      <ImpactSection1
        stats={palestineImpactStats}
        desktopVisibleCount={3}
        eyebrow="How Your Donation Helps"
        title="The Impact of our work"
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default PalestineRelief;
