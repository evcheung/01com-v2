import { useWindowSize } from 'usehooks-ts'
import { IOCFooterNavMobile } from './IOCFooterNavMobile'
import { IOCFooterNavDesktop } from './IOCFooterNavDesktop'

export const IOCFooterNav = ({ width }: { width: number }) => {
  return (
    <>
      {width > 760 ? <IOCFooterNavDesktop /> : <IOCFooterNavMobile />}
    </>
  )
}
