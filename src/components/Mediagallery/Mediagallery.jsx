import React, { useEffect, useRef, useState } from "react";
import "./Mediagallery.css";

const DESKTOP_VISIBLE = 2;
const MOBILE_VISIBLE = 1;

/**
 * MediaGallery
 *
 * Fully prop-driven infinite-loop image slider — 2 images visible at
 * once on desktop, 1 on mobile. No hardcoded content; each page that
 * uses this must pass its own title and images.
 *
 * Props:
 *   title    {string} – section heading (e.g. "MEDIA GALLERY")
 *   images   {Array}  – array of { src, alt } objects
 *   showDots {bool}   – show/hide the dot pagination (default: true)
 */
export default function MediaGallery({
  title,
  images = [],
  showDots = true,
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
  const total = images.length;
  const canLoop = total > visibleCount;

  // "start" = index (0..total-1) of the left-most visible image — this
  // is what the dots reflect, and it always wraps so every dot is
  // reachable. "index" = position inside the cloned track
  // (start + visibleCount, to account for the head clones).
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

  const step = (dir) => {
    setAnimate(true);
    setIndex((i) => i + dir);
    setStart((s) => (s + dir + total) % total);

    clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      setAnimate(false);
      setIndex((i) => {
        if (i >= visibleCount + total) return i - total;
        if (i < visibleCount) return i + total;
        return i;
      });
    }, 520);
  };

  const prev = () => step(-1);
  const next = () => step(1);

  const goTo = (i) => {
    clearTimeout(snapTimeout.current);
    setAnimate(true);
    setIndex(visibleCount + i);
    setStart(i);
  };

  if (!canLoop) {
    return (
      <section className="mg" ref={sectionRef}>
        <h2 className="mg__title">{title}</h2>
        <div className="mg__static-grid">
          {images.map((img, i) => (
            <div className="mg__slide-inner" key={i}>
              <img src={img.src} alt={img.alt || ""} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  const head = images.slice(-visibleCount);
  const tail = images.slice(0, visibleCount);
  const track = [...head, ...images, ...tail];
  const trackCount = track.length;

  return (
    <section className="mg" ref={sectionRef}>
      <h2 className="mg__title">{title}</h2>

      <div className="mg__viewport">
        <div
          className="mg__track"
          style={{
            width: `${(trackCount / visibleCount) * 100}%`,
            transform: `translateX(-${index * (100 / trackCount)}%)`,
            transition: animate ? "transform 0.5s ease" : "none",
          }}
        >
          {track.map((img, i) => (
            <div
              className="mg__slide"
              key={`${img.src}-${i}`}
              style={{ width: `${100 / trackCount}%` }}
            >
              <div className="mg__slide-inner">
                <img src={img.src} alt={img.alt || ""} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mg__controls">
        <button type="button" className="mg__arrow" onClick={prev} aria-label="Previous">
          ←
        </button>

        {showDots && (
          <div className="mg__dots">
            {images.map((img, i) => (
              <button
                type="button"
                key={`${img.src}-dot-${i}`}
                className={`mg__dot${i === start ? " mg__dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        <button type="button" className="mg__arrow" onClick={next} aria-label="Next">
          →
        </button>
      </div>
    </section>
  );
}