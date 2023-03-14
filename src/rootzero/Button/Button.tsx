import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  theme?: "primary" | "secondary" | "ghost" | "outlined";
  children: ReactNode;
}

const Button = ({ theme, children }: Props) => {
  return <Container theme={theme || "primary"}>{children}</Container>;
};

/** 기본 스타일 */
const DefaultStyle = styled.button`
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
`;

const Container = styled(DefaultStyle)`
  ${(props: Props) => {
    switch (props.theme) {
      case "secondary":
        return css`
          background-color: gray;
        `;
      case "ghost":
        return css`
          background-color: transparent;
          color: black;
        `;
      case "outlined":
        return css`
          background-color: transparent;
          color: black;
          border: 1px solid black;
        `;
      default:
        return css``;
    }
  }}
`;

export default Button;
