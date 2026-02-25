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
  max-width: none;
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
                width={1000}
                height={200} 
              />
            </ThreatPanel>

            <IntroGrid style={{ marginTop: "120px", marginBottom: "120px" }}>
              <IntroCopy>
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

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
