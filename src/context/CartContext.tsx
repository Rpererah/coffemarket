import { createContext, useState } from 'react'
import { Product } from '../interfaces/Product'

interface CardContextProps {
  cart: Product[]
  addCart: (product: Product) => void
  removeCart: (productId: number) => void
}
export const CartContext = createContext<CardContextProps>({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
})

export function CartProvider({ children }) {
  const [cart, setCart] = useState<Product[]>([])
  function addCart(product: Product) {
    const existProduct = cart.find((item) => item.id === product.id)
    if (existProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      setCart(updatedCart)
    } else {
      const updatedCart = { ...product, quantity: 1 }
      setCart([...cart, updatedCart])
    }
  }
  function removeCart(productId: number) {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
  }
  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}
