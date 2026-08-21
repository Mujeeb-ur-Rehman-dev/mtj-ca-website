import React from "react";
import { FaHeart } from "react-icons/fa";
import "./InfoSection.css";
import Button from '../../common/components/buttons/Button';

/**
 * InfoSection
 *
 * Fully prop-driven — this component holds no hardcoded content.
 * Each page that uses it must pass its own title, paragraphs, image, etc.
 *
 * Props:
 *   className          {string}   – extra class on the outer <section>
 *   title              {string}   – heading text (e.g. "WHY GIVE ZAKAT?")
 *   paragraphs         {array}    – rendered in order. Each item is either:
 *                                     - a string  → rendered as a <p> paragraph
 *                                     - an array of strings → rendered as a
 *                                       bulleted <ul> list (e.g. "Each pack includes:")
 *                                   Example:
 *                                     paragraphs={[
 *                                       "Some intro paragraph...",
 *                                       "Each pack includes:",
 *                                       ["Ready-to-eat food", "Hygiene essentials", "Gas stove"],
 *                                       "Closing paragraph...",
 *                                     ]}
 *   buttonText         {string}   – button label (e.g. "Donate Now")
 *   buttonIcon         {node}     – icon shown before the button text (default: <FaHeart />)
 *   onButtonClick      {func}     – click handler for the button (highest priority).
 *                                   Alias pattern used on Hero / CalculatorCta etc.
 *   onDonate           {func}     – legacy alias / fallback click handler.
 *                                   If onButtonClick is provided, onDonate is ignored.
 *   buttonLink         {string}   – alternative to handlers: a URL or "#anchor" to navigate/scroll to
 *   hideButton         {bool}     – hide the button entirely (default: false)
 *   buttonVariant      {string}  – button variant (default: "default")
 *
 *   image              {string}  – path/URL for the right-column stamp photo.
 *                                   If omitted, the right column shows a decorative
 *                                   flourish arrangement instead (see noImageLayout).
 *   imageAlt           {string}  – alt text for the photo
 *   showImage          {bool}    – force-hide the right column even if `image` is passed (default: true)
 *   imageBackground    {string}  – optional background image/color for the stamp
 *                                   frame itself (behind the photo)
 *   showStampFrame     {bool}    – whether to apply the CSS scalloped stamp
 *                                   border + padding around the photo (default: true).
 *                                   Set to false when `image` already has its own
 *                                   border/frame baked into the image file itself,
 *                                   to avoid a double border.
 *
 *   noImageLayout      {string}  – how to fill the right column when there's no
 *                                   `image`: "decorated" (default — text stays left,
 *                                   right column fills with a larger decorative
 *                                   flourish, matching pages like "Families in
 *                                   Lebanon Need You Now") or "centered" (collapses
 *                                   to a single centered text column instead).
 *
 *   sectionBackground  {string}  – optional background image for the whole
 *                                   section (used on pages that have a
 *                                   background image but NO right-side photo)
 *   showDeco           {bool}    – show/hide the decorative flourishes (default: true)
 */
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
  showDeco = true,
}) {
  const hasImage = showImage && !!image;
  const useCenteredLayout = !hasImage && noImageLayout === "centered";
  const useDecoratedColumn = !hasImage && noImageLayout === "decorated";

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

  // corner flourishes — always present in the flow (top-right / bottom-right
  // of the whole section), independent of which right-column layout is used
  const cornerDecos = showDeco && (
    <>
      <div className="wzk__deco wzk__deco--tr" aria-hidden="true">
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 5 C52 20 60 20 62 30 C64 42 52 45 45 40 C38 45 26 42 28 30 C30 20 38 20 45 5Z" fill="#D08A5F"/>
          <path d="M45 40 C50 48 58 50 55 60 C52 68 42 65 40 58 C38 50 40 45 45 40Z" fill="#D08A5F"/>
          <path d="M45 40 C40 48 32 50 35 60 C38 68 48 65 50 58 C52 50 50 45 45 40Z" fill="#D08A5F"/>
          <circle cx="45" cy="38" r="6" fill="#D08A5F"/>
        </svg>
      </div>
      <div className="wzk__deco wzk__deco--br" aria-hidden="true">
        <svg viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 Q30 20 60 35 Q80 45 70 60Z" fill="#D08A5F" opacity="0.9"/>
          <path d="M30 55 Q20 30 45 25 Q65 20 55 50Z" fill="#D08A5F" opacity="0.75"/>
          <circle cx="10" cy="62" r="4" fill="#D08A5F" opacity="0.6"/>
          <circle cx="25" cy="58" r="3" fill="#D08A5F" opacity="0.6"/>
        </svg>
      </div>
    </>
  );

  // Larger decorative arrangement that fills the whole right column when
  // there's no photo (noImageLayout="decorated") — matches pages like
  // "Families in Lebanon Need You Now": a flower + branch pair up top,
  // another flower + branch pair lower down, spread down the column.
  const decoColumn = (
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

  return (
    <section
      className={`wzk${useCenteredLayout ? " wzk--no-image" : ""} ${className}`.trim()}
      style={sectionBackground ? { backgroundImage: `url(${sectionBackground})` } : undefined}
    >
      {cornerDecos}

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

        {useDecoratedColumn && decoColumn}

      </div>
    </section>
  );
}