import React from "react";
import "./AboutVisionMission.css";

const AboutVisionMission = () => {
  return (
    <section className="about-vision-mission" aria-label="Our Vision and Mission">
      <div className="about-vision-mission__grid">
        <div className="about-vision-mission__col">
          <h2 className="about-vision-mission__title">OUR VISION</h2>
          <h3 className="about-vision-mission__subtitle">The Future We Aim to Build</h3>
          <p className="about-vision-mission__tagline">
            Empowering Communities, Transforming Lives.
          </p>
          <p className="about-vision-mission__text">
            We envision a world where every person—regardless of their
            circumstances—has access to basic rights, opportunities, and the
            tools to build a better future. A world where compassion guides
            action, communities thrive together, and hope becomes a shared
            reality.
          </p>
        </div>

        <div className="about-vision-mission__col">
          <h2 className="about-vision-mission__title">OUR MISSION</h2>
          <h3 className="about-vision-mission__subtitle">What We Strive For</h3>
          <p className="about-vision-mission__text">
            To serve humanity by providing education, healthcare, shelter,
            clean water, and livelihood opportunities—ensuring no one is left
            behind.
          </p>
          <p className="about-vision-mission__text">
            We work to break cycles of poverty, empower families, and uplift
            underserved communities by building solutions that last. From the
            classroom to the clinic, from livelihood training to emergency
            relief, our mission is rooted in service, dignity, and sustainable
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
