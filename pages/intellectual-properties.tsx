import Layout, { LayoutVariants } from "../components/Layout";
import Head from "next/head";
import { Box, Text, TextColors } from "../components/core";
import Heading from "../components/core/heading";
import styled from "styled-components";
import { theme } from "../theme";
import { Anchor } from "../components/core/anchor";
import pdf from "../public/assets/pdf.svg";
import Image from "next/image";
import { breakpoints } from "../utils/breakpoints";

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;

  ${breakpoints("width", "", [{ 760: "18px 0" }])}
`;

const StyledHeading = styled(Heading)`
  font-size: 36px;
`;

const HeaderSubtextContainer = styled(Box)`
  width: 968px;
  padding: 0 48px;
  margin: 16px auto;
  ${breakpoints("width", "", [{ 1200: "100%" }])}
`;

const HeaderSubtext = () => {
  return (
    <HeaderSubtextContainer>
      <Text textColor={TextColors.White} alignment="center">
        Innovative technologies used in our Post-Quantum Cybersecurity and
        Remote Access products are protected by a portfolio of international
        patents. Established in 1992, 01 Quantum is always at the forefront of
        technology. Its latest innovation is on cybersecurity with the
        development focus on Post-Quantum Cryptography (PQC). 01's PQC
        algorithms are designed to operate on classical computer systems as we
        know them today while at the same time secure enough to safeguard
        against potential cyberattacks from quantum computers.
      </Text>
    </HeaderSubtextContainer>
  );
};

const PatentItemRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${breakpoints("flex-direction", "", [{ 760: "column" }])}
  ${breakpoints("align-items", "", [{ 760: "flex-start" }])}
`;

const PatentItem = ({ title, link }) => {
  return (
    <>
      <PatentItemRow style={{display: "flex", alignItems: "center", marginLeft: "4px", marginRight: "112px"}}>
        <Text>{title}</Text>
        <Box flexDirection="row" flexAlignment="center">
          <Box margin="0 8px 0 0">
            <Image src={pdf} alt="pdf icon"></Image>
          </Box>
          <Anchor style={{marginTop: "4px"}} href={link} target="_blank">
            View PDF
          </Anchor>
        </Box>
      </PatentItemRow>
      <HorizontalBorder />
    </>
  );
};

const PageContainer = styled(Box)`
  width: 100%;
  padding: 0 100px;
  margin: 96px 0;

  ${breakpoints("padding", "", [{ 1200: "0 32px" }])}
  ${breakpoints("padding", "", [{ 760: "0" }])}
${breakpoints("margin", "", [{ 760: "48px 0" }])}
`;

const PATENTS = [
  {
    title: "US Patent #11,669,833",
    link: "https://www.01com.com/pdf/US11669833.pdf"
  },
  {
    title: "US Patent #11,271,715",
    link: "https://www.01com.com/pdf/US11271715.pdf"
  },
  {
    title: "US Patent #6,928,479",
    link: "https://www.01com.com/pdf/US6928479.pdf"
  },
  {
    title: "US Patent #6,938,076",
    link: "https://www.01com.com/pdf/US6938076.pdf"
  },
  {
    title: "US Patent #8,234,701",
    link: "https://www.01com.com/pdf/US8234701.pdf"
  },
  {
    title: "Canadian Patent #2,309,398",
    link: "https://www.01com.com/pdf/CA2309398.pdf"
  },
  {
    title: "Japanese Patent #4,875,094",
    link: "https://www.01com.com/pdf/JP4875094.pdf"
  },
  {
    title: "Canadian Patent #2,524,039",
    link: "https://www.01com.com/pdf/cp2524039.pdf"
  }
];

export default function IntellectualProperties() {
  return (
    <Layout
      variant={LayoutVariants.Dark}
      pageTitle="Intellectual Properties"
      headerContent={<HeaderSubtext />}
    >
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta
          name="description"
          content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Head>
      <PageContainer>
        <Box margin="0 0 38px 0">
          <StyledHeading as="h2">Patents</StyledHeading>
        </Box>
        <Box>
          <HorizontalBorder />
          {PATENTS.map(patent => (
            <PatentItem title={patent.title} link={patent.link} />
          ))}
        </Box>
      </PageContainer>
    </Layout>
  );
}
