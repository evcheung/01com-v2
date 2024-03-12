import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from '../../../../public/assets/go-remote-audio.jpg'
import FeatureImageSecond from '../../../../public/assets/go-remote-audio-2.jpg'
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import Image from "next/image";
import { PageContentContainer } from "../../../../components/PageContentContainer";
import Volume from "../../../../public/assets/volume-white.png";
import { breakpoints } from "../../../../utils/breakpoints";

const StyledImage = styled(Image)`
width:100%;
height: auto;
`

const ImagesContainer = styled(Box)`
margin: 48px 0 0 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 24px;
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}
${breakpoints("gap", "", [
  { 600: '32px' },
])}
`

export default function GoRemoteAudio() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Remote Control" iconSrc={Volume.src} />
      <PageContentContainer>
        <Text>Remote Audio allows you to listen to music, watch video, and run programs with sound as if you were sitting in front of your host computer.</Text>
        <ImagesContainer>
          <StyledImage src={FeatureImage.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
          <StyledImage src={FeatureImageSecond.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
        </ImagesContainer>
      </PageContentContainer>
    </IITLayout>
  );
}
