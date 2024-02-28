import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";
import { Suspense, lazy } from "react";
import { Loading } from "../Loading";
const Carousel = lazy(() => import("../Carousel"));

export function About() {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading/>}>
            <Carousel />
          </Suspense>
        </Box>
        <Box>
          <Title>
          development of responsive<br />and easy-to-use web solutions
          </Title>
          <SubText>
          I am a web developer passionate about crafting user-friendly web apps. I enjoy turning ideas into functional digital experiences, staying updated with tech.
          </SubText>
          <SubTextlight>
          As a web developer, I am passionate about creating user-friendly web apps, thriving on translating ideas into appealing digital experiences. I am committed to learning and staying updated on the latest web technologies to deliver innovative solutions.
          </SubTextlight>
          <ButtonContainer>
            <ThemeProvider theme={Dark}>
              <Button text="See My gihub" link="https://github.com/alucart2005" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 64em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 40em) {
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextlight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba})`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 64em) {
    width: 100%;
    a {
      margin: 0 auto;
    }
  }
`;
