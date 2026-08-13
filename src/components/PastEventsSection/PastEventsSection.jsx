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
      link: "#",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <h2 className="section-title">PAST EVENTS</h2>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="event-btn">
                Event Page
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;