import { useState } from 'react'
import {
  InputNumberContainer,
  InputNumberSymbolMinus,
  InputNumberSymbolPlus,
  InputNumberText,
} from './styles'

interface InputNumberProps {
  oldQuantity: number
}

export function InputNumber({ oldQuantity }: InputNumberProps) {
  const [quantity, setQuantity] = useState<number>(oldQuantity)

  function addQuantity() {
    setQuantity(quantity + 1)
  }
  function removeQuantity() {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <InputNumberContainer>
      <div onClick={removeQuantity}>
        <InputNumberSymbolMinus weight="bold" />
      </div>
      <div>
        <InputNumberText>{quantity}</InputNumberText>
      </div>
      <div onClick={addQuantity}>
        <InputNumberSymbolPlus weight="bold" />
      </div>
    </InputNumberContainer>
  )
}
