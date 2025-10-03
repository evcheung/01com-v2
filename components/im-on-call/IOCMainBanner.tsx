type IOCMainBannerDesktopProps = {
  isCarousel?: boolean;
  banner?: 'go' | 'gomail' | 'server' | 'securekey';
};

export const IOCMainBannerDesktop: React.FC<IOCMainBannerDesktopProps> = ({ isCarousel, banner }) => {
  return (
    <div>
      Desktop banner: {banner} - {isCarousel ? "carousel" : "static"}
    </div>
  );
};
