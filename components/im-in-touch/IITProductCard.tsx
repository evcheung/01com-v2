import Image from "next/image"
import desktop from 'public/assets/desktop.png'
import ios from 'public/assets/ios.png'
import android from 'public/assets/android.png'
import tablet from 'public/assets/tablet.png'
import googlePlay from 'public/assets/google-play.jpg'
import appStore from 'public/assets/app-store.jpg'
import microsoftStore from 'public/assets/microsoft-store.jpg'
import styled from "styled-components"
import { Box, ButtonColors, PrimaryButton, Text } from "../core"
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

const IOS = () => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>
        <Image src={ios} alt="ios" />
      </Box>
      <ProductText>iPhone/iPad</ProductText>
      <Link href="https://apps.apple.com/ca/app/im-intouch-go/id526473842" target="_blank">
        <Image src={appStore} alt="iOS App Store" />
      </Link>
    </ProductCardContainer>
  )
}

const Android = () => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>

        <Image src={android} alt="android" />
      </Box>
      <ProductText>Android</ProductText>
      <Link href="https://play.google.com/store/apps/details?id=com.zeroonecom.iitgo&hl=en&pli=1" target="_blank">
        <Image src={googlePlay} alt="Google Play" />
      </Link>
    </ProductCardContainer>
  )
}
const Tablet = () => {
  return (
    <ProductCardContainer>
      <Box margin='32px'>
        <Image src={tablet} alt="tablet" />
      </Box>
      <ProductText>Windows Tablet</ProductText>
      <Link href="https://apps.microsoft.com/detail/9WZDNCRDSMRK?hl=en-ca&gl=CA" target="_blank">
        <Image src={microsoftStore} alt="Microsoft Store" />
      </Link>
    </ProductCardContainer>
  )
}

const getVariant = (variant) => {
  switch (variant) {
    case 'browser':
      return <Browser />
    case 'ios':
      return <IOS />
    case 'android':
      return <Android />
    case 'tablet':
      return <Tablet />
  }
}

export const IITProductCard = ({ variant }: { variant: 'browser' | 'ios' | 'android' | 'tablet' }) => {
  return (
    getVariant(variant)
  )
}
