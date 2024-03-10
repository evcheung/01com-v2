import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import playButton from "../../public/assets/play.png";
import One from "../../public/assets/one.png";
import Two from "../../public/assets/two.png";
import Three from "../../public/assets/three.png";
import IITLayout from "../../components/im-in-touch/IITLayout";
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner";
import { theme } from "../../theme";
import Heading from "../../components/core/heading";
import { breakpoints } from "../../utils/breakpoints";
import { Box, Text, TextVariants } from "../../components/core";
import { Anchor, AnchorVariants } from "../../components/core/anchor";


const PlayButton = styled.button`
  background: none;
  border: none;
`;

const VideoDesktopContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 888px;
  height: 500px;
  margin-top: 32px;
  // override the X button styles inherited from the banner
  button {
    min-width: auto !important;
    padding: 0 !important;
  }

${breakpoints("width", "", [
  { 1000: 'calc(100vw - 64px)' },
])}
${breakpoints("width", "", [
  { 760: 'calc(100vw - 32px)' },
])}


${breakpoints("height", "", [
  { 870: '420px' },
])}
${breakpoints("height", "", [
  { 760: '380px' },
])}
${breakpoints("margin-top", "", [
  { 760: '20px' },
])}

img {
  ${breakpoints("width", "", [
  { 760: '240px' },
])}
  ${breakpoints("height", "", [
  { 760: '240px' },
])}
}
  `
const StyledHeading = styled(Heading)`
  font-size: 36px;
  text-align: center;
  margin-top: 156px;
`

const StepsGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 24px;
margin: 48px 0 96px 0;

${breakpoints("grid-template-columns", "", [
  { 1000: '1fr' },
])}
`
const BannerSpacingContainer = styled(Box)`
height: 370px;
${breakpoints("height", "", [
  { 870: '340px' },
])}
${breakpoints("height", "", [
  { 760: '300px' },
])}
`

const VideoDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const youtubeThumbnail = 'https://i.ytimg.com/vi_webp/tzMxRHmP0s4/0.webp'

  return (
    <BannerSpacingContainer>
      <VideoDesktopContainer
        backgroundImage={youtubeThumbnail}
      >
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={'tzMxRHmP0s4'}
          onClose={() => setOpen(false)}
        />
        <PlayButton onClick={() => setOpen(true)}>
          <Image src={playButton} alt="play button" />
        </PlayButton>
      </VideoDesktopContainer>
    </BannerSpacingContainer>
  );
}


const StepCard = styled(Box)`
background: ${theme.colors.neutral.xs};
padding: 48px;
display: flex;
flex-direction: column;

${breakpoints("align-items", "", [
  { 1000: 'center' },
])}

${breakpoints("padding", "", [
  { 1200: '32px' },
])}

p, a {

  ${breakpoints("font-size", "", [
  { 1200: '18px' },
])}
  ${breakpoints("line-height", "", [
  { 1200: '32px' },
])}
}
`

const StepImage = styled(Image)`
width: 96px;
height: 96px;
${breakpoints("width", "", [
  { 1200: '82px' },
])}
${breakpoints("height", "", [
  { 1200: '82px' },
])}
${breakpoints("width", "", [
  { 640: '64px' },
])}
${breakpoints("height", "", [
  { 640: '64px' },
])}
`

export default function HowItWorks() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="How It Works">
        <VideoDesktop />
      </IITPageBanner>

      <StyledHeading>Using I'm InTouch is as easy as 1-2-3!</StyledHeading>
      <StepsGrid>
        <StepCard>
          <StepImage src={One.src} alt="Step 1" width={96} height={96} />
          <Box margin="16px 0 0 0">
            <Text variant={TextVariants.Body1}><Anchor href="https://locator.01com.com/ecommerce/account.php" target="_blank" variant={AnchorVariants.Large}>Sign up</Anchor> for a free I'm InTouch account.</Text>
          </Box>
        </StepCard>
        <StepCard>
          <StepImage src={Two.src} alt="Step 2" width={96} height={96} />
          <Box margin="16px 0 0 0">
            <Text variant={TextVariants.Body1}>
              From the computer that you wish to remotely access, go to <Anchor href="/imintouch-remote-pc-desktop/" target="_blank" variant={AnchorVariants.Large}>www.imintouch.com</Anchor>. Login to your I'm InTouch account and download/install the I'm InTouch software onto the computer. Follow the simple on-screen instructions to create your remote access credentials.
            </Text>
          </Box>
        </StepCard>
        <StepCard>
          <StepImage src={Three.src} alt="Step 3" width={96} height={96} />
          <Box margin="16px 0 0 0">
            <Text variant={TextVariants.Body1}>
              To remotely access your I'm InTouch-ready computer, simply go to <Anchor href="/imintouch-remote-pc-desktop/" target="_blank" variant={AnchorVariants.Large}>www.imintouch.com</Anchor> and login to your I'm InTouch account. For speedy access from your mobile devices, you can install our free mobile app I'm InTouch Go or I'm InTouch GoMail (for Outlook Mobilization).
            </Text>
          </Box>
        </StepCard>
      </StepsGrid>
    </IITLayout>
  );
}
