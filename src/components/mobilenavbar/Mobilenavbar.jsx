import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './mobilenavbar.css'
import mobileNavBtnBg from '../../assets/img/button_back_gr/mobile-navbar-buttn.png'
import { useDonation } from '../../context/DonationContext';   // ✅ Added

const links = [
  { name: "Religious Giving", submenu:[{name:'Zakat', path:'/zakat'}, {name:'Sadaqah', path:'/sadaqah'}] },
  { name:"Emergencies", submenu:[{name:'Emergency Relief-Lebanon', path:'/emergency-relief-lebanon'}, {name:'Palestine Relief', path:'/palestine-relief'}, {name:'Sri Lanka Floods', path:'/sri-lanka-floods'}]},
  { name:"Support Campaigns", submenu:[{name:'Apna Ghar', path:'/apna-ghar'}, {name:'Medical care / Health', path:'/medical-care-health'}, {name:'Food Relief', path:'/food-relief'}, {name:'KASB', path:'/kasb'}, {name:'Hot Meals', path:'/hot-meals'}, {name:'Education', path:'/education'}, {name:'Clean Water', path:'/clean-water'}]},
  { name:"Who We Are", submenu:[{name:'Blogs', path:'/blogs'}, {name:'Reports', path:'/reports'}, {name:'About Us', path:'/about-us'}, {name:'Our Team', path:'/our-team'}]},
  { name:"Get Involved", submenu:[{name:'Volunteer', path:'/volunteer'},{name:'Events', path:'/events'}, {name:'Careers', path:'/careers'}, {name:'Contact Us', path:'/contact-us'}]}
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mbl-submenu-arrow">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const HeartHandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20.096 16.447" className="mbl-donate-icon">
    <path d="M17.953,20.546l-.274-.021a9.939,9.939,0,0,0-1.455-.057.263.263,0,0,0-.169.08c-.48.48-.962.931-1.249,1.181a1.9,1.9,0,0,1-1.524.45,1.882,1.882,0,0,1-1.329-.881.6.6,0,0,1,.082-.738L15.56,17,14.025,15.42a4.584,4.584,0,0,0-6.626,0,4.959,4.959,0,0,0,0,6.859l2.4,2.479,5.454,5.509a.626.626,0,0,0,.461.18,1.015,1.015,0,0,0,.7-.313.855.855,0,0,0,.132-1.174l-3.006-3.038a.234.234,0,0,1,.332-.331l3.006,3.035.2.2a.629.629,0,0,0,.457.178,1,1,0,0,0,.7-.313,1.04,1.04,0,0,0,.31-.71.659.659,0,0,0-.178-.466l-3.006-3.038a.236.236,0,0,1,0-.331.233.233,0,0,1,.329,0l3.2,3.234a.625.625,0,0,0,.457.178,1.006,1.006,0,0,0,.7-.313,1.04,1.04,0,0,0,.31-.71.644.644,0,0,0-.183-.466l-3-3.035a.234.234,0,1,1,.331-.331l3.2,3.231a.851.851,0,0,0,1.16-.135,1.018,1.018,0,0,0,.313-.708A.64.64,0,0,0,22,24.625l-4.045-4.091Z" transform="translate(-6.022 -14)" fill="#eac1a3"/>
    <path d="M42.115,14.029a7.66,7.66,0,0,0-3.956,2.313l-4.493,4.536a.127.127,0,0,0-.018.155,1.454,1.454,0,0,0,1.007.667,1.436,1.436,0,0,0,1.149-.34c.278-.244.751-.688,1.224-1.16a.746.746,0,0,1,.47-.215,10.307,10.307,0,0,1,1.526.054,8.212,8.212,0,0,0,1.7.032,4.6,4.6,0,0,0,2.227-1.08.228.228,0,0,1,.327.045.234.234,0,0,1-.045.329,5.037,5.037,0,0,1-2.458,1.174,5.8,5.8,0,0,1-.824.029l3.679,3.716a1.122,1.122,0,0,1,.187.269L46,22.309a4.974,4.974,0,0,0,1.42-3.476A4.886,4.886,0,0,0,46.042,15.4a4.639,4.639,0,0,0-3.926-1.378Z" transform="translate(-27.324 -13.987)" fill="#eac1a3"/>
  </svg>
);

const Mobilenavbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const location = useLocation();
  const { openDonation } = useDonation();   // ✅ Added

  useEffect(() => {
    const currentPath = location.pathname.trim();
    const matchedItem = links.find(item => {
      const itemPath = item.path?.trim() || "";
      const isHome =
        (currentPath === '/' || currentPath === '/home') &&
        item.name === 'Home';
      const isExactMatch = currentPath === itemPath;
      const isProjectSubRoute =
        itemPath === '/projects' &&
        currentPath.startsWith('/projects/');
      const isAppealsSubRoute =
        itemPath === '/appeals' &&
        currentPath.startsWith('/appeals/');
      return isHome || isExactMatch || isProjectSubRoute || isAppealsSubRoute;
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
        if (!e.detail.isOpen) setExpandedSubmenu(null);
      }
    };
    window.addEventListener("mobile-menu-toggle", onToggle);
    return () => window.removeEventListener("mobile-menu-toggle", onToggle);
  }, []);

  if (!visible) return null;

  return (
  <div className="mbl">
    <div className="mbl-nav-list">
      <ul className="text-white">
        {links.map((item) => (
          <li key={item.name}>
            {item.submenu ? (
              <>
                <button
                  type="button"
                  className="mbl-nav-trigger"
                  onClick={() => {
                    setExpandedSubmenu((prev) => (prev === item.name ? null : item.name));
                  }}
                >
                  <span>{item.name}</span>
                  <span className={`mbl-nav-arrow ${expandedSubmenu === item.name ? "open" : ""}`}>
                    &#9662;
                  </span>
                </button>

                {expandedSubmenu === item.name && (
                  <ul className="mbl-submenu">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          onClick={() => handleLinkClick(subItem.name)}
                        >
                          <span>{subItem.name}</span>
                          <ArrowIcon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={() => handleLinkClick(item.name)}
              >
                <span>{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>

    <div className="mbl-donate">
      <div
        className="mbl-donate-box"
        style={{ backgroundImage: `url(${mobileNavBtnBg})` }}
      >
        {/* ✅ Donate Now button updated */}
        <div
          className="mbl-donate-link"
          onClick={() => {
            openDonation('quick');
            handleLinkClick("Donate Now");
          }}
          style={{ cursor: 'pointer' }}
        >
          <HeartHandIcon />
          <span>Donate Now</span>
        </div>
      </div>
    </div>
  </div>
);
};

export default Mobilenavbar;