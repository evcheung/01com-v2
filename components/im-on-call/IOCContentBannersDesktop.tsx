import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors } from '../core'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import ioc2faBanner from '../../public/assets/tech-support.png'
import iocAccessBanner from '../../public/assets/tech-support.png'
import iocLiveChatBanner from '../../public/assets/live-chat-support.png'
import { ReactNode } from 'react'
import { breakpoints } from '../../utils/breakpoints'
import leftGradient from '../../public/assets/left-gradient.png'
import rightGradient from '../../public/assets/right-gradient.png'

const Container = styled(Box)`
width: 100vw;
`


const BannerContentContainer = styled(Box)`
margin-top: 56px;
width: 37%;
height: 576px;
${breakpoints("width", "", [
  { 1280: "50%" },
])}
`

const BannerContainer = ({ children, backgroundImageSrc, alignment, customBoxStyles, overlayImage }: {
  children: ReactNode, backgroundImageSrc: string, alignment: 'left' | 'right', customBoxStyles?: React.CSSProperties, overlayImage?: string
}) => {
  const getAlignment = (alignment) => alignment === 'left' ? 'flex-start' : 'flex-end';

  return (
    <Box
      backgroundImage={backgroundImageSrc}
      padding="48px"
      flexDirection='column'
      flexJustify='center'
      flexAlignment={getAlignment(alignment)}
      style={{
        height: '580px',
        textAlign: 'left',
        backgroundImage: overlayImage
          ? `url(${overlayImage}), url(${backgroundImageSrc})`
          : `url(${backgroundImageSrc})`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        ...customBoxStyles
      }}>
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
font-size: 17px;
  ${breakpoints("font-size", "", [
  { 1280: "19px" },
])}
  ${breakpoints("line-height", "", [
  { 1280: "34px" },
])}
}
`

const LiveChatBanner = () => (
  <BannerContainer alignment="right" backgroundImageSrc={iocLiveChatBanner.src} overlayImage={rightGradient.src}>
    <BannerContentHeading headingColor={HeadingColors.White}>Instant Live-Chat Support <br /> from I'm OnCall</BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      You can provide world-class Live-Chat support to your customers within minutes. I'm OnCall gives you private URLs for embedding into your web site. Simply implement a Live-Chat button with the given URL on your web site. Your customers can then request to chat with an agent easily. Each agent can have up to 10 simultaneous chat sessions to deal with volumes at peak times.
    </BannerContentText>
  </BannerContainer>
)

const TechSupportBanner = () => (
  <BannerContainer alignment="left" backgroundImageSrc={ioc2faBanner.src} overlayImage={leftGradient.src}>
    <BannerContentHeading variant={HeadingVariants.Heading1} headingColor={HeadingColors.White}>
      Efficient Technical Support with I'm OnCall's Remote Access
    </BannerContentHeading>
    <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
      I'm OnCall lets you setup a temporary connection to your customer's computer without any pre-installed software. You can quickly andefficiently resolve your customers' technical and IT support issues by remotely controlling their computers. Plus, your agents can login from anywhere in the world to support your customers, saving your time and travelling cost.
    </BannerContentText>
  </BannerContainer >
)


export const IOCContentBannersDesktop = () => {
  return (
    <Container>
      <LiveChatBanner />
      <TechSupportBanner />
    </Container>
  )
}
