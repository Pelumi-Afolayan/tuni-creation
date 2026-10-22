import '../styles/AboutSection.css'

function AboutSection() {
  return (
    <section
      className="introduction"
      id="about"
    >
      <div className="about-heading">
        <p className="section-label about-label">
          OUR STORY
        </p>

        <h2>
          Tradition woven into every piece
        </h2>
      </div>

      <div className="intro-text">
        <p>
          Tuni Creation is an Afrocentric
          brand born from the desire to
          preserve and celebrate African
          culture.
        </p>

        <p>
          Through Aso Oke, Adire and other
          African fabrics, we combine
          traditional craftsmanship with
          modern design and aesthetics.
        </p>
      </div>

      {/* Short points that explain what the brand represents. */}
      <div className="brand-values">
        <article className="brand-value">
          <span>01</span>
          <h3>Culturally Rooted</h3>

          <p>
            Our pieces celebrate African
            identity, heritage and creativity.
          </p>
        </article>

        <article className="brand-value">
          <span>02</span>
          <h3>Thoughtfully Made</h3>

          <p>
            Every fabric and design is selected
            with care and attention to detail.
          </p>
        </article>

        <article className="brand-value">
          <span>03</span>
          <h3>Made for Today</h3>

          <p>
            We bring traditional fabrics into
            modern clothing, accessories and
            living spaces.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutSection