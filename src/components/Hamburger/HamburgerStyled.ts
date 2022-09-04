import styled from "styled-components";

export const HamburgerStyled = styled.div`
  position: absolute;
  top: 4em;
  right: 5%;
  margin-left: -2em;
  margin-top: -45px;
  width: 2em;
  height: 45px;
  z-index: 5;

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;

    &_bread {
      background-color: white;
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
    }
    &_meat {
      background-color: white;
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
    }
  }
  .menu {
    position: fixed;
    top: 0px;
    left: 50%;
    height: 100vh;
    background-color: white;
    width: 50vw;
    opacity: 0;

    &.open {
      position: fixed;
      top: 0px;
      left: 50%;
      height: 100vh;
      background-color: white;
      width: 50vw;
      opacity: 100;
    }
  }
`;
