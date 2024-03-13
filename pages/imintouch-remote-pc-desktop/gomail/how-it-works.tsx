import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import One from "../../../public/assets/one-smaller.png";
import Two from "../../../public/assets/two-smaller.png";
import Three from "../../../public/assets/three-smaller.png";
import Four from "../../../public/assets/four-smaller.png";
import { Box, Text } from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { theme } from "../../../theme";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";

const StepsGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 24px;

${breakpoints("grid-template-columns", "", [
  { 1400: '1fr 1fr' },
])}
${breakpoints("grid-template-columns", "", [
  { 640: '1fr' },
])}
`

const StepCard = styled(Box)`
background: ${theme.colors.neutral.xs};
padding: 48px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

${breakpoints("align-items", "", [
  { 1000: 'center' },
])}

${breakpoints("padding", "", [
  { 1200: '32px' },
])}

p, a {

  ${breakpoints("font-size", "", [
  { 1200: '18px' },
])}
  ${breakpoints("line-height", "", [
  { 1200: '32px' },
])}
}
`

const StepImage = styled(Image)`
width: 64px;
height: 64px;
${breakpoints("width", "", [
  { 740: '48px' },
])}
${breakpoints("height", "", [
  { 740: '48px' },
])}
`

const StyledLink = styled(Link)`
text-decoration: underline;
`

export default function GoMailHowItWorks() {
  return (
    <IITLayout subSite="gomail">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="How It Works" />
      <Box margin="96px 0">
        <StepsGrid>
          <StepCard>
            <StepImage src={One.src} alt="Step 1" width={64} height={64} />
            <Box margin="16px 0 0 0">
              <Text>
                Download and install I'm InTouch GoMail on to your iPad, iPhone, iPod, or Android device. I'm InTouch GoMail is a FREE App.
              </Text>
            </Box>
          </StepCard>
          <StepCard>
            <StepImage src={Two.src} alt="Step 2" width={64} height={64} />
            <Box margin="16px 0 0 0">
              <Text >
                Make sure you have Internet connection on your mobile device (e.g. cellular data or WiFi Internet connection) and then launch I'm InTouch GoMail.
              </Text>
            </Box>
          </StepCard>
          <StepCard>
            <StepImage src={Three.src} alt="Step 3" width={64} height={64} />
            <Box margin="16px 0 0 0">
              <Text >
                Either login to your I'm InTouch account to pick your computer from the list, or quickly find your computer by its Computer Name.
                (Click <StyledLink href='/imintouch-remote-pc-desktop/how-it-works/' target="_blank">here</StyledLink> to see how to create an
                I'm InTouch account and activate your computer to become I'm InTouch-enabled.)
              </Text>
            </Box>
          </StepCard>
          <StepCard>
            <StepImage src={Four.src} alt="Step 4" width={64} height={64} />
            <Box margin="16px 0 0 0">
              <Text >
                After authentication, your Outlook is now virtually at your finger tips. (During your first connection
                I'm InTouch GoMail will prompt if you want to register the mobile device
                to <StyledLink href="/imintouch-remote-pc-desktop/gomail" target="_blank">receive notification</StyledLink> when new emails arrive.)
              </Text>
            </Box>
          </StepCard>
        </StepsGrid>
      </Box>
    </IITLayout>
  );
}
