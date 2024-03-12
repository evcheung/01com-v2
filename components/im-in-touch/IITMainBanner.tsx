import { useWindowSize } from 'usehooks-ts'
import { IITMainBannerDesktop } from './IITMainBannerDesktop'
import { IITMainBannerMobile } from './IITMainBannerMobile'

export const IITMainBanner = ({ isCarousel = true, banner }: { isCarousel?: boolean, banner?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IITMainBannerDesktop isCarousel={isCarousel} banner={banner} /> : <IITMainBannerMobile isCarousel={isCarousel} banner={banner} />}
    </>
  )
}
