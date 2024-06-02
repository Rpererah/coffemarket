import { useContext } from 'react'
import { MainTitle, Subtitle, Text } from '../../styles'
import { CardCartItem } from '../CardCartItem'
import { CartContext } from '../../../../context/CartContext'
import {
  ButtonConfirm,
  TextTotal,
  TotalContainer,
  TotalContainerInfo,
  TotalDetails,
} from './styles'

export function Total() {
  const { cart, totalPrice } = useContext(CartContext)
  const tax = 3.5
  const taxWithModelLocale = tax.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  const adjustedPrice = tax + totalPrice
  const modelCoinLocale = adjustedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return (
    <TotalContainer>
      <MainTitle>Cafés selecionados</MainTitle>

      {cart.length > 0 ? (
        <TotalContainerInfo>
          {cart.map((item) => (
            <CardCartItem key={item.id} product={item} />
          ))}
          <TotalDetails>
            <Text>Total de itens</Text>
            <Subtitle>
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Subtitle>
          </TotalDetails>
          <TotalDetails>
            <Text>Entrega</Text>
            <Subtitle>{taxWithModelLocale}</Subtitle>
          </TotalDetails>
          <TotalDetails>
            <TextTotal>Total</TextTotal>
            <TextTotal>{modelCoinLocale}</TextTotal>
          </TotalDetails>
          <ButtonConfirm type="submit" form="formAdress">
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </TotalContainerInfo>
      ) : (
        <TotalContainerInfo>
          <TotalDetails>
            <Text>Seu carrinho esta vazio</Text>
          </TotalDetails>
        </TotalContainerInfo>
      )}
    </TotalContainer>
  )
}
