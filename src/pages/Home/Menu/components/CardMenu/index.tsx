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
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'

interface CardMenuProps {
  product: Product
}
export default function CardMenu({ product }: CardMenuProps) {
  const { addCart } = useContext(CartContext)

  function handleAddCart() {
    addCart(product)
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
        <InputNumber oldQuantity={0} />
        <button onClick={handleAddCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ChoosesContainer>
    </CardMenuContainer>
  )
}
