import styled from "styled-components"
import { Box, Text, TextVariants } from "../components/core"
import Head from "next/head"
import IITLayout from "../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../components/core/heading"
import { theme } from "../theme"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"
import { breakpoints } from "../utils/breakpoints"
import { client } from '../sanity/lib/client'
import Accordion from 'react-bootstrap/Accordion';
import { PortableText } from "@portabletext/react"
import { Anchor } from "../components/core/anchor"
import urlBuilder from "@sanity/image-url"
import { getImageDimensions } from '@sanity/asset-utils'


const StyledRichtextHeading = styled.h4`
font-size: 18px;
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
type FAQ = {
  _id: string,
  question: string,
  answer: string,
  category: { category: string }
}
const PortableImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={urlBuilder(client)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

const portableTextComponents = {
  block: {
    h4: ({ children }) => <StyledRichtextHeading>{children}</StyledRichtextHeading>,
    normal: ({ children }) => <StyledText variant={TextVariants.Body2}>{children}</StyledText>,
  },
  types: {
    image: PortableImageComponent
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

export const FAQ = ({ question, answer, setActiveItem, activeKey, eventKey }) => {
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
          {/* @ts-ignore */}
          <PortableText value={answer} components={portableTextComponents} />
        </AnswerContainer>
      </Accordion.Body>
    </StyledAccordionItem>
  )
}
