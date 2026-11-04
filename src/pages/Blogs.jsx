import React, { useState } from "react";
import backgroundImage from "../assets/img/Blogs/background.png";
import mobileImage from "../assets/img/Blogs/mobileImage.png";
import stories1 from "../assets/img/ApnaGhar/stories1.png";
import stories2 from "../assets/img/ApnaGhar/stories2.png";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Footer from "../components/Footer/Footer";
import "./Blogs.css";

const ALL_POSTS = [
  {
    id: 1,
    category: "blogs",
    title: "First 10 Days of Dhul Hijjah and Their Importance",
    author: "Molana Tariq Jamil",
    date: "June 05, 2025",
    image: stories1,
    imageAlt: "10 Days of Dhul Hijjah",
    link: "https://mtjfoundation.ca/10-days-of-dhul-hijjah/",
  },
  {
    id: 2,
    category: "blogs",
    title: "Significance of Eid Al Adha – A Complete Guide",
    author: "Molana Tariq Jamil",
    date: "June 05, 2025",
    image: stories2,
    imageAlt: "Significance of Eid Al Adha",
    link: "https://mtjfoundation.ca/significance-of-eid-al-adha/",
  },
];

const Blogs = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts =
    filter === "all"
      ? ALL_POSTS
      : ALL_POSTS.filter((post) => post.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="blogs-page">
      {/* ─── DESKTOP HERO BANNER (>767px) ─── */}
      <section
        className="blogs-hero-desktop"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="blogs-hero-box-area">
          <div className="blogs-hero-card">
            <span className="blogs-hero-date">June 5, 2025</span>
            <p className="blogs-hero-text">
              Discover the immense rewards of the first 10 days of Dhul Hijjah — a
              sacred time for good deeds, charity, prayer, and spiritual growth,
              ending with Eid al-Adha.
            </p>
            <a
              href="https://mtjfoundation.ca/10-days-of-dhul-hijjah/"
              className="blogs-hero-btn"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* ─── MOBILE HERO BANNER (<=767px) ─── */}
      <section className="blogs-hero-mobile">
        <div className="blogs-hero-mobile-img-wrap">
          <img
            src={mobileImage}
            alt="Dhul Hijjah Blog"
            className="blogs-hero-mobile-img"
          />
        </div>
        <div className="blogs-hero-mobile-card">
          <span className="blogs-hero-date">June 5, 2025</span>
          <p className="blogs-hero-text">
            Discover the immense rewards of the first 10 days of Dhul Hijjah — a
            sacred time for good deeds, charity, prayer, and spiritual growth,
            ending with Eid al-Adha.
          </p>
          <a
            href="https://mtjfoundation.ca/10-days-of-dhul-hijjah/"
            className="blogs-hero-btn"
          >
            Read More
          </a>
        </div>
      </section>

      {/* ─── OUR STORIES SECTION ─── */}
      <section className="blogs-stories-section">
        <div className="blogs-stories-inner">
          <h2 className="blogs-stories-heading">OUR STORIES</h2>

          {/* Desktop Filter Tabs */}
          <div className="blogs-post-filters">
            <button
              type="button"
              className={`blogs-filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              type="button"
              className={`blogs-filter-btn ${filter === "blogs" ? "active" : ""}`}
              onClick={() => handleFilterChange("blogs")}
            >
              Blogs
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="blogs-filter-dropdown-wrap">
            <select
              id="filter-dropdown"
              className="blogs-filter-dropdown"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              aria-label="Filter stories by category"
            >
              <option value="all">All</option>
              <option value="blogs">Blogs</option>
            </select>
          </div>

          {/* Posts Grid */}
          <div className="blogs-posts-grid">
            {filteredPosts.slice(0, visibleCount).map((post) => (
              <div className="blogs-post-card" key={post.id}>
                <a href={post.link} className="blogs-card-img-link">
                  <div className="blogs-card-img-mask">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="blogs-card-img"
                    />
                  </div>
                </a>
                <h3 className="blogs-card-title">
                  <a href={post.link}>{post.title}</a>
                </h3>
                <div className="blogs-post-meta">
                  <div className="blogs-meta-text">
                    <span className="blogs-meta-author">{post.author}</span>
                    <span className="blogs-meta-bullet">•</span>
                    <span className="blogs-meta-date">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="blogs-loadmore-wrap">
            <button
              type="button"
              className="blogs-loadmore-btn"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER & FOOTER ─── */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blogs;
