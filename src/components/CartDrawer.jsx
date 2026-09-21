function CartDrawer({
  cart,
  isOpen,
  onClose,
  onIncrease,
  onDecrease,
  onRemove
}) {
  // If the cart is closed, do not display anything.
  if (!isOpen) {
    return null
  }

  // Calculate the total price of everything in the cart.
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0,
  )

  // Format numbers as Nigerian naira.
  function formatPrice(amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
    >
      {/* 
        Clicking inside the cart should not close it.
        stopPropagation prevents the click from reaching
        the dark overlay.
      */}
      <aside
        className="cart-drawer"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="cart-header">
          <div>
            <p className="cart-label">
              YOUR ORDER
            </p>

            <h2>Shopping Cart</h2>
          </div>

          <button
            type="button"
            className="close-cart-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Show this message when the cart has no products. */}
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>

            <p>
              Add something from the collection
              to begin your order.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {/* Create one cart item for every product. */}
             {cart.map((item) => (
            <div
                className="cart-item"
                key={item.id}
            >
                <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p>{formatPrice(item.price)} each</p>

                <div className="cart-item-actions">
                    <div className="quantity-controls">
                    {/* Reduce the quantity by one. */}
                    <button
                        type="button"
                        onClick={() =>
                        onDecrease(item.id)
                        }
                        aria-label={`Reduce ${item.name} quantity`}
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    {/* Increase the quantity by one. */}
                    <button
                        type="button"
                        onClick={() =>
                        onIncrease(item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                    >
                        +
                    </button>
                    </div>

                    {/* Remove the entire product from the cart. */}
                    <button
                    type="button"
                    className="remove-item-button"
                    onClick={() => onRemove(item.id)}
                    >
                    Remove
                    </button>
                </div>
                </div>

                {/* Price multiplied by the selected quantity. */}
                <strong className="cart-item-total">
                {formatPrice(
                    item.price * item.quantity,
                )}
                </strong>
            </div>
            ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Total</span>
                <strong>
                  {formatPrice(cartTotal)}
                </strong>
              </div>

              {/* We will connect this to WhatsApp later. */}
              <button
                type="button"
                className="checkout-button"
              >
                Continue Order
              </button>

              <p className="cart-note">
                Delivery cost will be confirmed
                before payment.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer