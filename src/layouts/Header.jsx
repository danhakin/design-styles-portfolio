import { Link } from 'react-router-dom';
import BaseButton from '../components/common/Button';

const Header = ({ className, Button = BaseButton }) => {
  return (
    <header className={className || "header"}>
      <div className="header-container">
        <Link to="/" className="logo">
          DesignSync
        </Link>

        <nav className="main-nav">
          <Link to="/" className="nav-link">Features</Link>
          <Link to="/" className="nav-link">Pricing</Link>
          <Link to="/" className="nav-link">Resources</Link>
          <Link to="/" className="nav-link">Blog</Link>
        </nav>

        <div className="header-actions">
          <Button variant="secondary" size="small">
            Sign In
          </Button>
          <Button variant="primary" size="small">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
