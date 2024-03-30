import styled from "styled-components"
import IITLayout from "../../../components/im-in-touch/IITLayout"
import Head from "next/head"
import { IITPageBanner } from "../../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../../components/PageContentContainer"
import { Box, Text } from "../../../components/core"
import Image from "next/image"
import FileTransferImage from '../../../public/assets/file-transfer.jpg'

const StyledImage = styled(Image)`
height: 100%;
width:100%;
`

export default function FileTransfer() {
  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="File Transfer" />
      <PageContentContainer>
        <Text>
          Using I'm InTouch you can copy files back-and-forth easily between your remote and local computers. Simply drag-and-drop the files between the 2 computers.
        </Text>
        <Box margin="48px 0 0 0">
          <StyledImage src={FileTransferImage.src} alt="screen showing files from both local and remote computers" width={100} height={548} />
        </Box>
      </PageContentContainer>
    </IITLayout>
  )
}


