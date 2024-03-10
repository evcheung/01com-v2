import styled from "styled-components"
import { Box, Text, Divider } from "../../components/core"
import { breakpoints } from "../../utils/breakpoints"
import { client } from '../../sanity/lib/client'
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import { IITMainBanner } from "../../components/im-in-touch/IITMainBanner"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { IITProductCard } from "../../components/im-in-touch/IITProductCard"
import { IITContentBanners } from "../../components/im-in-touch/IITContentBanners"
import { theme } from "../../theme"
import { Anchor, AnchorVariants } from "../../components/core/anchor"
import Link from "next/link"
import { imageUrlFor } from "../../utils/sanity/image-url-builder"


export const revalidate = 10
// export const dynamic = 'force-dynamic'


const MainBannerContainer = styled(Box)`
width: 100vw;
margin:0;
`

const ProductsHeadingContainer = styled(Box)`
width: 740px;
margin: 84px auto 48px auto;
${breakpoints("width", "", [
  { 960: '100%' },
])}
${breakpoints("margin", "", [
  { 960: '48px auto 24px auto' },
])}
`

const ProductsHeading = styled(Heading)`
text-align: center;
font-size: 36px;
line-height: 48px;
${breakpoints("font-size", "", [
  { 760: '24px' },
])}
${breakpoints("line-height", "", [
  { 760: '40px' },
])}
`


const ProductsCardContainer = styled(Box)`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
grid-gap: 24px;
margin-bottom: 96px;
${breakpoints("grid-template-columns", "", [
  { 960: 'repeat(2, 1fr)' },
])}

${breakpoints("margin-bottom", "", [
  { 960: '48px' },
])}
`


const InfoCardContainer = styled(Box)`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 100%;
grid-gap: 24px;
margin: 96px auto;
${breakpoints("grid-template-columns", "", [
  { 870: '1fr' },
])}
${breakpoints("grid-gap", "", [
  { 870: '16px' },
])}
${breakpoints("margin", "", [
  { 1260: '48px auto' },
])}
${breakpoints("margin", "", [
  { 960: '32px auto' },
])}
`

const InfoCard = styled(Box)`
background: ${theme.colors.neutral.xs};
width: 100%;
padding: 48px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const InfoCardText = styled(Text)`
font-size: 16px;
line-height: 32px;
`
const InfoCardLinkText = styled(InfoCardText)`
color: ${theme.colors.brand.primary};
`


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
        ssr: false
      }),
      newsUpdates: await client.fetch(`*[_type == "im-in-touch-news-updates"] | order(_updatedAt desc)[0]`, {
        cache: 'no-store',
        ssr: false
      })
    }
  }
}



export default function ImInTouchHome({ reviewsAwards, newsUpdates }) {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBannerContainer margin="48px 0px" width="100%">
        <IITMainBanner />
      </MainBannerContainer>
      <ProductsHeadingContainer>
        <ProductsHeading>Remote Working with Absolute Security via Any Device from Anywhere, Anytime</ProductsHeading>
      </ProductsHeadingContainer>
      <ProductsCardContainer>
        <IITProductCard variant='browser' />
        <IITProductCard variant='ios' />
        <IITProductCard variant='android' />
        <IITProductCard variant='tablet' />
      </ProductsCardContainer>
      <IITContentBanners />
      <InfoCardContainer>
        <InfoCard>
          <Box>
            <Box margin="0 0 16px 0">
              <Heading variant={HeadingVariants.Heading3}>News & Updates</Heading>
            </Box>
            <Divider />
            {newsUpdates.newsUpdatesItems.map(item => (
              <>
                <Box margin="16px 0" key={item.label}>
                  <Link href={item.url} target="_self">
                    <InfoCardLinkText>{item.label}</InfoCardLinkText>
                  </Link>
                </Box>
                <Divider />
              </>
            ))
            }
          </Box>

          <Box margin="24px 0 0 0">
            <Anchor href="/newsletters" variant={AnchorVariants.Small}>View All</Anchor>
          </Box>

        </InfoCard>

        <InfoCard>
          <Box>
            <Box margin="0 0 16px 0">
              <Heading variant={HeadingVariants.Heading3}>Usage Tips</Heading>
            </Box>
            <Divider />

            <Box margin="16px 0">
              <InfoCardText>
                You can temporarily add Guest Users to I'm InTouch, perfect for conducting online meetings and presentations.
              </InfoCardText>
            </Box>

            <Divider />
          </Box>
          <Box margin="24px 0 0 0">
            <Anchor href="/imintouch-remote-pc-desktop/features/remote-web-conferencing/" variant={AnchorVariants.Small}>Learn More</Anchor>
          </Box>
        </InfoCard>

        <InfoCard>
          <Box>
            <Heading variant={HeadingVariants.Heading3}>Press Endorsements</Heading>
            <Box margin="16px 0">
              <img src={imageUrlFor(reviewsAwards.image).height(120).url()} alt={reviewsAwards.imageAltText}></img>
            </Box>
          </Box>
          <Box margin="24px 0 0 0">
            <Anchor href="/reviews-awards" variant={AnchorVariants.Small}>Learn More</Anchor>
          </Box>
        </InfoCard>
      </InfoCardContainer>
    </IITLayout >
  )
}
