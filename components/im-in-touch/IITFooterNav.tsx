import { useWindowSize } from 'usehooks-ts'
import { IITFooterNavMobile } from './IITFooterNavMobile'
import { IITFooterNavDesktop } from './IITFooterNavDesktop'

export const IITFooterNav = ({ subSite }: { subSite?: 'go' | 'gomail' | 'server' | 'securekey' }) => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <IITFooterNavDesktop subSite={subSite} /> : <IITFooterNavMobile subSite={subSite} />}
    </>
  )
}
