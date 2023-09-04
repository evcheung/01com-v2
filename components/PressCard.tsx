import { Box, Text } from './core'
import { theme } from '../theme'
import { Anchor } from './core/anchor'
import styled from 'styled-components'

const PressCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  min-height: 312px;
  padding: 48px;
`

export const PressCard = ({ date, description, link }) => {
  return (
    <PressCardContainer flexDirection='column' flexJustify='space-between' flexAlignment='flex-start'>
      <Box>
        <Text style={{ fontSize: theme.fontSize.md }}>{date}</Text>
        <Text style={{ fontSize: theme.fontSize.xl, margin: '16px 0px 24px 0px' }}>{description}</Text>
      </Box>
      <Anchor href={link} style={{ fontSize: theme.fontSize.md }}>Read Article</Anchor>
    </PressCardContainer>
  )
}
