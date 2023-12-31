import styled from "styled-components";
import { Box } from "./box";
import { theme } from "../../theme";

export const Divider = styled(Box)`
border-bottom: 1px solid ${theme.colors.neutral.md};
width: 100%;
`
