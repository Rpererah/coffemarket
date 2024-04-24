import styled from 'styled-components'

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  justify-content: center;
  @media (max-width: 700px) {
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CardMenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 32px;
  justify-content: flex-start;
  @media (max-width: 700px) {
    justify-content: center;
  }
`
