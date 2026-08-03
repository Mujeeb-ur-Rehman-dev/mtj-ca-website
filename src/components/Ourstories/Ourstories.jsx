import React, { useState } from "react";
import "./Ourstories.css";

/**
 * OurStories
 *
 * Fully prop-driven — this component holds no hardcoded content.
 * A scalloped "stamp border" card (background image) containing a
 * title, filter tabs, and a grid of blog/story post cards.
 *
 * Props:
 *   title          {string}  – heading text (e.g. "OUR STORIES")
 *   tabs           {string[]} – filter tab labels (e.g. ["Blogs","News","Stories","Updates"])
 *   activeTab      {string}  – which tab is currently selected (controlled)
 *   onTabChange    {func}    – called with the tab label when a tab is clicked
 *   posts          {Array}   – [{ image, imageAlt, title, author, date, link }]
 *   borderImage    {string}  – path/URL for the scalloped stamp-border background image
 */
export default function OurStories({
  title,
  tabs = [],
  activeTab,
  onTabChange,
  posts = [],
  borderImage,
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

  const goToLink = (link) => {
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
                  {post.author}
                  {post.author && post.date ? " \u00B7 " : ""}
                  {post.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}