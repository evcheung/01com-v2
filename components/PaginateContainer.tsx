import styled from "styled-components";
import { Box } from "./core";
import { theme } from "../theme";

export const PaginateContainer = styled(Box)`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    font-weight: ${theme.fontWeight[700]};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.neutral};
  }

  .page-item {
    padding: 8px;
    margin: 0px 12px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .page-nav-label {
    cursor: pointer;
    :first-of-type{
      margin-right: 48px;
    }
    :last-of-type{
      margin-left: 48px;
    }
  }

  .active {
    border-bottom: 2px solid ${theme.colors.brand.primary};
    color: ${theme.colors.brand.primary};
  }
`
