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
            <HeroTitle>Services</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid>
              <IntroCopy style={{ maxWidth: "1920px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/qaw.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>QAW (Quantum AI Wrapper)</OnCallTitle>
                </OnCallHeaderRow>
                <OnCallBody>
                  IronCAP™ (Quantum) AI Wrapper [QAW]QAW (Quantum AI Wrapper) is
                  a cutting-edge security architecture designed to bridge the
                  gap between high-performance AI and "Hard Security and
                  Privacy." Developed by 01 Quantum, QAW applies either a
                  complete software-based approach to Fully Homomorphic
                  Encryption (FHE) or leverages hybrid processing by combining
                   FHE with Trusted Execution Environments (TEEs) AKA hardware
                  enclaves to ensure your data remains encrypted even while
                  being processed. <br /> <br />
                  Whether a software or hybrid FHE solution, 01 Quantum
                  future-proofs the critical key management functions in FHE
                  using post-quantum key generation and exchange.
                  <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>Key Advantages</ColumnTitle>
            <OfferingsGridLong>
              {/* LEFT COLUMN */}
              <OfferingColumn>
                <OfferingList>
                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/opensource.png"
                      alt=""
                      aria-hidden="true"
                      width={61}
                      height={74}
                      priority
                    />
                    <AdvantageTitle>
                      Seamless Open Source Integration
                    </AdvantageTitle>
                    <AdvantageDesc>
                      QAW is built on a foundation of transparency and
                      community-driven innovation. By utilizing open-source
                      artifacts like ZAMA, ContreteML, FHE-Studio (a dedicated
                      IDE for Pythonic circuit development) and Artifirm (core
                      libraries and APIs), QAW ensures that your security stack
                      is auditable, flexible, and free from vendor lock-in.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/testing.png"
                      alt=""
                      aria-hidden="true"
                      width={65}
                      height={65}
                    />
                    <AdvantageTitle>
                      Rigorous Testing & Verification
                    </AdvantageTitle>
                    <AdvantageDesc>
                      Security is only as strong as its weakest link. QAW
                      services include comprehensive testing and verification
                      protocols to ensure that cryptographic circuits are
                      optimized for your specific "Expert AI" tasks. We validate
                      every encrypted model against the cleartext version to
                      ensure that accuracy and responses are within design
                      tolerances.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/ongoing.png"
                      alt=""
                      aria-hidden="true"
                      width={55}
                      height={71}
                    />
                    <AdvantageTitle>Ongoing Support & Training</AdvantageTitle>
                    <AdvantageDesc>
                      The transition to Post-Quantum and FHE-based security
                      requires specialized knowledge. We provide tailored
                      training and continuous support to help your team navigate
                      the complexities of “wrapped” or encrypted AI, ensuring
                      your infrastructure evolves alongside the latest
                      cybersecurity frameworks (like NIST AI RMF and ISO 42001).
                    </AdvantageDesc>
                  </AdvantageItem>
                </OfferingList>
              </OfferingColumn>

              {/* RIGHT COLUMN */}
              <OfferingColumn>
                <OfferingList>
                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/hybrid.png"
                      alt=""
                      aria-hidden="true"
                      width={70}
                      height={71}
                    />
                    <AdvantageTitle>Hybrid FHE Optimizations </AdvantageTitle>
                    <AdvantageDesc>
                      Traditional FHE has a reputation for being slow. QAW
                      solves this through a the application of FHE optimizations
                      to critical computations and utilizing hardware
                      accelerations (GPU, TEE) for speed, we achieve
                      near-real-time performance. FHE Payment Authorization
                      ~10ms latencyCorporate Copilots ~200ms latency
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/managed-services.png"
                      alt=""
                      aria-hidden="true"
                      width={62}
                      height={64}
                    />
                    <AdvantageTitle>
                      Managed Services & Remote Monitoring
                    </AdvantageTitle>
                    <AdvantageDesc>
                      01 Quantum offers a fully managed service model for
                      organizations that require on-going support. We can
                      remotely monitor and manage your FHE-enabled AI models and
                      the supporting Post-Quantum (PQ) key infrastructure,
                      whether they reside on-premise or within a cloud instance.
                      This ensures your AI based services remain secure and
                      operational 24/7.
                    </AdvantageDesc>
                  </AdvantageItem>
                </OfferingList>
              </OfferingColumn>
            </OfferingsGridLong>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px" }} id="da-protection">
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallTitle>
                    Digital Asset Protection Services - Securing the Future of
                    blockchains
                  </OnCallTitle>
                </OnCallHeaderRow>

                <OnCallBody>
                  Our digital asset security framework is powered by two core
                  technologies that bridge the gap between today’s
                  Web3/blockchain infrastructure and the post-quantum era:
                </OnCallBody>
                <GreenRow>
                  <GreenItem>QWC (Quantum Crypto Wrapper)</GreenItem>
                  <GreenItem>QCW (Quantum DeFi Wrapper)</GreenItem>
                </GreenRow>
              </IntroCopy>
            </IntroGrid>
            <IntroGrid style={{ marginTop: "80px" }}>
              <IntroCopy style={{ maxWidth: "1920px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/quantum-crypto.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>QCW (Quantum Crypto Wrapper)</OnCallTitle>
                </OnCallHeaderRow>

                <InTouchSubHead>
                  On-chain proofs on post-quantum signatures
                </InTouchSubHead>
                <OnCallBody>
                  By pairing Zero-Knowledge Proofs (ZKP) with our NIST-aligned
                  IronCAP cryptographic engine, QCW enables compact,
                  high-performance validation of quantum-resistant transactions.
                  This allows organizations to secure existing digital assets on
                  legacy chains while maintaining on-chain efficiency and
                  interoperability.
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>
            <IntroGrid style={{ marginTop: "80px" }}>
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/quantum-defi.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>QCW (Quantum DeFi Wrapper)</OnCallTitle>
                </OnCallHeaderRow>

                <InTouchSubHead>
                  Smart contracts secured with quantum-safe signatures
                </InTouchSubHead>
                <OnCallBody>
                  Functioning as a quantum-safe circuit breaker, QDW adds a
                  critical defense layer to smart contract operations. It halts
                  any transaction that fails to provide a valid PQC
                  signature—effectively protecting Layer 1 tokens even if
                  traditional elliptic curve cryptography (ECC) is compromised.
                </OnCallBody>
                <GreenRow>
                  <GreenItem>QWC (Quantum Crypto Wrapper)</GreenItem>
                  <GreenItem>QCW (Quantum DeFi Wrapper)</GreenItem>
                </GreenRow>
              </IntroCopy>
            </IntroGrid>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <ThreatPanel>
              <ThreatBgImage
                src="/assets/gray-grad-box.png"
                alt=""
                aria-hidden="true"
                width={1220}
                height={260}
                priority
              />

              <ThreatContent>
                <ThreatText>
                  <GreenRow>
                    <GreenItem>Feb 2026, </GreenItem>
                  </GreenRow>
                  01 Quantum recently celebrated a major milestone in the
                  digital asset space with the successful launch of the $qONE
                  token in collaboration with qLABS. Deployed using QCW and QDW
                  on Hyperliquid’s HyperEVM, the $qONE Token Generation Event
                  (TGE) represents a foundational step in establishing the
                  world’s first Quantum-safe asset management utility, enabling
                  users to "quantum-lock” digital assets on existing blockchains
                  like Ethereum and Solana without the need for disruptive hard
                  forks.
                </ThreatText>
              </ThreatContent>
            </ThreatPanel>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <ColumnTitle style={{ marginTop: "180px" }}>
              Key Advantages
            </ColumnTitle>
            <OfferingsGridDividedSingle >
              <OfferingColumn>
                <AdvantageItem>
                  <AdvantageIcon
                    src="/assets/interop.png"
                    alt=""
                    aria-hidden="true"
                    width={61}
                    height={74}
                    priority
                  />
                  <AdvantageTitle>
                    Open Source Integration & Interoperability
                  </AdvantageTitle>
                  <AdvantageDesc>
                    We are committed to an "integration-first" design
                    philosophy. Our Layer 1 Migration Toolkit and wrapping
                    technologies are designed to integrate seamlessly with the
                    most popular ecosystems, including Ethereum, Solana, and
                    Hyperliquid. By utilizing open-source protocols and
                    algorithms, we ensure our security solutions are
                    transparent, auditable, and easily adoptable by developers
                    and validators.
                  </AdvantageDesc>
                </AdvantageItem>
                <AdvantageItem>
                  <AdvantageIcon
                    src="/assets/remote.png"
                    alt=""
                    aria-hidden="true"
                    width={61}
                    height={74}
                    priority
                  />
                  <AdvantageTitle>
                    Managed Security & Remote Monitoring
                  </AdvantageTitle>
                  <AdvantageDesc>
                    For high-assurance requirements, 01 Quantum offers a Managed
                    Digital Asset Service. We can remotely monitor and manage
                    your smart contracts and Post-Quantum (PQ) key
                    infrastructure on-premise or in a cloud instance. This
                    proactive management includes daily status checks and
                    real-time alerts to mitigate long-term threats to high value
                    digital assets posed by cryptographic vulnerabilities in
                    smart contracts and wallets by sufficiently scaled quantum
                    computers.
                  </AdvantageDesc>
                </AdvantageItem>
              </OfferingColumn>

              <OfferingColumn>
                <AdvantageItem>
                  <AdvantageIcon
                    src="/assets/fhe-opt.png"
                    alt=""
                    aria-hidden="true"
                    width={61}
                    height={74}
                    priority
                  />
                  <AdvantageTitle>Hybrid FHE Optimizations</AdvantageTitle>
                  <AdvantageDesc>
                    Security in the quantum era requires precision. We provide a
                    production-ready framework that includes: <br /> <br />
                    <GreenRow>
                      <GreenItem>Rigorous Audits</GreenItem>
                    </GreenRow>
                    Comprehensive cryptographic verification to ensure all
                    PQC-signatures meet enterprise and government security
                    standards. <br />
                    <br />
                    <GreenRow>
                      <GreenItem>Phased Deployment </GreenItem>
                    </GreenRow>
                    We guide organizations through a 3-phase rollout—from
                    initial asset protection via Quantum-Sig smart contract
                    wallets to full protocol-level activation. <br />
                    <br />
                  </AdvantageDesc>
                </AdvantageItem>
                <AdvantageItem>
                  <AdvantageIcon
                    src="/assets/ongoing.png"
                    alt=""
                    aria-hidden="true"
                    width={61}
                    height={74}
                    priority
                  />
                  <AdvantageTitle>
                    On-going Support and Training{" "}
                  </AdvantageTitle>
                  <AdvantageDesc>
                    Navigating the transition to a quantum-resilient digital
                    assets is a strategic challenge. 01 Quantum provides
                    expert-led training and ongoing support to help your team
                    align cryptographic performance requirements with ecosystem
                    constraints, ensuring your assets are future-proofed for
                    "Q-Day" and beyond.
                  </AdvantageDesc>
                </AdvantageItem>
              </OfferingColumn>
            </OfferingsGridDividedSingle>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "180px", marginBottom: "180px" }} id="crypto-services">
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/os-crypto.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>
                    Open Source Cryptographic Integration Services
                  </OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Apply certified, industry-standard algorithms and libraries
                </OnCallHeadline>

                <OnCallBody>
                  U01 Quantum provides expert engineering services to help
                  organizations transition from legacy algorithms to a modern,
                  Quantum-Safe posture. We specialize in integrating robust
                  cryptographic standards into existing workflows, drawing on
                  our deep history with both classical (ECC/RSA) and
                  Post-Quantum Cryptography (PQC). Our approach is grounded in
                  real-world application, having successfully hardened our own
                  product suite against quantum threats. <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px", marginBottom: "200px" }}>
              <IntroCopy style={{ maxWidth: "1920px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/ironcap-server.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP Server Edition</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Host your own I'm InTouch remote access service
                </OnCallHeadline>

                <OnCallBody>
                  By installing the InTouch Server Edition at your business, you
                  are hosting your own InTouch remote access service for your
                  employees. This means your employees will be remotely
                  accessing their office computers via your own InTouch servers
                  instead of the servers hosted by 01 Quantum. <br /> <br />
                  While this is equally secure as our hosted InTouch remote
                  access service, there is no monthly/annual subscription fees.
                  You purchase the number of licenses you need one-time and you
                  have 100% control in managing your users and bandwidth usage.{" "}
                  <br /> <br />
                  Although a trial version of InTouch Server Edition is not
                  available, its remote access functionality is identical to the
                  hosted I'm InTouch service. Sign up for a free InTouch trial
                  account today and experience the convenience and benefits
                  brought by our award winning products. <br /> <br />
                  For more information or to purchase your InTouch Server
                  Edition, call 1-800-668-2185 or chat with our product
                  specialists. <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <BigThreatPanel>
              <ThreatBgImage
                src="/assets/big-grad-box.png"
                alt=""
                aria-hidden="true"
                width={1220}
                height={501}
                priority
              />

              <BigThreatContent>
                <BigThreatTitle>
                  Real-World Integration Experience
                </BigThreatTitle>

                <BigThreatText>
                  We don't just theorize about PQC; we build with it. 01 Quantum
                  has a proven track record of integrating NIST-aligned PQ
                  algorithms into mission-critical legacy applications, ensuring
                  security without sacrificing usability: <br /> <br /> <br />
                  IronCapX (Secure Email): We integrated advanced PQC into our
                  flagship email platform to provide end-to-end,
                  quantum-resistant messaging. This ensures that sensitive
                  communications remain protected against “Harvest Now, Decrypt
                  Later” (HNDL) attacks. <br /> <br />
                  <br />
                  IronCap InTouch (Virtual Desktop): We hardened our remote
                  desktop solution with quantum-safe authentication and session
                  encryption, securing the virtual workspace for the
                  post-quantum era.
                </BigThreatText>
              </BigThreatContent>
            </BigThreatPanel>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <ColumnTitle style={{ marginTop: "140px", marginBottom: "60px" }}>
              Key Advantages
            </ColumnTitle>
            <OfferingsGridDivided style={{ marginBottom: "120px" }}>
              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/hybrid-crypto.png"
                  alt=""
                  aria-hidden="true"
                  width={61}
                  height={74}
                />
                <AdvantageTitle>
                  Hybrid Cryptographic Implementations
                </AdvantageTitle>
                <AdvantageDesc>
                  We specialize in "Hybrid" deployments that combine classical
                  algorithms with PQC. This ensures your applications remain
                  compliant with current standards while adding a critical layer
                  of quantum resistance, providing a safe and incremental
                  migration path for legacy systems.
                </AdvantageDesc>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/os-integration.png"
                  alt=""
                  aria-hidden="true"
                  width={61}
                  height={74}
                />
                <AdvantageTitle>
                  Open Source Integration & Custom Circuitry
                </AdvantageTitle>
                <AdvantageDesc>
                  Our team leverages leading open-source cryptographic libraries
                  and tools to build transparent, auditable security layers. We
                  integrate these tools into your existing IDE pipelines to
                  ensure that every update remains cryptographically sound.
                </AdvantageDesc>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/p-tuning.png"
                  alt=""
                  aria-hidden="true"
                  width={61}
                  height={74}
                />
                <AdvantageTitle>
                  Testing, Verification & Performance Tuning
                </AdvantageTitle>
                <AdvantageDesc>
                  Moving to PQC can impact system latency and packet size. We
                  provide rigorous testing and verification services to optimize
                  cryptographic performance, ensuring that your security
                  upgrades don't hinder the user experience. We validate every
                  integration against enterprise-grade benchmarks and security
                  frameworks like NIST CSF 2.0 and ISO 27002/62443.
                </AdvantageDesc>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/ongoing.png"
                  alt=""
                  aria-hidden="true"
                  width={61}
                  height={74}
                />
                <AdvantageTitle>Strategic Support & Training</AdvantageTitle>
                <AdvantageDesc>
                  Cryptographic agility is a
                  marathon, not a sprint. We provide ongoing support and
                  specialized training to help your development teams understand
                  the nuances of PQC, from signature schemes to key
                  encapsulation mechanisms (KEMs), ensuring your organization is
                  ready for "Q-Day."
                </AdvantageDesc>
              </AdvantageItem>
            </OfferingsGridDivided>
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
