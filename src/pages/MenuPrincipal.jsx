import { Navegation } from "../components/Navegation";
import { Dark, Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Roadmap } from "../components/sections/RoadMap";
import { Showcase } from "../components/sections/ShowCase";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegation  />
        <Home/>
        <About/>
        <Roadmap/>
<Showcase/>
      </ThemeProvider>
    </main>
  );
}
