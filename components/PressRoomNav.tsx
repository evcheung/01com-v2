import styled from "styled-components"
import { Box, Text, TextVariants } from "./core"
import { theme } from "../theme"
import Link from "next/link"

interface PressRoomNavProps { activePage: 'press' | 'reviews' | 'newsletters' }
interface NavItemProps { active: boolean }

const StyledText = styled(Text) <NavItemProps>`
  box-sizing: border-box;
  line-height: 24px;
  padding-bottom: 4px;
  color: ${props => props.active ? theme.colors.brand.primary : theme.colors.neutral.xl};
  border-bottom: ${props => props.active ? `2px solid ${theme.colors.brand.primary}` : `2px solid transparent`};
  margin: 0px 24px;
`

export const PressRoomNav = ({ activePage = 'press' }: PressRoomNavProps) => {
  const isPressActive = activePage === 'press';
  const isReviewsAwardsActive = activePage === 'reviews';
  const isNewslettersActive = activePage === 'newsletters';

  return (
    <Box flexDirection="row" flexAlignment="center" flexJustify="space-between" margin="86px 0 0 0">
      <Link href='/press-releases'>
        <StyledText variant={TextVariants.Feat1} active={isPressActive}>Press Releases</StyledText>
      </Link>
      <Link href='/reviews-awards'>
        <StyledText variant={TextVariants.Feat1} active={isReviewsAwardsActive}>Reviews / Awards</StyledText>
      </Link>
      <Link href='/newsletters'>
        <StyledText variant={TextVariants.Feat1} active={isNewslettersActive}>Newsletters</StyledText>
      </Link>
    </Box>
  )
}
