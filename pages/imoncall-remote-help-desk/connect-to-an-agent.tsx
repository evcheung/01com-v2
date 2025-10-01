import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import playButton from "../../public/assets/play.png";
import IOCLayout from "../../components/im-on-call/IOCLayout";
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner";
import { theme } from "../../theme";
import { breakpoints } from "../../utils/breakpoints";
import { Box, Text, TextColors, TextVariants } from "../../components/core";
import RMC from '../../public/assets/remote-control-1.png'
import LC from '../../public/assets/live-chat-1.png'
import { IOCContentCard } from "../../components/im-on-call/IOCContentCard";
import { IOCButton } from "../../components/core";

const ContentGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;   // two equal halves
  gap: 24px;
  width: 100%;
  
  ${breakpoints("grid-template-columns", "", [
    { 900: "1fr" },   // stack them on smaller screens
  ])}
`;

const FormInputWrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 660px;
  height: 64px;
  border: 1px solid ${theme.colors.neutral.md};
  border-radius: 8px;
  overflow: hidden;
  background: ${theme.colors.neutral.xs};
`;

const FormInput = styled.input`
  flex: 1;
  padding: 0 16px;
  border: none;
  outline: none;
  background: transparent;
  color: ${theme.colors.neutral.xl};
  font-weight: 300;
  font-size: 16px;

  ::placeholder {
    color: ${theme.colors.neutral.xl};
  }

  ${breakpoints("font-size", "", [{ 760: "16px" }])}
`;

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

  ${breakpoints("width", "", [{ 1000: "calc(100vw - 64px)" }])}
  ${breakpoints("width", "", [{ 760: "calc(100vw - 32px)" }])}


${breakpoints("height", "", [{ 870: "420px" }])}
${breakpoints("height", "", [{ 760: "380px" }])}
${breakpoints("margin-top", "", [{ 760: "20px" }])}

img {
    ${breakpoints("width", "", [{ 760: "240px" }])}
    ${breakpoints("height", "", [{ 760: "240px" }])}
  }
`;

const BannerSpacingContainer = styled(Box)`
  height: 370px;
  ${breakpoints("height", "", [{ 870: "340px" }])}
  ${breakpoints("height", "", [{ 760: "300px" }])}
`;

const VideoDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const youtubeThumbnail = "https://i.ytimg.com/vi_webp/tzMxRHmP0s4/0.webp";

  return (
    <BannerSpacingContainer>
      <VideoDesktopContainer backgroundImage={youtubeThumbnail}>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={"tzMxRHmP0s4"}
          onClose={() => setOpen(false)}
        />
        <PlayButton onClick={() => setOpen(true)}>
          <Image src={playButton} alt="play button" />
        </PlayButton>
      </VideoDesktopContainer>
    </BannerSpacingContainer>
  );
};

const StepsContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  padding: 96px;
  margin: 16px 0;
  display: flex;
  flex-direction: row;       
  justify-content: center;   
  align-items: center;       
  gap: 56px;   
  ${breakpoints("flex-direction", "", [
  { 900: 'column' },
])}
  ${breakpoints("align-items", "", [
  { 900: 'flex-start' },
])}              
`;

export default function HowItWorks() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Connect to an Agent">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>Enter the Session Code provided to you and click "Go {">>"}"</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <FormInputWrapper>
            <FormInput placeholder="Session code" />
            <IOCButton style={{
              width:"130px", 
              height:"48px", 
              marginRight:"8px", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"}} color="green">Go &gt;&gt;</IOCButton>
          </FormInputWrapper>
        </Box>

      </IOCPageBanner>

     <Box margin="96px 0">
        <ContentGrid>
          <IOCContentCard
            title=""
            description="With your permission, a temporary session will set up for the agent to remotely control your computer. You may terminate the session any time. Once terminated, everything regarding this support session will be erased leaving no trace to ensure security and privacy."
            imageSrc={RMC.src}>
            <Text variant={TextVariants.Body1}>
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title=""
            description="During this remote support session, you may also have real-time chats with the agent. Chat logs can be saved for future references. (Chat session will be displayed once you have typed in your session code and authorized the connection.)"
            imageSrc={LC.src}>
            <Text variant={TextVariants.Body1}>
            </Text>
          </IOCContentCard>
        </ContentGrid>
      </Box>
    </IOCLayout>
  );
}
