import React from "react";
import Hero from "../components/hero/Hero";
import ImpactCards from "../components/impactCards/ImpactCards";
import { impactCardsData } from "../components/data/impactCardsData";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/sadaqahJariyah/backgroun-image.png";
import heroImage from "../assets/img/sadaqahJariyah/hero-image.png";
import mobileImg from "../assets/img/sadaqahJariyah/img-mobile.png";
import infoRightImage from "../assets/img/sadaqahJariyah/info-image.png"
import InfoSection from "../components/InfoSection/InfoSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import { impactSectionData, sadaqahImpactStats } from "../components/data/impactSectionData";

const Sadaqah = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}  
        heroImage={heroImage}
        title="Sadaqah"
        description="For a parent who can’t fill the table, relief is a simple meal. For a child who’s sick, it’s access to medical care. For a family drinking unsafe water, it’s a clean source nearby. Your Sadaqah is that relief."
        buttonText="Give Sadaqah"
        buttonLink="#donate"
      />
      <InfoSection
       title="Your Sadaqah is an Immediate Relief"
       paragraphs={[
        "Every day, people face struggles they can’t overcome alone – hunger, sickness, and poverty.",
        "Every smile, every meal you share, every bit of help you give, all of it counts as Sadaqah.",
        "The Prophet ﷺ said: “Charity extinguishes sins just as water extinguishes fire.” (Tirmidhi)",
        "Give with a pure heart, for what you give in the name of Allah never truly leaves your hands; it returns multiplied.",
        "When you give through the MTJ Foundation, your Sadaqah reaches families wherever needed most. It can put food on a table, help a child go to school, or bring comfort to someone in distress.",
        "Make Sadaqah part of your life. Every drop of water, every child fed, every life saved is a source of continuous reward for you."
       ]}
        image ={infoRightImage} 
        />
         <ImpactCards
               title="Choose Where Your Sadaqah Makes an Impact"
             cards={[
                        impactCardsData[2],
                        impactCardsData[0],
                       impactCardsData[1],
                       ]}
             />
          <ImpactSection1
            stats={sadaqahImpactStats}
            eyebrow="How Your Donations Help"
            title="The Impact of our work"
          />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Sadaqah;
