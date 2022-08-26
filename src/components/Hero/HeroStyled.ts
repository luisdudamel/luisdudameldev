import styled from "styled-components";

export const HeroStyled = styled.section`
  padding: 0px 30px;
  text-align: left;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark);
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
