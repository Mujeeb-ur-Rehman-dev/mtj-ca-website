import React from "react";
import Hero from "../components/hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";

// Assets & Data
import nepalHeroBg from "../assets/img/NepalFlood/Nepal-Hero-Banner.webp";
import nepalMobileBg from "../assets/img/NepalFlood/Nepal-Hero-Banner.webp";
import galleryImg1 from "../assets/img/NepalFlood/image-1.jpg";
import galleryImg2 from "../assets/img/NepalFlood/image-2.jpg";
import galleryImg3 from "../assets/img/NepalFlood/image-3.jpg";
import galleryImg4 from "../assets/img/NepalFlood/image-4.jpg";
import galleryImg5 from "../assets/img/NepalFlood/image-5.jpg";
import galleryImg6 from "../assets/img/NepalFlood/image-6.jpg";

import { nepalFloodsImpactCardsData } from "../components/data/impactCardsData";
import { nepalFloodsImpactStats } from "../components/data/impactSectionData";

// Donation Context
import { useDonation } from "../context/DonationContext";

const nepalGalleryImages = [
  { src: galleryImg1, alt: "Nepal Flood Relief Supplies" },
  { src: galleryImg2, alt: "MTJF Volunteers planning relief" },
  { src: galleryImg3, alt: "Nepal Flood Relief Distribution" },
  { src: galleryImg4, alt: "Nepal Communities Support" },
  { src: galleryImg5, alt: "Emergency Relief Work" },
  { src: galleryImg6, alt: "Direct Aid in Bidur" },
];

const NepalFloods = () => {
  const { openDonation } = useDonation();

  return (
    <>
      <Hero
        className="nepal-floods-hero"
        title="NEPAL FLOODS APPEAL"
        backgroundImage={nepalHeroBg}
        mobileImage={nepalMobileBg}
        showRightImage={false}
        titleColor="#ffffff"
        boldTitle={true}
        description="MTJ Foundation serves humanity through faith and kindness, providing disaster relief, education, healthcare, and clean water to restore dignity and hope."
        descriptionColor="#ffffff"
        mobileDescriptionColor="#ffffff"
        buttonText="Donate Now"
        onButtonClick={() => openDonation('nepal')}
      />

      <InfoSection
        className="nepal-info-section"
        title="MTJF ON THE GROUND IN NEPAL"
        subtitle="FAMILIES NEED YOUR HELP NOW"
        showImage={false}
        showDeco={false}
        paragraphs={[
          "Severe floods swept through Nepal’s Bhotekoshi–Trishuli river basin on August 26, destroying homes, roads, and critical infrastructure.",
          "More than a week later, nearly 4,000 displaced people are still living in relief centres, while families face ongoing shortages and sanitation concerns.",
          "In Bidur Municipality, Nuwakot, where communities have been severely affected, families are still living in temporary shelters after losing their homes and belongings.",
          <strong key="ground-bidur">MTJ Foundation is on the ground in Bidur, helping families who have lost everything.</strong>,
          "With your help, our team will distribute:",
          [
            "Ration packs to help families put food on the table.",
            "Cooked meals for those living in temporary shelters.",
            "Hygiene kits with everyday essentials families need right now."
          ],
          "These are simple necessities, but for a family forced from home, your support can make the difficult days ahead a little easier."
        ]}
        buttonText="Donate Now"
        onButtonClick={() => openDonation('nepal')}
      />

      <ImpactCards
        className="nepal-impact-cards"
        title="HELP FAMILIES WITH WHAT THEY NEED TO SURVIVE"
        isCarousel={false}
        cards={nepalFloodsImpactCardsData}
        onDonate={() => openDonation('nepal')}
      />

      <ImpactSection1
        className="nepal-impact-numbers"
        eyebrow="How Does Your Donation Helps"
        title="THE NEED IN NUMBERS"
        stats={nepalFloodsImpactStats}
        desktopVisibleCount={3}
      />

      <MediaGallery
        title="MEDIA GALLERY"
        images={nepalGalleryImages}
        showDots={true}
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default NepalFloods;
