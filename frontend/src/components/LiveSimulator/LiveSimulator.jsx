import { useRef } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './LiveSimulator.css';

const TOOL_ROWS = [
  {
    id: 'row-1',
    direction: 'left',
    duration: '34s',
    items: [
      { id: 'fb', name: 'Facebook Marketplace', category: 'Marketplace', color: '#1877F2', icon: 'fb' },
      { id: 'stripe', name: 'Stripe Payments', category: 'Checkout', color: '#635BFF', icon: 'stripe' },
      { id: 'gcal', name: 'Google Calendar', category: 'Scheduling', color: '#4285F4', icon: 'gcal' },
      { id: 'ig', name: 'Instagram Shop', category: 'Social', color: '#E1306C', icon: 'ig' },
      { id: 'maps', name: 'Local Route Maps', category: 'Delivery', color: '#34A853', icon: 'maps' },
      { id: 'linkedin', name: 'LinkedIn B2B', category: 'Network', color: '#0A66C2', icon: 'linkedin' },
      { id: 'messenger', name: 'Messenger Inbox', category: 'Buyer Chat', color: '#00B2FF', icon: 'messenger' },
      { id: 'google', name: 'Google Business', category: 'Local SEO', color: '#4285F4', icon: 'google' },
    ],
  },
  {
    id: 'row-2',
    direction: 'right',
    duration: '38s',
    items: [
      { id: 'offerup', name: 'OfferUp Local', category: 'Marketplace', color: '#00AB80', icon: 'offerup' },
      { id: 'applepay', name: 'Apple Pay', category: 'Tap to Pay', color: '#F5F7FA', icon: 'applepay' },
      { id: 'youtube', name: 'YouTube Shorts', category: 'Showcase', color: '#FF0000', icon: 'youtube' },
      { id: 'storefront', name: 'Web Storefront', category: 'Direct Site', color: '#7DD3FC', icon: 'storefront' },
      { id: 'claude', name: 'Muse AI Engine', category: 'Auto-Reply', color: '#D97757', icon: 'claude' },
      { id: 'ebay', name: 'eBay Motors & Home', category: 'Marketplace', color: '#E53238', icon: 'ebay' },
      { id: 'chrome', name: 'Kommandr Extension', category: 'Browser Sync', color: '#38BDF8', icon: 'chrome' },
      { id: 'shorts', name: 'Reels & Shorts', category: 'Video Feed', color: '#FF4E45', icon: 'shorts' },
    ],
  },
  {
    id: 'row-3',
    direction: 'left',
    duration: '32s',
    items: [
      { id: 'tiktok', name: 'TikTok Shop', category: 'Social Video', color: '#25F4EE', icon: 'tiktok' },
      { id: 'zapier', name: 'Zapier Webhooks', category: 'Automation', color: '#FF4F00', icon: 'zapier' },
      { id: 'openai', name: 'OpenAI Vision', category: 'Price Comping', color: '#10A37F', icon: 'openai' },
      { id: 'analytics', name: 'Profit Analytics', category: 'Net Ledger', color: '#F59E0B', icon: 'analytics' },
      { id: 'square', name: 'Square POS', category: 'Showroom POS', color: '#E2E8F0', icon: 'square' },
      { id: 'gdrive', name: 'Google Drive CSV', category: 'Tax Exports', color: '#3B82F6', icon: 'gdrive' },
      { id: 'make', name: 'Make Workflows', category: 'Sync', color: '#9333EA', icon: 'make' },
    ],
  },
];

function ToolIcon({ icon, color }) {
  switch (icon) {
    case 'fb':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" fill={color} />
          <path
            d="M15.6 22V14.8H18L18.4 12H15.6V10.2C15.6 9.4 15.9 8.8 17 8.8H18.5V6.3C17.8 6.2 17 6.1 16.1 6.1C13.8 6.1 12.4 7.5 12.4 10V12H10V14.8H12.4V22H15.6Z"
            fill="#ffffff"
          />
        </svg>
      );
    case 'stripe':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M13.3 11.2C13.3 10.3 14.1 9.9 15.3 9.9C16.9 9.9 18.8 10.4 20.3 11.3V7.3C18.6 6.6 17 6.3 15.3 6.3C11.2 6.3 8.5 8.4 8.5 11.7C8.5 16.9 15.7 16.1 15.7 18.3C15.7 19.4 14.7 19.8 13.4 19.8C11.5 19.8 9.3 19 7.6 18V22.1C9.5 23 11.5 23.4 13.4 23.4C17.6 23.4 20.5 21.4 20.5 18C20.5 12.4 13.3 13.4 13.3 11.2Z"
            fill={color}
          />
        </svg>
      );
    case 'gcal':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5" y="6" width="18" height="17" rx="4" fill="#1E293B" stroke={color} strokeWidth="1.8" />
          <path d="M5 10.5H23" stroke={color} strokeWidth="1.6" />
          <text x="14" y="19.5" textAnchor="middle" fill="#F8FAFC" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">
            31
          </text>
        </svg>
      );
    case 'ig':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5.5" y="5.5" width="17" height="17" rx="5" stroke={color} strokeWidth="2" />
          <circle cx="14" cy="14" r="3.8" stroke={color} strokeWidth="2" />
          <circle cx="18.8" cy="9.2" r="1.2" fill={color} />
        </svg>
      );
    case 'maps':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M14 5C10.1 5 7 8.1 7 12C7 17.2 14 23 14 23C14 23 21 17.2 21 12C21 8.1 17.9 5 14 5Z"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx="14" cy="12" r="2.8" fill={color} />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5" y="5" width="18" height="18" rx="4" fill={color} />
          <text x="14" y="18" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">
            in
          </text>
        </svg>
      );
    case 'messenger':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M14 5.5C8.8 5.5 4.8 9.1 4.8 13.8C4.8 16.3 6 18.5 8 19.9V23L11 21.3C12 21.6 13 21.8 14 21.8C19.2 21.8 23.2 18.2 23.2 13.5C23.2 8.9 19.2 5.5 14 5.5Z"
            stroke={color}
            strokeWidth="2"
          />
          <path d="M9.5 15.5L13 11.8L15.4 14L18.8 11.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'offerup':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5" y="5" width="18" height="18" rx="5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.8" />
          <path d="M9.5 14.5L13.5 18.5L19 10.5" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'applepay':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="4" y="8" width="20" height="12" rx="3.5" stroke={color} strokeWidth="1.6" />
          <text x="14" y="16.5" textAnchor="middle" fill={color} fontSize="7.2" fontWeight="700" fontFamily="sans-serif">
            Pay
          </text>
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="4.5" y="7.5" width="19" height="13" rx="4" fill={color} />
          <path d="M12.2 11.2L17 14L12.2 16.8V11.2Z" fill="#ffffff" />
        </svg>
      );
    case 'storefront':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M6 11L7.8 6.5H20.2L22 11H6Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M7.5 11V21H20.5V11" stroke={color} strokeWidth="1.8" />
          <rect x="11.5" y="14.5" width="5" height="6.5" stroke={color} strokeWidth="1.6" />
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M14 5.5V22.5M5.5 14H22.5M8 8L20 20M20 8L8 20"
            stroke={color}
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'ebay':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9.5" stroke={color} strokeWidth="1.8" />
          <path d="M9.5 14H18.5M14 9.5V18.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'chrome':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9" stroke={color} strokeWidth="1.9" />
          <circle cx="14" cy="14" r="3.6" fill={color} />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M16.5 6.5V17.2C16.5 19.2 14.9 20.8 12.9 20.8C10.9 20.8 9.3 19.2 9.3 17.2C9.3 15.2 10.9 13.6 12.9 13.6V10.6C16.5 10.6 16.5 6.5 16.5 6.5ZM16.5 6.5C17.2 8.7 19 10.1 21 10.3"
            stroke={color}
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'zapier':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="5.5" y="5.5" width="17" height="17" rx="4.5" fill={color} />
          <path d="M9 14H19M14 9V19" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'openai':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="8.8" stroke={color} strokeWidth="1.8" strokeDasharray="4 2" />
          <polygon points="14,8.5 18.8,11.2 18.8,16.8 14,19.5 9.2,16.8 9.2,11.2" stroke={color} strokeWidth="1.7" />
        </svg>
      );
    case 'analytics':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="7" y="15" width="3.2" height="6.5" rx="1.2" fill={color} />
          <rect x="12.4" y="11.5" width="3.2" height="10" rx="1.2" fill={color} />
          <rect x="17.8" y="7.5" width="3.2" height="14" rx="1.2" fill={color} />
        </svg>
      );
    case 'square':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <rect x="6.5" y="6.5" width="15" height="15" rx="3.5" stroke={color} strokeWidth="2.1" />
          <rect x="11" y="11" width="6" height="6" rx="1.2" fill={color} />
        </svg>
      );
    case 'gdrive':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M11.2 6.5H16.8L22.5 16.5H16.8L11.2 6.5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M5.5 16.5L11.2 6.5L14 11.5L8.3 21.5L5.5 16.5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8.3 21.5H19.7L22.5 16.5H11.2L8.3 21.5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M21.8 14.2C21.8 13.6 21.7 13.1 21.6 12.6H14V15.7H18.4C18.2 16.7 17.6 17.6 16.7 18.2V20.2H19.3C20.9 18.8 21.8 16.7 21.8 14.2Z"
            fill={color}
          />
          <path
            d="M14 22C16.2 22 18 21.3 19.3 20.1L16.7 18.1C16 18.6 15.1 18.9 14 18.9C11.9 18.9 10.1 17.5 9.5 15.6H6.8V17.7C8.1 20.3 10.8 22 14 22Z"
            fill="#34A853"
          />
          <path
            d="M9.5 15.6C9.3 15.1 9.2 14.6 9.2 14C9.2 13.4 9.3 12.9 9.5 12.4V10.3H6.8C6.3 11.4 6 12.7 6 14C6 15.3 6.3 16.6 6.8 17.7L9.5 15.6Z"
            fill="#FBBC05"
          />
          <path
            d="M14 9.1C15.2 9.1 16.3 9.5 17.1 10.3L19.4 8C18 6.7 16.2 6 14 6C10.8 6 8.1 7.7 6.8 10.3L9.5 12.4C10.1 10.5 11.9 9.1 14 9.1Z"
            fill="#EA4335"
          />
        </svg>
      );
    case 'shorts':
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path
            d="M17.8 6.2L9.6 11C8 11.9 7.5 13.9 8.5 15.4C9 16.2 9.8 16.7 10.7 16.9L9.4 17.7C7.8 18.6 7.3 20.6 8.3 22.1C9.3 23.6 11.3 24.1 12.9 23.1L21.1 18.3C22.7 17.4 23.2 15.4 22.2 13.9C21.7 13.1 20.9 12.6 20 12.4L21.3 11.6C22.9 10.7 23.4 8.7 22.4 7.2C21.4 5.7 19.4 5.2 17.8 6.2Z"
            fill={color}
          />
          <path d="M13 11.8L17.2 14.5L13 17.2V11.8Z" fill="#ffffff" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M8 19L11.5 9M13.5 19L17 9M19 19V9" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}

function MarqueeRow({ row }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  const rampPlaybackRate = (targetRate) => {
    const el = trackRef.current;
    if (!el || typeof el.getAnimations !== 'function') return;
    const [anim] = el.getAnimations();
    if (!anim) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const step = () => {
      const current = anim.playbackRate;
      const diff = targetRate - current;
      if (Math.abs(diff) < 0.025) {
        anim.playbackRate = targetRate;
        rafRef.current = null;
        return;
      }
      anim.playbackRate = current + diff * 0.16;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  };

  // Duplicate list twice for a seamless 50% loop
  const loopedItems = [...row.items, ...row.items];

  return (
    <div
      className="k-tools__row"
      onMouseEnter={() => rampPlaybackRate(0)}
      onMouseLeave={() => rampPlaybackRate(1)}
    >
      <div
        ref={trackRef}
        className={`k-tools__track k-tools__track--${row.direction}`}
        style={{ '--row-duration': row.duration }}
      >
        {loopedItems.map((tool, idx) => (
          <div
            key={`${tool.id}-${idx}`}
            className="k-tools__pill"
          >
            <span className="k-tools__icon-box" aria-hidden="true">
              <ToolIcon icon={tool.icon} color={tool.color} />
            </span>
            <div className="k-tools__meta">
              <span className="k-tools__name">{tool.name}</span>
              <span className="k-tools__cat">{tool.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LiveSimulator() {
  return (
    <section id="live-simulator" className="k-tools">
      <div className="k-tools__container">
        <ScrollReveal variant="fade-up">
          <div className="k-tools__header">
            <div className="k-tools__badge">
              <span className="k-tools__badge-dot" aria-hidden="true" />
              <span>23 NATIVE CONNECTIONS</span>
            </div>
            <h2 className="k-tools__title">
              Connect
              <br />
              <span className="k-tools__title-accent">your favorite tools.</span>
            </h2>
            <p className="k-tools__subtitle">
              Sync 23 marketplaces, payment gateways, calendars, and AI automations in one command flow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={110}>
          <div className="k-tools__stage" aria-label="Connected tools carousel">
            {TOOL_ROWS.map((row) => (
              <MarqueeRow key={row.id} row={row} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default LiveSimulator;
