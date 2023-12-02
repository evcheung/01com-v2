import Layout, { LayoutVariants } from '../components/Layout'
import Head from 'next/head'
import { PaginatedPressItems } from '../components/PaginatedPressItems'
import { PressRoomNav } from '../components/PressRoomNav';
import { client } from '../sanity/lib/client';
import { useMemo } from 'react';
import { imageUrlFor } from '../utils/sanity/image-url-builder';

type ReviewsAwards = {
  _id: string,
  image: string,
  imageAltText: string,
  date: string,
  title: string,
  link: string,
}

export const revalidate = 10
export const dynamic = 'force-dynamic'

export const getStaticProps = async () => {
  return {
    props: {
      reviewsAwards: await client.fetch<ReviewsAwards[]>(`*[_type == "reviews-awards"] | order(date desc)`, { cache: 'no-store' })
    },
  }
}

// TODO: update all meta tags
export default function ReviewsAwards({ reviewsAwards }) {
  const reviewsAwardsWithFetchedImage = useMemo(() =>
    reviewsAwards.map(item => {
      return {
        ...item,
        image: imageUrlFor(item.image).height(84).url()
      }
    }), [reviewsAwards])

  return (
    <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">
      <Head>
        <title>Remote Desktop Software Press and Reviews</title>
        <meta name="description" content="Reviews and press coverage for I'm InTouch remote desktop software and remote control software solutions including 'Product of the Year 2012' award." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PressRoomNav activePage='reviews' />

      <PaginatedPressItems itemsPerPage={9} items={reviewsAwardsWithFetchedImage} />
    </Layout>
  )
}
