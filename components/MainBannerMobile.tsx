import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton } from './core'
import { theme } from '../theme'
import Link from 'next/link'
import Heading, { HeadingColors, HeadingVariants } from './core/heading'
import { Carousel } from 'react-responsive-carousel'
import securityBanner from '../public/assets/banner-security-mobile.jpg'
import emailBanner from '../public/assets/banner-email-mobile.jpg'
import remoteWorkBanner from '../public/assets/banner-remote-mobile.jpg'
import onCallBanner from '../public/assets/banner-network-mobile.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'
import { breakpoints } from '../utils/breakpoints'

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
  height: 670px;
`

const BannerContainer = ({ children, backgroundImageSrc, customBoxStyles }: {
  children: ReactNode, backgroundImageSrc: string, customBoxStyles?: React.CSSProperties
}) => {
  return (
    <StyledBox
      backgroundImage={backgroundImageSrc}
      flexDirection='column'
      flexJustify='flex-end'
      flexAlignment='center'
      style={{ ...customBoxStyles }}>
      {children}
    </StyledBox>
  )
}

const ProductTitle = styled(Heading)`
&&& {
  font-size: 18px;
  line-height: 24px;
}
`

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: ${theme.fontSize.xl};
  line-height: 36px;
  margin: 8px 0px;
}
`

const BannerContentText = styled(Text)`
&&& {
  font-size: 18px;
  line-height: 30px;
}
`

const PrimaryCTAButton = styled(PrimaryButton)`
margin: 24px 0 0 0;
`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 24px 0 0 0;
`


const SecurityBanner = () => (
  <BannerContainer backgroundImageSrc={securityBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>IronCAP™</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>No More Threats from Quantum Computers</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      IronCAP™ allows businesses of all sizes to easily transform their systems to withstand threats from Quantum Computers.
    </BannerContentText>
    <Link href='https://www.ironcap.ca/' target="_blank"><PrimaryCTAButton>Learn More</PrimaryCTAButton></Link>
  </BannerContainer>
)

const EmailBanner = () => (
  <BannerContainer backgroundImageSrc={emailBanner.src}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>IronCAP X™</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Peace of Mind - Email Privacy is Ensured
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Now you can safely send any sensitive information via email. IronCAP X™ Quantum-Safe end-to-end email encryption system ensures no adversary or authority other than your intended recipients can read your email. Even us, being the service provider will not hold the key that can decrypt your message.
    </BannerContentText>
    <Link href='https://www.ironcap.ca/ironcap-x' target="_blank"><PrimaryCTAButton>Learn More</PrimaryCTAButton></Link>

  </BannerContainer>
)

const RemoteWorkBanner = () => (
  <BannerContainer backgroundImageSrc={remoteWorkBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Remote Work from Anywhere, Anytime
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer >
)

const OnCallBanner = () => (
  <BannerContainer backgroundImageSrc={onCallBanner.src}>
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm OnCall</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Remote Support with
      a Secured Channel
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm OnCall is a cost-effective, secure online help desk software which allows organizations to offer remote support over the Internet to their customers.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://imoncall.01com.com/go/freeversion.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer >
)


export const MainBannerMobile = () => {
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
