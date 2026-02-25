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
  overflow: visible;
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
  width: min(1320px, 90vw);
  margin: 0 auto;
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 64px;
  align-items: start;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SidePanelWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 24px;

  @media screen and (max-width: 1020px) {
    justify-content: center;
    padding-right: 0;
  }
`;

const SidePanel = styled.div`
  position: relative;
  width: min(520px, 100%);
`;

const PanelBase = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const PanelTop = styled(Image)`
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: auto;
  pointer-events: none;
`;

const PanelBottom = styled(Image)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: auto;
  pointer-events: none;
`;

const PanelContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
`;

const PanelHeading = styled.h3`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 82%;
  margin: 0;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
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

const IntroLogo = styled(Image)`
  width: min(460px, 100%);
  height: auto;
  display: block;
`;

const IntroParagraph = styled.p`
  margin: 0;
  color: ${TEXT_BODY};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 0.92vw, 17px);
  line-height: 1.62;
`;

const LeadInline = styled.span`
  color: ${TEXT_BLUE};
  font-weight: 300;
  font-size: 33px;
  line-height: 1.2;
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

const OfferingColumn = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  row-gap: 16px;
  align-content: start;
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
  align-self: start;
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
  margin-left: 156px;
`;

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
                  src="/assets/iron-cap-logo.png"
                  alt="IronCAP End-to-End Email Security"
                  width={420}
                  height={120}
                  priority
                />

                <div>
                  <IntroParagraph>
                    <LeadInline>
                      IronCAP<Trademark>TM</Trademark> Engine
                    </LeadInline>{" "}
                    is a post-quantum cryptography (PQC) technology that is safe
                    against cyberattacks from classical computers as well as
                    future attacks from quantum computers which have excessive
                    computational power.
                    <br />
                    <br />
                    By implementing both NIST-approved PQC algorithms as well as
                    our own patent-protected quantum-safe technology, IronCAP
                    Toolkits is designed to be used in all kinds of vertical
                    solutions such as digital identity, email security, remote
                    access, cloud storage, IoT, blockchain, financial
                    transactions, etc.
                    <br />
                    <br />
                    IronCAP Cryptography (ICC) is a collection of post-quantum
                    cryptographic (PQC) technologies, comprising of technologies
                    from NIST, as well as our patented, high performance
                    implementation of the Classic McEliece algorithm useful for
                    highly scaled enviroments. (US Patent No. 11,271,715).
                    IronCAP is closely following the PQC standardization
                    development at the Computer Resource Center (CSRC) of the
                    National Institute of Standards and Technology (NIST).
                    <br />
                    <br />
                    IronCAP is being updated continuously to stay current with
                    the latest PQC standardization development at the NIST. In
                    addition, IronCAP supports Modern McEliece, our patented
                    invention (US Patent No. 11,271,715). Staying at the leading
                    edge of PQC, IronCAP’s Modern McEliece is a forward-thinking
                    key encapsulation mechanism developed in parallel to NIST’s
                    evaluation of code-based technology throughout the selection
                    process. Modern McEliece is an enhanced version of Classic
                    McEliece with optimization of key size and performance,
                    offering improved security over Classic McEliece.
                  </IntroParagraph>
                </div>
              </IntroCopy>

              <SidePanelWrap>
                <SidePanel>
                  <PanelBase
                    src="/assets/container-box-ironcap.png"
                    alt=""
                    aria-hidden="true"
                    width={520}
                    height={620}
                    priority
                  />

                  <PanelTop
                    src="/assets/top-rectangle.png"
                    alt=""
                    aria-hidden="true"
                    width={416}
                    height={90}
                    priority
                  />

                  <PanelBottom
                    src="/assets/bottom-rectangle.png"
                    alt=""
                    aria-hidden="true"
                    width={416}
                    height={196}
                    priority
                  />
                  <PanelContent>
                    <PanelHeading>
                      IronCAP included PQC technologies from NIST
                    </PanelHeading>

                    <TopRectContent>
                      <PanelCardTop>
                        <CardTitle>Digital signature mechanisms</CardTitle>
                        <CardList>
                          <li>ML-DSA (FIPS 204)</li>
                          <li>SLH-DSA (FIPS 205)</li>
                          <li>Falcon2</li>
                        </CardList>
                      </PanelCardTop>
                    </TopRectContent>

                    <BottomRectContent>
                      <PanelCardBottom>
                        <CardTitle>
                          Key encapsulation mechanisms (KEM)
                        </CardTitle>
                        <CardList>
                          <li>ML-KEM (FIPS 203)</li> <br />
                          <li>Classic McEliece3</li>
                        </CardList>
                      </PanelCardBottom>
                    </BottomRectContent>
                  </PanelContent>
                </SidePanel>
              </SidePanelWrap>
            </IntroGrid>

            <div style={{ marginTop: "60px", textAlign: "center" }}>
              <Link href="/use-cases">
                <Image
                  src="/assets/wp-button.png"
                  alt="White Paper"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

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
                  Like most adversaries, quantum attacks will occur when we are
                  least prepared.
                </ThreatText>

                <ThreatTitle>
                  Armed with IronCAP solutions and services,
                  <span style={{ color: TEXT_WHITE }}>
                    {" "}
                    customers today are safeguarding data and guarding against
                    any unexpected quantum attacks in the future.
                  </span>
                </ThreatTitle>
              </ThreatContent>
            </ThreatPanel>

            <Divider
              src="/assets/divider-up.png"
              alt=""
              aria-hidden="true"
              width={1120}
              height={23}
            />

            <ColumnTitle>Key Advantages</ColumnTitle>

            <OfferingsGrid>
              {/* LEFT COLUMN */}
              <OfferingColumn>
                <OfferingList>
                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/compliant.svg"
                      alt=""
                      aria-hidden="true"
                      width={61}
                      height={74}
                      priority
                    />
                    <AdvantageTitle>Standard Compliant</AdvantageTitle>
                    <AdvantageDesc>
                      Protection with state-of-the-art cryptographic
                      technologies standardized through the rigorous selection
                      process by NIST. Readily integrate through standard
                      interfaces such as PKCS#11 and OpenPGP (RFC4880).
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/star.svg"
                      alt=""
                      aria-hidden="true"
                      width={65}
                      height={65}
                    />
                    <AdvantageTitle>Credible</AdvantageTitle>
                    <AdvantageDesc>
                      Elevate from today’s proven best-in-class code-based
                      cryptography theory and NIST-selected mechanisms.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/quantum-safe.png" // lock/magnifier
                      alt=""
                      aria-hidden="true"
                      width={55}
                      height={71}
                    />
                    <AdvantageTitle>Quantum Safe</AdvantageTitle>
                    <AdvantageDesc>
                      Guard against future attacks from quantum computers.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/quick-easy.svg" // click/hand
                      alt=""
                      aria-hidden="true"
                      width={65}
                      height={76}
                    />
                    <AdvantageTitle>Quick &amp; Easy Setup</AdvantageTitle>
                    <AdvantageDesc>
                      IronCAP X will automatically detect if your email
                      recipient has an IronCAP X account. If not, an invitation
                      message with the link to install the software will be sent
                      accordingly.
                    </AdvantageDesc>
                  </AdvantageItem>
                </OfferingList>
              </OfferingColumn>

              {/* RIGHT COLUMN */}
              <OfferingColumn>
                <OfferingList>
                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/curve.svg"
                      alt=""
                      aria-hidden="true"
                      width={70}
                      height={71}
                    />
                    <AdvantageTitle>Zero Learning Curve</AdvantageTitle>
                    <AdvantageDesc>
                      IronCAP X integrates with your everyday email client
                      (Outlook, Gmail, etc.) to ensure a zero learning curve.
                      Encrypt and digitally sign with a simple click.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/versatile.svg"
                      alt=""
                      aria-hidden="true"
                      width={62}
                      height={64}
                    />
                    <AdvantageTitle>Versatile</AdvantageTitle>
                    <AdvantageDesc>
                      Broadly applicable across vertical applications such as
                      Email encryption, File encryption, Digital signature,
                      Blockchain security, Remote access/VPN, Cloud storage,
                      Credit card security, etc.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/practical.svg"
                      alt=""
                      aria-hidden="true"
                      width={72}
                      height={58}
                    />
                    <AdvantageTitle>Practical</AdvantageTitle>
                    <AdvantageDesc>
                      Applicable in today’s conventional devices while safe
                      against future quantum computers.
                    </AdvantageDesc>
                  </AdvantageItem>

                  <AdvantageItem>
                    <AdvantageIcon
                      src="/assets/efficient.svg"
                      alt=""
                      aria-hidden="true"
                      width={83}
                      height={71}
                    />
                    <AdvantageTitle>Efficient</AdvantageTitle>
                    <AdvantageDesc>
                      Quick and efficient encryption/decryption/key-generation
                      processes. Our implementation takes advantage of modern
                      CPU capabilities to maximize throughput.
                    </AdvantageDesc>
                  </AdvantageItem>
                </OfferingList>
              </OfferingColumn>
            </OfferingsGrid>

            <div
              style={{
                marginTop: "60px",
                marginBottom: "60px",
                textAlign: "center",
              }}
            >
              <Link href="https://01com.com/pdf/brochures/IronCAP%20Brochure%20Digital.pdf" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/brochure-button.png"
                  alt="Brochure"
                  width={180}
                  height={40}
                  style={{ marginTop: "40px", marginBottom: "40px" }}
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
