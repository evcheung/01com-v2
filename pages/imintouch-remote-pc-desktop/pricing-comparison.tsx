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
import { ReactNode, useCallback, useEffect, useState } from "react"
import IITLogo from '../../public/assets/iit-logo-colour.png'
import DotFull from '../../public/assets/dot-full.png'
import DotHalf from '../../public/assets/dot-half.png'
import DotEmpty from '../../public/assets/dot-empty.png'
import { breakpoints } from "../../utils/breakpoints"
import Image from "next/image"
import { Dropdown } from "react-bootstrap"
import ChevronDown from "../../public/assets/chevron-down.svg"

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



const CalculatorOptionDropdown = styled(Dropdown)`
display: flex;
flex-direction: row;
justify-content: space-between;
background: ${theme.colors.neutral.xs};
width: 100%;
margin-bottom: 48px;
border: 1px solid ${theme.colors.neutral.md};



.btn {
  text-align: left;
}
.btn-primary {
  background:  ${theme.colors.neutral.xs};
  width: 100%;
  border: none;
  padding: 16px;

  // h3 styles
  color: ${theme.colors.neutral.lg};
  font-weight: 300;
  font-size: 18px;
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

const SelectOption = ({ children, value, onSelect }) => (
  <StyledDropdownItem>
    <Text onClick={() => onSelect(value)}>{value}</Text>
  </StyledDropdownItem >
)

export default function PricingComparison() {
  const [qty, setQty] = useState(1);
  const [plan, setPlan] = useState('annual');
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
      if (plan === 'annual') {
        acc += curr.annual
      } else {
        acc += curr.monthly
      }
      return acc
    }, 0)

    setTotalCost(res)
  }, [qty, plan, currency, promCode]);

  const calculateTotalSavings = useCallback((quantity) => {
    if (plan === 'monthly') { return null }
    const monthlyCost = costData.slice(0, quantity).reduce((acc, curr) => {
      return acc += curr.monthly
    }, 0)

    console.log('👉👉👉 monthlyCost', monthlyCost, monthlyCost * 12, totalCost);

    const savings = (monthlyCost * 12) - totalCost
    setSavings(savings)
  }, [totalCost]);

  useEffect(() => {
    calculateTotalCost(qty)
  }, [qty, plan, currency]);

  useEffect(() => {
    calculateTotalSavings(qty)
  }, [totalCost]);

  const handleQtyChange = (event) => {
    setQty(parseInt(event.target.value));
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePromCodeChange = (event) => {
    setPromCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="qty">Number of licenses:</label>
              <CalculatorOptionDropdown>
                <Dropdown.Toggle>
                  {qty}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <SelectOption value="1" onSelect={setQty}>1</SelectOption>
                  <SelectOption value="2" onSelect={setQty} >2</SelectOption>
                  <SelectOption value="3" onSelect={setQty} >3</SelectOption>
                  <SelectOption value="4" onSelect={setQty}> 4</SelectOption>
                  <SelectOption value="5" onSelect={setQty} >5</SelectOption>
                  <SelectOption value="6" onSelect={setQty} >6</SelectOption>
                  <SelectOption value="7" onSelect={setQty} >7</SelectOption>
                  <SelectOption value="8" onSelect={setQty} >8</SelectOption>
                  <SelectOption value="9" onSelect={setQty} >9</SelectOption>
                  <SelectOption value="10" onSelect={setQty} >10</SelectOption>
                  <SelectOption value="11" onSelect={setQty} >11+</SelectOption>
                </Dropdown.Menu>
              </CalculatorOptionDropdown>
            </div>
            <div>
              <label htmlFor="plan">Plan:</label>
              <select id="plan" value={plan} onChange={handlePlanChange}>
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div>
              <label htmlFor="currency">Currency:</label>
              <select id="currency" value={currency} onChange={handleCurrencyChange}>
                <option value="2" selected>US$</option>
                <option value="1" >CN$</option>
              </select>
            </div>
            <div>
              <label htmlFor="promCode">Promotional code:</label>
              <input
                type="text"
                id="promCode"
                value={promCode}
                onChange={handlePromCodeChange}
              />
            </div>
          </form>


          <ResultContainer margin="16px 0 0 0" padding="24px" >
            <Text variant={TextVariants.Feat2}>Result:</Text>
            <Box margin="8px 0 0 0">
              <Text variant={TextVariants.Body2}>
                <span>
                  ${totalCost.toFixed(2)} per {plan === 'annual' ? 'year' : 'month'}
                </span>
                {plan === 'monthly' ? null : ` (save $${savings.toFixed(2)} over annual plan)`}
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
