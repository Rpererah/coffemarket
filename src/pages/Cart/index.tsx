import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  ButtonConfirm,
  CartContainer,
  FormContainer,
  HeaderAddressInfo,
  HeaderPaymentInfo,
  InputLG,
  InputM,
  InputSM,
  InputsContainerSeparator,
  MainTitle,
  PaymentContainer,
  Subtitle,
  TagTypesPayment,
  Text,
  TextTotal,
  TotalContainer,
  TotalContainerInfo,
  TotalDetails,
  TypesPaymentContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { CardCartItem } from './components/CardCartItem'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
export function Cart() {
  const { cart } = useContext(CartContext)
  return (
    <CartContainer>
      <FormContainer>
        <MainTitle>Complete seu pedido</MainTitle>
        <AddressContainer>
          <HeaderAddressInfo>
            <MapPin size={22} />

            <p>
              <Subtitle>Endereço de Entrega</Subtitle>
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </p>
          </HeaderAddressInfo>
          <div>
            <InputM type="" placeholder="CEP" />
          </div>
          <InputLG type="text" name="" id="" placeholder="Rua" />
          <InputsContainerSeparator>
            <InputM
              type="text"
              pattern="[0-9]*"
              placeholder="Número"
              name=""
              id=""
            />
            <InputLG type="text" name="" id="" placeholder="Complemento" />
          </InputsContainerSeparator>
          <InputsContainerSeparator>
            <InputM type="text" placeholder="Bairro" />
            <InputLG type="text" placeholder="Cidade" />
            <InputSM type="text" placeholder="UF" />
          </InputsContainerSeparator>
        </AddressContainer>

        <PaymentContainer>
          <HeaderPaymentInfo>
            <CurrencyDollar size={22} />
            <p>
              <Subtitle>Pagamento</Subtitle>
              <Text>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </p>
          </HeaderPaymentInfo>

          <TypesPaymentContainer>
            <TagTypesPayment>
              <CreditCard size={16} />
              <Text>Cartão de crédito</Text>
            </TagTypesPayment>
            <TagTypesPayment>
              <Bank size={16} />
              <Text>cartão de débito</Text>
            </TagTypesPayment>
            <TagTypesPayment>
              <Money size={16} />
              <Text>dinheiro</Text>
            </TagTypesPayment>
          </TypesPaymentContainer>
        </PaymentContainer>
      </FormContainer>

      <TotalContainer>
        <MainTitle>Cafés selecionados</MainTitle>

        {cart.length > 0 ? (
          <TotalContainerInfo>
            {cart.map((item) => (
              <CardCartItem key={item.id} product={item} />
            ))}
            <TotalDetails>
              <Text>Total de itens</Text>
              <Subtitle>R$ 29,70</Subtitle>
            </TotalDetails>
            <TotalDetails>
              <Text>Entrega</Text>
              <Subtitle>R$ 3,50</Subtitle>
            </TotalDetails>
            <TotalDetails>
              <TextTotal>Total</TextTotal>
              <TextTotal>R$ 33,20</TextTotal>
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
    </CartContainer>
  )
}
