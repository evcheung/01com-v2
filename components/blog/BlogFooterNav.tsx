import { useWindowSize } from 'usehooks-ts'
import { BlogFooterNavMobile } from './BlogFooterNavMobile'
import { BlogFooterNavDesktop } from './BlogFooterNavDesktop'

export const BlogFooterNav = ({ width }: { width: number }) => {
  return (
    <>
      {width > 760 ? <BlogFooterNavDesktop /> : <BlogFooterNavMobile />}
    </>
  )
}
