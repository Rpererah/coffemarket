import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const BaseInfoContainers = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const BaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  @media (max-width: 700px) {
    padding: 36px;
    max-width: 90vw;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 700px) {
    font-size: 1.1rem;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 700px) {
    font-size: 0.9rem;
    text-align: center;
  }
`
export const MainTitle = styled.h2`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    text-align: center;
  }
`
