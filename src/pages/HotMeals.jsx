import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import mobileImg from "../assets/img/HotMeals/mobileImg.png";
import heroImage from "../assets/img/HotMeals/heroImage.png";
import InfoSection from "../components/InfoSection/InfoSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";

const HotMeals = () => {
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
                                         title="Vocational Training to Empower Communities in Pakistan."
                                         paragraphs={[
                                          "Across Pakistan, millions dream of a better life but lack the opportunity to earn it. Every year, the country needs over one million skilled workers, yet less than half are trained. This gap leaves families trapped in poverty, with widows and vulnerable groups affected the most.",
                                "That’s what we are working to change through the KASB Vocational Training Program. ",
                                "We don’t just teach skills, we create opportunities. From football stitching to e-commerce, trainees even earn while training. When training ends, our team helps with job placement or starting a small business so stability lasts.",
                                "Imagine the impact: a widow starting her own small business, or a young man finding stable employment. A single donation can open a door, put steady income in a home, and end the cycle of dependency. ",
                                "Equip a family with a skill that pays, starting today. ",
                                ]}
                                          image ='' 
                                          />
        <ImpactCards
                                     title="how you can help"
                                     backgroundColor="#0B212A"
                                      cards={[
                                               { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
                                               { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
                                               { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
                                              ]}/> 
      <FAQAccordion />                                                                             
      <Newsletter />
      <Footer />
    </>
  );
};

export default HotMeals;
