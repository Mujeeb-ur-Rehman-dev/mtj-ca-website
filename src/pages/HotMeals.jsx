import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import ImpactCards from "../components/impactCards/ImpactCards";
import mobileImg from "../assets/img/HotMeals/mobileImg.jpg";
import heroImage from "../assets/img/HotMeals/heroImage.jpg";
import InfoSection from "../components/InfoSection/InfoSection";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { hotMealsFaqItems } from "../components/data/faqData";

const HotMeals = () => {
  return (
    <>
      <Hero
             className="hot-meals-hero"
             backgroundImage={heroImage}
             mobileImage={mobileImg}  
             heroImage={null}
             title="$10 HOT MEAL - REAL IMPACT"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       className="hot-meals-hero-donation-card"
                       campaignTitle="Provide Food Security"
                       defaultFrequency="monthly"
                       defaultSelectedIndex={1}
                       monthlyUsesOneTimeOptions
                       options={[
                               { amount: "2,000", description: "Provide 1 Hot Meal to Someone in Need" },
                               { amount: "10K", description: "Serve 5 Fresh, Nourishing Meals" },
                               { amount: "20K", description: "Feed 10 People Battling Hunger" },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
         />
       }
           />
      <InfoSection
        className="hot-meals-info-section"
        title="One-third of food bank visitors are children - $10 feeds a child"
        paragraphs={[
          "Canada is facing a food crisis we can’t ignore. In a single month last year, food banks recorded over 2 million visits, the highest number ever recorded, and one-third of those visitors were children.",
          "Rising food prices mean more neighbours are struggling to feed their families.",
          "Our $10 Hot Meal initiative makes sure our neighbours don’t go to bed on an empty stomach. We’re currently serving hot, freshly prepared meals to those experiencing hunger in downtown Toronto.",
          "With your support, we’re working to expand this across the GTA, reaching more shelters, communities, and people in need.",
          "Every meal is made with care, rooted in the Islamic values of service, mercy, and dignity.",
          "The goal is simple: Feed more people. Serve more communities. And remind them that they’re not forgotten.",
          "With just $10, you can be part of this great cause.",
          "In collaboration with MDI.",
        ]}
        buttonText="Donate Now"
        buttonVariant="maroon"
      />
        <ImpactCards
                                     title="how you can help"
                                     backgroundColor="#0B212A"
                                      cards={[
                                               { title: "Feed one person", amount: "$10", description: "One hot meal. One moment of relief. Your $10 brings comfort, dignity, and hope to someone who’s been hungry all day long.", donateLink: "#donate" },
                                               { title: "Feed 5 people", amount: "$50", description: "Provide five people with hot, wholesome meals. Each plate reminds someone they’re not alone, that compassion still lives in our communities.", donateLink: "#donate" },
                                               { title: "Feed 10 people", amount: "$100", description: "With $100, you feed ten people facing hunger. Ten warm plates. Ten grateful hearts. One shared message: no one should go hungry when we can give.", donateLink: "#donate" },
                                              ]}/> 
  
        <FAQAccordion items={hotMealsFaqItems} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HotMeals;
