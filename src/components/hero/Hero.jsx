import React from 'react';
import Button from '../../common/components/buttons/Button';
import './Hero.css';
import mobileBackground from '../../assets/img/home/mbl-background.png';

const Hero = ({
  className = "",

  // Background
  backgroundImage,

  // Right-side image (desktop)
  heroImage,
  showRightImage = true,

  // Mobile-only image
  mobileImage,

  // Left column text content
  title,
  description,

  // Primary button
  buttonText,
  buttonLink,
  hideButton = false,
  buttonVariant = "default",

  // Optional second button
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonVariant = "default",
  secondaryButtonBgImage,
  secondaryButtonHoverBgImage,

  // Fully custom left-column content
  customContent,

  // Optional wrapper class
  customContentClassName = "",

  // Card Content (e.g. Lebanon Emergency style)
  cardContent,
  showDescriptionWithCard = false,

  // Design styles
  boldTitle = false,
  titleColor,
  descriptionColor,

  children,

  // Mobile button placement
  hideMobileButton = false,
  showMobileButtonAboveText = false,
}) => {
  const resolvedMobileImage = mobileImage || mobileBackground;
  const hasRightImage = showRightImage && Boolean(heroImage);
  const hasSecondaryButton = Boolean(secondaryButtonText || secondaryButtonLink);

  const titleClassName = `hero-title${boldTitle ? " hero-title--bold" : ""}`;
  const titleStyle = titleColor ? { color: titleColor } : undefined;
  const descriptionStyle = descriptionColor ? { color: descriptionColor } : undefined;
  const isEmergencyStyle = boldTitle || Boolean(cardContent);

  const textSectionClassName = `hero-text-section${
    isEmergencyStyle ? " hero-text-section--emergency" : ""
  }${customContent ? " hero-text-section--custom" : ""}`;

  // Client-Side React Router / Smooth Scroll Navigation Handler
  const goTo = (link) => {
    if (!link) return;

    if (link.startsWith("#")) {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Pure React Navigation
    window.location.href = link;
  };

  const handleButtonClick = () => goTo(buttonLink);
  const handleSecondaryButtonClick = () => goTo(secondaryButtonLink);

  const renderButtons = () => (
    <div className="hero-button-group">
      {!hideButton && (
        <Button
          text={buttonText || "Quick Donate"}
          onClick={handleButtonClick}
          size="md"
          wrapperClass="nav-btn-group hero-donate-btn-group"
          buttonClass="btn btn-donate-animated hero-donate-btn"
          variant={buttonVariant}
        />
      )}
      {hasSecondaryButton && (
        <Button
          text={secondaryButtonText || "Donate Now"}
          onClick={handleSecondaryButtonClick}
          size="md"
          wrapperClass="nav-btn-group hero-donate-btn-group"
          buttonClass="btn btn-donate-animated hero-donate-btn hero-secondary-btn"
          variant={secondaryButtonVariant}
          bgImage={secondaryButtonBgImage}
          hoverBgImage={secondaryButtonHoverBgImage}
        />
      )}
    </div>
  );

  const renderTextBlock = (isMobile = false) => (
    <>
      <h1 className={titleClassName} style={!isMobile ? titleStyle : undefined}>
        {title}
      </h1>
      {cardContent ? (
        <>
          {!isMobile && showDescriptionWithCard && description && (
            <p className="hero-description" style={descriptionStyle}>
              {description}
            </p>
          )}
          <div className="hero-card-wrapper">{cardContent}</div>
        </>
      ) : (
        <>
          <p
            className="hero-description"
            style={!isMobile ? descriptionStyle : undefined}
          >
            {description}
          </p>
          {(!isMobile || (!hideMobileButton && !showMobileButtonAboveText)) &&
            renderButtons()}
        </>
      )}
    </>
  );

  return (
    <section
      className={`hero-section ${className}`.trim()}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      {/* Navbar / Overlay Children */}
      {children}

      {/* Desktop Hero Content */}
      <div className="hero-content hero-content-desktop">
        <div
          className={`hero-content-inner${
            !hasRightImage ? " hero-content-inner--no-image" : ""
          }`}
        >
          <div className={textSectionClassName}>
            {customContent ? (
              <div className={`hero-custom-content ${customContentClassName}`.trim()}>
                {customContent}
              </div>
            ) : (
              renderTextBlock(false)
            )}
          </div>

          {hasRightImage && (
            <div className="hero-image-section">
              <img src={heroImage} alt="" className="hero-main-image" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hero Content */}
      <div className="hero-content hero-content-mobile">
        <div className="hero-content-inner">
          <div className="hero-image-wrapper">
            <div className="hero-stamp-border">
              <div className="hero-side-borders" />
              <img src={resolvedMobileImage} alt="" className="hero-main-image" />
            </div>
          </div>

          {!customContent &&
            !cardContent &&
            showMobileButtonAboveText &&
            !hideMobileButton && (
              <div className="hero-mobile-button-row">{renderButtons()}</div>
            )}

          <div className="hero-text-section">
            {customContent ? (
              <div className={`hero-custom-content ${customContentClassName}`.trim()}>
                {customContent}
              </div>
            ) : (
              renderTextBlock(true)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;