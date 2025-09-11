import { useWindowSize } from 'usehooks-ts'
import { IOCNavBarDesktop } from './IOCNavBarDesktop'
import { IOCNavBarMobile } from './IOCNavBarMobile'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

export const IOCNavBar = ({
  variant = NavBarVariants.Dark as NavBarVariants,
  subSite,
  width
}: {
  variant?: NavBarVariants,
  subSite?: 'go' | 'gomail' | 'server' | 'securekey',
  width: number
}) => {
  return (
    <>
      {width > 1070 ? <IOCNavBarDesktop variant={variant as NavBarVariants} subSite={subSite} /> : <IOCNavBarMobile variant={variant as NavBarVariants} subSite={subSite} />}
    </>
  )
}
