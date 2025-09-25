import styled from "styled-components"
import { Box, Text, TextVariants, PrimaryButton, ButtonTextColors, SecondaryButton } from "../../components/core"
import { IOCAnchor, AnchorVariants } from "../../components/core/ioc-anchor";
import { breakpoints } from "../../utils/breakpoints"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { IOCContentCard } from "../../components/im-on-call/IOCContentCard"
import Collab from "../../public/assets/collaboration -1.png"
import RMC from "../../public/assets/remote-control-1.png"
import LiveChat from "../../public/assets/live-chat-1.png"
import Conference from "../../public/assets/conference-1.png"
import Browser from "../../public/assets/browser-2-1.png"
import Puzzle from "../../public/assets/puzzle-1.png"
import Tracking from "../../public/assets/tracking-1.png"
import Hierarchy from "../../public/assets/hierarchy-structure-1.png"
import { LINKS } from "../../utils/constants"

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

      <IOCPageBanner heading="Features">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">

          <a href={LINKS.IOC_BUY_NOW}>
            <PrimaryButton textColor={ButtonTextColors.Green}>
              Buy Now
            </PrimaryButton>
          </a>
          <a href={LINKS.IOC_TRY_IT_FREE}>
            <SecondaryButton>Try It Free</SecondaryButton>
          </a>
        </Box>
      </IOCPageBanner>

      <Box margin="96px 0">
        <ContentGrid>
          <IOCContentCard
            title="Shareable Licensing Model"
            description="All you will be paying is a low monthly/annual connection license fee. There is no limit on the number of agents you can set up to share the licenses as long as the simultaneous connections do not exceed the number of licenses subscribed."
            imageSrc={Collab.src} />
          <IOCContentCard
            title="Remote Control"
            description="As a support agent, nothing is more effective than temporarily taking remote control of your customers' computers to resolve their technical issues. In addition to controlling the screen you may also do remote file transfer."
            imageSrc={RMC.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/remote-control"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Live Chat"
            description="This essentially can eliminate your customer service phone lines. Your customers can submit live chat requests through a queue (clicking the Live-Chat button on your web site embedded with an URL given to you by I'm OnCall). Your agents simply pick up requests and perform real-time live chat with the customers via the Internet. Your customers may leave call-back requests if the queue is busy."
            imageSrc={LiveChat.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/live-chat"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Multi-session"
            description="Agents can chat with many customers at the same time."
            imageSrc={Conference.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/multi-session"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Post-session Survey"
            description="You can ensure customer satisfaction by sending a survey to them automatically. Customers can rate on the support service they have just received."
            imageSrc={Browser.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/post-session-survey"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Customization"
            description="A wide range of customization options including customizing your banner, agents' photos, etc. on the support session page are available in I'm OnCall."
            imageSrc={Puzzle.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/customization"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="Incident Tracking"
            description="Your agents or service representatives can view all open incidents including time stamping, priority and categories. Closed incidents are also available via the History feature."
            imageSrc={Tracking.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/incident-tracking"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
          <IOCContentCard
            title="User Hierarchy"
            description="You can classify users into Agents, Supervisors, and Adminstrators according to your company requirements."
            imageSrc={Hierarchy.src}>
            <Text variant={TextVariants.Body1}>
              <IOCAnchor href={"./features-ioc/user-hierarchy"} variant={AnchorVariants.Small}>
                Learn More
              </IOCAnchor>{" "}
            </Text>
          </IOCContentCard>
        </ContentGrid>
      </Box>
    </IOCLayout>
  )
}
