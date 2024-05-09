import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors } from '../core'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import iit2faBanner from '../../public/assets/iit-2fa-banner.jpg'
import iitAccessBanner from '../../public/assets/iit-access-banner.jpg'
import iitVpnBanner from '../../public/assets/iit-vpn-banner.jpg'
import { ReactNode } from 'react'
import { breakpoints } from '../../utils/breakpoints'

const Container = styled(Box)`
width: 100vw;
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
      padding="48px"
      flexDirection='column'
      flexJustify='center'
      flexAlignment={getAlignment(alignment)}
      style={{ height: '580px', textAlign: 'left', ...customBoxStyles }}>
      <BannerContentContainer>
        {children}
      </BannerContentContainer>
    </Box>
  )
}

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: 36px;
  line-height: 48px;
  margin: 16px 0px;
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

const VPNBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={iitVpnBanner.src}>
    <BannerContentHeading headingColor={HeadingColors.White}>A Secure & Improved Alternative to VPN</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Unlike VPN, I'm InTouch establishes zero-trust between the client and the corporate network. This means the corporate network will not be affected even if the client computer has been compromised.
    </BannerContentText>
  </BannerContainer>
)

const Security2FABanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={iit2faBanner.src}>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Securing Accounts with Two-Factor Authentication
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      Two-Factor Authentication is an effective way to protect against the unlikely event of password breaches. I'm InTouch supports Google Authenticator One-Time Password (OTP).
    </BannerContentText>
  </BannerContainer >
)

const AccessBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={iitAccessBanner.src}>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Maximum Security with Controlled Access
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      For maximum security, I'm InTouch lets you exert tight control of the access client. You can restrict remote access from devices with only certain MAC addresses.
    </BannerContentText>
  </BannerContainer >
)


export const IITContentBannersDesktop = () => {
  return (
    <Container>
      <VPNBanner />
      <Security2FABanner />
      <AccessBanner />
    </Container>
  )
}
