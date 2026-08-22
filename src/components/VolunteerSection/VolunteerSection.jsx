import React from "react";
import "./VolunteerSection.css";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const VolunteerSection = () => {
  return (
    <section className="volunteer-section">
      <div className="volunteer-container">
        
        {/* LEFT SIDE - Form */}
        <div className="volunteer-left">
          <h2 className="volunteer-title">Volunteer Form</h2>

          <div className="form-scroll-wrapper">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfJ9wBP8384qaTDGMAgZdiDNMQqp6h5_fvQDfa-CRc9PcDR6Q/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="MTJ Volunteer Sign Up"
              className="google-form-iframe"
            >
              Loading…
            </iframe>
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="volunteer-right">
          <h2 className="right-heading">
            Serve with compassion.<br />
            Give with sincerity.
          </h2>

          <p>
            At <strong>Molana Tariq Jamil Foundation</strong>, we believe true
            change begins when hearts come together for the sake of Allah. Our
            volunteers are the backbone of our mission — helping deliver food,
            water, education, and hope to families in need.
          </p>

          <p>
            By joining our volunteer team, you’ll become part of a movement
            dedicated to:
          </p>

          <ul>
            <li>Spreading compassion and care across communities</li>
            <li>Supporting life-changing humanitarian projects</li>
            <li>Uplifting those most in need with dignity and respect</li>
          </ul>

          <p>
            Please complete the form below carefully. Once submitted, our team
            will review your application and reach out with next steps,
            insha’Allah.
          </p>

          <div className="contact-info">
            <p>
              <span className="contact-icon"><FaEnvelope /></span>
              info@mtjfoundation.ca
            </p>
            <p>
              <span className="contact-icon"><FaPhone /></span>
              905-783-1MTJ
            </p>
            <p className="contact-row contact-row--align-top">
              <span className="contact-icon contact-icon--top"><FaLocationDot /></span>
              <span className="contact-address">
                Skyward business Center 312 - 2255 Dundas St W,
                Mississauga, ON L5K 1R6
              </span>
            </p>
          </div>

          <div className="follow-us">
            <h3 className="follow-us__title">Follow Us</h3>
            <div className="follow-us__icons">
              <a
                href="https://www.facebook.com/mtjfcanada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/mtjf_canada/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/mtjfcanada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@mtjfoundationcanada5022"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;