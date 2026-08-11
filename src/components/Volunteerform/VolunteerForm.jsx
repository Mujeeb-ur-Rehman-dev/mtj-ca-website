import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./VolunteerForm.css";

const AGE_OPTIONS = ["18 and Under", "18 - 30", "30 +"];

const EXPERTISE_OPTIONS = [
  "Marketing/Photography/Videography",
  "Customer/Donor Service",
  "Hospitality (Booth Management, Crowd Control)",
  "Administration",
  "Technical Support",
  "Other",
];

const AVAILABILITY_OPTIONS = [
  "Weekend Mornings",
  "Weekend Evenings",
  "Weekday Mornings",
  "Weekday Evenings",
  "Ramadan (Post Iftaar, Usually for Taraweeh collections)",
];

const HEAR_ABOUT_OPTIONS = ["Social Media", "Email", "Friends/Family", "Other"];

const CONSENT_OPTIONS = ["I consent", "I DO NOT consent"];

/**
 * VolunteerForm
 *
 * Two-column "form + info panel" layout matching the live MTJF
 * Volunteer Form design. On mobile the columns stack with the form
 * FIRST and the dark info panel SECOND (matches the reference: form
 * up top, "Serve with compassion..." content below it).
 *
 * BACKGROUND IMAGE — the decorative leaf/vine illustration peeking in
 * from the left edge (visible in the desktop screenshot) is applied via
 * this component's `backgroundImage` prop, e.g.:
 *
 *   import leafDecoration from "../../assets/img/volunteer/leaf-decoration.png";
 *   <VolunteerForm backgroundImage={leafDecoration} ... />
 *
 * Drop your image file at:
 *   src/assets/img/volunteer/leaf-decoration.png
 * (any filename works — just import it and pass it as `backgroundImage`)
 * If no `backgroundImage` is passed, the section simply shows the plain
 * dark green background with no image.
 *
 * Props:
 *   title            {string} – "Volunteer Form" title bar text
 *   formHeading      {string} – left column heading (e.g. "MTJ Volunteer Sign Up")
 *   formIntro        {string} – left column intro paragraph
 *   requiredNote     {string} – small red note (e.g. "* Indicates required question")
 *   sideHeading      {string} – right panel heading
 *   sideParagraphs   {array}  – right panel intro paragraphs (strings)
 *   sideBullets      {array}  – right panel bullet list (strings)
 *   sideClosing      {string} – right panel closing paragraph
 *   email, phone, address {string} – contact block content
 *   socialLinks      {array}  – [{ icon, href, label }]
 *   backgroundImage  {string} – decorative background image src (optional)
 *   onSubmit         {func}   – called with the full form state on submit
 */
export default function VolunteerForm({
  title = "Volunteer Form",
  formHeading = "MTJ Volunteer Sign Up",
  formIntro = "Interested in volunteering with the Molana Tariq Jamil Foundation? Look no further!",
  requiredNote = "* Indicates required question",
  sideHeading = "Serve with compassion. Give with sincerity.",
  sideParagraphs = [
    "At Molana Tariq Jamil Foundation, we believe true change begins when hearts come together for the sake of Allah. Our volunteers are the backbone of our mission — helping deliver food, water, education, and hope to families in need.",
    "By joining our volunteer team, you'll become part of a movement dedicated to:",
  ],
  sideBullets = [
    "Spreading compassion and care across communities",
    "Supporting life-changing humanitarian projects",
    "Uplifting those most in need with dignity and respect",
  ],
  sideClosing = "Please complete the form below carefully. Once submitted, our team will review your application and reach out with next steps, InshaAllah.",
  email = "info@mtjfoundation.ca",
  phone = "905-XXX-XXXX",
  address = "Skyview Business Center 33 - 3255 Dundas St W, Mississauga, ON L5B 1M9",
  socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaXTwitter, href: "https://x.com", label: "X" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  ],
  backgroundImage,
  onSubmit,
}) {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    location: "",
    expertise: [],
    expertiseOther: "",
    availability: [],
    hearAbout: "",
    hearAboutOther: "",
    consent: "",
  });

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleCheckbox = (field, value) => {
    setForm((f) => {
      const list = f[field];
      return {
        ...f,
        [field]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <section
      className="vf"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="vf__card">
        <div className="vf__title-bar">
          <h1 className="vf__title">{title}</h1>
        </div>

        <div className="vf__body">
          {/* ── LEFT (mobile: FIRST) — the form ── */}
          <div className="vf__form-col">
            <h2 className="vf__form-heading">{formHeading}</h2>
            <p className="vf__form-intro">{formIntro}</p>
            <p className="vf__required-note">{requiredNote}</p>

            <form className="vf__form" onSubmit={handleSubmit}>
              <Field label="Email" required>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </Field>

              <Field label="First Name" required>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  required
                />
              </Field>

              <Field label="Last Name" required>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  required
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                />
              </Field>

              <Field label="Age" required>
                <RadioGroup
                  name="age"
                  options={AGE_OPTIONS}
                  value={form.age}
                  onChange={handleChange("age")}
                  required
                />
              </Field>

              <Field
                label="What city/country are you located in? (eg. Toronto, Canada)"
                required
              >
                <input
                  type="text"
                  value={form.location}
                  onChange={handleChange("location")}
                  required
                />
              </Field>

              <Field
                label="Area of Expertise: (Please select all that apply)"
                required
              >
                <CheckboxGroup
                  options={EXPERTISE_OPTIONS}
                  selected={form.expertise}
                  onToggle={(v) => toggleCheckbox("expertise", v)}
                  otherValue={form.expertiseOther}
                  onOtherChange={handleChange("expertiseOther")}
                />
              </Field>

              <Field label="General Availability: (Select all that apply)">
                <CheckboxGroup
                  options={AVAILABILITY_OPTIONS}
                  selected={form.availability}
                  onToggle={(v) => toggleCheckbox("availability", v)}
                />
              </Field>

              <Field label="How did you hear about MTJF?">
                <RadioGroup
                  name="hearAbout"
                  options={HEAR_ABOUT_OPTIONS}
                  value={form.hearAbout}
                  onChange={handleChange("hearAbout")}
                  otherValue={form.hearAboutOther}
                  onOtherChange={handleChange("hearAboutOther")}
                />
              </Field>

              <Field
                label="Do you consent to being added to our Donor Database?"
                required
              >
                <RadioGroup
                  name="consent"
                  options={CONSENT_OPTIONS}
                  value={form.consent}
                  onChange={handleChange("consent")}
                  required
                />
              </Field>

              <button type="submit" className="vf__submit">
                Submit
              </button>
            </form>
          </div>

          {/* ── RIGHT (mobile: SECOND) — dark info panel ── */}
          <div className="vf__info-col">
            <h2 className="vf__info-heading">{sideHeading}</h2>

            {sideParagraphs.map((p, i) => (
              <p className="vf__info-text" key={i}>
                {p}
              </p>
            ))}

            <ul className="vf__info-list">
              {sideBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p className="vf__info-text">{sideClosing}</p>

            <div className="vf__contact">
              <div className="vf__contact-item">
                <FaEnvelope />
                <span>{email}</span>
              </div>
              <div className="vf__contact-item">
                <FaPhoneAlt />
                <span>{phone}</span>
              </div>
              <div className="vf__contact-item">
                <FaMapMarkerAlt />
                <span>{address}</span>
              </div>
            </div>

            <div className="vf__social">
              <span className="vf__social-label">Follow Us</span>
              <div className="vf__social-icons">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Small building-block components ── */

function Field({ label, required, children }) {
  return (
    <div className="vf__field">
      <label className="vf__label">
        {label} {required && <span className="vf__asterisk">*</span>}
      </label>
      {children}
    </div>
  );
}

function RadioGroup({ name, options, value, onChange, otherValue, onOtherChange, required }) {
  return (
    <div className="vf__radio-group">
      {options.map((opt) => (
        <label className="vf__radio-row" key={opt}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            required={required}
          />
          <span>
            {opt}
            {opt === "Other" && onOtherChange ? ":" : ""}
          </span>
          {opt === "Other" && onOtherChange && value === "Other" && (
            <input
              type="text"
              className="vf__other-input"
              value={otherValue}
              onChange={onOtherChange}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({ options, selected, onToggle, otherValue, onOtherChange }) {
  return (
    <div className="vf__checkbox-group">
      {options.map((opt) => (
        <label className="vf__checkbox-row" key={opt}>
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onToggle(opt)}
          />
          <span>
            {opt}
            {opt === "Other" && onOtherChange ? ":" : ""}
          </span>
          {opt === "Other" && onOtherChange && selected.includes("Other") && (
            <input
              type="text"
              className="vf__other-input"
              value={otherValue}
              onChange={onOtherChange}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </label>
      ))}
    </div>
  );
}