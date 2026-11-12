import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LifecycleBento from './components/LifecycleBento/LifecycleBento';
import LiveSimulator from './components/LiveSimulator/LiveSimulator';
import ComparisonMatrix from './components/ComparisonMatrix/ComparisonMatrix';
import PricingFaq from './components/PricingFaq/PricingFaq';
import Footer from './components/Footer/Footer';
import LaunchModal from './components/LaunchModal/LaunchModal';
import BackToTop from './components/BackToTop/BackToTop';
import SplashCover from './components/SplashCover/SplashCover';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('kommandr-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    contextTitle: '',
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('kommandr-theme', theme);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenModal = (contextTitle = 'Start Free Trial') => {
    setModalState({ isOpen: true, contextTitle });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, contextTitle: '' });
  };

  return (
    <div className="k-app" data-theme={theme}>
      {showSplash && <SplashCover onComplete={() => setShowSplash(false)} />}

      <Navbar onOpenModal={handleOpenModal} />

      <main className="k-app__main">
        <Hero
          onOpenModal={handleOpenModal}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
        <LifecycleBento />
        <LiveSimulator onOpenModal={handleOpenModal} />
        <ComparisonMatrix />
        <PricingFaq onOpenModal={handleOpenModal} />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <BackToTop />

      <LaunchModal
        isOpen={modalState.isOpen}
        contextTitle={modalState.contextTitle}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
