import { useState, useEffect } from 'react';
import KommandrLogo from '../KommandrLogo/KommandrLogo';
import './SplashCover.css';

export function SplashCover({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Trigger scale & fade-out transition after 600ms (Matching Resora & Safira)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 600);

    // Unmount completely from DOM after 850ms (< 1s total)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 850);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`kommandr-splash-cover ${isFadingOut ? 'splash-fade-out' : ''}`}
      aria-label="Loading Kommandr OS"
    >
      <div className="kommandr-splash-wrapper">
        <div className="kommandr-press-container">
          <div className="kommandr-press-logo">
            <KommandrLogo size={142} showText={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashCover;

