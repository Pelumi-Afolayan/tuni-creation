import { useEffect, useRef, useState } from "react"
import useScrollReveal from "./hooks/useScrollReveal"
import "./styles/Motion.css"
import CartDrawer from "./components/CartDrawer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import ShopSection from "./components/ShopSection"
import "./App.css"

function App() {
  const pageRef = useRef(null)
  useScrollReveal(pageRef)

  const [cart, setCart] = useState(() => {
    // Check whether the cart is already stored in localStorage.
    const savedCart = localStorage.getItem("tuni-cart")
    // if there is no saved cart, return an empty array.
    if (!savedCart) {
      return []
    }
    try {
      // Convert the saved text back into a JavaScript array.
      return JSON.parse(savedCart)
    }catch {
      // If the saved Information is damaged,
      // safely start with an empty cart.
      return []
    }
  })

  const [addedProductId, setAddedProductId] = useState(null)

  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
      // Convert the cart into text and save it
      // inside the customer's browser.
      localStorage.setItem(
        "tuni-cart",
        JSON.stringify(cart),
      )
    }, [cart])

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  )


    function handleAddToCart(product) {
      // Update the cart using its previous value.
      setCart((previousCart) => {
        // Check if this product is already in the cart.
        const existingProduct =
          previousCart.find(
            (item) => item.id === product.id,
          )

        // If it is already there, increase its quantity.
        if (existingProduct) {
          return previousCart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          )
        }

        // If it is not in the cart, add it with a quantity of 1.
        return [
          ...previousCart,
          {
            ...product,
            quantity: 1,
          },
        ]
      })
      // Remember which product was just added
      setAddedProductId(
        product.baseProductId ?? product.id,
      )

      // After 2 seconds, clear the added product ID
      setTimeout(() => {
        setAddedProductId(null)
      }, 2000)
    }


    // Increase a product's quantity by one.
function increaseCartQuantity(productId) {
  setCart((previousCart) =>
    previousCart.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    ),
  )
}

// Reduce a product's quantity by one.
  function decreaseCartQuantity(productId) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )

        // Remove any product whose quantity reaches zero.
        .filter((item) => item.quantity > 0),
    )
  }

  // Remove a product completely from the cart.
  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== productId,
      ),
    )
  }

  // Remove every product from the cart.
  function clearCart() {
    setCart([])
  }

  return (
    <div className="app" ref={pageRef}>
      <Navbar
        cartItemCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
       <Hero />
       <AboutSection /> 

        <ShopSection
        onAddToCart={handleAddToCart}
        addedProductId={addedProductId}
      />
      
      </main>
      <Footer />

      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onIncrease = {increaseCartQuantity}
        onDecrease = {decreaseCartQuantity}
        onRemove = {removeFromCart}
        onClear = {clearCart}
      />
    </div>
  )
}

export default App
