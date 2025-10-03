import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton } from '../core'
import { theme } from '../../theme'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import { Carousel } from 'react-responsive-carousel'
import iocBanner from '../../public/assets/bitmap.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'
import { breakpoints } from '../../utils/breakpoints'
import Link from 'next/link'
import { LINKS } from '../../utils/constants'
import { Breadcrumb } from '../Breadcrumb'

const Container = styled(Box)`
  width: 100vw;
`
interface StyledCarouselProps {
  children?: ReactNode | ReactNode[];
}

const StyledCarousel = styled(Carousel) <StyledCarouselProps>`
  .control-arrow {
    background: white !important;
    height: fit-content !important;
    padding: 14px 8px !important;
    opacity: 1 !important;
    top: 56% !important;
    transform: translateY(-50%);
    margin: 0px 48px;
    ${breakpoints("margin", "", [{ 1280: "0px 16px" }])}
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .control-next.control-arrow:before {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-right: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(45deg) !important;
    margin-right: 10px;
  }

  .carousel .control-prev.control-arrow:before {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-left: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(-45deg) !important;
    margin-left: 10px;
  }

  .carousel-status {
    display: none;
  }
`

const BannerContentContainer = styled(Box)`
margin-top: 64px;
width: 33%;
${breakpoints("margin-top", "", [
  { 1280: "58px" },
])}
${breakpoints("width", "", [
  { 1280: "45%" },
])}
${breakpoints("width", "", [
  { 940: "50%" },
])}
`

const BannerBackgroundContainer = styled(Box)`
padding: 78px 138px;
height: 720px;
text-align: left;
${breakpoints("padding", "", [
  { 1280: "78px 96px" },
])};
${breakpoints("height", "", [
  { 1280: "720px" },
])};
`

const StyledLink = styled(Link)`
width: 100%;
`

const BannerContainer = ({ children, backgroundImageSrc, alignment, customBoxStyles, clickable, location }: {
  children: ReactNode, backgroundImageSrc: string, alignment: 'left' | 'right', customBoxStyles?: React.CSSProperties, clickable?: boolean, location?: string
}) => {
  const getAlignment = (alignment) => alignment === 'left' ? 'flex-start' : 'flex-end';

  return (

    clickable ?
      (<StyledLink href={location}>
        <BannerBackgroundContainer
          backgroundImage={backgroundImageSrc}
          flexDirection='column'
          flexJustify='center'
          flexAlignment={getAlignment(alignment)}
          style={{ ...customBoxStyles, cursor: clickable ? 'pointer' : 'inherit' }}>

          <BannerContentContainer>
            {children}
          </BannerContentContainer>
        </BannerBackgroundContainer >
      </StyledLink>)
      :
      (<BannerBackgroundContainer
        backgroundImage={backgroundImageSrc}
        flexDirection='column'
        flexJustify='center'
        flexAlignment={getAlignment(alignment)}
        style={{ ...customBoxStyles, cursor: clickable ? 'pointer' : 'inherit' }}>
        <BannerContentContainer>
          {children}
        </BannerContentContainer>
      </BannerBackgroundContainer>
      )
  )
}

const ProductTitle = styled(Heading)`
&&& {
  font-size: 24px;
  lineHeight: 32px;
  ${breakpoints("font-size", "", [
  { 1280: "21px" },
])};
}
`

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: 36px;
  line-height: 48px;
  margin: 12px 0px;
  ${breakpoints("font-size", "", [
  { 1280: "32px" },
])};
  ${breakpoints("line-height", "", [
  { 1280: "44px" },
])};
}
`

const BannerContentText = styled(Text)`
&&& {
  ${breakpoints("font-size", "", [
  { 1280: "19px" },
])};
  ${breakpoints("line-height", "", [
  { 1280: "34px" },
])};
}
`

const PrimaryCTAButton = styled(PrimaryButton)`
margin: 48px 0 0 0;
${breakpoints("margin", "", [
  { 1280: "34px 0 0 0" },
])};
color: ${theme.colors.green.primary};
`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 48px 0 0 0;
${breakpoints("margin", "", [
  { 1280: "34px 0 0 0" },
])};
`

const ImOnCallBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iocBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm OnCall</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>Remote Work from Anywhere, Anytime</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm OnCall is a cost-effective, secure online help desk software which allows organizations to offer remote support over the Internet to their customers.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <span onClick={() => window.location.assign(LINKS.IOC_BUY_NOW)}>
          <PrimaryCTAButton>Buy Now
          </PrimaryCTAButton>
        </span>
      </Box>
      <span onClick={() => window.location.assign(LINKS.IOC_TRY_IT_FREE)}>
        <SecondaryCTAButton>Try it Free</SecondaryCTAButton>
      </span>
    </Box>
  </BannerContainer>
)

export const IOCMainBannerDesktop = ({ isCarousel = true, banner }: { isCarousel?: boolean, banner?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  return (
    isCarousel ? (<Container>
      <StyledCarousel stopOnHover={false} autoPlay interval={7000} infiniteLoop emulateTouch showThumbs={false}>
        {[<ImOnCallBanner clickable location="/imoncall-remote-help-desk/" />]}
      </StyledCarousel>
    </Container>
    )
      :
      (<Container>
        <ImOnCallBanner clickable location="/imoncall-remote-help-desk/" />
      </Container>)
  )
}
