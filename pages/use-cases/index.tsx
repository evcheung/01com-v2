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
  font-weight: 300;
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
  margin-bottom: 12px;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
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
  font-weight: 200;
  font-size: 22px;
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

const ServicesBanner = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 101px;
  margin-top: -120px;
  margin-bottom: 80px;
  overflow: hidden;

  display: flex;
  align-items: center;
`;

const ServicesBannerImage = styled(Image)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  max-width: none !important;

  pointer-events: none;
  user-select: none;
`;

const ServicesBannerContent = styled.div`
  position: relative;
  z-index: 1;

  width: min(1600px, 80vw);
  margin: 0 auto;

  padding-top: 16px;
`;

const ServicesBannerTitle = styled.h2`
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 44px;
  line-height: 1;
`;

const WrapperSection = styled.section`
  width: min(1600px, 80vw);
  margin: 0 auto;
  padding: 0 0 120px;
`;

const WrapperTitle = styled(ColumnTitle)`
  text-align: left;
  margin: 0 0 32px;
`;

const WrapperCategory = styled.h3`
  margin: 0 0 48px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
`;

const WrapperList = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 56px;
  row-gap: 36px;

  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

const WrapperItemTitle = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  line-height: 1.4;
`;

const WrapperItemDesc = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.6;
  max-width: 980px;
`;

const ProductsSection = styled.section`
  width: min(1600px, 80vw);
  margin: 0 auto;
  padding: 0 0 80px;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const ProductName = styled.h3`
  margin: 0 0 10px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 38px;
  line-height: 1.12;
`;

const ProductDesc = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.85;
  max-width: 1920px;
  opacity: 0.92;
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
            <HeroTitle>Use Cases</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid style={{ marginTop: "80px", marginBottom: "120px" }}>
              <IntroCopy>
                <OnCallTitle>Performance</OnCallTitle>
                <OnCallBody>
                  01 Quantum portfolio of quantum-safe products and
                  services is available for a variety of business verticals,
                  including Financial Institutions, Government Sectors, Defense
                  and AI Integrators. Below are sample use cases in selected
                  sectors. <br /> <br />
                  <GreenRow>
                    <GreenItem>
                      To learn more about how 01 Quantum can work with your
                      company, contact us <Link href="/contact" style={{textDecoration: "underline"}}>here</Link>.
                    </GreenItem>
                  </GreenRow>
                  <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ServicesBanner>
              <ServicesBannerImage
                src="/assets/services-vector.png"
                alt=""
                aria-hidden="true"
                width={1920}
                height={101}
              />

              <ServicesBannerContent>
                <ServicesBannerTitle>IronCAP™ Services</ServicesBannerTitle>
              </ServicesBannerContent>
            </ServicesBanner>

            <WrapperSection>
              <WrapperTitle>Quantum AI Wrapper</WrapperTitle>
              <WrapperCategory>Finance</WrapperCategory>

              <WrapperList style={{ marginBottom: "80px" }}>
                <WrapperItemTitle>AML Ring Detection</WrapperItemTitle>
                <WrapperItemDesc>
                  AI analyzes transaction networks to uncover hidden
                  relationships and coordinated behaviors that indicate money
                  laundering rings. Machine learning models continuously adapt
                  to evolving tactics, improving detection accuracy while
                  reducing false positives.
                </WrapperItemDesc>

                <WrapperItemTitle>Market Risk (Beta)</WrapperItemTitle>
                <WrapperItemDesc>
                  AI models large volumes of market data to detect emerging risk
                  signals, forecast volatility, and simulate stress scenarios.
                  This enables faster, data-driven risk assessment and more
                  dynamic portfolio management.
                </WrapperItemDesc>

                <WrapperItemTitle>Credit Scoring</WrapperItemTitle>
                <WrapperItemDesc>
                  AI evaluates diverse financial and behavioral data to generate
                  more predictive and inclusive credit risk assessments.
                  Advanced models can improve accuracy while identifying subtle
                  risk patterns traditional scoring methods may miss.
                </WrapperItemDesc>
              </WrapperList>

              <Divider
                src="/assets/divider-down.png"
                alt=""
                aria-hidden="true"
                width={1120}
                height={23}
              />

              <WrapperCategory style={{ marginTop: "60px" }}>
                Government
              </WrapperCategory>

              <WrapperList>
                <WrapperItemTitle>Security Clearance Vetting</WrapperItemTitle>
                <WrapperItemDesc>
                  AI assists in reviewing large volumes of background data,
                  flagging anomalies, inconsistencies, or risk indicators for
                  human review. This accelerates vetting processes while
                  improving thoroughness and consistency.
                </WrapperItemDesc>

                <WrapperItemTitle>Tax Evasion Scoring</WrapperItemTitle>
                <WrapperItemDesc>
                  AI identifies patterns in financial filings and transactional
                  data that suggest potential fraud or underreporting.
                  Predictive models help prioritize high-risk cases for audit
                  and investigation.
                </WrapperItemDesc>

                <WrapperItemTitle>Cross-Agency Logistics</WrapperItemTitle>
                <WrapperItemDesc>
                  AI evaluates diverse financial and behavioral data to generate
                  more predictive and inclusive credit risk assessments.
                  Advanced models can improve accuracy while identifying subtle
                  risk patterns traditional scoring methods may miss.
                </WrapperItemDesc>
              </WrapperList>

              <Divider
                src="/assets/divider-down.png"
                alt=""
                aria-hidden="true"
                width={1120}
                height={23}
              />

              <WrapperCategory style={{ marginTop: "60px" }}>
                Defense
              </WrapperCategory>
              <WrapperList>
                <WrapperItemTitle>Satellite Imagery Analysis</WrapperItemTitle>
                <WrapperItemDesc>
                  AI processes vast amounts of imagery to detect objects,
                  movements, or changes of interest in near real time. Computer
                  vision models enhance situational awareness and reduce analyst
                  workload.
                </WrapperItemDesc>

                <WrapperItemTitle>Network Intrusion</WrapperItemTitle>
                <WrapperItemDesc>
                  AI monitors network traffic to identify anomalous behavior
                  that may indicate cyber threats or unauthorized access.
                  Adaptive models can detect both known attack patterns and
                  novel intrusion techniques.
                </WrapperItemDesc>

                <WrapperItemTitle>Field Report Triage</WrapperItemTitle>
                <WrapperItemDesc>
                  AI analyzes incoming reports using natural language processing
                  to prioritize critical information and identify emerging
                  patterns. This enables faster decision-making and more
                  efficient intelligence workflows.
                </WrapperItemDesc>
              </WrapperList>

              <Divider
                src="/assets/divider-down.png"
                alt=""
                aria-hidden="true"
                width={1120}
                height={23}
              />

              <WrapperTitle style={{ marginTop: "60px", marginBottom: "40px" }}>
                Digital Assets Security Services
              </WrapperTitle>
              <WrapperList>
                <WrapperItemTitle>Quantum-Safe Assets</WrapperItemTitle>
                <WrapperItemDesc>
                  Locking: Users can "quantum-lock" existing tokens on existing
                  blockchains like Ethereum or Solana to prevent assets from
                  being lost in the event that the classic-encryption-based
                  wallet (private key) is compromised.
                </WrapperItemDesc>

                <WrapperItemTitle>
                  Smart Contract Circuit Breaker
                </WrapperItemTitle>
                <WrapperItemDesc>
                  A blockchain-based application with a fail-safe that required
                  both a classic and quantum signature to execute, halting
                  transactions if a valid post-quantum signature is missing,
                  even if classical signature has been compromised.
                </WrapperItemDesc>
              </WrapperList>
            </WrapperSection>

            <ServicesBanner style={{ marginTop: "-40px" }}>
              <ServicesBannerImage
                src="/assets/services-vector.png"
                alt=""
                aria-hidden="true"
                width={1920}
                height={101}
              />

              <ServicesBannerContent>
                <ServicesBannerTitle>IronCAP™ Products</ServicesBannerTitle>
              </ServicesBannerContent>
            </ServicesBanner>

            <ProductsSection>
              <ProductList>
                <div>
                  <ProductName>IronCAP X</ProductName>
                  <ProductDesc>
                    Protecting emailed information that has a sensitivity period
                    extending beyond five years; therefore requiring for quantum
                    safety.
                  </ProductDesc>
                </div>

                <div>
                  <ProductName>IronCAP InTouch</ProductName>
                  <ProductDesc>
                    Protecting emailed information that has a sensitivity period
                    extending beyond five years; therefore requiring for quantum
                    safety.
                  </ProductDesc>
                </div>

                <div>
                  <ProductName>IronCAP OnCall</ProductName>
                  <ProductDesc>
                    Customer support infrastructure with quantum-safe security.
                  </ProductDesc>
                </div>
              </ProductList>
            </ProductsSection>
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
