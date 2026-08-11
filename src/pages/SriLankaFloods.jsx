import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import heroImage from "../assets/img/SriLankaFloods/heroImage.png"
import mobileImg from "../assets/img/SriLankaFloods/mobileImg.jpg"
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import AmountPickerGrid from "../components/Amountpickergrid/AmountPickerGrid";

const SriLankaFloods = () => {
  return (
    <>
      <Hero
        title="Sri Lanka Floods"
        backgroundImage={backgroundImage}
        heroImage={heroImage}
        mobileImage={mobileImg} 
        description="Help flood victims in Sri Lanka by providing emergency relief, shelter, and essential supplies."
        buttonText="Donate Now"
        buttonLink="#donate"
          cardContent={
    <AmountPickerGrid
      title="Provide urgent aid to Sri Lanka flood victims"
      presetAmounts={[
        { value: 7000, label: '7,000' },
        { value: 15000, label: '15K' },
        { value: 25000, label: '25K' },
        { value: 70000, label: '70K' },
        { value: 150000, label: '150K' },
        { value: 250000, label: '250K' },
      ]}
      defaultSelectedIndex={1}
      onDonate={({ amount, currencyCode }) => { /* apna donate logic */ }}
    />
  }
      />
       <InfoSection
                              title="Families Are Stranded. Children Are Hungry - Send Relief Today"
                              paragraphs={[
                               "Sri Lanka is facing one of its worst disasters in years. ",
                     "Floods and landslides caused by Cyclone Ditwah have displaced families, destroyed homes, and left 1.4 million people without the basics they need to get through the day.",
                     "Many parents are comforting their children with little more than hope because food, clean water, and electricity are no longer accessible.",
                     "Every hour without help puts more families at risk. Shelters are packed, shops are closed, and thousands of children are going to sleep hungry. ",
                     "People are relying on ration packs to make it through the week — and far too many still don’t have one.",
                     "For $35, you can provide a ration pack that feeds a family of five for an entire week. It’s simple, direct relief that reaches people fast.",
                     "Your support can bring a family the relief they’re waiting for. Don’t keep them waiting for too long."
                              ]}
                               image ='' 
                               />
      <VideoSection
        videoId="KPg1Ux3juAU"
        title="Together for Humanity | Support Those in Need"
        channel="MTJ Foundation Canada"
      />
          <ImpactCards
                          title="how you can help"
                          backgroundColor="#0B212A"
                           cards={[
                                    { title: "Support One Family", amount: "$35", description: "Ration pack includes rice, flour, oil, canned goods, vegetables, and hygiene essentials, enough to help a family of five get through seven difficult days", donateLink: "#donate" },
                                    { title: "Support Two Families", amount: "$70", description:`Double your impact by giving two families a week of food and basic supplies.This ensures more families aren’t left waiting during this emergency` , donateLink: "#donate" },
                                    { title: "Support Four Families", amount: "$140", description: `Help four families access immediate food, hygiene items, and essential supplies.Your support brings immediate comfort to those in crisis.`, donateLink: "#donate" },
                                    { title: "Support Ten Families", amount: "$350", description: "Your support provides them with food, hygiene essentials, and a sense of stability when everything around them has been lost.", donateLink: "#donate" },
                                   ]}
                                   />
      <Newsletter />
      <Footer />
    </>
  );
};

export default SriLankaFloods;
