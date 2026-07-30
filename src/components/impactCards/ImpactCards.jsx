import React, { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Button from "../../common/components/buttons/Button";
import "./ImpactCards.css";

const DEFAULT_CARDS = [
  {
    title: "Clean Water",
    amount: "$450",
    description:
      "Help bring clean, safe water to families who don't have reliable access. Your Sadaqah supports water solutions that protect health and reduce illness.",
    donateLink: "#donate",
  },
  {
    title: "Medical Support (AAS)",
    amount: "$75",
    description:
      "Support vital medical tests and care through the AAS diagnostic program. Your Zakat helps patients get early diagnosis and treatment at the right time.",
    donateLink: "#donate",
  },
  {
    title: "Food Relief",
    amount: "$50",
    description:
      "Provide a month's worth of food to a family facing hunger. Your Zakat helps put meals on the table for those who are struggling to get by.",
    donateLink: "#donate",
  },
  {
    title: "Education",
    amount: "$100",
    description:
      "Give a child the gift of education. Your Zakat funds school supplies, tuition, and scholarships for children who have no other way to learn.",
    donateLink: "#donate",
  },
  {
    title: "Emergency Relief",
    amount: "$200",
    description:
      "Deliver urgent relief to families hit by disaster or conflict. Your Zakat provides food, shelter kits, and essentials to those in immediate crisis.",
    donateLink: "#donate",
  },
];

const DESKTOP_VISIBLE = 3;
const MOBILE_VISIBLE = 1;

const getVisibleCount = () => (window.innerWidth <= 768 ? MOBILE_VISIBLE : DESKTOP_VISIBLE);

/**
 * ZakatImpact / ImpactCards
 *
 * Props:
 *   title           {string} – section heading (optional override)
 *   cards           {Array}  – array of { title, amount, description, donateLink }
 *   backgroundColor {string} – section background color (default: "#22582d",
 *                               the original dark green). Pass any color/hex
 *                               to reuse this same component on other pages
 *                               with a different section background — e.g.
 *                               "#0B212A" for the dark navy used on the
 *                               Emergency Relief - Lebanon page.
 */
export default function ImpactCards({
  title = "CHOOSE WHERE YOUR ZAKAT MAKES AN IMPACT",
  cards = DEFAULT_CARDS,
  backgroundColor = "#22582d",
}) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  const total = cards.length;

  // "start" = index (0..total-1) of the left-most visible card — this is
  // what the dots reflect, and it always wraps so every dot is reachable.
  // "index" = position inside the cloned track (start + visibleCount,
  // to account for the head clones). It only ever moves by 1 per click,
  // so only one card slides in/out instead of the whole set changing.
  const [start, setStart] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);
  const snapTimeout = useRef(null);
  const sectionRef = useRef(null);

  const goToLink = (link) => {
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

  const resetToStart = () => {
    clearTimeout(snapTimeout.current);
    setAnimate(false);
    setStart(0);
    setIndex(visibleCount);
    requestAnimationFrame(() => setAnimate(true));
  };

  // reset cleanly whenever the visible count or the list itself changes,
  // AND on every fresh mount (e.g. navigating back to this page) —
  // otherwise a stale index left over from before could stay stuck
  useEffect(() => {
    resetToStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, total]);

  // safety net for SPA routing setups where this section doesn't fully
  // unmount/remount between pages (e.g. it's kept alive in a shared
  // layout) — re-sync to a clean state every time it scrolls back into
  // view, so it can never stay permanently stuck after navigating away
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) resetToStart();
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, total]);

  useEffect(() => () => clearTimeout(snapTimeout.current), []);

  // one card at a time; wraps forever in both directions (never "stops")
  const step = (dir) => {
    setAnimate(true);
    setIndex((i) => i + dir);
    setStart((s) => (s + dir + total) % total);

    // guaranteed snap-back — doesn't rely on the transitionend event,
    // which can silently fail to fire right after a remount
    clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      setAnimate(false);
      setIndex((i) => {
        if (i >= visibleCount + total) return i - total;
        if (i < visibleCount) return i + total;
        return i;
      });
    }, 520); // CSS transition is 0.5s — small buffer added
  };

  const prev = () => step(-1);
  const next = () => step(1);

  const goTo = (i) => {
    clearTimeout(snapTimeout.current);
    setAnimate(true);
    setIndex(visibleCount + i);
    setStart(i);
  };

  // seamless infinite loop: clone the last N cards onto the front and
  // the first N cards onto the back, so sliding past either end always
  // has a real-looking card to slide into — no dead stop at the edges
  const head = cards.slice(-visibleCount);
  const tail = cards.slice(0, visibleCount);
  const track = [...head, ...cards, ...tail];
  const trackCount = track.length;

  return (
    <section className="zi" ref={sectionRef} style={{ background: backgroundColor }}>
      {/* ── Section heading ── */}
      <h2 className="zi__title">{title}</h2>

      {/* ── Card grid with sliding ── */}
      <div className="zi__grid-container">
        <div
          className="zi__grid"
          style={{
            width: `${(trackCount / visibleCount) * 100}%`,
            transform: `translateX(-${index * (100 / trackCount)}%)`,
            transition: animate ? "transform 0.5s ease" : "none",
          }}
        >
          {track.map((card, i) => (
            <div
              className="zi__slide"
              key={`${card.title}-${i}`}
              style={{ width: `${100 / trackCount}%` }}
            >
              <div className="zi__card">
                {/* card inner keeps content away from scalloped edges */}
                <div className="zi__card-inner">
                  <h3 className="zi__card-name">{card.title}</h3>
                  <p className="zi__card-amount">{card.amount}</p>
                  <p className="zi__card-desc">{card.description}</p>
                  <Button
                    text="Donate Now"
                    onClick={() => goToLink(card.donateLink || "#donate")}
                    size="md"
                    wrapperClass="nav-btn-group hero-donate-btn-group"
                    buttonClass="btn btn-donate-animated hero-donate-btn"
                    variant="default"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pagination ── */}
      <div className="zi__controls">
        <button
          className="zi__arrow"
          onClick={prev}
          aria-label="Previous"
        >
          ←
        </button>

        <div className="zi__dots">
          {cards.map((c, i) => (
            <span
              key={c.title}
              className={`zi__dot ${i === start ? "zi__dot--active" : ""}`}
              onClick={() => goTo(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to ${c.title}`}
            />
          ))}
        </div>

        <button
          className="zi__arrow"
          onClick={next}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}