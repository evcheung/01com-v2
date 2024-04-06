import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors } from '../core'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import iit2faBanner from '../../public/assets/iit-2fa-banner-mobile.jpg'
import iitAccessBanner from '../../public/assets/iit-access-banner-mobile.jpg'
import iitVpnBanner from '../../public/assets/iit-vpn-banner-mobile.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactNode } from 'react'

const Container = styled(Box)`
width: 100vw;
`


const BannerContentContainer = styled(Box)`
width: 100%;
`

const BannerContainer = ({ children, backgroundImageSrc, customBoxStyles }: {
  children: ReactNode, backgroundImageSrc: string, customBoxStyles?: React.CSSProperties
}) => {

  return (
    <Box
      backgroundImage={backgroundImageSrc}
      padding="48px 24px"
      flexDirection='row'
      flexAlignment='flex-end'
      style={{ height: '480px', textAlign: 'left', ...customBoxStyles }}>
      <BannerContentContainer>
        {children}
      </BannerContentContainer>
    </Box>
  )
}


const BannerContentHeading = styled(Heading)`
&&& {
  font-size: 24px;
  line-height: 40px;
  margin: 16px 0px;
}
`


const VPNBanner = () => (
  <BannerContainer backgroundImageSrc={iitVpnBanner.src} >
    <BannerContentHeading headingColor={HeadingColors.White}>A Secure & Improved Alternative to VPN</BannerContentHeading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White}>
      Unlike VPN, I'm InTouch establishes zero-trust between the client and the corporate network. This means the corporate network will not be affected even if the client computer has been compromised.
    </Text>
  </BannerContainer>
)

const Security2FABanner = () => (
  <BannerContainer backgroundImageSrc={iit2faBanner.src} >
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Securing Accounts with Two-Factor Authentication
    </BannerContentHeading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White}>
      Two-Factor Authentication is an effective way to protect against the unlikely event of password breaches. I'm InTouch supports Google Authenticator One-Time Password (OTP).
    </Text>
  </BannerContainer >
)

const AccessBanner = () => (
  <BannerContainer backgroundImageSrc={iitAccessBanner.src} >
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Maximum Security with Controlled Access
    </BannerContentHeading>
    <Text variant={TextVariants.Body1} textColor={TextColors.White}>
      For maximum security, I'm InTouch lets you exert tight control of the access client. You can restrict remote access from devices with only certain MAC addresses.
    </Text>
  </BannerContainer >
)


export const IITContentBannersMobile = () => {
  return (
    <Container>
      <VPNBanner />
      <Security2FABanner />
      <AccessBanner />
    </Container>
  )
}
