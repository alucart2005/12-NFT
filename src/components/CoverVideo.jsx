import styled from "styled-components";
import GIF from "../assets/Home Video.mp4"

export default function CoverVideo() {
  return (<VideoContainer>
    <video src={GIF} type="video" autoPlay muted loop/>
  </VideoContainer>);
}

const VideoContainer = styled.div`
  width: 100%;
  video{
    width: 100%;
    height: auto;
    @media (max-with: 64em) {
      min-width: 40vh;
    }

  }
`