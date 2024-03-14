import styled from "styled-components";
import { Text, TextVariants } from "../core";
import { breakpoints } from "../../utils/breakpoints";
import { theme } from "../../theme";
import { useCallback } from "react";
import { Dropdown } from "react-bootstrap";

interface MenuButtonProps {
  isActive: boolean;
}

const StyledDropdownItem = styled(Dropdown.Item)`
  padding: 0;
  `
// TODO: Move responsive in here
const StyledMenuItem = styled.button<MenuButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 24px 0 24px;
  margin: 0;
  :focus {
    border: none;
  }
  ${breakpoints("text-align", "", [
  { 1280: 'left' },
])}
  ${breakpoints("width", "", [
  { 1280: '100%' },
])}  
  ${breakpoints("padding", "", [
  { 1280: '0' },
])}  
p {
  line-height: 54px;
  font-size: 14px;

  @media screen and (min-width: 1280px) {
    ${props => props.isActive ? (
    `color: ${theme.colors.brand.primary};
      border-bottom: ${theme.colors.brand.primary} 3px solid;
      margin: 3px 0 0 0;
      `
  ) : (
    `color: ${theme.colors.neutral.xl}; `
  )
  };

  ${breakpoints("font-size", "", [
    { 1460: '14px' },
  ])}
}
`

const FAQCategory = ({ category, selectedCategory, onSelect }) => {
  const isActive = selectedCategory === category;
  const handleSelect = useCallback(() => {
    onSelect(category)
  }, [category, onSelect])

  return (
    <StyledMenuItem onSelect={onSelect} isActive={isActive} onClick={handleSelect}>
      <Text variant={TextVariants.Feat1}>{category}</Text>
    </StyledMenuItem>
  )

}

const FAQContainer = ({ width, category, selectedCategory, onSelect }) => {
  if (width > 1280) {
    return (
      <FAQCategory key={category} category={category} selectedCategory={selectedCategory} onSelect={onSelect} />
    )
  } else
    return (
      <StyledDropdownItem>
        <FAQCategory key={category} category={category} selectedCategory={selectedCategory} onSelect={onSelect} />
      </StyledDropdownItem>
    )
}

export const FAQMenuCategories = ({ FAQs, onSelect, selectedCategory, width }) => (
  <>
    <FAQContainer category={FAQs['General Questions'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Security'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Administrator Functions'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Using I’m InTouch'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Using Remote Wake-Up'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Billing'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Remote Access'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    <FAQContainer category={FAQs['Remote Audio'].category} selectedCategory={selectedCategory} onSelect={onSelect} width={width} />
    {/* {Object.keys(FAQs).map((faqCategory) => {
      const category = FAQs[faqCategory].category.trim()
      if (width > 1280) {
        return (
          <FAQCategory key={category} category={category} selectedCategory={selectedCategory} onSelect={onSelect} />
        )
      } else
        return (
          <StyledDropdownItem>
            <FAQCategory key={category} category={category} selectedCategory={selectedCategory} onSelect={onSelect} />
          </StyledDropdownItem>
        )
    })} */}
  </>
)
