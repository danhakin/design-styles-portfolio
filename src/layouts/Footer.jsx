import { Link } from 'react-router-dom';

const Footer = ({ className }) => {
  return (
    <footer className={className || "footer"}>
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo">DesignSync</div>
          <p className="footer-tagline">Design better, together.</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 DesignSync, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
