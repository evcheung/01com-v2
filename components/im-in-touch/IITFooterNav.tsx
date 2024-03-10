import { useWindowSize } from 'usehooks-ts'
import { IITFooterNavMobile } from './IITFooterNavMobile'
import { IITFooterNavDesktop } from './IITFooterNavDesktop'

export const IITFooterNav = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IITFooterNavDesktop /> : <IITFooterNavMobile />}
    </>
  )
}
