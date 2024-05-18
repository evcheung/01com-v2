import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../../public/assets/01com-logo.png'
import Image from 'next/image'
import facebook from '../../public/assets/facebook.svg'
import linkedin from '../../public/assets/linkedin.svg'
import twitter from '../../public/assets/twitter.svg'
import rss from '../../public/assets/rss.svg'
import youtube from '../../public/assets/youtube.svg'
import { CTABanner } from '../CTABanner'
import { breakpoints } from '../../utils/breakpoints'
import { Box, Text, TextVariants } from '../core'
import { theme } from '../../theme'

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
  cursor: pointer;
`

const LinkedSocialIcon = ({ href, src, alt }) => (
  <Link href={href} target="_blank" passHref legacyBehavior>
    <SocialIcon src={src} alt={alt} />
  </Link>
)

const NavContainer = styled(Box)`
width: 100vw;
padding: 28px 16px 16px 16px;
background-color: ${theme.colors.neutral.xs};
flex-wrap: nowrap;
`

const NavLinkContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  white-space: nowrap;
  row-gap: 16px;
  column-gap: calc((100%/4) - 102px);
  ${breakpoints("grid-template-columns", "", [
  { 570: "1fr 1fr" },
])}
  ${breakpoints("column-gap", "", [
  { 570: "calc((100%/2) - 94px)" },
])}`

export const IITFooterNavMobile = () => {
  return (
    <>
      <CTABanner />

      <NavContainer>
        <NavLinkContainer>
          <NavLink href="/about" label="About 01 Communique" />
          <NavLink href="/investor-relations" label="Investor Relations" />
          <NavLink href="/reviews-awards" label="Press Room" />
          <NavLink href="/partner-programs" label="Partner Programs" />
          <NavLink href="/careers" label="Careers" />
          <NavLink href="/contact-us" label="Contact Us" />
          <NavLink href="/terms-of-use" label="Terms of Use" />
          <NavLink href="/privacy-policy" label="Privacy Policy" />
        </NavLinkContainer>

        <Box flexDirection='row' flexJustify='space-between' flexAlignment='center' margin="24px 0">
          <LinkedSocialIcon href="https://twitter.com/IronCAPCyber" src={twitter} alt="twitter" />
          <LinkedSocialIcon href="https://www.facebook.com/IronCAP01/" src={facebook} alt="facebook" />
          <LinkedSocialIcon href="https://www.linkedin.com/company/ironcap/" src={linkedin} alt="linkedin" />
          <LinkedSocialIcon href="https://www.youtube.com/channel/UCrbGgkSemPtfQgpKX8stySg" src={youtube} alt="youtube" />
          <LinkedSocialIcon href="http://blog.01com.com/wp/" src={rss} alt="rss" />
        </Box>
        <Box margin="24px 0px">
          <Text variant={TextVariants.Body3}>Remote Control Software | Remote PC Access Software | Remote Desktop Software | Remote Access Software | Remote Desktop Connection | Remote Computer Access</Text>
          <Box margin="8px 0">
            <Text variant={TextVariants.Body3}>I'm InTouch is protected under U.S. Patents #6928479, #6938076 and #8234701</Text>
          </Box>
          <Box margin="8px 0">
            <Text variant={TextVariants.Body3}>A leader in Remote Access Software and Remote Control Software solutions</Text>
          </Box>
        </Box>
        <Box flexDirection='row' flexAlignment='center' margin="8px 0">
          <Box margin="0 16px 0 0">
            <Link href="/">
              <Image src={Logo} alt="01com logo, click to return home" width={64} quality={100} />
            </Link></Box>
          <Text variant={TextVariants.Body3}>{`Copyright © ${new Date().getFullYear()} - 01 Communique Laboratory Inc. All Rights Reserved.`}</Text>
        </Box>
      </NavContainer>
    </>
  )
}
