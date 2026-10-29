import React from "react";
import Button from "../../common/components/buttons/Button";
import "./EducationOverview.css";

const EducationOverview = ({ onDonate }) => {
  return (
    <section className="education-overview-section">
      <div className="education-overview-container">
        <h2 className="education-overview-title">
          Help Rewrite the Story of Pakistan’s Children
        </h2>

        <div className="education-overview-content">
          <p>
            In Pakistan, more than 25 million school-age children are out of school,
            that’s nearly half of the country’s children.
          </p>
          <p>
            Poverty has pushed many into child labour. They work in brick kilns or in
            fields to support their families. For girls, the risk is even greater:
            early marriage often cuts their childhood short, trapping them in a lifetime
            of poverty.
          </p>
          <p>
            Without education, children remain vulnerable to exploitation,
            illiteracy, and hopelessness.
          </p>
          <p className="education-overview-lead">
            Through our Education program:
          </p>
          <ul className="education-overview-list">
            <li>We build and renovate schools in underserved communities.</li>
            <li>
              Our scholarships cover tuition, supplies, and boarding for children from
              struggling families.
            </li>
            <li>We provide learning kits with books and uniforms.</li>
            <li>
              For those who want to pursue religious studies, we support Alim education
              in Madaris.
            </li>
          </ul>
          <p>
            And with more support, we’re ready to expand scholarships to universities,
            launch digital learning, and train teachers, so every child has a real
            chance to be free from poverty.
          </p>
          <p>
            Donate today and help give Pakistan’s children the future they deserve.
          </p>
        </div>

        <div className="education-overview-btn-wrap">
          <Button
            text="Donate Now"
            onClick={onDonate}
            size="md"
            wrapperClass="nav-btn-group education-overview-btn-group"
            buttonClass="btn btn-donate-animated education-overview-btn"
            variant="default"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationOverview;
