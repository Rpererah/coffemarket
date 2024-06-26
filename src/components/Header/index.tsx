import { MapPin } from '@phosphor-icons/react'
import {
  ButtonLocale,
  CartButton,
  CartIcon,
  ContainerButtons,
  HeaderContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
export function Header() {
  const { cart } = useContext(CartContext)
  const [quantityItems, setQuantityItems] = useState<number | null>(null)

  useEffect(() => {
    function calcQuantityItems() {
      const reduceQuantityItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0,
      )
      setQuantityItems(reduceQuantityItems)
    }
    calcQuantityItems()
  }, [cart])

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/Rpererah/coffemarket/ffdc8652ba0fda7da04ec64ee8a8560042748e4e/src/assets/Logo.svg"
            alt=""
          />
        </NavLink>
      </div>

      <ContainerButtons>
        <ButtonLocale type="button">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </ButtonLocale>

        <CartButton
          content={quantityItems !== null ? quantityItems : null}
          to="/cart"
        >
          <CartIcon weight="fill" size={22} />
        </CartButton>
      </ContainerButtons>
    </HeaderContainer>
  )
}
