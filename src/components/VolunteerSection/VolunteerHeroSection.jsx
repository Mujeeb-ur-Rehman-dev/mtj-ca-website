import React, { useState } from 'react';
import './VolunteerHeroSection.css';

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
    consent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    <section className="volunteer-section volunteer-section--hero">
      <div className="volunteer-container">

        {/* LEFT SIDE - Form */}
        <div className="volunteer-left">
          <h2 className="volunteer-title">Volunteer Form</h2>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="volunteer-form">

              {/* Email */}
              <div className="vf-field">
                <label className="vf-label">
                  Email <span className="vf-asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="vf-text-input"
                />
              </div>

              {/* First Name */}
              <div className="vf-field">
                <label className="vf-label">
                  First Name <span className="vf-asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Your answer"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="vf-text-input"
                />
              </div>

              {/* Last Name */}
              <div className="vf-field">
                <label className="vf-label">
                  Last Name <span className="vf-asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Your answer"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="vf-text-input"
                />
              </div>

              {/* Phone Number */}
              <div className="vf-field">
                <label className="vf-label">
                  Phone Number <span className="vf-asterisk">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="Your answer"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="vf-text-input"
                />
              </div>

              {/* Age */}
              <div className="vf-field">
                <label className="vf-label">
                  Age <span className="vf-asterisk">*</span>
                </label>
                <div className="vf-option-group">
                  {['18 and Under', '18 - 30', '30 +'].map((option) => (
                    <label key={option} className="vf-option-item">
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
              <div className="vf-field">
                <label className="vf-label">
                  What city/country are you located in? (eg. Toronto, Canada) <span className="vf-asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Your answer"
                  value={formData.location}
                  onChange={handleChange}
                  className="vf-text-input"
                />
              </div>

              {/* Area of Expertise */}
              <div className="vf-field">
                <label className="vf-label">
                  Area of Expertise:<br />
                  <span className="vf-sublabel">(Please select all that apply)</span> <span className="vf-asterisk">*</span>
                </label>
                <div className="vf-option-group">
                  {[
                    'Marketing/Photography/Videography',
                    'Customer/Donor Service',
                    'Hospitality (Booth Management, Crowd Control)',
                    'Administration',
                    'Technical Support',
                  ].map((item) => (
                    <label key={item} className="vf-option-item">
                      <input
                        type="checkbox"
                        value={item}
                        checked={formData.expertise.includes(item)}
                        onChange={() => handleCheckboxChange('expertise', item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}

                  <div className="vf-other-input-row">
                    <label className="vf-option-item">
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
                        className="vf-text-input vf-inline-other"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* General Availability */}
              <div className="vf-field">
                <label className="vf-label">
                  General Availability: <span className="vf-sublabel">(Select all that apply)</span>
                </label>
                <div className="vf-option-group">
                  {[
                    'Weekend Mornings',
                    'Weekend Evenings',
                    'Weekday Mornings',
                    'Weekday Evenings',
                    'Ramadan (Post Iftaar, Usually for Taraweeh collections)',
                  ].map((slot) => (
                    <label key={slot} className="vf-option-item">
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
              <div className="vf-field">
                <label className="vf-label">How did you hear about MTJF?</label>
                <div className="vf-option-group">
                  {['Social Media', 'Email', 'Friends/Family'].map((source) => (
                    <label key={source} className="vf-option-item">
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

                  <div className="vf-other-input-row">
                    <label className="vf-option-item">
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
                        className="vf-text-input vf-inline-other"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="vf-field">
                <label className="vf-label">
                  Do you consent to being added to our Donor Database? <span className="vf-asterisk">*</span>
                </label>
                <div className="vf-option-group">
                  {['I consent', 'I DO NOT consent'].map((consentOption) => (
                    <label key={consentOption} className="vf-option-item">
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
              <button type="submit" className="vf-submit-btn">
                Submit
              </button>

            </form>
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
              <span>✉</span> info@mtjfoundation.ca
            </p>
            <p>
              <span>📞</span> 905-783-1MTJ
            </p>
            <p>
              <span>📍</span> Skyward business Center 312 - 2255 Dundas St W,
              Mississauga, ON L5K 1R6
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VolunteerHeroSection;
