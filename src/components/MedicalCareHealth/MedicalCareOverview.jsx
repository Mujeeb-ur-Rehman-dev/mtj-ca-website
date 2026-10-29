import React from 'react';
import './MedicalCareOverview.css';
import DonatinCards from '../DonatinCards/DonatinCards';
import microscopeIcon from '../../assets/img/MedicalCareHealth/microscope.png';
import healthcareIcon from '../../assets/img/MedicalCareHealth/healthcare.png';
import stethoscopeIcon from '../../assets/img/MedicalCareHealth/stethoscope.png';
import handshakeIcon from '../../assets/img/MedicalCareHealth/handshake.png';

const features = [
  {
    icon: microscopeIcon,
    title: "100+ tests",
    text: "Blood work and many other tests under one roof, so illness is caught early, not after months of pain."
  },
  {
    icon: healthcareIcon,
    title: "Scans and imaging",
    text: "Ultrasounds, X-rays, and CT scans, so mothers get prenatal care and children are diagnosed in time."
  },
  {
    icon: stethoscopeIcon,
    title: "Expert consultations",
    text: "Doctors who guide each patient toward the right treatment as soon as the results are in."
  },
  {
    icon: handshakeIcon,
    title: "Free or low-cost care",
    text: "Support for those who can’t afford it, so cost never decides who gets treated."
  }
];

export default function MedicalCareOverview({ onDonate }) {
  return (
    <section className="medical-care-overview-section" id="donate-section">
      <div className="medical-care-overview-container">
        {/* Left Column: Heading + Paragraph + 4 Feature Cards */}
        <div className="medical-care-overview-left">
          <h2 className="medical-care-overview-title">
            PROVIDE MEDICAL CARE WHERE IT’S OUT OF REACH IN PAKISTAN
          </h2>
          <p className="medical-care-overview-desc">
            In rural Pakistan, a fever or a pregnancy check-up can turn dangerous when the nearest clinic is far away and basic tests cost more than a family can manage. MTJF opened the AAS Lab and Diagnostic Centre in Mian Channu, so families get a diagnosis in time.
          </p>

          <div className="medical-care-overview-grid">
            {features.map((feat, index) => (
              <div className="medical-care-overview-card" key={index}>
                <div className="medical-care-overview-icon-wrap">
                  <img src={feat.icon} alt={feat.title} className="medical-care-overview-icon" />
                </div>
                <div className="medical-care-overview-card-body">
                  <h3 className="medical-care-overview-card-title">{feat.title}</h3>
                  <p className="medical-care-overview-card-text">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Embedded Donation Card */}
        <div className="medical-care-overview-right">
          <div className="medical-care-donation-box">
            <DonatinCards
              campaignKey="medicalCare"
              campaignTitle="Choose an amount to donate"
              currencyPrefix="Rs"
              currencyCode="PKR"
              options={[
                { amount: "15K", description: "Sponsor a Patient's Test" },
                { amount: "30K", description: "Maintain Diagnostic Equipment" },
                { amount: "50K", description: "Expand Healthcare Services" },
              ]}
              monthlyOptions={["5,000", "10K", "15K", "20K", "30K", "50K"]}
              defaultSelectedIndex={2}
              onDonate={onDonate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
