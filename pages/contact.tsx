import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useState } from "react";

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

  @media (max-width: 760px) {
    margin-top: 0;          
    padding-top: 32px;     
    
    &::before {
      top: 0;             
    }
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

  @media (max-width: 760px) {
    padding: 46px 0 72px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
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

  @media (max-width: 760px) {
    justify-items: center; /* centers both columns when stacked */
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 760px) {
    align-items: center;
    text-align: center;
    gap: 44px;
  }
`;

const MethodRow = styled.div`
  display: grid;
  grid-template-columns: 86px 1fr;
  column-gap: 18px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
  }
`;

const IconSlot = styled.div`
  width: 86px;
  height: 82px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`;

const MethodText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 760px) {
    align-items: center;
  }
`;

const MethodValue = styled.div`
  color: ${ACCENT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 35px;
  line-height: 1;
  letter-spacing: 0.01em;

  @media (max-width: 760px) {
    text-align: center;
    font-size: 28px;
  }
`;

const MethodLink = styled(Link)`
  color: ${ACCENT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 35px;
  line-height: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    text-align: center;
    font-size: 28px;
  }
`;

const DeptButtons = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 220px;

  @media (max-width: 980px) {
    width: min(320px, 100%);
  }

  @media (max-width: 760px) {
    margin-left: 0;
    align-items: center;
    width: min(340px, 100%);
  }
`;

const DeptButtonLink = styled.a`
  height: 51px;
  width: 175px;
  border: none;
  padding: 0;

  background: url("/assets/contact-button.png") center / contain no-repeat;

  display: grid;
  place-items: center;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    filter: brightness(1.08);
  }

  @media (max-width: 760px) {
    width: 220px;
  }
`;

const BlockTitle = styled.h3`
  margin: 28px 0 12px;
  color: ${ACCENT_BLUE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.1;
`;

const SmallText = styled.p`
  margin: 10px 0 0;
  color: ${TEXT_WHITE};
  opacity: 0.85;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
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

  @media (max-width: 760px) {
    width: 100%;
    max-width: 520px;
    margin: 0 auto; /* center the panel */
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

  @media (max-width: 760px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
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

const Message = styled.textarea`
  min-height: 220px;
  resize: vertical;
  padding: 14px 16px;

  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);

  background: linear-gradient(
    180deg,
    rgba(25, 40, 55, 0.55),
    rgba(120, 185, 255, 0.45)
  );

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.3;
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

  @media (max-width: 760px) {
    justify-content: center;
  }
`;

const Submit = styled.button`
  height: 38px;
  padding: 0 18px;
  border: 1px solid rgba(113, 191, 255, 0.45);
  background: rgba(10, 15, 24, 0.45);
  color: ${TEXT_WHITE};

  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function Home() {
  const [statusMsg, setStatusMsg] = useState<string>("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMsg("");

    const form = e.currentTarget;

    const firstName = (
      form.elements.namedItem("firstName") as HTMLInputElement
    ).value.trim();
    const lastName = (
      form.elements.namedItem("lastName") as HTMLInputElement
    ).value.trim();
    const title = (
      form.elements.namedItem("title") as HTMLInputElement
    ).value.trim();
    const company = (
      form.elements.namedItem("company") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    if (!firstName) {
      setStatusMsg("Please input your First name.");
      (form.elements.namedItem("firstName") as HTMLInputElement).focus();
      return;
    }
    if (!lastName) {
      setStatusMsg("Please input your Last name.");
      (form.elements.namedItem("lastName") as HTMLInputElement).focus();
      return;
    }
    if (!title) {
      setStatusMsg("Please input your Title.");
      (form.elements.namedItem("title") as HTMLInputElement).focus();
      return;
    }
    if (!email) {
      setStatusMsg("Please input your Email.");
      (form.elements.namedItem("email") as HTMLInputElement).focus();
      return;
    }
    if (!message) {
      setStatusMsg("Please input your Message.");
      (form.elements.namedItem("message") as HTMLTextAreaElement).focus();
      return;
    }

    setIsSending(true);

    const to = "01com@01com.com";
    const subject = `Contact form submission - ${firstName} ${lastName}`;
    const body = [
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Title: ${title}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      "Message: \n",
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    form.reset();
    setStatusMsg("Opening your email client...");
    setIsSending(false);

    window.location.href = mailtoUrl;
  }

  return (
    <Layout>
      <Head>
        <title>Contact | 01com.com</title>
        <meta
          name="description"
          content="We love to hear from our customers or partners. Call or email us with your questions or comments!"
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
            <HeroTitle>Contact</HeroTitle>
            <HeroSubtext>
              We love to hear from our customers or partners. Call or email us
              with your questions or comments!
            </HeroSubtext>
          </HeroCopy>
        </MainBannerContainer>

        <HomeSurface>
          <Inner>
            <ContactSection>
              <ContactGrid>
                {/* LEFT COLUMN */}
                <LeftCol>
                  <MethodRow>
                    <IconSlot>
                      <Image
                        src="/assets/contact-phone.png"
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="86px"
                        style={{ objectFit: "contain" }}
                      />
                    </IconSlot>

                    <MethodText>
                      <MethodValue>1 800 668-2185</MethodValue>
                    </MethodText>
                  </MethodRow>

                  <MethodRow>
                    <IconSlot>
                      <Image
                        src="/assets/contact-chat.png"
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="86px"
                        style={{ objectFit: "contain" }}
                      />
                    </IconSlot>

                    <MethodText>
                      <MethodLink href="/">Live Chat</MethodLink>
                    </MethodText>
                  </MethodRow>

                  <DeptButtons aria-label="Contact departments">
                    <DeptButtonLink href="mailto:sales@ironcap.ca">
                      Sales/VARs
                    </DeptButtonLink>
                    <DeptButtonLink href="mailto:ir@ironcap.ca">
                      Investor Relations
                    </DeptButtonLink>
                    <DeptButtonLink href="mailto:help@ironcap.ca">
                      Technical Support
                    </DeptButtonLink>
                    <DeptButtonLink href="mailto:marketing@ironcap.ca">
                      Marketing
                    </DeptButtonLink>
                    <DeptButtonLink href="mailto:customerservice@ironcap.ca">
                      Customer Service
                    </DeptButtonLink>
                    <DeptButtonLink href="mailto:hr@ironcap.ca">
                      Human Resources
                    </DeptButtonLink>
                  </DeptButtons>

                  <div style={{ marginLeft: "16px" }}>
                    <BlockTitle>01 Quantum</BlockTitle>
                    <SmallText>
                      789 Don Mills Road, Suite #700
                      <br />
                      Toronto, Ontario, M3C 1T5
                      <br />
                      Canada
                    </SmallText>

                    <BlockTitle style={{ marginTop: "48px", fontSize: "20px" }}>
                      Office Hours
                    </BlockTitle>
                    <SmallText>
                      Monday - Friday
                      <br />
                      9am to 6pm EST
                    </SmallText>
                  </div>
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
                    <PanelIntro>
                      Contact us to receive updates, white papers, brochures,
                      articles or to answer specific questions.
                    </PanelIntro>

                    <form onSubmit={handleSubmit}>
                      <Fields>
                        <Field placeholder="First name*" name="firstName" />
                        <Field placeholder="Last name*" name="lastName" />
                        <Field placeholder="Title*" name="title" />
                        <Field placeholder="Company" name="company" />
                        <Field placeholder="Email*" name="email" type="email" />
                        <Field placeholder="Phone" name="phone" />
                        <Message placeholder="Message*" name="message" />
                      </Fields>

                      {statusMsg && (
                        <p style={{ marginTop: 14, display: "block" }}>
                          {statusMsg}
                        </p>
                      )}

                      <SubmitRow>
                        <Submit type="submit" disabled={isSending}>
                          {isSending ? "Opening..." : "Send"}
                        </Submit>
                      </SubmitRow>
                    </form>
                  </PanelContent>
                </FormPanel>
              </ContactGrid>
            </ContactSection>
          </Inner>

          <Footer />
        </HomeSurface>
      </PageRoot>
    </Layout>
  );
}
