import { useWindowSize } from 'usehooks-ts'
import { IOCMainBannerDesktop } from './IOCMainBannerDesktop'
import { IOCMainBannerMobile } from './IOCMainBannerMobile'

export const IOCMainBanner = ({ isCarousel = true, banner }: { isCarousel?: boolean, banner?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IOCMainBannerDesktop isCarousel={isCarousel} banner={banner} /> : <IOCMainBannerMobile isCarousel={isCarousel} banner={banner} />}
    </>
  )
}
