import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--orange);
  color: white;
  border-radius: 40px;
  width: 100px;
  font-family: var(--square-font);
  border: 0px;
  height: 30px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: var(--orange);
    transition: all 0.3s;
  }
`;

export default ButtonStyled;
