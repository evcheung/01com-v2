import { useWindowSize } from 'usehooks-ts'
import { IITNavBarDesktop } from './IITNavBarDesktop'
import { IITNavBarMobile } from './IITNavBarMobile'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

export const IITNavBar = ({
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
      {width > 1070 ? <IITNavBarDesktop variant={variant as NavBarVariants} subSite={subSite} /> : <IITNavBarMobile variant={variant as NavBarVariants} subSite={subSite} />}
    </>
  )
}
