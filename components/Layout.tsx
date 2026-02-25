import { ReactNode } from "react";
import styled from "styled-components";

import { NavBar, NavBarVariants } from "./NavBar";
import { PageHeader } from "./PageBanner";
import { Container, Main } from "./sharedstyles";
import Heading from "./core/heading";

export enum LayoutVariants {
  Dark = "Dark",
  Light = "Light",
}

export interface LayoutProps {
  variant?: LayoutVariants;
  pageTitle?: string;
  headerContent?: ReactNode;
  children: ReactNode;
  hidePageHeader?: boolean;
}

const InvestorRelationsTitle = styled(Heading)`
  font-family: "Jost", sans-serif;
  font-size: 71px;
  color: #f4f8ff;
  font-weight: 300;
  text-align: center;
  width: 100%;
`;

const DarkPageHeader = styled(PageHeader)`
  background: #010101 !important;
  background-image: none !important;

  /* remove "hero" height so it hugs your content */
  min-height: unset !important;
  height: auto !important;

  /* if PageHeader uses overlay layers */
  &::before,
  &::after {
    background: none !important;
    background-image: none !important;
    content: none !important;
  }

  /* MOST COMMON: PageHeader has a background <Image fill alt="" ...> */
  img[alt=""] {
    display: none !important;
  }

  /* also common: a background wrapper div */
  .page-header-bg,
  .page-banner-bg,
  .banner-bg,
  .header-bg {
    display: none !important;
  }
`;

// Layout.tsx (core idea)
export default function Layout({
  variant = LayoutVariants.Light,
  pageTitle,
  headerContent,
  children,
  hidePageHeader = false,
}: LayoutProps) {
  return (
    <Container>
      <Main>
        {/* Always show navbar */}
        <NavBar variant={NavBarVariants.Dark} isOverlay />

        {/* Only show PageHeader if not hidden */}
        {variant === LayoutVariants.Dark && !hidePageHeader ? (
          <PageHeader label={pageTitle}>{headerContent}</PageHeader>
        ) : null}

        {children}
      </Main>
    </Container>
  );
}