import { useSettings } from '../context/SettingsContext';

export default function Hero() {
  const { t } = useSettings();

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titleMain}<span>{t.hero.titleSpan}</span>
          </h1>
          <h2>{t.hero.subtitle}</h2>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-actions">
            <a className="button" href="#products">
              {t.hero.exploreProducts} <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#about">
              {t.hero.ourStory}
            </a>
          </div>
          <div className="hero-points">
            <span>{t.hero.point1}</span>
            <span>{t.hero.point2}</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <img
              src="images/abhaya-logo.png"
              alt={t.hero.imageAlt}
              className="hero-product-image"
            />
          </div>
        </div>
      </div>
      <div className="hero-decoration decor-one"></div>
      <div className="hero-decoration decor-two"></div>
    </section>
  );
}
