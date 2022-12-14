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

    @media (min-width: 900px) {
      display: none;
    }
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
    @media (min-width: 900px) {
      display: none;
    }

    &_bread {
      top: 0px;
      left: 0px;
      position: relative;
      background-color: ${({ theme }) => theme.colors.navbarText};
      height: 2px;
      width: 1.7em;
      margin-top: 6px;
      transition: all 0.4s;
    }
    &_meat {
      background-color: ${({ theme }) => theme.colors.navbarText};
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
    @media (min-width: 900px) {
      display: none;
    }

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
        cursor: pointer;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size 0.3s;

        :hover {
          background-size: 50% 2px;
        }
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
  }

  .toggler:checked ~ .menu {
    opacity: 100;
    right: 0vw;
    width: 50vw;
    transition: all 0.4s ease;
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
      transition: all 0.3s;
      background-color: white;
    }

    div:nth-child(3) {
      top: -6px;
      transform: rotate(135deg);
      transition: all 0.5s;
      background-color: white;
    }
  }
`;

export const StyledMobileSwitchContainer = styled.div`
  position: relative;
  top: 4.8em;
  margin-top: -47px;
  z-index: 6;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
  border: solid 2px ${({ theme }) => theme.colors.subHeading};
  height: 25px;
  width: 45px;
  border-radius: 20px;

  .switch__toggler {
    cursor: pointer;
    z-index: 22;
    height: 25px;
    width: 15px;
    position: absolute;
    opacity: 0;
    margin-left: 3px;
  }

  .switch__toggler:checked {
    cursor: pointer;
    z-index: 22;
    height: 25px;
    width: 15px;
    position: absolute;
    opacity: 0;
    margin-left: 23px;

    ~ div {
      margin-left: 20px;
      background-color: red;
      background-color: ${({ theme }) => theme.colors.oddSection};
      border: solid 2px ${({ theme }) => theme.colors.oddSection};
    }
  }
`;

export const StyledMobileSwitch = styled.div`
  z-index: 6;
  cursor: pointer;
  background-color: var(--lightblue);
  border: solid 2px var(--lightblue);
  height: 19px;
  width: 19px;
  margin-left: 2px;
  border-radius: 20px;
  transition: all 0.3s;
`;
