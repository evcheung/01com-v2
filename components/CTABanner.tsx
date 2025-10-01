import styled from 'styled-components'
import { PrimaryButton, Box } from './core'
import { theme } from '../theme'
import Link from 'next/link'
import Heading, { HeadingColors, HeadingVariants } from './core/heading'
import { breakpoints } from '../utils/breakpoints'

const Banner = styled.div`
  width: 100vw;
  background-color: ${theme.colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
  ${breakpoints("padding", "", [
  { 760: "24px 15px" },
])}
`
const BannerContentContainer = styled(Box)`
flex-wrap: wrap;
max-width: 1200px;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
${breakpoints("flex-direction", "", [
  { 1240: "column" },
])}
`

const ButtonGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${breakpoints("margin-top", "", [
  { 1240: "16px" },
])}
  ${breakpoints("grid-template-columns", "", [
  { 760: "1fr 1fr" },
])}
  ${breakpoints("width", "", [
  { 760: "100%" },
])}
`

const StyledHeading = styled(Heading)`
  &&& {
    white-space: nowrap;
    ${breakpoints("font-size", "", [
  { 760: theme.fontSize.xl },
])}
  }
`

export const LinkedButton = ({ href, label, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <PrimaryButton style={{ height: "fit-content" }}>{label}</PrimaryButton>
  </Link>
)


export const CTABanner = () => {
  return (
    <Banner>
      <BannerContentContainer>
        <StyledHeading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>Step In To The Future, Buy Now</StyledHeading>
        <ButtonGrid>
          <LinkedButton label="IronCAP™" href="https://www.ironcap.ca/" target="_blank" />
          <LinkedButton label="IronCAP X™" href="https://www.ironcap.ca/ironcap-x" target="_blank" />
          <LinkedButton label="I'm InTouch" href="/imintouch-remote-pc-desktop/" target="_blank" />
          {/* <LinkedButton label="I'm OnCall" href="https://www.01com.com/imoncall-remote-help-desk/" target="_blank" /> */}
          <LinkedButton label="I'm OnCall" href="/imoncall-remote-help-desk/" target="_blank" />
        </ButtonGrid>
      </BannerContentContainer>
    </Banner>
  )
}
