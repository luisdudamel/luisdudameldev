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
`;

export const HeroName = styled.h1`
  color: var(--lightblue);
  font-family: var(--common-font);
  font-size: 2.8rem;
  margin: 0px;

  @media (min-width: 700px) {
    font-size: 3rem;
    margin-left: 20px;
  }

  @media (min-width: 900px) {
    font-size: 4rem;
    margin-left: 40px;
  }

  @media (min-width: 1100px) {
    margin-left: 80px;
    font-size: 5rem;
  }

  @media (min-width: 1300px) {
    margin-left: 100px;
    font-size: 7rem;
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
    margin-left: 20px;
  }
  @media (min-width: 900px) {
    margin-left: 40px;
  }
  @media (min-width: 1100px) {
    margin-left: 80px;
    font-size: 2rem;
  }
  @media (min-width: 1300px) {
    margin-left: 100px;
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
    margin-left: 20px;
  }
  @media (min-width: 900px) {
    font-size: 3rem;
    font-size: 4rem;
    margin-left: 40px;
  }
  @media (min-width: 1100px) {
    margin-left: 80px;
  }
  @media (min-width: 1300px) {
    margin-left: 100px;
  }
`;

export const HeroText = styled.p`
  font-family: var(--common-font);
  color: var(--orange);
  font-weight: 500;

  @media (min-width: 700px) {
    width: 40%;
    margin-left: 20px;
  }
  @media (min-width: 900px) {
    width: 40%;
    margin-left: 40px;
  }
  @media (min-width: 1100px) {
    margin-left: 80px;
    font-size: 1.5rem;
  }
  @media (min-width: 1300px) {
    margin-left: 100px;
  }
`;
