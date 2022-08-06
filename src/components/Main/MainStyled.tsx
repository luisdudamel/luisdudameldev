import styled from "styled-components";

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    color: white;
  }

  @keyframes blink {
    50% {
      color: transparent;
    }
  }
  .loading-dot {
    animation: 1s blink infinite;
  }
  .loading-dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .loading-dot:nth-child(3) {
    animation-delay: 500ms;
  }

  .social-icons {
    margin-top: 20px;
    &--icon {
      margin: 0 10px;
    }
  }
`;

export default MainStyled;
