import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCaretDown, FaHandHoldingHeart } from 'react-icons/fa6';
import './index.css';
import Hamburger from '../hamburgermenu/Hamburger';
import Mobilenavbar from '../mobilenavbar/Mobilenavbar';
import logo from '../../assets/img/logos/only_logo.png';
import { useDonation } from '../../context/DonationContext';

// Navigation items mapping — matches MTJF reference and live structure
const navItems = [
  {
    name: "Religious Giving",
    path: "/zakat",
    submenu: [
      { name: "Zakat", path: "/zakat" },
      { name: "Sadaqah", path: "/sadaqah" },
    ],
  },
  {
    name: "Emergencies",
    path: "/nepal-floods",
    submenu: [
      { name: "Nepal Floods", path: "/nepal-floods" },
      { name: "Emergency Relief – Lebanon", path: "/emergency-relief-lebanon" },
      { name: "Palestine Relief", path: "/emergency-relief-palestine" },
      { name: "Sri Lanka Floods", path: "/sri-lanka-floods" },
    ],
  },
  {
    name: "Support Campaigns",
    path: "/apna-ghar",
    submenu: [
      { name: "Apna Ghar", path: "/apna-ghar" },
      { name: "Medical Care / Health", path: "/medical-care-health" },
      { name: "Food Relief", path: "/food-relief" },
      { name: "KASB", path: "/kasb" },
      { name: "Hot Meals", path: "/hot-meals" },
      { name: "Education", path: "/education" },
      { name: "Clean Water", path: "/clean-water" },
      { name: "Online Islamic Counselling", path: "/online-islamic-counselling" },
    ],
  },
  {
    name: "Who We Are",
    path: "/about-us",
    submenu: [
      { name: "About Us", path: "/about-us" },
      { name: "Our Team", path: "/our-team" },
      { name: "Blogs", path: "/blogs" },
      { name: "Reports", path: "/reports" },
    ],
  },
  {
    name: "Get Involved",
    path: "/volunteer",
    submenu: [
      { name: "Volunteer", path: "/volunteer" },
      { name: "Events", path: "/events" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openDonation } = useDonation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically open Quick-Donate modal if URL has ?form=Quick-Donate
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const formParam = params.get('form');
    if (formParam && formParam.toLowerCase() === 'quick-donate') {
      openDonation('quick');
    }
  }, [location.search, openDonation]);

  // Update active link based on current route
  useEffect(() => {
    const currentPath = location.pathname.trim();
    const matchedItem = navItems.find((item) => {
      if (item.path && (currentPath === item.path || (item.path === '/home' && currentPath === '/'))) {
        return true;
      }
      if (item.submenu) {
        return item.submenu.some((sub) => sub.path === currentPath);
      }
      return false;
    });

    if (matchedItem) {
      setActiveLink(matchedItem.name);
    } else {
      setActiveLink("Home");
    }
  }, [location.pathname]);

  const handleClick = (linkName, path) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveLink(linkName);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (path) navigate(path);
      });
    });
  };

  return (
    <>
      <header className="nav-outer">
        <div className={`nav-container ${isScrolled ? 'nav-scrolled' : ''}`}>
          <div className="nav-row-1">
            {/* Logo section */}
            <div className="logo_section">
              <Link to="/home" className="logo" aria-label="MTJ Foundation Canada Home">
                <img src={logo} alt="MTJF Logo" />
              </Link>
            </div>

            {/* Menu section - Desktop only */}
            <nav className="nav-desktop-menu d-none md:d-block" aria-label="Main Navigation">
              <ul className="nav-links-list">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className={`nav-item ${item.submenu ? 'nav-item-has-sub' : ''}`}
                  >
                    <Link
                      className={`nav-link ${activeLink === item.name ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.name, item.path || item.submenu[0]?.path);
                      }}
                      to={item.path || item.submenu[0]?.path}
                    >
                      <span>{item.name}</span>
                      {item.submenu && <FaCaretDown className="nav-caret" />}
                    </Link>

                    {item.submenu && (
                      <ul className="nav-submenu">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className={`nav-submenu-link ${activeLink === subItem.name ? "active" : ""}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleClick(subItem.name, subItem.path);
                              }}
                            >
                              <span>{subItem.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Button section - Desktop Quick Donate */}
            <div className="d-none md:d-flex nav-actions">
              <button
                type="button"
                className="nav-quick-donate-btn"
                onClick={() => openDonation('quick')}
                aria-label="Quick Donate"
              >
                <FaHandHoldingHeart className="nav-donate-icon" aria-hidden="true" />
                <span>Quick Donate</span>
              </button>
            </div>

            {/* Mobile hamburger menu toggle */}
            <div className="md:d-none">
              <Hamburger />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <Mobilenavbar />
    </>
  );
};

export default Navbar;
