import styled from 'styled-components'
import { PrimaryButton, Box } from './core'
import { theme } from '../theme'
import Link from 'next/link'
import Heading, { HeadingColors, HeadingVariants } from './core/heading'

const Banner = styled.div`
  width: 100vw;
  background-color: ${theme.colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
`

const ButtonGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const LinkedButton = ({ href, label, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <PrimaryButton style={{ height: "fit-content" }}>{label}</PrimaryButton>
  </Link>
)


export const CTABanner = () => {
  return (
    <Banner>
      <Box flexDirection='row' flexAlignment='center' flexJustify='space-between' width="100%" style={{ flexWrap: 'wrap', maxWidth: '1200px' }} >
        <Heading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White} style={{ whiteSpace: 'nowrap' }}>Step In To The Future, Buy Now</Heading>
        <ButtonGrid>
          <LinkedButton label="IronCAP" href="https://www.ironcap.ca/" target="blank" />
          <LinkedButton label="IronCAP X" href="https://www.ironcap.ca/ironcap-x" target="blank" />
          <LinkedButton label="I'm InTouch" href="/im-intouch" target="blank" />
          <LinkedButton label="I'm OnCall" href="/im-oncall" target="blank" />
        </ButtonGrid>
      </Box>
    </Banner>
  )
}
