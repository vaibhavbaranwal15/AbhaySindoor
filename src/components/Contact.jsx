import { useSettings } from '../context/SettingsContext';
import { SITE_DATA, whatsappLink } from '../data/site';

export default function Contact() {
  const { t } = useSettings();

  const contactOptions = [
    {
      id: 'whatsapp',
      href: whatsappLink(),
      target: '_blank',
      rel: 'noopener',
      icon: '☏',
      label: t.contact.whatsappLabel,
      value: SITE_DATA.phone.display,
    },
    {
      id: 'phone',
      href: `tel:${SITE_DATA.phone.tel}`,
      icon: '☎',
      label: t.contact.phoneLabel,
      value: SITE_DATA.phone.contactDisplay,
    },
    {
      id: 'email',
      href: `mailto:${SITE_DATA.email}`,
      icon: '✉',
      label: t.contact.emailLabel,
      value: SITE_DATA.email,
    },
  ];

  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.description}</p>
        </div>
        <div className="contact-options">
          {contactOptions.map((option) => (
            <a
              key={option.id}
              className="contact-option"
              href={option.href}
              {...(option.target ? { target: option.target } : {})}
              {...(option.rel ? { rel: option.rel } : {})}
            >
              <span className="contact-icon">{option.icon}</span>
              <span>
                <small>{option.label}</small>
                <b>{option.value}</b>
              </span>
              <span className="option-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
