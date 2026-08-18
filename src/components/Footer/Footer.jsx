import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerLogo from '../../assets/img/logos/footer_logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer-container">
        <div className="footer-section">
          <img src={footerLogo} alt="MTJF Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h4>Our Appeals</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/zakat">Zakat</Link></li>
            <li><Link to="/sadaqah">Sadaqah</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>What We Do</h4>
          <ul>
            <li><Link to="/clean-water">Water Relief</Link></li>
            <li><Link to="/food-relief">Food Support</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/medical-care-health">Healthcare</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><a href="/privacy-policy" className="footer-privacy-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p>Copyright © 2026 MTJ Foundation is a registered charity with the Canada Revenue Agency, CRA no. 780700423 RR 0001. All rights</p>
          <p>reserved. | Built with ♥ by Process Plus</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/mtjf_canada/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/mtjfcanada/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@mtjfoundationcanada5022" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://x.com/mtjfcanada" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;