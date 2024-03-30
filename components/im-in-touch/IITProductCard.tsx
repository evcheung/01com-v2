import Image from "next/image"
import desktop from '../../public/assets/desktop.png'
import ios from '../../public/assets/ios.png'
import android from '../../public/assets/android.png'
import tablet from '../../public/assets/tablet.png'
import googlePlay from '../../public/assets/google-play.jpg'
import appStore from '../../public/assets/app-store.jpg'
import microsoftStore from '../../public/assets/microsoft-store.jpg'
import styled from "styled-components"
import { Box, ButtonColors, PrimaryButton, Text, TextVariants } from "../core"
import { theme } from "../../theme"
import Link from "next/link"
import { breakpoints } from "../../utils/breakpoints"

const ProductCardContainer = styled(Box)`
  background: ${theme.colors.neutral.xs};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`
const ProductText = styled(Text)`
  font-size: 24px;
  margin-bottom: 16px;
  ${breakpoints(" font-size", "", [
  { 1180: '20px' },
])}
`

const LoginButton = styled(PrimaryButton)`
padding: 12px 46px;`


const ProductDescription = ({ subSite }: { subSite?: 'go' | 'gomail' }) => {
  if (!subSite) { return null };
  return (
    <Box margin="0 0 12px 0">
      <ol>
        <li>
          <Text variant={TextVariants.Body2}>Download I'm InTouch {subSite === 'go' ? 'Go' : "GoMail"}</Text>
        </li>
        <li>
          <Text variant={TextVariants.Body2}>Launch I'm InTouch {subSite === 'go' ? 'Go' : "GoMail"}</Text>
        </li>
        <li>
          <Text variant={TextVariants.Body2}>Login and access your {subSite === 'go' ? 'computer' : "Outlook"}</Text>
        </li>
      </ol>
    </Box>
  )
}

const Browser = () => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>
        <Image src={desktop} alt="browser" />
      </Box>
      <ProductText>Browser</ProductText>
      <Link href="https://www.01com.com/imintouch-remote-pc-desktop/login/" target="_self">
        <LoginButton btnColor={ButtonColors.Blue}>Login</LoginButton>
      </Link>
    </ProductCardContainer>
  )
}

const IOS = ({ hasDescription, subSite }: { hasDescription?: boolean, subSite?: 'go' | 'gomail' }) => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>
        <Image src={ios} alt="ios" />
      </Box>
      <ProductText>iPhone/iPad</ProductText>
      {hasDescription && <ProductDescription subSite={subSite} />}
      <Link href={subSite === 'go' ? "https://apps.apple.com/ca/app/im-intouch-go/id526473842" : "https://apps.apple.com/ca/app/im-intouch-gomail/id1047341493"} target="_blank">
        <Image src={appStore} alt="iOS App Store" />
      </Link>
    </ProductCardContainer>
  )
}

const Android = ({ hasDescription, subSite }: { hasDescription?: boolean, subSite?: 'go' | 'gomail' }) => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>

        <Image src={android} alt="android" />
      </Box>
      <ProductText>Android</ProductText>
      {hasDescription && <ProductDescription subSite={subSite} />}
      <Link href={subSite === 'go' ? "https://play.google.com/store/apps/details?id=com.zeroonecom.iitgo&hl=en&pli=1" : "https://play.google.com/store/apps/details?id=com.zeroonecom.gomail&hl=en"} target="_blank">
        <Image src={googlePlay} alt="Google Play" />
      </Link>
    </ProductCardContainer>
  )
}
const Tablet = ({ hasDescription, subSite }: { hasDescription?: boolean, subSite?: 'go' | 'gomail' }) => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>
        <Image src={tablet} alt="tablet" />
      </Box>
      <ProductText>Windows Tablet</ProductText>
      {hasDescription && <ProductDescription subSite={subSite} />}
      <Link href="https://apps.microsoft.com/detail/9WZDNCRDSMRK?hl=en-ca&gl=CA" target="_blank">
        <Image src={microsoftStore} alt="Microsoft Store" />
      </Link>
    </ProductCardContainer>
  )
}


export const IITProductCard = ({ variant, hasDescription, subSite }: {
  variant: 'browser' | 'ios' | 'android' | 'tablet',
  hasDescription?: boolean,
  subSite?: 'go' | 'gomail'
}) => {
  switch (variant) {
    case 'browser':
      return <Browser />
    case 'ios':
      return <IOS hasDescription={hasDescription} subSite={subSite} />
    case 'android':
      return <Android hasDescription={hasDescription} subSite={subSite} />
    case 'tablet':
      return <Tablet hasDescription={hasDescription} subSite={subSite} />
  }
}
