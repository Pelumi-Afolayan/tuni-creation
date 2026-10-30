import '../styles/Navbar.css'
import { useEffect, useRef, useState } from 'react'


function Navbar({
  cartItemCount,
  onOpenCart,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    function closeOutside(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 901px)')
    function closeOnDesktop() {
      if (desktop.matches) setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  return (
    <header className="navbar" ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
    }}>
      {/* Brand logo links back to the top of the page. */}
      <a href="#home" className="brand-logo" onClick={() => setMenuOpen(false)}>
        <img
          src="/tuni-logo-transparent.png"
          alt="Tuni Creation"
        />
      </a>

      {/* Links to the main sections on the page. */}
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Open the cart when the customer clicks this button. */}
      <div className="navbar-actions">
      <button
        type="button"
        className="cart-button"
        onClick={() => { setMenuOpen(false); onOpenCart() }}
      >
        Cart <span>{cartItemCount}</span>
      </button>
      <button className="menu-toggle" type="button" ref={menuButtonRef}
        aria-expanded={menuOpen} aria-controls="mobile-navigation"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}>
        <span className="menu-toggle-lines" aria-hidden="true"><span /><span /></span>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
      </button>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#shop" onClick={() => setMenuOpen(false)}>Shop collections</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Our story</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
