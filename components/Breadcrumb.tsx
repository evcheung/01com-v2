import { Box, Text, TextColors, TextVariants } from "./core";
import { theme } from "../theme";
import { Anchor } from "./core/anchor";
import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "../utils/breakpoints";

const StyledText = styled(Text)`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight[300]};
  color: ${theme.colors.neutral.xs};
`;
const BreadcrumbContainer = styled(Box) <{ isIIT: boolean }>`
  position: absolute;
  top: 84px;
  left: 48px;
  opacity: 70%;
  ${(props) => {
    if (props.isIIT) {
      return `
      ${breakpoints("top", "", [{ 1070: "68px" }])}
  ${breakpoints("left", "", [{ 1070: "16px" }])}
${breakpoints("display", "", [{ 760: "none" }])}
`;
    }

    return `
      ${breakpoints("top", "", [{ 940: "68px" }])}
  ${breakpoints("left", "", [{ 1240: "32px" }])}
${breakpoints("left", "", [{ 940: "16px" }])}
${breakpoints("display", "", [{ 760: "none" }])}
`;
  }}

  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    margin: 0px 8px;
  }
`;
const getSubSite = (location) => {
  const path = location.split("imintouch-remote-pc-desktop/")[1].split("/")[0];

  switch (path) {
    case "go":
    case "gomail":
    case "server":
    case "secure-key":
      return path;
    default:
      return undefined;
  }
};
const getSubSiteLabel = (subSite) => {
  switch (subSite) {
    case "go":
      return "I'm InTouch Go";
    case "gomail":
      return "I'm InTouch GoMail";
    case "server":
      return "I'm InTouch Server Edition";
    case "secure-key":
      return "I'm InTouch SecureKEY";
    default:
      return undefined;
  }
};

export const Breadcrumb = ({ label }) => {
  const location = window.location.pathname;
  console.log("👉👉👉 location", location, location.includes("imintouch"));
  const isIIT = location.includes("imintouch");
  const subSite = isIIT ? getSubSite(location) : undefined;

  return (
    <BreadcrumbContainer isIIT={isIIT}>
      <StyledText>
        <Link href="/">01com</Link>
      </StyledText>
      <span>
        <StyledText>{">"}</StyledText>
      </span>
      {isIIT && (
        <>
          <StyledText>
            <Link href="/imintouch-remote-pc-desktop">I'm InTouch</Link>
          </StyledText>
          <span>
            <StyledText>{">"}</StyledText>
          </span>
        </>
      )}
      {subSite && (
        <>
          <StyledText>
            <Link href={`/imintouch-remote-pc-desktop/${subSite}`}>
              {getSubSiteLabel(subSite)}
            </Link>
          </StyledText>
          <span>
            <StyledText>{">"}</StyledText>
          </span>
        </>
      )}
      <StyledText>{label}</StyledText>
    </BreadcrumbContainer>
  );
};
