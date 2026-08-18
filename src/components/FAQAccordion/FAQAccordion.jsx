import React, { useState } from 'react';
import './FAQAccordion.css';
import { faqMap, defaultFaqItems } from '../data/faqData';

/**
 * FAQAccordion
 *
 * Fully prop-driven, reusable accordion for FAQ sections.
 *
 * Datasets are centralised in /components/data/faqData.js so each page
 * can be updated in one place without editing a component or JSX.
 *
 * There are THREE ways to provide data — pick whichever fits the page:
 *
 *  (1) Shortest — use faqKey (picks a pre-defined set from faqData.js):
 *        <FAQAccordion faqKey="medicalCareHealth" />
 *        <FAQAccordion faqKey="medicalCareHealth"
 *                      titleAlign="center" />
 *
 *  (2) Manual import — pass items directly (useful if you first
 *      modify / filter the array in the page component):
 *        import { medicalCareHealthFaqItems } from "../components/data/faqData";
 *        <FAQAccordion items={medicalCareHealthFaqItems} />
 *
 *  (3) Fully inline — one-off custom items right in the JSX:
 *        <FAQAccordion items={[
 *          { question: "...", answer: "..." },
 *        ]} />
 *
 * If BOTH faqKey AND items are provided → items prop wins.
 * If NEITHER is provided → defaults to defaultFaqItems (the original
 * Food Relief set, for 100% backward compatibility with the 11 pages
 * that currently render <FAQAccordion /> with no props).
 *
 * Props:
 *   faqKey               {keyof faqMap | string}
 *          – "home" | "foodRelief" | "medicalCareHealth" | "cleanWater"
 *            | "education" | "kasb" | "hotMeals" | "apnaGhar"
 *            | "volunteer" | "aboutUs" | "default"
 *   items                {Array<{question:string, answer:string|ReactNode}>}
 *          – manual Q&A array (OVERRIDES faqKey when both passed)
 *   title                {string|ReactNode}
 *          – heading shown above the accordion; pass "" or null to hide
 *   defaultOpenIndex     {number}
 *          – which item is open on first render; -1 = all closed
 *   allowMultipleOpen    {bool}
 *          – false (default) = single-open accordion (exclusive); true = any/all can be open
 *   className            {string}
 *          – extra class(es) added to outer <section>
 *   backgroundColor      {string}
 *          – inline background color override (e.g. "#fff9ed")
 *   titleColor           {string}
 *          – inline color override for the heading
 *   titleAlign           {"left"|"center"|"right"}
 *          – desktop heading alignment (mobile stays "center")
 *   iconBgColor          {string}
 *          – background color for the +/− icon square
 *   iconColor            {string}
 *          – color for the +/− icon glyph
 *   questionHoverColor   {string}
 *          – hover color for the question text (defaults to green)
 *   dividerColor         {string}
 *          – color of the bottom divider between items
 */
const FAQAccordion = ({
  faqKey,
  items,
  title = "FREQUENTLY ASKED QUESTIONS",
  defaultOpenIndex = 0,
  allowMultipleOpen = false,
  className = "",
  backgroundColor,
  titleColor,
  titleAlign,
  iconBgColor,
  iconColor,
  questionHoverColor,
  dividerColor,
}) => {
  /* Resolve the final Q&A array:
     items prop → faqMap[faqKey] → defaultFaqItems */
  const resolvedItems =
    Array.isArray(items) && items.length > 0
      ? items
      : faqKey && faqMap[faqKey]
      ? faqMap[faqKey]
      : defaultFaqItems;

  // State: in single-open mode → single index (-1 = closed).
  //        In multi-open mode → Set<number> of open indices.
  const [activeState, setActiveState] = useState(() =>
    allowMultipleOpen
      ? defaultOpenIndex >= 0
        ? new Set([defaultOpenIndex])
        : new Set()
      : defaultOpenIndex
  );

  const isOpen = (index) =>
    allowMultipleOpen ? activeState.has(index) : activeState === index;

  const toggle = (index) => {
    if (allowMultipleOpen) {
      setActiveState((prev) => {
        const next = new Set(prev);
        if (next.has(index)) next.delete(index);
        else next.add(index);
        return next;
      });
    } else {
      setActiveState((prev) => (prev === index ? -1 : index));
    }
  };

  const sectionStyle = {
    ...(backgroundColor ? { backgroundColor } : undefined),
  };

  const titleStyle = {
    ...(titleColor ? { color: titleColor } : undefined),
    ...(titleAlign ? { textAlign: titleAlign } : undefined),
  };

  const itemStyle = (index, arr) => ({
    ...(dividerColor && index !== arr.length - 1
      ? { borderBottomColor: dividerColor }
      : undefined),
  });

  const questionStyle = {
    ...(questionHoverColor ? { '--faq-q-hover': questionHoverColor } : undefined),
  };

  const iconStyle = {
    ...(iconBgColor ? { backgroundColor: iconBgColor } : undefined),
    ...(iconColor ? { color: iconColor } : undefined),
  };

  const showTitle = Boolean(title);

  return (
    <section
      className={`faq-section ${className}`.trim()}
      style={Object.keys(sectionStyle).length ? sectionStyle : undefined}
    >
      <div className="faq-container">
        {showTitle && (
          <h2
            className="faq-title"
            style={Object.keys(titleStyle).length ? titleStyle : undefined}
          >
            {title}
          </h2>
        )}
        <div className="faq-accordion">
          {resolvedItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${isOpen(index) ? 'active' : ''}`}
              style={
                Object.keys(itemStyle(index, resolvedItems)).length
                  ? itemStyle(index, resolvedItems)
                  : undefined
              }
            >
              <button
                type="button"
                className="faq-question"
                style={
                  Object.keys(questionStyle).length ? questionStyle : undefined
                }
                onClick={() => toggle(index)}
                aria-expanded={isOpen(index)}
              >
                <span>{item.question}</span>
                <span
                  className="faq-icon"
                  style={Object.keys(iconStyle).length ? iconStyle : undefined}
                >
                  {isOpen(index) ? '−' : '+'}
                </span>
              </button>
              {isOpen(index) && (
                <div className="faq-answer">
                  {typeof item.answer === 'string' ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
