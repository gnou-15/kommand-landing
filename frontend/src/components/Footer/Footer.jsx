import KommandrLogo from '../KommandrLogo/KommandrLogo';
import './Footer.css';

export function Footer({ onOpenModal }) {
  return (
    <footer className="k-footer">
      <div className="k-footer__container">
        <div className="k-footer__cta-banner">
          <div className="k-footer__cta-copy">
            <span className="k-footer__cta-eyebrow">READY TO TAKE COMMAND?</span>
            <h2 className="k-footer__cta-title">
              Turn Your Flipping Side-Hustle Into a High-Margin Showroom.
            </h2>
          </div>
          <div className="k-footer__cta-actions">
            <button
              type="button"
              className="k-footer__primary-btn"
              onClick={() => onOpenModal('Start Free Starter Account')}
            >
              Start Free — No Card Needed
            </button>
            <a href="https://www.kommandros.com/" target="_blank" rel="noreferrer" className="k-footer__live-link">
              Visit Current Live Site ↗
            </a>
          </div>
        </div>

        <div className="k-footer__main">
          <div className="k-footer__brand-col">
            <KommandrLogo size={42} showText={true} />
            <p className="k-footer__desc">
              The all-in-one AI operating system built for furniture flippers, appliance resellers, liquidators, and secondhand storefronts.
            </p>
            <div className="k-footer__system-badge">
              <span className="k-footer__system-dot" />
              <span>ALL SYSTEMS OPERATIONAL • CLOUD SNIPER ONLINE</span>
            </div>
          </div>

          <div className="k-footer__links-grid">
            <div className="k-footer__col">
              <h4>Platform Modules</h4>
              <a href="#lifecycle">Deal Scanner (Sniper)</a>
              <a href="#lifecycle">Price History &amp; Comping</a>
              <a href="#lifecycle">Human-Paced Cross-Posting</a>
              <a href="#lifecycle">Auto-Built Web Storefront</a>
            </div>
            <div className="k-footer__col">
              <h4>AI &amp; Infrastructure</h4>
              <a href="#live-simulator">Muse AI Dispatcher</a>
              <a href="#lifecycle">Unified CRM &amp; Business Line</a>
              <a href="#lifecycle">Kommandr Konnect Extension</a>
              <a href="#live-simulator">True Profit &amp; Tax Ledger</a>
            </div>
            <div className="k-footer__col">
              <h4>Compare &amp; Plans</h4>
              <a href="#comparison">Kommandr vs. Every Tool</a>
              <a href="#pricing">Free Starter ($0/mo)</a>
              <a href="#pricing">Flat Command Plan ($397/mo)</a>
              <a href="#pricing">Account Safety FAQ</a>
            </div>
          </div>
        </div>

        <div className="k-footer__bottom">
          <span>© {new Date().getFullYear()} Kommandr OS. All rights reserved.</span>
          <span>Designed with Precision Glassmorphism &amp; Command Crest Architecture.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
