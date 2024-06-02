import styled from 'styled-components'
import { BaseContainer, BaseInfoContainers } from '../../styles'
import { CurrencyDollar } from '@phosphor-icons/react'

export const HeaderPaymentInfo = styled(BaseInfoContainers)`
  color: ${(props) => props.theme.purple};
`

export const PaymentContainer = styled(BaseContainer)`
  gap: 32px;
  @media (max-width: 800px) {
    gap: 16px;
  }
`

export const TypesPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const IconMap = styled(CurrencyDollar)`
  height: 22px;
  width: 22px;

  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`

export const TagTypesPayment = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
  padding: 16px;
  background-color: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  border: ${(props) =>
    props.selected ? '1px solid ' + props.theme.purple : 'none'};
  border-radius: 6px;
  cursor: pointer;

  p {
    color: ${(props) => props.theme['base-title']};
  }

  &:not(:hover) {
    background-color: ${(props) =>
      props.selected ? '' : props.theme['base-hover']};
  }

  @media (max-width: 800px) {
    gap: 6px;
    padding: 20px;
  }
`
