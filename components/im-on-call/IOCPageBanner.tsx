import styled from 'styled-components'
import { Box, } from '../core'
import React, { ReactNode } from 'react'
import bannerBg from '../../public/assets/ioc-green-banner.png'
import Heading, { HeadingColors } from '../core/heading'
import { breakpoints } from '../../utils/breakpoints'
import { theme } from '../../theme'
import Image from 'next/image'
import { Breadcrumb } from '../Breadcrumb'

const StyledBox = styled(Box)`
  background: no-repeat top/cover url("${bannerBg.src}");
`

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
  margin: 184px 0 98px 0;
  img {
    color: white !important;
  }
  ${props => props.hasChildren
    ? breakpoints("margin", "", [
      { 1160: "156px 0 76px 0" },
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
color: white;
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
export const IOCPageBanner = ({ heading, children, iconSrc }: { heading: string, children?: ReactNode, iconSrc?: any }) => {
  return (
    <StyledBox width="100vw" flexDirection='column' flexJustify='space-between'>
      <BannerContainer hasChildren={!!children}>
        <Breadcrumb label={heading} />
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
