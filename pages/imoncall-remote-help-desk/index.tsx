import styled from "styled-components";
import { Box, ButtonColors, PrimaryButton, Text, TextVariants } from "../../components/core";
import { breakpoints } from "../../utils/breakpoints";
import { client } from "../../sanity/lib/client";
import Head from "next/head";
import IOCLayout from "../../components/im-on-call/IOCLayout";
import { IOCMainBanner } from "../../components/im-on-call/IOCMainBanner";
import Heading, { HeadingVariants } from "../../components/core/heading";
import { IOCProductCard } from "../../components/im-on-call/IOCProductCard";
import { IOCContentBanners } from "../../components/im-on-call/IOCContentBanners";
import { theme } from "../../theme";
import { AnchorVariants } from "../../components/core/anchor";
import { IOCAnchor } from "../../components/core/ioc-anchor";
import Link from "next/link";
import { imageUrlFor } from "../../utils/sanity/image-url-builder";
import { Divider } from "../../components/core/Divider";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export const revalidate = 10;
// export const dynamic = 'force-dynamic'

const InfoCardContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 24px;
  margin: 96px auto;
  ${breakpoints("grid-template-columns", "", [{ 1090: "1fr" }])}
  ${breakpoints("grid-gap", "", [{ 1090: "16px" }])}
${breakpoints("margin", "", [{ 1260: "48px auto" }])}
${breakpoints("margin", "", [{ 960: "32px auto" }])}
`;

const InfoCard = styled(Box)`
  background: ${theme.colors.neutral.xs};
  max-width: calc((100vw - (24px * 2) - (48px * 2)) / 3);
  ${breakpoints("max-width", "", [
  { 1090: "calc(100vw - (32px * 2))" }, // 32px is the padding of the container
])}
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoCardText = styled(Text)`
  font-size: 16px;
  line-height: 28px;
`;
const InfoCardLinkText = styled(InfoCardText)`
  color: ${theme.colors.green.primary};
`;
const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  `;

type ReviewsAwards = {
  _id: string;
  image: string;
  imageAltText: string;
  date: string;
  title: string;
  link: string;
};


export const getStaticProps = async () => {
  return {
    props: {
      reviewsAwards: await client.fetch<ReviewsAwards[]>(
        `*[_type == "reviews-awards"] | order(date desc)[0]`,
        {
          cache: "no-store",
          ssr: false,
        }
      ),
      newsUpdates: await client.fetch(
        `*[_type == "im-in-touch-news-updates"] | order(_updatedAt desc)[0]`,
        {
          cache: "no-store",
          ssr: false,
        }
      ),
    },
  };
};

const StyledCarousel = styled(Carousel)`
  .slider-wrapper {
    width: 72% !important;
  }

  .control-arrow {
    background: white !important;
    height: fit-content !important;
    opacity: 1 !important;
    top: 50% !important;
    transform: translateY(-50%);
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel .control-next.control-arrow:before {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-right: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(45deg) !important;
    border-bottom: none;
    border-left: none;
    margin-right: 0px;
  }

  .carousel .control-prev.control-arrow:before {
    display: inline-block !important;
    width: 8px !important;
    height: 8px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-left: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(-45deg) !important;
    border-bottom: none;
    border-right: none;
    margin-left: 0px;
  }

  .carousel-status {
    display: none;
  }
`;


const RandomizedTips = [
  <InfoCardText>
    I'm OnCall's Shareable Licenses means you can have as many technicians as you want without having to purchase one license for each technician.
  </InfoCardText>,
  <InfoCardText>
    You can personalize your I'm OnCall pages by using your company's logo.
  </InfoCardText>,
  <InfoCardText>
    There is no pre-loaded software required for a remote session.
  </InfoCardText>,
  <InfoCardText>
    You can support more than one customer at a time from the same machine.
  </InfoCardText>,
  <InfoCardText>
    I'm OnCall is a secure encrypted connection.
  </InfoCardText>,
  <InfoCardText>
    I'm OnCall can support computers behind firewalls without opening ports.
  </InfoCardText>,
  <InfoCardText>
    A customer has the ability to start a chat session or terminate the session at any time.
  </InfoCardText>,
  <InfoCardText>
    You can support Mac customers.
  </InfoCardText>,
  <InfoCardText>
    Technicians can transfer files and folders.
  </InfoCardText>,
  <InfoCardText>
    You will automatic reconnect after rebooting a customer's machine.
  </InfoCardText>,
  <InfoCardText>
    Customers can join a remote support session by directly entering the Session ID...
  </InfoCardText>
]



export default function ImOnCallHome({ reviewsAwards, newsUpdates }) {
  const [shuffledTips, setShuffledTips] = useState([]);

  useEffect(() => {
    // Shuffle the array when the component mounts
    const shuffledArray = [...RandomizedTips].sort(() => Math.random() - 0.5);
    setShuffledTips(shuffledArray);
  }, []);

  return (
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCMainBanner />

      <IOCContentBanners />
      <InfoCardContainer>
        <InfoCard>``
          <Box>
            <Box margin="0 0 16px 0">
              <Heading variant={HeadingVariants.Heading3}>
                News & Updates
              </Heading>
            </Box>
            <Divider />
            {newsUpdates.newsUpdatesItems.map((item) => (
              <>
                <Box margin="16px 0" key={item.label}>
                  <Link href={item.url} target="_self">
                    <InfoCardLinkText>{item.label}</InfoCardLinkText>
                  </Link>
                </Box>
                <Divider />
              </>
            ))}
          </Box>

          <Box margin="24px 0 0 0">
            <IOCAnchor href="/newsletters" variant={AnchorVariants.Small}>
              View All
            </IOCAnchor>
          </Box>
        </InfoCard>

        <InfoCard>
          <Box margin="0 0 16px 0" width="100%">
            <Heading variant={HeadingVariants.Heading3}>Usage Tips</Heading>
          </Box>
          {/* <Divider /> */}

          <StyledCarousel
            showIndicators={false}
            infiniteLoop
            emulateTouch
            showThumbs={false}
          >
            {shuffledTips.map((tip, index) => (
              <CarouselWrapper key={index}>
                {tip}
              </CarouselWrapper>
            ))}
          </StyledCarousel>

          {/* <Divider /> */}
          <Box margin="24px 0 0 0">
            <IOCAnchor
              href="/imoncall-remote-help-desk/features/"
              variant={AnchorVariants.Small}
            >
              Learn More
            </IOCAnchor>
          </Box>
        </InfoCard>

        <InfoCard>
          <Box>
            <Heading variant={HeadingVariants.Heading3}>
              Press Endorsements
            </Heading>
            <Box margin="16px 0">
              <img
                src={imageUrlFor(reviewsAwards.image).height(120).url()}
                alt={reviewsAwards.imageAltText}
              ></img>
            </Box>
          </Box>
          <Box margin="24px 0 0 0">
            <IOCAnchor href="/reviews-awards" variant={AnchorVariants.Small}>
              Learn More
            </IOCAnchor>
          </Box>
        </InfoCard>
      </InfoCardContainer>
    </IOCLayout>
  );
}
