import Logo from "../public/assets/01quantum-logo.png";
import LoginButtonBg from "../public/assets/vector.png";
import arrow from "../../public/assets/down-arrow.png";
import Image from "next/image";
import { Box } from "./core";
import { theme } from "../theme";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../utils/breakpoints";
import { NavBarVariants } from "./NavBar";

const NavItemWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  min-width: 220px;
  background: #0a111d;
  border: 1px solid rgba(113, 191, 255, 0.15);
  border-radius: 12px;
  padding: 16px 0;
  backdrop-filter: blur(10px);

  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 180ms ease;

  ${NavItemWrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownItem = styled.a<{ $sub?: boolean }>`
  display: block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 300;
  color: ${theme.colors.neutral.xs};
  transition: all 150ms ease;

  ${(p) =>
    p.$sub &&
    `
      padding-left: 38px;   
      font-size: 14px;      
      opacity: 0.9;         
    `}

  &:hover {
    background: rgba(113, 191, 255, 0.08);
    color: #71bfff;
  }
`;

interface NavBarContainerProps {
  variant: NavBarVariants;
  isOverlay?: boolean;
}

const navBarVariantMap = new Map<string, React.CSSProperties>([
  ["Light", { backgroundColor: theme.colors.neutral.xs }],
  ["Dark", { background: "transparent" }],
]);

const getNavBarVariant = (props: NavBarContainerProps) => {
  return navBarVariantMap.get(props.variant as NavBarVariants);
};

const NavBarContainer = styled(Box)<NavBarContainerProps>`
  ${(props) => ({
    ...getNavBarVariant(props),
    width: "100vw",
    padding: "20px 48px", // keep logo/nav not flush to top
    position: props.isOverlay ? "absolute" : "relative",
    top: props.isOverlay ? "0" : "auto",
    left: props.isOverlay ? "0" : "auto",
    zIndex: props.isOverlay ? "2100" : "10",
  })};

  font-family: var(--font-jost), "Jost", sans-serif;

  ${breakpoints("padding", "", [{ 1240: "20px 32px" }])}
`;

const LogoContainer = styled(Image)`
  width: 96px;
  height: auto;
  ${breakpoints("width", "", [{ 1160: "84px" }])}
`;

const RightNavSection = styled(Box)`
  margin-left: auto;
`;

const LoginButton = styled.a<{ isOverlay?: boolean }>`
  width: 103px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: center / cover no-repeat url("${LoginButtonBg.src}");
  color: ${theme.colors.neutral.xs};

  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 23px;
  font-weight: 200;
  line-height: 1;
  letter-spacing: 0.01em;

  transition:
    color 180ms ease,
    filter 180ms ease;

  ${(props) =>
    props.isOverlay
      ? `
    position: fixed;
    top: 0;
    right: 48px;
    z-index: 2200;
  `
      : ``}

  ${breakpoints("right", "", [{ 1240: "32px" }])}

  /* Hover effect */
  &&:hover {
    color: #71bfff !important;
  }
`;

const NavLinksContainer = styled(Box)<{ hasLogin?: boolean }>`
  display: flex;
  align-items: center;
  gap: 46px;

  /* leave some breathing room under the pinned login button */
  margin-top: ${(props) => (props.hasLogin ? "16px" : "6px")};

  ${breakpoints("gap", "", [{ 1240: "36px" }])}
  ${breakpoints("gap", "", [{ 1040: "24px" }])}
`;

const NavAnchor = styled.a<{ color: string }>`
  font-family: var(--font-jost), "Jost", sans-serif;
  color: ${(props) => props.color};
  font-size: 23px;
  font-weight: 200;
  letter-spacing: 0.01em;
  line-height: 1.2;
  white-space: nowrap;
  transition: color 180ms ease;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  position: relative;

  &&:hover {
    color: #71bfff !important;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(1023%)
      hue-rotate(183deg) brightness(101%) contrast(101%);
  }
`;

const DownArrow = styled(Image)`
  width: 16px;
  height: 15px;
  margin-left: 8px;
  object-fit: contain;
  transition: filter 180ms ease;
`;

const desktopNavItems = [
  {
    label: "Products",
    hasCaret: true,
    dropdown: [
      { label: "IronCAP Engine", href: "/products/ironcap" },
      { label: "IronCAP XMail", href: "/products/ironcap-xmail" },
      { label: "IronCAP OnCall", href: "/products/ironcap-oncall" },
      {label: "Connect to an Agent", href: "/products/ironcap-oncall/connect"},
      { label: "IronCAP InTouch", href: "/products/ironcap-intouch" },
    ],
  },
  {
    label: "Services",
    hasCaret: true,
    dropdown: [
      { label: "Quantum AI Wrapper (QAW)", href: "/services" },
      { label: "Digital Asset Protection", href: "/services/#da-protection" },
      {
        label: "Cryptographic Integration Services",
        href: "/services/#crypto-services",
      },
    ],
  },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const NavBarDesktop = ({
  variant,
  isOverlay = false,
}: {
  variant?: NavBarVariants;
  isOverlay?: boolean;
}) => {
  const isLight = variant === NavBarVariants.Light;
  const navLinkColor = isLight
    ? theme.colors.neutral.xl
    : theme.colors.neutral.xs;

  return (
    <NavBarContainer
      flexDirection="row"
      flexJustify="space-between"
      flexAlignment="center"
      variant={variant}
      isOverlay={isOverlay}
    >
      <Link href="/" aria-label="01 Quantum home">
        <LogoContainer src={Logo} alt="01 Quantum logo, click to return home" />
      </Link>

      <RightNavSection flexDirection="column" flexAlignment="flex-end">
        {isOverlay && (
          <Link
            href="https://locator.01com.com/"
            target="_blank"
            passHref
            legacyBehavior
          >
            <LoginButton isOverlay={isOverlay}>Login</LoginButton>
          </Link>
        )}

        <NavLinksContainer as="nav" hasLogin={isOverlay}>
          {desktopNavItems.map((item) => (
            <NavItemWrapper key={item.label}>
              {item.dropdown ? (
                // Dropdown parent (not a link)
                <NavAnchor
                  as="span"
                  color={navLinkColor}
                  role="button"
                  tabIndex={0}
                >
                  {item.label}
                  {item.hasCaret && (
                    <DownArrow
                      src="/assets/down-arrow.png"
                      alt=""
                      aria-hidden="true"
                      width={10}
                      height={10}
                    />
                  )}
                </NavAnchor>
              ) : (
                <Link href={item.href ?? "/"} passHref legacyBehavior>
                  <NavAnchor color={navLinkColor}>{item.label}</NavAnchor>
                </Link>
              )}

              {item.dropdown && (
                <DropdownMenu>
                  {item.dropdown.map((subItem) => (
                    <Link
                      href={subItem.href}
                      key={subItem.label}
                      passHref
                      legacyBehavior
                    >
                      <DropdownItem
                        $sub={subItem.label === "Connect to an Agent"}
                      >
                        {subItem.label}
                      </DropdownItem>
                    </Link>
                  ))}
                </DropdownMenu>
              )}
            </NavItemWrapper>
          ))}
        </NavLinksContainer>
      </RightNavSection>
    </NavBarContainer>
  );
};
