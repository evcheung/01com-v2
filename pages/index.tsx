import Layout from '../components/Layout'
import { MainBanner } from '../components/MainBanner'
import { PressCard } from '../components/PressCard'
import Head from 'next/head'
import { Box, ButtonColors, PrimaryButton } from '../components/core'
import Heading, { HeadingVariants } from '../components/core/heading'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import livechat from '../public/assets/live-chat.svg'
import { breakpoints } from '../utils/breakpoints'
import { useWindowSize } from 'usehooks-ts'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { theme } from '../theme'


const LiveChatButton = styled(Link)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`

const StyledLatestNewsContainer = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 24px;
width: 100%;
${breakpoints("grid-template-columns", "", [
  { 1180: "1fr 1fr" },
  { 760: "1fr" },
])}
@media screen and (max-width: 1180px) {
  div:last-child {
    display: none;
  }
}
@media screen and (max-width: 760px) {
  div:nth-child(2) {
    display: none;
  }
}
`

const FeaturedNewsHeading = styled(Heading)`
  &&& {
    font-size: 36px;
    ${breakpoints("font-size", "", [
  { 1180: "32px" },
])}
  }
`

const MainBannerContainer = styled(Box)`
 margin: 48px 0;
 ${breakpoints("margin", "", [
  { 760: "0" },
])}
`

const NewsContainer = styled(Box)`
margin: -28px 0px 96px 0px;

${breakpoints("margin", "", [
  { 760: "-28px 0px 48px 0px" },
])}
`

const featuredNewsItems = [
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
];


const MobileNewsCarousel = styled(Carousel)`
  width: 100%;

  .control-arrow {
    display: none;
  }

  .carousel .control-next.control-arrow:before {
    display: none;
  }

  .carousel .slide {
    text-align: left;
  }
  .carousel .control-prev.control-arrow:before {
    display: none;
  }

  .carousel-status {
    display: none;
  }
  .carousel.carousel-slider {
    overflow: visible;
  }

  .control-dots {
    bottom: -50px;
  }

  .carousel .control-dots .dot {
    background: ${theme.colors.neutral.xl};
    box-shadow: none;
  }
`


const LatestNewsContainer = ({ currentItems }) => {
  return (
    <StyledLatestNewsContainer>
      {currentItems && currentItems.map(item => <PressCard date={item.date} description={item.description} link={item.link} />)}
    </StyledLatestNewsContainer>
  );
}


const LatestNewsContainerMobile = ({ currentItems }) => {
  return (
    <MobileNewsCarousel emulateTouch>
      {currentItems && currentItems.map(item => <PressCard date={item.date} description={item.description} link={item.link} />)}
    </MobileNewsCarousel>
  );
}


export default function Home() {
  const { width } = useWindowSize()

  return (
    <Layout>
      <Head>
        <title>Post-Quantum Cybersecurity | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBannerContainer margin="48px 0px" width="100%">
        <MainBanner />
      </MainBannerContainer>

      <NewsContainer width="100%" flexDirection='column' flexAlignment='center'>
        <Box flexDirection='row' width='100%' flexJustify='space-between' flexAlignment='center' margin="0px 0px 20px 0px">
          {width > 760 ?
            <>
              <FeaturedNewsHeading variant={HeadingVariants.Heading1}>Featured News</FeaturedNewsHeading>
              <Link href="/press-releases">
                <PrimaryButton btnColor={ButtonColors.Blue}>View All</PrimaryButton>
              </Link>
            </>
            : <Box margin="12px auto -10px auto">
              <FeaturedNewsHeading variant={HeadingVariants.Heading1} style={{ textAlign: 'center' }}>Featured News</FeaturedNewsHeading>
            </Box>
          }
        </Box>

        {width > 760 ? <LatestNewsContainer currentItems={featuredNewsItems} /> : <LatestNewsContainerMobile currentItems={featuredNewsItems} />}

        {width <= 760 &&
          <Box margin="32px 0 0 0">
            <Link href="/press-releases">
              <PrimaryButton btnColor={ButtonColors.Blue}>View All</PrimaryButton>
            </Link>
          </Box>
        }
      </NewsContainer>

      <LiveChatButton href="#" target="_blank" onClick={() => { window.open('https://imoncall.01com.com/pre-sales/', 'pagename', 'resizable,height=600,width=500'); return false; }}>
        <Image src={livechat} alt="chat bubble" />
      </LiveChatButton>
    </Layout >
  )
}
