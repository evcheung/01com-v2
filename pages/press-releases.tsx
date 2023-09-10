import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedPressItems } from '../components/PaginatedPressItems'
import { PressRoomNav } from '../components/PressRoomNav';

const items = [
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
  },
];


export default function PressReleases() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressRoomNav activePage='press' />

      <PaginatedPressItems itemsPerPage={12} items={items} />
    </Layout>
  )
}
