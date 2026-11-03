import React from 'react';
import './EducationOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import schoolIcon from '../../assets/img/Education/school.png';
import gradIcon from '../../assets/img/Education/graduation-hat.png';
import bookIcon from '../../assets/img/Education/open-book.png';
import mosqueIcon from '../../assets/img/Education/mosque.png';

const features = [
  {
    icon: schoolIcon,
    title: "Schools built",
    text: "We build and renovate schools in underserved communities, so learning happens close to home."
  },
  {
    icon: gradIcon,
    title: "Scholarships",
    text: "Scholarships cover tuition, supplies, and boarding for children from struggling families."
  },
  {
    icon: bookIcon,
    title: "Learning kits",
    text: "Books and uniforms help children walk into class ready to learn."
  },
  {
    icon: mosqueIcon,
    title: "Alim education",
    text: "We support Alim education in Madaris for those who wish to pursue religious studies."
  }
];

export default function EducationOverview({ onDonate }) {
  return (
    <section className="education-overview-section" id="donate-section">
      <div className="education-overview-container">
        {/* Left Column: Heading + Paragraph + 4 Feature Cards */}
        <div className="education-overview-left">
          <h2 className="education-overview-title">
            HELP REWRITE THE STORY OF PAKISTAN'S CHILDREN
          </h2>
          <p className="education-overview-desc">
            In Pakistan, more than 25 million school-age children are out of school, nearly half of the country’s children. Poverty pushes many into child labour in brick kilns and fields, and girls face early marriage on top of that. Our Education program exists so every child has a real chance to be free from poverty.
          </p>

          <div className="education-overview-grid">
            {features.map((feat, index) => (
              <div className="education-overview-card" key={index}>
                <div className="education-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="education-overview-icon" />
                </div>
                <div className="education-overview-card-body">
                  <h3 className="education-overview-card-title">{feat.title}</h3>
                  <p className="education-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="education-overview-right">
          <div className="education-donation-box">
            <DonatinCards
              campaignKey="education"
              campaignTitle="Provide Education Support"
              currencyPrefix="$"
              currencyCode="CAD"
              oneTimeTabLabel="Give Once"
              options={[
                { amount: "60", description: "Provides learning materials to children from low-income families. The kit contains books, uniforms, and school supplies." },
                { amount: "120", description: "Fund the education of a student from a struggling family so they are not forced to drop out before finishing school." },
                { amount: "180", description: "Help build or renovate a school in a remote community so every child has a school to learn and grow." },
              ]}
              monthlyOptions={["10", "25", "50", "100", "250", "500"]}
              defaultSelectedIndex={2}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
