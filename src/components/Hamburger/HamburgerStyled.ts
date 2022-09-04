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

  .toggler {
    z-index: 6;
    height: 45px;
    width: 2.5em;
    position: absolute;
    top: 3.2em;
    right: 1%;
    margin-left: -2em;
    margin-top: -45px;
    cursor: pointer;
    opacity: 0;
  }

  .hamburger {
    position: absolute;
    height: 2px;
    width: 1.7em;
    margin-top: 6px;
    z-index: 5;

    &_bread {
      top: 0px;
      left: 0px;
      position: relative;
      background-color: white;
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
      transition: all 0.5s;
    }
    &_meat {
      background-color: white;
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
      transition: all 0.2s;
    }
  }
  .menu {
    z-index: 4;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    top: 0px;
    right: -100vw;
    height: 50vh;
    background-color: var(--darkblue);
    color: white;
    font-family: var(--square-font);
    width: 0vw;
    opacity: 100;
    transition: all 1s;
    transition-delay: 0.1s;
    height: 100vh;

    &_list {
      margin-top: 100px;
      padding-left: 0px;
      width: 100%;
      text-align: center;
      list-style-type: none;

      li {
        margin-bottom: 30px;
      }
    }
    &_container {
      opacity: 100;
      display: flex;
      height: 100%;
      flex-direction: column;
      gap: 40px;
    }
  }
  .toggler:checked ~ .menu {
    opacity: 100;
    right: 0vw;
    width: 50vw;
    transition: all 0.6s;
  }

  .toggler:checked ~ .hamburger {
    z-index: 20;

    > .hamburger {
      &_meat {
        opacity: 0;
        transition: all 0.2s;
      }
    }

    div:nth-child(1) {
      top: 10px;
      transform: rotate(45deg);
      transition: all 0.5s;
    }

    div:nth-child(3) {
      top: -6px;
      transform: rotate(135deg);
      transition: all 1s;
    }
  }
`;
