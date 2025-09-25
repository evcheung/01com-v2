import { useEffect, useRef, useState } from "react"
import { theme } from "../../theme"
import { Box } from "./box"
import { breakpoints } from "../../utils/breakpoints"
import { ButtonColors, PrimaryButton } from "./button"
import styled from "styled-components"
import Link from "next/link"
import { Text, TextVariants } from "./text"


const StyledLoginMenuContainer = styled(Box) <{
  onClickOutside: () => void,
  isIIT: boolean,
}>`
background: ${theme.colors.neutral.xs};
position: absolute;
right: 48px;
top: 84px;
z-index: 2;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
row-gap: 24px;
  :before {
  content: '';
  width: 138px;
  height: 4px;
  background: ${theme.colors.neutral.xl};
  position: absolute;
  top: 0;
  right: 0;
};
${props => props.isIIT ? (
    `${breakpoints("right", "", [
      { 1380: "16px" },
    ])};
${breakpoints("top", "", [
      { 1380: "81px" },
    ])};
${breakpoints("top", "", [
      { 1160: "73px" },
    ])};
  ${breakpoints("top", "", [
      { 760: "69px" },
    ])}`
  ) : (
    `${breakpoints("right", "", [
      { 1240: "32px" },
    ])}
  ${breakpoints("right", "", [
      { 940: "16px" },
    ])}
  ${breakpoints("top", "", [
      { 1240: "81px" },
    ])}
  ${breakpoints("top", "", [
      { 1160: "73px" },
    ])}
  ${breakpoints("top", "", [
      { 760: "69px" },
    ])}`
  )}
`
const StyledLoginButton = styled(PrimaryButton) <{ isNavBarLight: boolean }>`
${breakpoints("padding", "", [
  { 760: "10px 24px" },
])}
color: ${props => props.isNavBarLight ? theme.colors.neutral.xs : theme.colors.brand.primary};
`

const LoginMenuContainer = ({ onClickOutside, isIIT }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <StyledLoginMenuContainer padding="24px" isIIT={isIIT} onClickOutside={onClickOutside} ref={ref}>
      <Link href='https://locator.01com.com/'>
        <Text variant={TextVariants.Feat2}>Access My PC</Text>
      </Link>
      <Link href='https://www.01com.com/imoncall-remote-help-desk/login/?'>
        <Text variant={TextVariants.Feat2}>I'm OnCall Agent</Text>
      </Link>
      <Link href='https://www.01com.com/imoncall-remote-help-desk/connect/?'>
        <Text variant={TextVariants.Feat2}>Connect An Agent</Text>
      </Link>
    </StyledLoginMenuContainer>
  )
}

export const NavLogin = ({
  isNavBarLight,
  isIIT = false,
  isIOC = false,
  textColor, // new optional prop
}: {
  isNavBarLight: boolean,
  isIIT?: boolean,
  isIOC?: boolean,
  textColor?: string
}) => {
  const [isLoginMenuActive, setIsLoginMenuActive] = useState(false)

  const clickHandler = () => setIsLoginMenuActive(!isLoginMenuActive)
  const clickOutsideHandler = () => setIsLoginMenuActive(false)

  // Determine button background color (kept same)
  const buttonColor = isNavBarLight ? ButtonColors.Blue : ButtonColors.White

  // Determine text color
  const loginTextColor = textColor || (isIOC ? ButtonColors.Green : ButtonColors.Blue)

  return (
    <>
      <StyledLoginButton
        btnColor={buttonColor}
        onClick={clickHandler}
        isNavBarLight={isNavBarLight}
        style={{ color: loginTextColor }} // apply text color
      >
        Login
      </StyledLoginButton>

      {isLoginMenuActive && (
        <LoginMenuContainer isIIT={isIIT} onClickOutside={clickOutsideHandler} />
      )}
    </>
  )
}




