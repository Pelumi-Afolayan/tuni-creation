import '../styles/CartDrawer.css'
function CartDrawer({
  cart,
  isOpen,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
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

  function getQuantityDescription(item) {
  // Adire sets containing five yards.
  if (
    item.unit === 'set' &&
    item.setSize === '5 yards'
  ) {
    const totalYards =
      item.quantity * 5

    return `${item.quantity} ${
      item.quantity === 1
        ? 'set'
        : 'sets'
    } • ${totalYards} yards total`
  }

  // Brocade has a different set size,
  // so we display the size of each complete set.
  if (
    item.unit === 'set' &&
    item.setSize ===
      '4 yards, 20 inches'
  ) {
    return `${item.quantity} ${
      item.quantity === 1
        ? 'set'
        : 'sets'
    } • ${item.setSize} per set`
  }

  // T-shirts and scarves are sold per piece.
  if (item.unit === 'piece') {
    return `${item.quantity} ${
      item.quantity === 1
        ? 'piece'
        : 'pieces'
    }`
  }

  // Aso Oke bundles are sold per bundle.
  if (item.unit === 'bundle') {
    return `${item.quantity} ${
      item.quantity === 1
        ? 'bundle'
        : 'bundles'
    }`
  }

  // Default wording for complete sets.
  return `Quantity: ${item.quantity}`
}


  function handleWhatsAppOrder() {
  // Create a readable summary for every product in the cart.
  const orderItems = cart
    .map((item, index) => {
      const itemTotal =
        item.price * item.quantity

      // Show any optional extras selected for this product.
      const addOns =
        item.selectedAddOns?.length > 0
          ? `\nExtra: ${item.selectedAddOns
              .map((addOn) => addOn.name)
              .join(', ')}`
          : ''

      return `${index + 1}. ${item.name}
Quantity: ${getQuantityDescription(item)}
Price: ${formatPrice(item.price)} each${addOns}
Subtotal: ${formatPrice(itemTotal)}`
    })
    .join('\n\n')

  // Create the complete message that will appear on WhatsApp.
  const message = `Hello Tuni Creation,

I would like to place an order for:

${orderItems}

Total: ${formatPrice(cartTotal)}

Please confirm availability and delivery cost. Thank you.`

  // Tuni Creation's WhatsApp number without spaces or the plus sign.
  const whatsappNumber = '2348134404858'

  // Convert the message so it can safely be placed inside a web link.
  const encodedMessage =
    encodeURIComponent(message)

  // Create the WhatsApp checkout link.
  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  // Open WhatsApp in a new browser tab.
  window.open(
    whatsappLink,
    '_blank',
    'noopener,noreferrer',
  )
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
                <p className="cart-quantity-description">
                  {getQuantityDescription(item)}
                </p>
                {/* Display any optional extras selected by the customer. */}
                {item.selectedAddOns?.map((addOn) => (
                  <p
                    className="cart-item-addon"
                    key={addOn.id}
                  >
                    + {addOn.name}
                  </p>
                ))}

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

              <button
                type="button"
                className="clear-cart-button"
                onClick={() => {
                  // Ask before removing every product.
                  const shouldClearCart = window.confirm(
                    'Are you sure you want to clear your cart?',
                  )

                  if (shouldClearCart) {
                    onClear()
                  }
                }}
              >
                Clear Cart
              </button>

              {/* We will connect this to WhatsApp later. */}
              <button
                type="button"
                className="checkout-button"
                onClick={handleWhatsAppOrder}
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