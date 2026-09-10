import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter({ className = "" }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    optIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Newsletter signup submitted:", { ...form });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        optIn: false,
      });
    }, 700);
  };

  return (
    <section className={`nl ${className}`.trim()}>
      <div className="nl__inner">

        {/* ── LEFT: stamp icon + title ── */}
        <div className="nl__left">
          <img
            className="nl__icon"
            src={require("../../assets/img/newsletter/img-bg.png")}
            alt="Newsletter icon"
            width="130"
            height="130"
          />
          <h2 className="nl__title">
            ADD IMPACT<br />TO YOUR INBOX
          </h2>
        </div>

        {/* ── RIGHT: scalloped stamp form card ── */}
        <div className="nl__card">
          <form onSubmit={handleSubmit}>

            <div className="nl__row">
              <div className="nl__field">
                <label className="nl__label">First Name</label>
                <input
                  className="nl__input"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="nl__field">
                <label className="nl__label">Last Name</label>
                <input
                  className="nl__input"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="nl__field">
              <label className="nl__label">Email Address</label>
              <input
                className="nl__input nl__input--full"
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* <label className="nl__checkbox">
              <input
                type="checkbox"
                  name="optIn"
                checked={form.optIn}
                onChange={handleChange}
              />
              <span>Yes, keep me informed about MTJF programs and upcoming campaigns</span>
            </label> */}

            <button className="nl__submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up Now"}
            </button>

            {isSubmitted && (
              <p className="nl__success" role="status">
                &#10003; Your submission was successful.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
