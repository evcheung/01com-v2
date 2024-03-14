
import { ReactNode } from 'react';
import { NavBar, NavBarVariants } from '../NavBar'
import { Container, Main } from '../sharedstyles'
import { IITNavBar } from './IITNavBar';
import { IITFooterNav } from './IITFooterNav';
import { useWindowSize } from 'usehooks-ts';
import { LiveChatBubble } from '../LiveChatBubble';

export enum LayoutVariants {
  Dark = "Dark",
  Light = "Light"
}

export interface LayoutProps {
  variant?: LayoutVariants;
  pageTitle?: string;
  headerContent?: ReactNode;
  children: ReactNode;
  subSite?: 'go' | 'gomail' | 'server' | 'securekey';
}

export default function IITLayout({
  variant = LayoutVariants.Light,
  children,
  subSite
}: LayoutProps) {
  const { width } = useWindowSize()

  return (
    // TODO: add variant for Container to lower texture on dark navbar. Texture has to show through
    <Container>
      <Main>
        <IITNavBar variant={NavBarVariants.Dark} subSite={subSite} width={width} />
        {children}
        <IITFooterNav subSite={subSite} width={width} />
      </Main>
      <LiveChatBubble />
    </Container >
  )
}
