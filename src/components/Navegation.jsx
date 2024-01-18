import styled from "styled-components";
import { Logo } from "../pages/logo";
import { useState } from "react";

export function Navegation() {
  const [click, setClick] = useState(true);
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu click={click}>
          <MenuItem>
          Home</MenuItem>
        </Menu>
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
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontlg};
  &::after{
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props)=>props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;

  }
`;
