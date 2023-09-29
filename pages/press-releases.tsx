import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedPressItems } from '../components/PaginatedPressItems'
import { PressRoomNav } from '../components/PressRoomNav';
import { client } from '../utils/sanity/client'

type PressRelease = {
  _id: string,
  date: string,
  title: string,
  link: string,
}

export const getStaticProps = async () => {
  return {
    props: {
      pressReleases: await client.fetch<PressRelease[]>(`*[_type == "press-releases"] | order(date desc)`)
    }
  }
}


export default function PressReleases({ pressReleases }) {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressRoomNav activePage='press' />

      <PaginatedPressItems itemsPerPage={12} items={pressReleases} />
    </Layout>
  )
}
