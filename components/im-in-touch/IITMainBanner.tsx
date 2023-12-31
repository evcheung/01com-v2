import { useWindowSize } from 'usehooks-ts'
import { IITMainBannerDesktop } from './IITMainBannerDesktop'
import { IITMainBannerMobile } from './IITMainBannerMobile'

export const IITMainBanner = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IITMainBannerDesktop /> : <IITMainBannerMobile />}
    </>
  )
}
