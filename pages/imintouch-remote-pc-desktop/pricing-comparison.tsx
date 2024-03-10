import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor, AnchorVariants } from "../../components/core/anchor"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode } from "react"
import IITLogo from '../../public/assets/iit-logo-colour.png'
import DotFull from '../../public/assets/dot-full.png'
import DotHalf from '../../public/assets/dot-half.png'
import DotEmpty from '../../public/assets/dot-empty.png'
import { breakpoints } from "../../utils/breakpoints"
import Image from "next/image"

const ComparisonTable = styled.table`
width: 100%;


th > img, td > img {
  display: flex;
  margin: auto;
}
  
  p {
    margin: 0;
    text-align: left;
    font-size: 18px;

    ${breakpoints("font-size", "", [
  { 760: '14px' },
])}
    ${breakpoints("line-height", "", [
  { 760: '20px' },
])}
  }

thead th:nth-child(1) {
  width: 60%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 20%;
}

th {
  padding: 24px;
  border-bottom: 1px solid ${theme.colors.neutral.md};
  ${breakpoints("padding", "", [
  { 760: '8px' },
])}
h3 {
  text-align: center;
  line-height: auto;
  margin: 0;
  ${breakpoints("font-size", "", [
  { 760: '16px' },
])}
}

img {
  ${breakpoints("width", "", [
  { 760: '90px' },
])}
  ${breakpoints("height", "", [
  { 760: 'auto' },
])}
}
}
td {
  padding: 12px 0;
  border-bottom: 1px solid ${theme.colors.neutral.md};
}

tbody td:nth-child(1){
  padding: 12px 8px 12px 0;
}


thead th:nth-child(2), tbody td:nth-child(2) {
  background-color: ${theme.colors.neutral.xs};
}

sup {
  font-weight: 700;
  color: ${theme.colors.brand.primary};
}
`

const PricingSection = styled(Box)`
padding: 48px;
background-color: ${theme.colors.neutral.xs};
margin-top: 48px;
${breakpoints("padding", "", [
  { 760: '48px 24px' },
])}
`
const FeeTable = styled.table`
width: 100%;

${breakpoints("margin-top", "", [
  { 760: '24px' },
])}

th {
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.neutral.md};
  ${breakpoints("padding", "", [
  { 760: '8px' },
])}
}

td {
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.neutral.md};

}

thead th:nth-child(1) {
  width: calc(100%/3);
}

thead th:nth-child(2) {
  width: calc(100%/3);

}

thead th:nth-child(3) {
  width: calc(100%/3);
}

tbody td:nth-child(1){
  padding: 16px 12px 16px 0;
}

td p {
  ${breakpoints("line-height", "", [
  { 760: '20px' },
])}
}

span {
  color: ${theme.colors.brand.primary};
  font-weight: 700;
}
p:has(span){
  color: ${theme.colors.brand.primary};
}
`

const ServicePlanCalculator = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ResultContainer = styled(Box)`
background-color: #F0F7FE`

const DisclaimerContainer = styled(Box)`
ul {
  padding: 0;
  margin: 0 0 0 24px;
  vertical-align: middle;
}
li {
  font-size: 10px;
  vertical-align: middle;
}
p {
  line-height: 20px;
}
}`

export default function PricingComparison() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Pricing & Comparison">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <a href='https://locator.01com.com/ecommerce/account.php' target="_blank">
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              Buy Now
            </PrimaryButton>
          </a>
          <a href='https://locator.01com.com/ecommerce/account.php' target="_blank">
            <SecondaryButton>Try It Free</SecondaryButton>
          </a>
        </Box>
      </IITPageBanner>
      <PageContentContainer>
        <ComparisonTable>
          <thead>
            <tr>
              <th>
                <Box />
              </th>
              <th>
                <Image src={IITLogo.src} alt="I'm in Touch logo" width={146} height={32} />
              </th>
              <th>
                <Heading variant={HeadingVariants.Heading3}>Competitors</Heading>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Text>Remote Control</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Remote Printing</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>File Transfer</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Central Administration</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Free Mobile Apps</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>2-Factor Authentication</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotHalf.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Remote Wake-up<sup>1</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotHalf.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>LDAP Authentication</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="empty checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>MAC Address Restriction<sup>2</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="empty checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Remote 2-Way Audio</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="empty checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Outlook Mobilization</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="empty checkmark" width={20} height={20} />
              </td>
            </tr>
          </tbody>
        </ComparisonTable>

        <DisclaimerContainer margin="24px 0 0 0">
          <Text variant={TextVariants.Body2}>1 This feature requires subscription of 2 or more licenses</Text>
          <Text variant={TextVariants.Body2}>2 Real-time notification of new emails and manage your mobile mailbox</Text>
        </DisclaimerContainer>

        <PricingSection>
          <Heading variant={HeadingVariants.Heading3}>License Fee Table</Heading>
          <FeeTable>
            <thead>
              <tr>
                <th>
                  <Box />
                </th>
                <th>
                  <Text variant={TextVariants.Feat2}>Monthly Plan</Text>
                </th>
                <th>
                  <Text variant={TextVariants.Feat2}>Annual Plan</Text>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>1st licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$9.95/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}><span>$99.95/yr</span> (17% discount)</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>2nd - 5th licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$9.50/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}><span>$95.00/yr</span> (17% discount)</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>6th - 10th licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$9.00/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}><span>$90.00/yr</span> (17% discount)</Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>11th +</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>Please call <Anchor href="tel:+1-800-668-2185" variant={AnchorVariants.Small}>1-800-668-2185</Anchor></Text>
                </td>
                <td></td>
              </tr>
            </tbody>
          </FeeTable>

          <Box margin="48px 0 16px 0">
            <Heading variant={HeadingVariants.Heading3}>Service Plan Calculator</Heading>
          </Box>

          <ResultContainer margin="16px 0 0 0" padding="24px" >
            <Text variant={TextVariants.Feat2}>Result:</Text>
            <Box margin="8px 0 0 0">
              <Text variant={TextVariants.Body2}><span>$99.95 per year</span> (save $ 19.45 over monthly plan)</Text>
            </Box>
          </ResultContainer>
        </PricingSection>

        <DisclaimerContainer margin="24px 0 0 0">
          <ul>
            <li>
              <Text variant={TextVariants.Body2}>License is per computer that can be accessed using I'm InTouch</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>No setup or installation fee with free technical support and upgrade</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>Charges will be billed to your credit card</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>Prices are subject to change</Text>
            </li>
          </ul>
        </DisclaimerContainer>

      </PageContentContainer>
    </IITLayout >
  )
}
