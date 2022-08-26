import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
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
  font-weight: 400;
  font-size: 1rem;
  line-height: 23px;
  font-family: var(--common-font);
`;

export const ArticleHighlight = styled.span`
  color: var(--darkblue);
`;

export const ArticleFigure = styled.figure`
  text-align: center;
  font-family: var(--common-font);
  font-size: 0.7rem;
  color: var(--darkblue);
`;

export const AboutPicture = styled.img`
  width: 200px;
`;

export const AboutEducation = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AboutEducationItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

export const AboutEducationSchoolSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutEducationTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--common-font);
  color: var(--orange);
  margin-bottom: 0;
  line-height: 10px;
`;

export const AboutEducationSchool = styled.p`
  margin-top: 0;
  font-size: 1rem;
  font-family: var(--common-font);
`;

export const AboutStackTitle = styled.h3`
  font-family: var(--common-font);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export const AboutStackIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
  width: 80vw;
  justify-content: center;
`;

export const AboutStackIcon = styled.img`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;
