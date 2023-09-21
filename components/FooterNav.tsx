import { useWindowSize } from 'usehooks-ts'
import { FooterNavMobile } from './FooterNavMobile'
import { FooterNavDesktop } from './FooterNavDesktop'

export const FooterNav = () => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 760 ? <FooterNavDesktop /> : <FooterNavMobile />}
    </>
  )
}
