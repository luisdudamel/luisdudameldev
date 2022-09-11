import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const GoToTopStyled = styled.div`
  position: fixed;
  bottom: 30px;
  right: 6vw;
  z-index: 20;
  width: 25px;
  transition: all 0.4s;
  cursor: pointer;

  @media (min-width: 900px) {
    transform: scale(1.5, 1.5);

    :hover {
      transform: scale(2, 2);
    }
  }

  img {
    opacity: 0;
    transition: all 0.4s;
  }

  img.scrolled {
    opacity: 100;
    transition: all 0.4s;
    animation: zoom-in-zoom-out 1s ease;
  }

  :active {
    transform: scale(1.5, 1.5);
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;
