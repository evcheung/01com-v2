import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head';
import { Box, Text, TextVariants } from '../components/core';
import Heading, { HeadingVariants } from '../components/core/heading';
import styled from 'styled-components';
import { theme } from '../theme';
import Link from 'next/link';
import { PageContentContainer } from '../components/PageContentContainer';
import { breakpoints } from '../utils/breakpoints';

const StyledHeading2 = styled(Heading)`
  font-size: ${theme.fontSize.xxxl};
  font-weight: ${theme.fontWeight[400]};
  line-height: 48px;

  ${breakpoints("font-size", "", [
  { 1060: "32px" },
])}
    ${breakpoints("line-height", "", [
  { 1060: "auto" },
])}
`
const StyledText = styled(Text)`
  margin-bottom: 48px;
`
const StyledLink = styled(Link)`
  text-decoration: underline;
`


export default function ParterPrograms() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Partner Programs">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>With decades of experience in selling SaaS partnerships, and having millions of our products sold globally, 01 Communique offers much more than leading edge technologies. Through our Partner programs we endeavour to provide you with the tools necessary to succeed in a competitive market. We understand that the more successfully our partners can use and sell our products, the more overall business growth we can achieve. Therefore, we are committed to our products quality and customer support so that a mutually beneficial partnership can be built.</StyledText>

        <StyledHeading2 variant={HeadingVariants.Heading1}>Independent Business Partners (IBP):</StyledHeading2>
        <StyledText variant={TextVariants.Body1}>Our attractive partnership program was created to reward Independent Business Partners through revenue sharing. We assist IBP's sales efforts with training and marketing materials so that IBPs can maximize their sales efforts and generate recurring revenue.</StyledText>

        <StyledHeading2 variant={HeadingVariants.Heading1}>System Integrators (SI):</StyledHeading2>
        <StyledText variant={TextVariants.Body1}>We offer a flexible cost effective licensing program with dedicated sales support. The flexibility of bundling our products with your product suites to deliver a total solution for your customers is one of the many benefits of our SI program.</StyledText>

        <StyledHeading2 variant={HeadingVariants.Heading1}>Original Equipment Manufacturers (OEM):</StyledHeading2>
        <StyledText variant={TextVariants.Body1}>
          Our products and special private labelling programs are designed to assist OEMs in meeting their business goals,
          differentiating their products, build their brand and providing a total solution to their customers. <br /><br />
          To learn more about our IBP, SI, or OEM programs please contact us at toll-free (800) 668-2185 or (905) 795-2888
          or email to <StyledLink target="_blank" href="mailto:sales@01com.com">sales@01com.com</StyledLink>.
        </StyledText>

        <StyledText variant={TextVariants.Body1}></StyledText>

      </PageContentContainer>
    </Layout>
  )
}
