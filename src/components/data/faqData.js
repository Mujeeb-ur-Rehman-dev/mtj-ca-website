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
    question: "Why is clean water such a big issue in rural Pakistan?",
    answer:
      "Millions of households in rural Pakistan still lack safe drinking water. Families — usually women and girls — walk 3-5 hours a day to fetch contaminated water from ponds and open wells, leading to widespread waterborne disease, child mortality, and lost school and work days.",
  },
  {
    question: "What clean-water solutions does MTJ Foundation provide?",
    answer:
      "We install deep-bore hand pumps, community water wells, and solar-powered filtration plants across Punjab, Sindh, and flood-hit regions. Each handpump serves an entire village of 150-300 people for many years.",
  },
  {
    question: "How much does it cost to build a well or handpump?",
    answer:
      "A handpump serving 150+ people costs roughly £150 / Rs 40,000. A full deep community well with a reservoir is around £450 / Rs 120,000. Solar filtration plants are priced per village size and quoted on request.",
  },
  {
    question: "Can I build a well as Sadaqah Jariyah?",
    answer:
      "Absolutely! Every drop of water drawn from your well for decades to come is ongoing charity on your behalf. We provide a completion report with photos, GPS location, and the name of the village so you can see the wells you've built.",
  },
  {
    question: "Can I donate a well in someone's name?",
    answer:
      "Yes. Many donors sponsor wells in the name of a loved one (living or deceased) as Sadaqah Jariyah. A personalised plaque with the chosen name can be installed on the well upon request.",
  },
  {
    question: "Do you maintain wells after installation?",
    answer:
      "Yes. We train local masons and form village water committees to perform routine maintenance, and our field teams carry out periodic inspections and repairs for several years after handover.",
  },
];

/* Education.jsx — scholarships, schools, vocational training */
export const educationFaqItems = [
  {
    question: "What education programmes does MTJ Foundation run?",
    answer:
      "We run three key programmes: (1) need-based scholarships for school and university students, (2) free literacy and adult classes for women in rural areas, and (3) vocational training in trades such as tailoring, masonry, electrical work, and IT.",
  },
  {
    question: "How much does it cost to sponsor one child's education?",
    answer:
      "Under £30 / Rs 8,000 covers a full year of schooling including books, uniform, stationery and exam fees for a primary-age child. University scholarships are priced per degree and quoted on request.",
  },
  {
    question: "How are students selected for scholarships?",
    answer:
      "Our field teams conduct home visits to verify household income, orphan status, and school enrolment. Priority is given to orphans, girls, and families living below the poverty line.",
  },
  {
    question: "Do you teach skills to women and girls?",
    answer:
      "Yes. Our women's vocational centres teach tailoring, embroidery, fabric dyeing, and digital skills, with micro-sewing machines donated to graduates so they can earn from home. 600+ women have been trained to date.",
  },
  {
    question: "Is education a valid Zakat category?",
    answer:
      "Yes. Zakat can be paid to students and seekers of knowledge (fi sabilillah), covering tuition, living stipends, books, and boarding. We issue a Zakat eligibility declaration on request.",
  },
  {
    question: "Can I sponsor a scholarship in someone's name?",
    answer:
      "Yes. Many donors gift scholarships for a child in memory of a loved one or as an Aqiqah / celebration sadaqah. We send quarterly progress reports with the child's results and attendance.",
  },
];

/* KASB.jsx — Khatme Bukhari / Qur'an programmes */
export const kasbFaqItems = [
  {
    question: "What is KASB / Khatme Bukhari?",
    answer:
      "KASB (Khatme Bukhari Shareef) is our annual blessed programme in which qualified Huffaz and Ulama complete a full recitation of Sahih al-Bukhari, followed by collective supplication for the entire Ummah and for our donors and their families.",
  },
  {
    question: "How can I participate in Khatme Bukhari?",
    answer:
      "You can sponsor a recitation (Hifz / tilawat) on behalf of yourself, your family, or a deceased loved one and receive the reward of the complete Khatm. Dates for the annual Majlis are announced on our website and social channels.",
  },
  {
    question: "What other Qur'an programmes do you run?",
    answer:
      "We fund local madrasahs, sponsor Hifz-e-Qur'an students (paying for their board, books, and teachers), and run free after-school Qur'an classes for children in underprivileged neighbourhoods.",
  },
  {
    question: "Can I pay to have Qur'an recited for the deceased?",
    answer:
      "Yes. You can sponsor a Khatm-e-Qur'an or Khatm-e-Bukhari to be completed on behalf of a marhum / marhumah, and we will convey the reward to them. A digital certificate is provided.",
  },
  {
    question: "Where are the KASB programmes held?",
    answer:
      "Our main annual Khatme Bukhari is held at our central campus in Mian Channu, with smaller regional programmes in Karachi, Lahore, and London. Local communities in the UK can also attend our London Majlis.",
  },
  {
    question: "Is sponsoring a Qur'an student Sadaqah Jariyah?",
    answer:
      "Yes — every ayah a sponsored student recites, every letter of the Qur'an they teach to others, and every good deed they perform because of the knowledge they gained becomes ongoing sadaqah on your behalf.",
  },
];

/* HotMeals.jsx — daily iftar / sadaqah meals */
export const hotMealsFaqItems = [
  {
    question: "What is the Hot Meals programme?",
    answer:
      "The Hot Meals programme provides freshly cooked, nutritious meals daily to the poor, homeless, patients at hospitals, and communities affected by floods and emergencies — especially during Ramadan, when thousands of families rely on our Iftaar and Sehri deliveries.",
  },
  {
    question: "How much does one hot meal cost?",
    answer:
      "A single nutritious hot meal costs roughly Rs 350 / £1. Packages of 100, 500, or 1,000 meals are available for bulk donations, Iftaar sponsorship, or Aqiqah / Khatm offerings.",
  },
  {
    question: "Who receives the meals?",
    answer:
      "Meals are distributed in targeted villages, hospital wards, homeless shelters, orphanages, and emergency camps. Field volunteers supervise distribution to ensure no deserving family is turned away.",
  },
  {
    question: "Do you cater Iftaar for an entire masjid or madrasah?",
    answer:
      "Yes. Corporate donors, families, and masjid committees regularly sponsor a full Iftaar menu (dates, fruits, chaat, main dish, dessert, drinks) for a local masjid or madrasah in Pakistan. We provide photos and a report of the distribution.",
  },
  {
    question: "Can I give meals as Sadaqah on behalf of someone?",
    answer:
      "Of course. Many donors gift meals during Ramadan, on birthdays, anniversaries, or as Sadaqah for a marhum. We can include a personalised duas card with the distribution if you wish.",
  },
  {
    question: "What food safety standards do you follow?",
    answer:
      "All kitchens are registered, halal-certified, and inspected daily. Food is prepared in hygienic conditions by trained staff and transported in insulated containers so meals remain hot and fresh on delivery.",
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
    question: "When was MTJ Foundation registered?",
    answer:
      "MTJ Foundation is a registered charitable organisation in the United Kingdom and operates field offices in Pakistan. Registration numbers and full governance documents are available on request.",
  },
  {
    question: "Who founded MTJ Foundation and why?",
    answer:
      "MTJ Foundation was founded out of a vision to connect generous UK Muslims with life-changing projects on the ground in Pakistan — with complete transparency and zero middlemen.",
  },
  {
    question: "Which countries do you work in?",
    answer:
      "Our flagship projects are in Pakistan (Punjab, Sindh, KPK, flood-hit south), plus emergency-response programmes for Gaza / Palestine, Turkey-Syria earthquakes, and Sudan as needs arise.",
  },
  {
    question: "How is MTJ Foundation governed?",
    answer:
      "A board of experienced trustees meets quarterly to approve budgets, audit reports, and every project spend. The UK office manages admin and fundraising; field teams in Pakistan report monthly with photos, financials, and beneficiary lists.",
  },
  {
    question: "Can I visit your projects in Pakistan?",
    answer:
      "Yes! We run 2-3 donor visibility trips every year where donors can meet beneficiaries, see completed wells and homes, visit AAS Lab, and attend distributions in person. Register your interest via our Contact page.",
  },
  {
    question: "How do I contact MTJ Foundation?",
    answer:
      "Email info@mtjfoundation.ca or call the UK office number listed on our Contact page. Response times are usually within one working day (Mon-Fri, 9am-5pm GMT).",
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
