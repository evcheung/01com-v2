import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const revalidate = 10;

const PAGE_BG = "#010101";
const HERO_BG = "#010101";
const TEXT_WHITE = "#f4f8ff";
const TEXT_BODY = "#e6eefb";
const TEXT_BLUE = "#4db1ff";
const TEXT_GREEN = "#00cf7d";

const footerActionLinks = [
  { label: "Contact", href: "/contact-us" },
  { label: "Demo", href: "/contact-us" },
];

const footerNavLinks = [
  { label: "Products", href: "/" },
  { label: "Services", href: "/" },
  { label: "Use Cases", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
  { label: "Investor Relations", href: "/investor-relations" },
];

const footerSocialLinks = [
  {
    label: "X",
    href: "https://x.com/01quantuminc",
    src: "/assets/x.png",
    width: 24,
    height: 24,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/01-quantum/",
    src: "/assets/linkedin.png",
    width: 24,
    height: 24,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg",
    src: "/assets/youtube.png",
    width: 24,
    height: 24,
  },
];

const MainBannerContainer = styled.section`
  position: relative;
  z-index: 1;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: visible;
  background: ${HERO_BG};

  min-height: clamp(260px, 28vw, 420px);
  padding-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBg = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 27%;
  transform: translateX(-50%);
  z-index: 0;

  width: auto;
  height: auto;

  pointer-events: none;
  user-select: none;
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
  font-style: normal;
  font-size: clamp(56px, 6.6vw, 71px);
  line-height: 0.96;
  letter-spacing: 0.01em;
`;

/* Threat to AI Models Managed */

const PageRoot = styled.div`
  font-family: var(--font-jost), "Jost", sans-serif;
`;

const HomeSurface = styled.section`
  position: relative;
  z-index: 3;
  margin-top: -128px;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  padding: 28px 0 0px;

  background: transparent;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 128px;
    bottom: 0;
    background: ${PAGE_BG};
    z-index: 0;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;

  width: min(1600px, 80vw);
  margin: 0 auto;
`;

const IntroGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  gap: 64px;
  align-items: start;

  @media screen and (max-width: 1920px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PanelCard = styled.div`
  width: 100%;
`;

const PanelCardTop = styled(PanelCard)``;
const PanelCardBottom = styled(PanelCard)`
  bottom: 20px;
`;

const CardTitle = styled.p`
  margin: 0 0 12px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 1.25;
`;

const CardList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 1.55;

  li {
    margin: 0 0 6px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const TopRectContent = styled.div`
  position: absolute;
  top: 150px; /* must match PanelTop */
  left: 50%;
  transform: translateX(-50%);
  width: 90%; /* must match PanelTop */
  z-index: 6;

  box-sizing: border-box;
  padding: 34px 38px; /* <-- this is what makes it line up like the mock */
`;

const BottomRectContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 6;
  box-sizing: border-box;
  padding: 55px 38px 34px;
`;

const IntroTitle = styled.h1`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: clamp(24px, 2.06vw, 38px);
  line-height: 1.12;
  letter-spacing: 0.01em;
`;

const IntroLogo = styled(Image)`
  width: min(460px, 100%);
  height: auto;
  display: block;
`;

const IntroLead = styled.p`
  margin: 0;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 33px;
  line-height: 1.56;
`;

const IntroBody = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.62;
`;

const IntroParagraph = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 16px);
  line-height: 2;
`;

const LeadInline = styled.div`
  color: ${TEXT_BLUE};
  font-weight: 300;
  font-size: 33px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

const OfferingsGrid = styled.section`
  position: relative;
  margin-top: 68px;
  width: min(1120px, 70vw);
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 220px;
  row-gap: 148px;

  align-items: stretch;

  @media screen and (max-width: 1020px) {
    width: min(700px, 92vw);
    grid-template-columns: 1fr;
    row-gap: 52px;
    column-gap: 0;
  }
`;

const OfferingsGridLong = styled(OfferingsGrid)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);

    width: 37px;
    height: min(1066px, 100%);
    margin: auto 0;

    background: url("/assets/long-dividey.png") center / contain no-repeat;
    pointer-events: none;
  }

  @media screen and (max-width: 1020px) {
    &::before {
      display: none;
    }
  }
`;

const OfferingsGridDivided = styled.section`
  position: relative;
  width: min(1120px, 70vw);
  margin: 0 auto;
  padding: 60px 0 80px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  column-gap: 220px;
  row-gap: 170px;

  align-items: start;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 566px;
    height: 566px;

    background: url("/assets/double-dividey.png") center / contain no-repeat;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 56px;
    column-gap: 0;

    &::before {
      display: none;
    }
  }
`;

const OfferingsGridDividedSingle = styled(OfferingsGrid)`
  padding-bottom: 96px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 566px;
    height: 420px;

    background: url("/assets/divider-middle.png") center no-repeat;
    background-size: auto;

    pointer-events: none;
  }

  @media screen and (max-width: 1020px) {
    padding-bottom: 56px;

    &::before {
      display: none;
    }
  }
`;

const ColumnTitle = styled.h2`
  margin: 54px 0 0;
  text-align: center;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 44px;
  line-height: 1.12;

  @media screen and (max-width: 760px) {
    font-size: 34px;
  }
`;

const ColumnSummary = styled.p`
  margin-top: 20px;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(13px, 0.88vw, 16px);
  line-height: 2;
`;

const OfferingColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

const OfferingCard = styled.div`
  width: min(364px, 100%);
  min-height: 175px;
  border-radius: 28px;
  background: center / cover no-repeat url("/assets/big-card.png");
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  display: grid;
  place-items: center;
  margin: 0 auto 14px; /* <-- centers the card, keeps bottom spacing */

  @media screen and (max-width: 1020px) {
    margin: 0 auto 6px;
  }
`;

const OfferingCardTitle = styled.h2`
  margin: 0;
  text-align: center;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(19px, 1.66vw, 30px);
  line-height: 1.18;
`;

const Trademark = styled.span`
  font-size: 0.42em;
  vertical-align: super;
  letter-spacing: 0.04em;
  margin-left: 2px;
`;

const OfferingList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;
  align-self: stretch;
`;

const OfferingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const OfferingItemTitle = styled.p`
  margin: 0;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(17px, 1.28vw, 24px);
  line-height: 1.28;
`;

const OfferingItemSubTitle = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.36;
`;

const Divider = styled(Image)`
  width: min(1120px, 90vw);
  height: auto;
  display: block;
  margin: 56px auto 0;
`;

const ThreatPanel = styled.section`
  position: relative;
  width: min(1220px, 92vw);
  margin: 18px auto 0;
`;

const CalloutTextImage = styled(Image)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: auto;
  height: auto;
  max-width: 90%;
  pointer-events: none;
`;

const ThreatBgImage = styled(Image)`
  width: 1220px; /* original size */
  height: auto;
  max-width: 100%; /* shrink on smaller screens, never stretch bigger */
  display: block;
  margin: 0 auto;
  pointer-events: none;
  user-select: none;
`;

const ThreatContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 34px 60px;
`;

const BigThreatContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  box-sizing: border-box;
  padding: 44px 64px 44px;
  gap: 24px;

  @media (max-width: 760px) {
    padding: 26px 22px 26px;
  }
`;

const BigThreatPanel = styled.section`
  position: relative;
  width: min(1220px, 92vw);
  margin: 18px auto 0;
`;

const BigThreatTitle = styled.h2`
  margin: 0 0 18px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: clamp(24px, 2.1vw, 44px);
  line-height: 1.15;
`;

const BigThreatText = styled.div`
  max-width: 1080px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.95vw, 16px);
  line-height: 1.85;
`;

const ThreatText = styled.p`
  margin: 0 0 14px;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.5;
`;

const ThreatTitle = styled.h2`
  margin-top: -128px;
  margin-bottom: 64px;
  color: #61b8ff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.25;
`;

/* Footer section */

const FooterShowcaseSection = styled.section`
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #060a12;
`;

/* Top bar (vector background) */
const FooterTopBar = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #0a0f18 url("/assets/footer-vector.png") center / cover no-repeat;
  padding: 18px 0 16px;
`;

/* Bottom bar (solid black) */
const FooterBottomBar = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #000;
  padding: 40px 0 50px;
`;

const FooterShowcaseInner = styled.div`
  width: min(1260px, 92vw);
  margin: 0 auto;
`;

const FooterTopRow = styled.div`
  position: relative;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 860px) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const FooterActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 88px;

  @media screen and (max-width: 860px) {
    width: 100%;
    justify-content: flex-start;
    gap: 16px;
  }
`;

const FooterActionButton = styled(Link)`
  width: 106px;
  height: 34px;
  display: grid;
  place-items: center;

  /* use your provided image */
  background: url("/assets/footer-button.png") center / contain no-repeat;
  border: none;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1;
  text-decoration: none;

  &:hover {
    filter: brightness(1.06);
  }
`;

const FooterSocialCluster = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (max-width: 860px) {
    position: static;
    transform: none;
    width: 100%;
    justify-content: flex-end;
  }
`;

const FooterSocialLink = styled(Link)`
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
`;

const FooterSocialIcon = styled(Image)`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

const FooterBottomRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 30px 34px;
  align-items: flex-start;

  padding-top: 16px;

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogoLink = styled(Link)`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterLogo = styled(Image)`
  height: auto;
  display: block;
`;

const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  padding: 0;
`;

const FooterNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 32px;
`;

const FooterNavLink = styled(Link)`
  color: #ffffff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  gap: 16px;
`;

const FooterAddressLine = styled.p`
  margin: 0;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16.5px;
  line-height: 1.4;
`;

const OnCallHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const OnCallIcon = styled(Image)`
  width: 114px;
  height: 100px;
  object-fit: contain;
  flex: 0 0 auto;
`;

const OnCallTitle = styled.h2`
  margin: 0;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 46px;
  line-height: 1;
  max-width: 1020px;
`;

const OnCallHeadline = styled.p`
  margin: 18px 0 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 33px;
  line-height: 1.5;
`;

const OnCallBody = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  max-width: 1920px;
`;

const GreenRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 48px;
  flex-wrap: wrap;
  color: ${TEXT_GREEN};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 2;
`;

const GreenItem = styled.span`
  white-space: nowrap; /* keeps each label together */
`;

const InTouchSubHead = styled.p`
  margin: 8px 0 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 30px;
  line-height: 2;
`;

const LogoStripSection = styled.section`
  margin-top: 60px;
  margin-bottom: 112px;
  display: flex;
  justify-content: center;
`;

const LogoStripInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  flex-wrap: nowrap;

  & > span {
    flex: 0 0 auto;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 28px;
  }
`;

const LogoStripImage = styled(Image)`
  width: auto;
  height: auto;
`;

const AdvantageItem = styled.div`
  position: relative;
  z-index: 1; /* above the divider */
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 460px;
`;

const AdvantageIcon = styled(Image)`
  width: 61px !important;
  height: 74px !important;
  object-fit: contain;

  position: relative;
  margin: 0 auto 18px; /* center icon above each item */
  display: block;
`;

const AdvantageTitle = styled.p`
  margin-bottom: 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.2;
`;

const AdvantageDesc = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  max-width: 420px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Post-Quantum Cybersecurity | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageRoot>
        <MainBannerContainer>
          <HeroBg
            src="/assets/header-mask.png"
            alt=""
            aria-hidden="true"
            width={730}
            height={441}
            priority
          />

          <HeroCopy>
            <HeroTitle>Quantum Threat</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid style={{ marginTop: "80px", marginBottom: "120px" }}>
              <IntroCopy>
                <OnCallBody>
                  Traditional cryptography such as RSA encryption relies on the
                  computational difficulty of factoring large prime numbers. The
                  security of RSA encryption is based on the fact that it's very
                  difficult and time- consuming for classical computers to
                  factorize a large semi-prime number into its prime factors
                  when the number is sufficiently large (for example, a product
                  of two large prime numbers). This is called a mathematical
                  “trapdoor” that is easy going one way, but extremely difficult
                  the opposite way. <br /> <br />
                  For example, a small semi-prime number of 21 will take a split
                  second even for a human to factor into the original two prime
                  numbers that make it up, which are 3 and 7. Raising the bar
                  slightly to 221 will likely take much longer to factor into
                  the original 13 and 17. A very large semi-prime number will
                  take more than 150 years for supercomputer today to factor
                  into the two original large prime numbers. Since the brute
                  forcing effort is longer than the average life span of a human
                  being, it is considered to be safe and has been the bedrock in
                  protecting the digital world for over 40 years. This
                  protection has been extended to cryptocurrencies which rely on
                  this traditional cryptography.
                  <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ThreatPanel>
              <ThreatBgImage
                src="/assets/callout.png"
                alt=""
                aria-hidden="true"
                width={1220}
                height={260}
                priority
              />

              <CalloutTextImage
                src="/assets/callout-text.png"
                alt=""
                aria-hidden="true"
                width={1000} // adjust to actual size
                height={200} // adjust to actual size
              />
            </ThreatPanel>

            <IntroGrid style={{ marginTop: "120px", marginBottom: "120px" }}>
              <IntroCopy style={{ maxWidth: "1920px" }}>
                <OnCallBody>
                  The quantum-safe tokens mark a revolution in the post-quantum
                  digital asset industry with the ability to not only protect
                  against the arrival of Q-Day, but also retain the features,
                  flexibility and performance of its pre-quantum ancestor. Some
                  examples of features are smart contract capability, high
                  transaction-per-second, low gas fee, NFT and Web3 support,
                  etc.
                  <br /> <br />
                  We envision a decentralized, secure, and scalable network
                  operated and governed by the community that uses it. The
                  computational resources of this post-quantum blockchain can be
                  scaled up to meet all demands for growth. <br /> <br />
                  From a practical standpoint, after Q-Day the value of any
                  digital asset remaining in a wallet that is not quantum-safe
                  can potentially be reduced to virtually $0 in a short period
                  of time. This is a significant, trillion-dollar crisis that
                  cannot be resolved overnight. Our technical goal is to provide
                  to our partners a quantum-safe token minted on an existing L1
                  chain without altering any of the internal structure of the
                  chain. The pilot project with our partner is to launching a
                  quantum-safe native token minting onHyperLiquid. Our plan is
                  to offer this as a “quantum crypto harbor” before the arrival
                  of Q-Day allowing enough time for crypto holders to park their
                  tokens into a quantum-safe version. For the crypto traders, it
                  is an opportunity for crypto arbitrage as the price of
                  quantum-safe tokens should rise and the price of all
                  non-quantum safe tokens should fall when the threat of quantum
                  computer hacks becomes more widely recognized. <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>
          </Inner>

          <FooterShowcaseSection>
            {/* TOP BAR */}
            <FooterTopBar>
              <FooterShowcaseInner>
                <FooterTopRow>
                  <FooterActionGroup>
                    {footerActionLinks.map((item) => (
                      <FooterActionButton key={item.label} href={item.href}>
                        {item.label}
                      </FooterActionButton>
                    ))}
                  </FooterActionGroup>

                  <FooterSocialCluster>
                    {footerSocialLinks.map((item) => (
                      <FooterSocialLink
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                      >
                        <FooterSocialIcon
                          src={item.src}
                          alt={item.label}
                          width={item.width}
                          height={item.height}
                        />
                      </FooterSocialLink>
                    ))}
                  </FooterSocialCluster>
                </FooterTopRow>
              </FooterShowcaseInner>
            </FooterTopBar>

            {/* BOTTOM BAR */}
            <FooterBottomBar>
              <FooterShowcaseInner>
                <FooterBottomRow>
                  <FooterLogoLink href="/">
                    <FooterLogo
                      src="/assets/01quantum-logo.png"
                      alt="01 Quantum logo"
                      width={124}
                      height={83}
                    />
                  </FooterLogoLink>

                  <FooterMeta>
                    <FooterNavLinks aria-label="Footer quick links">
                      {footerNavLinks.map((item) => (
                        <FooterNavLink key={item.label} href={item.href}>
                          {item.label}
                        </FooterNavLink>
                      ))}
                    </FooterNavLinks>

                    <FooterAddress>
                      <FooterAddressLine>
                        01 Quantum, 789 Don Mills Road, Suite #700
                      </FooterAddressLine>
                      <FooterAddressLine>
                        Toronto, ON M3C 1T5, Canada
                      </FooterAddressLine>
                    </FooterAddress>
                  </FooterMeta>
                </FooterBottomRow>
              </FooterShowcaseInner>
            </FooterBottomBar>
          </FooterShowcaseSection>
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
