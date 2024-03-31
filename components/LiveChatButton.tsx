import { Box, ButtonColors, PrimaryButton } from "./core";
import livechat from "../public/assets/livechat.png";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../theme";
import { breakpoints } from "../utils/breakpoints";

const LiveChatText = styled.p`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[700]};
  color: ${theme.colors.neutral.xs};
  text-align: left;
  margin: 0;

  ${breakpoints("line-height", "", [{ 760: "16px" }])}
`;

const VariantText = styled.p`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight[300]};
  color: ${theme.colors.neutral.xs};
  text-align: left;
  margin: 0;
  ${breakpoints("line-height", "", [{ 760: "16px" }])}
`;

export const LiveChatButton = ({
  variant,
}: {
  variant: "pre-sales" | "after-sales";
}) => {
  return (
    <PrimaryButton
      btnColor={ButtonColors.Blue}
      padding="10px 20px"
      onClick={() => {
        window.open(
          `https://imoncall.01com.com/${variant}/`,
          "pagename",
          "resizable,height=600,width=500"
        );
        return false;
      }}
    >
      <Box flexDirection="row" flexAlignment="center" flexJustify="center">
        <Box margin="0px 12px 0px 0px ">
          <Image src={livechat} alt="chat bubble" />
        </Box>
        <Box>
          <LiveChatText>Live Chat</LiveChatText>
          <VariantText>
            {variant === "pre-sales" ? "(pre-sales)" : "(after-sales)"}
          </VariantText>
        </Box>
      </Box>
    </PrimaryButton>
  );
};
