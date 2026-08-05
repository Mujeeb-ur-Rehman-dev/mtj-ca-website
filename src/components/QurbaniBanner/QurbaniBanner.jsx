import React from 'react';
import './QurbaniBanner.css';
import Button from '../../common/components/buttons/Button';

/**
 * QurbaniBanner
 *
 * Props-driven seasonal / promotional top banner.
 * Currently used for the "Qurbani 2026" campaign (matches mtjfoundation.ca
 * live banner), but all content is passed via props so the same component
 * can be reused for Ramadan, Eid, Lebanon emergency promotions, etc.
 *
 * Props:
 *   visible               {bool}     – hide/show the whole banner (seasonal toggle)
 *   backgroundImage       {string}   – full-width banner background image URL
 *   backgroundColor       {string}   – optional fallback/overlay solid color
 *   mobileImage           {string}   – optional mobile-only background (independent)
 *   eyebrow               {string}   – small label ABOVE the main title (optional)
 *   title                 {string}   – main heading (H1)
 *   titleColor            {string}   – optional inline color override for title
 *   description           {string}   – short paragraph under the title
 *   descriptionColor      {string}   – optional inline color override for description
 *   primaryButtonText     {string}   – main CTA label (default: Donate Now)
 *   primaryButtonLink     {string}   – href/route for the primary CTA
 *   primaryButtonVariant  {string}   – default|maroon (passed to Button)
 *   secondaryButtonText   {string}   – secondary CTA label (default: Learn More — hidden if empty)
 *   secondaryButtonLink   {string}   – href/route for the secondary CTA
 *   contentAlign          {string}   – left | center (default: left, matching live site)
 *   className             {string}   – extra wrapper class(es)
 */
const QurbaniBanner = ({
  visible = true,
  backgroundImage,
  backgroundColor,
  mobileImage,
  eyebrow,
  title,
  titleColor,
  description,
  descriptionColor,
  primaryButtonText = 'Donate Now',
  primaryButtonLink,
  primaryButtonVariant = 'default',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink,
  contentAlign = 'left',
  className = '',
}) => {
  if (!visible) return null;

  const wrapperStyle = {};
  if (backgroundImage) wrapperStyle.backgroundImage = `url(${backgroundImage})`;
  if (backgroundColor) wrapperStyle.backgroundColor = backgroundColor;

  const titleStyle = titleColor ? { color: titleColor } : undefined;
  const descStyle = descriptionColor ? { color: descriptionColor } : undefined;

  const alignClass =
    contentAlign === 'center'
      ? 'qurbani-banner--center'
      : 'qurbani-banner--left';

  const handleNav = (link) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.href = link;
  };

  return (
    <section
      className={`qurbani-banner ${alignClass} ${className}`.trim()}
      style={wrapperStyle}
    >
      {mobileImage && (
        <div
          className="qurbani-banner__mobile-bg"
          style={{ backgroundImage: `url(${mobileImage})` }}
          aria-hidden="true"
        />
      )}

      <div className="qurbani-banner__overlay" aria-hidden="true" />

      <div className="qurbani-banner__inner container">
        <div className="qurbani-banner__content">
          {eyebrow && (
            <span className="qurbani-banner__eyebrow">{eyebrow}</span>
          )}

          {title && (
            <h1 className="qurbani-banner__title" style={titleStyle}>
              {title}
            </h1>
          )}

          {description && (
            <p className="qurbani-banner__desc" style={descStyle}>
              {description}
            </p>
          )}

          <div className="qurbani-banner__cta">
            {primaryButtonText && (
              <Button
                text={primaryButtonText}
                variant={primaryButtonVariant}
                size="md"
                onClick={() => handleNav(primaryButtonLink)}
                wrapperClass="qurbani-banner__btn-primary"
                buttonClass="btn btn-donate-animated"
                showStampBorder={false}
              />
            )}

            {secondaryButtonText && secondaryButtonLink && (
              <a
                href={secondaryButtonLink}
                className="qurbani-banner__btn-secondary"
                onClick={(e) => {
                  if (secondaryButtonLink.startsWith('#')) {
                    e.preventDefault();
                    handleNav(secondaryButtonLink);
                  }
                }}
              >
                {secondaryButtonText}
                <span className="qurbani-banner__btn-arrow" aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QurbaniBanner;
