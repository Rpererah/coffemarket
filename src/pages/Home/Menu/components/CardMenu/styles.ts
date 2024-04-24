import styled from 'styled-components'

export const CardMenuContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 18px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  img {
    margin-top: -40px;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 33px;
    text-align: center;
  }
  h3 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
  }
`
export const ChoosesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  font-size: 0.875rem;

  span {
    flex: 1;
    margin-right: 8px;
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
  }
  input {
    width: 72px;
    height: 38px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: 38px;
    height: 38px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: none;
  }
`
export const ContainerTags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`

export const TypesTags = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  height: 21px;
  padding: 8px;

  font-size: 0.625rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`
