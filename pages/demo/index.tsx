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

const ACCENT_BLUE = "#71bfff";
const ACCENT_GREEN = "#00cf7d";

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

/* ===== CONTACT SECTION (matches screenshot) ===== */

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
  width: 588px;
  height: 645px;

  border-radius: 18px;
  overflow: hidden;

  padding: 34px 34px 32px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 70px rgba(0, 0, 0, 0.55);

  @media (max-width: 980px) {
    width: min(588px, 92vw);
    height: auto;
    padding: 26px 18px 24px;
  }
`;

const PanelIntro = styled.p`
  margin: 0 0 18px;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.2;
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
  display: flex;
  flex-direction: column;
  transform: translateY(-16px) translateX(8px);
`;

const LeftText = styled.div`
  max-width: 720px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  margin-top: 48px;

  text-align: left;

  @media (max-width: 1020px) {
    max-width: 100%;
    text-align: center;
  }
`;

const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`;

const AuthTitle = styled.h4`
  margin: 22px 0 10px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 1.2;

  text-align: left;
`;

const AuthButton = styled.a`
  width: 480px;
  height: 77px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 26px 0 22px;

  border: none;
  background: url("/assets/demo-rect.png") center / 100% 100% no-repeat;

  color: ${TEXT_WHITE};
  text-decoration: none;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 1;

  cursor: pointer;
  transition:
    transform 160ms ease,
    filter 160ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.06);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(1.02);
  }

  @media (max-width: 980px) {
    width: min(457px, 92vw);
  }
`;

const AuthLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 18px;
`;

const AuthIcon = styled.span<{ $w: number; $h: number }>`
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  position: relative;
  display: inline-block;
  flex: 0 0 auto;
`;

const AuthChevron = styled.span`
  width: 22px;
  height: 22px;
  position: relative;
  display: inline-block;
  opacity: 0.95;
  flex: 0 0 auto;
`;

const AuthDividerSpace = styled.div`
  height: 14px;
`;

const InfoSection = styled.section`
  margin-top: 0;
  padding-bottom: 120px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;

  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const InfoCol = styled.div<{ $offset?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 70px;

  ${(p) => p.$offset && `margin-top: -396px;`}

  @media (max-width: 980px) {
    margin-top: 0;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const InfoHeading = styled.h3`
  margin: 0;
  color: ${ACCENT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 30px;
`;

const InfoList = styled.ul`
  margin: 0;
  padding-left: 18px;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.65;

  li {
    margin-bottom: 6px;
  }
`;

const DisclaimerSection = styled.section`
  width: 100vw;
  max-width: 1920px;
  margin-left: calc(50% - 50vw);
  margin-bottom: 160px;
  background: ${PAGE_BG};
`;

const DisclaimerInner = styled.div`
  width: min(1200px, 86vw);
  margin: 0 auto;
`;

const DisclaimerTitle = styled.h4`
  margin: 0 0 18px;
  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.95;
`;

const DisclaimerText = styled.p`
  margin: 0;
  color: rgba(244, 248, 255, 0.9);
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.8;
  max-width: 1150px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>IronCAP™ Live Demo | 01 Quantum</title>
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
            <HeroTitle>IronCAP™ Live Demo</HeroTitle>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <ContactSection>
              <ContactGrid>
                <LeftCol>
                  <LeftText>
                    IronCAP™ is our latest innovation for the post-quantum
                    cybersecurity. This patent-protected, post-quantum
                    cryptographic system is based on the Goppa Code-based
                    cryptographic technology. It has embedded our proprietary
                    subclass of (L, G) making it not only more secured but also
                    has faster cryptographic operations (key generation,
                    encryption, decryption) than the traditional Goppa
                    Code-based technology (McEliece). We are offering a live
                    demonstration for the general public to try and experience
                    the strength of IronCAP™ post-quantum encryption easily.
                    <br />
                    <br />
                  </LeftText>
                </LeftCol>

                <FormPanel>
                  <PanelBg
                    src="/assets/big-demo.png"
                    alt=""
                    aria-hidden="true"
                    fill
                    priority={false}
                  />

                  <PanelContent>
                    <PanelIntro>Registration</PanelIntro>

                    <AuthBlock>
                      <AuthButton href="#" aria-label="Continue with Facebook">
                        <AuthLeft>
                          <AuthIcon $w={32} $h={32}>
                            <Image
                              src="/assets/icon-fb.png"
                              alt=""
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </AuthIcon>
                          <span>Continue with Facebook</span>
                        </AuthLeft>

                        <AuthChevron>
                          <Image
                            src="/assets/>.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </AuthChevron>
                      </AuthButton>

                      <AuthButton href="#" aria-label="Continue with Google">
                        <AuthLeft>
                          <AuthIcon $w={26} $h={26}>
                            <Image
                              src="/assets/icon-google.png"
                              alt=""
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </AuthIcon>
                          <span>Continue with Google</span>
                        </AuthLeft>

                        <AuthChevron>
                          <Image
                            src="/assets/>.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </AuthChevron>
                      </AuthButton>

                      <AuthDividerSpace />

                      <AuthTitle>Already Registered?</AuthTitle>

                      <AuthButton href="#" aria-label="Login with Facebook">
                        <AuthLeft>
                          <AuthIcon $w={32} $h={32}>
                            <Image
                              src="/assets/icon-fb.png"
                              alt=""
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </AuthIcon>
                          <span>Login with Facebook</span>
                        </AuthLeft>

                        <AuthChevron>
                          <Image
                            src="/assets/>.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </AuthChevron>
                      </AuthButton>

                      <AuthButton href="#" aria-label="Login with Google">
                        <AuthLeft>
                          <AuthIcon $w={26} $h={26}>
                            <Image
                              src="/assets/icon-google.png"
                              alt=""
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </AuthIcon>
                          <span>Login with Google</span>
                        </AuthLeft>

                        <AuthChevron>
                          <Image
                            src="/assets/>.png"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </AuthChevron>
                      </AuthButton>
                    </AuthBlock>
                  </PanelContent>
                </FormPanel>
              </ContactGrid>
            </ContactSection>

            <InfoSection>
              <InfoGrid>
                <InfoCol $offset>
                  <InfoBlock>
                    <InfoHeading>Eligibility</InfoHeading>
                    <InfoList>
                      <li>Anyone with a Facebook or Google account</li>
                      <li>Any country</li>
                      <li>
                        You need to agree to the official Rules, Terms &
                        Conditions as set forth in the signup process.
                      </li>
                    </InfoList>
                  </InfoBlock>

                  <InfoBlock>
                    <InfoHeading>How it Works</InfoHeading>
                    <InfoList>
                      <li>Register an account</li>
                      <li>Login to the account</li>
                      <li>Try the IronCAP™ encryption/decryption</li>
                    </InfoList>
                  </InfoBlock>

                  <InfoBlock>
                    <InfoHeading>Notes</InfoHeading>
                    <InfoList>
                      <li>Each demo account has a different set of keys</li>
                      <li>
                        Files you have encrypted can ONLY be decrypted in your
                        account
                      </li>
                    </InfoList>
                  </InfoBlock>
                </InfoCol>

                <InfoCol style={{ marginTop: "-40px" }}>
                  <InfoBlock>
                    <InfoHeading>Try IronCAP™ Encryption</InfoHeading>
                    <InfoList>
                      <li>Upload any file (Max: 2MB) to be encrypted</li>
                      <li>Click “Encrypt” to encrypt the uploaded file</li>
                      <li>The encrypted file will be downloaded</li>
                    </InfoList>
                  </InfoBlock>

                  <InfoBlock>
                    <InfoHeading>Try IronCAP™ Decryption</InfoHeading>
                    <InfoList>
                      <li>Upload any file previously encrypted by IronCAP™</li>
                      <li>Click “Decrypt” to decrypt the uploaded file</li>
                      <li>
                        The decrypted file will be downloaded (files not
                        encrypted by IronCAP™ will fail to decrypt)
                      </li>
                    </InfoList>
                  </InfoBlock>
                </InfoCol>
              </InfoGrid>
            </InfoSection>

            <DisclaimerSection>
              <DisclaimerInner>
                <DisclaimerTitle>Disclaimer</DisclaimerTitle>
                <DisclaimerText>
                  The IronCAP™ Live Demo Agreement, as amended from time to time
                  (the “Agreement”), applies when you access or use the Live
                  Demo under this Agreement. In consideration for us providing
                  you with access to the IronCAP™ Live Demo (Demo), you agree
                  that this Agreement and any other applicable agreements will
                  govern all matters pertaining to your Demo account with 01
                  Quantum (the Company). You also agree to comply with all
                  instructions we may give you in connection with accessing and
                  using the Demo. The Company reserves the right, in its sole
                  discretion, to suspend or cancel your access to the Demo
                  without giving you notice if we believe you are: (a) violating
                  the IronCAP™ Live Demo Agreement; (b) tampering or attempting
                  to tamper with the operation of the Demo or the Company’s
                  websites; (c) using it inappropriately or if there is unusual
                  activity in or relating to your Live Demo Account; (d)
                  violating the terms of service, conditions of use and/or
                  general rules or guidelines of any of the Company’s property
                  or service; and/or (e) acting with the intent to annoy, abuse,
                  threaten or harass any other person. Not all of the same
                  functionality or features are accessible or available for the
                  Live Demo accounts as may be available for active IronCAP™
                  business account. The Company may modify the functionalities
                  and services without giving notice to you. In no event will
                  we, or our affiliates, be liable to you or others for any
                  damages, direct, indirect, consequential or special,
                  including, without limitation, losses, costs, expenses, loss
                  of profits or loss of business revenues out of the existence,
                  furnishing, or functioning of the Demo, or any act or omission
                  in connection with you accessing the Demo and the Company’s
                  websites.
                </DisclaimerText>
              </DisclaimerInner>
            </DisclaimerSection>
          </Inner>

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
