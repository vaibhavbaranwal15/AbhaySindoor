import { SettingsProvider } from './context/SettingsContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <SettingsProvider>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </SettingsProvider>
  );
}
