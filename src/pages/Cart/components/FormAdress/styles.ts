import styled from 'styled-components'
import { BaseContainer, BaseInfoContainers } from '../../styles'
import { MapPin } from '@phosphor-icons/react'

export const AddressContainer = styled(BaseContainer)`
  gap: 16px;

  @media (max-width: 800px) {
    max-width: 90vw;
  }
`

export const HeaderAddressInfo = styled(BaseInfoContainers)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const IconMap = styled(MapPin)`
  height: 22px;
  width: 22px;

  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  height: 42px;
  padding: 12px;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  @media (max-width: 800px) {
    padding: 8px;
  }
`

export const InputLG = styled(BaseInput)`
  flex: 1;
  height: 42px;
`
export const InputM = styled(BaseInput)`
  width: 200px;
  @media (max-width: 800px) {
    flex: 1;
    width: 100%;
  }
`
export const InputSM = styled(BaseInput)`
  width: 60px;
  @media (max-width: 800px) {
    flex: 1;
    width: 100%;
  }
`
export const InputsContainerSeparator = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const ErrorText = styled.p`
  color: ${(props) => props.theme.yellow};
  padding: 0.5rem;
`
