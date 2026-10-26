import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import zakatHeroBg from "../assets/img/zakat/hero/Zakat-Appeal.webp";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import { impactCardsData } from "../components/data/impactCardsData";
import { zakatImpactStats } from "../components/data/impactSectionData";
import infoRightImage from "../assets/img/zakat/InfoSection/info-right-img.png";
import CalculatorCta from "../components/calculatorcta/CalculatorCta";
import ZakatCalculatorCard from "../components/ZakatCalculatorCard/ZakatCalculatorCard";
import Footer from "../components/Footer/Footer";
// Donation Context
import { useDonation } from "../context/DonationContext";

const Zakat = () => {
  const { openDonation } = useDonation();
  const [showCalculator, setShowCalculator] = useState(false);

  const handleOpenCalculator = () => {
    setShowCalculator(true);
  };

  const handleCloseCalculator = () => {
    setShowCalculator(false);
  };

  const handleContinueCalculator = (data) => {
    console.log("Calculator data:", data);
    setShowCalculator(false);
  };

  const handleManualEntry = (data) => {
    console.log("Manual entry data:", data);
    setShowCalculator(false);
  };

  const scrollToZakatCalc = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.getElementById("z-calc") || document.getElementById("zakat-calculator");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Hero
        className="zakat-hero"
        backgroundImage={zakatHeroBg}
        mobileImage={zakatHeroBg}
        showRightImage={false}
        title="YOUR ZAKAT, THEIR RIGHT"
        titleColor="#ffffff"
        boldTitle={true}
        description="MTJ Foundation serves humanity through faith and kindness, providing disaster relief, education, healthcare, and clean water to restore dignity and hope."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={() => openDonation('zakat')}
        secondaryButtonText="Calculate Zakat"
        secondaryButtonLink="#z-calc"
        onSecondaryButtonClick={scrollToZakatCalc}
      />
      <InfoSection
        className="zakat-info-section"
        title="WHY GIVE ZAKAT?"
        paragraphs={[
          "Zakat is an obligation, but it’s also a gift Allah has placed in our wealth. The Qur’an speaks about charity that purifies and blesses what we have.",
          "Your Zakat through MTJF is directed to people who qualify to receive it: families facing hunger, illness, and poverty, with nowhere to turn for help. Your Zakat can provide food to families with nothing to eat, medical help where it is not available, or clean water where it is scarce.",
          "The Prophet ﷺ said: “Whoever pays the zakat on his wealth will have its evil removed from him.” (Ibn Majah)",
          "Give your Zakat today, and let it be relief for someone who has been suffering for too long.",
        ]}
        image={infoRightImage}
        buttonText="Donate Now"
        onButtonClick={() => openDonation('zakat')}
      />
      <ImpactCards
        className="zakat-impact-cards"
        title="CHOOSE WHERE YOUR ZAKAT MAKES AN IMPACT"
        isCarousel={false}
        onDonate={() => openDonation('zakat')}
        cards={[
          impactCardsData[2],
          impactCardsData[0],
          impactCardsData[1],
        ]}
      />
      <div id="z-calc">
        <div id="zakat-calculator">
          <CalculatorCta
            title="ZAKAT CALCULATOR"
            description="Not sure how much Zakat you owe? Our Zakat calculator makes it simple. Every Muslim who meets the nisab (minimum threshold of wealth) is required to give 2.5% of their savings in Zakat each year. To calculate the exact amount, enter your details, see the amount, and give with confidence, knowing your Zakat will support families eligible to receive it."
            buttonText="Zakat Calculator"
            onButtonClick={handleOpenCalculator}
          />
        </div>
      </div>
      <ImpactSection1
        stats={zakatImpactStats}
        eyebrow="How Your Donations Help"
        title="THE IMPACT OF OUR WORK"
      />
      <Newsletter />
      <Footer />
      {showCalculator && (
        <ZakatCalculatorCard
          onClose={handleCloseCalculator}
          onContinue={handleContinueCalculator}
          onManualEntry={handleManualEntry}
        />
      )}
    </>
  );
};

export default Zakat;
