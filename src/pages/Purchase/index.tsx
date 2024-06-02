import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import Motoboy from './../../assets/motoboy.svg'
import {
  BoldText,
  InfoLayout,
  PurchaseContainer,
  PurchaseInformationContainer,
  PurchaseMainContainer,
  Substitle,
  Text,
} from './styles'
import { CircleIcons } from '../Home/styles'
import { useContext } from 'react'
import { FormCartContext } from '../../context/FormContext'
export function Purchase() {
  const { data } = useContext(FormCartContext)
  const getPaymentTypeText = (paymentType: 'credit' | 'debit' | 'cash') => {
    switch (paymentType) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'cash':
        return 'Dinheiro'
      default:
        return ''
    }
  }

  if (!data) {
    return <div>Formulário não preenchido</div>
  }
  return (
    <PurchaseContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <Substitle>
        Agora é só aguardar que logo o café chegará até você
      </Substitle>
      <PurchaseMainContainer>
        <PurchaseInformationContainer>
          <InfoLayout>
            <CircleIcons colorbg="purple">
              <MapPin size={16} weight="fill" />
            </CircleIcons>
            <Text>
              Entrega em{' '}
              <BoldText>
                Rua {data.adressLine1}, {data.adressNumber}
              </BoldText>
              <p>
                {data.adressNeighborhood} - {data.adressCity},{' '}
                {data.adressState}
              </p>
            </Text>
          </InfoLayout>
          <InfoLayout>
            <CircleIcons colorbg="yellow_light">
              <Timer size={16} />
            </CircleIcons>
            <Text>
              Previsão de entrega
              <p>
                <BoldText>20 min - 30 min</BoldText>
              </p>
            </Text>
          </InfoLayout>
          <InfoLayout>
            <CircleIcons colorbg="yellow_dark">
              <CurrencyDollar size={16} />
            </CircleIcons>
            <Text>
              Pagamento na entrega
              <p>
                <BoldText>{getPaymentTypeText(data.typeOfPayment)}</BoldText>
              </p>
            </Text>
          </InfoLayout>
        </PurchaseInformationContainer>

        <img
          src={Motoboy}
          alt="imagem ilustrativa de motoboy indo entregar seu cafe"
        />
      </PurchaseMainContainer>
    </PurchaseContainer>
  )
}
