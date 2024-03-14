import { useWindowSize } from 'usehooks-ts'
import { IITFooterNavMobile } from './IITFooterNavMobile'
import { IITFooterNavDesktop } from './IITFooterNavDesktop'

export const IITFooterNav = ({ width }: { width: number }) => {
  return (
    <>
      {width > 760 ? <IITFooterNavDesktop /> : <IITFooterNavMobile />}
    </>
  )
}
