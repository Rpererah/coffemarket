import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from './../../assets/Logo.svg'
import {
  ButtonLocale,
  CartButton,
  ContainerButtons,
  HeaderContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <ContainerButtons>
        <ButtonLocale type="button">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </ButtonLocale>
        <CartButton>
          <NavLink to="/cart">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </CartButton>
      </ContainerButtons>
    </HeaderContainer>
  )
}
