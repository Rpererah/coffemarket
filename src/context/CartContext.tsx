import { createContext, useState } from 'react'
import { Product } from '../interfaces/Product'

interface CardContextProps {
  cart: Product[]
  addCart: (product: Product) => void
  removeCart: (productId: number) => void
  totalPrice: number
  totalPriceCart: (updatedCart: Product[]) => void
  changeQuantity: (product: Product, newQuantity: number) => void
}
export const CartContext = createContext<CardContextProps>({
  cart: [],
  addCart: () => {},
  removeCart: () => {},
  totalPrice: 0,
  totalPriceCart: () => {},
  changeQuantity: () => {},
})

export function CartProvider({ children }) {
  const [cart, setCart] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  function addCart(product: Product) {
    const existProduct = cart.find((item) => item.id === product.id)
    if (existProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity } : item,
      )
      setCart(updatedCart)
      totalPriceCart(updatedCart)
    } else {
      setCart([...cart, product])
      totalPriceCart([...cart, product])
    }
  }
  function removeCart(productId: number) {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
    totalPriceCart(updatedCart)
  }

  function totalPriceCart(updatedCart: Product[]) {
    const reduceOfCart = updatedCart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0,
    )
    const fixedFloatPrice = reduceOfCart.toFixed(2)

    setTotalPrice(parseFloat(fixedFloatPrice))
  }
  function changeQuantity(product: Product, newQuantity: number) {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item,
    )
    totalPriceCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        totalPrice,
        totalPriceCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
