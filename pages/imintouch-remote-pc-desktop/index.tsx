import styled from "styled-components"
import { Box } from "../../components/core"
import { breakpoints } from "../../utils/breakpoints"
import { client } from '../../sanity/lib/client'
import { useWindowSize } from "usehooks-ts"
import { useMemo } from "react"
import Layout from "../../components/Layout"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import { IITMainBanner } from "../../components/im-in-touch/IITMainBanner"


export const revalidate = 10
export const dynamic = 'force-dynamic'


const MainBannerContainer = styled(Box)`
width: 100vw;
margin:0;
`


type PressRelease = {
  _id: string,
  date: string,
  title: string,
  link: string,
}

// export const getStaticProps = async () => {
//   return {
//     props:
//       pressReleases: await client.fetch<PressRelease[]>(`*[_type == "press-releases"] | order(date desc)`, {
//         cache: 'no-store',
//         next: { revalidate }
//       })
//   }
// }


export default function ImInTouchHome({ pressReleases }) {
  const { width } = useWindowSize()
  // const featuredNewsItems = useMemo(() => pressReleases.slice(0, 3).map(item => ({
  //   ...item,
  //   date: new Intl.DateTimeFormat("en-CA", { month: 'long', day: 'numeric', year: 'numeric' }).format((new Date(item.date + 'T00:00')))
  // })), [pressReleases])

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

    </IITLayout>
  )
}
