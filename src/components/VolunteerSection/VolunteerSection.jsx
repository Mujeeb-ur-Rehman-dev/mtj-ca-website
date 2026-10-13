import React, { useState, useRef, useEffect } from "react";
import "./VolunteerSection.css";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaCircleExclamation,
  FaCheck,
} from "react-icons/fa6";

const initialFormState = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  age: "",
  location: "",
  expertise: [],
  otherExpertise: "",
  availability: [],
  hearAboutUs: "",
  otherHearAboutUs: "",
  donorConsent: "",
};

const VolunteerSection = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formScrollRef = useRef(null);

  // Always ensure form starts at top on initial mount
  useEffect(() => {
    if (formScrollRef.current) {
      formScrollRef.current.scrollTop = 0;
    }
  }, []);

  // Field change handlers
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (group, value) => {
    setFormData((prev) => {
      const current = prev[group];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [group]: next };
    });
    if (errors[group]) {
      setErrors((prev) => ({ ...prev, [group]: null }));
    }
  };

  const handleClearForm = () => {
    setFormData(initialFormState);
    setErrors({});
    if (formScrollRef.current) {
      formScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "This is a required question";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Must be a valid email address";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This is a required question";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "This is a required question";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "This is a required question";
    }

    if (!formData.age) {
      newErrors.age = "This is a required question";
    }

    if (!formData.location.trim()) {
      newErrors.location = "This is a required question";
    }

    const hasExpertise =
      formData.expertise.length > 0 || formData.otherExpertise.trim() !== "";
    if (!hasExpertise) {
      newErrors.expertise = "This is a required question";
    }

    if (!formData.donorConsent) {
      newErrors.donorConsent = "This is a required question";
    }

    setErrors(newErrors);
    return newErrors;
  };

  // Submit Handler - Pure React Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = document.querySelector(".form-card--error");
      if (firstErrorField && formScrollRef.current) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Volunteer application submitted successfully:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (formScrollRef.current) {
        formScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 450);
  };

  return (
    <section className="volunteer-section">
      <div className="volunteer-container">
        {/* LEFT SIDE - Pure React Form */}
        <div className="volunteer-left">
          <h2 className="volunteer-title">Volunteer Form</h2>

          <div className="form-scroll-wrapper" ref={formScrollRef}>
            {isSubmitted ? (
              <div className="form-success-card">
                <div className="form-header-bar" />
                <div className="form-success-content">
                  <div className="form-success-icon">
                    <FaCheck />
                  </div>
                  <h3 className="form-success-title">MTJ Volunteer Sign Up</h3>
                  <p className="form-success-message">
                    Your response has been recorded. Thank you for signing up to volunteer with the Molana Tariq Jamil Foundation!
                  </p>
                  <p className="form-success-subtext">
                    Our team will review your application and reach out with next steps, insha’Allah.
                  </p>
                  <button
                    type="button"
                    className="form-reset-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      handleClearForm();
                    }}
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="volunteer-react-form">
                {/* Header Card */}
                <div className="form-card form-header-card">
                  <div className="form-header-bar" />
                  <div className="form-header-body">
                    <h1 className="form-heading">MTJ Volunteer Sign Up</h1>
                    <div className="form-intro-text">
                      <p>
                        Interested in Volunteering with the Molana Tariq Jamil Foundation? Look no further!
                      </p>
                      <p>
                        Fill out this form and stay up to date with upcoming events held by MTJF and events we will be present at!
                      </p>
                      <p>
                        For more information about MTJF and our vision, you can visit our{" "}
                        <a href="https://mtjfoundation.ca" target="_blank" rel="noopener noreferrer">
                          website
                        </a>{" "}
                        as well as follow us on{" "}
                        <a href="https://www.instagram.com/mtjf_canada/" target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>{" "}
                        and{" "}
                        <a href="https://www.facebook.com/mtjfcanada/" target="_blank" rel="noopener noreferrer">
                          Facebook!
                        </a>
                      </p>
                    </div>
                    <div className="form-required-note">* Indicates required question</div>
                  </div>
                </div>

                {/* 1. Email */}
                <div className={`form-card ${errors.email ? "form-card--error" : ""}`}>
                  <label htmlFor="field-email" className="form-label">
                    Email <span className="required-star">*</span>
                  </label>
                  <input
                    id="field-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleTextChange}
                    placeholder="Your email"
                    className="form-underline-input"
                    aria-required="true"
                  />
                  {errors.email && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.email}
                    </div>
                  )}
                </div>

                {/* 2. First Name */}
                <div className={`form-card ${errors.firstName ? "form-card--error" : ""}`}>
                  <label htmlFor="field-firstName" className="form-label">
                    First Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="field-firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleTextChange}
                    placeholder="Your answer"
                    className="form-underline-input"
                    aria-required="true"
                  />
                  {errors.firstName && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.firstName}
                    </div>
                  )}
                </div>

                {/* 3. Last Name */}
                <div className={`form-card ${errors.lastName ? "form-card--error" : ""}`}>
                  <label htmlFor="field-lastName" className="form-label">
                    Last Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="field-lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleTextChange}
                    placeholder="Your answer"
                    className="form-underline-input"
                    aria-required="true"
                  />
                  {errors.lastName && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.lastName}
                    </div>
                  )}
                </div>

                {/* 4. Phone Number */}
                <div className={`form-card ${errors.phoneNumber ? "form-card--error" : ""}`}>
                  <label htmlFor="field-phoneNumber" className="form-label">
                    Phone Number <span className="required-star">*</span>
                  </label>
                  <input
                    id="field-phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleTextChange}
                    placeholder="Your answer"
                    className="form-underline-input"
                    aria-required="true"
                  />
                  {errors.phoneNumber && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.phoneNumber}
                    </div>
                  )}
                </div>

                {/* 5. Age */}
                <div className={`form-card ${errors.age ? "form-card--error" : ""}`}>
                  <div className="form-label">
                    Age <span className="required-star">*</span>
                  </div>
                  <div className="form-radio-group">
                    {["18 and Under", "18 - 30", "30 +"].map((option) => (
                      <label key={option} className="form-radio-item">
                        <input
                          type="radio"
                          name="age"
                          value={option}
                          checked={formData.age === option}
                          onChange={() => handleRadioChange("age", option)}
                          className="form-native-radio"
                        />
                        <span className="form-custom-radio" />
                        <span className="form-radio-label">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.age && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.age}
                    </div>
                  )}
                </div>

                {/* 6. City / Country */}
                <div className={`form-card ${errors.location ? "form-card--error" : ""}`}>
                  <label htmlFor="field-location" className="form-label">
                    What city/country are you located in? (eg. Toronto, Canada){" "}
                    <span className="required-star">*</span>
                  </label>
                  <input
                    id="field-location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleTextChange}
                    placeholder="Your answer"
                    className="form-underline-input"
                    aria-required="true"
                  />
                  {errors.location && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.location}
                    </div>
                  )}
                </div>

                {/* 7. Area of Expertise */}
                <div className={`form-card ${errors.expertise ? "form-card--error" : ""}`}>
                  <div className="form-label">
                    Area of Expertise: <br />
                    <span className="form-sublabel">(Please select all that apply)</span>{" "}
                    <span className="required-star">*</span>
                  </div>
                  <div className="form-checkbox-group">
                    {[
                      "Marketing/Photography/Videography",
                      "Customer/Donor Service",
                      "Hospitality (Booth Management, Crowd Control)",
                      "Administration",
                      "Technical Support",
                    ].map((option) => (
                      <label key={option} className="form-checkbox-item">
                        <input
                          type="checkbox"
                          name="expertise"
                          value={option}
                          checked={formData.expertise.includes(option)}
                          onChange={() => handleCheckboxChange("expertise", option)}
                          className="form-native-checkbox"
                        />
                        <span className="form-custom-checkbox" />
                        <span className="form-checkbox-label">{option}</span>
                      </label>
                    ))}

                    {/* Other option */}
                    <div className="form-other-item">
                      <label className="form-checkbox-item">
                        <input
                          type="checkbox"
                          checked={formData.otherExpertise.trim() !== ""}
                          onChange={(e) => {
                            if (!e.target.checked) {
                              setFormData((prev) => ({ ...prev, otherExpertise: "" }));
                            }
                          }}
                          className="form-native-checkbox"
                        />
                        <span className="form-custom-checkbox" />
                        <span className="form-checkbox-label">Other:</span>
                      </label>
                      <input
                        type="text"
                        name="otherExpertise"
                        value={formData.otherExpertise}
                        onChange={handleTextChange}
                        className="form-underline-input form-inline-input"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {errors.expertise && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.expertise}
                    </div>
                  )}
                </div>

                {/* 8. General Availability */}
                <div className="form-card">
                  <div className="form-label">
                    General Availability: <br />
                    <span className="form-sublabel">(Select all that apply)</span>
                  </div>
                  <div className="form-checkbox-group">
                    {[
                      "Weekend Mornings",
                      "Weekend Evenings",
                      "Weekday Mornings",
                      "Weekday Evenings",
                      "Ramadan (Post Iftaar, Usually for Taraweeh collections)",
                    ].map((option) => (
                      <label key={option} className="form-checkbox-item">
                        <input
                          type="checkbox"
                          name="availability"
                          value={option}
                          checked={formData.availability.includes(option)}
                          onChange={() => handleCheckboxChange("availability", option)}
                          className="form-native-checkbox"
                        />
                        <span className="form-custom-checkbox" />
                        <span className="form-checkbox-label">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 9. How did you hear about MTJF? */}
                <div className="form-card">
                  <div className="form-label">How did you hear about MTJF?</div>
                  <div className="form-radio-group">
                    {["Social Media", "Email", "Friends/Family"].map((option) => (
                      <label key={option} className="form-radio-item">
                        <input
                          type="radio"
                          name="hearAboutUs"
                          value={option}
                          checked={formData.hearAboutUs === option}
                          onChange={() => {
                            handleRadioChange("hearAboutUs", option);
                            setFormData((prev) => ({ ...prev, otherHearAboutUs: "" }));
                          }}
                          className="form-native-radio"
                        />
                        <span className="form-custom-radio" />
                        <span className="form-radio-label">{option}</span>
                      </label>
                    ))}

                    {/* Other option */}
                    <div className="form-other-item">
                      <label className="form-radio-item">
                        <input
                          type="radio"
                          name="hearAboutUs"
                          value="Other"
                          checked={formData.hearAboutUs === "Other"}
                          onChange={() => handleRadioChange("hearAboutUs", "Other")}
                          className="form-native-radio"
                        />
                        <span className="form-custom-radio" />
                        <span className="form-radio-label">Other:</span>
                      </label>
                      <input
                        type="text"
                        name="otherHearAboutUs"
                        value={formData.otherHearAboutUs}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            hearAboutUs: "Other",
                            otherHearAboutUs: e.target.value,
                          }));
                        }}
                        className="form-underline-input form-inline-input"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                {/* 10. Consent to Donor Database */}
                <div className={`form-card ${errors.donorConsent ? "form-card--error" : ""}`}>
                  <div className="form-label">
                    Do you consent to being added to our Donor Database?{" "}
                    <span className="required-star">*</span>
                  </div>
                  <div className="form-radio-group">
                    {["I consent", "I DO NOT consent"].map((option) => (
                      <label key={option} className="form-radio-item">
                        <input
                          type="radio"
                          name="donorConsent"
                          value={option}
                          checked={formData.donorConsent === option}
                          onChange={() => handleRadioChange("donorConsent", option)}
                          className="form-native-radio"
                        />
                        <span className="form-custom-radio" />
                        <span className="form-radio-label">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.donorConsent && (
                    <div className="form-error-msg">
                      <FaCircleExclamation /> {errors.donorConsent}
                    </div>
                  )}
                </div>

                {/* Bottom Action Buttons */}
                <div className="form-actions-bar">
                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting…" : "Submit"}
                  </button>
                  <button
                    type="button"
                    className="form-clear-btn"
                    onClick={handleClearForm}
                  >
                    Clear form
                  </button>
                </div>
              </form>
            )}
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