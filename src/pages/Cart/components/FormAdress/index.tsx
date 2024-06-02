import { Subtitle, Text, MainTitle } from '../../styles'
import { useContext } from 'react'
import { FormCartContext } from '../../../../context/FormContext'
import {
  AddressContainer,
  ErrorText,
  HeaderAddressInfo,
  IconMap,
  InputLG,
  InputM,
  InputSM,
  InputsContainerSeparator,
} from './styles'

export function FormAdress() {
  const { formMethods } = useContext(FormCartContext)
  const { register, formState } = formMethods
  const { errors } = formState
  return (
    <>
      <MainTitle>Complete seu pedido</MainTitle>
      <AddressContainer>
        <HeaderAddressInfo>
          <IconMap />

          <p>
            <Subtitle>Endereço de Entrega</Subtitle>
            <Text>Informe o endereço onde deseja receber seu pedido</Text>
          </p>
        </HeaderAddressInfo>
        <div>
          <InputM
            type=""
            placeholder="CEP"
            {...register('cep', { required: true })}
          />
          {errors.cep && <ErrorText>**Campo obrigatório</ErrorText>}
        </div>
        <InputLG
          type="text"
          id=""
          placeholder="Rua"
          {...register('adressLine1', { required: true })}
        />
        {errors.adressLine1 && <ErrorText>**Campo obrigatório</ErrorText>}
        <InputsContainerSeparator>
          <InputM
            type="text"
            pattern="[0-9]*"
            placeholder="Número"
            id=""
            {...register('adressNumber', { required: true })}
          />
          {errors.adressNumber && <ErrorText>**Campo obrigatório</ErrorText>}
          <InputLG
            type="text"
            id=""
            placeholder="Complemento"
            {...register('adressLine2')}
          />
        </InputsContainerSeparator>
        <InputsContainerSeparator>
          <InputM
            type="text"
            placeholder="Bairro"
            {...register('adressNeighborhood', { required: true })}
          />
          {errors.adressNeighborhood && (
            <ErrorText>**Campo obrigatório</ErrorText>
          )}
          <InputLG
            type="text"
            placeholder="Cidade"
            {...register('adressCity', { required: true })}
          />
          {errors.adressCity && <ErrorText>**Campo obrigatório</ErrorText>}
          <InputSM
            type="text"
            placeholder="UF"
            {...register('adressState', { required: true })}
          />
          {errors.adressState && <ErrorText>**Campo obrigatório</ErrorText>}
        </InputsContainerSeparator>
      </AddressContainer>
    </>
  )
}
