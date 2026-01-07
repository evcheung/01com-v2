import styled from 'styled-components'
import { Box, } from '../core'
import React, { ReactNode } from 'react'
import bannerBg from '../../public/assets/iit-page-banner.jpg'
import Heading, { HeadingColors } from '../core/heading'
import { breakpoints } from '../../utils/breakpoints'
import { theme } from '../../theme'
import Image from 'next/image'
import { Breadcrumb } from '../Breadcrumb'

const StyledBox = styled(Box)`
  background: no-repeat top/cover url("${bannerBg.src}");
  height: 84px;                    // desktop/nav height
  display: flex;
  align-items: center;             // center content vertically

  ${breakpoints("height", "", [
    { 1070: "102px" },               // smaller height on smallest screens
  ])}
`;


const StyledHeading = styled(Heading)`
&&& {
  text-align: center;
  font-size: ${theme.fontSize.xxxxl};
  ${breakpoints("font-size", "", [
  { 760: theme.fontSize.xxl },
])}
}
`
const BannerContainer = styled(Box) <{ hasChildren: boolean }>`
  margin: 96px 0px;
  ${breakpoints("margin", "", [
  { 1160: "66px 0" },
])}
  ${breakpoints("margin", "", [
  { 760: "32px 0" },
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
  button {
  margin-right: 24px;

  }
  :last-of-type {
    button {
    margin-right: 0;
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

const IconContainer = styled(Box)`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 16px;
`
// TODO: Add breadcrumbs
export const BlogReadBanner = ({ heading, children, iconSrc }: { heading: string, children?: ReactNode, iconSrc?: any }) => {
  return (
    <StyledBox width="100vw" flexDirection='column' flexJustify='space-between'>
      <BannerContainer hasChildren={!!children}>
        {iconSrc && <IconContainer><Image alt="" src={iconSrc} width={64} height={64} /></IconContainer>}
        <StyledHeading headingColor={HeadingColors.White}>{heading}</StyledHeading>
        {children &&
          <ChildrenContainer>
            {children}
          </ChildrenContainer>}
      </BannerContainer>
    </StyledBox>
  )
}
