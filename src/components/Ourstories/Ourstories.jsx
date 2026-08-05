import React, { useState } from "react";
import "./Ourstories.css";

/**
 * OurStories
 *
 * Fully prop-driven — this component holds no hardcoded content.
 * A scalloped "stamp border" card (background image) containing a
 * title, filter tabs, a grid of blog/story post cards, and optional
 * "Read More" (per card) + "Show More" (grid bottom) CTAs.
 *
 * Props:
 *   title              {string}   – heading text (e.g. "OUR STORIES")
 *   tabs               {string[]} – filter tab labels (e.g. ["All","Blogs","News"])
 *   activeTab          {string}   – which tab is currently selected (controlled)
 *   onTabChange        {func}     – called with the tab label when a tab is clicked
 *   posts              {Array}    – [{ image, imageAlt, title, author, date, excerpt, link, readMoreText }]
 *   borderImage        {string}   – path/URL for the scalloped stamp-border background image
 *   showReadMore       {bool}     – show "Read More →" under each post card (default: true)
 *   readMoreText       {string}   – override per-card CTA label (default: "Read More")
 *   showMoreButton     {bool}     – show "Show More" button at the bottom of the grid (default: true)
 *   showMoreText       {string}   – label for the load-more button (default: "Show More")
 *   onShowMore         {func}     – called when the "Show More" button is clicked
 */
export default function OurStories({
  title,
  tabs = [],
  activeTab,
  onTabChange,
  posts = [],
  borderImage,
  showReadMore = true,
  readMoreText = "Read More",
  showMoreButton = true,
  showMoreText = "Show More",
  onShowMore,
}) {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0] || "");
  const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;

  const handleTabClick = (tab) => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalActiveTab(tab);
    }
  };

  const goToLink = (link, e) => {
    if (e) e.stopPropagation();
    if (!link) return;
    if (link.startsWith("#")) {
      const target = document.querySelector(link);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = link;
  };

  return (
    <section className="ost">
      <div
        className="ost__stamp"
        style={borderImage ? { backgroundImage: `url(${borderImage})` } : undefined}
      >
        <div className="ost__inner">
          <h2 className="ost__title">{title}</h2>

          {tabs.length > 0 && (
            <div className="ost__tabs">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab}
                  className={`ost__tab${tab === currentTab ? " ost__tab--active" : ""}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          <div className="ost__grid">
            {posts.map((post, i) => (
              <div
                className="ost__card"
                key={i}
                onClick={() => goToLink(post.link)}
                role={post.link ? "button" : undefined}
                tabIndex={post.link ? 0 : undefined}
              >
                <div className="ost__card-img-wrap">
                  <img src={post.image} alt={post.imageAlt || post.title || ""} />
                </div>
                <h3 className="ost__card-title">{post.title}</h3>
                <p className="ost__card-meta">
                  {post.date}
                </p>
                {post.excerpt && (
                  <p className="ost__card-excerpt">{post.excerpt}</p>
                )}
                {showReadMore && post.link && (
                  <a
                    href={post.link}
                    className="ost__card-readmore"
                    onClick={(e) => goToLink(post.link, e)}
                  >
                    {post.readMoreText || readMoreText}
                    <span className="ost__card-readmore-arrow" aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {showMoreButton && (
            <div className="ost__showmore-wrap">
              <button
                type="button"
                className="ost__showmore-btn"
                onClick={onShowMore}
              >
                {showMoreText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
