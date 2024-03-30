import styled from "styled-components";
import { Box, Text } from "../../../components/core";
import Head from "next/head";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";
import { breakpoints } from "../../../utils/breakpoints";
import { IITMainBanner } from "../../../components/im-in-touch/IITMainBanner";
import Heading from "../../../components/core/heading";

const HeadingContainer = styled(Box)`
  width: 888px;
  margin: 84px auto 48px auto;
  max-width: 100%;
  ${breakpoints("width", "", [{ 960: "100%" }])}
  ${breakpoints("margin", "", [{ 960: "48px auto 24px auto" }])}
`;
const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 36px;
  line-height: 48px;
  padding: 0px 120px;
  margin-bottom: 24px;
  ${breakpoints("text-align", "", [{ 600: "left" }])}
  ${breakpoints("padding", "", [{ 800: "0 32px" }])}
${breakpoints("font-size", "", [{ 600: "24px" }])}
${breakpoints("line-height", "", [{ 600: "40px" }])}
`;

const ProductsCardContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 888px;
  max-width: 100%;
  grid-gap: 24px;
  margin-bottom: 96px;
  ${breakpoints("grid-template-columns", "", [{ 600: "1fr" }])}

  ${breakpoints("margin-bottom", "", [{ 960: "48px" }])}
@media screen and (max-width: 600px) {
    > div {
      align-items: flex-start;
      > p {
        margin: 24px 0;
      }
      > div {
        margin: 0;

        > img {
          width: 64px;
          height: 64px;
        }
      }
    }
    p {
      margin: 0;
    }
    ol {
      margin: -12px 0 24px -16px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default function ServerHome() {
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

      <IITMainBanner isCarousel={false} banner="server" />

      <HeadingContainer>
        <StyledHeading>
          Host your own I'm InTouch remote access service
        </StyledHeading>
        <Text>
          By installing the I'm InTouch Server Edition at your business, you are
          hosting your own{" "}
          <StyledLink target="_blank" href="/imintouch-remote-pc-desktop/">
            I'm InTouch remote access service
          </StyledLink>{" "}
          for your employees. This means your employees will be{" "}
          <StyledLink
            target="_blank"
            href="/imintouch-remote-pc-desktop/server/features"
          >
            remotely accessing
          </StyledLink>
          {" "}their office computers via your own I'm InTouch servers instead of the
          servers hosted by 01 Communique.
        </Text>
        <Box margin="24px 0">
          <Text>
            While this is equally secure as our hosted I'm InTouch remote access
            service, there is no monthly/annual subscription fees. You purchase
            the number of licenses you need one-time and you have 100% control
            in managing your users and bandwidth usage.
          </Text>
        </Box>
        <Box margin="24px 0">
          <Text>
            Although a trial version of I'm InTouch Server Edition is not
            available, its{" "}
            <StyledLink
              target="_blank"
              href="/imintouch-remote-pc-desktop/server/features"
            >
              remote access
            </StyledLink>{" "}
            functionality is identical to the hosted I'm InTouch service. Sign
            up for a free <StyledLink
              target="_blank"
              href="https://locator.01com.com/ecommerce/account.php"
            >
              I'm InTouch trial account</StyledLink> today and experience the
            convenience and benefits brought by our award winning products.
          </Text>
        </Box>
        <Box margin="24px 0">
          <Text>
            For more information or to purchase your I'm InTouch Server Edition,
            call 1-800-668-2185 or chat with our product specialists.
          </Text>
        </Box>

      </HeadingContainer>
    </IITLayout>
  );
}
