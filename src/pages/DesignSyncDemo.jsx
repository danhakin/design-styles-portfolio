import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CardGrid from '../components/sections/CardGrid';
import NewsletterForm from '../components/sections/NewsletterForm';
import StyleSwitcher from '../components/meta/StyleSwitcher';

const DesignSyncDemo = () => {
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
