import { ShoppingCart } from '@phosphor-icons/react'
import {
  CardMenuContainer,
  ChoosesContainer,
  ContainerTags,
  TypesTags,
} from './styles'

export interface Product {
  id: number
  image: string
  typesCoffee: string[]
  title: string
  description: string
  price: string
  quantity: number
}

interface CardMenuProps {
  product: Product
}
export default function CardMenu({ product }: CardMenuProps) {
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
        R$<span>{product.price}</span>{' '}
        <input type="number" value={product.quantity} />{' '}
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ChoosesContainer>
    </CardMenuContainer>
  )
}
