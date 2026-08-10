import React from "react";
import Hero from "../components/hero/Hero";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import mobileImg from "../assets/img/FoodRelief/mobileImg.png";
import heroImage from "../assets/img/FoodRelief/heroImage.png";
import InfoSection from "../components/InfoSection/InfoSection";
import { impactSectionData, foodReliefImpactStats } from "../components/data/impactSectionData";

const FoodRelief = () => {
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
                              title="HELP FEED PEOPLE IN NEED"
                              paragraphs={[
                               "Picture a struggling family in Pakistan sitting down to a nourishing meal because Allah’s mercy reached them through you: flour, rice, oil, and lentils to help feed them through the month.",
                     "For millions in Pakistan, that picture still feels out of reach. More than 40% of children under five are malnourished.",
                     "Floods have destroyed farms. Drought has ruined crops. Rising food costs have made it harder than ever for parents to feed their children.",
                     "Families are being forced to make impossible choices. Food or medicine? Dinner tonight or rent tomorrow?",
                     "MTJF’s Food Relief Program supports more than 500 families every month. Your donation becomes a bridge of mercy, connecting our Ummah to those who need it most.",
                     "The Prophet ﷺ said, “Whoever feeds a hungry believer, Allah will feed him from the fruits of Paradise.”",
                     "Be the reason a family can eat with dignity and without fear of where their next meal will come from."
                              ]}
                               image ='' 
                               />
      <VideoSection />     
           <ImpactCards
                         title="Choose How Allah's Mercy Flows Through You"
                         backgroundColor="#0B212A"
                          cards={[
                                   { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
                                   { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
                                   { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
                                  ]}
                                  />                        
      <ImpactSection1
        stats={foodReliefImpactStats}
        eyebrow="Food Relief Program"
        title="HELP FEED PEOPLE IN NEED"
      />
      <FAQAccordion />
       <Newsletter />
      <Footer />
    </>
  );
};

export default FoodRelief;
