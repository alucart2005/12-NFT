import { Navegation } from "../components/Navegation";
import { Dark, Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navegation  />
      </ThemeProvider>
    </main>
  );
}
