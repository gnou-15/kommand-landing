import { useState } from 'react';
import './Hero.css';

export function Hero({ onOpenModal, theme = 'dark', onToggleTheme }) {
  const [isPulling, setIsPulling] = useState(false);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('lifecycle');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePullCord = () => {
    if (isPulling) return;
    setIsPulling(true);
    if (onToggleTheme) {
      onToggleTheme();
    }
    setTimeout(() => {
      setIsPulling(false);
    }, 520);
  };

  return (
    <section id="top" className="k-hero">
      {/* Full-Bleed Dual Background Images (Dark Lamp ON vs. Light Ivory Lamp OFF) */}
      <div className="k-hero__backdrop" aria-hidden="true">
        <img
          src="/hero-interior.jpg"
          alt=""
          className={`k-hero__bg-img k-hero__bg-img--dark ${
            theme === 'dark' ? 'k-hero__bg-img--active' : ''
          }`}
        />
        <img
          src="/hero-interior-light.jpg"
          alt=""
          className={`k-hero__bg-img k-hero__bg-img--light ${
            theme === 'light' ? 'k-hero__bg-img--active' : ''
          }`}
        />
        <div className="k-hero__overlay" />
      </div>

      {/* Interactive Dangling Lamp Pull-Cord Switch (Anchored Inside the Brass Lamp Shade) */}
      <div
        className={`k-hero__lamp-cord-wrap ${
          isPulling ? 'k-hero__lamp-cord-wrap--pulling' : ''
        }`}
      >
        {/* Stationary Recessed Brass Socket / Eyelet Inside the Lamp Head */}
        <span className="k-hero__lamp-socket" aria-hidden="true">
          <span className="k-hero__lamp-socket-hole" />
        </span>

        <div className="k-hero__lamp-cord-sway">
          <span className="k-hero__lamp-chain" aria-hidden="true" />
          <button
            type="button"
            className="k-hero__lamp-knob"
            onClick={handlePullCord}
            aria-label={
              theme === 'dark'
                ? 'Pull lamp cord to turn off light and switch to Light Mode'
                : 'Pull lamp cord to turn on light and switch to Dark Mode'
            }
          >
            <span className="k-hero__lamp-knob-cap" aria-hidden="true" />
            <span className="k-hero__lamp-knob-bulb" aria-hidden="true" />
            <span className="k-hero__lamp-knob-pulse" aria-hidden="true" />
            <span className="k-hero__lamp-tooltip">
              {theme === 'dark' ? 'Pull: Lights Off' : 'Pull: Lights On'}
            </span>
          </button>
        </div>
      </div>

      <div id="command-center" className="k-hero__container">
        <div className="k-hero__left">
          <div className="k-hero__eyebrow">
            <span className="k-hero__eyebrow-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <rect x="2.5" y="2.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 2.5V5.5M10 14.5V17.5M2.5 10H5.5M14.5 10H17.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </span>
            <span>Your AI-powered advantage in furniture flipping.</span>
          </div>

          <h1 className="k-hero__headline">
            Effortless
            <br />
            <span className="k-hero__headline-fade">Flipping</span>
          </h1>

          <p className="k-hero__lead">
            Source underpriced furniture 24/7, verify real comps, cross-post at human speed, and run your storefront, CRM &amp; tax books in one OS.
          </p>

          <p className="k-hero__substatement">
            One command — <strong>more actions, more profit</strong>, less time, less hassle.
          </p>

          <div className="k-hero__cta-group">
            <button
              type="button"
              className="k-hero__glass-pill"
              onClick={() => onOpenModal('Start Free — Kommandr OS')}
            >
              <span>Start Free</span>
              <span className="k-hero__glass-pill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" strokeDasharray="42 14" />
                  <path d="M10.5 8.5L14 12L10.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <a href="#pricing" className="k-hero__secondary-link">
              <span className="k-hero__secondary-text" data-text="See Plans">
                See Plans
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Sculpted Bottom Bulge & Rotating Circular Scroll Badge */}
      <div className="k-hero__bulge-wrap">
        <div className="k-hero__bulge-line-left" aria-hidden="true" />

        <div className="k-hero__bulge-arch">
          <svg
            className="k-hero__bulge-svg"
            viewBox="0 0 240 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="k-hero__bulge-path"
              d="M0,120 L0,96 C42,96 62,10 120,10 C178,10 198,96 240,96 L240,120 Z"
            />
          </svg>

          <button
            type="button"
            className="k-hero__orbit-btn"
            onClick={handleScrollDown}
            aria-label="Scroll down to explore Kommandr OS"
          >
            <svg
              className="k-hero__orbit-spinner"
              viewBox="0 0 120 120"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="kHeroOrbitTextPath"
                  d="M 60, 60 m -41, 0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0"
                />
              </defs>
              <text className="k-hero__orbit-text">
                <textPath href="#kHeroOrbitTextPath" startOffset="0%" textLength="250">
                  EXPLORE HOW KOMMANDR WORKS •&#160;
                </textPath>
              </text>
            </svg>

            <span className="k-hero__orbit-core" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 7L17 17M17 17V8.5M17 17H8.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="k-hero__bulge-line-right" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;
