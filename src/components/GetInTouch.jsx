import { useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { SITE_DATA, LOCATION_QUERY, googleMapsLink, whatsappLink } from '../data/site';

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useSettings();

  return (
    <div className="footer-get-in-touch">
      <button
        type="button"
        className="footer-toggle-btn"
        aria-expanded={isOpen}
        aria-controls="footerGetInTouchPanel"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{t.footer.getInTouch}</span>
        <span className={`toggle-arrow ${isOpen ? 'open' : ''}`}>▾</span>
      </button>

      <div
        id="footerGetInTouchPanel"
        className={`get-in-touch-panel ${isOpen ? 'open' : ''}`}
      >
        <a
          className="contact-option"
          href={whatsappLink()}
          target="_blank"
          rel="noopener"
        >
          <span className="contact-icon">☏</span>
          <span>
            <small>{t.contact.whatsappLabel}</small>
            <b>{SITE_DATA.phone.display}</b>
          </span>
          <span className="option-arrow">↗</span>
        </a>

        <a
          className="contact-option"
          href={`mailto:${SITE_DATA.email}`}
        >
          <span className="contact-icon">✉</span>
          <span>
            <small>{t.contact.emailLabel}</small>
            <b>{SITE_DATA.email}</b>
          </span>
          <span className="option-arrow">↗</span>
        </a>

        <a
          className="contact-option"
          href={googleMapsLink(LOCATION_QUERY)}
          target="_blank"
          rel="noopener"
        >
          <span className="contact-icon">📍</span>
          <span>
            <small>{t.footer.locationLabel}</small>
            <b>{t.footer.locationValue}</b>
          </span>
          <span className="option-arrow">↗</span>
        </a>
      </div>
    </div>
  );
}
