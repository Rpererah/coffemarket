import styled from 'styled-components'
import { BaseContainer } from '../../styles'

export const ButtonConfirm = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  height: 46px;
  width: 368px;
  font-size: 0.875rem;
  font-weight: bold;

  @media (max-width: 700px) {
    width: 70vw;
  }
`

export const TextTotal = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const TotalContainerInfo = styled(BaseContainer)`
  gap: 24px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const TotalDetails = styled.div`
  display: flex;
  justify-content: space-between;
`
