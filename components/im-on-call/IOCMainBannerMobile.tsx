import styled from 'styled-components'
import { Box, Text, TextVariants, TextColors, SecondaryButton, PrimaryButton } from '../core'
import { theme } from '../../theme'
import Heading, { HeadingColors, HeadingVariants } from '../core/heading'
import iocBanner from '../../public/assets/Bitmap-1.png'
import { LINKS } from '../../utils/constants'

const Container = styled(Box)`
  width: calc(100% + 64px);
  margin-left: -32px;
`

const StyledBox = styled(Box)`
  padding: 52px 48px;
  height: 620px;
`

const ProductTitle = styled(Heading)`
  &&& {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`

const BannerContentHeading = styled(Heading)`
  &&& {
    font-size: ${theme.fontSize.xl};
    line-height: 36px;
    margin: 8px 0px;
    padding: 0px 24px;
    text-align: center;
  }
`

const BannerContentText = styled(Text)`
  &&& {
    font-size: 18px;
    line-height: 30px;
    padding: 0px 24px;
    text-align: center;
  }
`

const PrimaryCTAButton = styled(PrimaryButton)`
  margin: 24px 0 0 0;
  color: ${theme.colors.green.primary};
`

const SecondaryCTAButton = styled(SecondaryButton)`
  margin: 24px 0 0 0;
`

const BannerContainer = ({ children }: { children: React.ReactNode }) => (
  <StyledBox
    backgroundImage={iocBanner.src}
    flexDirection='column'
    flexJustify='flex-end'
    flexAlignment='center'
    style={{ backgroundPositionY: '35%' }}>
    {children}
  </StyledBox>
)

type IOCMainBannerMobileProps = {
  isCarousel?: boolean;
  banner?: 'go' | 'gomail' | 'server' | 'securekey';
};

export const IOCMainBannerMobile: React.FC<IOCMainBannerMobileProps> = ({ isCarousel, banner }) => (
  <Container>
    <BannerContainer>
      <ProductTitle variant={HeadingVariants.Heading2} headingColor={HeadingColors.White}>
        I'm OnCall
      </ProductTitle>
      <BannerContentHeading headingColor={HeadingColors.White}>
        Remote Work from Anywhere, Anytime
      </BannerContentHeading>
      <BannerContentText variant={TextVariants.Body1} textColor={TextColors.White}>
        I'm OnCall is a cost-effective, secure online help desk software which allows organizations to offer remote support over the Internet to their customers.
      </BannerContentText>
      <Box flexDirection='row'>
        <Box margin="0px 24px 0px 0px">
          <span onClick={() => window.location.assign(LINKS.IOC_BUY_NOW)}>
            <PrimaryCTAButton>Buy Now</PrimaryCTAButton>
          </span>
        </Box>
        <span onClick={() => window.location.assign(LINKS.IOC_TRY_IT_FREE)}>
          <SecondaryCTAButton>Try it Free</SecondaryCTAButton>
        </span>
      </Box>
    </BannerContainer>
  </Container>
);

