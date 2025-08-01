import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box, Text, TextVariants } from '../components/core';
import Heading, { HeadingVariants } from '../components/core/heading';
import styled from 'styled-components';
import { theme } from '../theme';
import { PageContentContainer } from '../components/PageContentContainer';
import Image from 'next/image';
import andrew from '../public/assets/andrew.jpg'
import brian from '../public/assets/brian.jpg'
import william from '../public/assets/william.jpg'
import tyson from '../public/assets/tyson.jpg'
import gary from '../public/assets/gary.jpg'
import edoardo from '../public/assets/edoardo.png'
import { breakpoints } from '../utils/breakpoints';

const StyledText = styled(Text)`
  margin-bottom: 24px;
`
const StyledSubtext = styled(Text)`
font-size: ${theme.fontSize.md};
margin: 20px 0;
`

const TeamGrid = styled(Box)`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 24px;
  width: 100%;
  margin: 32px 0 96px 0;
`

const TeamCard = styled(Box)`
  padding: 96px;
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  align-items: center;
  ${breakpoints("flex-direction", "", [
  { 1060: "column" },
])}
  ${breakpoints("align-items", "", [
  { 1060: "flex-start" },
])}
  ${breakpoints("padding", "", [
  { 1060: "48px" },
])}
`
const StyledHeading2 = styled(Heading)`
  font-size: ${theme.fontSize.xxxxl};
  font-weight: ${theme.fontWeight[400]};
  line-height: 48px;

  ${breakpoints("font-size", "", [
  { 1060: "32px" },
])}
  ${breakpoints("line-height", "", [
  { 1060: "32px" },
])}
`
const StyledHeading3 = styled(Heading)`
  font-size: ${theme.fontSize.xxxl};
  font-weight: ${theme.fontWeight[400]};
  line-height: 8px;

  ${breakpoints("line-height", "", [
  { 1060: "32px" },
])}
  ${breakpoints("font-size", "", [
  { 1060: theme.fontSize.xxl },
])}
  ${breakpoints("margin-top", "", [
  { 1060: '24px' },
])}
`

const ProfileImage = styled(Image)`
height: auto;
${breakpoints("width", "", [
  { 1060: '200px' },
])}
${breakpoints("width", "", [
  { 760: '140px' },
])}
`

export default function AboutUs() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="About Us">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>
          Technology pioneer of Post-Quantum Cybersecurity and Remote Access Software.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          Established in 1992, 01 Communique is always at the forefront of technology. Its latest innovation is on cybersecurity with the development focus on Post-Quantum Cryptography (PQC). 01's patent-protected and NIST-approved PQC algorithms are designed to operate on classical computer systems as we know them today while at the same time secure enough to safeguard against potential cyberattacks from quantum computers.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          The Company provides IronCAP™ cryptographic engine to businesses of all sizes, allowing them to easily transform their systems to withstand threats from Quantum Computers.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          The Company also provides vertical solutions that utilize its own IronCAP cryptographic engine to ensure quantum safety. IronCAP X™ is the world's first quantum-safe end-to-end email encryption solution. It is designed for ultimate email privacy as well as ensuring senders' authenticity to eliminate phishing.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          01 Communique offers its customers a suite of "Zero-Trust" secure remote access services and products. Our innovations are protected by a number of Patents in various countries. As the world's work style becomes more remote, 01 continues to provide cost effective and reliable solutions that give businesses and consumers anytime, anywhere remote access to information stored on their desktop computers.The Company also provides vertical solutions that utilize its own IronCAP cryptographic engine to ensure quantum safety. IronCAP X™ is the world's first quantum-safe end-to-end email encryption solution. It is designed for ultimate email privacy as well as ensuring senders' authenticity to eliminate phishing.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          01 Communique's common shares are listed on the TSX Venture Exchange (TSX-V) under the symbol 'ONE' and quoted on the OTCQB market under the symbol 'OONEF'.
        </StyledText>
      </PageContentContainer>

      <Box margin="-24px 0 0 0" flexDirection='column' flexAlignment='center'>
        <StyledHeading2 variant={HeadingVariants.Heading1}>The Team</StyledHeading2>
      </Box>
      <TeamGrid>
        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={andrew} alt="andrew cheung" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>Andrew Cheung</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>CEO</StyledSubtext>
            <Text variant={TextVariants.Body1}>Andrew is the founder, President and CEO of 01 Communique. He built the company from scratch in 1992 and took the company public in 2000. Andrew was a nominee of the Ernst and Young Entrepreneur-Of-The-Year award in 2001. He holds a B.Sc. (Hon) degree in Computer Science from the University of Western Ontario. Besides over 25 years experience in communications, mobile, and cyber security solutions development, he also has 12 years experience in patent prosecution. Andrew is a co-inventor of 7 patents plus several patent-pending applications.</Text>
          </Box>
        </TeamCard>

        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={brian} alt="Brian Stringer" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>Brian Stringer</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>CFO</StyledSubtext>
            <Text variant={TextVariants.Body1}>A Chartered Professional Accountant (CPA) with 25+ years experience in managing publicly listed companies, Brian has been the CFO of 01 for over 18 years. Prior to joining 01, Brian worked as the CFO of various other publicly listed companies. In addition to his extensive CFO experience, Brian also has 12 years experience in patent prosecution and patent litigation in the US and Canada.</Text>
          </Box>
        </TeamCard>

        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={william} alt="William A. Train" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>William A. Train</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>Chairman</StyledSubtext>
            <Text variant={TextVariants.Body1}>William joined the board of 01 Communique in 1995. He has over 35 years of extensive experience in the semi-conductor sector in Canada and the United States. He is the former President of Xicom Products and the CEO of Carolian Systems and has held senior positions at Dynasty Components Inc. Mr. Train holds a B.A. degree of Economics from the University of Toronto with directorships and board experience in various industries including Ozz Utility Management, Navlyns, Blumont Capital, etc.</Text>
          </Box>
        </TeamCard>

        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={gary} alt="Gary Kissack" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>Gary Kissack</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>Board Member</StyledSubtext>
            <Text variant={TextVariants.Body1}>Gary has extensive experience working as a lawyer and advisor in various industries. He practices in a number of areas of business law, including M&A, private equity, venture capital, capital markets, and corporate finance. He is a Partner in the Business Law and Indigenous Law Practice Groups at Fogler, Rubinoff LLP in Toronto. Gary regularly advises Canadian and international companies, underwriters, investors and professional advisors on a range of transactions including IPOs, private placements, etc. He has been a Board Member of 01 Communique since 2006.</Text>
          </Box>
        </TeamCard>

        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={tyson} alt="Tyson Macauley" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>Tyson Macauley</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>Board Member</StyledSubtext>
            <Text variant={TextVariants.Body1}>Mr. Macaulay, CISA, LEL CIE, brings with him over twenty five years of engineering and management experience in network, cloud and IoT security solutions. Residing in Ottawa he is currently the Chief Security Officer and Vice President of Field Engineering at Rockport Networks Inc. Prior to that, he held the positions of Chief Product Officer at InfoSec Global (ISG), CTO for BAE Systems Applied Intelligence in North America, CTO - Telecommunications at Intel and Chief Security Strategist at Fortinet. These roles all involved product strategy, corporate development (mergers, acquisitions and partnerships), business development and thought leadership.</Text>
          </Box>
        </TeamCard>

        <TeamCard>
          <Box margin="0 48px 0 0">
            <ProfileImage src={edoardo} alt="Edoardo Persichetti" />
          </Box>
          <Box>
            <StyledHeading3 variant={HeadingVariants.Heading3}>Edoardo Perischetti</StyledHeading3>
            <StyledSubtext variant={TextVariants.Body3}>Advisor</StyledSubtext>
            <Text variant={TextVariants.Body1}>Dr. Edoardo Persichetti is currently an Associate Professor in the Department of Mathematical and Statistics at Florida Atlantic University. Before moving to Florida, he was a Postdoc (Adiunkt Naukowy) in the Cryptography and Data Security Group at Warsaw University in Poland. He completed his PhD in Mathematics in late 2012 at University of Auckland, New Zealand. <br />
            <br />Dr. Persichetti’s research interests revolve around public-key cryptography and number theory, with a particular focus on code-based cryptography. He has an established track record of publications in cryptography.  He is a co-author of four distinct submissions to the first NIST Post-Quantum Standardization process. Three of the four algorithms – Classic McEliece, BIKE and DAGS reached the conclusive round while the fourth one – HQC was selected as the winner in March 2025.    Dr. Persichetti has also co-authored three submissions to NIST's “onramp” call for novel signature schemes.<br />
            <br />Dr. Persichetti Is one of the most acclaimed researchers in code-based cryptography.  He is frequently being invited to act as an advisory committee member for major cryptography conferences such as CRYPTO, EUROCRYPT and ASIACRYPT; as well as a peer-reviewer for publications like the Journal of Mathematical Cryptology and Designs, Codes and Cryptography. He was chair of the 2018 edition of the Code-Based Cryptography Workshop (CBC 2018) and co-chair of the 2019 and 2020 editions. His expertise is called upon regularly to speak at events such as the Joint Mathematics Meetings (JMM), coding and cryptography by AMS, SIAM and DIMACS, workshops on Post-Quantum Cryptography, and many others.</Text>
          </Box>
        </TeamCard>
      </TeamGrid>
    </Layout>
  )
}
