import styled from "styled-components";
import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";

export function Banner() {
  return (
    <Section>
      <ImageCOntainer>
      <img src={img1} alt="Banner img" />
      <img src={img2} alt="Banner img" />
      <img src={img3} alt="Banner img" />
      <img src={img4} alt="Banner img" />
      <img src={img5} alt="Banner img" />
      <img src={img6} alt="Banner img" />
      </ImageCOntainer>
      <Title>desarrollo de aplicaciones web</Title>
      <BtnContainer>
        <a href="https://www.codewizardai.com/" target="_blank">
          <JoinNow>Contratame 😁</JoinNow>
        </a>
        
      </BtnContainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-bottom: 2px solid ${(props) => props.theme.text};
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;
const ImageCOntainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  img {
    width: 15rem;
    height: auto;
  }
  @media (max-width: 48rem) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: ${(props) => props.theme.text};
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media(max-width:48em){
    font-size: ${(props)=>props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  @media(max-width:48em){
    width: 100%;
    justify-content: center;
  }
`
const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: ${(props)=>props.theme.fontmd};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  font-weight: 600;
  &:hover{
    transform: scale(0.9);
  }
  &::after{
    content: " ";
    position: absolute;
    top:50%;
    left:50% ;
    transform: scale(0);
    border: 2px solid ${(props)=> props.theme.body} ;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after{
    transform: translate(-50%, -50%) scale(1);
     padding: 0.3rem;
 }
 @media (max-width: 48em) {
  font-size: ${(props)=> props.theme.fontsm};
 }
`;
