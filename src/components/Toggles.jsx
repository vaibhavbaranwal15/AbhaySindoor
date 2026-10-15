import { useSettings } from '../context/SettingsContext';

export default function Toggles() {
  const { language, setLanguage, theme, toggleTheme, t } = useSettings();

  return (
    <div className="toggles-wrap">
      <div className="lang-switch" role="group" aria-label={t.toggles.langSwitchAria}>
        <button
          type="button"
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          aria-pressed={language === 'en'}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
          aria-pressed={language === 'hi'}
          onClick={() => setLanguage('hi')}
        >
          हिं
        </button>
      </div>

      <button
        type="button"
        className="theme-toggle-btn"
        aria-label={theme === 'dark' ? t.toggles.themeToLight : t.toggles.themeToDark}
        title={theme === 'dark' ? t.toggles.themeToLight : t.toggles.themeToDark}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </div>
  );
}
