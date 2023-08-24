import Link from 'next/link'
import { Container, Main, Title } from '../components/sharedstyles'
import { ButtonColors, ButtonSizes, PrimaryButton, SecondaryButton } from '../components/shared/button/button'
import Text, { TextVariants } from '../components/shared/typography/text'
import Heading, { HeadingVariants } from '../components/shared/typography/heading'
import { Box } from '../components/shared/box/box'

export default function KitchenSink() {
  return (
    <Container>
      <Main>
        <Title>Kitchen Sink</Title>
        <PrimaryButton >Large Primary</PrimaryButton>
        <PrimaryButton btnColor={ButtonColors.Blue} size={ButtonSizes.Large}>Large Blue Primary</PrimaryButton>
        <PrimaryButton btnColor={ButtonColors.Green} size={ButtonSizes.Large}>Large Green Primary</PrimaryButton>
        <PrimaryButton size={ButtonSizes.Small} disabled>Small Primary Disabled</PrimaryButton>

        <SecondaryButton >Large Secondary</SecondaryButton>
        <SecondaryButton size={ButtonSizes.Small} disabled>Small Secondary</SecondaryButton>

        <Text variant={TextVariants.Body1}>Body 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Integer quis auctor elit sed vulputate.</Text>
        <Text variant={TextVariants.Body2}>Body 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Integer quis auctor elit sed vulputate.</Text>
        <Text variant={TextVariants.Feat1}>Feat 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Integer quis auctor elit sed vulputate.</Text>
        <Text variant={TextVariants.Feat2}>Feat 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Integer quis auctor elit sed vulputate.</Text>
        <Text variant={TextVariants.Feat3}>Feat 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Integer quis auctor elit sed vulputate.</Text>

        <Heading variant={HeadingVariants.Heading1}>Heading 1</Heading>
        <Heading variant={HeadingVariants.Heading2}>Heading 2</Heading>
        <Heading variant={HeadingVariants.Heading3}>Heading 3</Heading>

        <Box flexDirection='row' style={{ border: '1px solid red' }} padding="2px 4px" width="500px" flexJustify='space-between'>
          <PrimaryButton btnColor={ButtonColors.Blue}>Button 1</PrimaryButton>
          <PrimaryButton btnColor={ButtonColors.Blue}>Button 2</PrimaryButton>
          <PrimaryButton btnColor={ButtonColors.Blue}>Button 3</PrimaryButton>
        </Box>
      </Main>
    </Container>
  )
}
