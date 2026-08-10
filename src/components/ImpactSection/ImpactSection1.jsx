import React, { useEffect, useRef, useState } from "react";
import "./ImpactSection1.css";
import impactBgImage from "../../assets/img/impacts/background/background.png";
import { impactSectionData } from "../data/impactSectionData";

// how many stat cards are visible at once per breakpoint — matches the
// live site's 4 / 2 / 1 column layout at desktop / tablet / mobile
function getVisibleCount(width, desktopVisibleCount = 4) {
  if (width <= 767) return 1;
  if (width <= 960) return 2;
  return desktopVisibleCount;
}

function StatCard({ s }) {
  return (
    <div className="impact__item">
      <img
        className="impact__icon"
        src={s.icon}
        alt=""
        width="156"
        height="165"
      />
      <strong className="impact__value">{s.value}</strong>
      <p className="impact__label">{s.label}</p>
    </div>
  );
}

export default function ImpactSection1({
  className = "",
  stats = impactSectionData,
  showDots = true,
  desktopVisibleCount = 4,
  eyebrow = "Our Work For Humanity",
  title = "THE IMPACT OF YOUR DONATIONS",
}) {
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== "undefined" ? getVisibleCount(window.innerWidth, desktopVisibleCount) : desktopVisibleCount
  );

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount(window.innerWidth, desktopVisibleCount));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopVisibleCount]);

  const total = stats.length;

  // "start" = index (0..total-1) of the left-most visible card — this is
  // what the dots reflect (one dot per card), and it always wraps so
  // every dot is reachable and the arrows never stop in either direction.
  // "index" = position inside the cloned track (start + visibleCount).
  const [start, setStart] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);
  const snapTimeout = useRef(null);
  const sectionRef = useRef(null);

  const resetToStart = () => {
    clearTimeout(snapTimeout.current);
    setAnimate(false);
    setStart(0);
    setIndex(visibleCount);
    requestAnimationFrame(() => setAnimate(true));
  };

  // reset cleanly whenever the visible count changes (breakpoint switch)
  // or on a fresh mount, so a stale index can never stay stuck
  useEffect(() => {
    resetToStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, total]);

  // safety net for SPA routing setups where this section doesn't fully
  // unmount/remount between pages — re-sync whenever it scrolls back
  // into view, so it can never stay permanently stuck
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
  const head = stats.slice(-visibleCount);
  const tail = stats.slice(0, visibleCount);
  const track = [...head, ...stats, ...tail];
  const trackCount = track.length;

  return (
    <section className={`impact ${className}`.trim()} ref={sectionRef}>
      <div className="impact__stamp">
        {/* scalloped maroon stamp background image */}
        <img
          className="impact__stamp-bg"
          src={impactBgImage}
          alt=""
          aria-hidden="true"
        />

        <div className="impact__content">
          <div className="impact__header">
            <p className="impact__eyebrow">{eyebrow}</p>
            <h2 className="impact__title">{title}</h2>
          </div>

          <div className="impact__viewport">
            <div
              className="impact__track"
              style={{
                width: `${(trackCount / visibleCount) * 100}%`,
                transform: `translateX(-${index * (100 / trackCount)}%)`,
                transition: animate ? "transform 0.5s ease" : "none",
              }}
            >
              {track.map((s, i) => (
                <div
                  className="impact__slide"
                  key={`${s.label}-${i}`}
                  style={{ width: `${100 / trackCount}%` }}
                >
                  <StatCard s={s} />
                </div>
              ))}
            </div>
          </div>

          <div className="impact__controls">
            <button
              type="button"
              className="impact__arrow"
              onClick={prev}
              aria-label="Previous"
            >
              ←
            </button>

            {showDots && (
              <div className="impact__dots">
                {stats.map((s, i) => (
                  <button
                    type="button"
                    key={s.label}
                    className={`impact__dot${i === start ? " impact__dot--active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to stat ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              className="impact__arrow"
              onClick={next}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}