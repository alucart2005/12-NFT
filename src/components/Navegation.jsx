import styled from "styled-components";
import { Logo } from "../pages/logo";

export function Navegation() {
  return (
    <Section>
      <NavBar>
        <Logo></Logo>
      </NavBar>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;
