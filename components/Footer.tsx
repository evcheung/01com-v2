// components/Footer.tsx
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const TEXT_WHITE = "#f4f8ff";

type FooterLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  src: string;
  width: number;
  height: number;
};

export interface FooterProps {
  footerActionLinks?: FooterLink[];
  footerNavLinks?: FooterLink[];
  footerSocialLinks?: SocialLink[];
  addressLines?: string[];
  className?: string;
}

const FooterShowcaseSection = styled.section`
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #060a12;
`;

const FooterTopBar = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #0a0f18 url("/assets/footer-vector.png") center / cover no-repeat;

  height: 122px;
  display: flex;
  align-items: center;
`;

const FooterBottomBar = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #000;
  padding: 40px 0 50px;
`;

const FooterShowcaseInner = styled.div`
  width: min(1260px, 92vw);
  margin: 0 auto;
`;

const FooterTopRow = styled.div`
  position: relative;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 860px) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const FooterActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 144px;

  @media screen and (max-width: 860px) {
    width: 100%;
    justify-content: flex-start;
    gap: 16px;
  }
`;

const FooterActionButton = styled(Link)`
  width: 144.22px;
  height: 50.28px;
  display: grid;
  place-items: center;

  background: url("/assets/footer-button.png") center / contain no-repeat;
  border: none;

  color: ${TEXT_WHITE};
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 28px;
  line-height: 1;
  text-decoration: none;

  &:hover {
    filter: brightness(1.06);
  }
`;

const FooterSocialCluster = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 28px;

  @media screen and (max-width: 860px) {
    position: static;
    transform: none;
    width: 100%;
    justify-content: flex-end;
  }
`;

const FooterSocialLink = styled(Link)`
  display: grid;
  place-items: center;
`;

const FooterSocialIcon = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;
`;

const FooterBottomRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 30px 34px;
  align-items: flex-start;

  padding-top: 16px;

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogoLink = styled(Link)`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterLogo = styled(Image)`
  height: auto;
  display: block;
`;

const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  padding: 0;
`;

const FooterNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 32px;
`;

const FooterNavLink = styled(Link)`
  color: #ffffff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  gap: 16px;
`;

const FooterAddressLine = styled.p`
  margin: 0;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16.5px;
  line-height: 1.4;
`;

const DEFAULT_ACTION_LINKS: FooterLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Demo", href: "/demo" },
];

const DEFAULT_NAV_LINKS: FooterLink[] = [
  { label: "Products", href: "/#offerings" },
  { label: "Services", href: "/#offerings" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Investor Relations", href: "/investor-relations" },
];

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    label: "X",
    href: "https://x.com/01quantuminc",
    src: "/assets/x.png",
    width: 28,
    height: 28,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/01-quantum/",
    src: "/assets/linkedin.png",
    width: 28,
    height: 28,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg",
    src: "/assets/youtube.png",
    width: 34.02,
    height: 25,
  },
];

const DEFAULT_ADDRESS_LINES = [
  "01 Quantum, 789 Don Mills Road, Suite #700",
  "Toronto, ON M3C 1T5, Canada",
];

export function Footer({
  footerActionLinks = DEFAULT_ACTION_LINKS,
  footerNavLinks = DEFAULT_NAV_LINKS,
  footerSocialLinks = DEFAULT_SOCIAL_LINKS,
  addressLines = DEFAULT_ADDRESS_LINES,
  className,
}: FooterProps) {
  return (
    <FooterShowcaseSection className={className}>
      <FooterTopBar>
        <FooterShowcaseInner>
          <FooterTopRow>
            <FooterActionGroup>
              {footerActionLinks.map((item) => (
                <FooterActionButton key={item.label} href={item.href}>
                  {item.label}
                </FooterActionButton>
              ))}
            </FooterActionGroup>

            <FooterSocialCluster>
              {footerSocialLinks.map((item) => (
                <FooterSocialLink
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <FooterSocialIcon
                    src={item.src}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                  />
                </FooterSocialLink>
              ))}
            </FooterSocialCluster>
          </FooterTopRow>
        </FooterShowcaseInner>
      </FooterTopBar>

      <FooterBottomBar>
        <FooterShowcaseInner>
          <FooterBottomRow>
            <FooterLogoLink href="/" aria-label="01 Quantum Home">
              <FooterLogo
                src="/assets/01quantum-logo.png"
                alt="01 Quantum logo"
                width={124}
                height={83}
                priority={false}
              />
            </FooterLogoLink>

            <FooterMeta>
              <FooterNavLinks aria-label="Footer quick links">
                {footerNavLinks.map((item) => (
                  <FooterNavLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterNavLink>
                ))}
              </FooterNavLinks>

              <FooterAddress>
                {addressLines.map((line, idx) => (
                  <FooterAddressLine key={`${line}-${idx}`}>
                    {line}
                  </FooterAddressLine>
                ))}
              </FooterAddress>
            </FooterMeta>
          </FooterBottomRow>
        </FooterShowcaseInner>
      </FooterBottomBar>
    </FooterShowcaseSection>
  );
}

export default Footer;
