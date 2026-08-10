import React from "react";
import Hero from "../components/hero/Hero";
import backgroundImage from "../assets/img/zakat/hero/background-img.png";
import heroImage from "../assets/img/zakat/hero/right-side.png"
import mobileImg from "../assets/img/zakat/hero/mobile-image.png"
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import { impactCardsData } from "../components/data/impactCardsData";
import {zakatImpactStats } from "../components/data/impactSectionData";
import infoRightImage from "../assets/img/zakat/InfoSection/info-right-img.png"
import CalculatorCta from "../components/calculatorcta/CalculatorCta";
import Footer from "../components/Footer/Footer";

const Zakat = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}  
        heroImage={heroImage}
        title="YOUR ZAKAT, THEIR RIGHT"
        description="Through MTJF, your Zakat becomes food for the hungry, care for the sick, and clean water for the thirsty. This is mercy in action, connecting us as one Ummah."
        buttonText="Donate Now"
        buttonLink="#donate"
        secondaryButtonText="Calculate Zakat"
        secondaryButtonLink="#donate"
      />
      <InfoSection
       title = "WHY GIVE ZAKAT?"
      paragraphs = {[
        "Zakat is an obligation, but it’s also a gift Allah has placed in our wealth. The Qur’an speaks about charity that purifies and blesses what we have.",
        "Your Zakat through MTJF is directed to people who qualify to receive it: families facing hunger, illness, and poverty, with nowhere to turn for help. Your Zakat can provide food to families with nothing to eat, medical help where it is not available, or clean water where it is scarce.",
        "The Prophet ﷺ said: “Whoever pays the zakat on his wealth will have its evil removed from him.” (Ibn Majah)",
        "Give your Zakat today, and let it be relief for someone who has been suffering for too long.",
      ]}
      image ={infoRightImage} 
      buttonText="Donate Now"
      buttonLink="#donate"
      />
      <ImpactCards
        title="CHOOSE WHERE YOUR ZAKAT MAKES AN IMPACT"
        cards={[
           impactCardsData[2],
           impactCardsData[0],
          impactCardsData[1],
          ]}
      />
      <CalculatorCta 
      title={"ZAKAT CALCULATOR"}
      description={"Not sure how much Zakat you owe? Our Zakat calculator makes it simple. Every Muslim who meets the nisab (minimum threshold of wealth) is required to give 2.5% of their savings in Zakat each year. To calculate the exact amount, enter your details, see the amount, and give with confidence, knowing your Zakat will support families eligible to receive it."}
      buttonText={"Zakat Calculator"} 
       
       />
      <ImpactSection1
        stats={zakatImpactStats}
        eyebrow="How Your Donations Help"
        title="The Impact of our work"
      />
      <Newsletter />
      <Footer/>
    </>
  );
};

export default Zakat;