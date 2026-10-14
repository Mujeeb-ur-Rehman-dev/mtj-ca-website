import lebanonPopup from '../../assets/img/EmergencyReliefLebanon/lebanon_popup.png';
import quickDonateBanner from '../../assets/img/navbar/quick-donate-banner.jpg';
import zakatDonateBtn from '../../assets/img/zakat/hero/zakat-donate.png';
import sadaqahDonateBtn from '../../assets/img/sadaqahJariyah/sadqa-donate-btn.png';
import apnaGharPopup from '../../assets/img/ApnaGhar/galleryImg11.png';
import palestinePopup from '../../assets/img/PalestineRelief/popup-image.png';
// import generalPopup from '...';

export const campaigns = {
  // ========== 1. Navbar Quick Donate (General) ==========
  quick: {
    id: 'quick',
    title: 'Donate where Most Needed',
    description:
      'Your contributions provide critical support to those in need, empowering communities and uplifting lives through sustainable development and direct aid. From essential relief to fulfilling your Zakat, every donation delivers lasting impact and reflects the core values of our faith.',
    image: quickDonateBanner,

    // Layout Config
    layoutOnce: 'grid',          // 'grid' | 'vertical'
    layoutMonthly: 'grid',
    showDesignation: true,
    showDedicate: false,
    showImpactText: false,

    designationOptions: [
      { value: 'general', label: 'General Amount' },
      { value: 'zakat', label: 'Zakat' },
    ],

    // Default PKR Amounts matching live site
    amountsOnce: [
      { value: 2000, label: 'Rs 2,000' },
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
    ],
    amountsMonthly: [
      { value: 40000, label: 'Rs 40K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 10000, label: 'Rs 10K' },
      { value: 6000, label: 'Rs 6,000' },
      { value: 2000, label: 'Rs 2,000' },
      { value: 1000, label: 'Rs 1,000' },
    ],

    // Multi-currency configurations matching live Fundraise Up widget
    currencyConfig: {
      PKR: {
        symbol: 'Rs',
        defaultOnce: 5000,
        defaultMonthly: 6000,
        amountsOnce: [
          { value: 2000, label: 'Rs 2,000' },
          { value: 5000, label: 'Rs 5,000' },
          { value: 10000, label: 'Rs 10K' },
          { value: 20000, label: 'Rs 20K' },
          { value: 50000, label: 'Rs 50K' },
          { value: 100000, label: 'Rs 100K' },
        ],
        amountsMonthly: [
          { value: 40000, label: 'Rs 40K' },
          { value: 20000, label: 'Rs 20K' },
          { value: 10000, label: 'Rs 10K' },
          { value: 6000, label: 'Rs 6,000' },
          { value: 2000, label: 'Rs 2,000' },
          { value: 1000, label: 'Rs 1,000' },
        ],
      },
      CAD: {
        symbol: '$',
        defaultOnce: 25,
        defaultMonthly: 30,
        amountsOnce: [
          { value: 10, label: '$10' },
          { value: 25, label: '$25' },
          { value: 50, label: '$50' },
          { value: 100, label: '$100' },
          { value: 250, label: '$250' },
          { value: 500, label: '$500' },
        ],
        amountsMonthly: [
          { value: 5, label: '$5' },
          { value: 10, label: '$10' },
          { value: 30, label: '$30' },
          { value: 50, label: '$50' },
          { value: 100, label: '$100' },
          { value: 200, label: '$200' },
        ],
      },
      USD: {
        symbol: '$',
        defaultOnce: 25,
        defaultMonthly: 30,
        amountsOnce: [
          { value: 10, label: '$10' },
          { value: 25, label: '$25' },
          { value: 50, label: '$50' },
          { value: 100, label: '$100' },
          { value: 250, label: '$250' },
          { value: 500, label: '$500' },
        ],
        amountsMonthly: [
          { value: 5, label: '$5' },
          { value: 10, label: '$10' },
          { value: 30, label: '$30' },
          { value: 50, label: '$50' },
          { value: 100, label: '$100' },
          { value: 200, label: '$200' },
        ],
      },
      GBP: {
        symbol: '£',
        defaultOnce: 25,
        defaultMonthly: 30,
        amountsOnce: [
          { value: 10, label: '£10' },
          { value: 25, label: '£25' },
          { value: 50, label: '£50' },
          { value: 100, label: '£100' },
          { value: 250, label: '£250' },
          { value: 500, label: '£500' },
        ],
        amountsMonthly: [
          { value: 5, label: '£5' },
          { value: 10, label: '£10' },
          { value: 30, label: '£30' },
          { value: 50, label: '£50' },
          { value: 100, label: '£100' },
          { value: 200, label: '£200' },
        ],
      },
      EUR: {
        symbol: '€',
        defaultOnce: 25,
        defaultMonthly: 30,
        amountsOnce: [
          { value: 10, label: '€10' },
          { value: 25, label: '€25' },
          { value: 50, label: '€50' },
          { value: 100, label: '€100' },
          { value: 250, label: '€250' },
          { value: 500, label: '€500' },
        ],
        amountsMonthly: [
          { value: 5, label: '€5' },
          { value: 10, label: '€10' },
          { value: 30, label: '€30' },
          { value: 50, label: '€50' },
          { value: 100, label: '€100' },
          { value: 200, label: '€200' },
        ],
      },
      AED: {
        symbol: 'AED',
        defaultOnce: 100,
        defaultMonthly: 100,
        amountsOnce: [
          { value: 50, label: 'AED 50' },
          { value: 100, label: 'AED 100' },
          { value: 200, label: 'AED 200' },
          { value: 500, label: 'AED 500' },
          { value: 1000, label: 'AED 1,000' },
          { value: 2500, label: 'AED 2,500' },
        ],
        amountsMonthly: [
          { value: 25, label: 'AED 25' },
          { value: 50, label: 'AED 50' },
          { value: 100, label: 'AED 100' },
          { value: 250, label: 'AED 250' },
          { value: 500, label: 'AED 500' },
          { value: 1000, label: 'AED 1,000' },
        ],
      },
    },
  },

  // ========== 2. Lebanon Emergency ==========
  lebanon: {
    id: 'lebanon',
    title: 'Lebanon Emergency Fund - Donate Today',
    description:
      'Support the Lebanon Emergency Fund with Molana Tariq Jamil Foundation. Your contributions provide urgent aid to those affected by crises in Lebanon, addressing immediate needs and supporting recovery efforts. Each donation is crucial in providing relief, rebuilding lives, and sustaining the resilience of communities facing hardship.',
    image: lebanonPopup,

    layoutOnce: 'vertical',       // Important: vertical list with descriptions
    layoutMonthly: 'grid',
    showDesignation: false,
    showDedicate: false,
    showImpactText: true,         // descriptions dikhane ke liye

    amountsOnce: [
      { value: 50000, label: 'Rs 50K', desc: 'Emergency support for a family' },
      { value: 100000, label: 'Rs 100K', desc: 'Covers essentials for 2 families' },
      { value: 150000, label: 'Rs 150K', desc: 'Helps 3 families survive' },
    ],
    amountsMonthly: [
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 15000, label: 'Rs 15K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 30000, label: 'Rs 30K' },
      { value: 40000, label: 'Rs 40K' },
    ],
  },

  // ========== 3. Palestine ==========
  palestine: {
    id: 'palestine',
    title: 'Palestine Emergency Fund - Donate Today',
    description:
      'Support the Palestine Emergency Fund with Molana Tariq Jamil Foundation. Your contributions provide urgent aid to those affected by crises in Palestine, addressing immediate needs and supporting recovery efforts. Each donation is crucial in providing relief, rebuilding lives, and sustaining the resilience of communities facing hardship. Your support echoes the core values of our faith and the urgent need for compassion and action.',
    image: palestinePopup,

    layoutOnce: 'vertical',
    layoutMonthly: 'grid',
    showDesignation: false,
    showDedicate: false,
    showImpactText: true,

    amountsOnce: [
      { value: 20000,  label: 'Rs 20K',  desc: "Feed's a Family for a Month" },
      { value: 35000,  label: 'Rs 35K',  desc: 'Provides School Kits for 5 Children' },
      { value: 100000, label: 'Rs 100K', desc: "Feed's 5 Families for a Month" },
    ],
    amountsMonthly: [
      { value: 10000, label: 'Rs 10K' },
      { value: 15000, label: 'Rs 15K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
      { value: 200000, label: 'Rs 200K' },
    ],
  },

  // ========== 4. Zakat ==========
  zakat: {
    id: 'zakat',
    title: 'Zakat - Strengthen Communities',
    description:
      'Fulfill your Zakat with Molana Tariq Jamil Foundation. Your contributions provide critical support to those in need, empowering communities and uplifting lives through sustainable development and direct aid. Each donation helps deliver lasting change and reflects the core values of our faith.',
    image: zakatDonateBtn,

    layoutOnce: 'grid',
    layoutMonthly: 'grid',
    showDesignation: false,
    showDedicate: true,            // "Dedicate this donation" dikhega
    showImpactText: false,

    amountsOnce: [
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
      { value: 200000, label: 'Rs 200K' },
    ],
    amountsMonthly: [
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
      { value: 200000, label: 'Rs 200K' },
    ],
  },

  // ========== 5. Sadaqah ==========
  sadaqah: {
    id: 'sadaqah',
    title: 'Sadaqah - Support and Empower',
    description:
      'Give Sadaqah through Molana Tariq Jamil Foundation. Your generous donations offer vital assistance to those in need, fostering resilience and enhancing lives through ongoing community support and development.',
    image: sadaqahDonateBtn,

    layoutOnce: 'grid',
    layoutMonthly: 'grid',
    showDesignation: false,
    showDedicate: true,
    showImpactText: false,

    amountsOnce: [
      { value: 2000, label: 'Rs 2,000' },
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
    ],
    amountsMonthly: [
      { value: 2000, label: 'Rs 2,000' },
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
    ],
  },

  // ========== 6. Apna Ghar Widows & Orphans ==========
  apnaGhar: {
    id: 'apnaGhar',
    title: 'Apna Ghar Widows & Orphans',
    description:
      'Your support helps give more than just shelter—it offers stability, care, and a place to rebuild. With your donation, someone facing hardship can have a space to rest, recover, and move forward with hope.',
    image: apnaGharPopup,

    layoutOnce: 'vertical',       // Vertical list with descriptions (screenshot 1)
    layoutMonthly: 'grid',        // 3-col pill grid (screenshot 2)
    showDesignation: false,
    showDedicate: false,
    showImpactText: true,         // Descriptions shown under each one-time amount

    amountsOnce: [
      { value: 20000,  label: 'Rs 20K',  desc: '20 Bricks - Lay the first stone' },
      { value: 100000, label: 'Rs 100K', desc: '100 Bricks — Help raise the walls' },
      { value: 1000000,label: 'Rs 1M',   desc: 'Full House — Give them a home' },
    ],
    amountsMonthly: [
      { value: 5000,  label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 15000, label: 'Rs 15K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 40000, label: 'Rs 40K' },
      { value: 60000, label: 'Rs 60K' },
    ],
  },
};