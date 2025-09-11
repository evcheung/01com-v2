import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton } from '../core'
import { theme } from '../../theme'
import Link from 'next/link'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import { Carousel } from 'react-responsive-carousel'
import iitBanner from '../../public/assets/banner-iit-mobile.jpg'
import iitGoBanner from '../../public/assets/banner-iit-go-mobile.jpg'
import iitGoMailBanner from '../../public/assets/banner-iit-gomail-mobile.jpg'
import iitPhysicalAuthBanner from '../../public/assets/banner-iit-physical-auth-mobile.jpg'
import iitProductivityBanner from '../../public/assets/banner-iit-productivity-mobile.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'
import { breakpoints } from '../../utils/breakpoints'
import { LINKS } from '../../utils/constants'

const Container = styled(Box)`
width: calc(100% + 64px);
// magic number to add 32px + 32px padding at this breakpoint
margin-left: -32px;
`

const StyledCarousel = styled(Carousel)`
  .control-arrow {
    display: none
  }
  .carousel-status {
    display: none;
  }
`

const StyledBox = styled(Box)`
  padding: 52px 48px;
  ${breakpoints("padding", "", [
  { 760: "52px 48px 68px 48px" },
])}
  height: 620px;
`
const StyledLink = styled(Link)`
width: 100%;
`

const BannerContainer = ({ children, backgroundImageSrc, customBoxStyles, clickable, location }: {
  children: ReactNode, backgroundImageSrc: string, customBoxStyles?: React.CSSProperties, clickable?: boolean, location?: string
}) => {
  return (
    clickable ?
      <StyledLink href={location}>
        <StyledBox
          backgroundImage={backgroundImageSrc}
          flexDirection='column'
          flexJustify='flex-end'
          flexAlignment='center'
          style={{ ...customBoxStyles, cursor: clickable ? 'pointer' : 'inherit' }}>
          {children}
        </StyledBox>
      </StyledLink>
      :
      <StyledBox
        backgroundImage={backgroundImageSrc}
        flexDirection='column'
        flexJustify='flex-end'
        flexAlignment='center'
        style={{ ...customBoxStyles, cursor: clickable ? 'pointer' : 'inherit' }}>
        {children}
      </StyledBox>
  )
}

const ProductTitle = styled(Heading)`
&&& {
  font-size: 18px;
  line-height: 24px;
  text-align:center;
}
`

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: ${theme.fontSize.xl};
  line-height: 36px;
  margin: 8px 0px;
  padding: 0px 24px;
  text-align:center;
}
`

const BannerContentText = styled(Text)`
&&& {
  font-size: 18px;
  line-height: 30px;
  padding: 0px 24px;
  text-align:center;
}
`

const PrimaryCTAButton = styled(PrimaryButton)`
margin: 24px 0 0 0;
color: ${theme.colors.brand.primary};

`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 24px 0 0 0;
`

const ImOnCallBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer backgroundImageSrc={iitBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>Remote Work from Anywhere, Anytime</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
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
const ImOnCallGoBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer backgroundImageSrc={iitGoBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Go</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Stay InTouch from all your devices
    </BannerContentHeading>
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

const ImOnCallGoMail = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer backgroundImageSrc={iitGoMailBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch GoMail</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Mobilize Your Outlook<sup style={{ fontSize: '14px', top: '-16px' }}>®</sup>
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
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

const ImOnCallPhysicalAuthBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer backgroundImageSrc={iitPhysicalAuthBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch SecureKEY</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White} >
      Physical Authentication
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      <span style={{ whiteSpace: 'nowrap' }}>Ultimate Security for your I'm InTouch</span> Remote PC Access
    </BannerContentText>
  </BannerContainer >
)


const ImOnCallProductiveBanner = ({ clickable, location }: { clickable?: boolean, location?: string }) => (
  <BannerContainer backgroundImageSrc={iitProductivityBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} clickable={clickable} location={location}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Server Edition</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Be productive as a company work efficiently anywhere!
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Host your own I'm InTouch remote access service
    </BannerContentText>
  </BannerContainer >
)


const getBannerComponent = (banner: 'go' | 'gomail' | 'server' | 'securekey') => {
  switch (banner) {
    case 'go':
      return <ImOnCallGoBanner />
    case 'gomail':
      return <ImOnCallGoMail />
    case 'server':
      return <ImOnCallProductiveBanner />
    case 'securekey':
      return <ImOnCallPhysicalAuthBanner />
  }
}


export const IOCMainBannerMobile = ({ isCarousel = true, banner }: { isCarousel?: boolean, banner?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  return (
    isCarousel ? (
      <Container>
        <StyledCarousel stopOnHover={false} interval={7000} autoPlay infiniteLoop emulateTouch showThumbs={false}>
          <ImOnCallBanner clickable location="/imoncall-remote-help-desk/" />
          <ImOnCallGoBanner clickable location="/imoncall-remote-help-desk/go" />
          <ImOnCallGoMail clickable location="/imoncall-remote-help-desk/gomail" />
          {/* physical auth = secure key */}
          <ImOnCallPhysicalAuthBanner clickable location="/imoncall-remote-help-desk/secure-key" />
          {/* server edition */}
          <ImOnCallProductiveBanner clickable location="/imoncall-remote-help-desk/server" />
        </StyledCarousel>
      </Container>)
      :
      <Container>{getBannerComponent(banner)}</Container>
  )
}
