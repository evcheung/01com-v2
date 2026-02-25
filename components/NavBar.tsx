import { useWindowSize } from 'usehooks-ts'
import { NavBarDesktop } from './NavBarDesktop'
import { NavBarMobile } from './NavBarMobile'

export enum NavBarVariants {
  Dark = "Dark",
  Light = "Light"
}

export const NavBar = ({
  variant = NavBarVariants.Light as NavBarVariants,
  isOverlay = false
}: {
  variant?: NavBarVariants
  isOverlay?: boolean
}) => {
  const { width } = useWindowSize()

  return (
    <>
      {width > 940 ? (
        <NavBarDesktop variant={variant as NavBarVariants} isOverlay={isOverlay} />
      ) : (
        <NavBarMobile variant={variant as NavBarVariants} />
      )}
    </>
  )
}
