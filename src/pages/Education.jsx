import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import backgroundImage from "../assets/img/PalestineRelief/background.png";
import mobileImg from "../assets/img/Education/mobileImg.png";
import heroImage from "../assets/img/Education/heroImage.png";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import ImpactCards from "../components/impactCards/ImpactCards";
import FAQAccordion from "../components/FAQAccordion/FAQAccordion";
import { educationFaqItems } from "../components/data/faqData";
import { educationImpactStats } from "../components/data/impactSectionData";

const Education = () => {
  return (
    <>
      <Hero
        className="education-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}
        heroImage={heroImage}
        title="BREAKING THE CYCLE OF POVERTY THROUGH EDUCATION"
        description=""
        buttonText=""
        buttonLink=""
        cardContent={
          <DonatinCards
            className="education-donation-card"
            campaignTitle="Provide Education"
            showMonthlyTab={false}
            defaultSelectedIndex={2}
            options={[
              { amount: "12K", description: "Provide Educational Materials" },
              { amount: "25K", description: "Fund student scholarships" },
              { amount: "35K", description: "Build and renovate schools" },
            ]}
            onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
          />
        }
      />
      <InfoSection
        className="education-info-section"
        title="Help Rewrite the Story of Pakistan’s Children"
        paragraphs={[
          "In Pakistan, more than 25 million school-age children are out of school, that’s nearly half of the country’s children.",
          "Poverty has pushed many into child labour. They work in brick kilns or in fields to support their families. For girls, the risk is even greater: early marriage often cuts their childhood short, trapping them in a lifetime of poverty.",
          "Without education, children remain vulnerable to exploitation, illiteracy, and hopelessness.",
          "Through our Education program:",
          [
            "We build and renovate schools in underserved communities.",
            "Our scholarships cover tuition, supplies, and boarding for children from struggling families.",
            "We provide learning kits with books and uniforms.",
            "For those who want to pursue religious studies, we support Alim education in Madaris.",
          ],
          "And with more support, we’re ready to expand scholarships to universities, launch digital learning, and train teachers, so every child has a real chance to be free from poverty.",
          "Donate today and help give Pakistan’s children the future they deserve.",
        ]}
        hideButton
        image=""
        noImageLayout="centered"
      />
      <ImpactCards
        title="how you can help"
        backgroundColor="#0B212A"
        cards={[
          { title: "Learning Materials", amount: "$60", description: "Provides learning materials to children from low-income families. The kit contains books, uniforms, and school supplies.", donateLink: "#donate" },
          { title: "Scholarship Program", amount: "$120", description: "Fund the education of a student from a struggling family so they are not forced to drop out before finishing school.", donateLink: "#donate" },
          { title: "School Construction", amount: "$180", description: "Help build or renovate a school in a remote community so every child has a school to learn and grow.", donateLink: "#donate" },
        ]} />
      <ImpactSection1
        stats={educationImpactStats}
        eyebrow="Vocational Training"
        title="SKILLS THAT TRANSFORM LIVES"
      />
        <FAQAccordion items={educationFaqItems} />    
      <Newsletter />
      <Footer />
    </>
  );
};

export default Education;
