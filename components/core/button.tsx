import styled from 'styled-components'
import { theme } from '../../theme';
import { breakpoints } from '../../utils/breakpoints';

export enum ButtonColors {
  Blue = 'Blue',
  Green = 'Green',
  White = 'White',
  Neutral = '#115293'
}

export enum ButtonTextColors {
  Blue = 'Blue',
  Green = 'Green',
  White = 'White',
  Neutral = 'Neutral'
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
  [ButtonColors.White, theme.colors.neutral.xs],
])

const buttonTextColorMap = new Map<ButtonColors, string>([
  [ButtonColors.Blue, theme.colors.neutral.xs],
  [ButtonColors.Green, theme.colors.neutral.xs],
  [ButtonColors.White, theme.colors.neutral.xl],
])

const buttonTextColorOverrideMap = new Map<ButtonTextColors, string>([
  [ButtonTextColors.Blue, theme.colors.brand.primary],
  [ButtonTextColors.Green, theme.colors.green.primary],
  [ButtonTextColors.White, theme.colors.neutral.xs],
])

const getButtonColor = (props: ButtonProps) => props.btnColor ? buttonColorMap.get(props.btnColor) : theme.colors.neutral.xs;
const getPrimaryButtonTextColor = (props: ButtonProps) => {
  if (props.textColor) {
    return buttonTextColorOverrideMap.get(props.textColor)
  }
  return props.btnColor ? buttonTextColorMap.get(props.btnColor) : theme.colors.neutral.xl
};
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
  ${breakpoints("padding", "", [
    { 1160: "12px 32px" },
  ])}
`

export const PrimaryButton = styled(Button) <ButtonProps>`
  ${props => ({
    backgroundColor: props.disabled ? theme.colors.neutral.md : getButtonColor(props),
    color: `${props.disabled ? theme.colors.neutral.xs : getPrimaryButtonTextColor(props)}`,
    border: `2px solid ${getButtonColor(props)}`,
  })};
`
export const IOCButton = styled(Button)<ButtonProps & { btnWidth?: string; btnHeight?: string }>`
  ${props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px', 
    padding: '6px 10px', 
    width: props.btnWidth || '128px',
    height: props.btnHeight || '48px',
    backgroundColor: props.disabled
      ? theme.colors.neutral.md
      : getButtonColor({ ...props, btnColor: ButtonColors.Green }),
    border: props.disabled
      ? '2px solid transparent'
      : `2px solid ${theme.colors.green.primary}`,
    color: props.disabled
      ? theme.colors.neutral.xs
      : getPrimaryButtonTextColor({ ...props, textColor: ButtonTextColors.White }),
  })}
`



export const SecondaryButton = styled(Button) <ButtonProps>`
  ${props => ({
    backgroundColor: props.disabled ? theme.colors.green.primary : 'transparent',
    border: props.disabled ? '2px solid transparent' : `2px solid ${getButtonColor(props)}`,
    color: props.disabled ? theme.colors.neutral.xs : getSecondaryButtonTextColor(props),
  })};`


PrimaryButton.defaultProps = {
  size: ButtonSizes.Large
}

SecondaryButton.defaultProps = {
  size: ButtonSizes.Large
}

IOCButton.defaultProps = {
  size: ButtonSizes.Large,
  btnColor: ButtonColors.Green,
  textColor: ButtonTextColors.White,
};

