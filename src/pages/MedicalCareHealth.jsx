import React from "react";
import Hero from "../components/hero/Hero";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import heroImage from "../assets/img/MedicalCareHealth/heroImage.png";
import mobileImg from "../assets/img/MedicalCareHealth/mobileImg.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import { medicalCareImpactStats } from "../components/data/impactSectionData";

const MedicalCareHealth = () => {
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
                                   title="Provide Medical Care Where It’s Out of Reach in Pakistan"
                                   paragraphs={[
                                    "In rural Pakistan, a fever, an infection, or even a pregnancy check-up can become dangerous when the nearest clinic is far away, and basic tests cost more than a family can manage. ",
                          "Mothers miss prenatal care. Children suffer from infections or malnutrition, detected too late. By the time someone reaches a doctor, the illness has already taken a toll.",
                          "That’s why MTJF opened the AAS Lab and Diagnostic Centre in Mian Channu, so families can get the diagnosis on time. This is mercy that saves families from months of pain.",
                          "At AAS, struggling families can access:",
                          ".100+ tests, including blood work, ultrasounds, X-rays, and CT scans",
                          ".Consultations to guide patients toward the right treatment",
                          ".Free or low-cost care for those who can’t afford it",
                          "Fund a test. Help someone get treatment in time. This is how Allah’s mercy reaches across the Ummah, through you."
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
                                  ]}
                                  /> 
      <ImpactSection1
        stats={medicalCareImpactStats}
        eyebrow="Medical Care"
        title="HEALTHCARE WHERE IT'S NEEDED MOST"
      />
       <FAQAccordion />
      <Newsletter />
      <Footer />
    </>
  );
};

export default MedicalCareHealth;
