import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const GoToTopStyled = styled.div`
  position: fixed;
  bottom: 10px;
  right: 4vw;
  z-index: 20;
  width: 25px;
  transition: all 0.4s;
  img {
    opacity: 0;
    transition: all 0.4s;
  }

  img.scrolled {
    opacity: 100;
    transition: all 0.4s;
  }
`;
