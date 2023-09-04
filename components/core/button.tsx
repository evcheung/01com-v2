import styled from 'styled-components'
import { theme } from '../../theme';

export enum ButtonColors {
  Blue = 'Blue',
  Green = 'Green',
  White = 'White',
}

export enum ButtonTextColors {
  Blue = 'Blue',
  Green = 'Green',
  White = 'White',
}

export enum ButtonSizes {
  Small = 'Small',
  Large = 'Large'
}

export enum ButtonVariants {
  Primary = "Primary",
  Secondary = "Secondary",
}

interface ButtonProps {
  btnColor?: ButtonColors;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  textColor?: ButtonTextColors;
  padding?: string;
}

const buttonColorMap = new Map<ButtonColors, string>([
  [ButtonColors.Blue, theme.colors.brand.primary],
  [ButtonColors.Green, theme.colors.green.primary],
])

const buttonTextColorMap = new Map<ButtonColors, string>([
  [ButtonColors.Blue, theme.colors.neutral.xs],
  [ButtonColors.Green, theme.colors.neutral.xs],
  [ButtonColors.White, theme.colors.neutral.xl],
])

const getButtonColor = (props: ButtonProps) => props.btnColor ? buttonColorMap.get(props.btnColor) : theme.colors.neutral.xs;
const getPrimaryButtonTextColor = (props: ButtonProps) => props.btnColor ? buttonTextColorMap.get(props.btnColor) : theme.colors.neutral.xl;
const getSecondaryButtonTextColor = (props: ButtonProps) => props.btnColor ? buttonColorMap.get(props.btnColor) : theme.colors.neutral.xs;

const buttonSizeMap = new Map<ButtonSizes, React.CSSProperties>([
  [ButtonSizes.Small, {
    fontSize: theme.fontSize.xs,
    padding: '6px 14px',
  }],
  [ButtonSizes.Large, {
    fontSize: theme.fontSize.sm,
    padding: '16px 38px',
  }],
])

const getButtonSize = (props: ButtonProps) => {
  return buttonSizeMap.get(props.size)
};

export const Button = styled.button<ButtonProps>`
  border: none;
  font-weight: ${theme.fontWeight[700]};
  cursor: pointer;
  font-family: inherit;
  box-sizing: border-box;
  white-space: nowrap;
  height: fit-content;
  ${props => ({
    ...getButtonSize(props),
    pointerEvents: props.disabled ? 'none' : 'auto',
  })};
  padding: ${(props) => props.padding};
`

export const PrimaryButton = styled(Button) <ButtonProps>`
  ${props => ({
    backgroundColor: props.disabled ? theme.colors.neutral.md : getButtonColor(props),
    color: props.disabled ? theme.colors.neutral.xs : getPrimaryButtonTextColor(props),
    border: `2px solid ${getButtonColor(props)}`,
  })};
`

export const SecondaryButton = styled(Button) <ButtonProps>`
  ${props => ({
    backgroundColor: props.disabled ? theme.colors.neutral.md : 'transparent',
    border: props.disabled ? 'none' : `2px solid ${getButtonColor(props)}`,
    color: props.disabled ? theme.colors.neutral.xs : getSecondaryButtonTextColor(props),
  })};`


PrimaryButton.defaultProps = {
  textColor: ButtonTextColors.Blue,
  size: ButtonSizes.Large
}

SecondaryButton.defaultProps = {
  textColor: ButtonTextColors.Blue,
  size: ButtonSizes.Large
}
