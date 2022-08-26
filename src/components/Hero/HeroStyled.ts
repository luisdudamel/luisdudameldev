import styled from "styled-components";

export const HeroStyled = styled.section`
  padding: 0px 30px;
  .hero {
    text-align: left;
    &_name {
      &--dot {
      }
    }
    &_subheading {
      font-family: var(--common-font);
      color: var(--orange);
      font-weight: 600;
      margin: 0px;
    }
    &_title {
      color: white;
      font-family: var(--square-font);
      font-size: 2.3rem;
      font-weight: 400;
      margin: 0px;
    }
    &_text {
      font-family: var(--common-font);
      color: var(--orange);
      font-weight: 500;
    }
  }
`;

export const Name = styled.h1`
  color: var(--lightblue);
  font-family: var(--common-font);
  font-size: 2.8rem;
  margin: 0px;
`;

export const Dot = styled.span`
  color: var(--orange);
`;
