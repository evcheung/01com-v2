import Head from "next/head";
import styled from "styled-components";
import Remote from "../../../../public/assets/remote-control.png";
import Volume from "../../../../public/assets/volume.png";
import Settings from "../../../../public/assets/settings.png";
import Conference from "../../../../public/assets/conference.png";
import Bell from "../../../../public/assets/bell.png";
import { Box, Text } from "../../../../components/core";
import { breakpoints } from "../../../../utils/breakpoints";
import { IITPageBanner } from "../../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../../components/im-in-touch/IITLayout";
import { FeatureCard } from "../../../../components/im-in-touch/IITFeatureCard";
import { Anchor } from "../../../../components/core/anchor";


const FeaturesGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 1160: '1fr 1fr' },
])}
${breakpoints("grid-template-columns", "", [
  { 680: '1fr' },
])}
`


export default function GoFeaturesHome() {
  return (
    <IITLayout subSite="go">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Features" />
      <Box margin="96px 0">
        <FeaturesGrid>
          <FeatureCard title="Remote Control" imgSrc={Remote.src} columns={1}>
            <Text>Allows you to use all the fully loaded desktop applications on your distant computer as if you were sitting in front of it. Traditionally fully loaded desktop applications such as word processor and spreadsheet programs are not compatible or not available to mobile devices. I'm InTouch Go makes device incompatiblility a matter of history. Your desktop computer with all your favorite software programs are now at the finger tips via a mobile device of your choice.</Text>
            <Box margin="16px 0">
              <Anchor href='/imintouch-remote-pc-desktop/go/features/remote-control'>Learn More</Anchor>
            </Box>
          </FeatureCard>
          <FeatureCard title="Central Administration" imgSrc={Settings.src} columns={1}>
            <Text>Allows you to manage and access all your I'm InTouch remote desktop computers (hosts) from a single screen.</Text>
            <Box margin="16px 0">
              <Anchor href='/imintouch-remote-pc-desktop/go/features/central-administration'>Learn More</Anchor>
            </Box>
          </FeatureCard>
          <FeatureCard title="Remote Audio" imgSrc={Volume.src} columns={1}>
            <Text>Allows you to listen to music, watch video, and run programs with sound as if you were sitting in front of your host computer.</Text>
            <Box margin="16px 0">
              <Anchor href='/imintouch-remote-pc-desktop/go/features/remote-audio'>Learn More</Anchor>
            </Box>
          </FeatureCard>
          <FeatureCard title="Multi-Monitor Support" imgSrc={Conference.src} columns={1}>
            <Text>Allows your host computer to have a configuration of up to 10 monitors.</Text>
            <Box margin="16px 0">
              <Anchor href='/imintouch-remote-pc-desktop/go/features/multi-monitor'>Learn More</Anchor>
            </Box>
          </FeatureCard>
          <FeatureCard title="Remote Wake-Up" imgSrc={Bell.src} columns={1}>
            <Text>Allows you to switch ON your remote computer even if it has been powered off.</Text>
            <Box margin="16px 0">
              <Anchor href='/imintouch-remote-pc-desktop/go/features/remote-wake-up'>Learn More</Anchor>
            </Box>
          </FeatureCard>
        </FeaturesGrid>
      </Box>
    </IITLayout>
  );
}
