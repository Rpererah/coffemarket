import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  PriceText,
  ProductDetailsContainer,
  ProductDetailsMidContainer,
  ProductDetailsMidElementsContainer,
  RemoverButton,
  Subtitle,
  Text,
} from '../../styles'
import { Product } from '../../../../interfaces/Product'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
interface CardCartItemProps {
  product: Product
}
export function CardCartItem({ product }: CardCartItemProps) {
  const { removeCart } = useContext(CartContext)

  function handleRemoveCart() {
    removeCart(product.id)
  }
  return (
    <ProductDetailsContainer>
      <img src={product.image} alt="imagem do cafe tradicional" />
      <ProductDetailsMidContainer>
        <Subtitle>{product.title}</Subtitle>
        <ProductDetailsMidElementsContainer>
          <InputNumber oldQuantity={product.quantity} />
          <RemoverButton onClick={handleRemoveCart}>
            <Trash size={12} />
            <Text>REMOVER</Text>
          </RemoverButton>
        </ProductDetailsMidElementsContainer>
      </ProductDetailsMidContainer>
      <PriceText>
        R$ {(parseFloat(product.price) * product.quantity).toFixed(2)}
      </PriceText>
    </ProductDetailsContainer>
  )
}
