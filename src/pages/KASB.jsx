import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/KASB/mobileImg.png";
import heroImage from "../assets/img/KASB/heroImage.png";
import kasbVideoPoster from "../assets/img/KASB/KASB-Video.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { impactSectionData, kasbImpactStats } from "../components/data/impactSectionData";
import { kasbFaqItems } from "../components/data/faqData";

const KASB = () => {
  return (
    <>
         <Hero
             className="kasb-hero"
             backgroundImage={backgroundImage}
             mobileImage={mobileImg}  
             heroImage={heroImage}
             boldTitle={true}
             titleColor="#0d2130"
             title="Empowering Pakistan With KASB Vocational Training"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       className="kasb-donation-card"
                       campaignTitle="Support KASB Vocational Program"
                       defaultSelectedIndex={0}   // "Rs 70K" pre-selected hai screenshot mein
                       monthlyListOptions={[
                               { amount: "6,000", description: "Essential Tools & Materials" },
                               { amount: "12K", description: "Vocational Training Sessions" },
                               { amount: "20K", description: "Skill Development for Women" },
                       ]}
                       options={[
                               { amount: "12K", description: "Essential Tools & Materials" },
                               { amount: "25K", description: "Vocational Training Sessions" },
                               { amount: "35K", description: "Skill Development for Women" },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
         />
       }
           />
        <InfoSection
          className="kasb-info-section"
          title="Vocational Training to Empower Communities in Pakistan."
          paragraphs={[
            "Across Pakistan, millions dream of a better life but lack the opportunity to earn it. Every year, the country needs over one million skilled workers, yet less than half are trained. This gap leaves families trapped in poverty, with widows and vulnerable groups affected the most.",
            "That’s what we are working to change through the KASB Vocational Training Program.",
            "We don’t just teach skills, we create opportunities. From football stitching to e-commerce, trainees even earn while training. When training ends, our team helps with job placement or starting a small business so stability lasts.",
            "Imagine the impact: a widow starting her own small business, or a young man finding stable employment. A single donation can open a door, put steady income in a home, and end the cycle of dependency.",
            "Equip a family with a skill that pays, starting today.",
          ]}
          buttonText="Donate Now"
          noImageLayout="centered"
          image=""
        />
      <VideoSection
        className="kasb-video"
        videoId="LLNrQt_KtoE"
        posterImage={kasbVideoPoster}
        showPosterDetails={false}
        title="Together for Humanity | Support Those in Need"
        channel="MTJ Foundation Canada"
      />
          <ImpactCards
                               title="how you can help"
                               backgroundColor="#0B212A"
                                cards={[
                                          { title: "Essential tools and materials", amount: "$60", description: `From sewing kits to stitching supplies, your contribution ensures participants can learn with the right resources in hand.`, donateLink: "#donate" },
                                         { title: "Fund a vocational training session", amount: "$120", description: `Cover the cost of a complete session, providing students with the skills, guidance, and direction needed for self-sufficiency.`, donateLink: "#donate" },
                                         { title: "Skill development for women", amount: "$180", description: "Support women with specialized training, like football stitching, so they can earn an income and stand on their own feet.", donateLink: "#donate" },
                                        ]}
                                        />  
      <ImpactSection1
        stats={kasbImpactStats}
        eyebrow="How Your Donation Helps"
        title="The Impact of Our Work"
      />
       <FAQAccordion items={kasbFaqItems} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default KASB;
