import styled from 'styled-components'
import { Box, Text, } from './core'
import React, { ReactNode } from 'react'
import bannerBg from '../public/assets/blue-texture.jpg'
import Heading, { HeadingColors } from './core/heading'
import { NavBar, NavBarVariants } from './NavBar'

const StyledBox = styled(Box)`
  background: no-repeat top/cover url("${bannerBg.src}");
`
// TODO: Add breadcrumbs
export const PageHeader = ({ label, children }: { label: string, children: ReactNode }) => {
  return (
    <StyledBox width="100vw" flexDirection='column' flexJustify='space-between'>
      <NavBar variant={NavBarVariants.Dark} />

      <Box margin="66px 0px">
        <Heading headingColor={HeadingColors.White} style={{ textAlign: 'center' }}>{label}</Heading>
        {children}
      </Box>
    </StyledBox>
  )
}
