import BrandLogo from "../../public/assets/01com-logo.png";
import Image from "next/image";
import { Box, Text, TextVariants } from "../core";
import { theme } from "../../theme";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../../utils/breakpoints";
import { NavBarVariants } from "../NavBar";
import { NavLink } from "../core/NavLink";
import { NavLogin } from "../core/NavLogin";
import { useDebounceCallback } from "usehooks-ts";

interface NavBarContainerProps {
  variant: NavBarVariants;
}

const NavBarContainer = styled(Box)<NavBarContainerProps>`
  background: ${theme.colors.neutral.xl}99;
  borderbottom: 1px solid ${theme.colors.neutral.xs}30;
  width: 100vw;
  // V padding is 0 because height comes from Navlink items
  padding: 0px 48px;
  position: absolute;
  z-index: 9999;
  top: 0;
  ${breakpoints("padding", "", [{ 1240: "0px 32px" }])}
`;

const LogoContainer = styled(Image)`
  ${breakpoints("width", "", [{ 1280: "110px" }])}
  ${breakpoints("height", "", [{ 1480: "auto" }])}
`;

const StyledDropdownMenu = styled(Box)`
  background: ${theme.colors.neutral.xs};
  position: absolute;
  top: 84px;
  left: 24px;
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 24px;
  row-gap: 24px;
  visibility: hidden;
  p {
    white-space: nowrap;
  }
  :before {
    content: "";
    width: 124px;
    height: 4px;
    background: ${theme.colors.neutral.xl};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const displayMenu = () => {
  const menu: HTMLElement = document.querySelector(".hover-dropdown-menu");
  if (menu) {
    menu.style.visibility = "visible";
  }
};

const hideMenu = () => {
  const menu: HTMLElement = document.querySelector(".hover-dropdown-menu");
  if (menu) {
    menu.style.visibility = "hidden";
  }
};

const AffiliatedProductsMenu = ({ handleMouseLeave }) => {
  return (
    <StyledDropdownMenu
      className="hover-dropdown-menu"
      onMouseOver={displayMenu}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/imintouch-remote-pc-desktop/go">
        <Text variant={TextVariants.Feat2}>I'm InTouch Go</Text>
      </Link>
      <Link href="/imintouch-remote-pc-desktop/gomail">
        <Text variant={TextVariants.Feat2}>I'm InTouch GoMail</Text>
      </Link>
      <Link href="/imintouch-remote-pc-desktop/server">
        <Text variant={TextVariants.Feat2}>I'm InTouch Server Edition</Text>
      </Link>
      <Link href="/imintouch-remote-pc-desktop/secure-key">
        <Text variant={TextVariants.Feat2}>I'm InTouch SecureKEY</Text>
      </Link>
    </StyledDropdownMenu>
  );
};

export const BlogNavBarDesktop = ({
  variant,
}: {
  variant?: NavBarVariants;
}) => {
  const debouncedHideMenu = useDebounceCallback(() => {
    if (document.querySelector(".hover-dropdown-menu :hover")) {
      return;
    } else {
      hideMenu();
    }
  }, 100);

  return (
    <>
      <NavBarContainer
        flexDirection="row"
        flexJustify="space-between"
        flexAlignment="center"
        variant={variant}
      >
        <Link href={`/`}>
          <LogoContainer
            src={BrandLogo}
            alt="01 Quantum Inc product logo, click to return to homepage"
          />
        </Link>
        <Box flexDirection="row">
          <>
            <NavLink
              color={theme.colors.neutral.xs}
              href="https://www.ironcap.ca/"
              target="_blank"
              label="IronCAP™"
            />
            <NavLink
              color={theme.colors.neutral.xs}
              href="https://www.ironcap.ca/ironcap-x/"
              target="_blank"
              label="IronCAP X™"
            />
            <NavLink
              color={theme.colors.neutral.xs}
              href="/imintouch-remote-pc-desktop/"
              label="I'm InTouch"
            />
            <NavLink
              color={theme.colors.neutral.xs}
              href="/support"
              label="Support"
            />
            <NavLink
              color={theme.colors.neutral.xs}
              href="/intellectual-properties"
              label="Intellectual Properties"
            />
          </>ß
        </Box>
        <NavLogin isNavBarLight={false} isIIT={true} />
      </NavBarContainer>
    </>
  );
};
