import { useSettings } from '../context/SettingsContext';

export default function Brand({ isFooter = false }) {
  const { t } = useSettings();

  if (isFooter) {
    return (
      <a className="brand footer-brand" href="#home">
        <img className="brand-logo" src="images/abhaya-logo.png" alt="" />
        <span className="brand-text">
          {t.brand.name}<small>{t.brand.tagline}</small>
        </span>
      </a>
    );
  }

  return (
    <a className="brand" href="#home" aria-label={t.brand.ariaLabel}>
      <img className="brand-logo" src="images/abhaya-logo.png" alt={t.brand.alt} />
      <span className="brand-text">
        {t.brand.name}<small>{t.brand.tagline}</small>
      </span>
    </a>
  );
}
