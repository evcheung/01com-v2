import { useWindowSize } from 'usehooks-ts'
import { IITContentBannersDesktop } from './IITContentBannersDesktop'
import { IITContentBannersMobile } from './IITContentBannersMobile'

export const IITContentBanners = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IITContentBannersDesktop /> : <IITContentBannersMobile />}
    </>
  )
}
