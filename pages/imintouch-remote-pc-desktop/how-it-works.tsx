import styled from "styled-components"
import { Box, Text, TextVariants, Divider } from "../../components/core"
import { breakpoints } from "../../utils/breakpoints"
import { client } from '../../sanity/lib/client'
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading from "../../components/core/heading"
import { theme } from "../../theme"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"


export const revalidate = 10
export const dynamic = 'force-dynamic'


type ReviewsAwards = {
  _id: string,
  image: string,
  imageAltText: string,
  date: string,
  title: string,
  link: string,
}

export const getStaticProps = async () => {
  return {
    props:
    {
      reviewsAwards: await client.fetch<ReviewsAwards[]>(`*[_type == "reviews-awards"] | order(date desc)[0]`, {
        cache: 'no-store',
        next: { revalidate }
      }),
      newsUpdates: await client.fetch(`*[_type == "im-in-touch-news-updates"] | order(_updatedAt desc)[0]`, {
        cache: 'no-store',
        next: { revalidate }
      })
    }
  }
}



export default function HowItWorks() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="How It Works">
        <Text variant={TextVariants.Body1}>Testing</Text>
      </IITPageBanner>
    </IITLayout >
  )
}
