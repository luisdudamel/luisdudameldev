import styled from "styled-components";

export const HeroStyled = styled.section`
  padding: 0px 30px;
  text-align: left;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark);

  .hamburger {
    color: white;
  }
  .toggler {
    z-index: 6;
    height: 45px;
    width: 2em;
    position: absolute;
    top: 4em;
    right: 5%;
    margin-left: -2em;
    margin-top: -45px;
    cursor: pointer;
    opacity: 0;
  }
  .toggler:checked {
  }
`;

export const HeroName = styled.h1`
  color: var(--lightblue);
  font-family: var(--common-font);
  font-size: 2.8rem;
  margin: 0px;
`;

export const HeroDot = styled.span`
  color: var(--orange);
`;

export const HeroSubhead = styled.p`
  font-family: var(--common-font);
  color: var(--orange);
  font-weight: 500;
  margin: 0px;
`;

export const HeroTitle = styled.h2`
  color: white;
  font-family: var(--square-font);
  font-size: 2.3rem;
  font-weight: 400;
  margin: 0px;
`;

export const HeroText = styled.p`
  font-family: var(--common-font);
  color: var(--orange);
  font-weight: 500;
`;
