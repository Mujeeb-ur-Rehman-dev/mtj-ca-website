import lebanonPopup from '../../assets/img/EmergencyReliefLebanon/lebanon_popup.png';
import navbarButton from '../../assets/img/navbar/navbar-button.png';
import zakatDonateBtn from '../../assets/img/zakat/hero/zakat-donate.png';
import sadaqahDonateBtn from '../../assets/img/sadaqahJariyah/sadqa-donate-btn.png';
// import generalPopup from '...';

export const campaigns = {
  // ========== 1. Navbar Quick Donate (General) ==========
  quick: {
    id: 'quick',
    title: 'Donate where Most Needed',
    description:
      'Your contributions provide critical support to those in need, empowering communities and uplifting lives through sustainable development and direct aid. From essential relief to fulfilling your Zakat, every donation delivers lasting impact and reflects the core values of our faith.',
    image: navbarButton, // Add the appropriate image path here

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

    amountsOnce: [
      { value: 2000, label: 'Rs 2,000' },
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 50000, label: 'Rs 50K' },
      { value: 100000, label: 'Rs 100K' },
    ],
    amountsMonthly: [
      { value: 1000, label: 'Rs 1,000' },
      { value: 2000, label: 'Rs 2,000' },
      { value: 6000, label: 'Rs 6,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 20000, label: 'Rs 20K' },
      { value: 40000, label: 'Rs 40K' },
    ],
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
    title: 'Palestine Relief Fund - Donate Now',
    description:
      'Help families in Gaza with urgent food, medical aid and shelter. Your support brings hope and relief to those affected by the ongoing crisis.',
    image: '/images/palestine-hero.jpg',

    layoutOnce: 'vertical',
    layoutMonthly: 'grid',
    showDesignation: false,
    showDedicate: false,
    showImpactText: true,

    amountsOnce: [
      { value: 25000, label: 'Rs 25K', desc: 'Food package for a family' },
      { value: 50000, label: 'Rs 50K', desc: 'Medical support' },
      { value: 100000, label: 'Rs 100K', desc: 'Emergency shelter' },
    ],
    amountsMonthly: [
      { value: 3000, label: 'Rs 3,000' },
      { value: 5000, label: 'Rs 5,000' },
      { value: 10000, label: 'Rs 10K' },
      { value: 15000, label: 'Rs 15K' },
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
};