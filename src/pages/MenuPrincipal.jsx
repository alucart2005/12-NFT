import { Navegation } from "../components/Navegation";
import { Dark, Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Roadmap } from "../components/sections/RoadMap";
import { Showcase } from "../components/sections/ShowCase";
import { Teams } from "../components/sections/Teams";
import { Questions } from "../components/Questions";
import { Footer } from "../components/sections/Footer";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Teams/>
        <Questions/>
        <Footer/>
      </ThemeProvider>
    </main>
  );
}
