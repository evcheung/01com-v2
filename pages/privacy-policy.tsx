
import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box, Text, TextVariants } from '../components/core';
import Heading from '../components/core/heading';
import styled from 'styled-components';
import { theme } from '../theme';
import Link from 'next/link';
import { PageContentContainer } from '../components/PageContentContainer';

const StyledText = styled(Text)`
  margin-bottom: 24px;
`
const StyledSubtext = styled(Text)`
font-size: ${theme.fontSize.md};
margin: 20px 0;
`

const TeamGrid = styled(Box)`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 24px;
  width: 100%;
  margin: 32px 0 96px 0;
`

const TeamCard = styled(Box)`
  padding: 96px;
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  align-items: center;
`
const StyledHeading2 = styled(Heading)`
  font-size: ${theme.fontSize.xxxxl};
  font-weight: ${theme.fontWeight[400]};
  line-height: 48px;
`
const StyledHeading3 = styled(Heading)`
  font-size: ${theme.fontSize.xxxl};
  font-weight: ${theme.fontWeight[400]};
  line-height: 8px;
`

export default function AboutUs() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Privacy Policy">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContentContainer>
        <StyledText variant={TextVariants.Body1}>
          As a global provider of <Link href=''>remote accesss ervices</Link>  and integrated communications software, 01 Communique respects your privacy and is committed to protect the personal information you share with us. Outlined below is information about how we collect and use your personal information.
        </StyledText>

        <Heading>Personal Information 01 Communique May Ask For</Heading>
        <StyledText variant={TextVariants.Body1}>
          Personal information means any information that may be used to identify an individual, including, but not limited to, a first and last name, email address, telephone number, a home, postal or other physical address, a valid credit card number to process payment for products and/or services and such other information when needed to provide a product or service that you have requested from us.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          01 Communique may ask you to provide personal information by filling out and submitting an online form when you elect to use a free trial of our products and services, subscribe to a service, purchase product and have it shipped to you, or request a product or service upgrade.

        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          Some of the personal information requested is required or mandatory while other information will be optional. It is your option whether to provide any requested information, however if you do not provide the mandatory information with respect to a particular activity, we may not be able to fulfill your request. For example, if you subscribe for a service offering online, we will ask you for personal information necessary to complete the subscription - such as your name, address, telephone number, and credit card number. All information must be provided to us in order to complete your subscription request.
        </StyledText>

        <Heading>What We Do With Personal Information We Ask For</Heading>


        <StyledText variant={TextVariants.Body1}>
          01 Communique uses your personal information for several general purposes; to deliver you a free trial of our products and services, to complete an online service subscription, product purchase or upgrade request, to keep you up to date on the latest product announcements, software updates, special offers or other information we feel may be of interest to you, and to solicit your feedback about planned product changes or introductions. At all times, you have the option to request 01 Communique to unsubscribe you from the delivery of any future communications.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          Any information you provide to 01 is kept in strict confidence in secured databases that are not accessible outside of our offices. Physical, technical, and managerial procedures are used to safeguard the security and confidentiality of the data.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          The information you provide us is used for the purposes outlined above, and not solicited to parties outside of 01.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          On occasion, 01 will retain the services of outside contractors to provide services for us. Contractors may be used to ship products, provide technical support, or handle order processing. We require that these contractors keep any personal information of customers we provide them secure and confidential. They are prohibited from using that information for any other purpose.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          Please be advised that in certain instances, it may be requisite for 01 to disclose your personal information to government officials or otherwise as required by law.
        </StyledText>


        <Heading>Cookies</Heading>


        <StyledText variant={TextVariants.Body1}>
          The 01 Communique Web site may use cookies, small text files delivered to your browser to track your visits to our website. The information contained in a cookie can only be read by a 01 Communique Web server and cannot be used to run programs or deliver viruses to your computer. A cookie essentially functions as an identifier, but does not attach it self to or contain any personal data you may provide to 01. 01 Communique's website uses cookies to track user traffic patterns, so that we can improve our navigational structure to better help the user reach the information they require.
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          Accepting a cookie from our site is completely optional. You can set your browser to only accept cookies upon notification or you can turn cookie use off entirely (Note: Turning cookie use off entirely may affect access to non-01 Web sites).
        </StyledText>


        <Heading>Privacy Issues and Concerns</Heading>
        <StyledText variant={TextVariants.Body1}>
          If you have any questions or concerns regarding 01 Communique's online privacy policy please contact us electronically or via mail at the postal address below:
        </StyledText>

        <StyledText variant={TextVariants.Body1}>
          01 Communique <br />
          Online Privacy <br />
          789 Don Mills Road <br />
          Suite 700 <br />
          Toronto, ON <br />
          M3C 1T5 <br />
          Canada <br />
        </StyledText>


      </PageContentContainer>
    </Layout>
  )
}
