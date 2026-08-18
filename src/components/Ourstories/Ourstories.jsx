import React, { useState } from "react";
import "./Ourstories.css";

export default function OurStories({
  title,
  tabs = [],
  activeTab,
  onTabChange,
  posts = [],
  borderImage,
  showReadMore = false,
  readMoreText = "Read More",
  showMoreButton = false,
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
            <article
              className="ost__card"
              key={i}
            >
              {post.link ? (
                <a href={post.link} className="ost__card-link" onClick={(e) => goToLink(post.link, e)}>
                  <div className="ost__card-img-wrap">
                    <img src={post.image} alt={post.imageAlt || post.title || ""} />
                  </div>
                </a>
              ) : (
                <div className="ost__card-img-wrap">
                  <img src={post.image} alt={post.imageAlt || post.title || ""} />
                </div>
              )}
              <div className="ost__card-body">
                {post.link ? (
                  <h3 className="ost__card-title">
                    <a href={post.link} onClick={(e) => goToLink(post.link, e)}>{post.title}</a>
                  </h3>
                ) : (
                  <h3 className="ost__card-title">{post.title}</h3>
                )}
                <div className="ost__card-meta">
                  {(post.author || post.authorImage) && (
                    <span className="ost__card-author">
                      {post.authorImage && (
                        <img src={post.authorImage} alt={post.author || ""} className="ost__card-author-img" />
                      )}
                      {post.author && <span className="ost__card-author-name">{post.author}</span>}
                    </span>
                  )}
                  {post.date && <span className="ost__card-date">{post.date}</span>}
                </div>
              </div>
            </article>
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
