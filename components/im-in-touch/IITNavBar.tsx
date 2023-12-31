import { useWindowSize } from 'usehooks-ts'
import { IITNavBarDesktop } from './IITNavBarDesktop'
import { IITNavBarMobile } from './IITNavBarMobile'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

export const IITNavBar = ({
  variant = NavBarVariants.Dark as NavBarVariants
}: {
  variant?: NavBarVariants
}) => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 940 ? <IITNavBarDesktop variant={variant as NavBarVariants} /> : <IITNavBarMobile variant={variant as NavBarVariants} />}
    </>
  )
}
