import styled from 'styled-components'
import Link from 'next/link'
import { Box, TextVariants, Text } from './core'
import { theme } from '../theme'
import Logo from 'public/assets/01com-logo.png'
import Image from 'next/image'
import facebook from 'public/assets/facebook.svg'
import linkedin from 'public/assets/linkedin.svg'
import twitter from 'public/assets/twitter.svg'
import rss from 'public/assets/rss.svg'
import youtube from 'public/assets/youtube.svg'
import { CTABanner } from './CTABanner'

const StyledA = styled.a`
  font-size: ${theme.fontSize.xs};
  font-weight: 600;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const NavLink = ({ href, label, target = "_self" }) => (
  <Link href={href} target={target} passHref legacyBehavior>
    <StyledA>{label}</StyledA>
  </Link>
)

const SocialIcon = styled(Image)`
  margin-left: 24px;
  cursor: pointer;
`

const LinkedSocialIcon = ({ href, src, alt }) => (
  <Link href={href} target="blank" passHref legacyBehavior>
    <SocialIcon src={src} alt={alt} />
  </Link>
)

export const FooterNav = () => {
  return (
    <>
      <CTABanner />

      <Box
        width="100vw"
        padding="48px 154px"
        style={{ backgroundColor: theme.colors.neutral.xs, flexWrap: 'nowrap' }}
      >
        <Box flexDirection='row' flexJustify='space-between' flexAlignment='center'>
          <Link href="/">
            <Image src={Logo} alt="01com logo, click to return home" width={64} quality={100} />
          </Link>
          <NavLink href="/about" label="About 01 Communique"></NavLink>
          <NavLink href="/investor-relations" label="Investor Relations"></NavLink>
          <NavLink href="/press-releases" label="Press Room"></NavLink>
          <NavLink href="/partner-programs" label="Partner Programs"></NavLink>
          <NavLink href="/careers" label="Careers"></NavLink>
          <NavLink href="/contact-us" label="Contact Us"></NavLink>
          <NavLink href="/terms-of-use" label="Terms of Use"></NavLink>
          <NavLink href="/privacy-policy" label="Privacy Policy"></NavLink>
        </Box>
        <Box margin="24px 0px">
          <Text variant={TextVariants.Body2}>Post-Quantum Cyber Security | Quantum-Safe Email Security | Remote Control Software | Remote Desktop Connection | Remote IT Support</Text>
          <Text variant={TextVariants.Body2}>I'm InTouch, I'm OnCall, and IronCAP™ are protected under U.S. Patents #6928479, #6938076, #8234701, #11271715, and #11669833</Text>
        </Box>
        <Box flexDirection='row' flexJustify='space-between' flexAlignment='center'>
          <Text variant={TextVariants.Body2}>Copyright © 2023 - 01 Communique Laboratory Inc. All Rights Reserved.</Text>
          <Box flexDirection='row' flexJustify='space-between' flexAlignment='center'>
            <LinkedSocialIcon href="https://twitter.com/IronCAPCyber" src={twitter} alt="twitter" />
            <LinkedSocialIcon href="https://www.facebook.com/IronCAP01/" src={facebook} alt="facebook" />
            <LinkedSocialIcon href="https://www.linkedin.com/company/ironcap/" src={linkedin} alt="linkedin" />
            <LinkedSocialIcon href="https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg" src={youtube} alt="youtube" />
            <LinkedSocialIcon href="http://blog.01com.com/wp/" src={rss} alt="rss" />
          </Box>
        </Box>
      </Box>
    </>
  )
}
