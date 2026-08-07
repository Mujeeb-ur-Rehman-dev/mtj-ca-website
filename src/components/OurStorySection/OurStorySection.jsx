import React, { useState } from 'react';
import './OurStorySection.css';

const storyData = [
  {
    year: '2019',
    subtitle: 'Foundation & First Steps',
    description:
      'The story of MTJ Foundation began in 2019 with one simple intention: to serve people for the sake of Allah ﷻ. That year, a small group of volunteers began visiting rural communities across Pakistan, listening to what families needed most. Their needs were basic: water, food, education, and healthcare, which are fundamental rights for every human. In response, MTJF installed hand pumps, distributed monthly ration packs, organised basic medical check-ups, and helped children take their first steps into school. Every project was planned carefully, with transparency and trust guiding each action. There were no large offices or grand campaigns, just people helping people, quietly and sincerely. Those early efforts shaped MTJF’s identity as a foundation rooted in faith and service, setting the tone for the years of compassion and community work that would follow.'
  },
  {
    year: '2020',
    subtitle: 'Empowering Women Through Skill',
    description:
      '2020 was focused on empowerment. That year, MTJF launched KASB, a skills development program designed to empower women and youth with practical, income-generating abilities. What began with compassion in 2019 was now evolving into empowerment, helping people stand on their own with strength and faith. Training centres opened their doors to teach stitching, shoe and football manufacturing, industrial tailoring, and digital skills. Many participants were widows or single mothers who’d never earned an income before. Today, more than 70% gain employment after completing training, and retention stays high because the skills match market demand. KASB became more than a program; it became proof that opportunity can change the life of an entire household.'
  },
  {
    year: '2022',
    subtitle: 'Disaster Relief & Rapid Response',
    description:
      'In 2022, MTJF stepped into disaster relief and quickly became one of Pakistan’s most active humanitarian organizations during the devastating floods. When entire communities were displaced, villages flattened, and clean water became scarce, our teams first tackled emergency needs and provided affected families with food packs, tents, medical aid, and hygiene support, travelling by trucks and boats to areas cut off for weeks. When the waters receded, the work didn’t stop. During our rehabilitation phase, we restored water access and helped families rebuild with shelter kits. Since 2022, MTJF has continued to respond to every major crisis with the same speed, care, and commitment to rebuild what was lost.'
  },
  {
    year: '2023',
    subtitle: 'Healthcare & Global Solidarity',
    description:
      'MTJF opened AAS Lab & Diagnostics in Mian Channu, a facility built to make reliable healthcare affordable for everyone, not just those who could pay for it. What began as one lab soon connected to collection centres across Punjab, Sindh, and Khyber Pakhtunkhwa, offering everything from routine blood work to advanced diagnostics. For thousands of families with no access to medical care, early and accurate testing means early diagnosis and on-time treatment. Beyond borders, our humanitarian efforts expanded to Türkiye and Morocco, where our teams supported earthquake survivors with food, medical supplies, and relief materials. Later, as the crisis in Gaza worsened, MTJF joined global relief efforts, standing beside families through our partners on the ground, delivering food, medicines, shelter, and water. When one part of the world hurts, we all respond as one.'
  },
  {
    year: '2024',
    subtitle: 'Celebrating 5 Years of Impact',
    description:
      'MTJF celebrated its 5th anniversary. Five years of serving humanity. Five years of fighting hunger and thirst. Four years of empowering women and youth. Three years of providing emergency relief. And two years of healthcare and global humanitarian solidarity. From the first water well to hospitals, classrooms, and emergency tents, the journey had turned compassion into a lifelong impact. Programs like KASB, AAS Diagnostics, and Hasanain Schools kept growing because people believed in the work and trusted where their donations went. Donors have become lifelong partners. What started quietly in 2019 has become a community of thousands moving with one purpose: to serve humanity with faith and compassion. And as MTJF enters its next chapter, the promise stays simple: keep giving, keep growing, keep doing good.'
  },
  {
    year: '2025',
    subtitle: 'Continuing the Mission',
    description:
      'In 2025, the floods returned, and so did we. What began years ago as an emergency response has grown into a lasting mission of care and commitment. MTJF teams were once again on the ground across Pakistan, bringing food, tents, clean water, and medical aid to families who lost everything overnight. But our work doesn’t end when the waters recede. It continues in the way we rebuild homes, provide food, medical care, and water relief, support crisis-affected people beyond borders, and help families stand on their own again. Each challenge reminds us why this journey began: to serve humanity for the sake of Allah ﷻ. Six years on, our purpose hasn’t changed. When people need help, MTJF shows up, quietly, consistently, and with the same compassion that started it all.'
  }
];

const OurStorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? storyData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === storyData.length - 1 ? 0 : prev + 1));
  };

  const currentData = storyData[activeIndex];

  return (
    <section className="story-section">
      <div className="story-container">
        {/* Section Header */}
        <h2 className="story-main-title">OUR STORY</h2>
        <p className="story-main-subtitle">
          From humble beginnings in 2019 to its current global relief missions, every
          milestone of MTJ Foundation reflects a single vision: serving humanity for
          the sake of Allah ﷻ.
        </p>

        {/* Timeline Navigation */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-nodes">
            {storyData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.year}
                  className={`timeline-node ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-circle">
                    {isActive && <div className="timeline-circle-inner" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Story Content */}
        <div className="story-content-box">
          <h3 className="story-content-title">{currentData.subtitle}</h3>
          <p className="story-content-desc">{currentData.description}</p>
        </div>

        {/* Bottom Carousel Controls */}
        <div className="story-carousel-controls">
          <button className="story-nav-btn" onClick={handlePrev} aria-label="Previous Year">
            &larr;
          </button>
          <div className="story-dots">
            {storyData.map((_, idx) => (
              <span
                key={idx}
                className={`story-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
          <button className="story-nav-btn" onClick={handleNext} aria-label="Next Year">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;