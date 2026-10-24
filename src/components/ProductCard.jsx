import '../styles/ProductCard.css'
import { useState } from 'react'

function ProductCard({
  product,
  onAddToCart,
  isAdded,
}) {
  // Stores the selected optional add-on.
  const [selectedAddOnId, setSelectedAddOnId] =
    useState(null)

  // Find the full information for the selected add-on.
  const selectedAddOn = product.addOns.find(
    (addOn) =>
      addOn.id === selectedAddOnId,
  )

  // Add the optional extra to the normal product price.
  const finalPrice =
    product.price +
    (selectedAddOn?.price ?? 0)

  // Convert a number such as 250000 into ₦250,000.
  function formatPrice(amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  function handleAddProduct() {
    // Create a different cart ID when the customer
    // selects an optional extra.
    //
    // This allows the normal set and the set with
    // Sokoto and Dansiki to exist separately.
    const cartProduct = {
      ...product,

      id: selectedAddOn
        ? `${product.id}-${selectedAddOn.id}`
        : product.id,

      // Keep the original product ID for feedback.
      baseProductId: product.id,

      // Save the final price, including the add-on.
      price: finalPrice,

      // Save the selected add-on in the cart.
      selectedAddOns: selectedAddOn
        ? [selectedAddOn]
        : [],
    }

    onAddToCart(cartProduct)
  }

  return (
    <article className="product-card">
      {/* Temporary image until real product photos are added. */}
      <div className="product-image-placeholder">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <span>{product.name.charAt(0)}</span>
        )}
      </div>

      <div className="product-content">
        <p className="product-type">
          {product.collection.replace(
            '-',
            ' ',
          )}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        {/* Display the size of one complete set. */}
        {product.setSize && (
          <p className="product-set-size">
            <strong>Set size:</strong>{' '}
            {product.setSize}
          </p>
        )}

        {/* Only complete wedding sets have this information. */}
        {product.includes && (
          <div className="product-includes">
            <p>
              <strong>Bride:</strong>{' '}
              {product.includes.bride.join(
                ', ',
              )}
            </p>

            <p>
              <strong>Groom:</strong>{' '}
              {product.includes.groom.join(
                ', ',
              )}
            </p>
          </div>
        )}

        {/* 
          Only show this section if the product
          has at least one optional add-on.
        */}
        {product.addOns.length > 0 && (
          <div className="product-options">
            {product.addOns.map((addOn) => (
              <label
                className="product-option"
                key={addOn.id}
              >
                <input
                  type="checkbox"
                  checked={
                    selectedAddOnId ===
                    addOn.id
                  }
                  onChange={() =>
                    setSelectedAddOnId(
                      selectedAddOnId ===
                        addOn.id
                        ? null
                        : addOn.id,
                    )
                  }
                />

                <span>
                  Add {addOn.name}
                  {' — +'}
                  {formatPrice(addOn.price)}
                </span>
              </label>
            ))}
          </div>
        )}

        <div className="product-footer">
          {/* This price changes when an add-on is selected. */}
          <p className="product-price">
            {formatPrice(finalPrice)}
          </p>

          <button
            type="button"
            className={`add-to-cart-button ${
              isAdded ? 'added' : ''
            }`}
            onClick={handleAddProduct}
          >
            {isAdded
              ? 'Added to Cart ✓'
              : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard