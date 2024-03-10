import styled from "styled-components"
import { Box, PrimaryButton, ButtonTextColors, SecondaryButton, TextVariants, TextColors, Text } from "../../../components/core"
import { breakpoints } from "../../../utils/breakpoints"
import Head from "next/head"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import Security from "../../../public/assets/shield-2.png"
import Infinity from "../../../public/assets/infinity.png"
import Puzzle from "../../../public/assets/puzzle.png"
import Outlook from "../../../public/assets/outlook.png"
import LinkArrow from "../../../public/assets/link-arrow.png"
import Link from "next/link"
import { theme } from "../../../theme"
import Image from "next/image"
import { FeatureCard } from "../../../components/im-in-touch/IITFeatureCard"
import { useWindowSize } from "usehooks-ts"

export const revalidate = 10
// export const dynamic = 'force-dynamic'


const FeaturesGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 680: '1fr' },
])}
`


const FeatureRowItemContainer = styled(Box) <{ index: number, borderSecondItem?: boolean }>`
padding: 16px 0;
border-bottom: 1px solid ${theme.colors.neutral.md};
border-top: ${props => (props.index === 0 || props.index === 1 && props.borderSecondItem) ? `1px solid ${theme.colors.neutral.md}` : 'none'};
text-align: left;
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;

${breakpoints("padding", "", [
  { 760: '12px 0' },
])}
p {
  line-height: 28px;

${breakpoints("line-height", "", [
  { 760: '22px' },
])}
}

${breakpoints("font-size", "", [
  { 1350: '18px' },
])}
`



const FeatureRowItem = ({ index, pageRoute, description, borderSecondItem }: { index: number, pageRoute?: string, description: string, borderSecondItem?: boolean }) => {
  return (
    <FeatureRowItemContainer index={index} borderSecondItem={borderSecondItem}>
      {pageRoute ?
        (
          <Link href={pageRoute}>
            <Box flexDirection="row" flexAlignment="center" flexJustify="space-between">
              <Text>
                {description}
              </Text>
              <Box margin="0 0 0 48px">
                <Image src={LinkArrow.src} alt="" width={32} height={24} />
              </Box>
            </Box>
          </Link>
        ) : (
          <Text>
            {description}
          </Text>
        )}
    </FeatureRowItemContainer>
  )
}

const SECURITY_FEATURES = [
  {
    description: 'End-to-end encryption to maintain 100% privacy'
  },
  {
    description: '2-Factor Authentication',
    pageRoute: '/imintouch-remote-pc-desktop/features/2-factor-authentication'
  },
  {
    description: 'LDAP authentication',
    pageRoute: '/imintouch-remote-pc-desktop/features/ldap-authentication'
  },
  {
    description: 'MAC address restriction',
    pageRoute: '/imintouch-remote-pc-desktop/features/mac-address-restriction'
  },
  {
    description: 'Wake up a remote computer that is powered off',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-wakeup'
  },
]
const OUTLOOK_FEATURES = [
  {
    description: 'Notify your mobile device upon receiving important emails',
    pageRoute: '/imintouch-remote-pc-desktop/features/email-notification'
  },
  {
    description: 'Access your Outlook Inbox remotely',
    pageRoute: '/imintouch-remote-pc-desktop/features/outlook-access'
  },
]
const SCALABILITY_FEATURES = [
  {
    description: 'Central users administration for 1 to unlimited number of users',
    pageRoute: '/imintouch-remote-pc-desktop/features/central-administration'
  },
  {
    description: 'Users grouping',
  },
]
const ALL_YOU_NEED_FEATURES = [
  {
    description: 'Unlimited remote access',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-control'
  },
  {
    description: 'Free mobile apps',
  },
  {
    description: 'Remote printing',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-printing'
  },
  {
    description: 'Keyboard/mouse lock',
  },
  {
    description: 'File transfer',
    pageRoute: '/imintouch-remote-pc-desktop/features/file-transfer'
  },
  {
    description: 'Blanking screen',
  },
  {
    description: 'Remote 2-way audio',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-audio'
  },
  {
    description: 'Clipboard sync',
  },
  {
    description: 'Multi-monitor support',
    pageRoute: '/imintouch-remote-pc-desktop/features/multi-monitor'
  },
  {
    description: 'Whiteboard',
  },
]

const ALL_YOU_NEED_FEATURES_MOBILE = [
  {
    description: 'Unlimited remote access',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-control'
  },
  {
    description: 'Remote printing',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-printing'
  },
  {
    description: 'File transfer',
    pageRoute: '/imintouch-remote-pc-desktop/features/file-transfer'
  },
  {
    description: 'Remote 2-way audio',
    pageRoute: '/imintouch-remote-pc-desktop/features/remote-audio'
  },
  {
    description: 'Multi-monitor support',
    pageRoute: '/imintouch-remote-pc-desktop/features/multi-monitor'
  },
  {
    description: 'Free mobile apps',
  },
  {
    description: 'Keyboard/mouse lock',
  },
  {
    description: 'Blanking screen',
  },
  {
    description: 'Clipboard sync',
  },
  {
    description: 'Whiteboard',
  },
]

export default function FeaturesHome() {
  const { width } = useWindowSize()
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="I'm InTouch Features">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>
          I'm InTouch lets you work remotely by controlling your office computer as if you are physically there. I'm InTouch combines top security with all the features you need into one simple, no jargon, and affordable subscription price.
        </Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Link href='/imintouch-remote-pc-desktop/users-guide/'>
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              User's Guide
            </PrimaryButton>
          </Link>
          <Link href='/imintouch-remote-pc-desktop/faqs/'>
            <SecondaryButton> FAQ</SecondaryButton>
          </Link>
        </Box>
      </IITPageBanner>

      <Box margin="96px 0">
        <FeaturesGrid>
          <FeatureCard title="Zero-Trust Security" imgSrc={Security.src} columns={1}>
            {SECURITY_FEATURES.map((feature, index) => <FeatureRowItem index={index} key={feature.pageRoute} description={feature.description} pageRoute={feature.pageRoute} />)}
          </FeatureCard>
          <FeatureCard title="Every Feature You Need" imgSrc={Puzzle.src} columns={2}>
            {width > 1200
              ? ALL_YOU_NEED_FEATURES.map((feature, index) => <FeatureRowItem index={index} borderSecondItem={true} key={feature.pageRoute} description={feature.description} pageRoute={feature.pageRoute} />)
              : ALL_YOU_NEED_FEATURES_MOBILE.map((feature, index) => <FeatureRowItem index={index} borderSecondItem={false} key={feature.pageRoute} description={feature.description} pageRoute={feature.pageRoute} />)
            }
          </FeatureCard>
          <FeatureCard title="Outlook Mobilization" imgSrc={Outlook.src} columns={1}>
            {OUTLOOK_FEATURES.map((feature, index) => <FeatureRowItem index={index} key={feature.pageRoute} description={feature.description} pageRoute={feature.pageRoute} />)}
          </FeatureCard>
          <FeatureCard title="Unlimited Scalability" imgSrc={Infinity.src} columns={1}>
            {SCALABILITY_FEATURES.map((feature, index) => <FeatureRowItem index={index} key={feature.pageRoute} description={feature.description} pageRoute={feature.pageRoute} />)}
          </FeatureCard>
        </FeaturesGrid>
      </Box>
    </IITLayout >
  )
}
