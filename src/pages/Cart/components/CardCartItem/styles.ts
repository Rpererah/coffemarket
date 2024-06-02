import styled from 'styled-components'
import { Text } from '../../styles'

export const PriceText = styled(Text)`
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
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

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`

export const ProductDetailsMidElementsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
