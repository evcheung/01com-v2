import styled from "styled-components";
import { Box } from "./core";
import { breakpoints } from "../utils/breakpoints";

export const PageContentContainer = styled(Box)`
padding: 0px 246px;
margin: 96px 0;
min-width 1300px;
${breakpoints("padding", "", [
  { 940: "0 32px" },
])}
${breakpoints("padding", "", [
  { 760: "0" },
])}
${breakpoints("margin", "", [
  { 760: "48px 0" },
])}
${breakpoints("min-width", "", [
  { 940: "auto" },
])}
${breakpoints("width", "", [
  { 940: "100%" },
])}
`
