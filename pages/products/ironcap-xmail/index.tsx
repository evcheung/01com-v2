import Layout from "../../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../../../components/Footer";

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
  max-width: none;
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

const Divider = styled(Image)`
  width: min(1120px, 90vw);
  height: auto;
  display: block;
  margin: 56px auto 0;
`;

const AdvantagesGrid = styled.section`
  position: relative;
  margin-top: 68px;
  width: min(1120px, 70vw);
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 148px;
  row-gap: 144px;
  align-items: start;

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
    width: min(700px, 92vw);
    grid-template-columns: 1fr;
    row-gap: 72px;
    padding-bottom: 56px;

    &::before {
      display: none;
    }
  }
`;

const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AdvantageIcon = styled(Image)`
  width: 61px !important;
  height: 74px !important;
  object-fit: contain;
  position: relative;
  margin-left: 128px;
  margin-bottom: 24px;
`;

const IconStack = styled.div`
  width: 61px;
  height: 74px;
  position: relative;

  margin-left: 128px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconOuter = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`;

const IconInner = styled(Image)`
  position: relative;
  margin-top: 12px;
  margin-left: 1px;
  width: auto !important;
`;

function IronSupportStackedIcon() {
  return (
    <IconStack aria-hidden="true">
      <IconOuter src="/assets/iron-support-outer.png" alt="" fill priority />

      <IconInner
        src="/assets/iron-support-inner.png"
        alt=""
        width={34.11}
        height={46}
        priority
      />
    </IconStack>
  );
}

const AdvantageTitle = styled.p`
  margin: 0;
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

const FlowchartSection = styled.section`
  margin-top: 64px;
  margin-bottom: 72px;
  display: flex;
  justify-content: center;
`;

const FlowchartImage = styled(Image)`
  width: min(1400px, 92vw);
  height: auto;
  display: block;
`;

const DownloadBar = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 40px;

  display: grid;
  place-items: center;
  padding: 24px 0;
`;

const DownloadBarInner = styled.div`
  position: relative;
  width: 1200px; /* match the real image width */
  height: 80px; /* match the real image height */
`;

const DownloadBarImg = styled(Image)`
  object-fit: none; /* <- keeps original size */
`;

const DownloadBarText = styled.a`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;

  margin: 0;
  color: #ffffff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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
  font-weight: 300;
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
  max-width: none;
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
            <HeroTitle>Products</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid>
              <IntroCopy>
                <IntroLogo
                  src="/assets/ironcap-xmail-logo.png"
                  alt="IronCAP End-to-End Email Security"
                  width={420}
                  height={120}
                  priority
                />

                <div>
                  <IntroParagraph>
                    <LeadInline>
                      End-to-End, Quantum-Safe Email Security
                    </LeadInline>{" "}
                    <br />
                    IronCAP X™ is the world’s first quantum-safe, end-to-end
                    email security system utilizing the IronCAP Crypto (ICC) as
                    its cryptographic foundation. Our end-to-end encryption
                    eliminates the intermediary server, aka MITM (Man In The
                    Middle), to ensure 100% security not only today but also in
                    the fast-approaching quantum computing era. <br /> <br />
                    IronCAP X is truly end-to-end with zero third-party trust.
                    It lets you send end-to-end, quantum-safe encrypted email
                    which can only be decrypted by the designated recipients.
                    Additionally, you can digitally sign your emails so your
                    recipients can easily distinguish your legitimate email from
                    a fake one. If your laptops got stolen or your email
                    accounts got compromised, your email messages and
                    attachments stay encrypted, i.e. sensitive information won’t
                    be exposed. They will remain encrypted even when the bad
                    actors have access to quantum computers because the IronCAP
                    Crypto is quantum-safe. <br /> <br />
                  </IntroParagraph>
                </div>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>How It Works</ColumnTitle>

            <OfferingsGrid>
              <OfferingColumn>
                <OfferingCard>
                  <OfferingCardTitle>End-to-End Encryption</OfferingCardTitle>
                </OfferingCard>

                <ColumnSummary>
                  Unlike some secure email systems that store your emails and
                  require your receipts to read from their servers, IronCAP X
                  provides direct end-to-end encryption with no central storage
                  point that’s vulnerable to a cyber attack.
                </ColumnSummary>
              </OfferingColumn>

              <OfferingColumn>
                <OfferingCard>
                  <OfferingCardTitle>
                    End-to-End Digital Signature
                  </OfferingCardTitle>
                </OfferingCard>

                <ColumnSummary>
                  IronCAP X lets you digitally sign your emails. Recipients can
                  easily distinguish between your legitimate emails from those
                  phishing ones. acceleration. <br /> <br />
                </ColumnSummary>
              </OfferingColumn>
            </OfferingsGrid>

            <FlowchartSection>
              <FlowchartImage
                src="/assets/xmail-flowchart.png"
                alt="How encryption and digital signature work for email"
                width={1600}
                height={600}
                priority
              />
            </FlowchartSection>

            <ColumnTitle>Key Advantages</ColumnTitle>
            <AdvantagesGrid>
              {/* Row 1 */}
              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/quick-easy-2.png"
                  alt=""
                  aria-hidden="true"
                  width={61}
                  height={74}
                  priority
                />
                <AdvantageTitle>Quick & Easy Setup</AdvantageTitle>
                <AdvantageDesc>
                  IronCAP X will automatically detect if your email recipient
                  has an IronCAP X account. If not, an invitation message with
                  the link to install the software will be sent accordingly.
                  Upon creating a free personal IronCAP X account, the recipient
                  can decrypt and read your encrypted email. It’s that simple.
                </AdvantageDesc>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/zero-curve.png"
                  alt=""
                  aria-hidden="true"
                  width={70}
                  height={71}
                />
                <AdvantageTitle>Zero Learning Curve</AdvantageTitle>
                <AdvantageDesc>
                  IronCAP X tightly integrates with your everyday email client
                  such as Outlook, Gmail, Yahoo, etc. to ensure a zero learning
                  curve. After composing your email, you can choose to encrypt
                  and digitally sign this message with a simple click before
                  sending it out.
                </AdvantageDesc>
              </AdvantageItem>

              {/* Row 2 */}
              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/authenticity.png"
                  alt=""
                  aria-hidden="true"
                  width={65}
                  height={65}
                />
                <AdvantageTitle>Digital Document Authenticity</AdvantageTitle>
                <AdvantageDesc>
                  IronCAP X lets you sign your digital files to prove their
                  authenticity that they are the original true copies from you
                  rather than from a bogus hacker.
                </AdvantageDesc>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon
                  src="/assets/encrypt.png"
                  alt=""
                  aria-hidden="true"
                  width={62}
                  height={64}
                />
                <AdvantageTitle>General File Encryption</AdvantageTitle>
                <AdvantageDesc>
                  IronCAP X allows you to encrypt your
                  sensitive files such as personal finances, etc. to safeguard
                  against cyber attacks.
                </AdvantageDesc>
              </AdvantageItem>
            </AdvantagesGrid>

            <div
              style={{
                marginTop: "60px",
                marginBottom: "60px",
                textAlign: "center",
              }}
            >
              <Link href="https://01com.com/pdf/brochures/IronCAP%20X%20Brochure_Web.pdf">
                <Image
                  src="/assets/brochure-button.png"
                  alt="Brochure"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <DownloadBar>
              <DownloadBarInner>
                <DownloadBarImg
                  src="/assets/download-ironcap.png"
                  alt=""
                  fill
                  priority
                />
                <DownloadBarText
                  href="https://ironcap.ca/ironcap-x/personal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download IronCAP X
                </DownloadBarText>
              </DownloadBarInner>
            </DownloadBar>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <IntroGrid style={{ marginTop: "80px", marginBottom: "120px" }}>
              <IntroCopy>
                <OnCallHeaderRow>
                  <OnCallIcon
                    src="/assets/ironcap-oncall.png"
                    alt=""
                    aria-hidden="true"
                    width={114}
                    height={100}
                    priority
                  />
                  <OnCallTitle>IronCAP OnCall</OnCallTitle>
                </OnCallHeaderRow>

                <OnCallHeadline>
                  Remote support with a secured channel
                </OnCallHeadline>

                <OnCallBody>
                  IronCAP OnCall is a cost-effective, secure online help desk
                  software which allows organizations to offer remote support
                  over the Internet to their customers.
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>Key Advantages</ColumnTitle>
            <OfferingsGridDividedSingle>
              <OfferingColumn>
                <AdvantageItem>
                  <AdvantageIcon
                    src="/assets/iron-chat.png"
                    alt=""
                    aria-hidden="true"
                    width={61}
                    height={74}
                    priority
                  />
                  <AdvantageTitle>Instant Live-Chat Support</AdvantageTitle>
                  <AdvantageDesc>
                    You can provide world-class Live Chat support to your
                    customers within minutes. OnCall gives you private URLs for
                    embedding into your web site. Simply implement a Live-Chat
                    button with the given URL on your web site. Your customers
                    can then request to chat with an agent easily. Each agent
                    can have up to 10 simultaneous chat sessions to deal with
                    volumes at peak times.
                  </AdvantageDesc>
                </AdvantageItem>
              </OfferingColumn>

              <OfferingColumn>
                <AdvantageItem>
                  <IronSupportStackedIcon />
                  <AdvantageTitle>Efficient Technical Support</AdvantageTitle>
                  <AdvantageDesc>
                    OnCall lets you setup a temporary connection to your
                    customer's computer without any pre-installed software. You
                    can quickly and efficiently resolve your customers'
                    technical and IT support issues by remotely controlling
                    their computers. Plus, your agents can login from anywhere
                    in the world to support your customers, saving your time and
                    traveling cost.
                  </AdvantageDesc>
                </AdvantageItem>
              </OfferingColumn>
            </OfferingsGridDividedSingle>

            <div
              style={{
                marginTop: "60px",
                marginBottom: "112px",
                textAlign: "center",
              }}
            >
              <Link
                href="https://01com.com/pdf/brochures/IronCAP%20X%20Brochure_Web.pdf"
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
          </Inner>

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
