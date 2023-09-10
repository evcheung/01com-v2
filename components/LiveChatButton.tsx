import { Box, ButtonColors, PrimaryButton } from "./core";
import livechat from '../public/assets/livechat.png'
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../theme";

const LiveChatText = styled.p`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[700]};
  color: ${theme.colors.neutral.xs};
  text-align: left;
  margin:0;
`

const VariantText = styled.p`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight[300]};
  color: ${theme.colors.neutral.xs};
  text-align: left;
  margin:0;
`

export const LiveChatButton = ({ variant }: { variant: 'pre-sales' | 'after-sales' }) => {
  return (
    <PrimaryButton btnColor={ButtonColors.Blue} style={{ paddingTop: '10px', paddingBottom: '10px', }}>
      <Box flexDirection='row' flexAlignment='center' flexJustify='space-between'>
        <Box margin="0px 10px 0px 0px ">
          <Image src={livechat} alt="chat bubble" />
        </Box>
        <Box>
          <LiveChatText>Live Chat</LiveChatText>
          <VariantText>{variant === 'pre-sales' ? "(pre-sales)" : "(after-sales)"}</VariantText>
        </Box>
      </Box>
    </PrimaryButton>
  )
}
