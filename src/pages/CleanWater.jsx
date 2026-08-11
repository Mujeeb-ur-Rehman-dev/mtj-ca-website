import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/CleanWater/mobileImg.png";
import heroImage from "../assets/img/CleanWater/heroImage.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { impactSectionData, cleanWaterImpactStats } from "../components/data/impactSectionData";

const CleanWater = () => {
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
              title="Water – The Best Form of Charity"
              paragraphs={[
                "Millions of people in Pakistan still don’t have safe drinking water. In places like Sindh and Balochistan, families collect water from ponds, rivers, even floodwater, because there’s no better option. ",
                "Many women spend 3-5 hours a day just trying to bring water home. And it’s often contaminated:",
                "UNICEF reports that about 70% of households drink bacterially contaminated water, and around 53,000 children under five die each year from diarrhea linked to poor water and sanitation.",
                "Your support is vital for their survival. MTJ Foundation has installed 150+ hand pumps and supports long-term solutions like filtration plants, so families can drink safely, live with dignity, and have clean water anytime they need it.",
              ]}
              image='' />
                <VideoSection
                  videoId="TdPtNLrEwYo"
                  title="Molana Tariq Jamil Foundation Clean Water Project"
                  channel="MTJ Foundation Canada"
                />
                 <ImpactCards
                       title="how you can help"
                       backgroundColor="#0B212A"
                       cards={[
                         { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
                         { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
                         { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
                       ]} />
      <ImpactSection1
        stats={cleanWaterImpactStats}
        eyebrow="Clean Water Initiative"
        title="WATER – THE BEST FORM OF CHARITY"
      />
      <FAQAccordion />                    
      <Newsletter />
      <Footer />
    </>
  );
};

export default CleanWater;
