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
             className="medical-care-hero"
             backgroundImage={backgroundImage}
             mobileImage={mobileImg}  
             heroImage={heroImage}
             title="Give the Gift of Health"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       campaignTitle="Provide Medical Care"
                       defaultSelectedIndex={0}   // "Rs 70K" pre-selected hai screenshot mein
                       monthlyUsesOneTimeOptions
                       options={[
                               { amount: "15K", description: "Sponsor a Patient's Test" },
                               { amount: "30K", description: "Maintain Diagnostic Equipment" },
                               { amount: "50K", description: "Expand Healthcare Services" },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
         />
       }
           />
             <InfoSection
                                 className="medical-care-info-section"
                                 title="Provide Medical Care Where It’s Out of Reach in Pakistan"
                                 paragraphs={[
                                  "In rural Pakistan, a fever, an infection, or even a pregnancy check-up can become dangerous when the nearest clinic is far away, and basic tests cost more than a family can manage. ",
                        "Mothers miss prenatal care. Children suffer from infections or malnutrition, detected too late. By the time someone reaches a doctor, the illness has already taken a toll.",
                        "That’s why MTJF opened the AAS Lab and Diagnostic Centre in Mian Channu, so families can get the diagnosis on time. This is mercy that saves families from months of pain.",
                        "At AAS, struggling families can access:",
                        [
                          <><strong>100+ tests</strong>, including blood work, ultrasounds, X-rays, and CT scans</>,
                          <><strong>Consultations</strong> to guide patients toward the right treatment</>,
                          <><strong>Free or low-cost care</strong> for those who can’t afford it</>,
                        ],
                        "Fund a test. Help someone get treatment in time. This is how Allah’s mercy reaches across the Ummah, through you."
                      ]}
                                  noImageLayout="centered"
                                  image ='' 
                                  />
       <ImpactCards
                         title="how you can help"
                         backgroundColor="#0B212A"
                          cards={[
                                   { title: "Fund a diagnostic test", amount: "$75", description: "Early diagnosis saves lives. A test you fund gives timely treatment and care to a patient in need." },
                                  { title: "Support Equipment Maintenance ", amount: "$150", description: "Help maintain our vital healthcare equipment, ensuring no patient is turned away." },
                                   { title: "Expand Our Services ", amount: "$250", description: "The funds you provide will go to expanding our labs and healthcare services to other communities in need." },

                                  ]}
                                  /> 
      <ImpactSection1
        stats={medicalCareImpactStats}
        eyebrow="How Your Donation Helps"
        title="The Impact of Our Work"
      />
       <FAQAccordion  faqKey="medicalCareHealth"/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MedicalCareHealth;
