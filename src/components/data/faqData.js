/* ============================================================
   faqData.js — per-page FAQ question/answer datasets.

   Pattern matches the rest of /components/data/
   (see impactSectionData.js, impactCardsData.js):
     - One named export per page, named like <page>FaqItems
     - Each export is an Array<{ question:string, answer:string|ReactNode }>
     - A defaultFaqItems export is the fallback (original Food Relief
       set) so <FAQAccordion /> with zero props still renders something

   Usage in any page component:
     (A) Via faqKey prop — components auto-selects from this file:
           <FAQAccordion faqKey="medicalCareHealth" />
           <FAQAccordion faqKey="medicalCareHealth"
                         titleAlign="center" />

     (B) Import and pass manually (useful if you need to modify first):
           import { medicalCareHealthFaqItems } from "../components/data/faqData";
           <FAQAccordion items={medicalCareHealthFaqItems}
                         title="..." />
   ============================================================ */

/* ── Fallback (default / bare <FAQAccordion /> without any props) ── */
export const defaultFaqItems = [
  {
    question: "Where does my donation go?",
    answer:
      "Your donation supports MTJ Foundation’s Food Relief Program in Pakistan, providing monthly food packages to vulnerable families.",
  },
  {
    question: "What’s included in a food package?",
    answer:
      "Each package contains essential staples such as flour, rice, oil, and lentils—enough to feed a family for an entire month.",
  },
  {
    question: "Is my donation eligible for Zakat?",
    answer:
      "Yes. Food aid provided to eligible families can be given as Zakat. Please select Zakat at checkout if applicable.",
  },
  {
    question: "How often are families supported?",
    answer:
      "Families receive food packages on a monthly basis, helping them stay nourished during ongoing hardship.",
  },
  {
    question: "Why is food aid urgently needed right now?",
    answer:
      "Floods, drought, and rising food prices have left many families without income or access to affordable food, making hunger a daily reality.",
  },
  {
    question: "Can I donate on behalf of someone else?",
    answer:
      "Yes. You can give in honour of a loved one and make your Ramadan charity even more meaningful.",
  },
];

/* ── Pages that currently import & render <FAQAccordion />.
      (Filled with placeholders matching each page's topic —
       edit the Q/A strings below to match the live site.) ── */

/* Home page (currently commented out but may be enabled later) */
export const homeFaqItems = [
  {
    question: "What is MTJ Foundation?",
    answer:
      "MTJ Foundation is a UK-registered charitable organisation dedicated to empowering vulnerable communities in Pakistan and beyond through food, water, education, healthcare, and shelter programmes.",
  },
  {
    question: "Are donations tax-deductible in the UK?",
    answer:
      "Yes. As a registered charity in the UK, donations from UK taxpayers are eligible for Gift Aid, which adds 25p for every £1 you donate at no extra cost to you.",
  },
  {
    question: "How can I volunteer with MTJ Foundation?",
    answer:
      "You can sign up via our Volunteer page. We have opportunities in fundraising, community outreach, event support, and remote roles such as content writing and social media.",
  },
  {
    question: "What percentage of donations goes directly to beneficiaries?",
    answer:
      "We maintain one of the lowest overheads in the sector. Over 90% of every pound donated is spent directly on our field projects and beneficiary support.",
  },
  {
    question: "How do I know my donation is being used correctly?",
    answer:
      "We publish annual financial reports, impact reports, and regular field updates with photos and testimonials so you can see exactly where your sadaqah and Zakat are making a difference.",
  },
];

/* FoodRelief.jsx — currently uses the default set, keep as mirror */
export const foodReliefFaqItems = defaultFaqItems;

/* MedicalCareHealth.jsx — AAS Lab & Diagnostics, Pakistan healthcare */
export const medicalCareHealthFaqItems = [
  {
    question: "Why focus on testing instead of building a big hospital?",
    answer:
      "Because most illnesses can be treated if they’re caught early. Without tests, families don’t even know they’re sick until it’s too late.",
  },
  {
    question: "Where exactly is the lab?",
    answer:
      "The AAS Lab and Diagnostic Centre is in Mian Channu, Punjab, and serves nearby villages and rural communities.",
  },
  {
    question: "Do people have to pay for medical services?",
    answer:
      "Most tests are free. For others, patients pay only a small amount. Nobody is turned away because they can’t afford it.",
  },
  {
    question: "What happens after someone gets tested?",
    answer:
      "Patients receive consultations and referrals so they can get the right treatment without wasting time.",
  },
  {
    question: "Can I donate in someone’s name?",
    answer:
      "Yes. You can dedicate your donation in honour of a loved one, and your funds will help provide life-saving care.",
  },
  {
    question: "Is this program Zakat-eligible?",
    answer:
      "Yes, both Zakat and Sadaqah can be used to fund medical care for families who cannot afford it.",
  },
];

/* CleanWater.jsx — water wells, handpumps, filtration */
export const cleanWaterFaqItems = [
  {
    question: "Where does my donation go?",
    answer:
      "Your donation funds MTJF’s Water Relief Program in Pakistan, specifically in Sindh and Balochistan, regions where the floods contaminated water sources and families rely on unsafe drinking water that’s threatening children’s lives daily.",
  },
  {
    question: "How does a hand pump work, and how many people does it serve?",
    answer:
      "A hand pump draws clean groundwater from deep below the surface, making it safe to drink. One hand pump typically serves multiple families in a village or community, providing access to hundreds of people for years to come.",
  },
  {
    question: "Can I give Zakat for this program?",
    answer:
      "Only individual hand pumps are Zakat eligible.",
  },
  {
    question: "How long do these water solutions last?",
    answer:
      "Hand pumps and filtration systems are built to last for years with basic maintenance. MTJF works with local communities to ensure these systems continue providing clean water long after installation, making your sadaqah jariyah ongoing.",
  },
  {
    question: "How do you decide where to install hand pumps?",
    answer:
      "We work with local partners to identify communities with the highest need, areas where families currently walk hours for contaminated water, where children are suffering from waterborne diseases, and where the floods made water access even more critical.",
  },
  {
    question: "Will I know where my donation went?",
    answer:
      "Yes. MTJF provides updates about water projects funded by donors, including locations of hand pump installations and filtration systems. You’ll see the direct impact of your contribution and the communities it’s serving.",
  },
];

/* Education.jsx — scholarships, schools, vocational training */
export const educationFaqItems = [
  {
    question: "Where does MTJF run its education projects?",
    answer:
      "We focus on underserved parts of Pakistan where children are most at risk of dropping out, including rural areas and low-income communities.",
  },
  {
    question: "Do girls benefit from this program?",
    answer:
      "Yes. Supporting girls’ education is a priority. Many of our scholarships help girls stay in school and avoid early marriage.",
  },
  {
    question: "What happens if children don’t get this support?",
    answer:
      "Without access to school, children often end up working in fields or kilns, or girls are pushed into marriage at a young age. Education gives them a safer, brighter alternative.",
  },
  {
    question: "Can I donate school supplies instead of money?",
    answer:
      "We don’t collect supplies directly. Instead, we purchase books, uniforms, and kits locally to cut costs and support the local economy.",
  },
  {
    question: "Does MTJF also support teachers?",
    answer:
      "Yes. Along with building schools and helping students, we plan to start teachers’ training and digital literacy programs so the learning environment improves for every child.",
  },
  {
    question: "How much does it cost to keep a child in school?",
    answer:
      " varies, but even a small donation helps cover uniforms, books, and fees. For example, $60 provides a full learning kit for one child for a year.",
  },
];

/* KASB.jsx — Khatme Bukhari / Qur'an programmes */
export const kasbFaqItems = [
  {
    question: "Who benefits from the program?",
    answer:
      "Vulnerable communities, widows, unemployed youth, and families without access to stable income.",
  },
  {
    question: "What kinds of skills are taught?",
    answer:
      "Current training includes football stitching and e-commerce, with plans to expand into digital and other high-demand fields.",
  },
  {
    question: "Do participants earn while learning?",
    answer:
      "Yes. The “earn while you learn” model allows trainees to support themselves even during training.",
  },
  {
    question: "How far does my donation go?",
    answer:
      "Just $60 can provide tools, while $180 gives a woman full access to training that can change her life.",
  },
  {
    question: "Is there support after training ends?",
    answer:
      "Yes. KASB helps with job placement and small-business support so income continues long term.",
  },
  {
    question: "Can I see the impact of my donation?",
    answer:
      "Absolutely. The MTJ Foundation shares updates and success stories so you can witness the difference you make.",
  },
];

/* HotMeals.jsx — daily iftar / sadaqah meals */
export const hotMealsFaqItems = [
  {
    question: "What is the $10 Hot Meal program?",
    answer:
      "It’s a simple act of kindness with a lasting impact. For just $10, you provide a freshly cooked, high-quality meal to someone facing hunger in our local community. Each meal is prepared and served with care.",
  },
  {
    question: "Who benefits from these meals?",
    answer:
      "Anyone who’s hungry. Seniors, parents trying to stretch a few dollars, refugees finding their footing. People sleeping rough. Our faith teaches us to feed others before ourselves, and that’s what this program is about: making sure no one around us is forgotten.",
  },
  {
    question: "How far does my $10 donation really go?",
    answer:
      "Every dollar goes directly towards preparing and delivering meals. Your $10 covers the cost of ingredients, cooking, and safe distribution through our volunteers. We keep our operations lean so your generosity reaches those in dire need.",
  },
  {
    question: "Can I give more or make it monthly?",
    answer:
      "Absolutely. Many supporters choose to give monthly so meals can be served consistently throughout the year. Whether you give once or regularly, your support helps us reach more people facing hunger every day.",
  },
  {
    question: "Where are the meals prepared and served?",
    answer:
      "Meals are freshly prepared in certified local kitchens and delivered through our community partners and volunteers. We focus on areas where food insecurity is highest, starting in downtown Toronto and expanding across the GTA.",
  },
];

/* ApnaGhar.jsx — Widows & Orphans housing project */
export const apnaGharFaqItems = [
  {
    question: "Who receives a home through Apna Ghar?",
    answer:
      "Widows and divorced or abandoned women between 18 and 50 years old, with at least one dependent child, no existing home ownership, and currently living in unsafe or unstable conditions in Tulamba Town, South Punjab.",
  },
  {
    question: "Do families own the home permanently?",
    answer:
      "No, and that’s by design. Apna Ghar is built as a cycle of giving. A family lives there for as long as they need it. Once they’re stable and ready to move forward, the home is passed on to another widow and her children in need. Your donation doesn’t just shelter one family, it shelters many.",
  },
  {
    question: "Where is Apna Ghar located?",
    answer:
      "The community is being built in Tulamba Town, District Khanewal, South Punjab, Pakistan. Phase 1 — 20 homes — is already complete. Phase 2 is currently underway.",
  },
  {
    question: "What does each home include?",
    answer:
      "A fully furnished 2-bedroom house of 1,100 sq ft, with solar electricity, clean drinking water, and access to KASB skill training for mothers.",
  },
  {
    question: "Can I donate if I can’t afford a full house?",
    answer:
      "Absolutely. 20 bricks for $100 and 100 bricks for $500 are just as meaningful. Every brick is part of a real home being built right now.",
  },
  {
    question: "How do I know my donation reaches the right place?",
    answer:
      "MTJF operates with full transparency. Every donation goes directly to the project, and donors are kept updated at every step.",
  },
];

/* Volunteer.jsx — volunteer portal */
export const volunteerFaqItems = [
  {
    question: "Who can volunteer with MTJ Foundation?",
    answer:
      "Anyone aged 16+ can volunteer, with a huge range of roles available in the UK, Pakistan, and remote / online. Under-18s can join with a parent or guardian's written consent.",
  },
  {
    question: "What volunteer roles are available?",
    answer:
      "Roles include: event stewards and collection collectors (UK), field volunteers (Pakistan — food distributions, medical camps, school visits), fundraisers, social media & content creation, graphic design, video editing, volunteer coordination, grant writing, and professional pro-bono (legal, finance, HR, IT).",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "As little or as much as you can give. Even 2 hours a week on social media or a single Saturday at a street collection makes a difference. Long-term project-lead roles typically ask for 4+ hours per week.",
  },
  {
    question: "Do you provide training?",
    answer:
      "Yes. All volunteers receive a free induction covering safeguarding, MTJ's project background, and role-specific training (e.g. food-handling certificates for kitchen volunteers, First-Aid for event volunteers).",
  },
  {
    question: "Can I volunteer as a school / corporate group?",
    answer:
      "Absolutely. Schools, universities and companies regularly organise team-volunteering days (food pack-out sessions, winter kit drives, meal distributions). Contact our volunteer coordinator via the Volunteer page to design a bespoke day.",
  },
  {
    question: "Do volunteers get a reference or certificate?",
    answer:
      "Yes. After completing 20+ hours volunteers receive an official MTJ Foundation certificate of service and, on request, a LinkedIn recommendation or professional reference for job / university applications.",
  },
];

/* AboutUs.jsx */
export const aboutUsFaqItems = [
  {
    question: "What does MTJ Foundation do?",
    answer:
      "We provide humanitarian aid, education, healthcare, and clean water to people in need, responding to emergencies and helping communities rebuild for the long term.",
  },
  {
    question: "Who founded MTJ Foundation?",
    answer:
      "The Foundation was created by Molana Tariq Jamil to turn faith into action, helping people live with dignity, compassion, and hope.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Every donation goes directly to the project you choose. We keep donors updated at every step, so you always know where your impact is changing lives.",
  },
  {
    question: "Are MTJ Foundation’s projects Zakat-eligible?",
    answer:
      "Yes. Many of our programs, including food aid, orphan sponsorship, and medical support, are fully compliant with Islamic Zakat guidelines.",
  },
  {
    question: "Does MTJ Foundation charge any administrative fees?",
    answer:
      "An administrative fee may apply to help cover the costs of processing and delivering your donation. We’re committed to transparency and responsible use of every contribution.",
  },
  {
    question: "How does MTJ Foundation respond to emergencies?",
    answer:
      "When and where disaster strikes, our teams and partners move fast to deliver food, water, and shelter while working closely with local experts to reach those most affected.",
  },
  {
    question: "Can I volunteer or get involved?",
    answer:
      "Yes! You can volunteer by filling out the form on our website or simply share our mission to spread awareness and inspire others to give.",
  },
    {
    question: "Does MTJ Foundation help only Muslim communities?",
    answer:
      "No. Our work is inspired by Islamic values, but we help anyone in need — because compassion knows no religion, and humanity has no borders.",
  },
];
 
/* ============================================================
   Map of page-key → FAQ dataset.
   Used by FAQAccordion when the <FAQAccordion faqKey="…" />
   prop is provided. Keep keys camelCase, matching the import
   path (e.g. "medicalCareHealth" for MedicalCareHealth.jsx).
   ============================================================ */
export const faqMap = {
  default: defaultFaqItems,
  home: homeFaqItems,
  foodRelief: foodReliefFaqItems,
  medicalCareHealth: medicalCareHealthFaqItems,
  cleanWater: cleanWaterFaqItems,
  education: educationFaqItems,
  kasb: kasbFaqItems,
  hotMeals: hotMealsFaqItems,
  apnaGhar: apnaGharFaqItems,
  volunteer: volunteerFaqItems,
  aboutUs: aboutUsFaqItems,
};
