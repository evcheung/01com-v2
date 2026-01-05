import styled from "styled-components";
import { Box } from "../core";
import { theme } from "../../theme";
import { breakpoints } from "../../utils/breakpoints";

export const BlogPaginateContainer = styled(Box)`
  margin: 0 0 96px 0;
  display: flex;
  justify-content: center; /* center the whole control */

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center; /* was space-between */
    list-style-type: none;
    font-weight: ${theme.fontWeight[700]};
    font-size: ${theme.fontSize.md};
    padding: 0;
    margin: 0;
    gap: 8px;
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
    padding: 8px 0;
    margin: 0;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    ${breakpoints("padding", "", [{ 760: "0" }])}
  }

  .page-nav-label {
    cursor: pointer;
    :first-of-type {
      margin-right: 48px;

      ${breakpoints("margin-right", "", [{ 760: "28px" }])}
      ${breakpoints("margin-right", "", [{ 560: "18px" }])}
    }
    :last-of-type {
      margin-left: 48px;

      ${breakpoints("margin-left", "", [{ 760: "28px" }])}
      ${breakpoints("margin-left", "", [{ 560: "18px" }])}
    }
  }

  .active {
    border-bottom: 2px solid ${theme.colors.brand.primary};
  }

  .active > .page-link {
    color: ${theme.colors.brand.primary};
  }
`;
