import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, SecondaryButton } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { useCallback, useEffect, useMemo, useState } from "react"
import { breakpoints } from "../../utils/breakpoints"
import { client } from '../../sanity/lib/client'
import Accordion from 'react-bootstrap/Accordion';
import { PortableText } from "@portabletext/react"
import { Anchor } from "../../components/core/anchor"
import { useWindowSize } from "usehooks-ts"
import { FAQMenuCategories } from "../../components/im-in-touch/IITFAQMenuCategories"
import { DropdownFAQMenu, FAQMenu } from "../../components/im-in-touch/IITFAQMenu"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from '@sanity/asset-utils'
import { FAQ } from "../../components/FAQ"


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
      faqs: await client.fetch<FAQ[]>(`* [_type == "im-in-touch-faqs"]
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

export default function ImInTouchFAQs({ faqs }) {
  // TODO: Why did this render 4 times? twice from faqs.tsx and twice from installHook.js
  const { width } = useWindowSize()

  const normalizedFAQs = useMemo(() => {
    const normalized = faqs.reduce((acc, faq) => {
      const category = faq.category.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category] = { category: faq.category.category, faqs: [...faq.imInTouchFAQ] }
      return acc
    }, {})
    return normalized
  }, [faqs])

  const [selectedFAQCategory, setSelectedFAQCategory] = useState('General Questions');
  const [activeKey, setActiveKey] = useState(null)

  const handleSelect = useCallback((item) => {
    setSelectedFAQCategory(item);
  }, []);

  const handleFAQClick = useCallback((faqId) => {
    setActiveKey(faqId)
  }, [])

  useEffect(() => {
    setActiveKey(null)
  }, [])

  useEffect(() => {
    const id = window.location.href.split('#')[1] || '';
    const split = id.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const category = split === 'Using Remote Wake Up' ? "Using Remote Wake-Up" : split
    setSelectedFAQCategory(category || 'General Questions')
  }, [])

  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <IITPageBanner heading="FAQs">
        <Box width='65%'>
          <Text variant={TextVariants.Body1} textColor={TextColors.White}>Choose one of the following links to find answers to your questions about our Remote Desktop Software.</Text>
        </Box>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <SecondaryButton>
            <Link href='https://www.01com.com/01com/imintouch/webhelp/desktop/Welcome.htm' target="_blank">User's Guide</Link>
          </SecondaryButton>
        </Box>
      </IITPageBanner>

      {width > 1280 &&
        <FAQMenu>
          <FAQMenuCategories FAQs={normalizedFAQs} onSelect={handleSelect} selectedCategory={selectedFAQCategory} width={width} />
        </FAQMenu>
      }

      <PageContentContainer>
        {width <= 1280 &&
          <DropdownFAQMenu selectedFAQCategory={selectedFAQCategory}>
            <FAQMenuCategories FAQs={normalizedFAQs} onSelect={handleSelect} selectedCategory={selectedFAQCategory} width={width} />
          </DropdownFAQMenu>
        }

        <Accordion defaultActiveKey={null}>
          <Box margin='0 0 48px 0'>
            <StyledHeading variant={HeadingVariants.Heading3} as="h2" id={selectedFAQCategory.trim()}>{selectedFAQCategory}</StyledHeading>
            {normalizedFAQs[selectedFAQCategory].faqs.map((faq) => (
              <FAQ setActiveItem={handleFAQClick} activeKey={activeKey} question={faq.question} answer={faq.answer} eventKey={faq._key} key={faq._key} />
            ))}
          </Box>
        </Accordion>
      </PageContentContainer>
    </IITLayout>
  )
}
