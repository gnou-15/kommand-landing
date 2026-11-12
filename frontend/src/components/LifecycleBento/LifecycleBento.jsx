import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './LifecycleBento.css';

const WORKFLOW_STEPS = [
  {
    number: '1',
    title: 'Find good deals',
    subtitle: 'See matching furniture nearby',
    id: 'find-deals',
    image: '/step-find-deals.jpg',
    tag: '24/7 Cloud Sniper',
  },
  {
    number: '2',
    title: 'Get it listed',
    subtitle: 'Keep your inventory and listings together',
    id: 'get-listed',
    image: '/step-get-listed.jpg',
    tag: '1-Click Cross-Post',
  },
  {
    number: '3',
    title: 'Turn chats into sales',
    subtitle: 'Manage buyers and book pickups, deliveries, or showroom visits',
    id: 'turn-chats',
    image: '/step-chats-sales.jpg',
    tag: 'Unified Buyer Inbox',
  },
  {
    number: '4',
    title: 'See your real profit',
    subtitle: 'Track sales, costs and money kept',
    id: 'see-profit',
    image: '/step-real-profit.jpg',
    tag: 'Net Margin Ledger',
  },
];

export function LifecycleBento() {
  return (
    <section id="lifecycle" className="k-lifecycle">
      <div className="k-lifecycle__container">
        {/* Section Heading */}
        <ScrollReveal variant="fade-up">
          <div className="k-lifecycle__header">
            <h2 className="k-lifecycle__title">
              Find deals. Sell furniture.
              <br />
              Get your <span className="k-lifecycle__title-accent">time back.</span>
            </h2>
            <p className="k-lifecycle__subtitle">
              One place to run your furniture business.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Step Full-Bleed Image Cards with Sculpted Bottom Content Card */}
        <div className="k-lifecycle__steps-row">
          {WORKFLOW_STEPS.map((step, index) => (
            <ScrollReveal
              key={step.id}
              variant="fade-up"
              delay={index * 95}
              className="k-lifecycle__step-reveal"
            >
              <article className="k-lifecycle__step-card">
                {/* Full-Bleed Editorial Background Photo */}
                <div className="k-lifecycle__card-media" aria-hidden="true">
                  <img
                    src={step.image}
                    alt=""
                    className="k-lifecycle__card-img"
                    loading="lazy"
                  />
                  <div className="k-lifecycle__card-scrim" />
                </div>

                {/* Floating Bottom Content Panel with Circular Step Bulge Notch */}
                <div className="k-lifecycle__card-body">
                  <div className="k-lifecycle__badge-ring">
                    <span className="k-lifecycle__step-num">{step.number}</span>
                  </div>

                  <span className="k-lifecycle__step-tag">{step.tag}</span>
                  <h3 className="k-lifecycle__step-heading">{step.title}</h3>
                  <p className="k-lifecycle__step-sub">{step.subtitle}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Dual Summary Pill ("Know what you make | Spend less time managing it") */}
        <ScrollReveal variant="fade-up" delay={260}>
          <div className="k-lifecycle__summary-wrap">
            <div className="k-lifecycle__summary-bar">
              <div className="k-lifecycle__summary-item">
                <span className="k-lifecycle__summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M14.5 9.5C16.9853 9.5 19 11.5147 19 14C19 16.4853 16.9853 18.5 14.5 18.5C12.4 18.5 10.63 17.06 10.14 15.1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 7.8V12.2M8.5 9.2H11.2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Know what you make</span>
              </div>

              <span className="k-lifecycle__summary-divider" aria-hidden="true" />

              <div className="k-lifecycle__summary-item">
                <span className="k-lifecycle__summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M12 7.5V12L15 14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Spend less time managing it</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default LifecycleBento;
