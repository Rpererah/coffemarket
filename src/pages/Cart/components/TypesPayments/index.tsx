import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { Subtitle, Text } from '../../styles'
import { FormCartContext } from '../../../../context/FormContext'
import { useContext, useState } from 'react'
import {
  HeaderPaymentInfo,
  IconMap,
  PaymentContainer,
  TagTypesPayment,
  TypesPaymentContainer,
} from './styles'
import { ErrorText } from '../FormAdress/styles'

export function TypesPayment() {
  const { formMethods } = useContext(FormCartContext)
  const { register, setValue, formState } = formMethods
  const { errors } = formState

  const handlePaymentSelection = (paymentType: 'credit' | 'cash' | 'debit') => {
    setValue('typeOfPayment', paymentType)
    setSelectedPayment(paymentType)
  }

  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  return (
    <PaymentContainer>
      <HeaderPaymentInfo>
        <IconMap />
        <p>
          <Subtitle>Pagamento</Subtitle>
          <Text>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Text>
        </p>
      </HeaderPaymentInfo>
      <TypesPaymentContainer>
        <TagTypesPayment
          selected={selectedPayment === 'credit'}
          onClick={() => handlePaymentSelection('credit')}
        >
          <CreditCard size={16} />
          <Text>Cartão de crédito</Text>
        </TagTypesPayment>
        <TagTypesPayment
          selected={selectedPayment === 'debit'}
          onClick={() => handlePaymentSelection('debit')}
        >
          <Bank size={16} />
          <Text>Cartão de débito</Text>
        </TagTypesPayment>

        <TagTypesPayment
          selected={selectedPayment === 'cash'}
          onClick={() => handlePaymentSelection('cash')}
        >
          <Money size={16} />
          <Text>Dinheiro</Text>
        </TagTypesPayment>
        <input
          type="hidden"
          {...register('typeOfPayment', { required: true })}
        />
      </TypesPaymentContainer>
      {errors.typeOfPayment && <ErrorText>**Campo obrigatório</ErrorText>}
    </PaymentContainer>
  )
}
