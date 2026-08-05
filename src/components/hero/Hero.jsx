import Button from '../../common/components/buttons/Button';
import './Hero.css'
import mobileBackground from '../../assets/img/home/mbl-background.png'

const Hero = ({
  className = "",

  // Background
  backgroundImage,

  // Right-side image (desktop). If not provided, the right column
  // is simply not rendered and the left column takes the full width.
  heroImage,
  showRightImage = true, // set false to force-hide even if heroImage is passed

  // Mobile-only image — ALWAYS pass this separately for the mobile view.
  // It is fully independent from `heroImage` (desktop). If omitted, a
  // generic default background is used — it does NOT fall back to
  // `heroImage`, since desktop hero images are usually the wrong
  // aspect ratio / crop for the mobile stamp-border layout.
  mobileImage,

  // Left column text content — ignored if `customContent` is provided
  title,
  description,

  // Primary button (e.g. "Donate Now")
  buttonText,
  buttonLink,
  hideButton = false,
  buttonVariant = "default",

  // Optional second button (e.g. "Zakat Now") — only rendered if
  // either secondaryButtonText or secondaryButtonLink is provided
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonVariant = "default",
  secondaryButtonBgImage,
  secondaryButtonHoverBgImage,

  // Fully custom left-column content — e.g. a donation form.
  // When provided, this REPLACES title/description/buttons entirely.
  customContent,

  // Optional wrapper class for page-specific custom content layouts.
  customContentClassName = "",

  // Renders BELOW the title, in place of description + buttons
  // (title stays visible). Use this for pages like "Lebanon Emergency"
  // where a donation card (amount tiers, one-time/monthly tabs, etc.)
  // appears under the heading instead of the usual description + button.
  cardContent,

  // By default, `cardContent` REPLACES the description (matches pages
  // like "Lebanon Emergency"). Set this to true on pages like "Apna
  // Ghar" that need title + description + card all shown together —
  // the description then renders above the card instead of being hidden.
  showDescriptionWithCard = false,

  // Some campaign pages (e.g. "Lebanon Emergency") use a heavier,
  // bold green title instead of the default thin navy homepage style.
  boldTitle = false,

  // Optional per-page override for the title's color (e.g. "#FFFFFF"
  // for a page like "Apna Ghar" where the hero sits over a dark photo
  // background and needs a white title instead of the usual green).
  // Applied as an inline style, so when omitted every other page keeps
  // its existing color from the CSS exactly as before — nothing else changes.
  titleColor,

  // Same idea, for the description paragraph (e.g. "#FFFFFF" on the
  // same dark-background pages). Omitted = untouched on every other page.
  descriptionColor,

  children,

  // Mobile-specific button placement
  hideMobileButton = false,
  showMobileButtonAboveText = false,
}) => {
  const resolvedMobileImage = mobileImage || mobileBackground;
  const hasRightImage = showRightImage && !!heroImage;
  const hasSecondaryButton = !!(secondaryButtonText || secondaryButtonLink);
  const titleClassName = `hero-title${boldTitle ? " hero-title--bold" : ""}`;
  const titleStyle = titleColor ? { color: titleColor } : undefined;
  const descriptionStyle = descriptionColor ? { color: descriptionColor } : undefined;
  const isEmergencyStyle = boldTitle || !!cardContent;
  const textSectionClassName = `hero-text-section${isEmergencyStyle ? " hero-text-section--emergency" : ""}${customContent ? " hero-text-section--custom" : ""}`;

  const goTo = (link) => {
    if (!link) return;

    if (link.startsWith("#")) {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

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

  const renderTextBlock = () => (
    <>
      <h1 className={titleClassName} style={titleStyle}>{title}</h1>
      {cardContent ? (
        <>
          {showDescriptionWithCard && description && (
            <p className="hero-description" style={descriptionStyle}>{description}</p>
          )}
          <div className="hero-card-wrapper">{cardContent}</div>
        </>
      ) : (
        <>
          <p className="hero-description" style={descriptionStyle}>{description}</p>
          {renderButtons()}
        </>
      )}
    </>
  );

  return (
    <section
      className={`hero-section ${className}`.trim()}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Navbar/Children */}
      {children}

      {/* Desktop Hero Content */}
      <div className="hero-content hero-content-desktop">
        <div className={`hero-content-inner${!hasRightImage ? " hero-content-inner--no-image" : ""}`}>
          {/* Left Text/Form Section */}
          <div className={textSectionClassName}>
            {customContent ? (
              <div className={`hero-custom-content ${customContentClassName}`.trim()}>
                {customContent}
              </div>
            ) : (
              renderTextBlock()
            )}
          </div>

          {/* Right Image Section — only rendered when a heroImage is given */}
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
          {/* Hero Image with Stamp Border */}
          <div className="hero-image-wrapper">
            <div className="hero-stamp-border">
              <div className="hero-side-borders"></div>
              <img src={resolvedMobileImage} alt="" className="hero-main-image" />
            </div>
          </div>

          {!customContent && !cardContent && showMobileButtonAboveText && !hideMobileButton && (
            <div className="hero-mobile-button-row">
              {renderButtons()}
            </div>
          )}

          {/* Text/Form Section */}
          <div className="hero-text-section">
            {customContent ? (
              <div className={`hero-custom-content ${customContentClassName}`.trim()}>
                {customContent}
              </div>
            ) : (
              <>
                {/* Mobile intentionally does NOT apply titleStyle/descriptionStyle —
                    the mobile hero background is always white/cream (see hero.css),
                    so a white override color (used e.g. on Apna Ghar for the dark
                    desktop photo background) would be invisible here. Mobile keeps
                    its normal green/black CSS colors regardless of what's passed in. */}
                <h1 className={titleClassName}>{title}</h1>
                {cardContent ? (
                  /* Mobile always shows title + card only when cardContent is
                     present (showDescriptionWithCard is a desktop-only behavior) —
                     keeps the mobile card compact instead of pushing it down. */
                  <div className="hero-card-wrapper">{cardContent}</div>
                ) : (
                  <>
                    <p className="hero-description">{description}</p>
                    {!hideMobileButton && !showMobileButtonAboveText && renderButtons()}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero