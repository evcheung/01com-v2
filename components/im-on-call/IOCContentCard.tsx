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
  justify-content: flex-start;
  padding: 48px 24px;
  text-align: center;

  ${breakpoints("padding", "", [
  { 1180: '32px 24px' },
])}
  ${breakpoints("padding", "", [
  { 900: '32px 24px' },
])}
`
const ContentTitle = styled(Text)`
  margin: ${props => props.title ? '24px 0' : '6px 0'};
  font-size: 24px;
  margin-bottom: 16px;
  white-space: nowrap;
  ${breakpoints("font-size", "", [
  { 1180: '20px' },
])}
`

export const IOCContentCard = ({ title, description, imageSrc, children }: {
  title?: string,
  description: string,
  imageSrc: string,
  children?: React.ReactNode
}) => {
  return (
    <ProductCardContainer>
      <Image src={imageSrc} alt="" width={54} height={54} />
      <ContentTitle title={title}>{title}</ContentTitle>
      <Text variant={TextVariants.Body2}>{description}</Text>
      {children && <Box>{children}</Box>}
    </ProductCardContainer>
  )
}
