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

const emailList = [
      ["General Inquiries:", "01com@01com.com"],
      ["Sales & VAR Inquiries:", "sales@01com.com"],
      ["Technical Support:", "help@01com.com"],
      ["Customer Relations:", "customerservice@01com.com"],
      ["Investor Relations:", "ir@01com.com"],
      ["Marketing:", "marketing@01com.com"],
      ["Human Resources:", "hr@01com.com"],
    ];

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
  grid-gap: 32px;
  justify-content: center;
  padding: 12px;
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
    {/* Row 1 */}
    <Box
      flexDirection="row"
      flexAlignment="stretch"
      style={{
        gap: width <= 900 ? "16px" : "24px",
      }}
    >
      <Box
        flexDirection="column"
        style={{
          flex: 1,
          minWidth: width <= 900 ? "180px" : 0,
          gap: "6px",
        }}
      >
        <ContactSubText>Sales (Toll-Free):</ContactSubText>
        <Anchor style={{marginTop: "0"}} href="tel:18006682185">1-800-668-2185</Anchor>
      </Box>

      <Box
        aria-hidden="true"
        style={{
          borderLeft: `1px dotted ${theme.colors.neutral.md}`,
          alignSelf: "stretch",
        }}
      />

      <Box
        flexDirection="column"
        style={{
          flex: 1,
          minWidth: width <= 900 ? "200px" : 0,
          gap: "6px",
        }}
      >
        <ContactSubText style={{marginLeft: "12px"}}>Tech Support:</ContactSubText>
        <Anchor style={{marginTop: "0", marginLeft: "12px"}} href="tel:9057958166">(905) 795-8166</Anchor>
      </Box>
    </Box>

    {/* Row 2 */}
    <Box
      flexDirection="row"
      flexAlignment="stretch"
      margin="28px 0 0 0"
      style={{
        gap: width <= 900 ? "16px" : "24px",
      }}
    >
      <Box
        flexDirection="column"
        style={{
          flex: 1,
          minWidth: width <= 900 ? "180px" : 0,
          gap: "6px",
        }}
      >
        <ContactSubText>Tel:</ContactSubText>
        <Anchor style={{marginTop: "0"}} href="tel:9057952888">(905) 795-2888</Anchor>
      </Box>

      <Box
        aria-hidden="true"
        style={{
          borderLeft: `1px dotted ${theme.colors.neutral.md}`,
          alignSelf: "stretch",
        }}
      />

      <Box
        flexDirection="column"
        style={{
          flex: 1,
          minWidth: width <= 900 ? "200px" : 0,
          gap: "6px",
        }}
      >
        <ContactSubText style={{marginLeft: "12px"}}>Fax:</ContactSubText>
        <Anchor style={{marginTop: "0", marginLeft: "12px"}} href="tel:9057950101">(905) 795-0101</Anchor>
      </Box>
    </Box>
  </ContactContainer>

  <ContactContainer heading="Email" id="email">
    {emailList.map(([label, email]) => (
      <Box
        key={email}
        flexDirection="column"
        margin="0 0 18px 0"
        style={{ gap: "6px" }}
      >
        <ContactSubText>{label}</ContactSubText>
        <Anchor style={{marginTop: "-8px"}} target="_blank" href={`mailto:${email}`}>
          {email}
        </Anchor>
      </Box>
    ))}
  </ContactContainer>
</Box>

        </ContactsColumnGrid>
      </PageContentContainer>
    </Layout>
  );
}
