import { Box, Text } from './core'
import { theme } from '../theme'
import { Anchor } from './core/anchor'
import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '../utils/breakpoints'

const PressCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  min-height: 312px;
  padding: 48px;

 ${breakpoints("min-height", "", [
  { 760: '280px' },
])}
`

interface PressCardProps {
  date: string,
  description: string,
  link: string,
  img?: string,
  imgAlt?: string,
}

const PressCardDescription = styled(Text)`
font-size: ${theme.fontSize.xl};
 margin: 16px 0px 24px 0px;
 
 ${breakpoints("font-size", "", [
  { 1200: theme.fontSize.lg },
])}
 ${breakpoints("line-height", "", [
  { 1200: '32px' },
])}
 ${breakpoints("font-size", "", [
  { 760: theme.fontSize.lg },
])}
 
`

export const PressCard = ({ date, description, link, img, imgAlt }: PressCardProps) => {
  return (
    <PressCardContainer flexDirection='column' flexJustify='space-between' flexAlignment='flex-start'>
      {img && <Box margin="0 0 24px 0"><Image src={img} alt={imgAlt} height={84} /></Box>}
      <Box>
        <Text style={{ fontSize: theme.fontSize.md }}>{date}</Text>
        <PressCardDescription>{description}</PressCardDescription>
      </Box>
      <Anchor href={`${link}`} target="_blank">Read Article</Anchor>
    </PressCardContainer>
  )
}
