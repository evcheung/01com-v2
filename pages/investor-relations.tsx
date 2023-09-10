import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box, Text, TextColors, TextVariants } from '../components/core'
import Heading from '../components/core/heading'
import styled from 'styled-components'
import { theme } from '../theme'
import { Anchor } from '../components/core/anchor'
import pdf from '../public/assets/pdf.svg'
import texture from '../public/assets/texture.png'
import Image from 'next/image'

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;
`

const StyledHeading = styled(Heading)`
font-size: 36px;
`

const StyledVideoHeader = styled(Text)`
font-size: ${theme.fontSize.xl};
font-weight: ${theme.fontWeight[700]};
`

const FeaturedVideoContainer = styled(Box)`
background-color: ${theme.colors.neutral.sm};
margin: 0 auto;
padding: 118px 96px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 96px;
`

const HeaderSubtext = () => {
  return (
    <Box padding="0px 48px">
      <Box width="968px" padding="0 0 24px 0" margin="16px auto">
        <Text textColor={TextColors.White} alignment='center'>
          01 Communique's common shares are listed on the TSX Venture Exchange (TSX-V) under the symbol 'ONE' and quoted on the OTCQB market under the symbol 'OONEF'.
        </Text>
      </Box>

      <FeaturedVideoContainer backgroundImage={texture.src}>
        <Box>
          <StyledVideoHeader textColor={TextColors.Blue}>Featured Video</StyledVideoHeader>
          <StyledHeading>Interview with Andrew Cheung, CEO 01 Communique</StyledHeading>
          <Text>01 Communique talks about its quantum-safe cybersecurity solution.</Text>
        </Box>
        <Box></Box>
      </FeaturedVideoContainer>
    </Box>
  )
}

const PatentItem = ({ title, link }) => {
  return (
    <>
      <Box flexDirection='row' flexAlignment='center' flexJustify='space-between'>
        <Text>{title}</Text>
        <Box flexDirection='row' flexAlignment='center'>
          <Box margin="0px 8px">
            <Image src={pdf} alt="pdf icon"></Image>
          </Box>
          <Anchor href={link} target='_blank'>View PDF</Anchor>
        </Box>
      </Box>
      <HorizontalBorder />
    </>
  )
}

const PATENTS = [
  {
    title: 'US Patent #11,669,833',
    link: 'https://www.01com.com/pdf/US11669833.pdf'
  },
  {
    title: 'US Patent #11,271,715',
    link: 'https://www.01com.com/pdf/US11271715.pdf'
  },
  {
    title: 'US Patent #6,928,479',
    link: 'https://www.01com.com/pdf/US6928479.pdf'
  },
  {
    title: 'US Patent #6,938,076',
    link: 'https://www.01com.com/pdf/US6938076.pdf'
  },
  {
    title: 'US Patent #8,234,701',
    link: 'https://www.01com.com/pdf/US8234701.pdf'
  },
  {
    title: 'Canadian Patent #2,309,398',
    link: 'https://www.01com.com/pdf/CA2309398.pdf'
  },
  {
    title: 'Japanese Patent #4,875,094',
    link: 'https://www.01com.com/pdf/JP4875094.pdf'
  },
  {
    title: 'Canadian Patent #2,524,039',
    link: 'https://www.01com.com/pdf/cp2524039.pdf'
  },
]

export default function InvestorRelations() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Investor Relations" headerContent={<HeaderSubtext />}>
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <Box width="100%" padding='0 100px' margin="96px 0">
        <Box margin="0 0 38px 0">
          <StyledHeading as="h2">Patents</StyledHeading>
        </Box>
        <Box>
          <HorizontalBorder />
          {
            PATENTS.map(patent => <PatentItem title={patent.title} link={patent.link} />)
          }
        </Box>
      </Box>
    </Layout >
  )
}
