import { ShoppingCart } from '@phosphor-icons/react'
import {
  CardMenuContainer,
  ChoosesContainer,
  ContainerTags,
  MenuTextPrice,
  TypesTags,
} from './styles'
import { InputNumber } from '../../../../../components/InputNumber'
import { Product } from '../../../../../interfaces/Product'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../context/CartContext'

interface CardMenuProps {
  product: Product
}
export default function CardMenu({ product }: CardMenuProps) {
  const { addCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddCart() {
    const updatedProduct = { ...product, quantity }
    console.log(updatedProduct)

    addCart(updatedProduct, quantity)
    console.log(quantity)
  }

  function handleChangeQuantity(newQuantity: number) {
    setQuantity(newQuantity)
    console.log(`new quantity: ${quantity}`)
  }
  return (
    <CardMenuContainer>
      <img src={product.image} alt="" />
      <ContainerTags>
        {product.typesCoffee.map((typeCoffe) => (
          <TypesTags key={typeCoffe}>{typeCoffe}</TypesTags>
        ))}
      </ContainerTags>

      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ChoosesContainer>
        R$<MenuTextPrice>{product.price}</MenuTextPrice>
        <InputNumber oldQuantity={1} onChange={handleChangeQuantity} />
        <button onClick={handleAddCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ChoosesContainer>
    </CardMenuContainer>
  )
}
