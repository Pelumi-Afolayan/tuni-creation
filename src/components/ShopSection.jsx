import { useState } from 'react'
import { categories } from '../data/categories'
import { products } from '../data/products'
import CategoryCard from './CategoryCard'
import ProductCard from './ProductCard'
import '../styles/ShopSection.css'

function ShopSection({
  onAddToCart,
  addedProductId,
}) {
  // Remembers the category selected by the customer.
  const [selectedCategory, setSelectedCategory] =
    useState(null)

  // Find the full information for the selected category.
  const selectedCategoryDetails =
    categories.find(
      (category) =>
        category.id === selectedCategory,
    )

  // Select only products that belong to the chosen category.
  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory,
  )

  function handleViewCategory(categoryId) {
    // Save the selected category.
    setSelectedCategory(categoryId)

    // Wait for React to display the collection,
    // then move the customer to it.
    setTimeout(() => {
      document
        .getElementById('selected-collection')
        ?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        })
    }, 100)
  }

  return (
    <section
      className="shop-preview"
      id="shop"
    >
      <div className="shop-heading">
        <p className="section-label">
          OUR COLLECTION
        </p>

        <h2>Explore Tuni Creation</h2>

        <p>
          Discover fabrics, clothing and
          accessories created to celebrate
          African culture through contemporary
          design.
        </p>
      </div>

      <div className="category-grid">
        {/* Display every category in categories.js. */}
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onViewCategory={
              handleViewCategory
            }
          />
        ))}
      </div>

      {/* 
        Only display this section after the customer
        has selected a category.
      */}
      {selectedCategory && (
        <div
          className="products-section"
          id="selected-collection"
        >
          <div className="products-heading">
            <p className="section-label">
              SELECTED COLLECTION
            </p>

            <h2>
              {selectedCategoryDetails?.name}
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {/* Display products in the selected category. */}
              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={
                      onAddToCart
                    }
                    isAdded={
                      addedProductId ===
                      product.id
                    }
                  />
                ),
              )}
            </div>
          ) : (
            <div className="empty-collection">
              <h3>
                Products are coming soon
              </h3>

              <p>
                We are still adding products
                to this collection.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default ShopSection
