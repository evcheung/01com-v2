import styled from 'styled-components'
import { theme } from '../../theme'
import Link from 'next/link'


export const Anchor = styled(Link)`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight[700]};
  color: ${theme.colors.brand.primary};
  cursor: pointer;
  margin: 0;
  padding: 0;
`
