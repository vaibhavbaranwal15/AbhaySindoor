import { useState } from 'react';
import Brand from './Brand';
import Toggles from './Toggles';
import { useSettings } from '../context/SettingsContext';
import { whatsappLink } from '../data/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useSettings();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#products', label: t.nav.products },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label={isOpen ? t.nav.closeNav : t.nav.openNav}
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          {isOpen ? '×' : '☰'}
        </button>

        <nav className={`nav-links${isOpen ? ' open' : ''}`} id="navLinks">
          {navItems.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <div className="mobile-menu-controls mobile-only">
            <Toggles />
          </div>
        </nav>

        <div className="desktop-only">
          <Toggles />
        </div>

        <a
          className="button button-small"
          href={whatsappLink(t.hero.orderNowMessage)}
          target="_blank"
          rel="noopener"
        >
          {t.nav.orderNow}
        </a>
      </div>
    </header>
  );
}
