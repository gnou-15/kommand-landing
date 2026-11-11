import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LifecycleBento from './components/LifecycleBento/LifecycleBento';
import LiveSimulator from './components/LiveSimulator/LiveSimulator';
import ComparisonMatrix from './components/ComparisonMatrix/ComparisonMatrix';
import PricingFaq from './components/PricingFaq/PricingFaq';
import Footer from './components/Footer/Footer';
import LaunchModal from './components/LaunchModal/LaunchModal';
import BackToTop from './components/BackToTop/BackToTop';
import './App.css';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    contextTitle: '',
  });

  const handleOpenModal = (contextTitle = 'Start Free Trial') => {
    setModalState({ isOpen: true, contextTitle });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, contextTitle: '' });
  };

  return (
    <div className="k-app">
      <Navbar onOpenModal={handleOpenModal} />

      <main className="k-app__main">
        <Hero onOpenModal={handleOpenModal} />
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
