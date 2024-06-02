import { ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
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

interface CardButtonProps {
  content: number | null
}
export const CartButton = styled(NavLink)<CardButtonProps>`
  position: relative;
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
  cursor: pointer;

  ${(props) =>
    props.content &&
    `
      &::after {
        content: "${props.content}";
        position: absolute;
        top: -20%;
        right: -20%;
        height: 20px;
        width: 20px;
        border-radius: 999px;
        background-color: ${props.theme['yellow-dark']};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: bold;
      }
  `}
`
export const CartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const CartBadge = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 999px;
  background-color: ${(props) => props.theme['yellow-dark']};
`
