
import { ReactNode } from 'react';
import { NavBar, NavBarVariants } from '../NavBar'
import { BlogContainer, Main } from '../sharedstyles'
import { BlogNavBar } from './BlogNavBar';
import { BlogFooterNav } from './BlogFooterNav';
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
}

export default function BlogLayout({
  variant = LayoutVariants.Light,
  children,
}: LayoutProps) {
  const { width } = useWindowSize()

  return (
    <BlogContainer>
      <Main>
        <BlogNavBar variant={NavBarVariants.Dark} width={width} />
        {children}
        <BlogFooterNav width={width} />
      </Main>
      <LiveChatBubble />
    </BlogContainer>
  )
}
