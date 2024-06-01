import { Minus, Plus } from '@phosphor-icons/react'
import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  width: 4.5rem;
  height: 2rem;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0.2rem;
`

export const InputNumberText = styled.span`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
  font-weight: 400;
`
export const InputNumberSymbolPlus = styled(Plus)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  width: 0.875rem;
  height: 0.875rem;
`
export const InputNumberSymbolMinus = styled(Minus)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  width: 0.875rem;
  height: 0.875rem;
`
