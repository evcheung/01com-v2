import styled from "styled-components";
import { theme } from "../../../theme";
import Text from "./text";

export enum HeadingVariants {
  Heading1 = "Heading1",
  Heading2 = "Heading2",
  Heading3 = "Heading3",
}

export enum HeadingColors {
  Neutral = 'Neutral',
  Blue = "Blue",
  Green = "Green"
}

interface HeadingProps {
  variant?: HeadingVariants;
  headingColor?: HeadingColors;
}

const headingColorMap = new Map<HeadingColors, string>([
  [HeadingColors.Blue, theme.colors.brand.primary],
  [HeadingColors.Green, theme.colors.green.primary],
  [HeadingColors.Neutral, theme.colors.neutral.lg],
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
    fontWeight: theme.fontWeight[400],
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

const Heading = styled.h1.attrs<HeadingProps>((props) => ({
  as: getMarkup(props),
})) <HeadingProps>`
  ${props => ({
    color: getHeadingColor(props),
    ...getHeadingVariant(props)
  })};
`;

Heading.defaultProps = {
  variant: HeadingVariants.Heading1,
  headingColor: HeadingColors.Neutral,
}

export default Heading;
