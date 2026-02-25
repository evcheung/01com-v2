import Layout from "../../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HowItWorksVideo from "./HowItWorksVideo";

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
  gap: 148px;
  align-items: stretch;

  @media screen and (max-width: 1020px) {
    width: min(700px, 92vw);
    grid-template-columns: 1fr;
    gap: 52px;
  }
`;

const OfferingsGridDivided = styled(OfferingsGrid)`
  padding-bottom: 96px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 566px;
    height: 566px;

    background: url("/assets/double-dividey.png") center no-repeat;
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

const ThreatText = styled.p`
  margin: 0 0 14px;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.5;
`;

const ThreatTitle = styled.h2`
  margin: 0;
  color: #61b8ff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 1.25vw, 24px);
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
  line-height: 1.1;
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

const InTouchSubHead = styled.p`
  margin: 8px 0 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
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
  gap: 120px;
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

const GoHowItWorksSection = styled.section`
  margin-top: 46px;
  margin-bottom: 86px;
`;

const GoHowItWorksGrid = styled.div`
  width: min(1200px, 92vw);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

const GoSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const GoStepRow = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 26px;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 56px 1fr;
    gap: 18px;
  }
`;

const GoNumber = styled(Image)`
  width: 65px;
  height: auto;

  @media (max-width: 760px) {
    width: 52px;
  }
`;

const GoStepTitle = styled.h3`
  margin: 0 0 10px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.15;
`;

const GoStepDesc = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  max-width: 740px;
`;

const GoDiagram = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    order: -1;
  }
`;

const GoDiagramImg = styled(Image)`
  width: 173px;
  height: auto;

  @media (max-width: 980px) {
    width: 150px;
  }
`;

function InTouchGoHowItWorks() {
  return (
    <GoHowItWorksSection>
      <GoHowItWorksGrid>
        <GoSteps>
          <GoStepRow>
            <GoNumber src="/assets/big1.png" alt="1" width={65} height={162} />
            <div>
              <GoStepTitle>Login &amp; Select Computer</GoStepTitle>
              <GoStepDesc>
                Either login to your InTouch account to pick your computer from
                the list or quickly find your computer by its Computer Name.
                (Click here to see how to create an InTouch account and activate
                your computer to become InTouch enabled).
              </GoStepDesc>
            </div>
          </GoStepRow>

          <GoStepRow>
            <GoNumber src="/assets/big2.png" alt="2" width={65} height={162} />
            <div>
              <GoStepTitle>Launch InTouch Go</GoStepTitle>
              <GoStepDesc>
                Make sure you have internet connection on your mobile device
                (e.g. cellular data or WiFi internet connection) and then launch
                InTouch Go.
              </GoStepDesc>
            </div>
          </GoStepRow>

          <GoStepRow>
            <GoNumber src="/assets/big3.png" alt="3" width={65} height={162} />
            <div>
              <GoStepTitle>Login &amp; Select Computer</GoStepTitle>
              <GoStepDesc>
                Either login to your InTouch account to pick your computer from
                the list or quickly find your computer by its Computer Name.
                (Click here to see how to create an InTouch account and activate
                your computer to become InTouch enabled).
              </GoStepDesc>
            </div>
          </GoStepRow>

          <GoStepRow>
            <GoNumber src="/assets/big4.png" alt="4" width={65} height={162} />
            <div>
              <GoStepTitle>Ready to Go</GoStepTitle>
              <GoStepDesc>
                After authentication, you will be able to remotely control your
                desktop computer from your mobile device.
              </GoStepDesc>
            </div>
          </GoStepRow>
        </GoSteps>

        <GoDiagram>
          <GoDiagramImg
            src="/assets/intouch-go-steps.png"
            alt="InTouch Go steps diagram"
            width={173}
            height={779}
            priority
          />
        </GoDiagram>
      </GoHowItWorksGrid>
    </GoHowItWorksSection>
  );
}

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
            <HeroTitle>Products</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid>
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/ironcap-intouch.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP™ InTouch</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Remote Working with Quantum-Safe, Absolute Security via Any
                  Device from Anywhere, Anytime
                </OnCallHeadline>

                <InTouchSubHead>
                  A Secure & Improved Alternative to VPN
                </InTouchSubHead>
                <OnCallBody>
                  Remote Working with Quantum-Safe, Absolute Security via Any
                  Device from Anywhere, Anytime A Secure & Improved Alternative
                  to VPN Unlike VPN, InTouch establishes zero-trust between the
                  client and the corporate network. This means the corporate
                  network will not be affected even if the client computer has
                  been compromised. <br /> <br />
                </OnCallBody>

                <InTouchSubHead>
                  Securing Accounts with Two-Factor Authentication
                </InTouchSubHead>
                <OnCallBody>
                  Two-Factor Authentication is an effective way to protect
                  against the unlikely event of password breaches. I'm InTouch
                  supports Google Authenticator One-Time Password (OTP). <br />{" "}
                  <br />
                </OnCallBody>

                <InTouchSubHead>
                  Maximum Security with Controlled Access
                </InTouchSubHead>
                <OnCallBody>
                  For maximum security, I'm InTouch lets you exert tight control
                  of the access client. You can restrict remote access from
                  devices with only certain MAC addresses. <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>How It Works</ColumnTitle>
            <HowItWorksVideo />

            <div
              style={{
                marginTop: "60px",
                marginBottom: "112px",
                textAlign: "center",
              }}
            >
              <Link
                href="https://01com.com/pdf/brochures/IronCAP%20Brochure%20Digital.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/brochure-button.png"
                  alt="Brochure"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <LogoStripSection>
              <LogoStripInner>
                <LogoStripImage
                  src="/assets/browser.png"
                  alt="Logo 1"
                  width={123}
                  height={45}
                />
                <LogoStripImage
                  src="/assets/iphone.png"
                  alt="Logo 2"
                  width={98}
                  height={52}
                />
                <LogoStripImage
                  src="/assets/android-ironcap.png"
                  alt="Logo 3"
                  width={140}
                  height={40}
                />
                <LogoStripImage
                  src="/assets/win-tablet.png"
                  alt="Logo 4"
                  width={110}
                  height={48}
                />
              </LogoStripInner>
            </LogoStripSection>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px" }}>
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/ironcap-intouch-go.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP InTouch Go</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Turn your Mobile Device into a Remote Control for your
                  Computer
                </OnCallHeadline>

                <OnCallBody>
                  InTouch Go is a free mobile app that allows you to remote
                  control your computer as if you were sitting in front of it
                  without having to use an Internet browser. Now your remote
                  computer with all your full-blown desktop applications are
                  available at your fingertips. You can check your emails, edit
                  your documents, work on your spreadsheet and any software
                  program on your mobile device. No more frustration about
                  application costs and incompatibility issues since no
                  application is required to be resided at your mobile device.
                  Also there is no more security risk as no confidential file is
                  leaving your office environment. <br /> <br />
                  Before you can use InTouch Go, you must first activate your
                  remote computer to become InTouch-enabled. The activation
                  process is as easy as 1-2-3. Simply click here to create a
                  free 30-day Trial Account. Then from the computer you wish to
                  activate, go to InTouch. Login to the I'm InTouch account you
                  have just created and follow the on-screen instructions to
                  activate the computer. <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>How It Works</ColumnTitle>
            <InTouchGoHowItWorks />

            <LogoStripSection>
              <LogoStripInner>
                <LogoStripImage
                  src="/assets/iphone.png"
                  alt="Logo 2"
                  width={98}
                  height={52}
                />
                <LogoStripImage
                  src="/assets/android-ironcap.png"
                  alt="Logo 3"
                  width={140}
                  height={40}
                />
                <LogoStripImage
                  src="/assets/win-tablet.png"
                  alt="Logo 4"
                  width={110}
                  height={48}
                />
              </LogoStripInner>
            </LogoStripSection>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px" }}>
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/intouch-gomail.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP InTouch GoMail</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>A Revolutionary Mobile Mailbox</OnCallHeadline>

                <OnCallBody>
                  Unlike other mobile mailbox services, InTouch GoMail does not
                  store any message on your device for enhanced security. It
                  simply mobilizes your Outlook and lets you keep all your
                  inbound and outbound emails securely on your own computer.
                  When sending emails from your mobile device you can insert
                  attachments from your computer's local/network drives or save
                  inbound attachments in the same way without having to leave
                  them on any third party's cloud storage. Hence, it maximizes
                  data security/privacy plus no third party storage fee. <br />{" "}
                  <br />
                  With a smart notification feature, you can configure your
                  InTouch GoMail to receive real-time alerts at your mobile
                  device when emails from certain predefined senders arrive at
                  your Outlook. This means you will not be bothered by
                  unimportant messages. <br /> <br />
                  Before you can use InTouch GoMail, you must first activate
                  your Outlook computer to become I'm InTouch-enabled. The
                  activation process is as easy as 1-2-3. Simply click here to
                  create a Free Account. Then from the computer you wish to
                  activate, go to www.imintouch.com. Login to the InTouch
                  account you have just created and follow the on-screen
                  instructions to activate the Outlook computer.
                  <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <LogoStripSection>
              <LogoStripInner>
                <LogoStripImage
                  src="/assets/iphone.png"
                  alt="Logo 2"
                  width={98}
                  height={52}
                />
                <LogoStripImage
                  src="/assets/android-ironcap.png"
                  alt="Logo 3"
                  width={140}
                  height={40}
                />
              </LogoStripInner>
            </LogoStripSection>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px" }}>
              <IntroCopy style={{ maxWidth: "1200px" }}>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/ironcap-security.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP InTouch Security Key</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Ultimate Security for your InTouch Remote PC Access
                </OnCallHeadline>

                <OnCallBody>
                  InTouch SecureKEY provides additional security to your remote
                  access. This requires the user to insert an InTouch SecureKEY
                  (a USB device) as a physical authentication on top of the
                  standard password protection. No two InTouch SecureKEYs are
                  the same. During activation your InTouch SecureKEY is uniquely
                  "bound" to your InTouch-enabled computer. This ensures the
                  holder of the InTouch SecureKEY is the only one who can
                  remotely access the "designated" InTouch-enabled computer.
                  <br /> <br />
                  InTouch SecureKEY can be assigned temporarily to occasional
                  mobile employees or permanently to those requiring dedicated
                  remote access to their computers. <br /> <br />
                  Auto-Login can also be enabled to securely store the login
                  password giving a quick connection by automating the login
                  process. <br /> <br />
                  You have to be a subscriber of our InTouch remote access
                  service in order to use this optional companion product. If
                  you are not a subscriber yet, a free trial is available.{" "}
                  <br /> <br />
                  For more information or to purchase your InTouch SecureKEY,
                  call 1-800-668-2185 or chat with our product specialists.
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
              <IntroCopy style={{ maxWidth: "1200px" }}>
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
