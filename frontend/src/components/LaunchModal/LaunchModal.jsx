import { useState } from 'react';
import KommandrLogo from '../KommandrLogo/KommandrLogo';
import './LaunchModal.css';

export function LaunchModal({ isOpen, contextTitle, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    volume: '5–15 flips / mo',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="k-modal-backdrop" role="dialog" aria-modal="true" aria-label="Launch Kommandr OS">
      <div className="k-modal">
        <button
          type="button"
          className="k-modal__close"
          onClick={handleResetAndClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="k-modal__head">
          <KommandrLogo size={34} showText={true} />
          <span className="k-modal__badge">{contextTitle || 'Instant Command Access'}</span>
        </div>

        {!submitted ? (
          <form className="k-modal__form" onSubmit={handleSubmit}>
            <h3 className="k-modal__title">Initialize Your Command Center</h3>
            <p className="k-modal__sub">
              Start on the Free Plan with zero credit card required, or activate 24/7 Cloud Deal Sniper &amp; Muse AI.
            </p>

            <label className="k-modal__field">
              <span>Full Name or Storefront Name</span>
              <input
                type="text"
                required
                placeholder="e.g., Apex Vintage & Sofa Co."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>

            <label className="k-modal__field">
              <span>Work Email</span>
              <input
                type="email"
                required
                placeholder="founder@yourstore.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>

            <label className="k-modal__field">
              <span>Current Monthly Flip Volume</span>
              <select
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
              >
                <option value="1–4 flips / mo (Side-Hustle)">1–4 flips / mo (Side-Hustle)</option>
                <option value="5–15 flips / mo">5–15 flips / mo (Growing Flipper)</option>
                <option value="15–40+ flips / mo (Showroom / Warehouse)">
                  15–40+ flips / mo (Showroom / Warehouse)
                </option>
              </select>
            </label>

            <button type="submit" className="k-modal__submit">
              Create Command Account →
            </button>
          </form>
        ) : (
          <div className="k-modal__success">
            <div className="k-modal__success-icon">✓</div>
            <h3>Command Center Provisioned!</h3>
            <p>
              Welcome aboard, <strong>{formData.name}</strong>. Your onboarding invite and Chrome Extension link have been queued for <strong>{formData.email}</strong>.
            </p>
            <button type="button" className="k-modal__submit" onClick={handleResetAndClose}>
              Return to Landing Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LaunchModal;
