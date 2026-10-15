import { useSettings } from '../context/SettingsContext';

export default function TrustStrip() {
  const { t } = useSettings();

  return (
    <section className="trust-strip" aria-label={t.trust.ariaLabel}>
      <div className="container trust-grid">
        {t.trust.items.map((item, index) => (
          <div key={index}>
            <span className="trust-icon">{item.icon}</span>
            <span>
              <b>{item.title}</b>
              <small>{item.subtitle}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
