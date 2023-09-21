import { useWindowSize } from 'usehooks-ts'
import { MainBannerDesktop } from './MainBannerDesktop'
import { MainBannerMobile } from './MainBannerMobile'

export const MainBanner = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <MainBannerDesktop /> : <MainBannerMobile />}
    </>
  )
}
