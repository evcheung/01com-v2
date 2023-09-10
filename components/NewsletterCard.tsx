import { Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import { Anchor } from './core/anchor'
import styled from 'styled-components'
import Image from 'next/image'

const NewsletterCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  padding: 48px;
`

interface NewsletterCard {
  heading: string,
  items: Array<any>,
  key: string,
}

const StyledText = styled(Text)`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight[400]};
`
const LinkRows = styled(Box)`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 12px;
  margin-top: 20px;
`

const StyledAnchor = styled(Anchor)`
  line-height: 30px;
  margin: 0px 2px;
`

export const NewsletterCard = ({ heading, items, key }: NewsletterCard) => {
  return (
    <NewsletterCardContainer flexDirection='column' flexJustify='flex-start' flexAlignment='flex-start' key={key}>
      <Box>
        <StyledText>{heading}</StyledText>
      </Box>
      <LinkRows>
        {items && items.map(item => {
          return (
            <Box flexDirection='row' flexAlignment='center' flexJustify='flex-start'>
              {(item.link ? <StyledAnchor href={item.link}>{item.label}</StyledAnchor> : <Text variant={TextVariants.Feat1}>{item.label}</Text>)}
              {(item.items &&
                <Box flexDirection='row' flexAlignment='center' flexJustify='space-between' margin='0 0 0 4px'>
                  {item.items.map(item => (
                    <StyledAnchor href={item.link}>{item.label}</StyledAnchor>
                  ))}
                </Box>
              )}
            </Box>
          )
        })}
      </LinkRows>
    </NewsletterCardContainer>
  )
}
