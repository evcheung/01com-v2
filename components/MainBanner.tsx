import styled from 'styled-components'
import { PrimaryButton, Box, Text, TextVariants, TextColors, SecondaryButton } from './core'
import { theme } from '../theme'
import Link from 'next/link'
import Heading, { HeadingColors, HeadingVariants } from './core/heading'
import { Carousel } from 'react-responsive-carousel'
import securityBanner from '../public/assets/banner-security.jpg'
import emailBanner from '../public/assets/banner-email.jpg'
import remoteWorkBanner from '../public/assets/banner-remote.jpg'
import onCallBanner from '../public/assets/banner-network.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'

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
      <Box width="37%">
        {children}
      </Box>
    </Box>
  )
}

const SecurityBanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={securityBanner.src}>
    <Heading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White} style={{ fontSize: '24px', lineHeight: "32px" }}>IronCAP™</Heading>
    <Heading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White} style={{ fontSize: '36px', lineHeight: "48px" }}>No More Threats from Quantum Computers</Heading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White}>
      IronCAP™ allows businesses of all sizes to easily transform their systems to withstand threats from Quantum Computers.
    </Text>
    <Box margin="48px 0px 0px 0px">
      <PrimaryButton>Learn More</PrimaryButton>
    </Box>
  </BannerContainer>
)

const EmailBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={emailBanner.src}>
    <Heading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White} style={{ fontSize: '24px', lineHeight: "32px" }}>IronCAP X™</Heading>
    <Heading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White} style={{ fontSize: '36px', lineHeight: "48px" }}>
      Peace of Mind - Email<br />Privacy is Ensured
    </Heading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White}>
      Now you can safely send any sensitive information via email. IronCAP X™ Quantum-Safe end-to-end email encryption system ensures no adversary or authority other than your intended recipients can read your email. Even us, being the service provider will not hold the key that can decrypt your message.
    </Text>
    <Box margin="48px 0px 0px 0px">
      <PrimaryButton>Learn More</PrimaryButton>
    </Box>
  </BannerContainer>
)

const RemoteWorkBanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={remoteWorkBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }}>
    <Heading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White} style={{ fontSize: '24px', lineHeight: "32px" }}>I'm InTouch</Heading>
    <Heading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White} style={{ fontSize: '36px', lineHeight: "48px" }}>
      Remote Work from<br />Anywhere, Anytime
    </Heading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '80%' }}>
      I'm InTouch lets you work remotely by controlling your office computer as if you are physically there.
    </Text>
    <Box margin="48px 0px 0px 0px" flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <PrimaryButton>Buy Now</PrimaryButton>
      </Box>
      <SecondaryButton>Try it Free</SecondaryButton>
    </Box>
  </BannerContainer >
)

const OnCallBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={onCallBanner.src} customBoxStyles={{ backgroundPositionY: 'bottom' }}>
    <Heading variant={HeadingVariants.Heading2} headingColor={HeadingColors.White} style={{ fontSize: '24px', lineHeight: "32px" }}>I'm OnCall</Heading>
    <Heading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White} style={{ fontSize: '36px', lineHeight: "48px" }}>
      Remote Support with<br />
      a Secured Channel
    </Heading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White} style={{ width: '90%' }}>
      I'm OnCall is a cost-effective, secure online help desk software which allows organizations to offer remote support over the Internet to their customers.
    </Text>
    <Box margin="48px 0px 0px 0px" flexDirection='row'>
      <Box margin="0px 24px 0px 0px">
        <PrimaryButton>Buy Now</PrimaryButton>
      </Box>
      <SecondaryButton>Try it Free</SecondaryButton>
    </Box>
  </BannerContainer >
)


export const MainBanner = () => {
  return (
    <Box width="100%">
      <StyledCarousel infiniteLoop>
        <SecurityBanner />
        <EmailBanner />
        <RemoteWorkBanner />
        <OnCallBanner />
      </StyledCarousel>
    </Box>


  )
}
