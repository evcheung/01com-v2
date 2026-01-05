import { useWindowSize } from 'usehooks-ts'
import { BlogNavBarDesktop } from './BlogNavBarDesktop'
import { BlogNavBarMobile } from './BlogNavBarMobile'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

export const BlogNavBar = ({
  variant = NavBarVariants.Dark as NavBarVariants,
  width
}: {
  variant?: NavBarVariants,
  width: number
}) => {
  return (
    <>
      {width > 1070 ? <BlogNavBarDesktop variant={variant as NavBarVariants} /> : <BlogNavBarMobile variant={variant as NavBarVariants} />}
    </>
  )
}
