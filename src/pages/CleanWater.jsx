import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/CleanWater/mobileImg.png";
import heroImage from "../assets/img/CleanWater/heroImage.png";
import cleanWaterVideoPoster from "../assets/img/CleanWater/imgi_44_default.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { impactSectionData, cleanWaterImpactStats } from "../components/data/impactSectionData";
import { cleanWaterFaqItems } from "../components/data/faqData";

const CleanWater = () => {
  return (
    <>
       <Hero
        className="clean-water-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}
        heroImage={heroImage}
        title="SAFE WATER FOR FAMILIES WHO HAVE NONE"
        description=""
        buttonText=""
        buttonLink=""
        cardContent={
          <DonatinCards
            className="clean-water-donation-card"
            campaignTitle="Support Clean Water"
            showMonthlyTab={false}
            defaultSelectedIndex={1}
            options={[
              { amount: "120K", description: "Provide a Hand Pump for 1 Family" },
              { amount: "150K", description: "Community Hand Pump (no zakat)" },
              { amount: "3M", description: "RO Filtration Plant (no zakat)" },
            ]}
            onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
          />
        }
      />
         <InfoSection
           className="clean-water-info-section"
           title="Water – The Best Form of Charity"
           paragraphs={[
             "Millions of people in Pakistan still don’t have safe drinking water. In places like Sindh and Balochistan, families collect water from ponds, rivers, even floodwater, because there’s no better option.",
             "Many women spend 3-5 hours a day just trying to bring water home. And it’s often contaminated: UNICEF reports that about 70% of households drink bacterially contaminated water, and around 53,000 children under five die each year from diarrhea linked to poor water and sanitation.",
                "Your support is vital for their survival. MTJ Foundation has installed 150+ hand pumps and supports long-term solutions like filtration plants, so families can drink safely, live with dignity, and have clean water anytime they need it.",
              ]}
           hideButton
           image=""
           noImageLayout="centered"
         />
                <VideoSection
                  videoId="Ky8vkHMajxI"
                  posterImage={cleanWaterVideoPoster}
                  title="Molana Tariq Jamil Foundation Clean Water Project"
                  channel="MTJ Foundation Canada"
                />
                 <ImpactCards
                       title="how you can help"
                       backgroundColor="#0B212A"
                       cards={[
                         { title: "Water Access", amount: "$655", description: "Your gift helps build a hand pump that gives a family in Pakistan safe access to clean water, day after day.", donateLink: "#donate" },
                         { title: "Community  Water Access", amount: "$815", description: "Fund a community hand-pump water access point. One donation can serve many families in remote regions across Pakistan.", donateLink: "#donate" },
                         { title: "Water Filtration Plant", amount: "$16240", description: "Help provide a community in Pakistan with access to safe, clean drinking water through the installation of a Reverse Osmosis filtration plant.", donateLink: "#donate" },
                       ]} />
      <ImpactSection1
        stats={cleanWaterImpactStats}
        eyebrow="Clean Water Initiative"
        title="WATER – THE BEST FORM OF CHARITY"
      />
      <FAQAccordion items={cleanWaterFaqItems}/>                    
      <Newsletter />
      <Footer />
    </>
  );
};

export default CleanWater;
