import CardMenu from './components/CardMenu'
import { CardMenuItemsContainer, MenuContainer } from './styles'
import { products } from './utils/products'
export function Menu() {
  return (
    <MenuContainer>
      <h1>Nossos cafés</h1>
      <CardMenuItemsContainer>
        {products.map((product, index) => (
          <CardMenu product={product} key={index} />
        ))}
      </CardMenuItemsContainer>
    </MenuContainer>
  )
}
