import styled from 'styled-components'
import { theme } from '../../theme'
import Link from 'next/link'
import { breakpoints } from '../../utils/breakpoints'


export enum AnchorVariants {
  Large = "Large",
  Small = "Small"
}

interface AnchorProps {
  variant?: AnchorVariants;
  fontSize?: string;
}
const anchorVariantValueMap = new Map<AnchorVariants, React.CSSProperties>([
  [AnchorVariants.Large, {
    fontSize: theme.fontSize.lg,
  }],
  [AnchorVariants.Small, {
    fontSize: theme.fontSize.md,
  }]
])

const getAnchorVariant = (props: AnchorProps) => anchorVariantValueMap.get(props.variant)


const responsiveFontSizeMap = new Map<AnchorVariants, React.CSSProperties>([
  [AnchorVariants.Large, {
    fontSize: theme.fontSize.md,
    lineHeight: '30px',
  }],
  [AnchorVariants.Small, {}],
])

const getResponsiveFontSize = (props: AnchorProps) => responsiveFontSizeMap.get(props.variant)

export const Anchor = styled(Link) <AnchorProps>`
  ${props => ({ ...getAnchorVariant(props) })}
  font-weight: ${theme.fontWeight[700]};
  color: ${theme.colors.brand.primary};
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0;  
  font-size: ${props => props.fontSize};
  @media screen and (max-width: 760px) {
    ${props => ({
    ...getResponsiveFontSize(props)
  })};
`

Anchor.defaultProps = {
  variant: AnchorVariants.Small
}
