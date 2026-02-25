import Layout, { LayoutVariants } from "../components/Layout";
import Head from "next/head";
import { Box, Text, TextColors, TextVariants } from "../components/core";
import Heading from "../components/core/heading";
import styled from "styled-components";
import { theme } from "../theme";
import { Anchor } from "../components/core/anchor";
import pdf from "../public/assets/downloader.png";
import webinar from "../public/assets/webinar.png";
import callout from "../public/assets/callout.png";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useMemo, useState } from "react";
import playButton from "../public/assets/play-button.svg";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import { breakpoints } from "../utils/breakpoints";
import { client } from "../sanity/lib/client";
import ShortUniqueId from "short-unique-id";
import thumbnail from "../public/assets/thumbnail-andrew-cheung.png";
import { GreenBanner } from "../components/PromoBar";
import Footer from "../components/Footer";
import ironcapBtn from "../public/assets/ironcap-button.png";
import intouchBtn from "../public/assets/ironcap-intouch-button.png";
import oncallBtn from "../public/assets/ironcap-oncall-button.png";
import ironcapXBtn from "../public/assets/ironcapx-button.png";

export const revalidate = 10;

const PAGE_BG = "#010101";
const TEXT_WHITE = "#f4f8ff";
const TEXT_BLUE = "#71BFFF";

const MainBannerContainer = styled.section`
  position: relative;
  z-index: 1;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: ${PAGE_BG};

  min-height: clamp(260px, 28vw, 420px);
  padding-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: visible;
`;

const HeroCopy = styled.div`
  position: relative;
  z-index: 2;
  width: min(1120px, 90vw);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(56px, 6.6vw, 71px);
  line-height: 0.96;
  letter-spacing: 0.01em;
`;

const HeroBg = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 27%;
  transform: translateX(-50%);
  z-index: 0;

  width: 40%;
  height: auto;

  pointer-events: none;
  user-select: none;
`;

const isMp4Link = (url?: string) => !!url && /\.mp4(\?|#|$)/i.test(url);

const getYoutubeId = (url: string) => {
  const match =
    url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||
    url.match(/[?&]v=([A-Za-z0-9_-]{11})/) ||
    url.match(/\/embed\/([A-Za-z0-9_-]{11})/);

  return match?.[1] ?? "";
};


const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${TEXT_BLUE};
  width: 100%;
  margin: 12px 0px;

  ${breakpoints("margin", "", [{ 760: "18px 0px" }])}
`;

const ThickHorizontalBorder = styled(Box)`
  border-bottom: 3px solid ${TEXT_BLUE};
  width: 100%;
  margin: 12px 0px;

  ${breakpoints("margin", "", [{ 760: "18px 0px" }])}
`;

const StyledHeading = styled(Heading)`
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;

  ${breakpoints("font-size", "", [{ 900: theme.fontSize.xl }])}
  ${breakpoints("line-height", "", [{ 900: "42px" }])}
`;

const StyledContentHeading = styled(Heading)`
  color: #5b70ab;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 38px;

  ${breakpoints("font-size", "", [{ 900: theme.fontSize.xl }])}
  ${breakpoints("margin-bottom", "", [{ 760: "12px" }])}
  ${breakpoints("line-height", "", [{ 760: "24px" }])}
`;

const StyledVideoHeader = styled(Text)`
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 16px;
  font-weight: ${theme.fontWeight[700]};

  ${breakpoints("font-size", "", [{ 1200: theme.fontSize.lg }])}
`;

const BannerDesc = styled(Text)`
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const FeaturedVideoWrap = styled.section`
  position: relative;
  width: 100%;
  background: transparent;
  overflow: visible;
`;

const CALLOUT_W = 1213;
const CALLOUT_H = 322;
const THUMB_W = 338;
const THUMB_H = 163;
const PLAY_W = 54;
const PLAY_H = 54;

const CalloutFrame = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  width: ${CALLOUT_W}px;
  height: ${CALLOUT_H}px;

  background-image: url(${callout.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${CALLOUT_W}px ${CALLOUT_H}px;

  pointer-events: none;
  z-index: 0;

  @media (max-width: 1280px) {
    width: min(${CALLOUT_W}px, 92vw);
    height: auto;
    aspect-ratio: ${CALLOUT_W} / ${CALLOUT_H};
    background-size: contain;
  }
`;

const FeaturedVideoContainer = styled(Box)`
  position: relative;
  z-index: 1;

  min-height: ${CALLOUT_H}px;

  margin: 0 auto;
  padding: 52px 120px;

  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  column-gap: 32px;
  align-items: center;

  background: transparent;

  ${breakpoints("column-gap", "", [{ 1200: "20px" }])}
  ${breakpoints("padding", "", [{ 1200: "44px 40px" }])}
  ${breakpoints("grid-template-columns", "", [{ 900: "1fr" }])}
`;

const VideoSection = styled.section`
  background: ${PAGE_BG};
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 10px 0 80px;
`;

const VideoInner = styled.div`
  width: min(1920px, 92vw);
  margin: 0 auto;
`;

const ThumbWrap = styled.div`
  position: relative;
  width: ${THUMB_W}px;
  height: ${THUMB_H}px;
  border-radius: 6px;
  overflow: hidden;
`;

const ThumbBg = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const PlayButtonCenter = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  place-items: center;

  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const TableContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 0;

  ${breakpoints("grid-template-columns", "", [{ 1200: "2fr 3fr 2fr" }])}
  ${breakpoints("grid-template-columns", "", [{ 760: "1fr" }])}
  ${breakpoints("row-gap", "", [{ 760: "8px" }])}
`;

const LinkContainer = styled(Box)`
  display: flex;

  ${breakpoints("flex-direction", "", [{ 1200: "column" }])}
  ${breakpoints("align-items", "", [{ 1200: "flex-start" }])}

  ${breakpoints("flex-direction", "", [{ 760: "row" }])}
  ${breakpoints("align-items", "", [{ 760: "center" }])}
  ${breakpoints("margin-bottom", "", [{ 760: "8px" }])}
`;

const LinkItem = styled(Box)`
  display: flex;
  align-items: center;

  :first-of-type {
    margin: 0 48px 0 -10px;
  }
  :last-of-type {
    ${breakpoints("margin", "", [{ 1200: "10px 0 0 -10px" }])}
    ${breakpoints("margin", "", [{ 760: "0 48px 0 -10px" }])}
  }

  a {
    ${breakpoints("font-size", "", [{ 760: theme.fontSize.sm }])}
  }
`;

const StyledAnchor = styled(Anchor)`
  font-family: var(--font-jost), "Jost", sans-serif;
  color: #000000;
  font-weight: 300;
  font-size: 16px;
`;

const InvestorIntroText = styled(Text)`
  font-family: "Jost", sans-serif;
  font-weight: 300;
  margin-top: -40px;
  margin-bottom: 60px;
  max-width: 1920px;
  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1100px) {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

const HeroIntro = styled.p`
  margin: 64px auto -48px;
  max-width: 1400px;
  text-align: center;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
  opacity: 0.9;

  white-space: normal;
  overflow: visible;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const ContentContainer = styled(Box)`
  max-width: 1920px;
  margin: 0 auto;
`;

const Section = styled(Box)`
  margin: 0 0 96px 0;

  ${breakpoints("margin", "", [{ 900: "0 0 48px 0" }])}
`;

const WebText = styled.p`
  color: #000000;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
`;

const HeaderContent = ({ featuredVideo }: { featuredVideo: any }) => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  const isMp4 = isMp4Link(featuredVideo?.link);
  const youtubeId = !isMp4 ? getYoutubeId(featuredVideo.link) : "";
  const youtubeThumbnail = useMemo(
    () =>
      !isMp4 && youtubeId
        ? `https://i.ytimg.com/vi_webp/${youtubeId}/0.webp`
        : "",
    [isMp4, youtubeId],
  );

  const VideoBannerDesktop = () => (
    <FeaturedVideoWrap>
      <CalloutFrame />

      <FeaturedVideoContainer flexDirection="row" flexAlignment="center">
        <Box>
          <StyledVideoHeader textColor={TextColors.Blue}>
            Featured Video
          </StyledVideoHeader>
          <Box padding="0 48px 0 0" margin="16px 0">
            <StyledHeading as="h2">{featuredVideo.title}</StyledHeading>
          </Box>
          <Box padding="0 48px 0 0">
            <BannerDesc>{featuredVideo.description}</BannerDesc>
          </Box>
        </Box>

        <Box flexDirection="row" flexAlignment="center" flexJustify="flex-end">
          <ThumbWrap>
            <ThumbBg $bg={isMp4 ? thumbnail.src : youtubeThumbnail} />
            <PlayButtonCenter
              onClick={() => setOpen(true)}
              aria-label="Play video"
            >
              <Image src={playButton} alt="" width={PLAY_W} height={PLAY_H} />
            </PlayButtonCenter>
          </ThumbWrap>
        </Box>
      </FeaturedVideoContainer>
    </FeaturedVideoWrap>
  );

  const VideoBannerMobile = () => (
    <>
      <Box
        backgroundImage={isMp4 ? thumbnail.src : youtubeThumbnail}
        flexDirection="row"
        flexAlignment="center"
        flexJustify="center"
        margin="0 0 32px 0"
        style={{ height: "300px", width: "100%" }}
      >
        {isMp4 && isOpen && (
          <Box
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
            onClick={() => setOpen(false)}
          >
            <Box
              style={{ width: "min(960px, 100%)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "8px",
                }}
              >
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "#fff",
                    padding: "6px 10px",
                    cursor: "pointer",
                  }}
                  aria-label="Close video"
                >
                  Close
                </button>
              </Box>

              <video
                src={featuredVideo.link}
                controls
                autoPlay
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>
        )}

        {!isMp4 && (
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId={youtubeId}
            onClose={() => setOpen(false)}
          />
        )}

        <PlayButton onClick={() => setOpen(true)}>
          <Image src={playButton} alt="play button" />
        </PlayButton>
      </Box>

      <Box>
        <StyledVideoHeader textColor={TextColors.Blue}>
          Featured Video
        </StyledVideoHeader>
        <Box margin="16px 0">
          <StyledHeading as="h2">{featuredVideo.title}</StyledHeading>
        </Box>
        <Box>
          <Text>{featuredVideo.description}</Text>
        </Box>
      </Box>
    </>
  );

  return (
    <VideoSection>
      <VideoInner>
        {width > 900 ? <VideoBannerDesktop /> : <VideoBannerMobile />}
      </VideoInner>
    </VideoSection>
  );
};

const TableContent = ({ width, data }: { width: number; data: any[] }) => {
  const uid = new ShortUniqueId({ length: 10 });

  return (
    <>
      {width > 760 && (
        <TableContainer>
          <Text variant={TextVariants.Feat2}>Date</Text>
          <Text variant={TextVariants.Feat2}>Description</Text>
          <Text variant={TextVariants.Feat2}>Relevant Links</Text>
        </TableContainer>
      )}
      <ThickHorizontalBorder />

      {data.map((item) => (
        <div key={`row-${uid.rnd()}`}>
          <TableContainer>
            <WebText>{item.date}</WebText>
            <WebText>{item.description}</WebText>

            <LinkContainer>
              {(item.relevantLinks || []).map((link: any) => {
                const isPDF = link.linkType === "pdf";
                return (
                  <LinkItem key={`link-${uid.rnd()}`}>
                    <Box margin="0px 8px">
                      <Image
                        src={isPDF ? pdf : webinar}
                        alt={isPDF ? "pdf icon" : "video icon"}
                      />
                    </Box>
                    <StyledAnchor
                      style={{ marginTop: "4px" }}
                      href={link.url}
                      target="_blank"
                    >
                      {link.label}
                    </StyledAnchor>
                  </LinkItem>
                );
              })}
            </LinkContainer>
          </TableContainer>

          <HorizontalBorder />
        </div>
      ))}
    </>
  );
};

type InvestorRelationsPayload = {
  featuredVideo: Array<{
    _id: string;
    title: string;
    description: string;
    link: string;
    isFeatured: boolean;
  }>;
  latestPresentation: Array<{
    _id: string;
    date: string;
    description: string;
    relevantLinks: any;
    isFeatured: boolean;
  }>;
  recentEvents: Array<{
    _id: string;
    date: string;
    description: string;
    relevantLinks: any;
  }>;
  financialResults: Array<{
    _id: string;
    description: string;
    relevantLinks: any;
  }>;
};

export const getStaticProps = async () => {
  const queryVideos = `*[_type == "investor-relations-videos" && isFeatured]`;
  const queryLatestPresentation = `*[ _type == "investor-relations-latest-presentation" && isFeatured ]`;
  const queryRecentEvents = `*[ _type == "investor-relations-recent-events" ]`;
  const queryFinancial = `*[ _type == "investor-relations-financial-results" ]`;
  const query = `{ "featuredVideo": ${queryVideos}, "latestPresentation": ${queryLatestPresentation}, "recentEvents": ${queryRecentEvents}, "financialResults": ${queryFinancial} }`;

  return {
    props: {
      investorRelations: await client.fetch<InvestorRelationsPayload>(query),
    },
  };
};

export default function InvestorRelations({
  investorRelations,
}: {
  investorRelations: InvestorRelationsPayload;
}) {
  const { width } = useWindowSize();

  const sortedRecentEvents = (investorRelations.recentEvents || [])
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  const formattedSortedRecentEvents = sortedRecentEvents.map((item) => ({
    ...item,
    date: new Intl.DateTimeFormat("en-CA", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(item.date + "T00:00")),
  }));

  return (
    <Layout
      variant={LayoutVariants.Dark}
      pageTitle="Investor Relations"
      hidePageHeader
    >
      <Head>
        <title>Investor Relations | 01com.com</title>
        <meta
          name="description"
          content="01 Quantum investor relations information."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Head>

      <MainBannerContainer>
        <HeroBg
          src="/assets/page-headers.png"
          alt=""
          aria-hidden="true"
          width={1460} // use the image’s real width
          height={732} // use the image’s real height
          priority
        />

        <HeroCopy>
          <div>
            <HeroTitle>Investor Relations</HeroTitle>
            <HeroIntro>
              01 Quantum's common shares are listed on the TSX Venture Exchange
              (TSX-V) under the symbol 'ONE' and quoted on the OTCQB market
              under the symbol 'OONEF'.
            </HeroIntro>
          </div>
        </HeroCopy>
      </MainBannerContainer>

      <HeaderContent featuredVideo={investorRelations.featuredVideo?.[0]} />

      <ContentContainer>
        <Section>
          <StyledContentHeading as="h2" style={{ marginTop: "60px" }}>
            Latest Presentation
          </StyledContentHeading>
          <TableContent
            width={width}
            data={investorRelations.latestPresentation || []}
          />
        </Section>

        <Section>
          <StyledContentHeading as="h2">Recent Events</StyledContentHeading>
          <TableContent
            width={width}
            data={formattedSortedRecentEvents || []}
          />
        </Section>

        <Section>
          <StyledContentHeading as="h2">
            Information Request
          </StyledContentHeading>
          <WebText>
            For more information about 01 Quantum contact us at +1 905 795-2888
            or +1 800 668-2185 (US/Canada), or email{" "}
            <StyledLink
              target="_blank"
              href="mailto:investorrelations@01com.com"
            >
              investorrelations@01com.com
            </StyledLink>{" "}
            with any comments or suggestions.
          </WebText>
        </Section>

        <Section>
          <StyledContentHeading as="h2">Stock Quote</StyledContentHeading>
          <WebText>
            Click{" "}
            <StyledLink
              href="https://money.tmx.com/en/quote/ONE"
              target="_blank"
              style={{
                color: TEXT_BLUE,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontWeight: 500,
              }}
            >
              here
            </StyledLink>{" "}
            to obtain the latest stock quote.
          </WebText>
        </Section>

        <Section>
          <StyledContentHeading as="h2">Financial Results</StyledContentHeading>
          <HorizontalBorder />

          <TableContainer>
            <Text>{investorRelations.financialResults?.[0]?.description}</Text>
            <Box></Box>
            <LinkContainer>
              <LinkItem>
                <Box margin="0px 8px">
                  <Image src={pdf} alt="pdf icon" />
                </Box>
                <StyledAnchor
                  style={{ marginTop: "4px" }}
                  href={
                    investorRelations.financialResults?.[0]?.relevantLinks?.[0]
                      ?.url
                  }
                  target="_blank"
                >
                  {
                    investorRelations.financialResults?.[0]?.relevantLinks?.[0]
                      ?.label
                  }
                </StyledAnchor>
              </LinkItem>
            </LinkContainer>
          </TableContainer>

          <HorizontalBorder />
        </Section>

        <Text style={{ marginBottom: "60px" }}>
          For further information on the company&apos;s financial results,
          please visit{" "}
          <StyledLink href="https://www.sedar.com" target="_blank">
            www.sedar.com
          </StyledLink>
          .
        </Text>

        <GreenBanner
          text="Step In To The Future, Buy Now"
          buttons={[
            {
              label: "IronCAP",
              href: "https://www.ironcap.ca/",
              img: ironcapBtn,
              width: 125,
              height: 65,
            },
            {
              label: "IronCAP X",
              href: "https://www.ironcap.ca/ironcap-x/",
              img: ironcapXBtn,
              width: 141,
              height: 65,
            },
            {
              label: "IronCAP InTouch",
              href: "/products/ironcap-intouch",
              img: intouchBtn,
              width: 197,
              height: 65,
            },
            {
              label: "IronCAP OnCall",
              href: "/products/ironcap-oncall",
              img: oncallBtn,
              width: 189,
              height: 65,
            },
          ]}
        />
        <Footer />
      </ContentContainer>
    </Layout>
  );
}
