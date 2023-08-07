import styled from 'styled-components'
import { theme } from '../../../theme';

type ButtonColors = 'blue' | 'green';

type ButtonSizes = 'small' | 'large';

interface ButtonProps {
  color: ButtonColors;
  size: ButtonSizes;
}

const ColorValueMap = new Map<ButtonColors, string>([
  ['blue', theme.colors.brand.primary],
  ['green', theme.colors.green.primary],
])

const SizeValueMap = new Map<ButtonSizes, React.CSSProperties>([
  ['small', {
    fontSize: theme.fontSize.xs,
    padding: '8px 16px',
  }],
  ['large', {
    fontSize: theme.fontSize.sm,
    padding: '17px 32px',
  }],
])

const getColor = (props: ButtonProps) => {
  return ColorValueMap.get(props.color)
};
const getSize = (props: ButtonProps) => {
  return SizeValueMap.get(props.size)
};

export const Button = styled.button<ButtonProps>`
  border: none;
  font-weight: ${theme.fontWeight[700]};
  cursor: pointer;
`

export const PrimaryButton = styled(Button) <ButtonProps>`
  color: ${theme.colors.neutral.xs};
  ${props => ({
    ...getSize(props),
    pointerEvents: props.disabled ? 'none' : 'auto',
    backgroundColor: props.disabled ? theme.colors.neutral.md : getColor(props),
  })};
`

export const SecondaryButton = styled(Button) <ButtonProps>`
  background-color: ${theme.colors.neutral.xs};
  ${props => ({
    ...getSize(props),
    pointerEvents: props.disabled ? 'none' : 'auto',
    color: props.disabled ? theme.colors.neutral.md : getColor(props),
  })};
`

PrimaryButton.defaultProps = {
  size: 'large',
  color: 'blue'
}


SecondaryButton.defaultProps = {
  size: 'large',
  color: 'blue'
}
