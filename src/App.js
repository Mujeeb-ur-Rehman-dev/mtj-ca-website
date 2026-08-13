import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import './App.css';
import './common/styles/base.css';
import './common/styles/common.css';
import { lazy, Suspense } from "react";

// Context
import { DonationProvider } from './context/DonationContext';

// Pages
const Home = lazy(() => import("./pages/Home"));
const Zakat = lazy(() => import("./pages/Zakat"));
const Sadaqah = lazy(() => import("./pages/Sadaqah"));
const RationProgram = lazy(() => import("./pages/RationProgram"));
const AutomatedGiving = lazy(() => import("./pages/AutomatedGiving"));
const EmergencyReliefLebanon = lazy(() => import("./pages/EmergencyReliefLebanon"));
const PalestineRelief = lazy(() => import("./pages/PalestineRelief"));
const SriLankaFloods = lazy(() => import("./pages/SriLankaFloods"));
const ApnaGhar = lazy(() => import("./pages/ApnaGhar"));
const MedicalCareHealth = lazy(() => import("./pages/MedicalCareHealth"));
const FoodRelief = lazy(() => import("./pages/FoodRelief"));
const KASB = lazy(() => import("./pages/KASB"));
const HotMeals = lazy(() => import("./pages/HotMeals"));
const Education = lazy(() => import("./pages/Education"));
const CleanWater = lazy(() => import("./pages/CleanWater"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Reports = lazy(() => import("./pages/Reports"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const Events = lazy(() => import("./pages/Events"));
const Careers = lazy(() => import("./pages/Careers"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <DonationProvider>
      <Router>
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/zakat" element={<Zakat />} />
            <Route path="/sadaqah" element={<Sadaqah />} />
            <Route path="/ration-program" element={<RationProgram />} />
            <Route path="/automated-giving" element={<AutomatedGiving />} />
            <Route path="/emergency-relief-lebanon" element={<EmergencyReliefLebanon />} />
            <Route path="/palestine-relief" element={<PalestineRelief />} />
            <Route path="/sri-lanka-floods" element={<SriLankaFloods />} />
            <Route path="/apna-ghar" element={<ApnaGhar />} />
            <Route path="/medical-care-health" element={<MedicalCareHealth />} />
            <Route path="/food-relief" element={<FoodRelief />} />
            <Route path="/kasb" element={<KASB />} />
            <Route path="/hot-meals" element={<HotMeals />} />
            <Route path="/education" element={<Education />} />
            <Route path="/clean-water" element={<CleanWater />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </Router>
    </DonationProvider>
  );
}

export default App;