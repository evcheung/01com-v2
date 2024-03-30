import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from "../../../../public/assets/usage-stats.png";
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import Image from "next/image";
import { PageContentContainer } from "../../../../components/PageContentContainer";
import Link from "next/link";

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: underline;
`;
export default function ServerAccessRights() {
  return (
    <IITLayout subSite="server">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Statistics" />
      <PageContentContainer>
        <Text>
          As the Administrator of the I'm InTouch Server Edition, you can
          monitor the usage statistics of all the users on your <StyledLink
            href="/imintouch-remote-pc-desktop/server/"
            target="_blank"
          >I'm InTouch remote access system
          </StyledLink>
          . This enhances your understanding of the usage habits and thus giving
          you a better picture in managing your servers and bandwidth
          efficiency.
        </Text>
        <Box
          margin="48px 0 0 0"
          flexDirection="row"
          flexJustify="space-between"
        >
          <StyledImage
            src={FeatureImage.src}
            alt="screen showing admin tools for I'm InTouch Server Edition"
            width={50}
            height={300}
          />
        </Box>
      </PageContentContainer>
    </IITLayout>
  );
}
