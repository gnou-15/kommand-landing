import { useState } from 'react';
import { LIFECYCLE_PILLARS } from '../../data/kommandrData';
import './LifecycleBento.css';

export function LifecycleBento() {
  const [selectedStep, setSelectedStep] = useState(LIFECYCLE_PILLARS[0].step);
  const activePillar =
    LIFECYCLE_PILLARS.find((p) => p.step === selectedStep) || LIFECYCLE_PILLARS[0];

  return (
    <section id="lifecycle" className="k-lifecycle">
      <div className="k-lifecycle__container">
        <div className="k-lifecycle__header">
          <div className="k-section-tag">
            <span className="k-section-tag__dot" />
            <span>6-PILLAR OPERATING SYSTEM</span>
          </div>
          <h2 className="k-section-title">
            Every Flip Workflow.{' '}
            <span className="k-text-gradient">One Unified Command Deck.</span>
          </h2>
          <p className="k-section-subtitle">
            Instead of drowning in 8 messy tabs and disconnected apps, Kommandr OS structures your entire furniture resale lifecycle into six clean operational modules.
          </p>
        </div>

        {/* Interactive 6-Step Selector Bar */}
        <div className="k-lifecycle__rail" role="tablist" aria-label="6-Step Resale Lifecycle">
          {LIFECYCLE_PILLARS.map((pillar) => {
            const isActive = pillar.step === selectedStep;
            return (
              <button
                key={pillar.step}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`k-lifecycle__tab ${isActive ? 'k-lifecycle__tab--active' : ''}`}
                onClick={() => setSelectedStep(pillar.step)}
              >
                <span className="k-lifecycle__tab-num">{pillar.step}</span>
                <span className="k-lifecycle__tab-code">{pillar.code}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Spotlight Console + 6-Card Bento Grid */}
        <div className="k-lifecycle__spotlight">
          <div className="k-lifecycle__spotlight-main">
            <div className="k-lifecycle__spotlight-top">
              <span className="k-lifecycle__step-pill">
                STEP {activePillar.step} // {activePillar.code}
              </span>
              <div className="k-lifecycle__metrics-row">
                {activePillar.metrics.map((m) => (
                  <div key={m.label} className="k-lifecycle__metric-chip">
                    <span className="k-lifecycle__metric-val">{m.value}</span>
                    <span className="k-lifecycle__metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="k-lifecycle__spotlight-title">{activePillar.title}</h3>
            <p className="k-lifecycle__spotlight-tagline">{activePillar.tagline}</p>
            <p className="k-lifecycle__spotlight-desc">{activePillar.description}</p>

            <ul className="k-lifecycle__checklist">
              {activePillar.highlights.map((item) => (
                <li key={item} className="k-lifecycle__check-item">
                  <span className="k-lifecycle__check-icon" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Interactive HUD Telemetry Panel */}
          <div className="k-lifecycle__spotlight-hud">
            <div className="k-lifecycle__hud-window">
              <div className="k-lifecycle__hud-bar">
                <span className="k-lifecycle__hud-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="k-lifecycle__hud-title">
                  KOMMANDR_OS // MODULE_{activePillar.code}.SYS
                </span>
              </div>

              <div className="k-lifecycle__hud-body">
                <div className="k-lifecycle__hud-radar">
                  <div className="k-lifecycle__hud-ring k-lifecycle__hud-ring--outer" />
                  <div className="k-lifecycle__hud-ring k-lifecycle__hud-ring--inner" />
                  <div className="k-lifecycle__hud-core">
                    <span className="k-lifecycle__hud-step">{activePillar.step}</span>
                    <span className="k-lifecycle__hud-code">{activePillar.code}</span>
                  </div>
                </div>

                <div className="k-lifecycle__hud-cards">
                  {activePillar.highlights.map((point, index) => (
                    <div key={point} className="k-lifecycle__hud-row">
                      <span className="k-lifecycle__hud-idx">0{index + 1}</span>
                      <span className="k-lifecycle__hud-text">{point}</span>
                      <span className="k-lifecycle__hud-status">ONLINE</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact All-6 Overview Bento Grid Below */}
        <div className="k-lifecycle__grid">
          {LIFECYCLE_PILLARS.map((pillar) => {
            const isSelected = pillar.step === selectedStep;
            return (
              <article
                key={pillar.step}
                className={`k-lifecycle__card ${isSelected ? 'k-lifecycle__card--selected' : ''}`}
                onClick={() => setSelectedStep(pillar.step)}
              >
                <div className="k-lifecycle__card-head">
                  <span className="k-lifecycle__card-step">
                    {pillar.step} / {pillar.code}
                  </span>
                  <span className="k-lifecycle__card-stat">{pillar.metrics[0].value}</span>
                </div>
                <h4 className="k-lifecycle__card-title">{pillar.title}</h4>
                <p className="k-lifecycle__card-text">{pillar.tagline}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LifecycleBento;
