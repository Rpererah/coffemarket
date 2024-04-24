import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  @media (max-width: 700px) {
    margin-top: 0rem;
  }
`
export const Title = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2', sans-serif;
`
export const Subtitle = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 2rem;
  line-height: 16;
  font-weight: 700;
`
export const MenuItems = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
`

const CIRCLE_COLORS = {
  yellow_dark: 'yellow-dark',
  yellow_light: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface CircleProps {
  colorbg: keyof typeof CIRCLE_COLORS
}

export const CircleContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const CircleIcons = styled.span<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme[CIRCLE_COLORS[props.colorbg]]};
  border-radius: 999px;
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.background};
`
export const ImageContainer = styled.img`
  @media (max-width: 700px) {
    display: none;
  }
`
