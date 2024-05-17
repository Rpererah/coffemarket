import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const BaseInfoContainers = styled.div`
  display: flex;
  gap: 8px;
`
export const HeaderAddressInfo = styled(BaseInfoContainers)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const HeaderPaymentInfo = styled(BaseInfoContainers)`
  color: ${(props) => props.theme.purple};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const MainTitle = styled.h2`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`
export const BaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`
export const AddressContainer = styled(BaseContainer)`
  gap: 16px;
`
export const PaymentContainer = styled(BaseContainer)`
  gap: 32px;
`

export const TotalContainerInfo = styled(BaseContainer)`
  gap: 24px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`
export const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  height: 42px;
  padding: 12px;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
export const InputLG = styled(BaseInput)`
  flex: 1;
  height: 42px;
`
export const InputM = styled(BaseInput)`
  width: 200px;
`
export const InputSM = styled(BaseInput)`
  width: 60px;
`
export const InputsContainerSeparator = styled.div`
  display: flex;
  gap: 12px;
`
export const TypesPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TagTypesPayment = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
  padding: 16px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`
export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 35px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 16px;

  img {
    height: 64px;
    width: 64px;
  }
`
export const ProductDetailsMidContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ProductDetailsMidElementsContainer = styled.div`
  display: flex;
  gap: 8px;
`
export const InputQuantity = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  height: 32px;
  width: 62px;
  padding: 12px;
  border-radius: 4px;
  border: none;
`
export const RemoverButton = styled.button`
  display: flex;
  color: ${(props) => props.theme.purple};
  height: 32px;
  width: 91px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: none;
  gap: 4px;
`
export const PriceText = styled(Text)`
  font-weight: bold;
`
export const ButtonConfirm = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  height: 46px;
  width: 368px;
  font-size: 0.875rem;
  font-weight: bold;
`
export const TotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TextTotal = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`
