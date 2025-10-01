import styled from "styled-components";
import { Box, Text, TextVariants, TextColors, IOCButton } from "../../components/core";
import Head from "next/head";
import IOCLayout from "../../components/im-on-call/IOCLayout";
import { theme } from "../../theme";
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner";
import { PageContentContainer } from "../../components/PageContentContainer";
import Image from "next/image";
import discount from "../../public/assets/ioc-discount.png";
import { breakpoints } from "../../utils/breakpoints";

const ContactContainer = styled(Box)` 
  background-color:${theme.colors.neutral.xs}; 
  padding: 48px; 
  margin-top: 48px;
`

const FormInput = styled.input`
  border: 1px solid ${theme.colors.neutral.md};
  background: ${theme.colors.neutral.xs};
  width: 100%;
  padding: 12px 16px;
  color: ${theme.colors.neutral.lg};
  font-weight: 300;
  font-size: 16px;
  ${breakpoints("font-size", "", [{ 760: "16px" }])}
`

export default function PricingComparison() {
  return (
    <IOCLayout>
      <Head>
        <title>
          Remote Desktop Connection & Control Software | 01com.com
        </title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IOCPageBanner heading="Tell a Friend"> 
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>
          Spread the word to your friends and family about this great remote
          support tool. You can quickly entice them for a free and no obligation
          30-day trial. As a token of our appreciation, we will send you a
          Promotional Code to take a 20% off your I'm OnCall subscription fee.
        </Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Image
            src={discount.src}
            alt="IOC Discount"
            width={291.27}
            height={144}
          />
        </Box>
      </IOCPageBanner>
      <PageContentContainer>
        <ContactContainer>
          <Text variant={TextVariants.Feat2} style={{fontWeight:600}}>Email address(es) to receive this invitation:</Text>
          <Text variant={TextVariants.Feat2} style={{fontWeight:300}}>Email address(es) to receive this invitation: (up to 10 addresses by separating them with semicolons ';')</Text>
          <FormInput />

          <Box style={{display:"flex", gap:"24px", marginTop:"24px"}}>
            <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Text variant={TextVariants.Feat2} style={{ fontWeight: 600 }}>Your name:</Text>
              <FormInput />
            </Box>

            <Box style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Text variant={TextVariants.Feat2} style={{ fontWeight: 600 }}>Your email address:</Text>
              <FormInput />
            </Box>
          </Box>

          <Box style={{ flex: 1, display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <IOCButton btnWidth="130px" btnHeight="50px" style={{justifyContent:"center"}}>Send</IOCButton>
          </Box>
        </ContactContainer>

        <Box>
          <Text variant={TextVariants.Body2} style={{marginTop:"24px"}}>
            Note: Your email address must be valid in order to receive the 20%
            off Promotional Code.
          </Text>
        </Box>
      </PageContentContainer>
    </IOCLayout>
  );
}
