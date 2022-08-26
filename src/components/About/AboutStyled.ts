import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
`;

export const AboutTitle = styled.h2`
  font-family: var(--common-font);
  text-align: center;
  color: var(--darkblue);
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export const AboutArticle = styled.p`
  text-align: left;
  color: var(--dark);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 24px;
`;

export const ArticleHighlight = styled.span`
  color: var(--darkblue);
`;
