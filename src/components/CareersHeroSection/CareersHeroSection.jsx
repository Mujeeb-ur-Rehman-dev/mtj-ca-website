import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import HeroIcon from "../../assets/img/careers/imgi_3_Group-5687.svg";
import "./CareersHeroSection.css";

// Historical / all job postings data
export const allJobsData = [
  {
    id: "donor-relations",
    title: "Donor Relations and Programs Coordinator",
    type: "Full-Time, On-Site",
    status: "active",
    ctaText: "Contact Us",
    ctaLink: "/contact-us",
    positionDetails: {
      jobTitle: "Donor Relations and Programs Coordinator",
      location: "Mississauga, Ontario | Full-Time, On-Site",
      schedule: "Monday to Friday, 37.5 hours per week",
      salary: "$35,000 to $42,000 per year",
      reportsTo: "Director of Programs",
    },
    overview: [
      "MTJF is seeking a Donor Relations and Programs Coordinator to support the organization's fundraising efforts and the delivery of its humanitarian and social service programs. This role bridges donor engagement with program coordination, contributing to the development of relationships. This position is suited to a candidate who is organized, personable, and demonstrates a strong commitment to humanitarian work.",
      "The candidate will support MTJF's donor engagement, retention, database management, CRM management, program reporting, proposals, partnerships, and documentation. The role is approximately seventy percent (70%) donor relations and thirty percent (30%) programs.",
    ],
    sections: [
      {
        title: "Duties and Responsibilities",
        subsections: [
          {
            subtitle: "1. Donor Engagement and Reporting",
            items: [
              "Identify, cultivate, and maintain relationships with major donors.",
              "Develop and assist with the preparation of tailored proposals, impact reports, MOUs, presentations, budgets, and other program documentation to strengthen donor trust and support organizational initiatives.",
              "Engage and steward donors through regular phone calls, emails, follow-ups, event and program communications, and impact updates.",
              "Support donor retention by developing and implementing creative, new approaches to strengthen donor engagement, program communication, and organizational impact.",
              "Respond to donor inquiries in a timely and professional manner.",
              "Prepare and send donor acknowledgment letters, tax receipts, and thank-you communications.",
              "Research and identify new funding opportunities, including grants and corporate partnerships.",
              "Build strong partnerships with mosques, Islamic centers, and community-based organizations.",
              "Coordinate workshops, Ramadan campaigns, and other community fundraising initiatives.",
              "Represent MTJF at community events to strengthen visibility and support.",
              "Maintain, organize, and regularly update the donor database and CRM system, ensuring the accuracy of donor information, donation history, communication records, and follow-up activities.",
              "Track reporting deadlines, donor commitments, follow-ups, and project information.",
              "Generate donor and program reports as required, including project completion reports and interim or in-progress updates.",
              "Coordinate with partner organizations and volunteers to collect information, photographs, updates, and required documentation.",
              "Liaise with internal teams to ensure timely and accurate communication with donors and partners.",
            ],
          },
          {
            subtitle: "2. Program Coordination and Administrative Support",
            items: [
              "Support the planning and delivery of various programs locally and nationally.",
              "Track program outcomes and beneficiary data to support accurate reporting.",
              "Prepare program updates, impact reports, and summaries for donors, funders, and the Board.",
              "Participate in field deployments and community drives, including local and international relief campaigns, which may involve engaging local major donors to take part in a deployment alongside their fundraising efforts.",
              "Assist with general administrative tasks on an as needed basis.",
            ],
          },
        ],
      },
      {
        title: "Core Competencies & Qualifications",
        subsections: [
          {
            subtitle: "",
            items: [
              "Discretion, sound judgment, and professionalism when handling sensitive donor and financial information and representing MTJF externally with donors and partners.",
              "Cultural sensitivity and familiarity with the community MTJF serves, including comfort engaging with mosques, Islamic centers, and diverse community stakeholders.",
              "Comfort working in a fast-paced, deadline-driven nonprofit environment with shifting priorities.",
              "A collaborative mindset, with the ability to work well across teams and departments.",
              "Post-secondary education in nonprofit management, business, communications, or a related field, or equivalent experience.",
              "Experience in donor relations, fundraising, or program coordination, ideally within a nonprofit or humanitarian organization.",
              "Previous experience in database management and maintaining accurate records; experience with CRM or donor management systems is strongly preferred.",
              "Strong interpersonal and communication skills, both written and verbal, including comfort making professional phone calls to donors.",
              "Excellent organizational skills, with strong follow-up, attention to detail, and the ability to manage multiple priorities and deadlines.",
              "Proficiency in Microsoft Word, Excel, and PowerPoint.",
              "Ability to work independently as well as part of a team.",
              "A genuine passion for humanitarian work and community service.",
              "Experience with Bloomerang or another nonprofit CRM.",
              "Experience working with volunteers and community or partner organizations.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "admin-assistant",
    title: "Administrative Assistant",
    type: "Canada Summer Job",
    status: "closed",
    ctaText: "Apply Now",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3Z_d7D3QouFtxGNAsIZAMLiMitiYINAtg_rMpdmTDZS0OJg/viewform",
    positionDetails: {
      startDate: "May 4, 2026",
      schedule: "30 hours per week",
      duration: "8 weeks",
      salary: "$17.60 per hour",
      location: "Mississauga, Ontario (On-site)",
      reportsTo: "Manager & Director",
    },
  },
  {
    id: "accounting-assistant",
    title: "Accounting Assistant",
    type: "Canada Summer Job",
    status: "closed",
    ctaText: "Apply Now",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3Z_d7D3QouFtxGNAsIZAMLiMitiYINAtg_rMpdmTDZS0OJg/viewform",
    positionDetails: {
      startDate: "May 4, 2026",
      schedule: "30 hours per week",
      duration: "8 weeks",
      salary: "$17.60 per hour",
      location: "Mississauga, Ontario (On-site)",
      reportsTo: "Manager & Director",
    },
  },
  {
    id: "social-media-coordinator",
    title: "Social Media Coordinator",
    type: "Canada Summer Job",
    status: "closed",
    ctaText: "Apply Now",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3Z_d7D3QouFtxGNAsIZAMLiMitiYINAtg_rMpdmTDZS0OJg/viewform",
    positionDetails: {
      startDate: "June 1, 2026",
      schedule: "30 hours per week",
      duration: "8 weeks",
      salary: "$17.60 per hour",
      location: "Mississauga, Ontario (On-site)",
      reportsTo: "Manager & Director",
    },
  },
  {
    id: "community-worker",
    title: "Community Worker",
    type: "Canada Summer Job",
    status: "closed",
    ctaText: "Apply Now",
    ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3Z_d7D3QouFtxGNAsIZAMLiMitiYINAtg_rMpdmTDZS0OJg/viewform",
    positionDetails: {
      startDate: "May 4, 2026",
      schedule: "30 hours per week",
      duration: "8 weeks",
      salary: "$17.60 per hour",
      location: "Mississauga, Ontario (On-site)",
      reportsTo: "Manager & Director",
    },
  },
];

const CareersHeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeJob = allJobsData.find((j) => j.id === "donor-relations");

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="careers-hero-section">
      <div className="careers-hero-container">
        {/* Top Icon */}
        <div className="careers-hero-icon-wrap">
          <img
            src={HeroIcon}
            alt="Join Our Team"
            className="careers-hero-icon"
            width="139"
            height="147"
          />
        </div>

        {/* Heading */}
        <h1 className="careers-hero-title">
          JOIN OUR TEAM TO <br /> SERVE HUMANITY
        </h1>

        {/* Description */}
        <p className="careers-hero-description">
          Bring your skills to MTJF and help meet real needs with honesty and purpose.
          What you do here supports families, uplifts communities, and shows that
          every effort you make towards serving humanity pays off.{" "}
          <b>
            <i>Make your work count.</i>
          </b>
        </p>

        {/* Active Job Card */}
        {activeJob && (
          <div className="careers-job-card">
            <h2 className="careers-job-title">{activeJob.title}</h2>

            <div className="careers-accordion-wrapper">
              <button
                type="button"
                className={`careers-accordion-header ${isOpen ? "open" : ""}`}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
              >
                <span className="careers-accordion-title-text">
                  Job Description
                </span>
                <span className="careers-accordion-icon">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {isOpen && (
                <div className="careers-accordion-body">
                  <div className="careers-desc-block">
                    <h4 className="careers-desc-heading">Position Details</h4>
                    <p className="careers-desc-text">
                      <strong>Job Title:</strong> {activeJob.positionDetails.jobTitle}
                      <br />
                      <strong>Location:</strong> {activeJob.positionDetails.location}
                      <br />
                      <strong>Schedule:</strong> {activeJob.positionDetails.schedule}
                      <br />
                      <strong>Salary:</strong> {activeJob.positionDetails.salary}
                      <br />
                      <strong>Reports To:</strong> {activeJob.positionDetails.reportsTo}
                    </p>
                  </div>

                  <div className="careers-desc-block">
                    <h4 className="careers-desc-heading">Position Overview</h4>
                    {activeJob.overview.map((para, idx) => (
                      <p key={idx} className="careers-desc-text">
                        {para}
                      </p>
                    ))}
                  </div>

                  {activeJob.sections.map((section, sIdx) => (
                    <div key={sIdx} className="careers-desc-block">
                      <h4 className="careers-desc-heading">{section.title}</h4>
                      {section.subsections.map((sub, subIdx) => (
                        <div key={subIdx} className="careers-desc-subgroup">
                          {sub.subtitle && (
                            <h5 className="careers-desc-subheading">
                              {sub.subtitle}
                            </h5>
                          )}
                          <ul className="careers-desc-list">
                            {sub.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="careers-desc-list-item">
                                <span className="bullet-symbol">❖</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="careers-action-wrap">
              <Link to={activeJob.ctaLink} className="careers-action-btn">
                {activeJob.ctaText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersHeroSection;
