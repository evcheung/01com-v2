import { Box, Text, TextVariants } from './core'
import { theme } from '../theme'
import { Anchor } from './core/anchor'
import styled from 'styled-components'

const NewsletterCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  padding: 48px;
`
interface NewsletterCard {
  heading: string,
  items: Array<any>,
  itemKey: string,
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

export const NewsletterCard = ({ heading, items, itemKey }: NewsletterCard) => {
  return (
    <NewsletterCardContainer flexDirection='column' flexJustify='flex-start' flexAlignment='flex-start' key={`card-${itemKey}`}>
      <Box>
        <StyledText>{heading}</StyledText>
      </Box>
      <LinkRows>
        {items && items.map(item => {
          return (
            <Box flexDirection='row' flexAlignment='center' flexJustify='flex-start' key={item.month}>
              {(item.links.length <= 1 ?
                <StyledAnchor href={item.links[0]}>{item.month}</StyledAnchor>
                :
                <>
                  <Text variant={TextVariants.Feat1}>{item.month}</Text>
                  <Box flexDirection='row' flexAlignment='center' flexJustify='space-between' margin='0 0 0 4px'>
                    {item.links.map((link, i) => (
                      <StyledAnchor href={link} target='_blank' key={link}>#{item.links.length - i}</StyledAnchor>
                    ))}
                  </Box>
                </>)}
            </Box>
          )
        })}
      </LinkRows>
    </NewsletterCardContainer>
  )
}
