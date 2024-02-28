import { Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/akaya-telivigala";

export function Logo({text="R."}) {
  return (
    <LogoText>
      <Link to="/">{text}</Link>
    </LogoText>
  );
}

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
