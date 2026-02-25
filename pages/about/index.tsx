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

  grid-template-areas:
    "copy panel"
    "ext  ext";

  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 36px;
    grid-template-areas:
      "copy"
      "panel"
      "ext";
  }
`;

const IntroCopy = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SidePanelWrap = styled.div`
  grid-area: panel;
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

const PanelCard = styled.div`
  width: 100%;
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
  line-height: 2;
`;

const IntroParagraphExt = styled(IntroParagraph)`
  margin-top: -52px;
  grid-area: ext;
  max-width: none;
`;

const LeadInline = styled.span`
  color: ${TEXT_BLUE};
  font-weight: 300;
  font-size: 33px;
  line-height: 1.2;
`;

const ColumnTitle = styled(Link)`
  display: block;
  margin: 100px 0 120px;
  text-align: center;
  color: ${TEXT_GREEN};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 200;
  font-size: 44px;
  line-height: 1.12;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 760px) {
    font-size: 34px;
  }
`;

const ResourcesSection = styled.section`
  width: min(1020px, 90vw);
  margin: 120px auto 120px;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: start;
  column-gap: 48px;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`;

const ResourcesCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ResourcesTitle = styled.h2`
  margin: 0 0 18px;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 37px;
`;

const ResourcesLink = styled(Link)`
  color: ${TEXT_GREEN};
  font-size: 24px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ResourcesMeta = styled.p`
  margin: 4px 0 0;
  font-size: 16px;
  color: ${TEXT_WHITE};
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
            <HeroTitle>About</HeroTitle>
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
                    <LeadInline>01 Quantum Inc.,</LeadInline> 01 Quantum
                    Inc.,formerly 01 Communique Laboratory Inc., has developed
                    advanced post‑quantum cryptographic (PQC) technology to
                    protect digital systems against the growing threat of
                    quantum computers. It’s patented IronCAP™ and patent-pending
                    technologies are designed to provide long‑term resilience
                    against quantum‑enabled attacks. By integrating these
                    technologies into applications such as AI platforms, remote
                    access systems, email and digital‑asset platforms, the
                    Company is delivering practical, quantum‑safe solutions that
                    can be deployed today. <br /> <br />
                    Quantum computers have the potential to process information
                    at exponentially faster rates than existing classical
                    computers. This capability threatens current encryption
                    methods, particularly public key encryption, as it could
                    potentially render them insecure and vulnerable to hacking.
                    <br /> <br />
                  </IntroParagraph>
                </div>
              </IntroCopy>

              <SidePanelWrap>
                <SidePanel>
                  <PanelBase
                    src="/assets/qday.png"
                    alt=""
                    aria-hidden="true"
                    width={436}
                    height={436}
                    priority
                  />
                </SidePanel>
              </SidePanelWrap>

              <IntroParagraphExt>
                Q‑Day is the anticipated moment when quantum computers become
                powerful enough to break the public‑key cryptography systems
                that currently secure the world’s digital communications and
                data. In particular, it refers to the point at which quantum
                algorithms, most notably Shor’s algorithm, can efficiently crack
                widely used encryption schemes such as RSA, and elliptic‑curve
                cryptography (ECC).
                <br /> <br />
                In response to this emerging threat, the Company has made a
                significant investment in researching and developing disruptive
                cybersecurity technology. As a result, it has created and is
                commercializing products that incorporate its patented IronCAP
                technology.
                <br /> <br />
              </IntroParagraphExt>
            </IntroGrid>

            <ResourcesSection>
              <ResourcesGrid>
                {/* Column 1 */}
                <ResourcesCol>
                  <ResourcesTitle id="downloads">Downloads</ResourcesTitle>

                  <div>
                    <ResourcesLink href="https://ironcap.ca/ironcap-x/personal">IronCAP X™</ResourcesLink>
                    <ResourcesMeta>FREE personal usage</ResourcesMeta>
                  </div>

                  <div>
                    <ResourcesLink href="https://www.ironcap.ca/ironcap-x/business/">IronCAP X</ResourcesLink>
                    <ResourcesMeta>Business usage</ResourcesMeta>
                  </div>
                </ResourcesCol>

                <Image
                  src="/assets/vert-dividey.png"
                  alt=""
                  aria-hidden="true"
                  width={37}
                  height={285}
                />

                {/* Column 2 */}
                <ResourcesCol>
                  <ResourcesTitle>User Guides</ResourcesTitle>

                  <div>
                    <ResourcesLink href="https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X/Welcome_to_IronCap_X.htm">IronCAP X</ResourcesLink>
                    <ResourcesMeta>FREE personal usage</ResourcesMeta>
                  </div>

                  <div>
                    <ResourcesLink href="https://www.01com.com/01com/ironcap-x/webhelp/index.htm#t=IronCAP_X/Welcome_to_IronCap_X.htm">IronCAP X</ResourcesLink>
                    <ResourcesMeta>Business usage</ResourcesMeta>
                  </div>

                  <ResourcesLink href="https://youtu.be/iKSD8MYShsY">IronCAP X Tutorial</ResourcesLink>
                </ResourcesCol>

                <Image
                  src="/assets/vert-dividey.png"
                  alt=""
                  aria-hidden="true"
                  width={37}
                  height={285}
                />

                {/* Column 3 */}
                <ResourcesCol>
                  <ResourcesTitle>FAQs</ResourcesTitle>

                  <ResourcesLink href="https://www.ironcap.ca/ironcap-x/faq">IronCAP X</ResourcesLink>

                  <div>
                    <ResourcesLink href="/">IronCAP Key</ResourcesLink>
                    <ResourcesMeta>Coming soon</ResourcesMeta>
                  </div>

                  <ResourcesLink href="https://www.ironcap.ca/ironcap-toolkits/faq">IronCAP Toolkits</ResourcesLink>
                </ResourcesCol>
              </ResourcesGrid>
            </ResourcesSection>

            <ColumnTitle href="/investor-relations">Press Release & News</ColumnTitle>
          </Inner>

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
