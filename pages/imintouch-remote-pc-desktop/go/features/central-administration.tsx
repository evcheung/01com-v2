import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from '../../../../public/assets/go-central-admin.jpg'
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import Image from "next/image";
import { PageContentContainer } from "../../../../components/PageContentContainer";
import CentralAdmin from "../../../../public/assets/settings-white.png";
import { breakpoints } from "../../../../utils/breakpoints";

const StyledImage = styled(Image)`
height: 100%;
width:50%;

${breakpoints("width", "", [
  { 680: '100%' },
])}
`

export default function GoCentralAdministration() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Central Administration" iconSrc={CentralAdmin.src} />
      <PageContentContainer>
        <Text>Central Administration allows you to manage and access all your I'm InTouch remote desktop computers (hosts) from a single screen.</Text>
        <Box margin="48px 0 0 0" flexDirection="row" flexJustify="space-between">
          <StyledImage src={FeatureImage.src} alt="screen showing files from both local and remote computers" width={50} height={300} />
        </Box>
      </PageContentContainer>

    </IITLayout>
  );
}
