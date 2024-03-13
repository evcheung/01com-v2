import { useWindowSize } from 'usehooks-ts'
import { IITFooterNavMobile } from './IITFooterNavMobile'
import { IITFooterNavDesktop } from './IITFooterNavDesktop'

export const IITFooterNav = ({ subSite, width }: { subSite?: 'go' | 'gomail' | 'server' | 'securekey', width: number }) => {
  return (
    <>
      {width > 760 ? <IITFooterNavDesktop subSite={subSite} /> : <IITFooterNavMobile subSite={subSite} />}
    </>
  )
}
