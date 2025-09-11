import { useWindowSize } from 'usehooks-ts'
import { IOCContentBannersDesktop } from './IOCContentBannersDesktop'
import { IOCContentBannersMobile } from './IOCContentBannersMobile'

export const IOCContentBanners = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IOCContentBannersDesktop /> : <IOCContentBannersMobile />}
    </>
  )
}
