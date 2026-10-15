import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('abhaya_lang');
      if (savedLang === 'hi' || savedLang === 'en') {
        return savedLang;
      }
    } catch (e) {
      // localStorage not available
    }
    return 'en';
  });

  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('abhaya_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      // localStorage not available
    }
    return 'light';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('abhaya_lang', lang);
    } catch (e) {}
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('abhaya_theme', newTheme);
    } catch (e) {}
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (translations[language] && translations[language].pageTitle) {
      document.title = translations[language].pageTitle;
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = translations[language] || translations.en;

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
