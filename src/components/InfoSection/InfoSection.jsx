import React from "react";
import { FaHeart } from "react-icons/fa";
import "./InfoSection.css";
import Button from '../../common/components/buttons/Button';

export default function InfoSection({
  className = "",
  title,
  paragraphs = [],
  buttonText,
  buttonIcon = <FaHeart className="wzk__btn-icon" />,
  onButtonClick,
  onDonate,
  buttonLink,
  hideButton = false,
  buttonVariant = "default",

  image,
  imageAlt,
  showImage = true,
  imageBackground,
  showStampFrame = true,

  noImageLayout = "decorated",

  sectionBackground,
  showDeco = false,
}) {
  const hasImage = showImage && !!image;
  const useCenteredLayout = !hasImage && noImageLayout === "centered";
  const useDecoratedColumn = !hasImage && noImageLayout === "decorated";
  const decoColumn = showDeco && useDecoratedColumn && (
    <div className="wzk__deco-column" aria-hidden="true">
      <svg className="wzk__deco-column-piece wzk__deco-column-piece--1" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 5 C52 20 60 20 62 30 C64 42 52 45 45 40 C38 45 26 42 28 30 C30 20 38 20 45 5Z" fill="#D08A5F"/>
        <path d="M45 40 C50 48 58 50 55 60 C52 68 42 65 40 58 C38 50 40 45 45 40Z" fill="#D08A5F"/>
        <path d="M45 40 C40 48 32 50 35 60 C38 68 48 65 50 58 C52 50 50 45 45 40Z" fill="#D08A5F"/>
        <path d="M45 40 C55 38 62 30 70 35 C77 40 72 50 63 48 C55 46 48 44 45 40Z" fill="#D08A5F"/>
        <circle cx="45" cy="38" r="6" fill="#D08A5F"/>
      </svg>
      <svg className="wzk__deco-column-piece wzk__deco-column-piece--2" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 Q60 5 90 35 Q120 65 135 100" stroke="#D08A5F" strokeWidth="3" fill="none"/>
        <ellipse cx="60" cy="22" rx="14" ry="9" fill="#D08A5F" transform="rotate(-20 60 22)"/>
        <ellipse cx="85" cy="40" rx="13" ry="8" fill="#D08A5F" transform="rotate(-5 85 40)"/>
        <ellipse cx="105" cy="60" rx="13" ry="8" fill="#D08A5F" transform="rotate(15 105 60)"/>
        <ellipse cx="122" cy="82" rx="12" ry="8" fill="#D08A5F" transform="rotate(30 122 82)"/>
      </svg>
      <svg className="wzk__deco-column-piece wzk__deco-column-piece--3" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5 Q15 40 30 65 Q45 90 40 105" stroke="#D08A5F" strokeWidth="3" fill="none"/>
        <ellipse cx="22" cy="30" rx="12" ry="8" fill="#D08A5F" transform="rotate(70 22 30)"/>
        <ellipse cx="32" cy="55" rx="13" ry="8" fill="#D08A5F" transform="rotate(55 32 55)"/>
        <ellipse cx="40" cy="82" rx="12" ry="8" fill="#D08A5F" transform="rotate(40 40 82)"/>
      </svg>
      <svg className="wzk__deco-column-piece wzk__deco-column-piece--4" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M45 5 C52 20 60 20 62 30 C64 42 52 45 45 40 C38 45 26 42 28 30 C30 20 38 20 45 5Z" fill="#D08A5F"/>
        <path d="M45 40 C50 48 58 50 55 60 C52 68 42 65 40 58 C38 50 40 45 45 40Z" fill="#D08A5F"/>
        <path d="M45 40 C40 48 32 50 35 60 C38 68 48 65 50 58 C52 50 50 45 45 40Z" fill="#D08A5F"/>
        <circle cx="45" cy="38" r="6" fill="#D08A5F"/>
      </svg>
    </div>
  );

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

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }
    if (onDonate) {
      onDonate();
      return;
    }
    goTo(buttonLink);
  };

  return (
    <section
      className={`wzk${useCenteredLayout ? " wzk--no-image" : ""} ${className}`.trim()}
      style={sectionBackground ? { backgroundImage: `url(${sectionBackground})` } : undefined}
    >

      <div className="wzk__inner">

        {/* ── LEFT: text content ── */}
        <div className="wzk__text">
          <h2 className="wzk__title">{title}</h2>

          {paragraphs.map((p, i) =>
            Array.isArray(p) ? (
              <ul className="wzk__list" key={i}>
                {p.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="wzk__body" key={i}>{p}</p>
            )
          )}

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
        </div>

        {/* ── RIGHT: postage stamp photo, decorated filler, or nothing ── */}
        {hasImage && (
          <div className="wzk__stamp-wrap">
            <div
              className={`wzk__stamp${!showStampFrame ? " wzk__stamp--plain" : ""}`}
              style={imageBackground ? { backgroundImage: `url(${imageBackground})` } : undefined}
            >
              <img className="wzk__photo" src={image} alt={imageAlt} />
            </div>
          </div>
        )}

        {decoColumn}

      </div>
    </section>
  );
}