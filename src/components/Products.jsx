import ProductCard from './ProductCard';
import { useSettings } from '../context/SettingsContext';

export default function Products() {
  const { t } = useSettings();

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2>{t.products.heading}</h2>
          <p>{t.products.description}</p>
        </div>
        <div className="product-grid">
          {t.products.list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="image-help">
          {t.products.imageHelp.prefix}
          <b>{t.products.imageHelp.bold}</b>
          {t.products.imageHelp.middle}
          <code>{t.products.imageHelp.code}</code>
          {t.products.imageHelp.suffix}
        </p>
      </div>
    </section>
  );
}
