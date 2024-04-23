import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const ButtonLocale = styled.button`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  padding: 0.5rem;
  width: 8.9rem;
  height: 38px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};
  height: 38px;
  width: 38px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['yellow-dark']};
`
