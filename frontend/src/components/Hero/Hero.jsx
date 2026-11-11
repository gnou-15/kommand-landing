import { useState, useEffect, useRef } from 'react';
import { HERO_CALLOUTS } from '../../data/kommandrData';
import './Hero.css';

export function Hero({ onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boostDisplay, setBoostDisplay] = useState(0);
  const [clickPulse, setClickPulse] = useState(false);

  const bladeGroupRef = useRef(null);
  const radarRingRef = useRef(null);
  const spinStateRef = useRef({
    angle: 0,
    boostVelocity: 0,
    lastTime: null,
  });

  const activeCallout = HERO_CALLOUTS[activeIndex];

  useEffect(() => {
    let rafId;
    const BASE_DEG_PER_SEC = 14; // Normal smooth turbine rotation

    const animateTurbine = (timestamp) => {
      const state = spinStateRef.current;
      if (state.lastTime === null) {
        state.lastTime = timestamp;
      }
      const dt = Math.min(0.05, (timestamp - state.lastTime) / 1000);
      state.lastTime = timestamp;

      // Advance turbine angle by base speed + current boost velocity
      const currentSpeed = BASE_DEG_PER_SEC + state.boostVelocity;
      state.angle = (state.angle + currentSpeed * dt) % 360;

      if (bladeGroupRef.current) {
        bladeGroupRef.current.setAttribute(
          'transform',
          `rotate(${state.angle.toFixed(2)} 180 180)`
        );
      }

      if (radarRingRef.current) {
        radarRingRef.current.setAttribute(
          'transform',
          `rotate(${(-state.angle * 0.45).toFixed(2)} 180 180)`
        );
      }

      // Exponential friction decay back to normal spinning
      if (state.boostVelocity > 0.2) {
        state.boostVelocity *= Math.pow(0.42, dt);
        if (state.boostVelocity < 0.5) {
          state.boostVelocity = 0;
          setBoostDisplay(0);
        } else {
          setBoostDisplay(Math.min(100, Math.round((state.boostVelocity / 1100) * 100)));
        }
      }

      rafId = requestAnimationFrame(animateTurbine);
    };

    rafId = requestAnimationFrame(animateTurbine);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleCoreBoostClick = () => {
    // Stack boost velocity on every click (up to hyper-spin cap)
    spinStateRef.current.boostVelocity = Math.min(
      1400,
      spinStateRef.current.boostVelocity + 340
    );
    setBoostDisplay(
      Math.min(100, Math.round((spinStateRef.current.boostVelocity / 1100) * 100))
    );
    setClickPulse(true);
    setTimeout(() => setClickPulse(false), 260);
  };

  const handleCycleCallout = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_CALLOUTS.length);
  };

  return (
    <section id="top" className="k-hero">
      {/* Atmospheric Mist / Slate Landscape Backdrop */}
      <div className="k-hero__atmosphere" aria-hidden="true">
        <div className="k-hero__mist-top" />
        <div className="k-hero__glow-orb k-hero__glow-orb--teal" />
        <div className="k-hero__glow-orb k-hero__glow-orb--ember" />
        <div className="k-hero__terrain-silhouette" />
      </div>

      <div className="k-hero__container">
        {/* MAIN UPPER 3-COLUMN GRID (Matches TechCool Layout) */}
        <div className="k-hero__stage">
          {/* LEFT COLUMN: Tagline, Giant Display Title, Glass Pill CTA */}
          <div className="k-hero__left">
            <div className="k-hero__eyebrow">
              <span className="k-hero__eyebrow-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <rect x="2.5" y="2.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="3" stroke="#E6B64C" strokeWidth="1.5" />
                  <path d="M10 2.5V5.5M10 14.5V17.5M2.5 10H5.5M14.5 10H17.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
              <span>AI-powered resale command system.</span>
            </div>

            <h1 className="k-hero__headline">
              Effortless
              <br />
              <span className="k-hero__headline-fade">Flipping</span>
            </h1>

            <p className="k-hero__lead">
              Source underpriced furniture 24/7, verify real comps, cross-post at human speed, and run your storefront, CRM &amp; tax books in one OS.
            </p>

            <div className="k-hero__cta-group">
              <button
                type="button"
                className="k-hero__glass-pill"
                onClick={() => onOpenModal('Explore Command OS — Free Starter')}
              >
                <span>Explore Command OS</span>
                <span className="k-hero__glass-pill-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" strokeDasharray="42 14" />
                    <path d="M10.5 8.5L14 12L10.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <a href="#live-simulator" className="k-hero__secondary-link">
                Test Live Deal Sniper
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: 3D-Style Glowing Kommandr OS Core / Couch-Command Turbine */}
          <div className="k-hero__center">
            <div
              className={`k-hero__core-housing ${
                boostDisplay > 0 ? 'k-hero__core-housing--boosted' : ''
              }`}
              style={{ '--boost-intensity': (boostDisplay / 100).toFixed(2) }}
            >
              {/* Outer Metallic Squircle Chassis (Like the TechCool Cooler Frame) */}
              <div className="k-hero__chassis">
                <div className="k-hero__chassis-corner k-hero__chassis-corner--tl" />
                <div className="k-hero__chassis-corner k-hero__chassis-corner--tr" />
                <div className="k-hero__chassis-corner k-hero__chassis-corner--bl" />
                <div className="k-hero__chassis-corner k-hero__chassis-corner--br" />

                {/* Brushed Steel Bezel Ring */}
                <div className="k-hero__bezel-ring">
                  <div className="k-hero__bezel-notch" />

                  {/* Rotating Turbine Blades + Glowing Fiery Ember Ring */}
                  <div className="k-hero__ember-chamber">
                    <svg
                      viewBox="0 0 360 360"
                      className="k-hero__turbine-svg"
                      aria-label="Kommandr OS 3D AI Core and Sofa Rank Crest"
                    >
                      <defs>
                        <radialGradient id="coreFireGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FF3D00" stopOpacity="0.45" />
                          <stop offset="55%" stopColor="#FF5520" stopOpacity="0.85" />
                          <stop offset="76%" stopColor="#FFB300" stopOpacity="0.95" />
                          <stop offset="92%" stopColor="#1B0A05" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#09131A" stopOpacity="1" />
                        </radialGradient>
                        <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#5A2318" />
                          <stop offset="50%" stopColor="#261312" />
                          <stop offset="100%" stopColor="#0F1820" />
                        </linearGradient>
                        <linearGradient id="hubMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2B3E4C" />
                          <stop offset="50%" stopColor="#121E28" />
                          <stop offset="100%" stopColor="#091117" />
                        </linearGradient>
                        <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFE596" />
                          <stop offset="45%" stopColor="#E6B64C" />
                          <stop offset="100%" stopColor="#C58922" />
                        </linearGradient>
                      </defs>

                      {/* Ambient Fire Chamber */}
                      <circle cx="180" cy="180" r="144" fill="url(#coreFireGlow)" />

                      {/* 11 Precision Radial Scanner Blades (Driven by Physics RAF) */}
                      <g ref={bladeGroupRef} className="k-hero__blade-group">
                        {Array.from({ length: 11 }).map((_, idx) => {
                          const angle = idx * (360 / 11);
                          return (
                            <g key={idx} transform={`rotate(${angle} 180 180)`}>
                              <path
                                d="M168 52 C186 54, 202 82, 196 126 L170 126 C164 88, 158 64, 168 52 Z"
                                fill="url(#bladeGrad)"
                                stroke="rgba(255, 120, 68, 0.38)"
                                strokeWidth="1.2"
                              />
                            </g>
                          );
                        })}
                      </g>

                      {/* Intense Neon Orange-Red Outer Ring (Exact TechCool Ring Vibe) */}
                      <circle
                        cx="180"
                        cy="180"
                        r="138"
                        fill="none"
                        stroke="#FF5520"
                        strokeWidth="4.5"
                        className="k-hero__neon-ring"
                      />
                      <circle
                        cx="180"
                        cy="180"
                        r="134"
                        fill="none"
                        stroke="#FFD180"
                        strokeWidth="1.5"
                        strokeOpacity="0.85"
                      />

                      {/* Inner Counter-Rotating Radar Sweep Ring */}
                      <circle
                        ref={radarRingRef}
                        cx="180"
                        cy="180"
                        r="102"
                        fill="none"
                        stroke="rgba(255, 158, 102, 0.45)"
                        strokeWidth="1.6"
                        strokeDasharray="10 8"
                      />

                      {/* CLICKABLE CENTER LOGO HUB BUTTON */}
                      <g
                        className={`k-hero__core-trigger ${
                          clickPulse ? 'k-hero__core-trigger--pulse' : ''
                        }`}
                        onClick={handleCoreBoostClick}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleCoreBoostClick();
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Click to overdrive the Kommandr OS turbine"
                      >
                        <title>Click repeatedly to overdrive the Kommandr turbine!</title>
                        {/* Center Armored Hub */}
                        <circle
                          cx="180"
                          cy="180"
                          r="72"
                          fill="url(#hubMetallic)"
                          stroke={boostDisplay > 15 ? '#FF5520' : 'rgba(230, 182, 76, 0.65)'}
                          strokeWidth="2.8"
                          className="k-hero__hub-outer"
                        />
                        <circle
                          cx="180"
                          cy="180"
                          r="61"
                          fill="#0A141C"
                          stroke="rgba(154, 209, 230, 0.28)"
                          strokeWidth="1.2"
                        />

                        {/* Center Embedded Sofa + Rank Chevron Crest */}
                        <g transform="translate(132, 126) scale(0.8)">
                          {/* Sofa Back Cushions */}
                          <path
                            d="M29 19C29 14.5817 32.5817 11 37 11H54C56.7614 11 59 13.2386 59 16V37H29V19Z"
                            fill="#4A6475"
                          />
                          <path
                            d="M61 16C61 13.2386 63.2386 11 66 11H83C87.4183 11 91 14.5817 91 19V37H61V16Z"
                            fill="#243847"
                          />
                          {/* Sofa Arms */}
                          <path
                            d="M23.5 28.5C19.0817 28.5 15.5 32.0817 15.5 36.5C15.5 40.366 18.2423 43.5899 21.8902 44.3369L23.5 44.6665V56.5H30.5V41.5C30.5 39.2909 32.2909 37.5 34.5 37.5H85.5C87.7091 37.5 89.5 39.2909 89.5 41.5V56.5H96.5V44.6665L98.1098 44.3369C101.758 43.5899 104.5 40.366 104.5 36.5C104.5 32.0817 100.918 28.5 96.5 28.5H92V35.5H28V28.5H23.5Z"
                            fill="#132533"
                            stroke="#8AB4CC"
                            strokeWidth="2"
                          />
                          <rect x="33" y="40.5" width="54" height="7" rx="3" fill="#3B5363" />
                          {/* Star */}
                          <path
                            d="M60 49L63.2 58.6H73.3L65.1 64.5L68.3 74.1L60 68.2L51.7 74.1L54.9 64.5L46.7 58.6H56.8L60 49Z"
                            fill="url(#crestGold)"
                          />
                          {/* 3 Gold Rank Chevrons */}
                          <path d="M23 64L60 91L97 64V73L60 100L23 73V64Z" fill="url(#crestGold)" />
                          <path d="M23 77L60 104L97 77V86L60 113L23 86V77Z" fill="url(#crestGold)" />
                          <path d="M23 90L60 117L97 90V98.5L60 125.5L23 98.5V90Z" fill="url(#crestGold)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glowing Connector Node on the Right Edge of the Core (Matches TechCool) */}
              <div className="k-hero__connector-bridge" aria-hidden="true">
                <span className="k-hero__connector-node">
                  <span className="k-hero__connector-node-core" />
                </span>
                <span className="k-hero__connector-line" />
              </div>

              {/* Rock / Platform Pedestal Shadow Base with Live RPM Telemetry */}
              <button
                type="button"
                className={`k-hero__pedestal-base ${
                  boostDisplay > 0 ? 'k-hero__pedestal-base--overdrive' : ''
                }`}
                onClick={handleCoreBoostClick}
                title="Click center crest to boost turbine RPM"
              >
                <span className="k-hero__pedestal-status">
                  {boostDisplay > 0
                    ? `⚡ OVERDRIVE BOOST ${boostDisplay}% • ${1200 + boostDisplay * 48} RPM`
                    : 'KOMMANDR CORE v4.2 • CLICK CREST TO BOOST'}
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Connected Frosted Glass Callout Card + Spec Pill Below */}
          <div className="k-hero__right">
            <div className="k-hero__callout-card">
              <div className="k-hero__callout-top">
                <button
                  type="button"
                  className="k-hero__play-btn"
                  onClick={handleCycleCallout}
                  title="Cycle live Kommandr OS workflow feed"
                  aria-label="Cycle live Kommandr OS workflow feed"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7.5 5.5L14.5 10L7.5 14.5V5.5Z" />
                  </svg>
                </button>
                <span className="k-hero__callout-badge">{activeCallout.badge}</span>
              </div>

              {/* High-Detail 3D-Style Connector / Hardware Visual Inside Card */}
              <div className="k-hero__callout-visual">
                <div className="k-hero__plug-graphic">
                  <div className="k-hero__plug-tip">
                    <span className="k-hero__plug-pin" />
                    <span className="k-hero__plug-pin" />
                  </div>
                  <div className="k-hero__plug-body">
                    <span className="k-hero__plug-label">{activeCallout.platform}</span>
                    <div className="k-hero__plug-metrics">
                      <span className="k-hero__plug-ask">Buy: {activeCallout.askPrice}</span>
                      <span className="k-hero__plug-arrow">→</span>
                      <span className="k-hero__plug-comp">Comp: {activeCallout.compValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="k-hero__callout-copy">
                <h2 className="k-hero__callout-title">{activeCallout.title}</h2>
                <p className="k-hero__callout-sub">{activeCallout.subtitle}</p>
                <div className="k-hero__callout-profit">{activeCallout.netProfit}</div>
              </div>

              {/* Mini Step Dots to Switch Feeds */}
              <div className="k-hero__callout-dots" role="tablist" aria-label="Live OS Feeds">
                {HERO_CALLOUTS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    className={`k-hero__dot ${idx === activeIndex ? 'k-hero__dot--active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={item.badge}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Tech Spec Pill under Card (Matches "4-Pin PWM" in TechCool) */}
            <div className="k-hero__spec-footer">
              <span className="k-hero__spec-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 10H5.5L7.5 5.5L10.5 14.5L12.5 8.5L14.5 10H17.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="k-hero__spec-text">{activeCallout.specTag}</span>
            </div>
          </div>
        </div>

        {/* HORIZONTAL GLOWING AXIS DIVIDER WITH PULSING CENTER NODE (Exact TechCool Signature) */}
        <div className="k-hero__horizon" aria-hidden="true">
          <div className="k-hero__horizon-line" />
          <div className="k-hero__horizon-node">
            <span className="k-hero__horizon-ring" />
            <span className="k-hero__horizon-dot" />
          </div>
        </div>

        {/* SUB-HERO 3-COLUMN BAR (360° Monolith | Center Headline + DISCOVER NOW | Specialist Avatar Quote) */}
        <div id="command-center" className="k-hero__subbar">
          {/* Left: 3D Vertical Command Monolith with 360° Orbit Ring */}
          <div className="k-hero__monolith-wrap">
            <div className="k-hero__monolith">
              <div className="k-hero__monolith-cap" />
              <div className="k-hero__monolith-body">
                <div className="k-hero__monolith-face k-hero__monolith-face--left">
                  <span className="k-hero__monolith-led" />
                  <span className="k-hero__monolith-led" />
                  <span className="k-hero__monolith-led" />
                </div>
                <div className="k-hero__monolith-core-slit" />
                <div className="k-hero__monolith-face k-hero__monolith-face--right">
                  <span className="k-hero__monolith-tag">KONNECT</span>
                </div>
              </div>
              {/* 360° Cyan/Teal Orbit Ring */}
              <div className="k-hero__orbit-ring">
                <span className="k-hero__orbit-badge">360°</span>
              </div>
            </div>
          </div>

          {/* Center: Explore Rapid Flipping Technology + DISCOVER NOW */}
          <div className="k-hero__subcenter">
            <h2 className="k-hero__subcenter-title">
              Explore Rapid
              <br />
              Flipping Technology
            </h2>
            <a href="#lifecycle" className="k-hero__discover-link">
              DISCOVER NOW
            </a>
          </div>

          {/* Right: Avatar Badge + Bold Highlighted Blurb */}
          <div className="k-hero__subright">
            <div className="k-hero__avatar-ring">
              <div className="k-hero__avatar" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="url(#avatarBg)" />
                  <circle cx="24" cy="18" r="7.5" fill="#DCE9F2" />
                  <path
                    d="M10 42C10 34.268 16.268 28 24 28C31.732 28 38 34.268 38 42"
                    fill="#162836"
                    stroke="#8AB4CC"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id="avatarBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#65B8D6" />
                      <stop offset="100%" stopColor="#1B3B4B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="k-hero__avatar-online" />
            </div>
            <p className="k-hero__subright-copy">
              With 24/7 Cloud Automation, We Bring{' '}
              <strong>All-In-One Resale Command</strong> To Furniture Flippers &amp; Showrooms Nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
