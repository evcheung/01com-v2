import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IOCLayout from "../../components/im-on-call/IOCLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor, AnchorVariants } from "../../components/core/anchor"
import { IOCPageBanner } from "../../components/im-on-call/IOCPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { useCallback, useEffect, useState } from "react"
import DotFull from '../../public/assets/gdot-full.png'
import { breakpoints } from "../../utils/breakpoints"
import Image from "next/image"
import { Dropdown } from "react-bootstrap"
import ChevronDown from "../../public/assets/ioc-down.png"
import { LINKS } from "../../utils/constants"
import { IOCAnchor } from "../../components/core/ioc-anchor"

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
color: ${theme.colors.green.primary};
font-weight: 700;
`

const ResultContainer = styled(Box)`
background-color: #F0F7FE`

const LicenseContainer = styled(Box)`
background-color:${theme.colors.neutral.xs};
padding: 48px;
margin-top: 48px;
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
    width: 12px;
    height: 6px;
    margin-left: auto;
    content: "";
    background-image: url(${ChevronDown.src});
    background-repeat: no-repeat;
    background-size: 12px 6px; /* match actual image dimensions */
    background-position: center; /* optional, centers the arrow */
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
      annual: 299.95,
      monthly: 29.95
    },
    {
      quantity: 2,
      annual: 299.95,
      monthly: 29.95
    },
    {
      quantity: 3,
      annual: 270.00,
      monthly: 29.95
    },
    {
      quantity: 4,
      annual: 270.00,
      monthly: 29.95
    },
    {
      quantity: 5,
      annual: 270.00,
      monthly: 29.95
    },
    {
      quantity: 6,
      annual: 250.00,
      monthly: 29.95
    },
    {
      quantity: 7,
      annual: 250.00,
      monthly: 29.95
    },
    {
      quantity: 8,
      annual: 250.00,
      monthly: 29.95
    },
    {
      quantity: 9,
      annual: 250.00,
      monthly: 29.95
    },
    {
      quantity: 10,
      annual: 250.00,
      monthly: 29.95
    },
  ]
  const calculateTotalCost = useCallback((quantity) => {
    let row;

    if (quantity <= 2) row = costData[0];      // 1-2 licenses
    else if (quantity <= 5) row = costData[2]; // 3-5 licenses
    else if (quantity <= 10) row = costData[5]; // 6-10 licenses
    else {                                     // 11+ licenses
      setTotalCost(null);
      return;
    }

    if (plan === 'Annual') setTotalCost(row.annual);
    else setTotalCost(row.monthly);
  }, [plan]);



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
    <IOCLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IOCPageBanner heading="Pricing & Comparison">
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <a href={LINKS.IOC_BUY_NOW}>
            <PrimaryButton textColor={ButtonTextColors.Green}>
              Buy Now
            </PrimaryButton>
          </a>
          <a href={LINKS.IOC_TRY_IT_FREE}>
            <SecondaryButton>Try It Free</SecondaryButton>
          </a>
        </Box>
      </IOCPageBanner>
      <PageContentContainer>
        <ComparisonTable>
          <thead>
            <tr>
              <th>
                <Box />
              </th>
              <th>
                <Heading variant={HeadingVariants.Heading3}>Paid Subscription</Heading>
              </th>
              <th>
                <Heading variant={HeadingVariants.Heading3}>Free Version</Heading>
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
                <Text>Live Chat</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>Simultaneous Live Chat session</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>File transfer</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>Branding(banner, phoot, etc.)</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>End-of-session survey</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>Detailed support log and history</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>Shareable license</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Text>Central administration</Text>
              </td>
              <td>
                <Image src={DotFull.src} alt="full checkmark" width={20} height={20} />
              </td>
              <td></td>
            </tr>
          </tbody>
        </ComparisonTable>

        <LicenseContainer>
          <Heading variant={HeadingVariants.Heading3}>Shareable Licensing Model</Heading>
          <Text variant={TextVariants.Body2} style={{ padding: "16px 0px 16px 0px" }}>
            Several agents can share one license. How many you should purchase is determined by how many of them will do remote support at the same time. For example, if you have 5 remote customer service agents. You know that no more than 3 will be using I'm OnCall at the same time. Instead of buying 5 I'm OnCall licenses, you only need to purchase 3.
          </Text>
        </LicenseContainer>

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
                  <Text variant={TextVariants.Body2}>1 - 2 licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$29.95/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}><ResultSpanText>$299.95/yr</ResultSpanText> <span style={{ color: theme.colors.green.primary }}>(17% discount)</span></Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>2 - 5 licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$29.95/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2} ><ResultSpanText>$270.00/yr</ResultSpanText> <span style={{ color: theme.colors.green.primary }}>(17% discount)</span></Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>6 - 10 licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>$29.95/mo</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2} textColor={TextColors.Green}><ResultSpanText>$250.00/yr</ResultSpanText> <span style={{ color: theme.colors.green.primary }}>(17% discount)</span></Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant={TextVariants.Body2}>11+ licenses</Text>
                </td>
                <td>
                  <Text variant={TextVariants.Body2}>Please call <IOCAnchor href="tel:+1-800-668-2185" variant={AnchorVariants.Small}>1-800-668-2185</IOCAnchor></Text>
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

          <ResultContainer margin="24px 0 0 0" padding="24px">
            <Text variant={TextVariants.Feat2}>Result:</Text>
            <Box margin="8px 0 0 0">
              {totalCost === null ? (
                <Text variant={TextVariants.Body2}>
                  Please call <Anchor href="tel:+1-800-668-2185" variant={AnchorVariants.Small}>1-800-668-2185</Anchor>
                </Text>
              ) : (
                <Text variant={TextVariants.Body2}>
                  <ResultSpanText>
                    ${totalCost.toFixed(2)} per {plan === 'Annual' ? 'year' : 'month'}
                  </ResultSpanText>
                  {plan === 'Monthly' ? null : ` (save $${savings.toFixed(2)} over monthly plan)`}
                </Text>
              )}
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
    </IOCLayout >
  )
}
