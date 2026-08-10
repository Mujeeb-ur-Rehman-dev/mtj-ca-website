import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/ApnaGhar/background.png";
import ImpactCards from "../components/impactCards/ImpactCards";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import InfoSection from "../components/InfoSection/InfoSection";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import MediaGallery from "../components/Mediagallery/Mediagallery";
import { impactSectionData, apnaGharImpactStats } from "../components/data/impactSectionData";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import galleryImg2 from "../assets/img/ApnaGhar/galleryImg2.jpg";
import galleryImg3 from "../assets/img/ApnaGhar/galleryImg3.jpg";
import galleryImg4 from "../assets/img/ApnaGhar/galleryImg4.jpg";
import galleryImg5 from "../assets/img/ApnaGhar/galleryImg5.jpg";
import galleryImg6 from "../assets/img/ApnaGhar/galleryImg6.jpg";
import OurStories from "../components/Ourstories/Ourstories";
import backgroundStories from "../assets/img/ApnaGhar/background-stories.png";
import stories1 from "../assets/img/ApnaGhar/stories1.png";
import stories2 from "../assets/img/ApnaGhar/stories2.png";



const ApnaGhar = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        mobileImage={backgroundImage}
        heroImage={null}
        title="Apna Ghar Keep Families Together"
        boldTitle={true}
        titleColor="#FFFFFF"
        description="Apna Ghar provides safe homes for widows and orphans in South Punjab, so no mother has to choose between keeping her children or keeping them safe. Help build homes that give families stability, dignity, and hope for the future."
        descriptionColor="#FFFFFF"
        buttonText=""
        buttonLink=""
        showDescriptionWithCard={true}
        cardContent={
          <DonatinCards
            campaignTitle="Palestine Emergency Relief"
            defaultSelectedIndex={0}   // "Rs 70K" pre-selected hai screenshot mein
            options={[
              { amount: "20K", description: "Feed's a Family for a Day" },
              { amount: "35K", description: "Feed's a Family for a Week" },
              { amount: "90K", description: "Feed's a Family for a Month" },
            ]}
            onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
          />
        }
      />
      <InfoSection
        title="A HOME THAT KEEPS FAMILIES TOGETHER"
        paragraphs={[
          "When a widow loses her home, she faces a choice no mother should make:",
          "Keep her children, or keep them safe at an orphanage.",
          "Apna Ghar exists, so she never has to make this choice.",
          "We’re building 102 homes in Tulamba, South Punjab, with clean water, solar energy, and skill training that helps a mother earn her own income.",
          "That’s everything she needs to raise her children herself, under a roof that is truly theirs.",
          "20 homes are standing. 50 more are counting on you.",
          `“The one who looks after a widow or a poor person is like a Mujahid in the cause of Allah.”
— Sahih Bukhari 6006`,
          'Help build their home today.'
        ]}
        image=''
      />
      <VideoSection />
      <ImpactCards
        title="HOW YOU CAN HELP"
        backgroundColor="#0B212A"
        cards={[
          { title: "Orphan Support", amount: "$120", description: "Support our efforts to deliver essentials like food, clothing, and basic medical aid to orphans and their families in dire need.", donateLink: "#donate" },
          { title: "Family Pack", amount: "$250", description: "Help provide food packs, hygiene kits, gas stoves, and floor mats for families.", donateLink: "#donate" },
          { title: "Food Distribution", amount: "$35", description: "Providing nutritious meals to families struggling with food insecurity. Your contribution helps ensure no one goes hungry.", donateLink: "#donate" },
        ]}
      />
      <ImpactSection1
        stats={apnaGharImpactStats}
        eyebrow="Apna Ghar"
        title="BUILDING HOMES, REBUILDING LIVES"
      />
      <FAQAccordion />
      <MediaGallery
        title="MEDIA GALLERY"
        images={[
          { src: galleryImg2, alt: "Worker painting ceiling" },
          { src: galleryImg3, alt: "Empty room with window" },
          { src: galleryImg4, alt: "..." },
          { src: galleryImg5, alt: "..." },
          { src: galleryImg6, alt: "..." },
        ]}
      />

      <OurStories
        title="OUR STORIES"
        borderImage={backgroundStories}
        tabs={["Blogs", "News", "Stories", "Updates"]}
        posts={[
          {
            image: stories1,
            title: "First 10 Days of Dhul Hijjah and Their Importance",
            author: "umar arif",
            date: "June 5, 2025",
            link: "/blog/first-10-days-dhul-hijjah",
          },
          {
            image: stories2,
            title: "Significance of Eid Al Adha – A Complete Guide",
            author: "umar arif",
            date: "June 5, 2025",
            link: "/blog/significance-eid-al-adha",
          },
        ]}
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ApnaGhar;
