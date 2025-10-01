import styled from "styled-components"
import { Box, Text, TextVariants, PrimaryButton, ButtonTextColors, SecondaryButton } from "../../components/core"
import { IOCAnchor, AnchorVariants } from "../../components/core/ioc-anchor";
import { breakpoints } from "../../utils/breakpoints"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { IOCContentCard } from "../../components/im-on-call/IOCContentCard"
import RMC from "../../public/assets/remote-control-1.png"
import LiveChat from "../../public/assets/live-chat-1.png"
import Browser from "../../public/assets/browser-2-1.png"
import Puzzle from "../../public/assets/puzzle-1.png"
import Tracking from "../../public/assets/tracking-1.png"
import { LINKS } from "../../utils/constants"
import { TextColors } from '../../components/core/text';

export const revalidate = 10
// export const dynamic = 'force-dynamic'

const ContentGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 900: '1fr 1fr' },
])}
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}
`

export default function Applications() {
  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Benefits of Help Desk Software">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>
          Companies across all industries are turning to web-based help desk software to provide safe, efficient and superior {" "}
          <span style={{ textDecoration: "underline" }}>remote support and customer service.</span>
          <br />
          <br />
          I'm OnCall helps improving your customer satisfaction ratings and competitive edges. You can expedite the time it takes to resolve a problem with our remote support technology while reducing your overall service cost.
        </Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <a href={LINKS.IOC_USER_GUIDE}>
            <PrimaryButton textColor={ButtonTextColors.Green}>
              User's Guide
            </PrimaryButton>
          </a>
          <a href={LINKS.IOC_FAQ}>
            <SecondaryButton>FAQ</SecondaryButton>
          </a>
        </Box>
      </IOCPageBanner>

      <Box margin="96px 0">
        <ContentGrid>
          <IOCContentCard
            title="Remote Control"
            description="With the customer's permission, a temporary remote control session is established with his/her computer. Any technical issue can be resolved with ease."
            imageSrc={RMC.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/remote-control"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Live Chat"
            description={"I'm OnCall gives you 3 customizable URLs for embedding into your web site. You can then easily implement a Live-Chat customer service feature on your web site within minutes. One agent can simultaneously chat with multiple customers to facilitate busy \"call\" volume. Not only that it is impossible to achieve with the traditional phone system, it can actually save cost by eliminating the need of installing numerous physical phone lines."}
            imageSrc={LiveChat.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/live-chat"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Customization"
            description="Enhance your professional image and branding with a customized banner on the support session page. It can include your company logo, slogan, agents' photos, etc."
            imageSrc={Puzzle.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/customization"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Incident Tracking"
            description="Your agents or service representatives will benefit from the incident logs. They will help your company to provide better service to your customers."
            imageSrc={Tracking.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/incident-tracking"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Customer Rating"
            description="An automatic post-session survey can be conducted to measure customer's rating on the support service they have just received."
            imageSrc={Browser.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/post-session-survey"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
        </ContentGrid>
      </Box>
    </IOCLayout>
  )
}
