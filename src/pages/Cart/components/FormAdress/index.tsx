import { MapPin } from '@phosphor-icons/react'
import {
  AddressContainer,
  HeaderAddressInfo,
  InputLG,
  InputM,
  InputSM,
  InputsContainerSeparator,
  MainTitle,
  Subtitle,
  Text,
} from '../../styles'

export function FormAdress() {
  return (
    <>
      <MainTitle>Complete seu pedido</MainTitle>
      <AddressContainer>
        <HeaderAddressInfo>
          <MapPin size={22} />

          <p>
            <Subtitle>Endereço de Entrega</Subtitle>
            <Text>Informe o endereço onde deseja receber seu pedido</Text>
          </p>
        </HeaderAddressInfo>
        <div>
          <InputM type="" placeholder="CEP" />
        </div>
        <InputLG type="text" name="" id="" placeholder="Rua" />
        <InputsContainerSeparator>
          <InputM
            type="text"
            pattern="[0-9]*"
            placeholder="Número"
            name=""
            id=""
          />
          <InputLG type="text" name="" id="" placeholder="Complemento" />
        </InputsContainerSeparator>
        <InputsContainerSeparator>
          <InputM type="text" placeholder="Bairro" />
          <InputLG type="text" placeholder="Cidade" />
          <InputSM type="text" placeholder="UF" />
        </InputsContainerSeparator>
      </AddressContainer>
    </>
  )
}
