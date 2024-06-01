import { useState } from 'react'
import {
  InputNumberContainer,
  InputNumberSymbolMinus,
  InputNumberSymbolPlus,
  InputNumberText,
} from './styles'

interface InputNumberProps {
  oldQuantity: number
  onChange?: (newValue: number) => void | undefined
}

export function InputNumber({ oldQuantity, onChange }: InputNumberProps) {
  const [quantity, setQuantity] = useState<number>(oldQuantity)

  function addQuantity() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    if (onChange !== undefined) {
      onChange(newQuantity)
    }
  }
  function removeQuantity() {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      if (onChange !== undefined) {
        onChange(newQuantity)
      }
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
