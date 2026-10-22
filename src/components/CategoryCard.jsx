import '../styles/CategoryCard.css'

function CategoryCard({
  category,
  onViewCategory,
}) {
  return (
    <article className="category-card">
      {/* Temporary image area until we add real photographs. */}
      <div
        className="category-image-placeholder"
        style={{ backgroundColor: category.color }}
      >
        <span>{category.name.charAt(0)}</span>
      </div>

      <div className="category-content">
        <h3>{category.name}</h3>

        <p>{category.description}</p>

        {/* 
          When clicked, this sends the category ID back to App.jsx.
          For example, clicking Aso Oke sends "aso-oke".
        */}
        <button
          type="button"
          className="category-button"
          onClick={() =>
            onViewCategory(category.id)
          }
        >
          View Collection
        </button>
      </div>
    </article>
  )
}

export default CategoryCard