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

      {/* Decorative design displayed beside the text. */}
      <div className="hero-art">
        <div className="pattern-circle"></div>

        <div className="hero-card">
          <p>Authentically African</p>

          <h2>Made with intention</h2>

          <span>
            Aso Oke • Adire • More
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero