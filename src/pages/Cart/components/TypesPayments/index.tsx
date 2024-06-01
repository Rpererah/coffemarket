import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  HeaderPaymentInfo,
  PaymentContainer,
  Subtitle,
  TagTypesPayment,
  Text,
  TypesPaymentContainer,
} from '../../styles'

export function TypesPayment() {
  return (
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
  )
}
