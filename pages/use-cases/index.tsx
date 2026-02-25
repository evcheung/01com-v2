import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../../components/Footer";

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

const Divider = styled(Image)`
  width: min(1120px, 90vw);
  height: auto;
  display: block;
  margin: 56px auto 0;
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

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
