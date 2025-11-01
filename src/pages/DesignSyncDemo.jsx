import { useStyle } from '../context/StyleContext';
import StyleSwitcher from '../components/meta/StyleSwitcher';

// Base components (fallback)
import BaseHeader from '../layouts/Header';
import BaseFooter from '../layouts/Footer';
import BaseHero from '../components/sections/Hero';
import BaseFeatures from '../components/sections/Features';
import BaseCardGrid from '../components/sections/CardGrid';
import BaseNewsletterForm from '../components/sections/NewsletterForm';

// Style implementations
import * as Minimalism from '../styles/minimalism';

const DesignSyncDemo = () => {
  const { currentStyle } = useStyle();

  // Select components based on current style
  let Header, Footer, Hero, Features, CardGrid, NewsletterForm;

  switch (currentStyle.id) {
    case 'minimalism':
      ({ Header, Footer, Hero, Features, CardGrid, NewsletterForm } = Minimalism);
      break;
    default:
      // Use base components for unimplemented styles
      Header = BaseHeader;
      Footer = BaseFooter;
      Hero = BaseHero;
      Features = BaseFeatures;
      CardGrid = BaseCardGrid;
      NewsletterForm = BaseNewsletterForm;
  }

  return (
    <div className="design-sync-demo">
      <StyleSwitcher />
      <Header />
      <main>
        <Hero />
        <Features />
        <CardGrid />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
};

export default DesignSyncDemo;
