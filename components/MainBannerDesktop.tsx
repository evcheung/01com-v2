import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton } from './core'
import { theme } from '../theme'
import Heading, { HeadingColors, HeadingVariants } from './core/heading'
import { Carousel } from 'react-responsive-carousel'
import securityBanner from '../public/assets/banner-security.jpg'
import emailBanner from '../public/assets/banner-email.jpg'
import remoteWorkBanner from '../public/assets/banner-remote.jpg'
import onCallBanner from '../public/assets/banner-network.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'
import { breakpoints } from '../utils/breakpoints'
import Link from 'next/link'
import { LINKS } from '../utils/constants'

const Container = styled(Box)`
width: 100%;
${breakpoints("width", "", [
  { 1280: "calc(100% + 64px)" },
  // magic number to add 32px + 32px padding at this breakpoint
])}
${breakpoints("margin-left", "", [
  { 1280: "-32px" },
])}
`

const StyledCarousel = styled(Carousel)`
  .control-arrow {
    background: white !important;
    height: fit-content !important;
    padding: 14px 8px !important;
    opacity: 1 !important;
    top: 50% !important;
    transform: translateY(-50%);
    margin: 0px 16px;
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
width: 37%;
${breakpoints("width", "", [
  { 1280: "50%" },
])}
`

const BannerContainer = ({ children, backgroundImageSrc, alignment, customBoxStyles }: {
  children: ReactNode, backgroundImageSrc: string, alignment: 'left' | 'right', customBoxStyles?: React.CSSProperties
}) => {
  const getAlignment = (alignment) => alignment === 'left' ? 'flex-start' : 'flex-end';

  return (
    <Box
      backgroundImage={backgroundImageSrc}
      padding="78px 96px"
      flexDirection='column'
      flexJustify='center'
      flexAlignment={getAlignment(alignment)}
      style={{ height: '672px', textAlign: 'left', ...customBoxStyles }}>
      <BannerContentContainer>
        {children}
      </BannerContentContainer>
    </Box>
  )
}

const ProductTitle = styled(Heading)`
&&& {
  font-size: 24px;
  lineHeight: 32px;
  ${breakpoints("font-size", "", [
  { 1280: "21px" },
])}
}
`

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: 36px;
  line-height: 48px;
  margin: 12px 0px;
  ${breakpoints("font-size", "", [
  { 1280: "32px" },
])}
  ${breakpoints("line-height", "", [
  { 1280: "44px" },
])}
}
`

const BannerContentText = styled(Text)`
&&& {
  ${breakpoints("font-size", "", [
  { 1280: "19px" },
])}
  ${breakpoints("line-height", "", [
  { 1280: "34px" },
])}
}
`

const PrimaryCTAButton = styled(PrimaryButton)`

margin: 48px 0 0 0;
${breakpoints("margin", "", [
  { 1280: "34px 0 0 0" },
])}

`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 48px 0 0 0;
${breakpoints("margin", "", [
  { 1280: "34px 0 0 0" },
])}
`


const SecurityBanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={securityBanner.src}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>IronCAP™</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>No More Threats from Quantum Computers</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      IronCAP™ allows businesses of all sizes to easily transform their systems to withstand threats from Quantum Computers.
    </BannerContentText>
    <Link href='https://www.ironcap.ca/' target="_blank"><PrimaryCTAButton>Learn More</PrimaryCTAButton></Link>
  </BannerContainer>
)

const EmailBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={emailBanner.src} customBoxStyles={{ paddingRight: '20%' }}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>IronCAP X™</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Peace of Mind - Email Privacy is Ensured
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '137%' }}>
      Now you can safely send any sensitive information via email. IronCAP X™ Quantum-Safe end-to-end email encryption system ensures no adversary or authority other than your intended recipients can read your email. Even us, being the service provider will not hold the key that can decrypt your message.
    </BannerContentText>
    <Link href='https://www.ironcap.ca/ironcap-x' target="_blank"><PrimaryCTAButton>Learn More</PrimaryCTAButton></Link>
  </BannerContainer>
)

const RemoteWorkBanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={remoteWorkBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Remote Work from Anywhere, Anytime
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '80%' }}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <a href={LINKS.IIT_BUY_NOW} target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></a>
      </Box>
      <a href={LINKS.IIT_TRY_IT_FREE} target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></a>
    </Box>
  </BannerContainer >
)

const OnCallBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={onCallBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm OnCall</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Remote Support with
      a Secured Channel
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '90%' }}>
      I'm OnCall is a cost-effective, secure online help desk software which allows organizations to offer remote support over the Internet to their customers.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <a href={LINKS.IOC_BUY_NOW} target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></a>
      </Box>
      <a href={LINKS.IOC_TRY_IT_FREE} target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></a>
    </Box>
  </BannerContainer >
)


export const MainBannerDesktop = () => {
  return (
    <Container>
      <StyledCarousel interval={5000} autoPlay infiniteLoop emulateTouch showThumbs={false}>
        <SecurityBanner />
        <EmailBanner />
        <RemoteWorkBanner />
        <OnCallBanner />
      </StyledCarousel>
    </Container>
  )
}
