import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor, AnchorVariants } from "../../components/core/anchor"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode, useCallback, useEffect, useState } from "react"
import IITLogo from '../../public/assets/iit-logo-colour.png'
import DotFull from '../../public/assets/dot-full.png'
import DotHalf from '../../public/assets/dot-half.png'
import DotEmpty from '../../public/assets/dot-empty.png'
import { breakpoints } from "../../utils/breakpoints"
import Image from "next/image"
import { Dropdown } from "react-bootstrap"
import ChevronDown from "../../public/assets/chevron-down.svg"
import { LINKS } from "../../utils/constants"

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

p:has(span){
  color: ${theme.colors.brand.primary};
}
`

const ResultSpanText = styled.span`
color: ${theme.colors.brand.primary};
font-weight: 700;
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

const CalculatorOptionDropdown = styled(Dropdown)`
display: flex;
flex-direction: row;
justify-content: space-between;
background: ${theme.colors.neutral.xs};
width: 100%;
margin-bottom: 16px;
border: 1px solid ${theme.colors.neutral.md};

.btn {
  text-align: left;
}
.btn-primary {
  background: ${theme.colors.neutral.xs};
  width: 100%;
  border: none;
  padding: 12px 16px;

  // h3 styles
  color: ${theme.colors.neutral.lg};
  font-weight: 300;
  font-size: 16px;
  ${breakpoints("font-size", "", [
  { 760: '16px' },
])}
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-toggle {
  width: 100%;

  :after {
    // removes the original after's triangle
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: none;

    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url(${ChevronDown.src});
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform 0.2s ease-in-out;
    box-sizing: border-box;
  }

  :focus {
    background: none;
  }
}
.dropdown-menu {
  border-radius: 0;
  width: 100%;
  padding: 0;

  p {
    font-size: 16px;
    font-weight: 300;
    padding: 20px 16px;
    line-height: 20px;
    :hover {
      background: ${theme.colors.neutral.sm};
    }
  }
}
.dropdown-item:active {
  background-color: ${theme.colors.neutral.xs};
  color: ${theme.colors.neutral.xl}
}
}
`

const StyledDropdownItem = styled(Dropdown.Item)`
background: none;
border: none;
cursor: pointer;
padding: 4px 24px 0 24px;
margin: 0;
${breakpoints("text-align", "", [
  { 1280: 'left' },
])}
${breakpoints("width", "", [
  { 1280: '100%' },
])}  
${breakpoints("padding", "", [
  { 1280: '0' },
])}  
p {
line-height: 54px;
font-size: 14px;

${breakpoints("font-size", "", [
  { 1460: '14px' },
])}`

const CalculatorLabel = styled(Text)`
font-size: 14px;
font-weight: 600`


const CalculatorOption = ({ children, value, onSelect }) => (
  <StyledDropdownItem>
    <Text onClick={() => onSelect(value)}>{children}</Text>
  </StyledDropdownItem >
)

const CalculatorGrid = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 24px;
${breakpoints("grid-template-columns", "", [
  { 600: '1fr' },
])}
${breakpoints("grid-gap", "", [
  { 600: '0px' },
])}
`

const CalculatorInput = styled.input`
  border: 1px solid ${theme.colors.neutral.md};
  background: ${theme.colors.neutral.xs};
  width: 100%;
  padding: 12px 16px;
  color: ${theme.colors.neutral.lg};
  font-weight: 300;
  font-size: 16px;
  ${breakpoints("font-size", "", [
  { 760: '16px' },
])}
`

export default function PricingComparison() {
  const [qty, setQty] = useState(1);
  const [plan, setPlan] = useState('Annual');
  const [currency, setCurrency] = useState('US$');
  const [promCode, setPromCode] = useState('');
  const [totalCost, setTotalCost] = useState(0)
  const [savings, setSavings] = useState(0)

  const costData = [
    {
      quantity: 1,
      annual: 99.95,
      monthly: 9.95
    },
    {
      quantity: 2,
      annual: 95.00,
      monthly: 9.50
    },
    {
      quantity: 3,
      annual: 95.00,
      monthly: 9.50
    },
    {
      quantity: 4,
      annual: 95.00,
      monthly: 9.50
    },
    {
      quantity: 5,
      annual: 95.00,
      monthly: 9.50
    },
    {
      quantity: 6,
      annual: 90.00,
      monthly: 9.00
    },
    {
      quantity: 7,
      annual: 90.00,
      monthly: 9.00
    },
    {
      quantity: 8,
      annual: 90.00,
      monthly: 9.00
    },
    {
      quantity: 9,
      annual: 90.00,
      monthly: 9.00
    },
    {
      quantity: 10,
      annual: 90.00,
      monthly: 9.00
    },
    {
      quantity: 11,
      annual: 90.00,
      monthly: 9.00
    },
  ]
  const calculateTotalCost = useCallback((quantity) => {
    const res = costData.slice(0, quantity).reduce((acc, curr) => {
      if (plan === 'Annual') {
        acc += curr.annual
      } else {
        acc += curr.monthly
      }
      return acc
    }, 0)

    setTotalCost(res)
  }, [qty, plan, currency, promCode]);

  const calculateTotalSavings = useCallback((quantity) => {
    if (plan === 'Monthly') { return null }
    const monthlyCost = costData.slice(0, quantity).reduce((acc, curr) => {
      return acc += curr.monthly
    }, 0)

    const savings = (monthlyCost * 12) - totalCost
    setSavings(savings)
  }, [totalCost]);

  useEffect(() => {
    calculateTotalCost(qty)
  }, [qty, plan, currency]);

  useEffect(() => {
    calculateTotalSavings(qty)
  }, [totalCost]);

  const handlePromCodeChange = (event) => {
    setPromCode(event.target.value);
  };

  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="Pricing & Comparison">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <a href={LINKS.IIT_BUY_NOW}>
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              Buy Now
            </PrimaryButton>
          </a>
          <a href={LINKS.IIT_TRY_IT_FREE}>
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
                <Text>MAC Address Restriction</Text>
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
                <Text>Outlook Mobilization<sup>2</sup></Text>
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
                  <Text variant={TextVariants.Body2}><ResultSpanText>$99.95/yr</ResultSpanText> (17% discount)</Text>
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
                  <Text variant={TextVariants.Body2}><ResultSpanText>$95.00/yr</ResultSpanText> (17% discount)</Text>
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
                  <Text variant={TextVariants.Body2}><ResultSpanText>$90.00/yr</ResultSpanText> (17% discount)</Text>
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

          <CalculatorGrid>
            <Box>
              <CalculatorLabel ># of licenses:</CalculatorLabel>
              <CalculatorOptionDropdown id='qty'>
                <Dropdown.Toggle>
                  {qty}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <CalculatorOption value="1" onSelect={setQty}>1</CalculatorOption>
                  <CalculatorOption value="2" onSelect={setQty} >2</CalculatorOption>
                  <CalculatorOption value="3" onSelect={setQty} >3</CalculatorOption>
                  <CalculatorOption value="4" onSelect={setQty}> 4</CalculatorOption>
                  <CalculatorOption value="5" onSelect={setQty} >5</CalculatorOption>
                  <CalculatorOption value="6" onSelect={setQty} >6</CalculatorOption>
                  <CalculatorOption value="7" onSelect={setQty} >7</CalculatorOption>
                  <CalculatorOption value="8" onSelect={setQty} >8</CalculatorOption>
                  <CalculatorOption value="9" onSelect={setQty} >9</CalculatorOption>
                  <CalculatorOption value="10" onSelect={setQty} >10</CalculatorOption>
                  <CalculatorOption value="11" onSelect={setQty}>11+</CalculatorOption>
                </Dropdown.Menu>
              </CalculatorOptionDropdown>
            </Box>

            <Box>
              <CalculatorLabel>Payment Frequency:</CalculatorLabel>
              <CalculatorOptionDropdown id='plan'>
                <Dropdown.Toggle>
                  {plan}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <CalculatorOption value="Annual" onSelect={setPlan}>Annual</CalculatorOption>
                  <CalculatorOption value="Monthly" onSelect={setPlan}>Monthly</CalculatorOption>
                </Dropdown.Menu>
              </CalculatorOptionDropdown>
            </Box>

            <Box>
              <CalculatorLabel>Currency:</CalculatorLabel>

              <CalculatorOptionDropdown id='currency'>
                <Dropdown.Toggle>
                  {currency}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <CalculatorOption value="US$" onSelect={setCurrency}>US$</CalculatorOption>
                  <CalculatorOption value="CN$" onSelect={setCurrency}>CN$</CalculatorOption>
                </Dropdown.Menu>
              </CalculatorOptionDropdown>
            </Box>
          </CalculatorGrid>
          <Box>
            <CalculatorLabel>Promotional code:</CalculatorLabel>
            <CalculatorInput
              type="text"
              id="promCode"
              value={promCode}
              onChange={handlePromCodeChange}
            />
          </Box>

          <ResultContainer margin="24px 0 0 0" padding="24px" >
            <Text variant={TextVariants.Feat2}>Result:</Text>
            <Box margin="8px 0 0 0">
              <Text variant={TextVariants.Body2}>
                <ResultSpanText>
                  ${totalCost.toFixed(2)} per {plan === 'Annual' ? 'year' : 'month'}
                </ResultSpanText>
                {plan === 'Monthly' ? null : ` (save $${savings.toFixed(2)} over monthly plan)`}
              </Text>
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
