import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as theme from "../../styles/Theme.styled";

export const StyledNavbarContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.main};
  border: 0px;
  color: ${({ theme }) => theme.colors.navbarText};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  padding-right: 5vw;
  height: 60px;
  align-items: center;
  font-family: var(--square-font);
  font-size: 1.3rem;

  button {
    height: 30px;
    font-size: 1.1rem;
    box-shadow: 0 0 0 0 #ec008c, 0.5rem 0.5rem 30px mix(black, #26115a, 50%);
    transition: all 0.3s;
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

export const StyledNavlinkContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  :hover,
  :focus {
    background-size: 100% 2px;
  }
`;

export const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
  border: solid 2px ${({ theme }) => theme.colors.subHeading};
  height: 25px;
  width: 45px;
  border-radius: 20px;

  .switch__toggler {
    cursor: pointer;
    z-index: 6;
    height: 25px;
    width: 15px;
    position: absolute;
    opacity: 0;
    margin-left: 3px;
  }

  .switch__toggler:checked {
    cursor: pointer;
    z-index: 6;
    height: 25px;
    width: 15px;
    position: absolute;
    opacity: 0;
    margin-left: 23px;

    + div {
      margin-left: 20px;
      background-color: ${({ theme }) => theme.colors.oddSection};
      border: solid 2px ${({ theme }) => theme.colors.oddSection};
    }
  }
`;

export const StyledSwitch = styled.div`
  cursor: pointer;
  background-color: var(--lightblue);
  border: solid 2px var(--lightblue);
  height: 19px;
  width: 19px;
  margin-left: 2px;
  border-radius: 20px;
  transition: all 0.3s;
`;
