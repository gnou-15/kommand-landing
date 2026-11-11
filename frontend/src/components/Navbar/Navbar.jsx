import { useState, useEffect, useRef } from 'react';
import KommandrLogo from '../KommandrLogo/KommandrLogo';
import { NAV_LINKS } from '../../data/kommandrData';
import './Navbar.css';

export function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [retracted, setRetracted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 24);

      if (currentY <= 80) {
        setRetracted(false);
      } else if (delta > 6 && !menuOpen) {
        // Scrolling down past threshold -> retract header
        setRetracted(true);
      } else if (delta < -4) {
        // Slight scroll up -> reveal header immediately
        setRetracted(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`k-navbar ${scrolled ? 'k-navbar--scrolled' : ''} ${
        retracted ? 'k-navbar--retracted' : ''
      }`}
    >
      <div className="k-navbar__inner">
        <a href="#top" className="k-navbar__brand-link" aria-label="Kommandr OS Home">
          <KommandrLogo size={38} showText={true} />
        </a>

        <nav className={`k-navbar__nav ${menuOpen ? 'k-navbar__nav--open' : ''}`} aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="k-navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="k-navbar__mobile-cta">
            <button
              type="button"
              className="k-navbar__cta-btn"
              onClick={() => {
                setMenuOpen(false);
                onOpenModal('Start Free Trial');
              }}
            >
              Start Free Trial
            </button>
          </div>
        </nav>

        <div className="k-navbar__actions">
          <button
            type="button"
            className="k-navbar__pill-action"
            onClick={() => onOpenModal('Start Free Trial')}
          >
            <span className="k-navbar__status-dot" />
            <span>Launch OS</span>
          </button>

          <button
            type="button"
            className={`k-navbar__hamburger ${menuOpen ? 'k-navbar__hamburger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Drawer"
            aria-expanded={menuOpen}
          >
            <span className="k-navbar__bar" />
            <span className="k-navbar__bar" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
