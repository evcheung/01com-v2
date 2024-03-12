import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from '../../../../public/assets/go-monitor.jpg'
import FeatureImageSecond from '../../../../public/assets/go-monitor-2.jpg'
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import Image from "next/image";
import { PageContentContainer } from "../../../../components/PageContentContainer";
import Conference from "../../../../public/assets/conference-white.png";
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

export default function GoMultiMonitor() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Remote Control" iconSrc={Conference.src} />
      <PageContentContainer>
        <Text>Multi-Monitor Support allows your host computer to have a configuration of up to 10 monitors.</Text>
        <ImagesContainer>
          <StyledImage src={FeatureImage.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
          <StyledImage src={FeatureImageSecond.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
        </ImagesContainer>
      </PageContentContainer>
    </IITLayout>
  );
}
