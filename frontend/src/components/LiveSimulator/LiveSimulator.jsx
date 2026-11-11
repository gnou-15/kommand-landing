import { useState } from 'react';
import { SIMULATOR_DEALS } from '../../data/kommandrData';
import './LiveSimulator.css';

export function LiveSimulator({ onOpenModal }) {
  const [selectedDealId, setSelectedDealId] = useState(SIMULATOR_DEALS[0].id);
  const [flipsPerMonth, setFlipsPerMonth] = useState(8);
  const [taxRate, setTaxRate] = useState(20);
  const [replySent, setReplySent] = useState(false);

  const activeDeal =
    SIMULATOR_DEALS.find((d) => d.id === selectedDealId) || SIMULATOR_DEALS[0];

  const totalCost = activeDeal.sourcePrice + activeDeal.cleaningCost + activeDeal.deliveryFuel;
  const grossSpread = activeDeal.estimatedResale - totalCost;
  const taxReserve = Math.round(grossSpread * (taxRate / 100));
  const netProfitPerFlip = grossSpread - taxReserve;
  const monthlyProjectedProfit = netProfitPerFlip * flipsPerMonth;

  const handleSelectDeal = (id) => {
    setSelectedDealId(id);
    setReplySent(false);
  };

  return (
    <section id="live-simulator" className="k-sim">
      <div className="k-sim__container">
        <div className="k-sim__header">
          <div className="k-section-tag">
            <span className="k-section-tag__dot" />
            <span>INTERACTIVE COMMAND DEMO</span>
          </div>
          <h2 className="k-section-title">
            Test the <span className="k-text-gradient">Deal Sniper &amp; True Profit Engine</span>
          </h2>
          <p className="k-section-subtitle">
            Click any live furniture alert below to inspect historical comp spread, dispatch Muse AI to lock in the pickup, and calculate your monthly net profit after expenses and taxes.
          </p>
        </div>

        <div className="k-sim__board">
          {/* LEFT: Live Cloud Deal Sniper Feed */}
          <div className="k-sim__feed-panel">
            <div className="k-sim__panel-header">
              <div className="k-sim__panel-title-wrap">
                <span className="k-sim__live-beacon" />
                <span className="k-sim__panel-title">CLOUD DEAL SNIPER // LIVE FEED</span>
              </div>
              <span className="k-sim__radius-tag">Radius: 15 mi • PC Off Mode</span>
            </div>

            <div className="k-sim__deal-list">
              {SIMULATOR_DEALS.map((deal) => {
                const isSelected = deal.id === selectedDealId;
                const dealNet =
                  deal.estimatedResale -
                  (deal.sourcePrice + deal.cleaningCost + deal.deliveryFuel);
                return (
                  <button
                    key={deal.id}
                    type="button"
                    className={`k-sim__deal-card ${isSelected ? 'k-sim__deal-card--active' : ''}`}
                    onClick={() => handleSelectDeal(deal.id)}
                  >
                    <div className="k-sim__deal-top">
                      <span className="k-sim__deal-market">{deal.marketplace}</span>
                      <span className="k-sim__deal-time">{deal.timeAgo}</span>
                    </div>

                    <h3 className="k-sim__deal-name">{deal.name}</h3>
                    <p className="k-sim__deal-meta">
                      {deal.category} • {deal.distance}
                    </p>

                    <div className="k-sim__deal-pricing">
                      <div className="k-sim__price-box">
                        <span className="k-sim__price-lbl">Listed Ask</span>
                        <span className="k-sim__price-val">${deal.sourcePrice}</span>
                      </div>
                      <span className="k-sim__price-arrow">→</span>
                      <div className="k-sim__price-box">
                        <span className="k-sim__price-lbl">Verified Comp</span>
                        <span className="k-sim__price-val k-sim__price-val--gold">
                          ${deal.estimatedResale.toLocaleString()}
                        </span>
                      </div>
                      <div className="k-sim__spread-badge">+${dealNet} Spread</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Muse AI Auto-Dispatcher Box */}
            <div className="k-sim__muse-box">
              <div className="k-sim__muse-head">
                <span className="k-sim__muse-badge">MUSE AI // AUTO-DISPATCH DRAFT</span>
                <span className="k-sim__muse-velocity">Est. Turnaround: {activeDeal.daysToSell}</span>
              </div>
              <p className="k-sim__muse-msg">&ldquo;{activeDeal.museReply}&rdquo;</p>
              <div className="k-sim__muse-actions">
                <button
                  type="button"
                  className={`k-sim__dispatch-btn ${replySent ? 'k-sim__dispatch-btn--sent' : ''}`}
                  onClick={() => setReplySent(true)}
                >
                  {replySent
                    ? '✓ Sent via Kommandr Konnect & Pickup Hold Created'
                    : '1-Click Send & Book Van Pickup Slot'}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: True Net Profit & Tax Set-Aside Calculator */}
          <div className="k-sim__calc-panel">
            <div className="k-sim__panel-header">
              <span className="k-sim__panel-title">BACK OFFICE // TRUE PROFIT &amp; TAX LEDGER</span>
              <span className="k-sim__demand-pill">Demand: {activeDeal.demandScore}</span>
            </div>

            <div className="k-sim__ledger-grid">
              <div className="k-sim__ledger-item">
                <span className="k-sim__ledger-lbl">Verified Storefront Sale Price</span>
                <span className="k-sim__ledger-val k-sim__ledger-val--pos">
                  +${activeDeal.estimatedResale.toLocaleString()}
                </span>
              </div>
              <div className="k-sim__ledger-item">
                <span className="k-sim__ledger-lbl">Acquisition Cost (COGs)</span>
                <span className="k-sim__ledger-val">-${activeDeal.sourcePrice}</span>
              </div>
              <div className="k-sim__ledger-item">
                <span className="k-sim__ledger-lbl">Refurb / Cleaning &amp; Pickup Fuel</span>
                <span className="k-sim__ledger-val">
                  -${activeDeal.cleaningCost + activeDeal.deliveryFuel}
                </span>
              </div>
              <div className="k-sim__ledger-item">
                <span className="k-sim__ledger-lbl">
                  Auto Tax Set-Aside ({taxRate}%)
                </span>
                <span className="k-sim__ledger-val k-sim__ledger-val--warn">
                  -${taxReserve}
                </span>
              </div>
            </div>

            {/* Interactive Sliders */}
            <div className="k-sim__sliders">
              <div className="k-sim__slider-group">
                <div className="k-sim__slider-label-row">
                  <label htmlFor="flips-slider">Similar Flips Per Month</label>
                  <span className="k-sim__slider-readout">{flipsPerMonth} couches / mo</span>
                </div>
                <input
                  id="flips-slider"
                  type="range"
                  min="1"
                  max="25"
                  value={flipsPerMonth}
                  onChange={(e) => setFlipsPerMonth(Number(e.target.value))}
                  className="k-sim__range"
                />
              </div>

              <div className="k-sim__slider-group">
                <div className="k-sim__slider-label-row">
                  <label htmlFor="tax-slider">Tax Set-Aside Bucket</label>
                  <span className="k-sim__slider-readout">{taxRate}% reserved</span>
                </div>
                <input
                  id="tax-slider"
                  type="range"
                  min="10"
                  max="35"
                  step="5"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="k-sim__range"
                />
              </div>
            </div>

            {/* Bottom ROI Result Callout */}
            <div className="k-sim__roi-summary">
              <div className="k-sim__roi-col">
                <span className="k-sim__roi-caption">Net Profit (Single Flip)</span>
                <span className="k-sim__roi-single">
                  ${netProfitPerFlip.toLocaleString()}
                </span>
                <span className="k-sim__roi-note">
                  1 flip pays for Kommandr OS ($397/mo) with ${netProfitPerFlip - 397} left over
                </span>
              </div>

              <div className="k-sim__roi-col k-sim__roi-col--highlight">
                <span className="k-sim__roi-caption">Projected Monthly Net Take-Home</span>
                <span className="k-sim__roi-monthly">
                  ${monthlyProjectedProfit.toLocaleString()}
                  <small>/mo</small>
                </span>
                <button
                  type="button"
                  className="k-sim__roi-cta"
                  onClick={() =>
                    onOpenModal(`Lock In ${flipsPerMonth} Flips/Mo — Start Free`)
                  }
                >
                  Start Flipping With Kommandr →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveSimulator;
