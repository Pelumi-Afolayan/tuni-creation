import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          AFRICAN FABRICS, BEAUTIFULLY MADE
        </p>

        <h1>
          Rooted in culture.
          <span> Created for today.</span>
        </h1>

        <p className="hero-description">
          Discover thoughtfully crafted Aso Oke,
          Adire and African-inspired pieces that
          celebrate culture through contemporary
          design.
        </p>

        {/* 
          This link moves the customer directly
          to the Shop section.
        */}
        <a href="#shop" className="shop-button">
          Explore Our Collection
        </a>
      </div>

      <figure className="hero-art">
        <div className="hero-photo-frame">
          <img
            className="hero-photo"
            src="/images/tuni-hero-cutout.png"
            alt="Model wearing a black dress decorated with colourful African fabric strips"
            fetchPriority="high"
          />
        </div>
        <figcaption>Aso Oke · Adire · African-inspired pieces</figcaption>
      </figure>
    </section>
  )
}

export default Hero
