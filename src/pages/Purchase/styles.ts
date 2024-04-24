import styled from 'styled-components'

export const PurchaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
    font-size: 2rem;
  }
  @media (max-width: 700px) {
    h1 {
      text-align: center;
    }
    img {
      display: none;
    }
  }
`
export const PurchaseMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PurchaseInformationContainer = styled.div`
  position: relative;
  padding: 36px;
  height: 270px;
  width: 526px;
  border-top-right-radius: 34px;
  border-bottom-left-radius: 34px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 32px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    background: linear-gradient(135deg, #dbac2c, #8047f8);
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

export const Substitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 40px;
  font-size: 1.25rem;
  @media (max-width: 700px) {
    text-align: center;
  }
`
export const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const BoldText = styled.span`
  font-weight: bold;
`
export const InfoLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
