import Layout, { LayoutVariants } from "../components/Layout";
import Head from "next/head";
import { Text, TextVariants } from "../components/core";
import styled from "styled-components";
import { PageContentContainer } from "../components/PageContentContainer";
import Link from "next/link";

const StyledText = styled(Text)`
  margin-bottom: 48px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default function Support() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Terms of Use">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta
          name="description"
          content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>
          The I'm InTouch, I'm OnCall, and I'm InTouch Meeting{" "}
          <StyledLink target="_blank" href="/imintouch-remote-pc-desktop">
            remote access services
          </StyledLink>{" "}
          are subject to these{" "}
          <StyledLink
            target="_blank"
            href="https://www.01com.com/pdf/Terms_of_Service.pdf"
          >
            Terms of Service (PDF).
          </StyledLink>
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          To continue using the I'm InTouch, I'm OnCall, or I'm InTouch Meeting
          remote access service after the free trial period, you must subscribe
          to the service:
        </StyledText>
        <StyledText variant={TextVariants.Body1}>
          <ol>
            <li>
              Login to your online account at{" "}
              <StyledLink target="_blank" href="/imintouch-remote-pc-desktop">
                I'm InTouch
              </StyledLink>
              ,{" "}
              <StyledLink target="_blank" href="https://www.01com.com/imoncall-remote-help-desk/faqs/">
                I'm OnCall
              </StyledLink>
              , or{" "}
              <StyledLink target="_blank" href="/imintouch-remote-pc-desktop">
                I'm InTouch Meeting
              </StyledLink>
            </li>
            <li>Click on the "Buy Now" link to reach the billing page.</li>
            <li>
              If you want to keep the same amount of licenses you used during
              the trial, simply enter your credit card information, press I
              Accept to proceed with the purchase. Otherwise, click on the
              Licenses tab to change the number of licenses to purchase and then
              click on Continue.
            </li>
            <li>
              Follow the instructions shown on the screen to complete the
              transaction.
            </li>
          </ol>
        </StyledText>
        <StyledText variant={TextVariants.Body1}>
          01 Communique provides free technical support for trial account via
          e-mail:{" "}
          <StyledLink href="mailto:help@01com.com" target="_blank">
            help@01com.com
          </StyledLink>
        </StyledText>
      </PageContentContainer>
    </Layout>
  );
}
