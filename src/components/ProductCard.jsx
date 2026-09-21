function ProductCard({ 
    product, 
    onAddToCart,
    isAdded }) {
  // Convert a number such as 250000 into ₦250,000.
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <article className="product-card">
      {/* 
        Temporary image area.
        A real product photograph will replace this later.
      */}
      <div className="product-image-placeholder">
        <span>{product.name.charAt(0)}</span>
      </div>

      <div className="product-content">
        {/* Shows whether this is a bundle or complete set. */}
        <p className="product-type">
          {product.collection.replace('-', ' ')}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        {/* 
          Not every product has bride and groom items.
          This section only appears when product.includes exists.
        */}
        {product.includes && (
          <div className="product-includes">
            <p>
              <strong>Bride:</strong>{' '}
              {product.includes.bride.join(', ')}
            </p>

            <p>
              <strong>Groom:</strong>{' '}
              {product.includes.groom.join(', ')}
            </p>
          </div>
        )}

        {/* 
          Only show the optional extra when the product has an add-on.
        */}
        {product.addOns.length > 0 && (
          <p className="product-addon">
            Optional: {product.addOns[0].name} (+
            {new Intl.NumberFormat('en-NG', {
              style: 'currency',
              currency: 'NGN',
              maximumFractionDigits: 0,
            }).format(product.addOns[0].price)}
            )
          </p>
        )}

        <div className="product-footer">
          <p className="product-price">{formattedPrice}</p>

          {/* We will connect this button to the cart later. */}
          <button 
          type="button" 
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}>
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard