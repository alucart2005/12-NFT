import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

export function ScrollToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();
  const scrollTo = () => {
    let element = document.getElementById("navigation");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);
  return <Up ref={ref} onClick={scrollTo}>⬆</Up>;
}

const Up = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  background-color: whitesmoke;
  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 100;
  font-weight: 900;
  font-size: 25px;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;
