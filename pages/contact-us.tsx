import Layout, { LayoutVariants } from "../components/Layout";
import Head from "next/head";
import { Box, Text, TextColors, TextVariants } from "../components/core";
import Heading, { HeadingVariants } from "../components/core/heading";
import styled from "styled-components";
import { theme } from "../theme";
import { PageContentContainer } from "../components/PageContentContainer";
import { Anchor, AnchorVariants } from "../components/core/anchor";
import { LiveChatButton } from "../components/LiveChatButton";
import { ReactNode } from "react";
import { breakpoints } from "../utils/breakpoints";
import { useWindowSize } from "usehooks-ts";

const ContactsColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  ${breakpoints("grid-template-columns", "", [{ 900: "1fr" }])}
  ${breakpoints("grid-gap", "", [{ 900: "inherit" }])}
${breakpoints("display", "", [{ 760: "flex" }])}
${breakpoints("flex-direction", "", [{ 760: "column" }])}
`;

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  padding: 32px;
  margin-top: 24px;
`;

const LiveChatButtonColumnGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 8px 0;
`;
const ContactSubText = styled(Text)`
  font-size: 12px;
  font-weight: ${theme.fontWeight[300]};
  text-align: left;
  line-height: 24px;
  width: 100%;
`;

const AddressText = styled(Text)`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight[300]};
  line-height: 28px;
`;

const ContactContainer = ({
  heading,
  children,
  id
}: {
  heading: string;
  children: ReactNode;
  id?: string;
}) => {
  return (
    <StyledContactContainer id={id}>
      <StyledHeading variant={HeadingVariants.Heading3}>
        {heading}
      </StyledHeading>
      <Box width="100%">{children}</Box>
    </StyledContactContainer>
  );
};

const HeaderSubTitle = () => (
  <Text
    textColor={TextColors.White}
    variant={TextVariants.Body1}
    alignment="center"
  >
    Contact our knowledgeable staff anytime for immediate assistance.
    <br />
    You may contact us via the following:
  </Text>
);

export default function ContactUs() {
  const { width } = useWindowSize();
  return (
    <Layout
      variant={LayoutVariants.Dark}
      pageTitle="Contact Us"
      headerContent={<HeaderSubTitle />}
    >
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta
          name="description"
          content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <ContactsColumnGrid>
          <Box>
            <ContactContainer heading="Live Chat">
              <Box margin="0px 0px 16px 0px">
                <Text variant={TextVariants.Feat1}>
                  (powered by I'm OnCall):
                </Text>
              </Box>
              <LiveChatButtonColumnGrid>
                <LiveChatButton variant="pre-sales" />
                <LiveChatButton variant="after-sales" />
              </LiveChatButtonColumnGrid>
            </ContactContainer>
            <ContactContainer heading="Office Hours">
              <Text variant={TextVariants.Feat1}>
                Monday - Friday 9am to 6pm EST
              </Text>
            </ContactContainer>
            <ContactContainer heading="Address" id="address">
              <AddressText>01 Quantum</AddressText>
              <AddressText>789 Don Mills Road, Suite #700</AddressText>
              <AddressText>Toronto, ON M3C 1T5</AddressText>
              <AddressText>Canada</AddressText>
            </ContactContainer>
          </Box>

          <Box>
            <ContactContainer heading="Phone" id="phone">
              <Box
                flexDirection="row"
                flexAlignment="center"
                flexJustify={width <= 900 ? "flex-start" : "space-between"}
              >
                <Box width={width <= 900 ? "180px" : "auto"}>
                  <ContactSubText>Sales (Toll-Free):</ContactSubText>
                  <Anchor href="tel:1-800-668-2185">1-800-668-2185</Anchor>
                </Box>
                <Box
                  style={{
                    borderLeft: `1px dotted ${theme.colors.neutral.md}`,
                    height: "46px",
                    width: width <= 900 && "60px"
                  }}
                ></Box>
                <Box
                  width={width <= 900 ? "200px" : "auto"}
                  flexDirection="column"
                >
                  <ContactSubText>Tech Support:</ContactSubText>
                  <Anchor href="tel:(905-795-8166">(905) 795-8166</Anchor>
                </Box>
              </Box>

              <Box
                flexDirection="row"
                flexAlignment="center"
                flexJustify={width <= 900 ? "flex-start" : "space-between"}
                margin="28px 0 0 0"
              >
                <Box width={width <= 900 ? "180px" : "auto"}>
                  <ContactSubText>Tel:</ContactSubText>
                  <Anchor href="tel:9057952888">(905) 795-2888</Anchor>
                </Box>
                <Box
                  style={{
                    borderLeft: `1px dotted ${theme.colors.neutral.md}`,
                    height: "46px",
                    width: width <= 900 && "60px"
                  }}
                ></Box>
                <Box
                  width={width <= 900 ? "200px" : "auto"}
                  flexDirection="column"
                >
                  <ContactSubText>Fax:</ContactSubText>
                  <Anchor href="tel:9057950101">(905) 795-0101</Anchor>
                </Box>
              </Box>
            </ContactContainer>
            <ContactContainer heading="Email" id="email">
              <Box margin="0 0 18px 0">
                <ContactSubText>General Inquiries:</ContactSubText>
                <Anchor target="_blank" href="mailto:01com@01com.com">
                  01com@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Sales & VAR Inquiries:</ContactSubText>
                <Anchor target="_blank" href="mailto:sales@01com.com">
                  sales@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Technical Support:</ContactSubText>
                <Anchor target="_blank" href="mailto:help@01com.com">
                  help@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Customer Relations:</ContactSubText>
                <Anchor target="_blank" href="mailto:customerservice@01com.com">
                  customerservice@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Investor Relations:</ContactSubText>
                <Anchor target="_blank" href="mailto:ir@01com.com">
                  ir@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Marketing:</ContactSubText>
                <Anchor target="_blank" href="mailto:marketing@01com.com">
                  marketing@01com.com
                </Anchor>
              </Box>
              <Box margin="0 0 18px 0">
                <ContactSubText>Human Resources:</ContactSubText>
                <Anchor target="_blank" href="mailto:hr@01com.com">
                  hr@01com.com
                </Anchor>
              </Box>
            </ContactContainer>
          </Box>
        </ContactsColumnGrid>
      </PageContentContainer>
    </Layout>
  );
}
