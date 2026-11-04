import React from "react";
import backgroundImage from "../assets/img/Reports/backgroundImage.png";
import mobileImage from "../assets/img/Reports/mobileImage.png";
import crescentIcon from "../assets/img/Reports/crescent.png";
import mosqueIcon from "../assets/img/Reports/mosque.png";
import camelIcon from "../assets/img/Reports/camel.png";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import "./Reports.css";

const REPORTS_DATA = [
  {
    id: 1,
    title: "Ramadan Impact 2025",
    icon: crescentIcon,
    iconAlt: "Crescent icon",
    description:
      "MTJF is dedicated to serving humanity without discrimination. We aim to provide essential services such as: Education, Healthcare, Shelter.",
    pdfUrl: "https://mtjfoundation.ca/wp-content/uploads/2026/01/Ramadan_Report_2025.pdf",
  },
  {
    id: 2,
    title: "Ramadan Impact 2026",
    icon: mosqueIcon,
    iconAlt: "Mosque icon",
    description:
      "MTJF is dedicated to serving humanity without discrimination. We aim to provide essential services such as: Education, Healthcare, Shelter.",
    pdfUrl: "https://mtjfoundation.ca/wp-content/uploads/2026/04/Ramadan-Impact-Report-841-x-594-px.pdf",
  },
  {
    id: 3,
    title: "Qurbani Impact 2026",
    icon: camelIcon,
    iconAlt: "Camel icon",
    description:
      "MTJF, in colaboration with the Molana Tariq Jamil Foundation, successfuly implemented the Qurbani 2026 Program across deserving communities in Pakistan.",
    pdfUrl: "https://mtjfoundation.ca/wp-content/uploads/2026/06/MTJF-Qurbani-2026-Impact-Report-Pakistan.pdf",
  },
];

const Reports = () => {
  return (
    <div className="reports-page">
      {/* ─── DESKTOP HERO BANNER (>767px) ─── */}
      <section
        className="reports-hero-desktop"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="reports-hero-box-area">
          <div className="reports-hero-card">
            <h2 className="reports-hero-title">SEE YOUR IMPACT</h2>
            <p className="reports-hero-text">
              Every report tells a story of lives changed through your generosity.
              Explore our latest reports, from audited financials to on-ground
              program updates; every page reflects our commitment to honesty,
              accountability, and lasting change.
            </p>
            <a
              href="https://mtjfoundation.ca/wp-content/uploads/2026/06/MTJF-Qurbani-2026-Impact-Report-Pakistan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="reports-hero-btn"
            >
              Read Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── MOBILE HERO BANNER (<=767px) ─── */}
      <section className="reports-hero-mobile">
        <div className="reports-hero-mobile-img-wrap">
          <img
            src={mobileImage}
            alt="See Your Impact"
            className="reports-hero-mobile-img"
          />
        </div>
        <div className="reports-hero-mobile-card">
          <h2 className="reports-hero-title">SEE YOUR IMPACT</h2>
          <p className="reports-hero-text">
            Every report tells a story of lives changed through your generosity.
            Explore our latest reports, from audited financials to on-ground
            program updates; every page reflects our commitment to honesty,
            accountability, and lasting change.
          </p>
          <a
            href="https://mtjfoundation.ca/wp-content/uploads/2026/06/MTJF-Qurbani-2026-Impact-Report-Pakistan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="reports-hero-btn"
          >
            Read Now
          </a>
        </div>
      </section>

      {/* ─── OUR REPORTS SECTION ─── */}
      <section className="reports-list-section" aria-label="Reports list">
        <div className="reports-list-inner">
          <h2 className="reports-section-title">Our Reports</h2>

          <div className="reports-grid">
            {REPORTS_DATA.map((report) => (
              <article className="reports-card" key={report.id}>
                <div className="reports-card-content">
                  <img
                    src={report.icon}
                    alt={report.iconAlt}
                    className="reports-card-icon"
                  />
                  <h4 className="reports-card-title">{report.title}</h4>
                  <p className="reports-card-desc">{report.description}</p>
                </div>
                <a
                  href={report.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reports-card-btn"
                >
                  View Report
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER & FOOTER ─── */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Reports;
