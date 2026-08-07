import React, { useState } from 'react';
import './GoogleFormSection.css';

const GoogleFormSection = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Replace with your actual Google Form entry IDs
  const GOOGLE_FORM_ACTION_URL =
    'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID_HERE/formResponse';

  const ENTRY_IDS = {
    firstName: 'entry.1000001',
    lastName: 'entry.1000002',
    phoneNumber: 'entry.1000003',
    age: 'entry.1000004',
    expertise: 'entry.1000005',
    availability: 'entry.1000006',
    hearAbout: 'entry.1000007'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new URLSearchParams();

    // Mapping React state data to Google Form input names
    formBody.append(ENTRY_IDS.firstName, formData.firstName);
    formBody.append(ENTRY_IDS.lastName, formData.lastName);
    formBody.append(ENTRY_IDS.phoneNumber, formData.phoneNumber);
    formBody.append(ENTRY_IDS.age, formData.age);

    formData.expertise.forEach((item) => {
      formBody.append(
        ENTRY_IDS.expertise,
        item === 'Other' ? formData.otherExpertise : item
      );
    });

    formData.availability.forEach((item) => {
      formBody.append(ENTRY_IDS.availability, item);
    });

    formBody.append(ENTRY_IDS.hearAbout, formData.hearAbout);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form to Google Form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="gform-section">
      <div className="gform-container">
        <h2 className="gform-title">Volunteer Form</h2>

        {isSubmitted ? (
          <div className="gform-success-card">
            <h3>Thank You!</h3>
            <p>Your response has been submitted successfully.</p>
          </div>
        ) : (
          <div className="gform-scroll-area">
            <form onSubmit={handleSubmit} className="gform-body">
              {/* First Name */}
              <div className="gform-card">
                <label className="gform-label">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your answer"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="gform-input"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="gform-card">
                <label className="gform-label">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your answer"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="gform-input"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="gform-card">
                <label className="gform-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your answer"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="gform-input"
                  required
                />
              </div>

              {/* Age */}
              <div className="gform-card">
                <label className="gform-label">
                  Age <span className="required">*</span>
                </label>
                <div className="gform-options">
                  {['18 and Under', '19 - 30', '31 - 50', '51+'].map((option) => (
                    <label key={option} className="gform-radio-label">
                      <input
                        type="radio"
                        name="age"
                        value={option}
                        checked={formData.age === option}
                        onChange={handleInputChange}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Area of Expertise */}
              <div className="gform-card">
                <label className="gform-label">
                  Area of Expertise: <span className="required">*</span>
                </label>
                <p className="gform-subtext">(Please select all that apply)</p>
                <div className="gform-options">
                  {[
                    'Marketing/Photography/Videography',
                    'Customer/Donor Service',
                    'Hospitality (Booth Management, Crowd Control)',
                    'Administration',
                    'Technical Support'
                  ].map((item) => (
                    <label key={item} className="gform-checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.expertise.includes(item)}
                        onChange={() => handleCheckboxChange('expertise', item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                  <div className="gform-other-row">
                    <label className="gform-checkbox-label">
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
                      className="gform-inline-input"
                    />
                  </div>
                </div>
              </div>

              {/* General Availability */}
              <div className="gform-card">
                <label className="gform-label">General Availability:</label>
                <p className="gform-subtext">(Select all that apply)</p>
                <div className="gform-options">
                  {[
                    'Weekend Mornings',
                    'Weekend Evenings',
                    'Weekday Mornings',
                    'Weekday Evenings',
                    'Ramadan (Post Iftaar, Usually for Taraweeh collections)'
                  ].map((time) => (
                    <label key={time} className="gform-checkbox-label">
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
              <div className="gform-card">
                <label className="gform-label">How did you hear about MTJF?</label>
                <div className="gform-options">
                  {['Social Media', 'Email', 'Friend/Family', 'Event'].map((source) => (
                    <label key={source} className="gform-radio-label">
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

              <button type="submit" disabled={isSubmitting} className="gform-submit-btn">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleFormSection;