import React from "react";
import Hero from "../components/hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import Footer from "../components/Footer/Footer";
import ImpactCards from "../components/impactCards/ImpactCards";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import DonationOptionsCard from "../components/Amountpickergrid/DonationOptionsCard";
import backgroundImage from "../assets/img/NepalFlood/hero-imge-nepal.png";
import heroImage from "../assets/img/SriLankaFloods/heroImage.png";
import mobileImg from "../assets/img/NepalFlood/herombl.png";

const NepalFloods = () => {
  return (
    <>
      <Hero
        title="NEPAL FLOODS APPEAL"
        backgroundImage={backgroundImage}
        heroImage=''
        mobileImage={mobileImg}
        description="Help flood victims in Nepal with emergency relief, shelter, clean water, and essential food support."
        buttonText="Donate and Support"
        buttonLink="#donate"
        cardContent={
          <DonationOptionsCard
            title="Nepal Floods Appeal"
            buttonText="Donate and Support"
            options={[
              { id: '8k', amount: 'Rs 8,000', text: 'provides a hygiene kit', selected: true },
              { id: '10k', amount: 'Rs 10K', text: 'provides shelter and bedding to a family' },
              { id: '12k', amount: 'Rs 12K', text: "provides 2 week's ration pack to a family" },
              { id: 'other', amount: 'Other amount', text: '' },
            ]}
            onDonate={(selectedOption) => {
              console.log('Nepal donate', selectedOption);
            }}
          />
        }
      />

      <InfoSection
        title="Families in Nepal Need Your Help Now"
        paragraphs={[
          "Severe floods, triggered by Nepal's monsoon rains, have left thousands of families without safe shelter, food, and clean water. The devastation has forced people from their homes, leaving them stranded in makeshift camps and on the edge of survival.",
          "More than 40,000 people are at risk of disease, hunger, and displacement. Many families have already lost their homes, livestock, and belongings, while communities struggle to meet even basic needs in the aftermath of the disaster.",
          "MTJ Foundation is preparing to provide direct relief in the affected areas. Your support can help provide food, shelter, hygiene kits, and emergency supplies to those who need it most.",
          "Action packs to help families put food on the table.",
          [
            "Cooked meals for those living in temporary shelters.",
            "Hygiene kits to reduce the spread of disease."
          ]
        ]}
        buttonText="Donate"
        buttonLink="#donate"
        image=""
        noImageLayout="decorated"
      />

      <ImpactCards
        title="Help families with what they need to survive"
        backgroundColor="#0B212A"
        cards={[
          {
            title: "Shelter & Bedding",
            amount: "$55",
            description: "Give a family a safe, more comfortable place to sleep after being forced from their homes.",
            donateLink: "#donate",
          },
          {
            title: "2-Week Ration Pack",
            amount: "$60",
            description: "Provide two weeks of essential food supplies to a family affected by the floods.",
            donateLink: "#donate",
          },
          {
            title: "Hygiene Kit",
            amount: "$40",
            description: "Help a displaced family stay clean and maintain basic hygiene while living in temporary shelter.",
            donateLink: "#donate",
          },
        ]}
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default NepalFloods;
