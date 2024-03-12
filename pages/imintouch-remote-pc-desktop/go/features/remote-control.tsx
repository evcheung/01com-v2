import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from '../../../../public/assets/iit-go-remote-control.jpg'
import FeatureImageSecond from '../../../../public/assets/iit-go-remote-control-2.jpg'
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import Image from "next/image";
import { PageContentContainer } from "../../../../components/PageContentContainer";
import Remote from "../../../../public/assets/remote-control-white.png";
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


export default function GoRemoteControl() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Remote Control" iconSrc={Remote.src} />
      <PageContentContainer>
        <Text>Remote Control allows you to use all the fully loaded desktop applications on your distant computer as if you were sitting in front of it. Traditionally fully loaded desktop applications such as word processor and spreadsheet programs are not compatible or not available to mobile devices. I'm InTouch Go makes device incompatiblility a matter of history. Your desktop computer with all your favorite software programs are now at the finger tips via a mobile device of your choice.</Text>
        <ImagesContainer>
          <StyledImage src={FeatureImage.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
          <StyledImage src={FeatureImageSecond.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
        </ImagesContainer>
      </PageContentContainer>
    </IITLayout>
  );
}
