
export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">₹ {product.price}</p>
      <p className="product-category">{product.category}</p>
    </article>
  );
}
