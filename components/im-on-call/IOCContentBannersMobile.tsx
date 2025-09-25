import styled from "styled-components";
import { Box, Text, TextVariants, TextColors } from "../core";
import Heading, { HeadingColors, HeadingVariants } from "../core/heading";
import { ReactNode } from "react";
import { breakpoints } from "../../utils/breakpoints";
import bottomGradient from "../../public/assets/bottom-gradient.png";
import iocAccessBanner from "../../public/assets/tech-support.png";
import iocLiveChatBanner from "../../public/assets/bitmap-ioc-mobile.png";
import MaskBox from "../../public/assets/Mask.png";

const Container = styled(Box)`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Mask = styled(Box)`
  width: 375px;
  height: 320px;
`;

const BannerWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 695px;
  overflow: hidden;
`;

const BackgroundImage = styled.div<{ src: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Overlay = styled.div<{ overlayImage?: string }>`
  position: absolute;
  inset: 0;
  background: ${(props) =>
    props.overlayImage
      ? `url(${props.overlayImage}) no-repeat center / cover`
      : "rgba(0,0,0,0.6)"};
  z-index: 1;
`;

const BannerContentContainer = styled(Box)`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  height: 100%;
`;

const BannerContentHeading = styled(Heading)`
&&& {
  font-size: 24px;
  line-height: 40px;
  margin: 16px 0px;
}
`

/** Single Banner */
const BannerContainer = ({
  children,
  backgroundImageSrc,
  overlayImage,
}: {
  children: ReactNode;
  backgroundImageSrc: string;
  overlayImage?: string;
}) => {
  return (
    <BannerWrapper>
      <BackgroundImage src={backgroundImageSrc} />
      <Overlay overlayImage={overlayImage} />
      <BannerContentContainer>{children}</BannerContentContainer>
    </BannerWrapper>
  );
};

const LiveChatBanner = () => (
  <BannerContainer
    backgroundImageSrc={iocLiveChatBanner.src}
    overlayImage={bottomGradient.src}
  >
    <BannerContentHeading headingColor={HeadingColors.White}>
      Instant Live-Chat Support <br /> from I'm OnCall
    </BannerContentHeading>
    <Text
      variant={TextVariants.Body1}
      textColor={TextColors.White}
      style={{marginBottom:"48px"}}
    >
      You can provide world-class Live-Chat support to your customers within
      minutes. I'm OnCall gives you private URLs for embedding into your
      website. Simply implement a Live-Chat button with the given URL on your
      website. Your customers can then request to chat with an agent easily.
      Each agent can have up to 10 simultaneous chat sessions to deal with
      volumes at peak times.
    </Text>
  </BannerContainer>
);

const TechSupportBanner = () => (
  <BannerContainer
    backgroundImageSrc={iocAccessBanner.src}
    overlayImage={bottomGradient.src}
  >
    <BannerContentHeading headingColor={HeadingColors.White}>
      Efficient Technical Support with I'm OnCall's Remote Access
    </BannerContentHeading>
    <Text
      variant={TextVariants.Body1}
      textColor={TextColors.White}
      style={{marginBottom:"48px"}}
    >
      I'm OnCall lets you setup a temporary connection to your customer's
      computer without any pre-installed software. You can quickly and
      efficiently resolve your customers' technical and IT support issues by
      remotely controlling their computers. Plus, your agents can login from
      anywhere in the world to support your customers, saving your time and
      travelling cost.
    </Text>
  </BannerContainer>
);

export const IOCContentBannersMobile = () => {
  return (
    <Container>
      <LiveChatBanner />
      <TechSupportBanner />
    </Container>
  );
};
