import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  PriceText,
  ProductDetailsContainer,
  ProductDetailsMidContainer,
  ProductDetailsMidElementsContainer,
  RemoverButton,
} from './styles'
import { Product } from '../../../../interfaces/Product'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Subtitle, Text } from '../../styles'
interface CardCartItemProps {
  product: Product
}
export function CardCartItem({ product }: CardCartItemProps) {
  const { removeCart, changeQuantity } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(product.quantity)
  const [totalOneProductPrice, setTotalOneProductPrice] = useState<number>(
    parseFloat(product.price) * quantity,
  )

  useEffect(() => {
    setTotalOneProductPrice(parseFloat(product.price) * quantity)
  }, [quantity, product.price])

  function handleRemoveCart() {
    removeCart(product.id)
  }

  function handleChangeQuantity(newQuantity: number) {
    setQuantity(newQuantity)
    changeQuantity(product, newQuantity)
  }
  return (
    <ProductDetailsContainer>
      <img src={product.image} alt="imagem do cafe tradicional" />
      <ProductDetailsMidContainer>
        <Subtitle>{product.title}</Subtitle>
        <ProductDetailsMidElementsContainer>
          <InputNumber
            onChange={handleChangeQuantity}
            oldQuantity={product.quantity}
          />
          <RemoverButton onClick={handleRemoveCart}>
            <Trash size={12} />
            <Text>REMOVER</Text>
          </RemoverButton>
        </ProductDetailsMidElementsContainer>
      </ProductDetailsMidContainer>
      <PriceText>
        {totalOneProductPrice.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </PriceText>
    </ProductDetailsContainer>
  )
}
