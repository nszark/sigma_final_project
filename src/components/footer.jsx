// Importing necessary components
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-scroll";

// Defining Footer component
function Footer() {
  // Getting the current year
  let currentYear = (new Date()).getFullYear();
  
  // Returning the JSX for the Footer component
  return (
    <footer id="footer" className="footer">
      {/* Wrapper for the footer content */}
      <div className="footer__wrapper _container">
        {/* Logo section */}
        <div className="footer__logo-section">
          {/* Link to the home section of the page */}
          <Link className="header__link" to="home" smooth={true} duration = {1000} offset = {-300}>
            {/* Logo image */}
            <div className="header-logo">
              <img src="/src/img/logo.png" alt="logo" />
            </div>
          </Link>
          {/* Short description */}
          <p>But I must explain to you all this mistaken <br/>idea of denouncing pleasure.</p>
        </div>
        {/* Quick links section */}
        <ul className="footer__link-section">
          <li>Quick Links</li>
          <li>About Our Company</li>
          <li>Services we provide</li>
          <li>Career & Opportunity</li>
          <li>Privacy & policy</li>
          <li>Contact US</li>
        </ul>
        {/* Company section */}
        <ul className="footer__link-section">
          <li>Company</li>
          <li>About Company</li>
          <li>Our Testimonials</li>
          <li>Latest News</li>
          <li>Our misson</li>
          <li>Get a free quote</li>
        </ul>
        {/* Contact information section */}
        <ul className="footer__link-section">
          <li>Contact us</li>
          <li>Sagrada Familia, Herba</li>
          <li>Street Front USA</li>
          <li>brandoxide@gmail.com</li>
          <li>002-568423591</li>
        </ul>
        {/* Follow us section */}
        <div className="footer__follow-us">
          <p>Follow Us</p>
          {/* Icons for social media links */}
          <div className="icon-block">
            <div><a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer" title="Facebook"> < RiFacebookFill /></a></div>            
            <div><a href="https://twitter.com/" target="_blank" rel="noreferrer" title="Twitter"> <RiTwitterFill /></a></div>  
            <div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" title="Instagram"> <RiInstagramLine /></a></div>  
            <div><a href="https://ua.linkedin.com/" target="_blank" rel="noreferrer" title="LinkedIn"> <RiLinkedinFill /></a></div>          
          </div>
        </div>
      </div>
      {/* Horizontal line for visual separation */}
      <div className="footer__line"></div>
      {/* Copyright information */}
      <span className="footer__copyright">Copyright @ {currentYear} Brandoxide. All rights reserved.</span>
    </footer>
  );
}

// Exporting the Footer component
export default Footer;