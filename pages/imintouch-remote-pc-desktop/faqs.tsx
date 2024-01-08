import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, SecondaryButton } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { useMemo } from "react"
import { breakpoints } from "../../utils/breakpoints"
import { client } from '../../sanity/lib/client'
import Accordion from 'react-bootstrap/Accordion';
import { PortableText } from "@portabletext/react"
import { Anchor } from "../../components/core/anchor"

export const revalidate = 10
export const dynamic = 'force-dynamic'

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
  { 760: theme.fontSize.lg },
])
  }
}`

const StyledAccordionItem = styled(Accordion.Item)`
  background: white;
  width: 100%;
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

    ${breakpoints("padding", "", [
  { 1200: '42px' },
])}
    ${breakpoints("padding", "", [
  { 760: '32px' },
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
`
const StyledText = styled(Text)`
margin-bottom: 18px;
`

const AccordionContainer = styled(Box)`
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
          next: { revalidate }
        }),
    }
  }
}

const portableTextComponents = {
  block: {
    h4: ({ children }) => <h4>{children}</h4>,
    normal: ({ children }) => <StyledText variant={TextVariants.Body2}>{children}</StyledText>,
  },
  types: {
    image: ({ value }) => <img src={value.imageUrl} />
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Anchor href={value} target="_blank">{children}</Anchor>
      )
    },
  },
}

const Answer = ({ eventKey, category, question, answer }) => {
  return <StyledAccordionItem eventKey={eventKey} key={`${category}${eventKey}`}>
    <Accordion.Header as='div'>
      <Question variant={HeadingVariants.Heading3}>{question}</Question>
    </Accordion.Header>

    <Accordion.Body>
      <AccordionContainer>
        <PortableText value={answer} components={portableTextComponents} />
      </AccordionContainer>
    </Accordion.Body>
  </StyledAccordionItem>
}

const FAQMenu = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${theme.colors.neutral.xs};
  width: 100vw;
  p {
    margin: 24px;
    line-height: 20px;
    font-size: 14px;
    ${breakpoints("margin", "", [
  { 1460: '24px 12px' },
])}
    ${breakpoints("font-size", "", [
  { 1460: '14px' },
])}
  }
}
`

export default function ImInTouchFAQs({ faqs }) {
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

  console.log('👉👉👉 normalizedFAQs', normalizedFAQs);

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

      <FAQMenu>
        <a href={`${normalizedFAQs['General Questions'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>{normalizedFAQs['General Questions'].category}</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>{normalizedFAQs['Security'].category}</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Administrator Functions</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Using I'm InTouch</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Using Remote Wake-Up</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Billing</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Questions on Remote Access</Text>
        </a>
        <a href={`${normalizedFAQs['Security'].category.trim()}`}>
          <Text variant={TextVariants.Feat1}>Remote Audio Questions</Text>
        </a>
      </FAQMenu>

      <PageContentContainer>
        <Accordion defaultActiveKey={null}>
          <Box margin='0 0 48px 0'>
            <StyledHeading variant={HeadingVariants.Heading3} as="h2" id={normalizedFAQs['General Questions'].category.trim()}>{normalizedFAQs['General Questions'].category}</StyledHeading>
            {normalizedFAQs['General Questions'].faqs.map((faq, index) => (
              <Answer category={faq.category} question={faq.question} answer={faq.answer} eventKey={index} />
            ))}
          </Box>

          <Box margin='0 0 48px 0'>
            <StyledHeading variant={HeadingVariants.Heading3} as="h2" id={normalizedFAQs['Security'].category.trim()}>{normalizedFAQs['Security'].category}</StyledHeading>
            {normalizedFAQs['Security'].faqs.map((faq, index) => (
              <Answer category={faq.category} question={faq.question} answer={faq.answer} eventKey={index} />
            ))}
          </Box>
        </Accordion>
        <Box margin='48px 0 0 0'>
          <StyledHeading variant={HeadingVariants.Heading3}>Remote wake-up feature requirement</StyledHeading>
          <Text variant={TextVariants.Body2}>This feature requires a minimum of 2 computers on the same wired network with I'm InTouch installed and at least one of them must be "on".</Text>
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}
