import Link from 'next/link'
import { Title } from '../components/sharedstyles'
import { TextVariants } from '../components/core/text'
import { Box, Text, ButtonColors, ButtonSizes, HeadingVariants, PrimaryButton, SecondaryButton } from '../components/core'
import Heading from '../components/core/heading'
import Layout, { LayoutVariants } from '../components/Layout'
import { CTABanner } from '../components/CTABanner'
import { MainBanner } from '../components/MainBanner'
import { PressCard } from '../components/PressCard'

export default function KitchenSink() {
  return (
    <>
      <Layout variant={LayoutVariants.Dark} pageTitle="Press Room">

      </Layout>
      <Layout>
        <Title>Kitchen Sink</Title>
        <MainBanner />

        <PrimaryButton>Large Primary</PrimaryButton>
        <PrimaryButton btnColor={ButtonColors.Blue} size={ButtonSizes.Large}>Large Blue Primary</PrimaryButton>
        <PrimaryButton btnColor={ButtonColors.Green} size={ButtonSizes.Large}>Large Green Primary</PrimaryButton>
        <PrimaryButton size={ButtonSizes.Small} disabled>Small Primary Disabled</PrimaryButton>

        <SecondaryButton>Large Secondary</SecondaryButton>
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

        <PressCard date="September 1, 2023" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit" link="/" />

        <CTABanner />
      </Layout>
    </>
  )
}
