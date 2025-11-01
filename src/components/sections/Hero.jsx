import BaseButton from '../common/Button';

const Hero = ({ className, Button = BaseButton }) => {
  return (
    <section className={className || "hero"}>
      <div className="hero-content">
        <h1 className="hero-headline">
          Collaborate on designs like never before
        </h1>
        <p className="hero-description">
          DesignSync brings your team together to create exceptional designs.
          Real-time collaboration, powerful tools, and seamless integrations in one platform.
        </p>
        <div className="hero-actions">
          <Button variant="primary" size="large">
            Start Free Trial
          </Button>
          <Button variant="secondary" size="large">
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="hero-image">
        <div className="placeholder-image" style={{ width: '600px', height: '400px', background: '#e0e0e0' }}>
          Hero Image Placeholder
        </div>
      </div>
    </section>
  );
};

export default Hero;
