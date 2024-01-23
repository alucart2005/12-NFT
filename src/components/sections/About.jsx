import styled from "styled-components";

export function About() {
  return (
    <Section id="about">
      About
    </Section>
  );
}

const Section = styled.section`
  min-height : 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow:hidden;

`