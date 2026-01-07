import { Box, Text, TextColors, TextVariants } from "../core";
import { theme } from "../../theme";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../../utils/breakpoints";

const StyledText = styled(Text)`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight[400]};
  color: ${theme.colors.neutral.xl};
`;
const BreadcrumbContainer = styled(Box)<{ isBlog: boolean; isRead: boolean }>`
  position: absolute;
  top: 84px;
  left: 48px;
  opacity: 100%;
  ${(props) => {
    if (props.isBlog) {
      return `
        ${breakpoints("top", "", [{ 1070: "68px" }])}
        ${breakpoints("left", "", [{ 1070: "16px" }])}
        ${breakpoints("display", "", [{ 1070: "none" }])}
`;
    }

    return `
        ${breakpoints("top", "", [{ 940: "68px" }])}
        ${breakpoints("left", "", [{ 1240: "32px" }])}
        ${breakpoints("left", "", [{ 940: "16px" }])}
        ${breakpoints("display", "", [{ 1070: "none" }])}
`;
  }}

  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    margin: 0px 8px;
  }
`;

export const BlogBreadcrumb = ({ label }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isBlogIndex = pathname === "/blog" || pathname === "/blog/";
  const isRead = pathname.startsWith("/blog/") && !isBlogIndex;

  return (
    <BreadcrumbContainer isBlog={true} isRead={isRead}>
      <StyledText>
        <Link href="/">01 Quantum</Link>
      </StyledText>

      <span>
        <StyledText>{">"}</StyledText>
      </span>

      {isBlogIndex && (
        <>
          <StyledText>
            <Link href="/blog">Blog</Link>
          </StyledText>
          {label && (
            <span>
              <StyledText>{">"}</StyledText>
            </span>
          )}
        </>
      )}

      {isRead && (
        <>
          <StyledText>
            <Link href="/blog">Blog</Link>
          </StyledText>
          <span>
            <StyledText>{">"}</StyledText>
          </span>
          <StyledText>Read</StyledText>
          {label && (
            <span>
              <StyledText>{">"}</StyledText>
            </span>
          )}
        </>
      )}

      <StyledText>{label}</StyledText>
    </BreadcrumbContainer>
  )
}

