import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box, Text, TextColors, TextVariants } from '../components/core'
import Heading from '../components/core/heading'
import styled from 'styled-components'
import { theme } from '../theme'
import { Anchor } from '../components/core/anchor'
import pdf from '../public/assets/pdf.svg'
import webinar from '../public/assets/webinar.svg'
import texture from '../public/assets/texture.png'
import Image from 'next/image'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss"
import { useState } from 'react'
import playButton from '../public/assets/play-button.svg'
import Link from 'next/link'

const HorizontalBorder = styled(Box)`
  border-bottom: 1px solid ${theme.colors.neutral.md};
  width: 100%;
  margin: 12px 0px;
`

const StyledHeading = styled(Heading)`
font-size: 36px;
line-height: 50px;
`

const StyledContentHeading = styled(Heading)`
font-size: 36px;
line-height: 50px;
margin-bottom: 38px;
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

const PlayButton = styled.button`
  background: none;
  border: none;
`

const TableContainer = styled(Box)`
display: grid;
grid-template-columns: 1fr 3fr 2fr;
`

const LinkContainer = styled(Box)`
display:flex;
`

const HeaderContent = () => {
  const [isOpen, setOpen] = useState(false);
  const youtubeThumbnail = `https://i.ytimg.com/vi_webp/SpU45f6jV7w/0.webp`

  return (
    <Box padding="0px 48px">
      <Box width="968px" padding="0 0 24px 0" margin="16px auto">
        <Text textColor={TextColors.White} alignment='center'>
          01 Communique's common shares are listed on the TSX Venture Exchange (TSX-V) under the symbol 'ONE' and quoted on the OTCQB market under the symbol 'OONEF'.
        </Text>
      </Box>

      <FeaturedVideoContainer backgroundImage={texture.src} flexDirection='row' flexAlignment='center'>
        <Box>
          <StyledVideoHeader textColor={TextColors.Blue}>Featured Video</StyledVideoHeader>
          <Box padding="0 48px 0 0" margin="16px 0">
            <StyledHeading as="h2">Interview with Andrew Cheung, CEO 01 Communique</StyledHeading>
          </Box>
          <Box padding="0 48px 0 0">
            <Text>01 Communique talks about its quantum-safe cybersecurity solution.</Text>
          </Box>

        </Box>
        <Box backgroundImage={youtubeThumbnail} flexDirection='row' flexAlignment='center' flexJustify='center' style={{ height: '300px' }}>
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="SpU45f6jV7w"
            onClose={() => setOpen(false)}
          />
          <PlayButton onClick={() => setOpen(true)}>
            <Image src={playButton} alt="play button" />
          </PlayButton>
        </Box>
      </FeaturedVideoContainer>
    </Box>
  )
}


const LATEST_PRESENTATION = [
  {
    date: 'Spring 2023',
    description: "Spring 2023 Investor Presentation",
    links: [{
      url: 'https://www.01com.com/pdf/2023/Presentation.pdf',
      type: 'pdf'
    }]
  },
]

const RECENT_EVENTS = [
  {
    date: 'June 15, 2023',
    description: "01 reports fiscal Q2 2023",
    links: [{
      url: 'https://www.01com.com/pdf/2023/Q2-2023-Press-Release.pdf',
      type: 'pdf'
    },
    {
      url: 'https://www.01com.com/Videos/2023/2023Q2-Presentation-recording-with-Q&A.mp4',
      type: 'video'
    },]
  },
  {
    date: 'March 21, 2023',
    description: "01 reports fiscal Q1 2023",
    links: [{
      url: 'https://www.01com.com/pdf/2023/Q1-2023-Press-Release.pdf',
      type: 'pdf'
    }]
  },
  {
    date: 'January 19, 2023',
    description: "01 reports fiscal Q4 2022",
    links: [{
      url: 'https://www.01com.com/pdf/2023/Q4-2022-Press-Release.pdf',
      type: 'pdf'
    }]
  },
  {
    date: 'September 15, 2022',
    description: "01 reports fiscal Q3 2022",
    links: [
      {
        url: 'https://01com.com/pdf/2022/Q3-2022-Press-Release.pdf',
        type: 'pdf'
      },
    ]
  },
]


// TODO: abstract border into component
const TableContent = ({ data }) => {
  return (
    <>
      <TableContainer>
        <Text variant={TextVariants.Feat2}>Date</Text>
        <Text variant={TextVariants.Feat2}>Description</Text>
        <Text variant={TextVariants.Feat2}>Relevant Links</Text>
      </TableContainer>
      <HorizontalBorder />
      {data.map(item =>
        <>
          <TableContainer>
            <Text>{item.date}</Text>
            <Text>{item.description}</Text>
            <LinkContainer>
              {
                item.links.map(link => {
                  const isPDF = link.type === 'pdf';
                  return (
                    <>
                      <Box flexDirection='row' flexAlignment='center' margin={isPDF ? '0 48px 0 -10px' : '0'}>
                        <Box margin="0px 8px">
                          <Image src={isPDF ? pdf : webinar} alt={isPDF ? 'pdf icon' : 'video icon'} />
                        </Box>
                        <Anchor href={link.url} target='_blank'>{isPDF ? 'Press Release' : 'Webinar Replay'}</Anchor>
                      </Box>
                    </>
                  )
                })
              }
            </LinkContainer>
          </TableContainer>
          <HorizontalBorder />
        </>)
      }
    </>
  )
}

const StyledLink = styled(Link)`
  text-decoration: underline;
`

export default function InvestorRelations() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Investor Relations" headerContent={<HeaderContent />}>
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <Box width="100%" padding='0 100px' margin="96px 0">
        <Box margin="0 0 96px 0">
          <StyledContentHeading as="h2">Latest Presentation</StyledContentHeading>
          <TableContent data={LATEST_PRESENTATION} />
        </Box>

        <Box margin="0 0 96px 0">
          <StyledContentHeading as="h2">Recent Events</StyledContentHeading>
          <TableContent data={RECENT_EVENTS} />
        </Box>

        <Box margin="0 0 96px 0">
          <StyledContentHeading as="h2">Information Request</StyledContentHeading>
          <Text>For more information about 01 Communique contact us at +1 905 795-2888 or +1 800 668-2185 (US/Canada), or email <StyledLink href="mailto:investorrelations@01com.com">investorrelations@01com.com</StyledLink> with any comments or suggestions.</Text>
        </Box>

        <Box margin="0 0 96px 0">
          <StyledContentHeading as="h2">Stock Quote</StyledContentHeading>
          <Text>Click <StyledLink href="https://money.tmx.com/en/quote/ONE" target="_blank">here</StyledLink> to obtain the latest stock quote.</Text>
        </Box>

        <Box margin="0 0 96px 0">
          <StyledContentHeading as="h2">Financial Results</StyledContentHeading>
          <HorizontalBorder />

          <TableContainer>
            <Text>Latest Results: Q4 2022</Text>
            <Box></Box>
            <LinkContainer>
              <Box flexDirection='row' flexAlignment='center' margin={'0 48px 0 -10px'}>
                <Box margin="0px 8px">
                  <Image src={pdf} alt='pdf icon' />
                </Box>
                <Anchor href="" target='_blank'>{'Press Release'}</Anchor>
              </Box>
            </LinkContainer>
          </TableContainer>
          <HorizontalBorder />
        </Box>

        <Text>For further information on the company's financial results, please visit <StyledLink href="https://www.sedar.com" target="_blank">www.sedar.com</StyledLink>.</Text>
      </Box>
    </Layout >
  )
}
