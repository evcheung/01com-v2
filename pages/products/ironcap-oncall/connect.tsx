import Layout from "../../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import { useRef } from "react";

export const revalidate = 10;

const PAGE_BG = "#010101";
const HERO_BG = "#010101";
const TEXT_WHITE = "#f4f8ff";

const ACCENT_BLUE = "#71bfff";
const ACCENT_GREEN = "#00cf7d";

/* ===== HERO ===== */

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
  pointer-events: none;
  user-select: none;
`;

const HeroCopy = styled.div`
  position: relative;
  z-index: 2;
  width: min(1120px, 90vw);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
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
  font-size: clamp(56px, 6.6vw, 71px);
  line-height: 0.96;
  letter-spacing: 0.01em;
`;

const HeroSubtext = styled.p`
  margin: 40px 0 0;
  max-width: 980px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: clamp(16px, 1.25vw, 20px);
  line-height: 1.45;
`;

/* ===== PAGE SURFACE ===== */

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
  width: min(1200px, 86vw);
  margin: 0 auto;
`;

const ContactSection = styled.section`
  position: relative;
  padding: 86px 0 120px;

  @media (max-width: 980px) {
    padding: 64px 0 90px;
  }
`;

const ContactGrid = styled.div`
  display: grid;

  /* slightly reduced width */
  grid-template-columns: minmax(360px, 1fr) minmax(520px, 640px);
  gap: 60px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr minmax(480px, 580px);
    gap: 48px;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftCol = styled.div`
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  align-items: flex-start;

  @media (max-width: 980px) {
    align-items: center;
  }
`;

const FormPanel = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;

  padding: 34px 34px 32px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.55);

  @media (max-width: 980px) {
    padding: 26px 18px 24px;
  }
`;

const PanelIntro = styled.p`
  margin: 0 0 22px;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.75;
  max-width: 640px;
`;

const PanelBg = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  opacity: 0.96;
`;

const PanelContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Field = styled.input`
  height: 46px;
  padding: 0 16px;

  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);

  background: linear-gradient(
    90deg,
    rgba(25, 40, 55, 0.62),
    rgba(120, 185, 255, 0.38)
  );

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 22px;
  outline: none;

  &::placeholder {
    color: rgba(244, 248, 255, 0.9);
  }

  &:focus {
    border-color: rgba(113, 191, 255, 0.65);
    box-shadow: 0 0 0 2px rgba(113, 191, 255, 0.16);
  }
`;

const SubmitRow = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
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

const OnCallBody = styled.p`
  margin: 0;
  color: #e6eefb;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 22px;
  line-height: 2;
  max-width: 1920px;
`;

const SubNavRow = styled.nav`
  width: 100%;
  margin: 60px 0 90px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: 820px) {
    flex-wrap: wrap;
    row-gap: 14px;
    column-gap: 18px;
  }
`;

const SubNavLink = styled(Link)`
  color: ${ACCENT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const SubNavDivider = styled(Image)`
  flex: 0 0 auto;
  opacity: 0.75;
  display: block;

  @media (max-width: 820px) {
    display: none;
  }
`;

const LeftText = styled.div`
  max-width: 540px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 26px;
  line-height: 1.8;
  margin-top: 48px;

  text-align: left;

  @media (max-width: 980px) {
    max-width: 100%;
    text-align: center;
  }
`;

const GoButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.05);
  }
`;

export default function Home() {
  const sessionRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = sessionRef.current;
    const ses_id = (input?.value ?? "").trim();

    if (!ses_id) {
      alert("Please input your Session code.");
      input?.focus();
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const body = `todo=CHECK_SES_ID&ses_id=${encodeURIComponent(ses_id)}`;

      const res = await fetch("/proxy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body,
        cache: "no-store",
        signal: controller.signal,
      });

      const content = await res.text();

      let status: number | string = 100;

      if (content.substr(0, 9) === "RSSTATUS=") {
        status = content.substr(9);
        const statusNum = Number(status);

        if (!Number.isNaN(statusNum) && statusNum < 6) {
          if (input) input.value = "";

          const chatwin = window.open(
            `https://imoncall.01com.com/go/connect.php?ses_id=${encodeURIComponent(
              ses_id,
            )}`,
            "Chat",
            "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,resizable=yes,scrollbars=1,width=452,height=796",
          );
          chatwin?.focus();
          return;
        }
      }
      const s = Number(status);
      if (s === 6) {
        alert(
          "All links and the Session Code provided to you are no longer valid. Contact your technical support person if you decide to authorize remote access to your computer.",
        );
      } else if (s === 7) {
        alert(
          "All links and the Session Code provided to you have expired. Contact your technical support person to request a new remote support session.",
        );
      } else if (s === 8) {
        alert(
          "All links and the Session Code provided to you are inactive. Contact your technical support person to request a new remote support session.",
        );
      } else {
        alert(
          "The Session Code you entered is invalid. Re-enter the Session Code or contact your technical support person to request a new remote support session.",
        );
      }
    } catch {
      alert("Request timed out or failed. Please try again.");
    } finally {
      clearTimeout(timeout);
    }
  };
  {
    return (
      <Layout>
        <Head>
          <title>IronCAP™ OnCall | 01 Quantum</title>
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
              <HeroTitle>IronCAP™ OnCall</HeroTitle>
            </HeroCopy>
          </MainBannerContainer>

          <HomeSurface>
            <Inner>
              <ContactSection>
                <ContactGrid>
                  {/* LEFT COLUMN */}
                  <LeftCol>
                    <LeftText>
                      Enter the Session Code provided to you and click Go.
                      <br />
                      <br />
                    </LeftText>
                  </LeftCol>

                  {/* RIGHT COLUMN */}
                  <FormPanel>
                    <PanelBg
                      src="/assets/big-side-panel.png"
                      alt=""
                      aria-hidden="true"
                      fill
                      priority={false}
                    />

                    <PanelContent>
                      <PanelIntro>Connect to an Agent</PanelIntro>

                      <form onSubmit={handleSubmit}>
                        <Fields>
                          <Field
                            placeholder="Session Code"
                            name="sessionCode"
                            ref={sessionRef}
                          />
                        </Fields>

                        <SubmitRow>
                          <GoButton type="submit">
                            <Image
                              src="/assets/go-button.png"
                              alt="Go"
                              width={151}
                              height={50.83}
                              priority={false}
                            />
                          </GoButton>
                        </SubmitRow>
                      </form>
                    </PanelContent>
                  </FormPanel>
                </ContactGrid>
              </ContactSection>

              <IntroGrid style={{ marginBottom: "60px" }}>
                <IntroCopy>
                  <OnCallBody
                    style={{ marginTop: "-24px", marginBottom: "64px" }}
                  >
                    With your permission, a{" "}
                    <span style={{ textDecoration: "underline" }}>
                      temporary session
                    </span>{" "}
                    will set up for the agent to remotely control your computer.
                    You may terminate the session any time. Once terminated,
                    everything regarding this support session will be erased
                    leaving no trace to ensure security and privacy. <br />{" "}
                    <br />
                    During this remote support session, you may also have{" "}
                    <span style={{ textDecoration: "underline" }}>
                      real-time
                    </span>{" "}
                    chats with the agent. Chat logs can be saved for future
                    references. (Chat session will be displayed once you have
                    typed in your session code and authorized the connection.)
                    <br /> <br />
                  </OnCallBody>
                </IntroCopy>
              </IntroGrid>

              <SubNavRow aria-label="IronCAP OnCall links">
                <SubNavLink href="/ironcap-oncall/about">
                  About IronCAP OnCall
                </SubNavLink>
                <SubNavDivider
                  src="/assets/divider-line.png"
                  alt=""
                  aria-hidden="true"
                  width={1}
                  height={30}
                />

                <SubNavLink href="/ironcap-oncall/application">
                  Application
                </SubNavLink>
                <SubNavDivider
                  src="/assets/divider-line.png"
                  alt=""
                  aria-hidden="true"
                  width={1}
                  height={30}
                />

                <SubNavLink href="/ironcap-oncall/press-room">
                  Press Room
                </SubNavLink>
                <SubNavDivider
                  src="/assets/divider-line.png"
                  alt=""
                  aria-hidden="true"
                  width={1}
                  height={30}
                />

                <SubNavLink href="/ironcap-oncall/security">
                  Security
                </SubNavLink>
              </SubNavRow>
            </Inner>

            <Footer />
          </HomeSurface>
        </PageRoot>
      </Layout>
    );
  }
}
