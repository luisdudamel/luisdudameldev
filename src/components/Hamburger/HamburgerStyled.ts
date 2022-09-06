import styled from "styled-components";

export const HamburgerStyled = styled.div`
  position: absolute;
  top: 4em;
  right: 5%;
  margin-left: -2em;
  margin-top: -45px;
  width: 2.5em;
  height: 2.5em;
  z-index: 5;

  .toggler {
    z-index: 6;
    height: 3em;
    width: 3em;
    position: absolute;
    top: 3.6em;
    right: -0.3em;
    margin-left: -2em;
    margin-top: -45px;
    cursor: pointer;
    opacity: 0;
  }

  .hamburger {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 2px;
    width: 1.7em;
    margin-top: 5px;
    right: 7px;
    z-index: 5;

    &_bread {
      top: 0px;
      left: 0px;
      position: relative;
      background-color: white;
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
      transition: all 0.4s;
    }
    &_meat {
      background-color: white;
      height: 2px;
      width: 1em;

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
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    &_list {
      margin-top: 150px;
      padding-left: 0px;
      width: 100%;
      text-align: center;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 15px;

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

  .toggler:checked {
    z-index: 21;
    position: fixed;
    right: 1.2em;
    top: 5em;

    #app {
      overflow: hidden;
    }
  }

  .toggler:checked ~ .menu {
    opacity: 100;
    right: 0vw;
    width: 50vw;
    transition: all 0.4s ease;
  }

  .toggler:checked ~ .hamburger {
    z-index: 20;
    position: fixed;
    right: 1.6em;

    > .hamburger {
      &_meat {
        opacity: 0;
        transition: all 0.2s;
      }
    }

    div:nth-child(1) {
      top: 10px;
      transform: rotate(45deg);
      transition: all 0.3s;
    }

    div:nth-child(3) {
      top: -6px;
      transform: rotate(135deg);
      transition: all 0.5s;
    }
  }
`;
