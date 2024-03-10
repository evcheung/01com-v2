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

export const revalidate = 10
// export const dynamic = 'force-dynamic'

const StyledHeading = styled(Heading)`
margin: 0 0 16px 0;
}
`
const Question = styled(Heading)`
&&& {
  font-size: 18px;
  margin-bottom: 0;
  font-weight: ${theme.fontWeight[300]};
  line-height: auto;
    
    ${breakpoints("font-size", "", [
  { 760: theme.fontSize.md },
])
  }
}`

const StyledAccordionItem = styled(Accordion.Item)`
  background: white;
  width: 100%;
  // for some reason needed to avoid width shifting in expanded mode
  max-width: 1010px;
  border: none;
  padding: 0;
  margin-bottom: 8px;

  .accordion-item:last-of-type {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion-item:first-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .accordion-item {
    color: ${theme.colors.neutral.xl};
    background-color: none;
    border: none;
  }
  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 0;
    border-top-right-radius: 0; 
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  .accordion-button {
    padding: 16px;
    font-size: 18px;
    ${breakpoints("font-size", "", [
  { 760: '16px' },
])}
  }
  .accordion-button:focus {
    z-index: 3;
    border-color: none;
    outline: 0;
    box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: inherit;
    box-shadow: none;
    
    h3 {
      color: ${theme.colors.brand.primary};
    }
  }
  .accordion-body {
    padding: 0;
  }

  .accordion-button::after {
    display: none;
  }
`

const StyledText = styled(Text)`
margin-bottom: 18px;
`

const AnswerContainer = styled(Box)`
padding: 0 16px 16px 16px;
`

// const StyledLineItem = styled.li`
// background: url(${ bullet.src }) no - repeat 0 10px;
// padding - left: 32px;
// margin - bottom: 10px;
// `

// const StyledList = styled.ul`
// padding: 0;
// list - style: none;
// `

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

const StyledRichtextHeading = styled.h4`
font-size: 18px;
`

const portableTextComponents = {
  block: {
    h4: ({ children }) => <StyledRichtextHeading>{children}</StyledRichtextHeading>,
    normal: ({ children }) => <StyledText variant={TextVariants.Body2}>{children}</StyledText>,
  },
  types: {
    image: ({ value }) => <img src={value.imageUrl} />
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Anchor href={value.href} target="_blank">{children}</Anchor>
      )
    },
  },
}

const Plus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
    <path stroke={theme.colors.neutral.xl} stroke-width="0.4" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
  </svg>
)
const Minus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
    <path stroke={theme.colors.brand.primary} fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
  </svg>
)

const FAQ = ({ question, answer, setActiveItem, activeKey, eventKey }) => {
  const isActive = activeKey === eventKey

  const handleClick = useCallback(() =>
    activeKey === eventKey
      ? setActiveItem(null)
      : setActiveItem(eventKey),
    [activeKey, eventKey])


  return (
    <StyledAccordionItem eventKey={eventKey} onClick={handleClick}>
      <Accordion.Header as='div'>
        <Box flexDirection="row" flexAlignment="center" flexJustify="space-between" width={'100%'}>
          <Question variant={HeadingVariants.Heading3}>{question}</Question>
          {isActive ? <Minus /> : <Plus />}
        </Box>
      </Accordion.Header>

      <Accordion.Body>
        <AnswerContainer>
          {/* TODO: fix typing */}
          <PortableText value={answer} components={portableTextComponents} />
        </AnswerContainer>
      </Accordion.Body>
    </StyledAccordionItem>
  )
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


  const [selectedFAQCategory, setSelectedFAQCategory] = useState(Object.keys(normalizedFAQs)[0].trim());
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

  /* 
  * TODO: Inline text item styles
  * TODO: Populate CMS
   */

  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <IITPageBanner heading="FAQs">
        <Box width='95%'>
          <Text variant={TextVariants.Body1} textColor={TextColors.White}>Choose one of the following links to find answers to your questions about our Remote Desktop Software.</Text>
        </Box>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <SecondaryButton>
            <Link href='/imintouch-remote-pc-desktop/users-guide/'>User's Guide</Link>
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
              <FAQ setActiveItem={handleFAQClick} activeKey={activeKey} question={faq.question} answer={faq.answer} eventKey={faq._key} />
            ))}
          </Box>
        </Accordion>
      </PageContentContainer>
    </IITLayout>
  )
}
