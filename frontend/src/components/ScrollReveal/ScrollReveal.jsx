import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.14,
  className = '',
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(
    () => typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`k-reveal k-reveal--${variant} ${
        revealed ? 'k-reveal--visible' : ''
      } ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
