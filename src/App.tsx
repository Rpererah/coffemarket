import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartProvider } from './context/CartContext'
import { FormCartProvider } from './context/FormContext'
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <FormCartProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </FormCartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
