import Layout, { LayoutVariants } from '../../components/Layout'
import Head from 'next/head';
import { Box, Text, TextVariants } from '../../components/core';
import Heading, { HeadingVariants } from '../../components/core/heading';
import styled from 'styled-components';
import { theme } from '../../theme';
import Link from 'next/link';
import { PageContentContainer } from '../../components/PageContentContainer';
import { breakpoints } from '../../utils/breakpoints';
import IITLayout from '../../components/im-in-touch/IITLayout';
import { IITPageBanner } from '../../components/im-in-touch/IITPageBanner';

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



export default function About() {
  return (
    <IITLayout variant={LayoutVariants.Dark} pageTitle="About I'm InTouch">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="About I'm InTouch">
      </IITPageBanner>

      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>
          Don't let location or security concerns stop you from accessing your remote computer when it matters most. Use I'm InTouch secure Remote Access Software to gain instant access to your distant computer from any computer or mobile device while maintaining your data security at all times. You can maximize flexibility by working on documents and user programs on your remote computer anytime, anywhere, using any Internet enabled device. You can also have the peace of mind that sensitive files never leave your distant computer.
        </StyledText>

        <StyledHeading2 variant={HeadingVariants.Heading1}>Zero-Trust Security</StyledHeading2>
        <StyledText variant={TextVariants.Body1}>I'm InTouch is recognized as one of the most secure remote access platforms available in the market today. We continue to live by our commitment. By deploying the IronCAP Post-Quantum Cryptography, I'm InTouch will be the world's first quantum-safe remote access product. This R&D breakthrough ensures I'm InTouch is 100% secure all the way into the new quantum computing era.</StyledText>

        <StyledHeading2 variant={HeadingVariants.Heading1}>Patented-Protected Remote Access Technology</StyledHeading2>
        <StyledText variant={TextVariants.Body1}>In the last decades 01 Communique has developed a number of security features that become the standard for remote computer access and communication applications. Our technologies are protected by US Patents #6928479, #6938076, and #8234701. You can trust I'm InTouch to build a strong hedge of protection for your remote access activities. These patented Remote Computer Access Security technologies minimize your security vulnerabilities during your remote access sessions.</StyledText>
      </PageContentContainer>
    </IITLayout>
  )
}
