import { useSettings } from '../context/SettingsContext';
import { whatsappLink } from '../data/site';

export default function ProductCard({ product }) {
  const { t } = useSettings();
  const cardClassName = product.featured
    ? 'product-card featured-card'
    : 'product-card';

  return (
    <article className={cardClassName}>
      {product.featuredLabel && (
        <div className="featured-label">{product.featuredLabel}</div>
      )}
      <div className={product.imageClass}>
        <span className="image-tag">{product.tag}</span>
        <img src={product.imageSrc} alt={product.imageAlt} />
      </div>
      <div className="product-info">
        <p className="product-kicker">{product.kicker}</p>
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <div className="price">
            {product.price} <small>{t.products.perPack}</small>
          </div>
          <span className="size-pill">{product.sizePill}</span>
        </div>
        <p className="price-note">{t.products.priceNote}</p>
        <a
          className="button button-full"
          href={whatsappLink(product.orderMessage)}
          target="_blank"
          rel="noopener"
        >
          {product.orderButtonText}
        </a>
      </div>
    </article>
  );
}
