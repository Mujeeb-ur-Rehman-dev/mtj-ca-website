import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa6";
import './mobilenavbar.css';
import { useDonation } from '../../context/DonationContext';

// Navigation structure matching MTJF reference and live site
const links = [
  {
    name: "Religious Giving",
    submenu: [
      { name: "Zakat", path: "/zakat" },
      { name: "Sadaqah", path: "/sadaqah" },
    ],
  },
  {
    name: "Emergencies",
    submenu: [
      { name: "Nepal Floods", path: "/nepal-floods" },
      { name: "Emergency Relief – Lebanon", path: "/emergency-relief-lebanon" },
      { name: "Palestine Relief", path: "/emergency-relief-palestine" },
      { name: "Sri Lanka Floods", path: "/sri-lanka-floods" },
    ],
  },
  {
    name: "Support Campaigns",
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
    submenu: [
      { name: "About Us", path: "/about-us" },
      { name: "Our Team", path: "/our-team" },
      { name: "Blogs", path: "/blogs" },
      { name: "Reports", path: "/reports" },
    ],
  },
  {
    name: "Get Involved",
    submenu: [
      { name: "Volunteer", path: "/volunteer" },
      { name: "Events", path: "/events" },
      { name: "Careers", path: "/careers" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
];

const VerticalArrow = ({ isUp }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eac1a3"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mbl-nav-arrow-icon"
    aria-hidden="true"
  >
    {isUp ? (
      <>
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </>
    ) : (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </>
    )}
  </svg>
);

const Mobilenavbar = () => {
  const [visible, setVisible] = useState(false);
  const [, setActiveLink] = useState("Home");
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const location = useLocation();
  const { openDonation } = useDonation();

  useEffect(() => {
    const currentPath = location.pathname.trim();
    const matchedItem = links.find((item) => {
      if (item.path && (currentPath === item.path || (item.path === '/home' && currentPath === '/'))) {
        return true;
      }
      if (item.submenu) {
        return item.submenu.some((sub) => sub.path === currentPath);
      }
      return false;
    });
    setActiveLink(matchedItem ? matchedItem.name : "Home");
  }, [location.pathname]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    const burger = document.querySelector(".hamburger.open");
    if (burger) burger.click();
  };

  useEffect(() => {
    const onToggle = (e) => {
      if (e && e.detail && typeof e.detail.isOpen === "boolean") {
        setVisible(e.detail.isOpen);
        if (!e.detail.isOpen) {
          setExpandedSubmenu(null);
        }
      }
    };
    window.addEventListener("mobile-menu-toggle", onToggle);
    return () => window.removeEventListener("mobile-menu-toggle", onToggle);
  }, []);

  if (!visible) return null;

  return (
    <div className="mbl" role="dialog" aria-label="Mobile Navigation Menu">
      <div className="mbl-nav-list">
        <ul>
          {links.map((item) => {
            const isExpanded = expandedSubmenu === item.name;
            return (
              <li key={item.name} className={`mbl-nav-item ${isExpanded ? "mbl-nav-item--expanded" : ""}`}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className={`mbl-nav-trigger ${isExpanded ? "active" : ""}`}
                      onClick={() => {
                        setExpandedSubmenu((prev) => (prev === item.name ? null : item.name));
                      }}
                      aria-expanded={isExpanded}
                    >
                      <span className="mbl-nav-title">{item.name}</span>
                      <VerticalArrow isUp={isExpanded} />
                    </button>

                    {isExpanded && (
                      <ul className="mbl-submenu">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name} className="mbl-submenu-item">
                            <Link
                              to={subItem.path}
                              className="mbl-submenu-link"
                              onClick={() => handleLinkClick(subItem.name)}
                            >
                              <span>{subItem.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="mbl-nav-link"
                    onClick={() => handleLinkClick(item.name)}
                  >
                    <span className="mbl-nav-title">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mbl-donate">
        <button
          type="button"
          className="mbl-donate-btn"
          onClick={() => {
            openDonation('quick');
            handleLinkClick("Donate Now");
          }}
          aria-label="Donate Now"
        >
          <FaHandHoldingHeart className="mbl-donate-icon" aria-hidden="true" />
          <span>Donate Now</span>
        </button>
      </div>
    </div>
  );
};

export default Mobilenavbar;
