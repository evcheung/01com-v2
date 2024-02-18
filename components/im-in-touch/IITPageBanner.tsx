import styled from 'styled-components'
import { Box, } from '../core'
import React, { ReactNode } from 'react'
import bannerBg from '../../public/assets/iit-page-banner.jpg'
import Heading, { HeadingColors } from '../core/heading'
import { breakpoints } from '../../utils/breakpoints'
import { theme } from '../../theme'

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
const BannerContainer = styled(Box) <{ hasChildren: boolean }>`
  margin: 178px 0 96px 0;
  ${props => props.hasChildren
    ? breakpoints("margin", "", [
      { 1160: "120px 0 64px 0" },
    ])
    : breakpoints("margin", "", [
      { 1160: "140px 0 64px 0" },
    ])}
  ${props => props.hasChildren
    ? breakpoints("margin", "", [
      { 760: "104px 0 52px 0" },
    ])
    : breakpoints("margin", "", [
      { 760: "120px 0 48px 0" },
    ])}
`
const ChildrenContainer = styled(Box)`
max-width: 888px;
min-width: 500px;
width: 80%;

margin: 0 auto;
text-align: center;
margin-top: 16px;
display: flex;
flex-direction: column;
align-items:center;
a {
  :first-of-type {
    button {
    margin-right: 24px;
    }
  }
}
button {
  min-width: 120px;
  padding: 16px 24px;
  ${breakpoints("padding", "", [
  { 760: '12px 24px' },
])}
}

${breakpoints("width", "", [
  { 760: '100%' },
])}
${breakpoints("min-width", "", [
  { 760: '100%' },
])}
${breakpoints("padding", "", [
  { 760: '0 16px' },
])}
`
// TODO: Add breadcrumbs
export const IITPageBanner = ({ heading, children }: { heading: string, children?: ReactNode }) => {
  console.log('👉👉👉 children', !!children);

  return (
    <StyledBox width="100vw" flexDirection='column' flexJustify='space-between'>
      <BannerContainer hasChildren={!!children}>
        <StyledHeading headingColor={HeadingColors.White}>{heading}</StyledHeading>
        {children &&
          <ChildrenContainer>
            {children}
          </ChildrenContainer>}
      </BannerContainer>
    </StyledBox>
  )
}
