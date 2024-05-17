import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from '@phosphor-icons/react'
import Coffe from './../../assets/Coffes/Coffee1.svg'
import {
  AddressContainer,
  ButtonConfirm,
  CartContainer,
  FormContainer,
  HeaderAddressInfo,
  HeaderPaymentInfo,
  InputLG,
  InputM,
  InputQuantity,
  InputSM,
  InputsContainerSeparator,
  MainTitle,
  PaymentContainer,
  PriceText,
  ProductDetailsContainer,
  ProductDetailsMidContainer,
  ProductDetailsMidElementsContainer,
  RemoverButton,
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
export function Cart() {
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
            <InputM type="number" placeholder="Número" name="" id="" />
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
        <TotalContainerInfo>
          <ProductDetailsContainer>
            <img src={Coffe} alt="imagem do cafe tradicional" />
            <ProductDetailsMidContainer>
              <Subtitle>Expresso Tradicional</Subtitle>
              <ProductDetailsMidElementsContainer>
                <InputQuantity type="number" />
                <RemoverButton>
                  <Trash size={12} />
                  <Text>REMOVER</Text>
                </RemoverButton>
              </ProductDetailsMidElementsContainer>
            </ProductDetailsMidContainer>
            <PriceText>R$ 9,90</PriceText>
          </ProductDetailsContainer>
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
      </TotalContainer>
    </CartContainer>
  )
}
