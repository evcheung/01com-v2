import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, SecondaryButton } from "../../../components/core"
import Head from "next/head"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../../components/core/heading"
import { theme } from "../../../theme"
import Link from "next/link"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { useCallback, useEffect, useMemo, useState } from "react"
import { breakpoints } from "../../../utils/breakpoints"
import { client } from '../../../sanity/lib/client'
import Accordion from 'react-bootstrap/Accordion';
import { PortableText } from "@portabletext/react"
import { Anchor } from "../../../components/core/anchor"
import { useWindowSize } from "usehooks-ts"
import { FAQMenuCategories } from "../../../components/im-in-touch/IITFAQMenuCategories"
import { DropdownFAQMenu, FAQMenu } from "../../../components/im-in-touch/IITFAQMenu"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from '@sanity/asset-utils'
import { FAQ } from "../../../components/FAQ"

export const revalidate = 10
// export const dynamic = 'force-dynamic'

const StyledHeading = styled(Heading)`
margin: 0 0 16px 0;
}
`
type FAQ = {
  _id: string,
  question: string,
  answer: string,
  category: { category: string }
}


export const getStaticProps = async () => {
  return {
    props:
    {
      faqs: await client.fetch<FAQ[]>(`* [_type == "im-in-touch-server-faqs"]
      {
        ...,
        category -> { category }
      }`,
        {
          cache: 'no-store',
          ssr: false
        }),
    }
  }
}


export default function ImInTouchServerFAQs({ faqs }) {
  // TODO: Why did this render 4 times? twice from faqs.tsx and twice from installHook.js
  const { width } = useWindowSize()

  // const faqs = useMemo(() => {
  //   const normalized = faqs.reduce((acc, faq) => {
  //     const category = faq.category.category
  //     if (!acc[category]) {
  //       acc[category] = []
  //     }
  //     acc[category] = { category: faq.category.category, faqs: [...faq.imInTouchFAQ] }
  //     return acc
  //   }, {})
  //   return normalized
  // }, [faqs])

  const [selectedFAQCategory, setSelectedFAQCategory] = useState('General Questions');
  const [activeKey, setActiveKey] = useState(null)


  const handleFAQClick = useCallback((faqId) => {
    setActiveKey(faqId)
  }, [])

  useEffect(() => {
    setActiveKey(null)
  }, [])

  return (
    <IITLayout subSite="server">
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <IITPageBanner heading="FAQs">
      </IITPageBanner>

      <PageContentContainer>
        <Accordion defaultActiveKey={null}>
          <Box margin='0 0 48px 0'>
            <StyledHeading variant={HeadingVariants.Heading3} as="h2" id={selectedFAQCategory.trim()}>{selectedFAQCategory}</StyledHeading>
            {faqs[0].imInTouchServerFAQ.map((faq) => (
              <FAQ setActiveItem={handleFAQClick} activeKey={activeKey} question={faq.question} answer={faq.answer} eventKey={faq._key} key={faq._key} />
            ))}
          </Box>
        </Accordion>
      </PageContentContainer>
    </IITLayout>
  )
}
