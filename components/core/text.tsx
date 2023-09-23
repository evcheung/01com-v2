import styled from "styled-components";
import { theme } from "../../theme";

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

export enum TextColors {
  Neutral = 'Neutral',
  Blue = "Blue",
  Green = "Green",
  White = "White"
}

export enum TextWeights {
  Light = 'Light',
  Regular = "Regular",
  Bold = "Bold"
}

export enum TextVariants {
  Feat1 = "Feat1",
  Feat2 = "Feat2",
  Feat3 = "Feat3",
  Body1 = "Body1",
  Body2 = "Body2"
}

interface TextProps {
  variant?: TextVariants;
  transform?: TextTransform;
  weight?: TextWeights;
  italic?: boolean;
  textColor?: TextColors;
  alignment?: 'left' | 'right' | 'center';
}

const textWeightMap = new Map<TextWeights, number>([
  [TextWeights.Light, theme.fontWeight[300]],
  [TextWeights.Regular, theme.fontWeight[400]],
  [TextWeights.Bold, theme.fontWeight[700]],
])

const getTextWeight = (props: TextProps) => textWeightMap.get(props.weight)

const textColorValueMap = new Map<TextColors, string>([
  [TextColors.Blue, theme.colors.brand.primary],
  [TextColors.Green, theme.colors.green.primary],
  [TextColors.Neutral, theme.colors.neutral.lg],
  [TextColors.White, theme.colors.neutral.xs],
])

const getTextColor = (props: TextProps) => textColorValueMap.get(props.textColor)

const textVariantValueMap = new Map<TextVariants, React.CSSProperties>([
  [TextVariants.Body1, {
    fontSize: theme.fontSize.lg,
    fontWeight: textWeightMap.get(TextWeights.Light),
    lineHeight: '36px',
  }],
  [TextVariants.Body2, {
    fontSize: theme.fontSize.xxs,
    fontWeight: textWeightMap.get(TextWeights.Regular),
    lineHeight: '16px'
  }],
  [TextVariants.Feat1, {
    fontSize: theme.fontSize.md,
    fontWeight: textWeightMap.get(TextWeights.Bold),
    lineHeight: '30px'
  }],
  [TextVariants.Feat2, {
    fontSize: theme.fontSize.sm,
    fontWeight: textWeightMap.get(TextWeights.Bold),
  }],
  [TextVariants.Feat3, {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    lineHeight: '18px'
  }],
])

const getTextVariant = (props: TextProps) => textVariantValueMap.get(props.variant)


const responsiveFontSizeMap = new Map<TextVariants, React.CSSProperties>([
  [TextVariants.Body1, {
    fontSize: theme.fontSize.md,
    lineHeight: '30px',
  }],
  [TextVariants.Body2, { fontSize: theme.fontSize.xxs }],
  [TextVariants.Feat1, { fontSize: theme.fontSize.sm, lineHeight: '24px' }],
  [TextVariants.Feat2, { fontSize: theme.fontSize.sm }],
  [TextVariants.Feat3, { fontSize: theme.fontSize.xs }],
])


const getResponsiveFontSize = (props: TextProps) => responsiveFontSizeMap.get(props.variant)

export const Text = styled.p<TextProps>`
  font-weight: ${getTextWeight};
  color: ${getTextColor};
  margin: 0;
  padding: 0;
  ${props => ({
    textTransform: props.transform ? props.transform : 'none',
    fontStyle: props.italic ? 'italic' : 'auto',
    textAlign: props.alignment,
    ...getTextVariant(props)
  })};
  @media screen and (max-width: 760px) {
    ${props => ({
    ...getResponsiveFontSize(props)
  })};
  }
`;

Text.defaultProps = {
  variant: TextVariants.Body1,
};
