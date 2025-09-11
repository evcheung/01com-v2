import { Dropdown } from "react-bootstrap"
import { theme } from "../../theme"
import styled from "styled-components"
import { Box } from "../core"
import ChevronDown from "../../public/assets/chevron-down.svg"
import { breakpoints } from "../../utils/breakpoints"

export const FAQMenu = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${theme.colors.neutral.xs};
  width: 100vw;
}`

const DropdownFAQMenuContainer = styled(Dropdown)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${theme.colors.neutral.xs};
  width: 100%;
  margin-bottom: 48px;
  border: 1px solid ${theme.colors.neutral.md};



  .btn {
    text-align: left;
  }
  .btn-primary {
    background:  ${theme.colors.neutral.xs};
    width: 100%;
    border: none;
    padding: 16px;

    // h3 styles
    color: ${theme.colors.neutral.lg};
    font-weight: 300;
    font-size: 18px;
    ${breakpoints("font-size", "", [
  { 760: '16px' },
])}
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-toggle {
    width: 100%;

    :after {
      // removes the original after's triangle
      border-top: none;
      border-right: none;
      border-bottom: none;
      border-left: none;

      flex-shrink: 0;
      width: 1.25rem;
      height: 1.25rem;
      margin-left: auto;
      content: "";
      background-image: url(${ChevronDown.src});
      background-repeat: no-repeat;
      background-size: 1.25rem;
      transition: transform 0.2s ease-in-out;
      box-sizing: border-box;
    }

    :focus {
      background: none;
    }
  }
  .dropdown-menu {
    border-radius: 0;
    width: 100%;
    padding: 0;

    p {
      font-size: 16px;
      font-weight: 300;
      padding: 20px 16px;
      line-height: 20px;
      :hover {
        background: ${theme.colors.neutral.sm};
      }
    }
  }

}
`

export const DropdownFAQMenu = ({ children, selectedFAQCategory }) => {
  return (
    <DropdownFAQMenuContainer>
      <Dropdown.Toggle>
        {selectedFAQCategory}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </DropdownFAQMenuContainer>
  )
}
