import { useSettings } from '../context/SettingsContext';

export default function About() {
  const { t } = useSettings();

  return (
    <section className="about-section section" id="about">
      <div className="container about-grid">
        <div className="about-art">
          <img src="images/abhaya-logo.png" alt="" className="about-image" />
          <span className="about-seal">
            {t.about.sealLine1}<br />{t.about.sealLine2}
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>
            {t.about.headingLine1}<br />
            <span>{t.about.headingLine2}</span>
          </h2>
          <p>{t.about.paragraph}</p>
          <a className="text-link" href="#contact">
            {t.about.link}
          </a>
        </div>
      </div>
    </section>
  );
}
