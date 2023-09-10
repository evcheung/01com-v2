import styled from 'styled-components'

interface BoxProps {
  flexDirection?: 'row' | 'column';
  flexAlignment?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline"
  | "normal";
  flexJustify?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "normal";
  width?: string;
  padding?: string;
  margin?: string;
  backgroundImage?: string;
  backgroundSize?: string;
}

const getBoxDisplay = (props: BoxProps) => {
  return props.flexDirection ? "flex" : "block";
};

const getBackground = (props: BoxProps) => {
  if (props.backgroundImage) {
    return `center / cover no-repeat url(${props.backgroundImage})`;
  }
};


export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  display: ${getBoxDisplay};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.flexAlignment};
  justify-content: ${(props) => props.flexJustify};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  background: ${getBackground};
  background-size: ${(props) => props.backgroundSize};
`
