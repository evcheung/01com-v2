import { Box, Text } from './core'
import { theme } from '../theme'
import { Anchor } from './core/anchor'
import styled from 'styled-components'
import Image from 'next/image'

const PressCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  min-height: 312px;
  padding: 48px;
`

interface PressCardProps {
  date: string,
  description: string,
  link: string,
  img?: string,
  imgAlt?: string,
}

export const PressCard = ({ date, description, link, img, imgAlt }: PressCardProps) => {
  return (
    <PressCardContainer flexDirection='column' flexJustify='space-between' flexAlignment='flex-start'>
      {img && <Image src={img} alt={imgAlt} height={84} />}
      <Box margin="24px 0px 0px 0px">
        <Text style={{ fontSize: theme.fontSize.md }}>{date}</Text>
        <Text style={{ fontSize: theme.fontSize.xl, margin: '16px 0px 24px 0px' }}>{description}</Text>
      </Box>
      <Anchor href={link}>Read Article</Anchor>
    </PressCardContainer>
  )
}
