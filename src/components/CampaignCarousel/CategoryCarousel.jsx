import React, { useEffect, useRef, useState } from "react";
import "./CategoryCarousel.css";
import WaterReliefImg from "../../assets/img/campaigncarousel/water-relief.webp";
import PalestineImg from "../../assets/img/campaigncarousel/palestine-emergency-relief.webp";
import EducationImg from "../../assets/img/campaigncarousel/education.webp";
import HealthcareImg from "../../assets/img/campaigncarousel/healthcare.webp";

const CATEGORIES = [
  { title: "Water Relief", image: WaterReliefImg },
  { title: "Palestine Emergency Relief", image: PalestineImg },
  { title: "Education", image: EducationImg },
  { title: "Healthcare", image: HealthcareImg },
];

const VISIBLE = 3;
const AUTOPLAY_MS = 4000; // mobile-only auto-advance interval, matches live site

function Card({ c }) {
  const handleViewClick = () => {
    // Placeholder for actual navigation logic
    console.log(`View ${c.title}`);
  };

  return (
    <div className="categories__card">
      <div className="categories__card-overlay"></div>
      <img src={c.image} alt={c.title} />
      <div className="categories__label">
        <span>{c.title}</span>
        <button
          aria-label={`View ${c.title}`}
          onClick={handleViewClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function CategoryCarousel({
  className = "",
  title = (
    <>
      Ready to Make a Difference? <br /> Act Today
    </>
  ),
  description = "Provide food, clean water or emergency relief, where needed most. Your support brings care, relief, and dignity to those struggling every day.",
  categories = CATEGORIES,
  visibleDesktop = VISIBLE,
  visibleMobile = 1,
  useCarousel = true,
  // the live site runs a single-card carousel with auto-play on mobile —
  // this now defaults to true so mobile always gets that behaviour
  // instead of falling back to a stacked static list
  mobileCarousel = true,
  showControls = true,
  autoplayMobile = true,
  sectionStyle = {},
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

  const isCarouselActive = isMobile ? mobileCarousel : useCarousel;
  const visibleCount = isMobile ? visibleMobile : visibleDesktop;
  const total = categories.length;
  const canLoop = isCarouselActive && total > visibleCount;

  // "start" = index (0..total-1) of the left-most visible card — this is
  // what the dots reflect, and it always wraps so every dot is reachable.
  // "index" = position inside the cloned track (start + visibleCount,
  // to account for the head clones). It only ever moves by 1 per click,
  // so only one card slides in/out instead of the whole set changing.
  const [start, setStart] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);
  const snapTimeout = useRef(null);
  const autoplayTimer = useRef(null);
  const sectionRef = useRef(null);

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

  // mobile-only auto-advance, matching the live site — pauses/restarts
  // cleanly whenever the person manually navigates (start changes)
  const autoplayActive = canLoop && isMobile && autoplayMobile;
  useEffect(() => {
    if (!autoplayActive) return;
    autoplayTimer.current = setInterval(() => {
      step(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(autoplayTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayActive, start, total, visibleCount]);

  if (!canLoop) {
    return (
      <section
        className={`categories ${className}`.trim()}
        ref={sectionRef}
        style={sectionStyle}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="categories__grid">
          {categories.map((c) => (
            <Card c={c} key={c.title} />
          ))}
        </div>
      </section>
    );
  }

  // seamless infinite loop: clone the last N cards onto the front and
  // the first N cards onto the back, so sliding past either end always
  // has a real-looking card to slide into — no dead stop at the edges
  const head = categories.slice(-visibleCount);
  const tail = categories.slice(0, visibleCount);
  const track = [...head, ...categories, ...tail];
  const trackCount = track.length;

  return (
    <section
      className={`categories ${className}`.trim()}
      ref={sectionRef}
      style={sectionStyle}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="categories__viewport">
        <div
          className="categories__track"
          style={{
            width: `${(trackCount / visibleCount) * 100}%`,
            transform: `translateX(-${index * (100 / trackCount)}%)`,
            transition: animate ? "transform 0.5s ease" : "none",
          }}
        >
          {track.map((c, i) => (
            <div
              className="categories__slide"
              key={`${c.title}-${i}`}
              style={{ width: `${100 / trackCount}%` }}
            >
              <Card c={c} />
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="categories__controls">
          <button onClick={prev} aria-label="Previous">
            ←
          </button>
          <div className="categories__dots">
            {categories.map((c, i) => (
              <span
                key={c.title}
                className={i === start ? "active" : ""}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
                aria-label={`Go to ${c.title}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next">
            →
          </button>
        </div>
      )}
    </section>
  );
}