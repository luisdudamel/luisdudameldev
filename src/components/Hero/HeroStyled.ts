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
  @media (min-width: 700px) {
  }
`;

export const HeroName = styled.h1`
  color: var(--lightblue);
  font-family: var(--common-font);
  font-size: 2.8rem;
  margin: 0px;

  @media (min-width: 700px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    margin-left: 60px;
    font-size: 5rem;
  }
`;

export const HeroDot = styled.span`
  color: var(--orange);
`;

export const HeroSubhead = styled.p`
  font-family: var(--common-font);
  color: var(--orange);
  font-weight: 500;
  margin: 0px;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    margin-left: 60px;
    font-size: 2rem;
  }
`;

export const HeroTitle = styled.h2`
  color: white;
  font-family: var(--square-font);
  font-size: 2.3rem;
  font-weight: 400;
  margin: 0px;

  @media (min-width: 700px) {
    font-size: 3rem;
    font-size: 4rem;
  }
  @media (min-width: 1024px) {
    margin-left: 60px;
  }
`;

export const HeroText = styled.p`
  font-family: var(--common-font);
  color: var(--orange);
  font-weight: 500;

  @media (min-width: 700px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    margin-left: 60px;
  }
`;
