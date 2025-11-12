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

const ProductsHeadingContainer = styled(Box)`
  width: 740px;
  margin: 84px auto 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoints("width", "", [{ 960: "100%" }])}
  ${breakpoints("margin", "", [{ 960: "48px auto 24px auto" }])}
`;

const ProductsHeading = styled(Heading)`
  text-align: center;
  font-size: 36px;
  line-height: 48px;
  ${breakpoints("font-size", "", [{ 760: "24px" }])}
  ${breakpoints("line-height", "", [{ 760: "40px" }])}
`;

const ProductsCardContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  grid-gap: 24px;
  margin-bottom: 96px;
  ${breakpoints("grid-template-columns", "", [{ 960: "repeat(2, 1fr)" }])}

  ${breakpoints("margin-bottom", "", [{ 960: "48px" }])}
`;

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
    You can temporarily add Guest Users to I'm InTouch, perfect for
    conducting online meetings and presentations.
  </InfoCardText>,

  <InfoCardText>
    You can remotely control your I'm InTouch computer using a Pocket
    PC with an Internet connection.
  </InfoCardText>,

  <InfoCardText>
    You can discreetly monitor your children's computer activities
    using I'm InTouch's Stealth Mode.
  </InfoCardText>,

  <InfoCardText>
    I'm InTouch can notify your cell phone whenever you receive an
    email on your computer.
  </InfoCardText>,

  <InfoCardText>
    You can print files from your distant computer to a local printer
    using I'm InTouch.
  </InfoCardText>,
  <InfoCardText>
    With the Remote Audio feature, you can listen to music on your
    distant PC from anywhere.
  </InfoCardText>,
  <InfoCardText>
    You can remotely view all the monitors connected to your Host PC
    using I'm InTouch's Multi Monitor feature.
  </InfoCardText>,

  <InfoCardText>
    You can stream video from a webcam on your Host PC to any Computer
    or Pocket PC.
  </InfoCardText>,

  <InfoCardText>
    You can view a list of all your computers on one screen and access
    them with a single click in I'm InTouch.
  </InfoCardText>,

  <InfoCardText>
    You can access your computer even if it is turned off with the I'm
    InTouch Wake-up feature.
  </InfoCardText>,

  <InfoCardText>
    I'm InTouch provides you with direct access to your Outlook or
    Windows Mail Emails from any wireless device.
  </InfoCardText>,

  <InfoCardText>
    You can transfer files between your computers using I'm InTouch's
    File Transfer feature.
  </InfoCardText>
]


export default function ImInTouchHome({ reviewsAwards, newsUpdates }) {
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
          <Divider />

          <Text variant={TextVariants.Body2} style={{marginTop: "16px", marginBottom: "16px"}}>
            You can temporarily add Guest Users to I'm InTouch, perfect for conducting online meetings and presentations.
          </Text>

          <Divider />

          <Box margin="24px 0 0 0">
            <IOCAnchor
              href="/imintouch-remote-pc-desktop/features/"
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
