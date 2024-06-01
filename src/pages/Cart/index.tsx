import { CartContainer, FormContainer } from './styles'
import { TypesPayment } from './components/TypesPayments'
import { FormAdress } from './components/FormAdress'
import { Total } from './components/Total'
export function Cart() {
  return (
    <CartContainer>
      <FormContainer>
        <FormAdress />
        <TypesPayment />
      </FormContainer>
      <Total />
    </CartContainer>
  )
}
