import React from "react";
import "./ReportsList.css";

const reports = [
  "Ramadan Impact 2025",
  "Ramadan Impact 2026",
  "Qurbani Impact 2026",
];

const ReportsList = () => {
  return (
    <section className="reports-list-section" aria-label="Reports list">
      <div className="reports-list-inner">
        <h2 className="reports-list-title">OUR REPORTS</h2>

        <div className="reports-list-items">
          {reports.map((report) => (
            <a key={report} href="#" className="reports-list-item">
              {report}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsList;
