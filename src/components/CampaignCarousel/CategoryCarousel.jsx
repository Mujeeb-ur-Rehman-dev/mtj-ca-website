import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./CategoryCarousel.css";
import HealthcareImg from "../../assets/img/campaigncarousel/healthcare.webp";
import WaterReliefImg from "../../assets/img/campaigncarousel/water-relief.webp";
import PalestineImg from "../../assets/img/campaigncarousel/palestine-emergency-relief.webp";
import EducationImg from "../../assets/img/campaigncarousel/education.webp";

// Order matches live mtjfoundation.ca homepage & design screenshot: Healthcare, Water Relief, Palestine, Education
const CATEGORIES = [
  { title: "Healthcare", image: HealthcareImg, path: "/medical-care-health" },
  { title: "Water Relief", image: WaterReliefImg, path: "/clean-water" },
  { title: "Palestine Emergency Relief", image: PalestineImg, path: "/palestine-relief" },
  { title: "Education", image: EducationImg, path: "/education" },
];

const VISIBLE = 3;
const AUTOPLAY_MS = 4000; // mobile-only auto-advance interval, matches live site

function Card({ c, onNavigate }) {
  const handleViewClick = (e) => {
    e.stopPropagation();
    if (c?.path) {
      onNavigate(c.path);
    } else {
      console.log(`View ${c.title}`);
    }
  };

  const handleCardClick = () => {
    if (c?.path) {
      onNavigate(c.path);
    }
  };

  return (
    <div className="categories__card" onClick={handleCardClick} role="button" tabIndex={0}>
      <div className="categories__card-overlay"></div>
      <img src={c.image} alt={c.title} loading="lazy" />
      <div className="categories__label">
        <span>{c.title}</span>
        <button
          type="button"
          className="categories__cta-btn"
          aria-label={`View ${c.title}`}
          onClick={handleViewClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <FiArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default function CategoryCarousel({
  className = "",
  title = (
    <>
      READY TO MAKE A DIFFERENCE? <br /> ACT TODAY
    </>
  ),
  description = "Provide food, clean water or emergency relief, where needed most. Your support brings care, relief, and dignity to those struggling every day.",
  categories = CATEGORIES,
  visibleDesktop = VISIBLE,
  visibleMobile = 1,
  useCarousel = true,
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

  const [start, setStart] = useState(0);
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);
  const snapTimeout = useRef(null);
  const autoplayTimer = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Touch gesture support on mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      next();
    } else if (diff < -45) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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

  const autoplayActive = canLoop && autoplayMobile && isMobile;
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
            <Card c={c} key={c.title} onNavigate={navigate} />
          ))}
        </div>
      </section>
    );
  }

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

      <div
        className="categories__viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              <Card c={c} onNavigate={navigate} />
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="categories__controls">
          <button type="button" onClick={prev} aria-label="Previous">
            <FiArrowLeft size={18} />
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
          <button type="button" onClick={next} aria-label="Next">
            <FiArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
