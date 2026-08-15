import {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCaretDown , FaArrowRightLong  } from 'react-icons/fa6'
import './index.css' 
import Hamburger from '../hamburgermenu/Hamburger'
import Mobilenavbar from '../mobilenavbar/Mobilenavbar' 
import logo from '../../assets/img/logos/only_logo.png'
import Button from '../../common/components/buttons/Button';
import { useDonation } from '../../context/DonationContext';   // ✅ Added

// Navigation items mapping
const navItems = [
  { name: "Religious Giving", path: "/home", submenu:[{name:'Zakat', path:'/zakat'}, {name:'Sadaqah', path:'/sadaqah'}] },
  {name:"Emergencies", submenu:[{name:'Emergency Relief-Lebanon', path:'/emergency-relief-lebanon'}, {name:'Palestine Relief', path:'/palestine-relief'}, {name:'Sri Lanka Floods', path:'/sri-lanka-floods'}]},
  {name:"Support Campaigns", submenu:[{name:'Apna Ghar', path:'/apna-ghar'}, {name:'Medical care / Health', path:'/medical-care-health'}, {name:'Food Relief', path:'/food-relief'}, {name:'KASB', path:'/kasb'}, {name:'Hot Meals', path:'/hot-meals'}, {name:'Education', path:'/education'}, {name:'Clean Water', path:'/clean-water'}]},
  {name:"Who We Are", submenu:[{name:'Blogs', path:'/blogs'}, {name:'Reports', path:'/reports'}, {name:'About Us', path:'/about-us'}, {name:'Our Team', path:'/our-team'}]},
  {name:"Get Involved", submenu:[{name:'Volunteer', path:'/volunteer'},{name:'Events', path:'/events'}, {name:'Careers', path:'/careers'}, {name:'Contact Us', path:'/contact-us'}]}
];

const Navbar = () => {
   const [activeLink, setActiveLink] = useState("Home");
   const location = useLocation();
   const navigate = useNavigate();
   const { openDonation } = useDonation();   // ✅ Added
   
  // Always use white background for all states
  const isLightTheme = false;

   // Update active link based on current route
   useEffect(() => {
     const currentPath = location.pathname.trim();
     
     // Check each nav item to see if current path matches
    const matchedItem = navItems.find(item => {
      // const itemPath = item.path.trim();
      const itemPath = item?.path?.trim() || "";
      const isHome =
        (currentPath === '/' || currentPath === '/home') &&
        item.name === 'Home';
      const isExactMatch =
        currentPath === itemPath || currentPath === itemPath + ' ';
      const isProjectDetail =
        itemPath === '/projects' &&
        currentPath.startsWith('/projects/');
      const isAppealsDetail =
        itemPath === '/appeals' &&
        currentPath.startsWith('/appeals/');
      return isHome || isExactMatch || isProjectDetail || isAppealsDetail;
    });
     
     if (matchedItem) {
       setActiveLink(matchedItem.name);
     } else {
       // Default to Home if no match found
       setActiveLink("Home");
     }
   }, [location.pathname]);

  const handleClick = (linkName, path) => {
    // Scroll to top on current page first
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setActiveLink(linkName);
    
    // Wait for scroll to complete, then navigate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navigate(path);
      });
    });
  };

  return (
    <>
    <div className="nav-outer">
    <div className={`nav-container rounded ${isLightTheme ? 'nav-light-theme' : 'nav-dark-theme'}`}>
        <div className='nav-row-1'>
            {/* logo section */}
            <div className='flex items-center logo_section'>
                <div className='logo'>
                  <Link to="/home">
                    <img src={logo} alt='logo' />
                  </Link>
                </div>
            </div>
            {/* menu section - desktop only */}
            <div className='d-none md:d-block' style={{fontSize:'14px', fontWeight:'bold'}}>
              <ul className={`hvr flex gap-12 ${isLightTheme ? 'text-white' : 'text-dark'}`}>
                 {navItems.map((item) => (
                <li key={item.name} className={`nav-item ${item.submenu ? 'nav-item-has-sub' : ''}`}>
                  <Link
                    className={`${activeLink === item.name ? "active" : ""} ${item.submenu ? "nav-link-with-sub" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.name, item.path);
                    }}
                    to={item.path}
                  >
                    {item.name}
                    {/* {item.submenu && <FaCaretDown  className="nav-arrow nav-arrow-down" />} */}
                    
                    {item.submenu && <FaCaretDown />}
                  </Link>
                  {item.submenu && (
                    <ul className="nav-submenu">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={`${activeLink === subItem.name ? "active" : ""} nav-submenu-link`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick(subItem.name, subItem.path);
                            }}
                          >
                            {subItem.name}
                            <FaArrowRightLong />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              </ul>
            </div>

            {/* button section - desktop */}
            <div className=' d-none md:d-flex'>
              {/* ✅ Quick Donate button updated */}
              <div onClick={() => openDonation('quick')}>
                <Button />
              </div>
            </div>
            <div className='md:d-none'>
              <Hamburger/>
            </div>
        </div>
      </div>
    </div>
           <div>
            <Mobilenavbar/>
           </div>
           </>
         
  )
}
export default Navbar