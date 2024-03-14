import Head from "next/head";
import styled from "styled-components";
import {
  Box,
  ButtonTextColors,
  PrimaryButton,
  SecondaryButton,
  Text,
  TextColors,
  TextVariants,
} from "../../../components/core";
import { breakpoints } from "../../../utils/breakpoints";
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner";
import IITLayout from "../../../components/im-in-touch/IITLayout";
import Link from "next/link";
import Heading, { HeadingVariants } from "../../../components/core/heading";
import { PageContentContainer } from "../../../components/PageContentContainer";
import { theme } from "../../../theme";
import IITLogo from '../../../public/assets/iit-logo-colour.png'
import DotFull from '../../../public/assets/dot-full.png'
import DotHalf from '../../../public/assets/dot-half.png'
import DotEmpty from '../../../public/assets/dot-empty.png'
import Image from "next/image"
import bullet from '../../../public/assets/bullet.svg'
import ShortUniqueId from "short-unique-id";
import { useWindowSize } from "usehooks-ts";

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  width: 100%;

  ${breakpoints("flex-direction", "", [{ 900: "column" }])}
  ${breakpoints("align-items", "", [{ 900: "flex-start" }])}
`;

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


const PricingSection = styled(Box)`
padding: 48px;
background-color: ${theme.colors.neutral.xs};
margin-top: 48px;
${breakpoints("padding", "", [
  { 760: '48px 24px' },
])}
`
const StyledLineItem = styled.li`
  background: url(${bullet.src}) no-repeat 0 4px;
  padding-left: 32px;
  margin-bottom: 16px;
`

const StyledList = styled.ul`
padding: 0;
list-style: none;
`

const TableContainer = styled(Box)`
  display: grid;
  grid-template-columns: 5fr 2fr;
  align-items: center;
  p {
    font-size: 16px;
  }
${breakpoints("row-gap", "", [{ 760: "8px" }])}
`;

const LinkContainer = styled(Box)`
  display: flex;
  align-self: end;

  span {
    font-weight: 300;
    color: ${theme.colors.neutral.xl}
  }

  ${breakpoints("flex-direction", "", [{ 1200: "column" }])}
  ${breakpoints("align-items", "", [{ 1200: "flex-start" }])}

${breakpoints("flex-direction", "", [{ 760: "row" }])}
${breakpoints("align-items", "", [{ 760: "center" }])}
${breakpoints("margin-bottom", "", [{ 760: "8px" }])}
`;

const PriceItem = styled(Box)`
  display: flex;
  align-items: center;

  :first-of-type {
    margin: 0 48px 0 -10px;
  }
  :last-of-type {
    ${breakpoints("margin", "", [{ 1200: "10px 0 0 -10px" }])}
    ${breakpoints("margin", "", [{ 760: "0 48px 0 -10px" }])}
  }

  a {
    ${breakpoints("font-size", "", [{ 760: theme.fontSize.sm }])}
  }
`;

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;

  ${breakpoints("margin", "", [{ 760: "18px 0px" }])}
`;



const TableContent = ({ width, data }) => {
  const uid = new ShortUniqueId({ length: 10 });

  return (
    <>
      {/* {width > 760 && (
        <TableContainer>
          <Text variant={TextVariants.Feat2}>Description</Text>
          <Text variant={TextVariants.Feat2}>Relevant Links</Text>
        </TableContainer>
      )} */}
      <HorizontalBorder />
      {data.map((item) => {
        return (
          <>
            <TableContainer key={`table-container-${uid.rnd()}`}>
              <Text>{item.description}</Text>
              <LinkContainer>
                <Text variant={TextVariants.Feat1} textColor={TextColors.Blue}>{item.price}</Text>
              </LinkContainer>
            </TableContainer>
            <HorizontalBorder />
          </>
        )
      })}
      <TableContainer key={`table-container-${uid.rnd()}`}>
        <Text>200 +</Text>
        <LinkContainer>
          <Text variant={TextVariants.Feat1} textColor={TextColors.Blue}><span>Please call</span> 1-800-668-2185</Text>
        </LinkContainer>
      </TableContainer>
      <HorizontalBorder />
    </>
  );
};



const COMPARISON_ITEMS = [
  {
    description: "Single user license",
    price: "M.S.L.P.: $200.00*"
  },
  {
    description: "5-pack",
    price: "M.S.L.P.: $900.00*"
  },
  {
    description: "10-pack",
    price: "M.S.L.P.: $1,620.00*"
  },
  {
    description: "25-pack",
    price: "M.S.L.P.: $3,640.00*"
  },
  {
    description: "50-pack",
    price: "M.S.L.P.: $6,560.00*"
  },
  {
    description: "100-pack",
    price: "M.S.L.P.: $11,800.00*"
  },
  {
    description: "200-pack",
    price: "M.S.L.P.: $20,000.00*"
  },
];


export default function ServerPricing() {
  const { width } = useWindowSize()
  return (
    <IITLayout subSite="server">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta
          name="description"
          content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions."
        />
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
                <Text>Remote Audio</Text>
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
                <Text>Free iPhone/iPad App</Text>
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
                <Text>Free Android App</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotHalf.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Free Windows tablet App</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotHalf.src} alt="full checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Mobile mailbox<sup>1</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Child monitoring<sup>2</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Physical authentication<sup>3</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
            <tr>
              <td>
                <Text>Remote wake-up<sup>4</sup></Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td>
                <Image src={DotEmpty.src} alt="half checkmark" width={20} height={20} />
              </td>
            </tr>
          </tbody>
        </ComparisonTable>

        <DisclaimerContainer margin="24px 0 0 0">
          <Text variant={TextVariants.Body2}>1 <StyledLink href="/imintouch-remote-pc-desktop/features/email-notification/">Real-time notification</StyledLink> of new emails and manage your mobile mailbox</Text>
          <Text variant={TextVariants.Body2}>2 Access to the host's webcam with stealth operating mode</Text>
          <Text variant={TextVariants.Body2}>3 Via the optional SecureKEY devices. <StyledLink href="/imintouch-remote-pc-desktop/secure-key/">Learn more...</StyledLink></Text>
          <Text variant={TextVariants.Body2}>4 This feature requires subscription of 2 or more licenses</Text>
        </DisclaimerContainer>

        <PricingSection>
          <Heading variant={HeadingVariants.Heading3}>Starter kit</Heading>
          <Box margin="16px  0 ">
            <Text variant={TextVariants.Feat1} textColor={TextColors.Blue}>M.S.L.P.: $1,995*</Text>
          </Box>

          <StyledList>
            <StyledLineItem><Text variant={TextVariants.Body2}>5 user licenses</Text></StyledLineItem>
            <StyledLineItem><Text variant={TextVariants.Body2}>6-month free support</Text></StyledLineItem>
          </StyledList>


          <Box margin="48px 0 24px 0 ">
            <Heading variant={HeadingVariants.Heading3}>Additonal User Licenses</Heading>
          </Box>
          <TableContent width={width} data={COMPARISON_ITEMS} />

        </PricingSection>

        <DisclaimerContainer margin="24px 0 0 0">
          <ul>
            <li>
              <Text variant={TextVariants.Body2}>Prices are subject to change</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>User license is the license to create an user on your I'm InTouch server</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>Administrator is counted as one user license</Text>
            </li>
            <li>
              <Text variant={TextVariants.Body2}>The Serial Number has to be validated (Note: Adding additional user licenses needs to change and re-validate a new Serial Number)</Text>
            </li>
          </ul>
        </DisclaimerContainer>

      </PageContentContainer>
    </IITLayout >
  );
}
