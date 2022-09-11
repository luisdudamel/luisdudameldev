import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  position: absolute;
  background-color: var(--dark);
  border: 0px;
  color: white;
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
