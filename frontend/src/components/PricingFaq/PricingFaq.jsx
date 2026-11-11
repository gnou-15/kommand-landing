import { useState } from 'react';
import { FAQ_ITEMS } from '../../data/kommandrData';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './PricingFaq.css';

export function PricingFaq({ onOpenModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="pricing" className="k-pricing">
      <div className="k-pricing__container">
        <ScrollReveal variant="fade-up">
          <div className="k-pricing__header">
            <div className="k-section-tag">
              <span className="k-section-tag__dot" />
              <span>TRANSPARENT FLAT PRICING</span>
            </div>
            <h2 className="k-section-title">
              One Flat Plan. <span className="k-text-gradient">Everything Included.</span>
            </h2>
            <p className="k-section-subtitle">
              Start free with no credit card required, or unlock the complete AI Command Center for one flat monthly price—less than the profit of a single flipped sectional.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Card Pricing Grid */}
        <div className="k-pricing__cards">
          {/* Card 1: Free Starter */}
          <ScrollReveal variant="fade-left" delay={100}>
            <div className="k-pricing__card">
              <div className="k-pricing__card-top">
                <span className="k-pricing__tier-tag">SOLO EXPLORER</span>
                <h3 className="k-pricing__tier-name">Free Starter</h3>
                <p className="k-pricing__tier-desc">
                  Explore the Command Center, organize your initial inventory, and test the workflow with zero risk.
                </p>
              </div>

              <div className="k-pricing__price-block">
                <span className="k-pricing__amount">$0</span>
                <span className="k-pricing__period">/ forever • No card needed</span>
              </div>

              <ul className="k-pricing__features">
                <li>
                  <span className="k-pricing__bullet">✓</span>
                  <span>Core Command Center &amp; Inventory Ledger</span>
                </li>
                <li>
                  <span className="k-pricing__bullet">✓</span>
                  <span>Basic Price Comp Lookups &amp; ROI Calculator</span>
                </li>
                <li>
                  <span className="k-pricing__bullet">✓</span>
                  <span>Kommandr OS Chrome Extension Access</span>
                </li>
                <li>
                  <span className="k-pricing__bullet">✓</span>
                  <span>Starter Cross-Posting Queue</span>
                </li>
                <li>
                  <span className="k-pricing__bullet">✓</span>
                  <span>Net Profit &amp; Expense Tracking</span>
                </li>
              </ul>

              <button
                type="button"
                className="k-pricing__btn k-pricing__btn--ghost"
                onClick={() => onOpenModal('Start Free Plan ($0/mo)')}
              >
                Start Free — No Credit Card
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: All-In-One Command Plan ($397/mo) */}
          <ScrollReveal variant="fade-right" delay={190}>
            <div className="k-pricing__card k-pricing__card--featured">
              <div className="k-pricing__popular-ribbon">
                ALL-INCLUSIVE OPERATING SYSTEM • CANCEL ANYTIME
              </div>

              <div className="k-pricing__card-top">
                <span className="k-pricing__tier-tag k-pricing__tier-tag--gold">
                  FULL-TIME FLIPPERS &amp; SHOWROOMS
                </span>
                <h3 className="k-pricing__tier-name">Kommandr OS Flat Plan</h3>
                <p className="k-pricing__tier-desc">
                  Every single tool, cloud scanner, AI agent, storefront builder, and phone line unlocked with no feature gates.
                </p>
              </div>

              <div className="k-pricing__price-block">
                <span className="k-pricing__amount k-pricing__amount--gold">$397</span>
                <span className="k-pricing__period">/ month • Flat rate, cancel anytime</span>
              </div>

              <ul className="k-pricing__features">
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>24/7 Cloud Deal Scanner</strong> (FB Marketplace &amp; OfferUp with PC off)
                  </span>
                </li>
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>Unlimited Human-Paced Cross-Posting</strong> (FB, OfferUp, eBay, Store)
                  </span>
                </li>
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>Auto-Built Branded Web Storefront</strong> + Custom Domain &amp; Stripe
                  </span>
                </li>
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>Dedicated Business Phone Line</strong> + Missed-Call Text-Back &amp; Unified CRM
                  </span>
                </li>
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>Muse AI Auto-Responder</strong> &amp; Google Calendar Pickup Sync
                  </span>
                </li>
                <li>
                  <span className="k-pricing__bullet k-pricing__bullet--gold">★</span>
                  <span>
                    <strong>True Net Profit, Tax Set-Asides</strong> &amp; Accountant CSV Exports
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="k-pricing__btn k-pricing__btn--primary"
                onClick={() => onOpenModal('Launch All-In-One Command Plan ($397/mo)')}
              >
                Launch Full Command OS →
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <div className="k-faq">
          <ScrollReveal variant="fade-up">
            <div className="k-faq__header">
              <h3 className="k-faq__title">Frequently Asked Questions</h3>
              <p className="k-faq__sub">
                Everything you need to know about connecting marketplaces safely and running Kommandr OS.
              </p>
            </div>
          </ScrollReveal>

          <div className="k-faq__list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={item.question} variant="fade-up" delay={idx * 70}>
                  <div
                    className={`k-faq__item ${isOpen ? 'k-faq__item--open' : ''}`}
                  >
                    <button
                      type="button"
                      className="k-faq__question"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="k-faq__icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="k-faq__answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingFaq;
