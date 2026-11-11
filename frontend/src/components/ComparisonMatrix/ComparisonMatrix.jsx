import { COMPARISON_ROWS } from '../../data/kommandrData';
import './ComparisonMatrix.css';

export function ComparisonMatrix() {
  return (
    <section id="comparison" className="k-comp">
      <div className="k-comp__container">
        <div className="k-comp__header">
          <div className="k-section-tag">
            <span className="k-section-tag__dot" />
            <span>KOMMANDR VS. EVERY TOOL</span>
          </div>
          <h2 className="k-section-title">
            Stop Duct-Taping <span className="k-text-gradient">6 Subscriptions Together.</span>
          </h2>
          <p className="k-section-subtitle">
            Basic cross-listers like Vendoo, List Perfectly, or Flyp only handle a single task. Kommandr OS replaces your entire software stack under one flat plan.
          </p>
        </div>

        <div className="k-comp__table-wrap">
          <table className="k-comp__table">
            <thead>
              <tr>
                <th className="k-comp__th-feature">Workflow Capability</th>
                <th className="k-comp__th-kommandr">
                  <span className="k-comp__badge-top">ALL-IN-ONE OS</span>
                  <div className="k-comp__brand-col">Kommandr OS</div>
                </th>
                <th className="k-comp__th-other">Basic Cross-Listers</th>
                <th className="k-comp__th-other">6-Tool Patchwork Stack</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.capability}>
                  <td className="k-comp__td-feature">{row.capability}</td>
                  <td className="k-comp__td-kommandr">
                    <span className="k-comp__check">✓</span>
                    <span>{row.kommandr}</span>
                  </td>
                  <td className="k-comp__td-other">
                    <span className="k-comp__cross">✕</span>
                    <span>{row.crosslisters}</span>
                  </td>
                  <td className="k-comp__td-other">{row.patchwork}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="k-comp__foot-label">Total Monthly Software Cost</td>
                <td className="k-comp__foot-kommandr">
                  <span className="k-comp__price-main">$397/mo</span>
                  <span className="k-comp__price-sub">Everything Included • Or Start Free</span>
                </td>
                <td className="k-comp__foot-other">
                  <span>$39–$99/mo</span>
                  <small>Missing 80% of operations</small>
                </td>
                <td className="k-comp__foot-other">
                  <span>$670+/mo</span>
                  <small>Disconnected logins &amp; tabs</small>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonMatrix;
