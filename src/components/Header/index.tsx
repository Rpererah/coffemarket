import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from './../../assets/Logo.svg'
import {
  ButtonLocale,
  CartButton,
  ContainerButtons,
  HeaderContainer,
} from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ContainerButtons>
        <ButtonLocale type="button">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </ButtonLocale>
        <CartButton>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </ContainerButtons>
    </HeaderContainer>
  )
}
