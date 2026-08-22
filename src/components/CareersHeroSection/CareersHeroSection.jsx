import React, { useState } from "react";
import HeroIcon from "../../assets/img/careers/imgi_3_Group-5687.svg";
import "./CareersHeroSection.css";
const CareersHeroSection = () => {
  const [openJob, setOpenJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Administrative Assistant",
      type: "Canada Summer Job",
      description: `ABOUT MTJ FOUNDATION
MTJF Canada is a faith-driven humanitarian organization dedicated to serving communities locally and globally. Through relief programs, education initiatives, and community outreach, we work to uplift those most in need from Canada to Pakistan, Gaza, and beyond.

POSITION SUMMARY
The Administrative Assistant will support the day-to-day operations of the MTJF Canada office. This role is ideal for a motivated youth who is organized, detail-oriented, and eager to contribute to a mission-driven environment.

KEY RESPONSIBILITIES
• Manage incoming correspondence including emails, phone calls
• Maintain organized digital and physical filing systems
• Assist with scheduling, calendar management, and meeting coordination
• Prepare documents, reports, and communications on behalf of the team
• Support donation tracking, tax receipt processing, and donor record-keeping
• Assist with onboarding volunteers and maintaining volunteer databases
• Support event logistics for community fundraising and awareness campaigns
• Perform general office duties and provide administrative support as needed

QUALIFICATIONS
• Currently enrolled in or recently graduated from a post-secondary program (preferred)
• Strong organizational and time-management skills
• Proficiency in Microsoft Office Suite (Word, Excel, Outlook)
• Excellent written and verbal communication skills in English
• Ability to work independently and collaboratively in a team environment
• Interest in community service, non-profit work, or humanitarian causes

Start Date: May 4, 2026
Hours/Week: 30 hours per week
Duration: 8 weeks
Compensation: $17.60 per hour
Location: Mississauga, Ontario (On-site)
Reports To: Manager & Director`,
    },
    {
      id: 2,
      title: "Accounting Assistant",
      type: "Canada Summer Job",
      description: "Job description for Accounting Assistant will go here...",
    },
    {
      id: 3,
      title: "Social Media Coordinator",
      type: "Canada Summer Job",
      description: "Job description for Social Media Coordinator will go here...",
    },
    {
      id: 4,
      title: "Community Worker",
      type: "Canada Summer Job",
      description: "Job description for Community Worker will go here...",
    },
  ];

  const toggleDescription = (id) => {
    setOpenJob((prev) => (prev === id ? null : id));
  };

  return (
    <section className="careers-hero-section">
      <div className="careers-hero-container">
        
        {/* Top Icon - Aap image add kar denge */}
        <div className="hero-icon-wrapper">
          <img 
            src={HeroIcon} 
            alt="Join Our Team" 
            className="hero-icon"
          />
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          JOIN OUR TEAM TO<br />SERVE HUMANITY
        </h1>

        {/* Description */}
        <p className="hero-description">
          Bring your skills to MTJF and help meet real needs with honesty and purpose. 
          What you do here supports families, uplifts communities, and shows that every 
          effort you make towards serving humanity pays off. <em>Make your work count.</em>
        </p>

        {/* Jobs Grid */}
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-type">{job.type}</p>

              <button 
                className="job-desc-btn"
                onClick={() => toggleDescription(job.id)}
              >
                {openJob === job.id ? "− Job Description" : "+ Job Description"}
              </button>

              {openJob === job.id && (
                <div className="job-description-content">
                  <pre>{job.description}</pre>
                </div>
              )}

              <a href="#" className="apply-btn">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersHeroSection;