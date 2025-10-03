import { useWindowSize } from 'usehooks-ts'
import { IOCMainBannerDesktop } from './IOCMainBannerDesktop'
import { IOCMainBannerMobile } from './IOCMainBannerMobile'

type IOCMainBannerProps = {
  isCarousel?: boolean;
  banner?: 'go' | 'gomail' | 'server' | 'securekey';
};

export const IOCMainBanner: React.FC<IOCMainBannerProps> = ({ isCarousel = true, banner }) => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 760 
        ? <IOCMainBannerDesktop isCarousel={isCarousel} banner={banner} /> 
        : <IOCMainBannerMobile isCarousel={isCarousel} banner={banner} />}
    </>
  );
};
