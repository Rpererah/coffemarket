import { useContext } from 'react'
import {
  ButtonConfirm,
  MainTitle,
  Subtitle,
  Text,
  TextTotal,
  TotalContainer,
  TotalContainerInfo,
  TotalDetails,
} from '../../styles'
import { CardCartItem } from '../CardCartItem'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../../context/CartContext'

export function Total() {
  const { cart, totalPrice } = useContext(CartContext)
  const tax = 3.5

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
            <Subtitle>R$ {totalPrice}</Subtitle>
          </TotalDetails>
          <TotalDetails>
            <Text>Entrega</Text>
            <Subtitle>R$ {tax}</Subtitle>
          </TotalDetails>
          <TotalDetails>
            <TextTotal>Total</TextTotal>
            <TextTotal>R$ {tax + totalPrice}</TextTotal>
          </TotalDetails>
          <ButtonConfirm>
            <NavLink to="/purchase">CONFIRMAR PEDIDO</NavLink>
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
