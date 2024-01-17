import styled from "styled-components";

export function Navegation() {
  return (<Section>
    Hola
  </Section>);
}

const Section = styled.section`
  width:100vw;
  background-color:${(props)=>props.theme.body }
`