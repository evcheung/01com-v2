import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FooterNav } from "../components/FooterNav";

export const revalidate = 10;

const PAGE_BG = "#010101";
const HERO_BG = "#010101";
const TEXT_WHITE = "#f4f8ff";
const TEXT_BODY = "#e6eefb";
const TEXT_BLUE = "#4db1ff";
const TEXT_GREEN = "#00cf7d";

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

  @media (max-width: 760px) {
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.65;
  }
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

  @media (max-width: 760px) {
    margin-top: 0;
    padding-top: 20px;

    overflow: visible;

    &::before {
      top: 0;
    }
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
    top: 0;
    bottom: 80px;
    transform: translateX(-50%);

    width: 37px;
    height: auto;

    background: url("/assets/long-dividey.png") center / contain no-repeat;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 56px;
    column-gap: 0;
    justify-items: center;
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

const OfferingColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  @media (max-width: 1020px) {
    align-items: center;
  }
`;

const OfferingList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;
  align-self: stretch;

  @media (max-width: 1020px) {
    align-self: center;
    align-items: center;
    width: 100%;
  }
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

  @media (max-width: 760px) {
    margin-top: 34px;
  }
`;

const ThreatBgImage = styled(Image)`
  width: 1220px;
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  pointer-events: none;
  user-select: none;

  @media (max-width: 760px) {
    display: none;
  }
`;

const ThreatContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 34px 60px;

  @media (max-width: 760px) {
    position: relative;
    inset: auto;
    padding: 0;
    margin-top: 24px;
  }
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

const OnCallHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
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

  @media (max-width: 760px) {
    font-size: 34px;
    line-height: 1.1;
  }
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
  max-width: none;
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

  @media (max-width: 760px) {
    justify-content: center;
    gap: 18px;
    text-align: center;
  }
`;

const GreenItem = styled.span`
  white-space: nowrap;
`;

const InTouchSubHead = styled.p`
  margin: 8px 0 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 30px;
  line-height: 2;
`;

const AdvantageItem = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 460px;

  @media (max-width: 1020px) {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
`;

const AdvantageIcon = styled(Image)`
  object-fit: contain;
  display: block;
  margin: 0 auto 18px;

  @media (max-width: 1020px) {
    margin: 0 auto 14px;
  }
`;

const AdvantageTitle = styled.p`
  margin-bottom: 8px;
  color: ${TEXT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.2;

  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 1020px) {
    text-align: center;
  }
`;

const AdvantageDesc = styled.p`
  margin: 0;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  max-width: 420px;

  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 1020px) {
    text-align: center;
    max-width: 520px;
  }
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
        </MainBannerContainer>

        <HomeSurface>
          <Inner style={{ marginTop: "-150px"}}>
            <IntroGrid>
              <IntroCopy>
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
                  IronCAP™ (Quantum) AI Wrapper [QAW] is a cutting-edge security
                  architecture designed to bridge the gap between
                  high-performance AI and "Hard Security and Privacy." Developed
                  by 01 Quantum, QAW applies either a complete software-based
                  approach to Fully Homomorphic Encryption (FHE) or leverages
                  hybrid processing by combining  FHE with Trusted Execution
                  Environments (TEEs) AKA hardware enclaves to ensure your data
                  remains encrypted even while being processed. <br /> <br />
                  Whether a software or hybrid FHE solution, 01 Quantum
                  future-proofs the critical key management functions in FHE
                  using post-quantum key generation and exchange.
                  <br /> <br />
                </OnCallBody>
              </IntroCopy>
            </IntroGrid>

            <ColumnTitle>Key Advantages</ColumnTitle>
            <OfferingsGridDivided>
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
            </OfferingsGridDivided>
          </Inner>

          <FooterNav />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
