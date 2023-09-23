import styled from "styled-components";
import { theme } from "../../theme";

export enum HeadingVariants {
  Heading1 = "Heading1",
  Heading2 = "Heading2",
  Heading3 = "Heading3",
}

export enum HeadingColors {
  Neutral = 'Neutral',
  Blue = "Blue",
  Green = "Green",
  White = "White",
}

interface HeadingProps {
  variant?: HeadingVariants;
  headingColor?: HeadingColors;
}

const headingColorMap = new Map<HeadingColors, string>([
  [HeadingColors.Blue, theme.colors.brand.primary],
  [HeadingColors.Green, theme.colors.green.primary],
  [HeadingColors.Neutral, theme.colors.neutral.lg],
  [HeadingColors.White, theme.colors.neutral.xs],
])

const getHeadingColor = (props: HeadingProps) => headingColorMap.get(props.headingColor)

const headingVariantMap = new Map<HeadingVariants, React.CSSProperties>([
  [HeadingVariants.Heading1, {
    fontSize: theme.fontSize.xxxxl,
    fontWeight: theme.fontWeight[400],
    lineHeight: '64px'
  }],
  [HeadingVariants.Heading2, {
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight[700],
    lineHeight: '35px'
  }],
  [HeadingVariants.Heading3, {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight[300],
    lineHeight: '32px'
  }],
])

const getHeadingVariant = (props: HeadingProps) => headingVariantMap.get(props.variant)

const headingMarkupMap = new Map<HeadingVariants, string>([
  [HeadingVariants.Heading1, 'h1'],
  [HeadingVariants.Heading2, 'h2'],
  [HeadingVariants.Heading3, 'h3'],
])

const getMarkup = (props: HeadingProps) => headingMarkupMap.get(props.variant)


const responsiveFontSizeMap = new Map<HeadingVariants, React.CSSProperties>([
  [HeadingVariants.Heading1, {
    fontSize: theme.fontSize.xxxl,
    lineHeight: '60px'
  }],
  [HeadingVariants.Heading2, {
    fontSize: theme.fontSize.xl,
    lineHeight: '30px'
  }],
  [HeadingVariants.Heading3, {
    fontSize: theme.fontSize.lg,
    lineHeight: '26px'
  }],
])


const getResponsiveFontSize = (props: HeadingProps) => responsiveFontSizeMap.get(props.variant)



const Heading = styled.h1.attrs<HeadingProps>((props) => ({
  as: getMarkup(props),
})) <HeadingProps>`
  ${props => ({
    color: getHeadingColor(props),
    ...getHeadingVariant(props)
  })};
  @media screen and (max-width: 760px) {
    ${props => ({
    ...getResponsiveFontSize(props)
  })};
  }
`;

Heading.defaultProps = {
  variant: HeadingVariants.Heading1,
  headingColor: HeadingColors.Neutral,
}

export default Heading;
