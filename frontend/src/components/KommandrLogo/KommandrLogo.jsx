import './KommandrLogo.css';

export function KommandrLogo({ size = 38, showText = true, variant = 'default' }) {
  return (
    <div className={`kommandr-logo kommandr-logo--${variant}`}>
      <div
        className="kommandr-logo__mark"
        style={{ width: `${size}px`, height: `${Math.round(size * 1.08)}px` }}
      >
        <svg
          viewBox="0 0 120 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="kommandr-logo__svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="kShieldBg" x1="60" y1="6" x2="60" y2="128" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B303E" />
              <stop offset="50%" stopColor="#0D1922" />
              <stop offset="100%" stopColor="#070E14" />
            </linearGradient>
            <linearGradient id="kSofaLeft" x1="25" y1="10" x2="60" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#486173" />
              <stop offset="100%" stopColor="#263744" />
            </linearGradient>
            <linearGradient id="kSofaRight" x1="60" y1="10" x2="95" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1B2E3C" />
              <stop offset="100%" stopColor="#0E1A24" />
            </linearGradient>
            <linearGradient id="kGoldRank" x1="20" y1="54" x2="100" y2="122" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFE494" />
              <stop offset="35%" stopColor="#E6B64C" />
              <stop offset="70%" stopColor="#C48B24" />
              <stop offset="100%" stopColor="#FBE088" />
            </linearGradient>
            <radialGradient id="kCoreEmber" cx="50%" cy="48%" r="42%">
              <stop offset="0%" stopColor="#FF5520" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#E6B64C" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0D1922" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Crest / Sofa Shield Frame */}
          <path
            d="M25 18C25 11.9249 29.9249 7 36 7H55C57.7614 7 60 9.23858 60 12C60 9.23858 62.2386 7 65 7H84C90.0751 7 95 11.9249 95 18V25C101.627 25 107 30.3726 107 37C107 41.8434 104.131 46.017 100 47.9196V93.5L60 124L20 93.5V47.9196C15.8689 46.017 13 41.8434 13 37C13 30.3726 18.3726 25 25 25V18Z"
            fill="url(#kShieldBg)"
            stroke="#3C596B"
            strokeWidth="2.75"
          />

          {/* Two-Tone Sofa Back Cushions (Inspired by Uploaded Crest) */}
          <path
            d="M29 19C29 14.5817 32.5817 11 37 11H54C56.7614 11 59 13.2386 59 16V37H29V19Z"
            fill="url(#kSofaLeft)"
          />
          <path
            d="M61 16C61 13.2386 63.2386 11 66 11H83C87.4183 11 91 14.5817 91 19V37H61V16Z"
            fill="url(#kSofaRight)"
          />

          {/* Rolled Sofa Armrests & Crisp Inner Trim Line */}
          <path
            d="M23.5 28.5C19.0817 28.5 15.5 32.0817 15.5 36.5C15.5 40.366 18.2423 43.5899 21.8902 44.3369L23.5 44.6665V56.5H30.5V41.5C30.5 39.2909 32.2909 37.5 34.5 37.5H85.5C87.7091 37.5 89.5 39.2909 89.5 41.5V56.5H96.5V44.6665L98.1098 44.3369C101.758 43.5899 104.5 40.366 104.5 36.5C104.5 32.0817 100.918 28.5 96.5 28.5H92V35.5H28V28.5H23.5Z"
            fill="#101E29"
            stroke="#6C8C9E"
            strokeWidth="1.6"
          />

          {/* Plush Seat Deck Split Cushion */}
          <rect x="33" y="40.5" width="25.5" height="7.5" rx="2.5" fill="#465E6F" />
          <rect x="61.5" y="40.5" width="25.5" height="7.5" rx="2.5" fill="#2A3E4C" />

          {/* Ambient Ember Glow Behind Star */}
          <circle cx="60" cy="63" r="21" fill="url(#kCoreEmber)" />

          {/* Commander Star */}
          <path
            d="M60 48.5L63.25 58.5H73.75L65.25 64.65L68.5 74.65L60 68.5L51.5 74.65L54.75 64.65L46.25 58.5H56.75L60 48.5Z"
            fill="url(#kGoldRank)"
          />

          {/* White/Cyan Precision Divider Accent (Like the Top-Right / Bottom-Right Uploaded Logo) */}
          <path
            d="M22.5 59.5L60 87L97.5 59.5"
            stroke="#9AD1E6"
            strokeWidth="1.8"
            strokeOpacity="0.65"
            strokeLinecap="round"
          />

          {/* 3 Gold Rank Chevrons */}
          <path
            d="M22.5 63.5L60 91L97.5 63.5V72.5L60 100L22.5 72.5V63.5Z"
            fill="url(#kGoldRank)"
          />
          <path
            d="M22.5 76.5L60 104L97.5 76.5V85.5L60 113L22.5 85.5V76.5Z"
            fill="url(#kGoldRank)"
          />
          <path
            d="M22.5 89.5L60 117L97.5 89.5V98L60 125.5L22.5 98V89.5Z"
            fill="url(#kGoldRank)"
          />
        </svg>
      </div>

      {showText && (
        <div className="kommandr-logo__wordmark">
          <span className="kommandr-logo__brand">Kommandr</span>
          <span className="kommandr-logo__badge">OS</span>
        </div>
      )}
    </div>
  );
}

export default KommandrLogo;
