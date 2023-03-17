import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  theme?: "primary" | "secondary" | "ghost" | "outlined";
  size?: "default" | "small" | "medium" | "large";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ theme, children, size, onClick }: Props) => {
  return (
    <Container
      theme={theme || "primary"}
      size={size || "default"}
      onClick={onClick}
    >
      {children}
    </Container>
  );
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
  }};
  ${(props: Props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: 10px;
        `;
      case "medium":
        return css`
          font-size: 15px;
        `;
      case "large":
        return css`
          font-size: 30px;
        `;
      default:
        return css``;
    }
  }}
`;

export default Button;
