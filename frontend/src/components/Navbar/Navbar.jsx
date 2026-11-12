import { useState, useEffect, useRef } from 'react';
import KommandrLogo from '../KommandrLogo/KommandrLogo';
import { NAV_LINKS } from '../../data/kommandrData';
import './Navbar.css';

export function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [retracted, setRetracted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 24);

      if (currentY <= 80) {
        setRetracted(false);
      } else if (delta > 6) {
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
  }, []);

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

        <nav className="k-navbar__nav" aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="k-navbar__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="k-navbar__actions">
          <a
            href="#login"
            className="k-navbar__login-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal('Log In — Kommandr OS');
            }}
          >
            Login
          </a>

          <button
            type="button"
            className="k-navbar__signin-btn"
            onClick={() => onOpenModal('Start Free — Kommandr OS')}
          >
            <span className="k-navbar__signin-shimmer" aria-hidden="true" />
            <span className="k-navbar__signin-text">Start Free</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
