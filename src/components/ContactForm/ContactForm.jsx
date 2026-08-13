import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan apna API / email service laga dena
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* LEFT - Form */}
        <div className="contact-left">
          <h2 className="contact-title">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - Contact Info */}
        <div className="contact-right">
          <h2 className="right-title">Contact Information</h2>

          <div className="info-item">
            <span className="icon">✉</span>
            <span>info@mtjfoundation.ca</span>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <span>905-783-1MTJ</span>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <span>
              Skyward business Center 401 - 2255 Dundas St W,
              <br />
              Mississauga, ON L5K 1R6
            </span>
          </div>

          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="X / Twitter">𝕏</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;