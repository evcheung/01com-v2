import Head from "next/head";
import styled from "styled-components";
import { Box, Text } from "../../../../components/core";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import FeatureImage from "../../../../public/assets/server-admin.jpg";
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

      <IITPageBanner heading="Manage Access Rights / Create Template" />
      <PageContentContainer>
        <Text>
          As the Administrator of the I'm InTouch Server Edition, you can control the access rights of each and every user on your <StyledLink
            href="/imintouch-remote-pc-desktop/server/"
            target="_blank"
          >I'm InTouch remote access system</StyledLink>. This includes the time and day in a week that the users can remotely access their computers.
        </Text>
        <Box margin="16px 0 0 0">
          <Text>
            You may also create user templates to quickly create bulk user accounts with the same access rights - this is particularly useful for large corporations.
          </Text>
        </Box>
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
