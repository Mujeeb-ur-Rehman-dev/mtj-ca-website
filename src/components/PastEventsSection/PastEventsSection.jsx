import React from "react";
import "./PastEventsSection.css";

const PastEventsSection = () => {
  const events = [
    {
      id: 1,
      title: "FATHER & SON",
      date: "Aug 7th 2026",
      description:
        "The father-son weekend at Camp Samac happens once a year, but it changes everything that matters with your son, his relationship with you, and his faith.",
      link: "https://mtjfoundation.ca/father-son/",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <div className="past-events-heading-wrap">
          <h2 className="past-events-title">Past Events</h2>
        </div>

        <div className="past-events-grid">
          {events.map((event) => (
            <div key={event.id} className="past-event-col">
              <div className="past-event-card">
                <h3 className="past-event-title">{event.title}</h3>
                <h4 className="past-event-date">{event.date}</h4>
                <p className="past-event-description">{event.description}</p>
                <div className="past-event-btn-wrap">
                  <a
                    href={event.link}
                    className="past-event-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Event Page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
