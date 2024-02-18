import styled from "styled-components"
import { theme } from "../../theme"
import { Box, Text } from "../core"
import { breakpoints } from "../../utils/breakpoints"
import { ReactNode } from "react"
import Image from "next/image"

const FeatureCardContainer = styled(Box)`
background: ${theme.colors.neutral.xs};
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 48px;
text-align: center;
${breakpoints("padding", "", [
  { 1180: '32px 24px' },
])}
  ${breakpoints("padding", "", [
  { 900: '32px 24px' },
])}
`

const FeatureTitle = styled(Text)`
  margin: 24px 0;
  font-size: 24px;
  margin-bottom: 16px;
  white-space: nowrap;
  ${breakpoints("font-size", "", [
  { 1180: '20px' },
])}
`

const FeatureCardGrid = styled(Box) <{ columns: 1 | 2 }>`
display: grid;
grid-template-columns:${props => props.columns === 2 ? '1fr 1fr' : '1fr'};
column-gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 1200: '1fr' },
])}

`


export const FeatureCard = ({ columns, title, imgSrc, children }: { columns: 1 | 2, title: string, imgSrc: string, children: ReactNode }) => {
  return (
    <FeatureCardContainer>
      <Image src={imgSrc} alt='' width={64} height={64} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureCardGrid columns={columns}>
        {children}
      </FeatureCardGrid>
    </FeatureCardContainer>
  )
}
