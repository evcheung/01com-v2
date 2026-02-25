import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Logo from "../public/assets/01quantum-logo.png";
import LoginButtonBg from "../public/assets/vector.png";
import { Box } from "./core";
import { theme } from "../theme";
import { NavBarVariants } from "./NavBar";

interface NavBarContainerProps {
  variant: NavBarVariants;
  isOverlay?: boolean;
}

const navBarVariantMap = new Map<string, React.CSSProperties>([
  ["Light", { backgroundColor: "#010101" }],
  ["Dark", { background: "transparent" }],
]);

const getNavBarVariant = (props: NavBarContainerProps) => {
  return navBarVariantMap.get(props.variant as NavBarVariants);
};

const NavBarContainer = styled(Box)<NavBarContainerProps>`
  ${(props) => ({
    width: "100vw",
    padding: "14px 18px",
    position: props.isOverlay ? "absolute" : "relative",
    top: props.isOverlay ? "0" : "auto",
    left: props.isOverlay ? "0" : "auto",
    zIndex: props.isOverlay ? "2100" : "10",
  })};

  background: #010101;
  font-family: var(--font-jost), "Jost", sans-serif;
`;

const TopRow = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(Image)`
  width: 88px;
  height: auto;
`;

const RightControls = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LoginButton = styled.a<{ isOverlay?: boolean }>`
  width: 96px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: center / cover no-repeat url("${LoginButtonBg.src}");
  color: ${theme.colors.neutral.xs};

  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: 20px;
  font-weight: 200;
  line-height: 1;
  letter-spacing: 0.01em;

  transition:
    color 180ms ease,
    filter 180ms ease;

  &&:hover {
    color: #71bfff !important;
  }
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid rgba(113, 191, 255, 0.16);
  background: rgba(10, 17, 29, 0.35);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    border-color 180ms ease,
    background 180ms ease,
    transform 120ms ease;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    border-color: rgba(113, 191, 255, 0.28);
    background: rgba(10, 17, 29, 0.45);
  }
`;

const Burger = styled.div<{ $open: boolean }>`
  width: 18px;
  height: 12px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 99px;
    background: ${theme.colors.neutral.xs};
    transition:
      transform 180ms ease,
      top 180ms ease,
      opacity 180ms ease;

    &:nth-child(1) {
      top: ${(p) => (p.$open ? "5px" : "0px")};
      transform: ${(p) => (p.$open ? "rotate(45deg)" : "none")};
    }
    &:nth-child(2) {
      top: 5px;
      opacity: ${(p) => (p.$open ? 0 : 1)};
    }
    &:nth-child(3) {
      top: ${(p) => (p.$open ? "5px" : "10px")};
      transform: ${(p) => (p.$open ? "rotate(-45deg)" : "none")};
    }
  }
`;

const Backdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 2190;
  background: rgba(0, 0, 0, 0.48);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 180ms ease;
`;

const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(86vw, 360px);
  z-index: 2200;

  background: rgba(6, 10, 18, 0.92);
  border-left: 1px solid rgba(113, 191, 255, 0.16);
  backdrop-filter: blur(14px);

  transform: translateX(${(p) => (p.$open ? "0" : "104%")});
  transition: transform 220ms ease;

  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(113, 191, 255, 0.14);
`;

const DrawerTitle = styled.div`
  color: ${theme.colors.neutral.xs};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.01em;
`;

const DrawerBody = styled.nav`
  padding: 10px 10px 18px;
  overflow: auto;
`;

const Section = styled.div`
  border: 1px solid rgba(113, 191, 255, 0.12);
  border-radius: 14px;
  background: rgba(10, 17, 29, 0.38);
  overflow: hidden;

  & + & {
    margin-top: 10px;
  }
`;

const RowButton = styled.button<{ $accent?: boolean }>`
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  padding: 14px 14px;
  color: ${theme.colors.neutral.xs};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-size: ${(p) => (p.$accent ? "16px" : "16px")};
  font-weight: 200;
  letter-spacing: 0.01em;

  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover {
    background: rgba(113, 191, 255, 0.08);
    color: #71bfff;
  }
`;

const LinkRow = styled.a<{ $sub?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  padding: ${(p) => (p.$sub ? "12px 14px 12px 28px" : "14px 14px")};
  font-size: ${(p) => (p.$sub ? "14px" : "16px")};
  font-weight: ${(p) => (p.$sub ? 300 : 200)};
  opacity: ${(p) => (p.$sub ? 0.92 : 1)};
  color: ${theme.colors.neutral.xs};
  text-decoration: none;

  transition:
    background 160ms ease,
    color 160ms ease;

  &:hover {
    background: rgba(113, 191, 255, 0.08);
    color: #71bfff;
  }
`;

const Caret = styled.span<{ $open: boolean }>`
  width: 10px;
  height: 10px;
  border-right: 2px solid ${theme.colors.neutral.xs};
  border-bottom: 2px solid ${theme.colors.neutral.xs};
  transform: rotate(${(p) => (p.$open ? "-135deg" : "45deg")});
  transition:
    transform 180ms ease,
    border-color 180ms ease;

  ${RowButton}:hover & {
    border-right-color: #71bfff;
    border-bottom-color: #71bfff;
  }
`;

const SubList = styled.div<{ $open: boolean }>`
  max-height: ${(p) => (p.$open ? "520px" : "0px")};
  overflow: hidden;
  transition: max-height 220ms ease;
  border-top: 1px solid rgba(113, 191, 255, 0.12);
`;

const DrawerFooter = styled.div`
  padding: 12px 16px 16px;
  border-top: 1px solid rgba(113, 191, 255, 0.14);
`;

const SmallNote = styled.div`
  color: rgba(244, 248, 255, 0.7);
  font-size: 12px;
  font-weight: 200;
  line-height: 1.4;
`;

const navItems = [
  {
    label: "Products",
    dropdown: [
      { label: "IronCAP Engine", href: "/products/ironcap" },
      { label: "IronCAP XMail", href: "/products/ironcap-xmail" },
      { label: "IronCAP OnCall", href: "/products/ironcap-oncall" },
      {
        label: "Connect to an Agent",
        href: "/products/ironcap-oncall/connect",
      },
      { label: "IronCAP InTouch", href: "/products/ironcap-intouch" },
    ],
  },
  {
    label: "Services",
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

export const NavBarMobile = ({
  variant,
  isOverlay = false,
}: {
  variant?: NavBarVariants;
  isOverlay?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const isLight = variant === NavBarVariants.Light;
  const showLoginInline = !isOverlay; // overlay already had special login logic; on mobile we show it normally
  const loginHref = "https://locator.01com.com/";

  const textColor = useMemo(
    () => (isLight ? theme.colors.neutral.xl : theme.colors.neutral.xs),
    [isLight],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // lock scroll when drawer is open
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      <NavBarContainer
        flexDirection="row"
        flexJustify="space-between"
        flexAlignment="center"
        variant={variant}
        isOverlay={isOverlay}
      >
        <TopRow>
          <Link href="/" aria-label="01 Quantum home">
            <LogoContainer
              src={Logo}
              alt="01 Quantum logo, click to return home"
            />
          </Link>

          <RightControls>
            {showLoginInline && (
              <Link href={loginHref} target="_blank" passHref legacyBehavior>
                <LoginButton isOverlay={isOverlay}>Login</LoginButton>
              </Link>
            )}

            <IconButton
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Burger $open={open} aria-hidden="true">
                <span />
                <span />
                <span />
              </Burger>
            </IconButton>
          </RightControls>
        </TopRow>
      </NavBarContainer>

      <Backdrop $open={open} onClick={close} />

      <Drawer $open={open} aria-label="Mobile navigation">
        <DrawerHeader>
          <DrawerTitle style={{ color: textColor }}>
            {open ? "Menu" : " "}
          </DrawerTitle>

          <div style={{ marginLeft: "auto" }}>
            <IconButton type="button" aria-label="Close menu" onClick={close}>
              <Burger $open={true} aria-hidden="true">
                <span />
                <span />
                <span />
              </Burger>
            </IconButton>
          </div>
        </DrawerHeader>

        <DrawerBody>
          {isOverlay && (
            <Section>
              <Link href={loginHref} target="_blank" passHref legacyBehavior>
                <LinkRow onClick={close}>Login</LinkRow>
              </Link>
            </Section>
          )}

          {navItems.map((item) => (
            <Section key={item.label}>
              {item.dropdown ? (
                <>
                  <RowButton
                    type="button"
                    onClick={() =>
                      setOpenSection((cur) =>
                        cur === item.label ? null : item.label,
                      )
                    }
                    aria-expanded={openSection === item.label}
                  >
                    <span>{item.label}</span>
                    <Caret $open={openSection === item.label} />
                  </RowButton>

                  <SubList $open={openSection === item.label}>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        passHref
                        legacyBehavior
                      >
                        <LinkRow
                          $sub={sub.label === "Connect to an Agent"}
                          onClick={close}
                        >
                          {sub.label}
                        </LinkRow>
                      </Link>
                    ))}
                  </SubList>
                </>
              ) : (
                <Link href={item.href ?? "/"} passHref legacyBehavior>
                  <LinkRow onClick={close}>{item.label}</LinkRow>
                </Link>
              )}
            </Section>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <SmallNote>
            Tip: tap outside the menu (or hit Esc) to close.
          </SmallNote>
        </DrawerFooter>
      </Drawer>
    </>
  );
};
