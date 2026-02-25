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

  @media screen and (max-width: 860px) {
    height: auto;
    padding: 18px 0 20px;
    background-position: center;
  }
`;

const FooterBottomBar = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #000;
  padding: 40px 0 50px;

  @media screen and (max-width: 860px) {
    padding: 28px 0 36px;
  }
`;

const FooterShowcaseInner = styled.div`
  width: min(1260px, 92vw);
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    width: min(1260px, 90vw);
  }
`;

const FooterTopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media screen and (max-width: 860px) {
    gap: 18px;
  }
`;

const FooterActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 144px;

  @media screen and (max-width: 1100px) {
    gap: 64px;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 420px) {
    gap: 12px;
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
  -webkit-tap-highlight-color: transparent;

  &:hover {
    filter: brightness(1.06);
  }

  &:focus-visible {
    outline: 2px solid rgba(113, 191, 255, 0.7);
    outline-offset: 3px;
    border-radius: 10px;
  }

  @media screen and (max-width: 860px) {
    width: 132px;
    height: 46px;
    font-size: 22px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 46px;
    font-size: 22px;
    background-size: 100% 100%;
    border-radius: 12px;
  }
`;

const FooterSocialCluster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media screen and (max-width: 860px) {
    gap: 18px;
  }
`;

const FooterSocialLink = styled(Link)`
  display: grid;
  place-items: center;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 860px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;

    &:active {
      background: rgba(113, 191, 255, 0.08);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(113, 191, 255, 0.7);
    outline-offset: 3px;
    border-radius: 12px;
  }
`;

const FooterSocialIcon = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  object-fit: contain;

  @media screen and (max-width: 860px) {
    width: 28px !important;
    height: 28px !important;
  }
`;

const FooterBottomRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 30px 34px;
  align-items: flex-start;

  padding-top: 16px;

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-top: 8px;
  }
`;

const FooterLogoLink = styled(Link)`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 860px) {
    justify-content: center;
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid rgba(113, 191, 255, 0.7);
    outline-offset: 4px;
    border-radius: 14px;
  }
`;

const FooterLogo = styled(Image)`
  height: auto;
  display: block;

  @media screen and (max-width: 860px) {
    width: 110px !important;
    height: auto !important;
  }
`;

const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  padding: 0;

  @media screen and (max-width: 860px) {
    align-items: center;
    gap: 18px;
  }
`;

const FooterNavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 32px;

  @media screen and (max-width: 860px) {
    justify-content: center;
    gap: 16px 20px;
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    gap: 12px 16px;
  }
`;

const FooterNavLink = styled(Link)`
  color: #ffffff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid rgba(113, 191, 255, 0.7);
    outline-offset: 3px;
    border-radius: 10px;
  }

  @media screen and (max-width: 860px) {
    font-size: 18px;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

const FooterAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
  gap: 16px;

  @media screen and (max-width: 860px) {
    margin-top: 6px;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
`;

const FooterAddressLine = styled.p`
  margin: 0;
  color: #71bfff;
  font-family: var(--font-jost), "Jost", sans-serif;
  font-weight: 300;
  font-size: 16.5px;
  line-height: 1.4;

  @media screen and (max-width: 860px) {
    font-size: 15.5px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14.5px;
  }
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
