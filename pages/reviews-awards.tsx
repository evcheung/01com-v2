import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedPressItems } from '../components/PaginatedPressItems'
import awardImg from '../public/assets/award.jpg'
import { PressRoomNav } from '../components/PressRoomNav';

const awardItems = [
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
    imgAlt: "",
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
    imgAlt: "",
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
  {
    date: "September 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: '/',
    img: awardImg,
  },
];

// TODO: update all meta tags
export default function ReviewsAwards() {
  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressRoomNav activePage='reviews' />

      <PaginatedPressItems itemsPerPage={9} items={awardItems} />
    </Layout>
  )
}
