export const LOCATION_QUERY = 'Crafted with Pride in India';

export const SITE_DATA = {
  phone: {
    display: '+91 63880 26766',
    contactDisplay: '6388026766',
    tel: '+916388026766',
    waNumber: '916388026766',
  },
  email: 'abhayasindoor.in@gmail.com',
  orderNowMessage: 'Hello, I want to order Abhaya Sindoor',
};

export function whatsappLink(text) {
  if (!text) {
    return `https://wa.me/${SITE_DATA.phone.waNumber}`;
  }
  return `https://wa.me/${SITE_DATA.phone.waNumber}?text=${encodeURIComponent(text)}`;
}

export function googleMapsLink(query = LOCATION_QUERY) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const NAV_HREFS = [
  { key: 'home', href: '#home' },
  { key: 'products', href: '#products' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];
