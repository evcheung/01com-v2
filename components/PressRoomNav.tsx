import styled from "styled-components"
import { Box, Text, TextVariants } from "./core"
import { theme } from "../theme"
import Link from "next/link"
import { useWindowSize } from "usehooks-ts"
import { Dropdown } from "react-bootstrap"

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

const StyledMobileText = styled(Text) <NavItemProps>`
  box-sizing: border-box;
  line-height: 24px;
  color: ${props => props.active ? theme.colors.brand.primary : theme.colors.neutral.xl};
  margin: 8px 0px;
`

const StyledDropdown = styled(Dropdown)`
  width: 100%;
  border: 1px solid ${theme.colors.neutral.md};
  background: ${theme.colors.neutral.xs};
  margin: 32px 0;

  .btn.show  {
    border-radius: 0;
    border-color: ${theme.colors.brand.primary}
  }

  .dropdown-menu {
    width: 100%;
    border-radius: 0;
  }

  .dropdown-item {
    :hover {
      background: none;
    }
  }
`

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :after {
    display: inline-block !important;
    width: 10px !important;
    height: 10px !important;
    border-top: 2px solid ${theme.colors.neutral.xl} !important;
    border-right: 2px solid ${theme.colors.neutral.xl} !important;
    transform: rotate(135deg) !important;
    border-bottom: none;
    border-left: none;
    margin-top: -4px;
  }

`

export const PressRoomNav = ({ activePage = 'press' }: PressRoomNavProps) => {
  const isPressActive = activePage === 'press';
  const isReviewsAwardsActive = activePage === 'reviews';
  const isNewslettersActive = activePage === 'newsletters';

  const getDropdownLabel = (activePage) => {
    switch (activePage) {
      case 'press':
        return "Press Releases"
      case 'reviews':
        return 'Reviews / Awards'
      case 'newsletters':
        return 'Newsletters'
    }
  }

  const { width } = useWindowSize()

  return width > 560 ? (
    <Box flexDirection="row" flexAlignment="center" flexJustify="space-between" margin="86px 0 0 0">
      <Link href='/press-releases'>
        <StyledText variant={TextVariants.Feat1} active={isPressActive}>Press Releases</StyledText>
      </Link>
      <Box margin="0 32px">
        <Link href='/reviews-awards'>
          <StyledText variant={TextVariants.Feat1} active={isReviewsAwardsActive}>Reviews / Awards</StyledText>
        </Link>
      </Box>
      <Link href='/newsletters'>
        <StyledText variant={TextVariants.Feat1} active={isNewslettersActive}>Newsletters</StyledText>
      </Link>
    </Box>
  ) :
    <StyledDropdown>
      <StyledDropdownToggle variant="">{getDropdownLabel(activePage)}</StyledDropdownToggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link href='/press-releases'>
            <StyledMobileText variant={TextVariants.Feat1} active={isPressActive}>Press Releases</StyledMobileText>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href='/reviews-awards'>
            <StyledMobileText variant={TextVariants.Feat1} active={isReviewsAwardsActive}>Reviews / Awards</StyledMobileText>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href='/newsletters'>
            <StyledMobileText variant={TextVariants.Feat1} active={isNewslettersActive}>Newsletters</StyledMobileText>
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </StyledDropdown>
}
