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
  padding: 0px 24px;
}
`

const BannerContentText = styled(Text)`
&&& {
  font-size: 18px;
  line-height: 30px;
  padding: 0px 24px;
}
`

const PrimaryCTAButton = styled(PrimaryButton)`
margin: 24px 0 0 0;
color: ${theme.colors.brand.primary};

`

const SecondaryCTAButton = styled(SecondaryButton)`
margin: 24px 0 0 0;
`

const ImInTouchBanner = () => (
  <BannerContainer backgroundImageSrc={iitBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading headingColor={HeadingColors.White}>Remote Work from Anywhere, Anytime</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer>
)
const ImInTouchGoBanner = () => (
  <BannerContainer backgroundImageSrc={iitGoBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Go</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Stay InTouch from all your devices
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Turn your Mobile Device into a Remote Control for your Computer
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer>
)

const ImInTouchGoMail = () => (
  <BannerContainer backgroundImageSrc={iitGoMailBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch Go Mail</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Mobilize Your Outlook®
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      A Revolutionary Mobile Mailbox
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer >
)

const ImInTouchPhysicalAuthBanner = () => (
  <BannerContainer backgroundImageSrc={iitPhysicalAuthBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Physical Authentication
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Ultimate Security for your I'm InTouch Remote PC Access
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer >
)


const ImInTouchProductiveBanner = () => (
  <BannerContainer backgroundImageSrc={iitProductivityBanner.src} customBoxStyles={{ backgroundPositionY: '35%' }} >
    <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>I'm InTouch</ProductTitle>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Be productive as a company work efficiently anywhere!
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Host your own I'm InTouch remote access service
    </BannerContentText>
    <Box flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><PrimaryCTAButton>Buy Now</PrimaryCTAButton></Link>
      </Box>
      <Link href='https://locator.01com.com/ecommerce/account.php' target="_blank"><SecondaryCTAButton>Try it Free</SecondaryCTAButton></Link>
    </Box>
  </BannerContainer >
)


export const IITMainBannerMobile = () => {
  return (
    <Container>
      <StyledCarousel interval={5000} autoPlay infiniteLoop emulateTouch showThumbs={false}>
        <ImInTouchBanner />
        <ImInTouchGoBanner />
        <ImInTouchGoMail />
        <ImInTouchPhysicalAuthBanner />
        <ImInTouchProductiveBanner />
      </StyledCarousel>
    </Container>
  )
}
