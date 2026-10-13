import React, { useState } from "react";
import "./OurTeamSection.css";

// Assets
import nabilImg from "../../assets/img/ourteam/M-Nabil.jpg";
import mojassamFaizImg from "../../assets/img/ourteam/Mojassam-Faiz.jpg";
import humzaKhanImg from "../../assets/img/ourteam/Humza-Khan.jpg";
import sarahJamilImg from "../../assets/img/ourteam/Saraj-Jamil.png";

const teamMembers = [
  {
    id: "nabil",
    name: "Shaykh Muhammad Nabil",
    role: "CEO MTJF Canada",
    category: "leadership-team",
    image: nabilImg,
    bio: [
      "Shaykh Muhammad Nabil is a Canadian imam and community leader based in Toronto, serving as the Imam of Masjid Darul Iman. A dedicated educator and youth mentor, he inspires faith and unity across North America. As a founding member of MTJF Canada, he has led numerous global humanitarian and development initiatives in Gaza, Pakistan, and in Africa . Passionate about travel and spirituality, Shaykh Nabil organizes educational tours and retreats that connect people with their faith and heritage, fostering compassion, knowledge, and community wherever he serves."
    ]
  },
  {
    id: "mojassam",
    name: "Mojassam Faiz",
    role: "Director Marketing, Development & Community Engagement",
    category: "leadership-team",
    image: mojassamFaizImg,
    bio: [
      "As Director of Marketing, Development & Community Engagement at MTJF Canada, Mojassam Faiz brings over 15 years of community service experience, along with expertise in strategic management and project execution. With an M.Sc., MBA, and PMP® certification, he is committed to driving impactful initiatives and advancing the foundation’s mission."
    ]
  },
  {
    id: "humza",
    name: "Humza Khan",
    role: "Executive Assistant and Director of Programs",
    category: "leadership-team",
    image: humzaKhanImg,
    bio: [
      "Humza Khan serves as the Executive Assistant and Director of Programs at MTJF Canada, driving the organization’s mission of global service and community impact.",
      "Based in Toronto, he leads with dedication, ensuring the success of humanitarian and educational initiatives worldwide.",
      "His work spans from local community development to international relief efforts in Gaza, Pakistan, and Africa. Through his commitment and vision, he continues to inspire positive change."
    ]
  },
  {
    id: "sarah",
    name: "Sarah Jamil",
    role: "Digital Marketing Coordinator",
    category: "local-team",
    image: sarahJamilImg,
    bio: [
      "Sarah Jamil works on content for MTJF’s social media, events, and campaigns. She brings over a decade of creative and design experience to coordinate digital marketing efforts, producing content and campaigns that effectively communicate the foundation’s mission and impact.",
      "Graduated as an Architect in 2014, Sarah also holds certifications in Interior Design and UX/UI Design, and is currently pursuing a Digital Marketing certification to further enhance her expertise in creative communication and digital strategy."
    ]
  }
];

const OurTeamSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const filteredMembers = teamMembers.filter((member) => {
    if (activeFilter === "all") return true;
    return member.category === activeFilter;
  });

  const handleCardClick = (id) => {
    setSelectedMemberId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="our-team-section">
      <div className="our-team-container">
        {/* Header */}
        <div className="our-team-header">
          <h1 className="our-team-title">OUR TEAM</h1>
          <p className="our-team-subtitle">
            Meet the team behind MTJF’s humanitarian work, serving communities locally and globally, wherever it’s needed.
          </p>
        </div>

        {/* Filter Tabs - Desktop */}
        <div className="our-team-filters-desktop" role="tablist" aria-label="Team member categories">
          <button
            type="button"
            className={`team-filter-pill ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => {
              setActiveFilter("all");
              setSelectedMemberId(null);
            }}
          >
            Show All
          </button>
          <button
            type="button"
            className={`team-filter-pill ${activeFilter === "leadership-team" ? "active" : ""}`}
            onClick={() => {
              setActiveFilter("leadership-team");
              setSelectedMemberId(null);
            }}
          >
            Leadership Team
          </button>
          <button
            type="button"
            className={`team-filter-pill ${activeFilter === "local-team" ? "active" : ""}`}
            onClick={() => {
              setActiveFilter("local-team");
              setSelectedMemberId(null);
            }}
          >
            Local Team
          </button>
        </div>

        {/* Filter Dropdown - Mobile */}
        <div className="our-team-filters-mobile">
          <div className="team-select-wrapper">
            <select
              className="team-filter-select"
              value={activeFilter}
              onChange={(e) => {
                setActiveFilter(e.target.value);
                setSelectedMemberId(null);
              }}
              aria-label="Filter team members"
            >
              <option value="all">All</option>
              <option value="leadership-team">Leadership Team</option>
              <option value="local-team">Local Team</option>
            </select>
          </div>
        </div>

        {/* Team Grid */}
        <div className="our-team-grid">
          {filteredMembers.map((member) => {
            const isSelected = selectedMemberId === member.id;

            return (
              <div
                key={member.id}
                className={`team-card-wrapper ${isSelected ? "is-selected" : ""}`}
                onClick={() => handleCardClick(member.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(member.id);
                  }
                }}
                aria-label={`View details for ${member.name}`}
              >
                {/* Photo Front Block */}
                <div
                  className="team-card team-card-front"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="team-card-overlay">
                    <h2 className="team-member-name">{member.name}</h2>
                    <p className="team-member-role">{member.role}</p>
                  </div>
                </div>

                {/* Bio Back / Hover Block */}
                <div className="team-card team-card-back">
                  <div className="team-bio-content">
                    {member.bio.map((paragraph, idx) => (
                      <p key={idx} className="team-bio-text">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="team-card-footer">
                    <h2 className="team-member-name">{member.name}</h2>
                    <p className="team-member-role">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
