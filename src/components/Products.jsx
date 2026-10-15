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
      </div>
    </section>
  );
}
