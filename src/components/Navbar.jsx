import '../styles/Navbar.css'


function Navbar({
  cartItemCount,
  onOpenCart,
}) {
  return (
    <header className="navbar">
      {/* Brand logo links back to the top of the page. */}
      <a href="#home" className="brand-logo">
        <img
          src="/tuni-logo-transparent.png"
          alt="Tuni Creation"
        />
      </a>

      {/* Links to the main sections on the page. */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Open the cart when the customer clicks this button. */}
      <button
        type="button"
        className="cart-button"
        onClick={onOpenCart}
      >
        Cart <span>{cartItemCount}</span>
      </button>
    </header>
  )
}

export default Navbar