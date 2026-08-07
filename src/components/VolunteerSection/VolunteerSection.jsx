import React, { useState } from 'react';
import './VolunteerSection.css';

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    expertise: [],
    otherExpertise: '',
    availability: [],
    hearAbout: ''
  });

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const currentList = prev[category];
      const updatedList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];
      return { ...prev, [category]: updatedList };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="volunteer-section">
      {/* Decorative Left Floral SVG Background */}
      <div className="floral-bg floral-left">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-50 200C20 180 80 120 100 40M-50 200C10 240 70 300 110 380"
            stroke="#D09B74"
            strokeWidth="3"
          />
          <path
            d="M100 40C90 20 110 0 120 20C130 40 110 60 100 40Z"
            fill="#D09B74"
          />
          <path
            d="M110 380C100 360 120 340 130 360C140 380 120 400 110 380Z"
            fill="#D09B74"
          />
          <circle cx="20" cy="200" r="15" fill="#D09B74" />
        </svg>
      </div>

      <div className="volunteer-container">
        {/* Left Side: Form Container */}
        <div className="volunteer-form-wrapper">
          <h2 className="form-title">Volunteer Form</h2>

          <div className="form-scroll-container">
            <form onSubmit={handleSubmit} className="volunteer-form">
              {/* First Name */}
              <div className="form-card">
                <label className="form-label">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your answer"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-card">
                <label className="form-label">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your answer"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-card">
                <label className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your answer"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Age Group */}
              <div className="form-card">
                <label className="form-label">
                  Age <span className="required">*</span>
                </label>
                <div className="radio-group">
                  {['18 and Under', '19 - 30', '31 - 50', '51+'].map((option) => (
                    <label key={option} className="radio-label">
                      <input
                        type="radio"
                        name="age"
                        value={option}
                        checked={formData.age === option}
                        onChange={handleInputChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Area of Expertise */}
              <div className="form-card">
                <label className="form-label">
                  Area of Expertise: <span className="required">*</span>
                </label>
                <p className="form-sublabel">(Please select all that apply)</p>
                <div className="checkbox-group">
                  {[
                    'Marketing/Photography/Videography',
                    'Customer/Donor Service',
                    'Hospitality (Booth Management, Crowd Control)',
                    'Administration',
                    'Technical Support'
                  ].map((item) => (
                    <label key={item} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.expertise.includes(item)}
                        onChange={() => handleCheckboxChange('expertise', item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                  <div className="other-option">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.expertise.includes('Other')}
                        onChange={() => handleCheckboxChange('expertise', 'Other')}
                      />
                      <span>Other:</span>
                    </label>
                    <input
                      type="text"
                      name="otherExpertise"
                      value={formData.otherExpertise}
                      onChange={handleInputChange}
                      className="inline-input"
                    />
                  </div>
                </div>
              </div>

              {/* General Availability */}
              <div className="form-card">
                <label className="form-label">General Availability:</label>
                <p className="form-sublabel">(Select all that apply)</p>
                <div className="checkbox-group">
                  {[
                    'Weekend Mornings',
                    'Weekend Evenings',
                    'Weekday Mornings',
                    'Weekday Evenings',
                    'Ramadan (Post Iftaar, Usually for Taraweeh collections)'
                  ].map((time) => (
                    <label key={time} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(time)}
                        onChange={() => handleCheckboxChange('availability', time)}
                      />
                      <span>{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How did you hear about MTJF? */}
              <div className="form-card">
                <label className="form-label">How did you hear about MTJF?</label>
                <div className="radio-group">
                  {['Social Media', 'Email', 'Friend/Family', 'Event'].map((source) => (
                    <label key={source} className="radio-label">
                      <input
                        type="radio"
                        name="hearAbout"
                        value={source}
                        checked={formData.hearAbout === source}
                        onChange={handleInputChange}
                      />
                      <span>{source}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit Form
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Information Sidebar */}
        <div className="volunteer-info-sidebar">
          <h2 className="info-heading">
            Serve with compassion. <br />
            Give with sincerity.
          </h2>

          <p className="info-text">
            At Molana Tariq Jamil Foundation, we believe true change begins when hearts
            come together for the sake of Allah. <br />
            Our volunteers are the backbone of our mission – helping deliver food, water,
            education, and hope to families in need.
          </p>

          <p className="info-text">
            By joining our volunteer team, you'll become part of a movement dedicated to:
          </p>

          <ul className="info-list">
            <li>Spreading compassion and care across communities</li>
            <li>Supporting life-changing humanitarian projects</li>
            <li>Uplifting those most in need with dignity and respect</li>
          </ul>

          <p className="info-text">
            Please complete the form below carefully. Once submitted, our team will review
            your application and reach out with next steps, Insha'Allah.
          </p>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@mtjfoundation.ca</span>
            </div>

            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>905-783-1MTJ</span>
            </div>

            <div className="contact-item align-top">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>
                Skyward Business Center 312 – <br />
                2255 Dundas St. W. <br />
                Mississauga, ON L5K 1R6
              </span>
            </div>
          </div>

          {/* Social Follow */}
          <div className="social-section">
            <span className="social-title">Follow Us</span>
            <div className="social-icons">
              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#twitter" aria-label="X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Right Floral SVG Background */}
      <div className="floral-bg floral-right">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M250 200C180 180 120 120 100 40M250 200C190 240 130 300 90 380"
            stroke="#D09B74"
            strokeWidth="3"
          />
          <path
            d="M100 40C110 20 90 0 80 20C70 40 90 60 100 40Z"
            fill="#D09B74"
          />
          <path
            d="M90 380C100 360 80 340 70 360C60 380 80 400 90 380Z"
            fill="#D09B74"
          />
          <circle cx="180" cy="200" r="15" fill="#D09B74" />
        </svg>
      </div>
    </section>
  );
};

export default VolunteerSection;