import styled from 'styled-components'
import { Box, Text, } from './core'
import React, { ReactNode } from 'react'
import bannerBg from '../public/assets/blue-texture.jpg'
import Heading, { HeadingColors } from './core/heading'
import { NavBar, NavBarVariants } from './NavBar'
import { breakpoints } from '../utils/breakpoints'
import { theme } from '../theme'

const StyledBox = styled(Box)`
  background: no-repeat top/cover url("${bannerBg.src}");
`

const StyledHeading = styled(Heading)`
&&& {
  text-align: center;
  ${breakpoints("font-size", "", [
  { 760: theme.fontSize.xxl },
])}
}
`
const HeadingContainer = styled(Box)`
  margin: 96px 0px;
  ${breakpoints("margin", "", [
  { 1160: "66px 0" },
])}
  ${breakpoints("margin", "", [
  { 760: "32px 0" },
])}
`
// TODO: Add breadcrumbs
export const PageHeader = ({ label, children }: { label: string, children: ReactNode }) => {
  return (
    <StyledBox width="100vw" flexDirection='column' flexJustify='space-between'>
      <NavBar variant={NavBarVariants.Dark} />

      <HeadingContainer>
        <StyledHeading headingColor={HeadingColors.White}>{label}</StyledHeading>
        {children}
      </HeadingContainer>
    </StyledBox>
  )
}
