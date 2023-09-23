import { CareersAccordion } from '../components/CareersAccordion'
import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { Box } from '../components/core'
import styled from 'styled-components'
import { breakpoints } from '../utils/breakpoints'

const CareersContainer = styled(Box)`
  margin: 96px 0;
  width: 100%;  
  ${breakpoints("margin", "", [
  { 760: '48px 0' },
])}
`

export default function Careers() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Careers">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <CareersContainer>
        <CareersAccordion />
      </CareersContainer>
    </Layout>
  )
}
