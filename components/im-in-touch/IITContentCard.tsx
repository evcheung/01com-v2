import Image from "next/image"
import styled from "styled-components"
import { Box, Text, TextVariants } from "../core"
import { theme } from "../../theme"
import { breakpoints } from "../../utils/breakpoints"

const ProductCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  text-align: center;

  ${breakpoints("padding", "", [
  { 1180: '32px 24px' },
])}
  ${breakpoints("padding", "", [
  { 900: '32px 24px' },
])}
`
const ContentTitle = styled(Text)`
  margin: 24px 0;
  font-size: 24px;
  margin-bottom: 16px;
  ${breakpoints("font-size", "", [
  { 1180: '20px' },
])}
`

export const IITContentCard = ({ title, description, imageSrc }: {
  title?: string,
  description: string,
  imageSrc: string
}) => {
  return (
    <ProductCardContainer>
      <Image src={imageSrc} alt="" width={48} height={48} />
      <ContentTitle>{title}</ContentTitle>
      <Text variant={TextVariants.Body2}>{description}</Text>
    </ProductCardContainer>
  )
}
