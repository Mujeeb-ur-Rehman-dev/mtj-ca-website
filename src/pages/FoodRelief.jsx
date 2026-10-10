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
import { rationImpactStats } from "../components/data/impactSectionData";

const FoodRelief = () => {
  return (
    <>
      <Hero
            className="medical-care-hero"
             backgroundImage={backgroundImage}
             mobileImage={mobileImg}  
             heroImage={heroImage}
             title="Food Relief"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       className="food-relief-donation-card"
                       campaignTitle="Provide Food Security"
                       showMonthlyTab={false}
                       defaultSelectedIndex={0}   // "Rs 70K" pre-selected hai screenshot mein
                       options={[
                               { amount: "20K", description: "Provide food packs for 1 month for 1 family" },
                               { amount: "40K", description: "Provide food packs for struggling families." },
                               { amount: "100K", description: "Deliver food aid to multiple households." },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
         />
       }
           />
       <InfoSection
                              className="food-relief-info-section"
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
                               noImageLayout="centered"
                               image ='' 
                               />
      <VideoSection
        videoId="KPg1Ux3juAU"
        title="How we are Fighting Hunger in Pakistan"
        channel="MTJ Foundation Canada"
      />     
           <ImpactCards
                         title="Choose How Allah's Mercy Flows Through You"
                         backgroundColor="#0B212A"
                          cards={[
                                   { title: "Ration Package for 1 Day", amount: "$10", description: `This ration is carefully prepared to support a family’s daily food needs, bringing dignity and relief to those facing hardship.`, donateLink: "#donate" },
                                   { title: "One-Month Family Ration Package", amount: "$90", description: `This ration is carefully prepared to provide a family with essential food support for a full month, bringing dignity and relief during difficult times.`, donateLink: "#donate" },
                                   { title: "Support the Food Relief Program", amount: "$200", description: `Feed 10 people with your Zakat and Sadaqah. Your support strengthens our Ummah by helping provide meals to those who need them most.`, donateLink: "#donate" },
                                  ]}
                                  />                        
      <ImpactSection1
        stats={rationImpactStats}
        eyebrow="How Does Your Donation Helps"
        title="The Impact of Your Giving"
      />
      <FAQAccordion />
       <Newsletter />
      <Footer />
    </>
  );
};

export default FoodRelief;
