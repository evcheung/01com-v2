import styled from "styled-components";
import { Box } from "./core";
import { theme } from "../theme";
import { breakpoints } from "../utils/breakpoints";

export const PaginateContainer = styled(Box)`
  margin: 0 0 96px 0;
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    font-weight: ${theme.fontWeight[700]};
    font-size: ${theme.fontSize.md};
  }

  .page-link {
    background: transparent;
    border: none;
    color: ${theme.colors.neutral.xl};
  }

  .page-link:focus {
    box-shadow: none;
  }

  .page-item {
    padding: 8px;
    margin: 0px 12px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    ${breakpoints("padding", "", [
  { 760: '0' },
])}
  }

  .page-nav-label {
    cursor: pointer;
    :first-of-type{
      margin-right: 48px;

    ${breakpoints("margin-right", "", [
  { 760: '28px' },
])}
    ${breakpoints("margin-right", "", [
  { 560: '18px' },
])}
    }
    :last-of-type{
      margin-left: 48px;

  ${breakpoints("margin-left", "", [
  { 760: '28px' },
])}
  ${breakpoints("margin-left", "", [
  { 560: '18px' },
])}
    }
  }

  .active {
    border-bottom: 2px solid ${theme.colors.brand.primary};
  }
  .active>.page-link {
    color: ${theme.colors.brand.primary};
  }
`
