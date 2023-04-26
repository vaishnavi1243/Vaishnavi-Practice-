import styled from "styled-components";
import { theme } from "./ThemeContext";
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

export default function MyComponent() {
  return <StyledButton>Click me</StyledButton>;
}
