import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton, ButtonTextColors } from '../core'
import { theme } from '../../theme'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import { Carousel } from 'react-responsive-carousel'
import iitBanner from '../../public/assets/banner-iit.jpg'
import iitGoBanner from '../../public/assets/banner-iit-go.jpg'
import iitGoMailBanner from '../../public/assets/banner-iit-gomail.jpg'
import iitPhysicalAuthBanner from '../../public/assets/banner-iit-physical-auth.jpg'
import iitProductivityBanner from '../../public/assets/banner-iit-productivity.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'
import { breakpoints } from '../../utils/breakpoints'
import Link from 'next/link'
import { LINKS } from '../../utils/constants'

const Container = styled(Box)`
  width: 100vw;
`

const StyledCarousel = styled(Carousel)`
  .control-arrow {
    background: white !important;
    height: fit-content !important;
    padding: 14px 8px !important;
    opacity: 1 !important;
    top: 56% !important;
    transform: translateY(-50%);
    margin: 0px 48px;
    ${breakpoints("margin", "", [
  { 1280: "0px 16px" },
])}
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
    border-bottom: none;
    border-left: none;
    margin-right: 10px; // magic number with padding in container to create square
  }


  .carousel .control-prev.control-arrow:before {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-left: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(-45deg) !important;
    border-bottom: none;
    border-right: none;
    margin-left: 10px; // magic number with padding in container to create square
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
  { 1280: "640px" },
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
color: ${theme.colors.brand.primary};
`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 48px 0 0 0;
${breakpoints("margin", "", [
  { 1280: "34px 0 0 0" },
])};
`

const ImInTouchBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iitBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>Remote Work from Anywhere, Anytime</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <span onClick={() => window.location.assign(LINKS.IIT_BUY_NOW)}>
          <PrimaryCTAButton>Buy Now
          </PrimaryCTAButton>
        </span>
      </Box>
      <span onClick={() => window.location.assign(LINKS.IIT_TRY_IT_FREE)}>
        <SecondaryCTAButton>Try it Free</SecondaryCTAButton>
      </span>
    </Box>
  </BannerContainer>
)

const ImInTouchGoBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iitGoBanner.src} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Go</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>Stay InTouch from all your devices</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Turn your Mobile Device into a Remote Control for your Computer
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <span onClick={() => window.location.assign(LINKS.IIT_BUY_NOW)}>
          <PrimaryCTAButton>Buy Now</PrimaryCTAButton>
        </span>
      </Box>
      <span onClick={() => window.location.assign(LINKS.IIT_TRY_IT_FREE)}>
        <SecondaryCTAButton>Try it Free</SecondaryCTAButton>
      </span>
    </Box>
  </BannerContainer>
)

const ImInTouchGoMail = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iitGoMailBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch GoMail</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Mobilize Your Outlook<sup style={{ fontSize: '14px', top: '-16px' }}>®</sup>
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '80%' }}>
      A Revolutionary Mobile Mailbox
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <span onClick={() => window.location.assign(LINKS.IIT_BUY_NOW)}>
          <PrimaryCTAButton>Buy Now</PrimaryCTAButton>
        </span>
      </Box>
      <span onClick={() => window.location.assign(LINKS.IIT_TRY_IT_FREE)}>
        <SecondaryCTAButton>Try it Free</SecondaryCTAButton>
      </span>
    </Box>
  </BannerContainer >
)

const ImInTouchPhysicalAuthBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iitPhysicalAuthBanner.src} customBoxStyles={{ backgroundPositionY: 'top' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch SecureKey</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Physical Authentication
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '80%' }}>
      <span style={{ whiteSpace: 'nowrap' }}>Ultimate Security for your I'm InTouch</span> Remote PC Access
    </BannerContentText>
  </BannerContainer>
)

const ImInTouchProductiveBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer alignment="left" backgroundImageSrc={iitProductivityBanner.src} customBoxStyles={{ backgroundPositionY: 'top' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Server Edition</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Be productive as a company work efficiently anywhere!
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '80%' }}>
      Host your own I'm InTouch remote access service
    </BannerContentText>
  </BannerContainer>
)

const getBannerComponent = (banner: 'go' | 'gomail' | 'server' | 'securekey') => {
  switch (banner) {
    case 'go':
      return <ImInTouchGoBanner />
    case 'gomail':
      return <ImInTouchGoMail />
    case 'server':
      return <ImInTouchProductiveBanner />
    case 'securekey':
      return <ImInTouchPhysicalAuthBanner />
  }
}


export const IITMainBannerDesktop = ({ isCarousel = true, banner }: { isCarousel?: boolean, banner?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  return (
    isCarousel ? (<Container>
      <StyledCarousel stopOnHover={false} autoPlay interval={7000} infiniteLoop emulateTouch showThumbs={false}>
        <ImInTouchBanner clickable location="/imintouch-remote-pc-desktop/" />
        <ImInTouchGoBanner clickable location="/imintouch-remote-pc-desktop/go" />
        <ImInTouchGoMail clickable location="/imintouch-remote-pc-desktop/gomail" />
        {/* physical auth = secure key */}
        <ImInTouchPhysicalAuthBanner clickable location="/imintouch-remote-pc-desktop/secure-key" />
        {/* server edition */}
        <ImInTouchProductiveBanner clickable location="/imintouch-remote-pc-desktop/server" />
      </StyledCarousel>
    </Container>
    )
      :
      <Container>{getBannerComponent(banner)}</Container>
  )
}
