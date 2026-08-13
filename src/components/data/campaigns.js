import lebanonPopup from '../../assets/img/EmergencyReliefLebanon/lebanon_popup.png';


export const campaigns = {
  lebanon: {
    id: 'lebanon',
    title: 'Lebanon Emergency Fund - Donate Today',
    description:
      'Support the Lebanon Emergency Fund with Molana Tariq Jamil Foundation. Your contributions provide urgent aid to those affected by crises in Lebanon, addressing immediate needs and supporting recovery efforts. Each donation is crucial in providing relief, rebuilding lives, and sustaining the resilience of communities facing hardship.',
    image: lebanonPopup,
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

  palestine: {
    id: 'palestine',
    title: 'Palestine Relief Fund - Donate Now',
    description:
      'Help families in Gaza with urgent food, medical aid and shelter. Your support brings hope and relief to those affected by the ongoing crisis.',
    image: '/images/palestine-hero.jpg',
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

  // Aur campaigns yahan add karte jao
};