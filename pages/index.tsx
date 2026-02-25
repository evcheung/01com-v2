import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";

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
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  background: ${HERO_BG};

  /* scales nicely on large displays */
  height: clamp(520px, 48vw, 760px);

  @media (min-width: 1441px) {
    height: clamp(620px, 40vw, 880px);
  }
`;

const MainBannerImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const HeroCopy = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;

  width: min(1200px, 92vw);

  @media screen and (max-width: 980px) {
    width: min(900px, 92vw);
  }
`;

const HeroVerticalText = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
`;

const HeroTextBlock = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroKicker = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200; /* ExtraLight */
  font-style: normal;
  font-size: 137px;
  line-height: 0.96;
  letter-spacing: 0.01em;
`;

/* Threat to AI Models Managed */

const PageRoot = styled.div`
  font-family: var(--font-jost), "Jost", sans-serif;
`;

const HomeSurface = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: ${PAGE_BG};
  overflow: hidden;
  padding: 74px 0 0px;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: min(1120px, 90vw);
  margin: 0 auto;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.08fr;
  gap: 34px;
  align-items: center;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const IntroTitle = styled.h1`
  margin-bottom: 16px;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 44px;
  line-height: 1.12;
  letter-spacing: 0.01em;
  white-space: nowrap;
`;

const IntroLead = styled.p`
  margin-bottom: 12px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 21px;
  line-height: 2;
`;

const IntroBody = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
`;

const GraphicWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const Graphic = styled(Image)`
  width: min(586px, 100%);
  height: auto;
  display: block;
`;

const OfferingsGrid = styled.section`
  position: relative;
  margin-top: 68px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 92px;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 0.5px);
    top: 72px;
    bottom: 4px;
    width: 1px;
    background: linear-gradient(
      180deg,
      rgba(131, 182, 231, 0) 0%,
      rgba(131, 182, 231, 0.92) 24%,
      rgba(131, 182, 231, 0.8) 76%,
      rgba(131, 182, 231, 0) 100%
    );
  }

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 52px;

    &::before {
      display: none;
    }
  }
`;

const OfferingColumn = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  row-gap: 16px;
  align-content: start;
`;

const OfferingCard = styled.div`
  width: min(290px, 100%);
  min-height: 170px;
  border-radius: 28px;
  background: center / cover no-repeat url("/assets/ironcap-vector.png");
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

const ColumnSummary = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(13px, 0.88vw, 16px);
  line-height: 1.62;
`;

const LearnMore = styled(Link)`
  margin-top: 4px;
  color: ${TEXT_GREEN};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 0.92vw, 17px);
  letter-spacing: 0.01em;
  line-height: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const OfferingList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: start;
`;

const OfferingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const OfferingItemTitle = styled(Link)`
  margin: 0;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(17px, 1.28vw, 24px);
  line-height: 1.28;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
  width: min(1120px, 90vw);
  margin: 18px auto 0;
  padding: clamp(30px, 3.2vw, 58px) clamp(20px, 4vw, 60px);
  background:
    radial-gradient(
      120% 170% at 50% 44%,
      rgba(90, 168, 255, 0.38) 0%,
      rgba(90, 168, 255, 0.22) 38%,
      rgba(3, 14, 26, 0.92) 76%,
      rgba(2, 8, 17, 1) 100%
    ),
    linear-gradient(0deg, #02101e 0%, #02101e 100%);
`;

const ThreatTitle = styled.h2`
  margin: 0 0 22px;
  color: #61b8ff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(24px, 2.18vw, 40px);
  line-height: 1.14;
`;

const ThreatText = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.5;
`;

const ThreatLink = styled(Link)`
  display: inline-block;
  margin-top: 22px;
  color: ${TEXT_GREEN};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* Applications */

const ApplicationsSection = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 42px;
  padding: 70px 0 80px;
  background: #dcdcdc;
`;

const ApplicationsInner = styled.div`
  width: min(1260px, 92vw);
  margin: 0 auto;
`;

const ApplicationsTitle = styled.h2`
  margin: 0;
  color: #5b70ab;
  text-align: center;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: clamp(34px, 3.1vw, 52px);
  line-height: 1.1;
`;

const ApplicationsGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 34px;

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px 28px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ApplicationCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
  font-family: var(--font-jost), "Jost", sans-serif;
`;

const ApplicationIconWrap = styled.div`
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  margin-bottom: 4px;
`;

const ApplicationIcon = styled(Image)`
  width: 74px;
  height: 74px;
  object-fit: contain;
`;

const ApplicationIconSvg = styled.svg`
  width: 74px;
  height: 74px;
`;

const ApplicationTitle = styled.h3`
  margin: 0;
  color: #1a1a1a;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: clamp(20px, 1.58vw, 36px);
  line-height: 1.22;
  text-align: center;
`;

const ApplicationDescription = styled.p`
  margin: 0;
  color: #2f2f2f;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.95vw, 18px);
  line-height: 1.55;
`;

const SignatureIcon = () => (
  <ApplicationIconSvg
    viewBox="0 0 72 72"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g
      stroke="#2bbf71"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="6" width="36" height="50" rx="2" />
      <path d="M16 15h20M16 22h20M16 29h12" />
      <path d="M14 44l6 6 8-10" />
      <path d="M35 45c2-5 9-12 15-15l4 4c-3 6-10 13-15 15l-5 1z" />
      <path d="M46 30l4 4" />
    </g>
  </ApplicationIconSvg>
);

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
        {/* HERO */}
        <MainBannerContainer>
          <MainBannerImage
            src="/assets/mask-group.png"
            alt="Main banner"
            fill
            priority
            sizes="100vw"
          />
          <HeroCopy>
            <HeroVerticalText>Solutions</HeroVerticalText>
            <HeroTextBlock>
              <HeroKicker>for the</HeroKicker>
              <HeroTitle>Post-Quantum Era</HeroTitle>
            </HeroTextBlock>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <IntroGrid>
              <IntroCopy>
                <IntroTitle>Threats to AI models managed</IntroTitle>

                <div>
                  <IntroLead>
                    01 Quantum offer a suite of cryptography technologies and
                    services designed to protect
                  </IntroLead>
                  <IntroBody>
                    data and communications against both current cyberattacks
                    and future quantum computer threats.
                    <br />
                    Our IronCAP technology is designed in alignment with
                    NIST-approved standards for post-quantum cryptography,
                    reinforcing its credibility and future-readiness.
                  </IntroBody>
                </div>
              </IntroCopy>

              <GraphicWrap>
                <Graphic
                  src="/assets/animated-graphic.svg"
                  alt=""
                  aria-hidden="true"
                  width={579}
                  height={374}
                  priority
                />
              </GraphicWrap>
            </IntroGrid>

            <section id="offerings">
              <OfferingsGrid>
                <OfferingColumn>
                  <OfferingCard>
                    <OfferingCardTitle>
                      IronCap
                      <Trademark>TM</Trademark>
                      <br />
                      Products
                    </OfferingCardTitle>
                  </OfferingCard>

                  <ColumnSummary>
                    From end-to-end quantum-safe email and file encryption to
                    secure remote access, blockchain transactions, and digital
                    signatures, IronCAP secures your data in a post-quantum
                    world.
                  </ColumnSummary>

                  <LearnMore href="/products/ironcap">
                    LEARN MORE
                  </LearnMore>

                  <OfferingList>
                    <OfferingItem>
                      <OfferingItemTitle href="/products/ironcap">
                        IronCAP
                        <Trademark>TM</Trademark> Engine
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Software Toolkit
                      </OfferingItemSubTitle>
                    </OfferingItem>

                    <OfferingItem>
                      <OfferingItemTitle href="/products/ironcap-xmail">
                        IronCAP
                        <Trademark>TM</Trademark> XMail
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Outlook Email Encryption
                      </OfferingItemSubTitle>
                    </OfferingItem>

                    <OfferingItem>
                      <OfferingItemTitle href="/products/ironcap-oncall">
                        IronCAP
                        <Trademark>TM</Trademark> OnCall
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Encrypted Customer Support
                      </OfferingItemSubTitle>
                    </OfferingItem>

                    <OfferingItem>
                      <OfferingItemTitle href="/products/ironcap-intouch">
                        IronCAP
                        <Trademark>TM</Trademark> InTouch
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Encrypted Remote Desktop
                      </OfferingItemSubTitle>
                    </OfferingItem>
                  </OfferingList>
                </OfferingColumn>

                <OfferingColumn>
                  <OfferingCard>
                    <OfferingCardTitle>
                      IronCap
                      <Trademark>TM</Trademark>
                      <br />
                      Services
                    </OfferingCardTitle>
                  </OfferingCard>

                  <ColumnSummary>
                    Professional and managed services securing AI and digital
                    assets via open source cryptography integration and hardware
                    acceleration. <br /> <br />
                  </ColumnSummary>

                  <LearnMore href="/services">
                    LEARN MORE
                  </LearnMore>

                  <OfferingList>
                    <OfferingItem>
                      <OfferingItemTitle href="/services">
                        Quantum AI Wrapper QAW
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        AI Prompt and Model Security
                      </OfferingItemSubTitle>
                    </OfferingItem>

                    <OfferingItem>
                      <OfferingItemTitle href="/services/#da-protection">
                        Digital Asset Protection
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Quantum-safe Digital Assets
                      </OfferingItemSubTitle>
                    </OfferingItem>

                    <OfferingItem>
                      <OfferingItemTitle href="/services/#crypto-services">
                        Cryptographic Integration Services
                      </OfferingItemTitle>
                      <OfferingItemSubTitle>
                        Open-source Integration &amp; Managed Services
                      </OfferingItemSubTitle>
                    </OfferingItem>
                  </OfferingList>
                </OfferingColumn>
              </OfferingsGrid>
            </section>

            <Divider
              src="/assets/divider-down.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />
            <ThreatPanel>
              <ThreatTitle>What is the post-quantum era?</ThreatTitle>
              <ThreatText>
                With the advent of scaled-up quantum computers, critical forms
                of cryptography we have relied on for 40 years fail, exposing
                major investments in AI, digital assets, and day-to-day
                communications. 01 Quantum brings practical experience and
                working products to your solution.
              </ThreatText>
              <ThreatLink href="/quantum-threat">
                READ MORE ON QUANTUM THREAT
              </ThreatLink>
            </ThreatPanel>

            <Divider
              src="/assets/divider-up.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />
          </Inner>

          <ApplicationsSection>
            <ApplicationsInner>
              <ApplicationsTitle>Applications</ApplicationsTitle>

              <ApplicationsGrid>
                <ApplicationCard>
                  <ApplicationIconWrap>
                    <ApplicationIcon
                      src="/assets/Prompts_Icon.png"
                      alt=""
                      aria-hidden="true"
                      width={144}
                      height={144}
                    />
                  </ApplicationIconWrap>
                  <ApplicationTitle>AI prompts and models</ApplicationTitle>
                  <ApplicationDescription>
                    Secure model IP, training data and prompt-privacy with
                    quantum safe encryption.
                  </ApplicationDescription>
                </ApplicationCard>

                <ApplicationCard>
                  <ApplicationIconWrap>
                    <ApplicationIcon
                      src="/assets/Blockchain_Icon.png"
                      alt=""
                      aria-hidden="true"
                      width={144}
                      height={144}
                    />
                  </ApplicationIconWrap>
                  <ApplicationTitle>Blockchain</ApplicationTitle>
                  <ApplicationDescription>
                    Allow blockchain vendors including cryptocurrencies to
                    digitally sign new blocks to ensure security today and in
                    tomorrow&apos;s post-quantum world.
                  </ApplicationDescription>
                </ApplicationCard>

                <ApplicationCard>
                  <ApplicationIconWrap>
                    <ApplicationIcon
                      src="/assets/VPN_Icon.png"
                      alt=""
                      aria-hidden="true"
                      width={144}
                      height={144}
                    />
                  </ApplicationIconWrap>
                  <ApplicationTitle>Remote Access/VPN</ApplicationTitle>
                  <ApplicationDescription>
                    Ensure privacy of remote access channels such as VPNs today
                    and in tomorrow&apos;s post-quantum world.
                  </ApplicationDescription>
                </ApplicationCard>

                <ApplicationCard>
                  <ApplicationIconWrap>
                    <SignatureIcon />
                  </ApplicationIconWrap>
                  <ApplicationTitle>Email/Digital Signature</ApplicationTitle>
                  <ApplicationDescription>
                    Securely encrypt emails and send quantum-safe encrypted
                    files in a post-quantum world.
                  </ApplicationDescription>
                </ApplicationCard>
              </ApplicationsGrid>
            </ApplicationsInner>
          </ApplicationsSection>

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
