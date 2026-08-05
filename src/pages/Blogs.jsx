import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/Blogs/background.png";
import mobileImage from "../assets/img/Blogs/mobileImage.png";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import Button from "../common/components/buttons/Button";
import OurStories from "../components/Ourstories/Ourstories";
import backgroundStories from "../assets/img/ApnaGhar/background-stories.png";
import stories1 from "../assets/img/ApnaGhar/stories1.png";
import stories2 from "../assets/img/ApnaGhar/stories2.png";

const blogHeroCard = (
  <div className="hero-blog-card">
    <div className="hero-blog-card-inner">
      <span className="hero-blog-date">June 5, 2025</span>
      <p className="hero-blog-card-text">
        Discover the immense rewards of the first 10 days of Dhul Hijjah — a sacred time for good deeds, charity, prayer, and spiritual growth, ending with Eid al-Adha.
      </p>
      <Button
        text="Read More"
        size="md"
        wrapperClass="hero-blog-button-wrap"
        buttonClass="btn btn-donate-animated hero-blog-button"
        ariaLabel="Read more about the featured blog story"
      />
    </div>
  </div>
);

const Blogs = () => {
  return (
    <>
      <Hero
        className="blog-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImage}
        heroImage={null}
        showRightImage={false}
        customContent={blogHeroCard}
        customContentClassName="hero-blog-custom-content"
      />

      <OurStories
        title="OUR STORIES"
        borderImage={backgroundStories}
        tabs={["All", "Blogs"]}
        showReadMore={false}
        posts={[
          {
            image: stories1,
            imageAlt: "First 10 Days of Dhul Hijjah",
            title: "First 10 Days of Dhul Hijjah and Their Importance",
            date: "June 5, 2025",
            link: "/blog/first-10-days-dhul-hijjah",
          },
          {
            image: stories2,
            imageAlt: "Significance of Eid Al Adha",
            title: "Significance of Eid Al Adha – A Complete Guide",
            date: "June 5, 2025",
            link: "/blog/significance-eid-al-adha",
          },
        ]}
      />

      <Newsletter />
      <Footer />
    </>
  );
};

export default Blogs;
