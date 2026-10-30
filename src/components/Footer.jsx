import '../styles/Footer.css'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-invitation">
        <div>
          <p className="footer-eyebrow">HERITAGE. COLOUR. YOU.</p>
          <h2>Make it <em>your own.</em></h2>
        </div>
        <a className="footer-shop" href="#shop">Explore the collection <span aria-hidden="true">↗</span></a>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src="/tuni-logo-transparent.png" alt="Tuni Creation — home" width="80" height="80" loading="lazy" />
          </a>
          <div className="footer-brand-copy">
            <p className="footer-brand-name">Tuni Creation</p>
            <p>African roots. Everyday expression.</p>
            <a className="footer-social" href="https://www.instagram.com/tuni_clothings/" target="_blank" rel="noopener noreferrer" aria-label="Tuni Clothings on Instagram (opens in a new tab)">
              <InstagramIcon /> <span>@tuni_clothings</span><span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h3>Discover</h3>
          <a href="#home">Home</a>
          <a href="#about">Our story</a>
          <a href="#shop">Shop collections</a>
        </nav>

        <div className="footer-contact">
          <h3>A little guidance?</h3>
          <p>Let’s find the right fabric or piece for you.</p>
          <a className="footer-whatsapp" href="https://wa.me/2348134404858" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tuni Creation. All rights reserved.</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer
