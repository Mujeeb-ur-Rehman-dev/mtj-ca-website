import React, { useEffect, useRef, useState, useCallback } from "react";
import Button from "../../common/components/buttons/Button";
import "./ImpactCards.css";
import { impactCardsData } from "../data/impactCardsData";
const DESKTOP_VISIBLE = 3;
const MOBILE_VISIBLE = 1;

export default function ImpactCards({
  title = "",
  cards = impactCardsData,
  backgroundColor = "#22582d",
  autoplay = true,
  autoplayInterval = 4000,
  className = "",
  isCarousel = true,
  onDonate = null,
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

  const [start, setStart] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const snapTimeout = useRef(null);
  const autoplayTimer = useRef(null);
  const pauseTimeout = useRef(null);
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

  const handleCardDonate = (card) => {
    if (onDonate) {
      onDonate(card);
      return;
    }
    goToLink(card.donateLink || "#donate");
  };

  const resetToStart = useCallback(() => {
    clearTimeout(snapTimeout.current);
    setAnimate(false);
    setStart(0);
    setIndex(visibleCount);
    requestAnimationFrame(() => setAnimate(true));
  }, [visibleCount]);

  // reset cleanly whenever the visible count or the list itself changes,
  // AND on every fresh mount (e.g. navigating back to this page) —
  // otherwise a stale index left over from before could stay stuck
  useEffect(() => {
    if (!isCarousel) return;
    resetToStart();
  }, [visibleCount, total, isCarousel, resetToStart]);

  // safety net for SPA routing setups where this section doesn't fully
  // unmount/remount between pages (e.g. it's kept alive in a shared
  // layout) — re-sync to a clean state every time it scrolls back into
  // view, so it can never stay permanently stuck after navigating away
  useEffect(() => {
    if (!isCarousel) return;
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
  }, [isCarousel, resetToStart]);

  useEffect(() => () => clearTimeout(snapTimeout.current), []);

  // one card at a time; wraps forever in both directions (never "stops")
  const step = useCallback((dir) => {
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
  }, [total, visibleCount]);

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (!autoplay || isAutoplayPaused || !isCarousel) return;
    
    clearTimeout(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      step(1);
    }, autoplayInterval);
  }, [autoplay, autoplayInterval, isAutoplayPaused, isCarousel, step]);

  const pauseAutoplay = () => {
    clearTimeout(autoplayTimer.current);
    clearTimeout(pauseTimeout.current);
    setIsAutoplayPaused(true);

    // Resume autoplay after 5 seconds of inactivity
    pauseTimeout.current = setTimeout(() => {
      setIsAutoplayPaused(false);
    }, 5000);
  };

  // Start autoplay on mount and when settings change
  useEffect(() => {
    if (!isCarousel) return;
    startAutoplay();
    return () => {
      clearTimeout(autoplayTimer.current);
      clearTimeout(pauseTimeout.current);
    };
  }, [isCarousel, startAutoplay]);

  // Resume autoplay after pause expires
  useEffect(() => {
    if (!isCarousel) return;
    if (!isAutoplayPaused && autoplay) {
      startAutoplay();
    }
  }, [isAutoplayPaused, autoplay, isCarousel, startAutoplay]);

  const prev = () => {
    pauseAutoplay();
    step(-1);
  };
  const next = () => {
    pauseAutoplay();
    step(1);
  };

  const goTo = (i) => {
    pauseAutoplay();
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
    <section className={`zi ${className}`.trim()} ref={sectionRef} style={{ background: backgroundColor }}>
      {/* ── Section heading ── */}
      <h2 className="zi__title">{title}</h2>

      {isCarousel ? (
        <>
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
                    {card.image && (
                      <div className="zi__card-image-wrap">
                        <img src={card.image} alt={card.title} className="zi__card-image" />
                      </div>
                    )}
                    {/* card inner keeps content away from scalloped edges */}
                    <div className="zi__card-inner">
                      <h3 className="zi__card-name">{card.title}</h3>
                      <p className="zi__card-amount">{card.amount}</p>
                      <p className="zi__card-desc">{card.description}</p>
                      <Button
                        text="Donate Now"
                        onClick={() => handleCardDonate(card)}
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
        </>
      ) : (
        /* ── Static Grid (Non-carousel mode) ── */
        <div className="zi__static-grid">
          {cards.map((card, i) => (
            <div className="zi__card" key={`${card.title}-${i}`}>
              {card.image && (
                <div className="zi__card-image-wrap">
                  <img src={card.image} alt={card.title} className="zi__card-image" />
                </div>
              )}
              <div className="zi__card-inner">
                <h3 className="zi__card-name">{card.title}</h3>
                <p className="zi__card-amount">{card.amount}</p>
                <p className="zi__card-desc">{card.description}</p>
                <Button
                  text="Donate Now"
                  onClick={() => handleCardDonate(card)}
                  size="md"
                  wrapperClass="nav-btn-group hero-donate-btn-group"
                  buttonClass="btn btn-donate-animated hero-donate-btn"
                  variant="default"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
