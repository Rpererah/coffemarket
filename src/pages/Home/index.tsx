import {
  BannerContainer,
  CircleContainer,
  CircleIcons,
  ImageContainer,
  MenuItems,
  Title,
} from './styles'
import CafeBanner from './../../assets/CafeBanner.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Menu } from './Menu'
export function Home() {
  return (
    <div>
      <BannerContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <MenuItems>
            <CircleContainer>
              <CircleIcons colorbg="yellow_dark">
                <ShoppingCart weight="fill" />
              </CircleIcons>
              <p>Compra simples e segura</p>
            </CircleContainer>

            <CircleContainer>
              <CircleIcons colorbg="gray">
                <Package weight="fill" />
              </CircleIcons>
              <p>Embalagem mantém o café intacto</p>
            </CircleContainer>

            <CircleContainer>
              <CircleIcons colorbg="yellow_light">
                <Timer weight="fill" />
              </CircleIcons>
              <p>Entrega rápida e rastreada</p>
            </CircleContainer>

            <CircleContainer>
              <CircleIcons colorbg="purple">
                <Coffee weight="fill" />
              </CircleIcons>
              <p>O café chega fresquinho até você</p>
            </CircleContainer>
          </MenuItems>
        </div>

        <ImageContainer src={CafeBanner} alt="" />
      </BannerContainer>
      <Menu />
    </div>
  )
}
