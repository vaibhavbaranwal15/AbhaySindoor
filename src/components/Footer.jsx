import Brand from './Brand';
import GetInTouch from './GetInTouch';
import { useSettings } from '../context/SettingsContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useSettings();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column footer-brand-col">
            <Brand isFooter={true} />
          </div>

          <div className="footer-column footer-quick-links">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#home">{t.nav.home}</a>
              </li>
              <li>
                <a href="#products">{t.nav.products}</a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact-col">
            <GetInTouch />
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © <span id="year">{currentYear}</span> {t.brand.name}. {t.footer.rights}
          </p>
          <a href="#home" className="back-top">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
