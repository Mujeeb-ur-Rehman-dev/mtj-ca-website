import React, { useState } from 'react';
import './VolunteerHeroSection.css';

import bgPatternImage from '../../assets/img/VolunteerSection/background-img.png';

const VolunteerHeroSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    location: '',
    expertise: [],
    otherExpertiseText: '',
    availability: [],
    howDidYouHear: '',
    otherHearText: '',
    consent: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const currentList = prev[category];
      const updatedList = currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value];

      return { ...prev, [category]: updatedList };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <section 
      className="mtj-hero-wrapper"
      style={{ backgroundImage: `url(${bgPatternImage})` }}
    >
      <div className="mtj-hero-container">
        <div className="mtj-card-outer">
          <div className="mtj-card-inner">
            
            {/* Form Section (Top on Mobile, Left on Desktop) */}
            <div className="mtj-form-col">
              <h1 className="mtj-form-title">Volunteer Form</h1>

              <div className="mtj-custom-form-wrapper">
                
                {/* Header Card */}
                <div className="mtj-form-header-card">
                  <h2 className="mtj-form-header-title">MTJ Volunteer Sign Up</h2>
                  <p className="mtj-form-header-desc">
                    Interested in Volunteering with the Molana Tariq Jamil Foundation? Look no further!<br />
                    Fill out this form and stay up to date with upcoming events held by MTJF and events we will be present at!
                  </p>
                  <p className="mtj-form-header-desc">
                    For more information about MTJF and our vision, you can visit our{' '}
                    <a href="https://mtjfoundation.ca" target="_blank" rel="noreferrer" className="mtj-link">website</a>{' '}
                    as well as follow us on{' '}
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mtj-link">Instagram</a>{' '}
                    and{' '}
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mtj-link">Facebook</a>!
                  </p>
                  
                  <div className="mtj-account-info">
                    <span className="mtj-email-badge">mujeeboff@gmail.com</span>
                    <button type="button" className="mtj-switch-btn">Switch account</button>
                  </div>
                  <p className="mtj-required-note">* Indicates required question</p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="mtj-volunteer-form">
                  
                  {/* Email */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Email <span className="mtj-asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mtj-text-input"
                    />
                  </div>

                  {/* First Name */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      First Name <span className="mtj-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Your answer"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mtj-text-input"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Last Name <span className="mtj-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Your answer"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mtj-text-input"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Phone Number <span className="mtj-asterisk">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="Your answer"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="mtj-text-input"
                    />
                  </div>

                  {/* Age */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Age <span className="mtj-asterisk">*</span>
                    </label>
                    <div className="mtj-option-group">
                      {['18 and Under', '18 - 30', '30 +'].map((option) => (
                        <label key={option} className="mtj-option-item">
                          <input
                            type="radio"
                            name="age"
                            value={option}
                            required
                            checked={formData.age === option}
                            onChange={handleChange}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* City/Country Location */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      What city/country are you located in? (eg. Toronto, Canada) <span className="mtj-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="Your answer"
                      value={formData.location}
                      onChange={handleChange}
                      className="mtj-text-input"
                    />
                  </div>

                  {/* Area of Expertise */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Area of Expertise:<br />
                      <span className="mtj-sublabel">(Please select all that apply)</span> <span className="mtj-asterisk">*</span>
                    </label>
                    <div className="mtj-option-group">
                      {[
                        'Marketing/Photography/Videography',
                        'Customer/Donor Service',
                        'Hospitality (Booth Management, Crowd Control)',
                        'Administration',
                        'Technical Support'
                      ].map((item) => (
                        <label key={item} className="mtj-option-item">
                          <input
                            type="checkbox"
                            value={item}
                            checked={formData.expertise.includes(item)}
                            onChange={() => handleCheckboxChange('expertise', item)}
                          />
                          <span>{item}</span>
                        </label>
                      ))}

                      {/* Other Option */}
                      <div className="mtj-other-input-row">
                        <label className="mtj-option-item">
                          <input
                            type="checkbox"
                            value="Other:"
                            checked={formData.expertise.includes('Other:')}
                            onChange={() => handleCheckboxChange('expertise', 'Other:')}
                          />
                          <span>Other:</span>
                        </label>
                        {formData.expertise.includes('Other:') && (
                          <input
                            type="text"
                            name="otherExpertiseText"
                            placeholder="Your answer"
                            value={formData.otherExpertiseText}
                            onChange={handleChange}
                            className="mtj-text-input inline-other"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* General Availability */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      General Availability: <span className="mtj-sublabel">(Select all that apply)</span>
                    </label>
                    <div className="mtj-option-group">
                      {[
                        'Weekend Mornings',
                        'Weekend Evenings',
                        'Weekday Mornings',
                        'Weekday Evenings',
                        'Ramadan (Post Iftaar, Usually for Taraweeh collections)'
                      ].map((slot) => (
                        <label key={slot} className="mtj-option-item">
                          <input
                            type="checkbox"
                            value={slot}
                            checked={formData.availability.includes(slot)}
                            onChange={() => handleCheckboxChange('availability', slot)}
                          />
                          <span>{slot}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear about MTJF */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">How did you hear about MTJF?</label>
                    <div className="mtj-option-group">
                      {['Social Media', 'Email', 'Friends/Family'].map((source) => (
                        <label key={source} className="mtj-option-item">
                          <input
                            type="radio"
                            name="howDidYouHear"
                            value={source}
                            checked={formData.howDidYouHear === source}
                            onChange={handleChange}
                          />
                          <span>{source}</span>
                        </label>
                      ))}

                      {/* Other Option */}
                      <div className="mtj-other-input-row">
                        <label className="mtj-option-item">
                          <input
                            type="radio"
                            name="howDidYouHear"
                            value="Other:"
                            checked={formData.howDidYouHear === 'Other:'}
                            onChange={handleChange}
                          />
                          <span>Other:</span>
                        </label>
                        {formData.howDidYouHear === 'Other:' && (
                          <input
                            type="text"
                            name="otherHearText"
                            placeholder="Your answer"
                            value={formData.otherHearText}
                            onChange={handleChange}
                            className="mtj-text-input inline-other"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="mtj-input-card">
                    <label className="mtj-label">
                      Do you consent to being added to our Donor Database? <span className="mtj-asterisk">*</span>
                    </label>
                    <div className="mtj-option-group">
                      {['I consent', 'I DO NOT consent'].map((consentOption) => (
                        <label key={consentOption} className="mtj-option-item">
                          <input
                            type="radio"
                            name="consent"
                            value={consentOption}
                            required
                            checked={formData.consent === consentOption}
                            onChange={handleChange}
                          />
                          <span>{consentOption}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="mtj-submit-btn">
                    Submit
                  </button>

                </form>
              </div>
            </div>

            {/* Sidebar Section (Bottom on Mobile, Right on Desktop) */}
            <div className="mtj-sidebar-col">
              <div className="mtj-sidebar-content">
                <h2 className="mtj-sidebar-heading">
                  Serve with compassion.<br />
                  Give with sincerity.
                </h2>

                <p className="mtj-sidebar-paragraph">
                  At Maulana Tariq Jamil Foundation, we believe true change begins when hearts come together for the sake of Allah. Our volunteers are the backbone of our mission – helping deliver food, water, education, and hope to families in need.
                </p>

                <p className="mtj-sidebar-paragraph">
                  By joining our volunteer team, you'll become part of a movement dedicated to:
                </p>

                <ul className="mtj-sidebar-bullets">
                  <li>Spreading compassion and care across communities</li>
                  <li>Supporting life-changing humanitarian projects</li>
                  <li>Uplifting those most in need with dignity and respect</li>
                </ul>

                <p className="mtj-sidebar-paragraph">
                  Please complete the form carefully. Once submitted, our team will review your application and reach out with next steps, Insha'Allah.
                </p>

                <div className="mtj-sidebar-contact">
                  <div className="mtj-contact-row">
                    <span className="mtj-contact-icon">✉</span>
                    <a href="mailto:info@mtjfoundation.ca" className="mtj-contact-link">
                      info@mtjfoundation.ca
                    </a>
                  </div>

                  <div className="mtj-contact-row">
                    <span className="mtj-contact-icon">📞</span>
                    <a href="tel:9057551410" className="mtj-contact-link">
                      905-755-1410
                    </a>
                  </div>

                  <div className="mtj-contact-row align-start">
                    <span className="mtj-contact-icon icon-top-adjust">📍</span>
                    <p className="mtj-contact-text">
                      Skyward Business Center 302 -<br />
                      2255 Dundas St. W.<br />
                      Mississauga, ON L5K 1R9
                    </p>
                  </div>
                </div>
              </div>

              <div className="mtj-sidebar-social">
                <p className="mtj-social-heading">Follow Us</p>
                <div className="mtj-social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHeroSection;