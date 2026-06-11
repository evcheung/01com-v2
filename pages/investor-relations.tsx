import Layout, { LayoutVariants } from "../components/Layout";
import Head from "next/head";
import { Box, Text, TextColors, TextVariants } from "../components/core";
import Heading from "../components/core/heading";
import styled from "styled-components";
import { theme } from "../theme";
import { Anchor } from "../components/core/anchor";
import pdf from "../public/assets/pdf.svg";
import webinar from "../public/assets/webinar.svg";
import texture from "../public/assets/texture.png";
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

const isMp4Link = (url?: string) => !!url && /\.mp4(\?|#|$)/i.test(url);
const isPdfLink = (url?: string) => !!url && /\.pdf(\?|#|$)/i.test(url);

const getYoutubeId = (url: string) => {
  // supports youtu.be/<id>, youtube.com/watch?v=<id>, youtube.com/embed/<id>
  const match =
    url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/) ||
    url.match(/[?&]v=([A-Za-z0-9_-]{11})/) ||
    url.match(/\/embed\/([A-Za-z0-9_-]{11})/);

  return match?.[1] ?? "";
};

const getLinkType = (link) => {
  return String(
    link?.type ||
      link?.linkType ||
      link?.link_type ||
      link?.typeOfLink ||
      ""
  ).toLowerCase();
};

const getHref = (link) => {
  return String(
    link?.url ||
      link?.href ||
      link?.link ||
      link?.redirectUrl ||
      link?.redirect ||
      ""
  );
};

const parseDate = (value?: string) => {
  if (!value) return null;

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
};

export const revalidate = 10;
// export const dynamic = 'force-dynamic'

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;

  ${breakpoints("margin", "", [{ 760: "18px 0px" }])}
`;

const StyledHeading = styled(Heading)`
  font-size: ${theme.fontSize.xxxl};
  line-height: 50px;

  ${breakpoints("font-size", "", [{ 900: theme.fontSize.xl }])}
  ${breakpoints("line-height", "", [{ 900: "42px" }])}
`;

const StyledContentHeading = styled(Heading)`
  font-size: ${theme.fontSize.xxxl};
  line-height: 50px;
  margin-bottom: 38px;

  ${breakpoints("font-size", "", [{ 900: theme.fontSize.xl }])}
  ${breakpoints("margin-bottom", "", [{ 760: "12px" }])}
  ${breakpoints("line-height", "", [{ 760: "24px" }])}
`;

const StyledVideoHeader = styled(Text)`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight[700]};

  ${breakpoints("font-size", "", [{ 1200: theme.fontSize.lg }])}
`;

const FeaturedVideoContainer = styled(Box)`
  background-color: ${theme.colors.neutral.sm};
  margin: 0 auto;
  padding: 118px 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 96px;

  ${breakpoints("column-gap", "", [{ 1200: "24px" }])}
  ${breakpoints("padding", "", [{ 1200: "68px 56px" }])}
`;

const PlayButton = styled.button`
  background: none;
  border: none;
`;

const TableContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;

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

const ExternalLinkIcon = styled.span`
  width: 22px;
  height: 22px;
  display: inline-flex;
  color: currentColor;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
  }
`;

const RedirectIcon = () => (
  <ExternalLinkIcon aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  </ExternalLinkIcon>
);

const HeaderContent = ({ featuredVideo }) => {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();
  const videoLink = featuredVideo?.link ?? "";

  const isMp4 = isMp4Link(videoLink);
  const youtubeId = !isMp4 ? getYoutubeId(videoLink) : "";
  const youtubeThumbnail = useMemo(
    () =>
      !isMp4 && youtubeId
        ? `https://i.ytimg.com/vi_webp/${youtubeId}/0.webp`
        : "",
    [isMp4, youtubeId]
  );

  const VideoBannerDesktop = () => (
    <FeaturedVideoContainer
      backgroundImage={texture.src}
      flexDirection="row"
      flexAlignment="center"
    >
      <Box>
        <StyledVideoHeader textColor={TextColors.Blue}>
          Featured Video
        </StyledVideoHeader>
        <Box padding="0 48px 0 0" margin="16px 0">
          <StyledHeading as="h2">{featuredVideo.title}</StyledHeading>
        </Box>
        <Box padding="0 48px 0 0">
          <Text>{featuredVideo.description}</Text>
        </Box>
      </Box>

      <Box
        backgroundImage={isMp4 ? thumbnail.src : youtubeThumbnail}
        flexDirection="row"
        flexAlignment="center"
        flexJustify="center"
        style={{ height: "300px" }}
      >
        {/* MP4 modal */}
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

        {/* YouTube modal (existing) */}
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
    </FeaturedVideoContainer>
  );

  return (
    <>
      <Box padding="0px 48px">
        <Box
          width={width > 1200 ? "968px" : "100%"}
          padding="0 0 24px 0"
          margin="16px auto"
        >
          <Text textColor={TextColors.White} alignment="center">
            01 Quantum's common shares are listed on the TSX Venture Exchange
            (TSX-V) under the symbol 'ONE' and quoted on the OTCQB market
            under the symbol 'OONEF'.
          </Text>
        </Box>

        {width > 900 && featuredVideo && <VideoBannerDesktop />}
      </Box>
    </>
  );
};

const LATEST_PRESENTATION = [
  {
    date: "Spring 2023",
    description: "Spring 2023 Investor Presentation",
    relevantLinks: [
      {
        url: "https://www.01com.com/pdf/2023/Presentation.pdf",
        type: "pdf",
        label: "PDF",
      },
    ],
  },
];

const RECENT_EVENTS = [
  {
    date: "June 15, 2023",
    description: "01 reports fiscal Q2 2023",
    relevantLinks: [
      {
        url: "https://www.01com.com/pdf/2023/Q2-2023-Press-Release.pdf",
        type: "pdf",
        label: "PDF",
      },
      {
        url: "https://www.01com.com/Videos/2023/2023Q2-Presentation-recording-with-Q&A.mp4",
        type: "video",
        label: "Video",
      },
    ],
  },
  {
    date: "March 21, 2023",
    description: "01 reports fiscal Q1 2023",
    relevantLinks: [
      {
        url: "https://www.01com.com/pdf/2023/Q1-2023-Press-Release.pdf",
        type: "pdf",
        label: "PDF",
      },
    ],
  },
  {
    date: "January 19, 2023",
    description: "01 reports fiscal Q4 2022",
    relevantLinks: [
      {
        url: "https://www.01com.com/pdf/2023/Q4-2022-Press-Release.pdf",
        type: "pdf",
        label: "PDF",
      },
    ],
  },
  {
    date: "September 15, 2022",
    description: "01 reports fiscal Q3 2022",
    relevantLinks: [
      {
        url: "https://01com.com/pdf/2022/Q3-2022-Press-Release.pdf",
        type: "pdf",
        label: "PDF",
      },
    ],
  },
];

const VideoBannerMobile = ({ featuredVideo }) => {
  const [isOpen, setOpen] = useState(false);
  const videoLink = featuredVideo?.link ?? "";

  const isMp4 = isMp4Link(videoLink);
  const youtubeId = !isMp4 ? getYoutubeId(videoLink) : "";
  const youtubeThumbnail = useMemo(
    () =>
      !isMp4 && youtubeId
        ? `https://i.ytimg.com/vi_webp/${youtubeId}/0.webp`
        : "",
    [isMp4, youtubeId]
  );

  return (
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
};

// TODO: abstract border into component
const TableContent = ({ width, data }) => {
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
      <HorizontalBorder />

      {data?.map((item) => {
        return (
          <div key={`table-row-${uid.rnd()}`}>
            <TableContainer>
              <Text>{item.date}</Text>
              <Text>{item.description}</Text>

              <LinkContainer>
                {item.relevantLinks?.map((link) => {
                  const linkType = getLinkType(link);
                  const href = getHref(link);

                  if (!href) return null;

                  const isPDF = linkType === "pdf" || isPdfLink(href);
                  const isVideo = linkType === "video";
                  const isRedirect = linkType === "redirect";

                  return (
                    <LinkItem key={`link-item-${uid.rnd()}`}>
                      <Anchor
                        style={{
                          marginTop: "4px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {isRedirect ? (
                          <RedirectIcon />
                        ) : isPDF ? (
                          <Image src={pdf} alt="pdf icon" />
                        ) : isVideo ? (
                          <Image src={webinar} alt="video icon" />
                        ) : (
                          <RedirectIcon />
                        )}

                        {link.label}
                      </Anchor>
                    </LinkItem>
                  );
                })}
              </LinkContainer>
            </TableContainer>
            <HorizontalBorder />
          </div>
        );
      })}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const ContentContainer = styled(Box)`
  width: 100%;
  padding: 0 100px;
  margin: 96px 0;

  ${breakpoints("padding", "", [{ 1200: "0 48px" }])}
  ${breakpoints("margin", "", [{ 900: "48px 0" }])}
  ${breakpoints("padding", "", [{ 900: "0" }])}
`;

const Section = styled(Box)`
  margin: 0 0 96px 0;

  ${breakpoints("margin", "", [{ 900: "0 0 48px 0" }])}
`;

type InvestorRelations = {
  featuredVideo: {
    _id: string;
    title: string;
    description: string;
    link: string;
    isFeatured: boolean;
  }[];
  latestPresentation: {
    _id: string;
    date: string;
    description: string;
    relevantLinks: any;
    isFeatured: boolean;
  }[];
  recentEvents: {
    _id: string;
    date: string;
    description: string;
    relevantLinks: any;
  }[];
  financialResults: {
    _id: string;
    description: string;
    relevantLinks: any;
  }[];
};

export const getStaticProps = async () => {
  const queryVideos = `*[_type == "investor-relations-videos" && isFeatured]`;
  const queryLatestPresentation = `*[ _type == "investor-relations-latest-presentation" && isFeatured ]`;
  const queryRecentEvents = `*[ _type == "investor-relations-recent-events" ]`;
  const queryFinancial = `*[ _type == "investor-relations-financial-results" ]`;
  const query = `{ "featuredVideo": ${queryVideos}, "latestPresentation": ${queryLatestPresentation}, "recentEvents": ${queryRecentEvents}, "financialResults": ${queryFinancial} }`;

  const investorRelations = await client.fetch<InvestorRelations>(query);

  return {
    props: {
      investorRelations: {
        featuredVideo: investorRelations?.featuredVideo ?? [],
        latestPresentation:
          investorRelations?.latestPresentation?.length
            ? investorRelations.latestPresentation
            : LATEST_PRESENTATION,
        recentEvents:
          investorRelations?.recentEvents?.length
            ? investorRelations.recentEvents
            : RECENT_EVENTS,
        financialResults: investorRelations?.financialResults ?? [],
      },
    },
  };
};

export default function InvestorRelations({ investorRelations }) {
  const { width } = useWindowSize();
  const featuredVideo = investorRelations?.featuredVideo?.[0];
  const latestPresentation = investorRelations?.latestPresentation ?? [];
  const recentEvents = investorRelations?.recentEvents ?? [];
  const financialResults = investorRelations?.financialResults ?? [];

  const sortedRecentEvents = [...recentEvents].sort((a, b) => {
    const dateA = parseDate(a?.date)?.getTime() ?? 0;
    const dateB = parseDate(b?.date)?.getTime() ?? 0;

    return dateB - dateA;
  });

  const formattedSortedRecentEvents = sortedRecentEvents.map((item) => ({
    ...item,
    date:
      parseDate(item?.date)?.toLocaleDateString("en-CA", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) ?? item?.date,
  }));

  const financialResult = financialResults?.[0];
  const financialLink = financialResult?.relevantLinks?.[0];
  const financialHref = getHref(financialLink);

  return (
    <Layout
      variant={LayoutVariants.Dark}
      pageTitle="Investor Relations"
      headerContent={featuredVideo ? <HeaderContent featuredVideo={featuredVideo} /> : null}
    >
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta
          name="description"
          content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Head>

      <ContentContainer>
        {width <= 900 && featuredVideo && (
          <Box margin="0 0 68px 0">
            <VideoBannerMobile featuredVideo={featuredVideo} />
          </Box>
        )}

        <Section>
          <StyledContentHeading as="h2">
            Latest Presentation
          </StyledContentHeading>
          <TableContent width={width} data={latestPresentation} />
        </Section>

        <Section>
          <StyledContentHeading as="h2">Recent Events</StyledContentHeading>
          <TableContent width={width} data={formattedSortedRecentEvents} />
        </Section>

        <Section>
          <StyledContentHeading as="h2">
            Information Request
          </StyledContentHeading>
          <Text>
            For more information about 01 Quantum contact us at +1 905 795-2888
            or +1 800 668-2185 (US/Canada), or email{" "}
            <StyledLink
              target="_blank"
              href="mailto:investorrelations@01com.com"
            >
              investorrelations@01com.com
            </StyledLink>{" "}
            with any comments or suggestions.
          </Text>
        </Section>

        <Section>
          <StyledContentHeading as="h2">Stock Quote</StyledContentHeading>
          <Text>
            Click{" "}
            <StyledLink
              href="https://money.tmx.com/en/quote/ONE"
              target="_blank"
            >
              here
            </StyledLink>{" "}
            to obtain the latest stock quote.
          </Text>
        </Section>

        <Section>
          <StyledContentHeading as="h2">Financial Results</StyledContentHeading>
          <HorizontalBorder />

          <TableContainer>
            <Text>{financialResult?.description}</Text>
            <Box></Box>
            <LinkContainer>
              {financialHref && (
                <LinkItem>
                  <Box margin="0px 8px">
                    <Image src={pdf} alt="pdf icon" />
                  </Box>
                  <Anchor
                    style={{ marginTop: "4px" }}
                    href={financialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {financialLink?.label}
                  </Anchor>
                </LinkItem>
              )}
            </LinkContainer>
          </TableContainer>
          <HorizontalBorder />
        </Section>

        <Text>
          For further information on the company's financial results, please
          visit{" "}
          <StyledLink href="https://www.sedar.com" target="_blank">
            www.sedar.com
          </StyledLink>
          .
        </Text>
      </ContentContainer>
    </Layout>
  );
}
