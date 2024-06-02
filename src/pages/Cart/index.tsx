import { CartContainer, FormContainer } from './styles'
import { TypesPayment } from './components/TypesPayments'
import { FormAdress } from './components/FormAdress'
import { Total } from './components/Total'
import { useContext } from 'react'
import { FormCartContext } from '../../context/FormContext'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export interface FormData {
  cep: string
  adressLine1: string
  adressLine2: string
  adressNumber: number
  adressNeighborhood: string
  adressCity: string
  adressState: string
  typeOfPayment: 'credit' | 'debit' | 'cash'
}

export function Cart() {
  const { clearCart } = useContext(CartContext)
  const { formMethods, updatedFormData } = useContext(FormCartContext)
  const { handleSubmit, formState, reset } = formMethods
  const history = useNavigate()

  const onSubmit = (data: FormData) => {
    console.log(data)
    const hasErrors = Object.keys(formState.errors).length > 0
    if (!hasErrors) {
      updatedFormData(data)
      clearCart()
      reset()
      history('/purchase')
    }
  }
  return (
    <CartContainer>
      <FormContainer id="formAdress" onSubmit={handleSubmit(onSubmit)}>
        <FormAdress />
        <TypesPayment />
      </FormContainer>
      <Total />
    </CartContainer>
  )
}
