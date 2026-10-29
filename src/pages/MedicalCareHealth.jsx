import React from "react";
import Hero from "../components/hero/Hero";
import MedicalCareOverview from "../components/MedicalCareHealth/MedicalCareOverview";
import ImpactCards from "../components/impactCards/ImpactCards";
import VideoSection from "../components/VideoSection/VideoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import MedicalCareImpactStats from "../components/MedicalCareHealth/MedicalCareImpactStats";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import { useDonation } from "../context/DonationContext";
import "./MedicalCareHealth.css";

// Assets
import heroBgImage from "../assets/img/MedicalCareHealth/aas-lab.webp";
import fundDiagnosticTestImg from "../assets/img/MedicalCareHealth/Fund-a-diagnostic-test.webp";
import supportEquipmentImg from "../assets/img/MedicalCareHealth/Support-Equipment-Maintenance.webp";
import expandServicesImg from "../assets/img/MedicalCareHealth/Expand-Our-Services.webp";
import aasVideoPoster from "../assets/img/MedicalCareHealth/aas-video-poster.png";

// Media Gallery Assets
import galleryImg1 from "../assets/img/MedicalCareHealth/1.webp";
import galleryImg3 from "../assets/img/MedicalCareHealth/3.webp";
import galleryImg4 from "../assets/img/MedicalCareHealth/4.webp";
import galleryImg5 from "../assets/img/MedicalCareHealth/5.webp";
import galleryImg6 from "../assets/img/MedicalCareHealth/6.webp";
import galleryImg8 from "../assets/img/MedicalCareHealth/8.webp";
import galleryImg11 from "../assets/img/MedicalCareHealth/11.webp";

const impactCardsData = [
  {
    image: fundDiagnosticTestImg,
    title: "Fund a diagnostic test",
    amount: "$75",
    description:
      "Early diagnosis saves lives. A test you fund gives timely treatment and care to a patient in need.",
    donateLink: "#donate-section",
  },
  {
    image: supportEquipmentImg,
    title: "Support Equipment Maintenance",
    amount: "$150",
    description:
      "Help maintain our vital healthcare equipment, ensuring no patient is turned away.",
    donateLink: "#donate-section",
  },
  {
    image: expandServicesImg,
    title: "Expand our services",
    amount: "$250",
    description:
      "The funds you provide will go to expanding our labs and healthcare services to other communities in need.",
    donateLink: "#donate-section",
  },
];

const galleryImages = [
  { src: galleryImg1, alt: "Technician taking blood sample" },
  { src: galleryImg3, alt: "AAS Lab interior waiting area" },
  { src: galleryImg4, alt: "Female technician in laboratory" },
  { src: galleryImg5, alt: "AAS Lab exterior building" },
  { src: galleryImg6, alt: "Laboratory technician drawing blood" },
  { src: galleryImg8, alt: "Diagnostic analyzer equipment" },
  { src: galleryImg11, alt: "AAS Lab staff and doctors" },
];

const MedicalCareHealth = () => {
  const { openDonation } = useDonation();

  const handleHeroDonate = () => {
    const el = document.getElementById("donate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openDonation("medicalCare");
    }
  };

  return (
    <div className="medical-care-page-wrapper">
      {/* 1. Hero */}
      <Hero
        className="medical-care-hero"
        backgroundImage={heroBgImage}
        mobileImage={heroBgImage}
        showRightImage={false}
        title="AAS LABS"
        boldTitle={true}
        titleColor="#ffffff"
        description="Aas brings free and affordable diagnostic services to underserved communities."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={handleHeroDonate}
      />

      {/* 2. Overview: Provide Medical Care Where It's Out of Reach in Pakistan (4 Icons + Donation Card) */}
      <MedicalCareOverview
        onDonate={({ frequency, amount }) => {
          openDonation("medicalCare", { frequency, amount });
        }}
      />

      {/* 3. How You Can Help (3 Impact Cards) */}
      <ImpactCards
        className="medical-care-impact-cards"
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        isCarousel={false}
        cards={impactCardsData}
        onDonate={(card) => {
          const amt = parseInt(card.amount.replace(/[^0-9]/g, ""), 10) || 75;
          openDonation("medicalCare", { amount: amt });
        }}
      />

      {/* 4. Video Section */}
      <section className="medical-care-video-section">
        <div className="medical-care-video-container">
          <VideoSection
            videoId="6BjZaCeCOnY"
            posterImage={aasVideoPoster}
            title="AAS Lab - A lifeline for the people of Pakistan"
            channel="MTJ Foundation Canada"
          />
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <FAQAccordion
        faqKey="medicalCareHealth"
        title="FREQUENTLY ASKED QUESTIONS"
        titleAlign="center"
        defaultOpenIndex={0}
      />

      {/* 6. Media Gallery */}
      <MediaGallery
        title="MEDIA GALLERY"
        images={galleryImages}
        desktopVisible={4}
      />

      {/* 7. Every Brick Counts (4 Photo-Stat Cards) */}
      <MedicalCareImpactStats
        onDonateClick={handleHeroDonate}
      />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

export default MedicalCareHealth;
