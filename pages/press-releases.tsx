import Layout, { LayoutVariants } from '../components/Layout'
import { MainBanner } from '../components/MainBanner'
import { PressCard } from '../components/PressCard'
import Head from 'next/head'
import { Box, ButtonColors, PrimaryButton } from '../components/core'
import Heading, { HeadingVariants } from '../components/core/heading'
import styled from 'styled-components'

const CardGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 24px;
`

export default function PressReleases() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardGrid>
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />
      </CardGrid>


    </Layout>
  )
}
