import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  margin: 2rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 700px) {
    margin: 0px;
    padding: 1rem;
  }
`
