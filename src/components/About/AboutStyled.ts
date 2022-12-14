import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as theme from "../../styles/Theme.styled";

export const AboutStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.oddSection};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 900px) {
    justify-content: flex-start;
    gap: 100px;
  }
  .icons-section {
    display: flex;
    justify-content: center;
    @media (min-width: 900px) {
      justify-content: flex-start;
    }
  }
`;

export const AboutContainer = styled.div`
  height: 100%;
  @media (min-width: 900px) {
    .container-desktop {
      display: flex;
      flex-direction: column;
      width: 50vw;
    }

    @media (min-width: 1200px) {
      .container-desktop {
        display: flex;
        flex-direction: column;
        width: 60vw;
      }
    }

    .about_section_desktop {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

export const AboutTitle = styled.h2`
  font-family: var(--common-font);
  text-align: center;
  color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    text-align: left;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
    text-align: left;
  }
`;

export const AboutArticle = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.colors.main};
  font-weight: 400;
  font-size: 1rem;
  line-height: 23px;
  font-family: var(--common-font);
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const ArticleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.mainBackground};
`;

export const ArticleFigureMobile = styled.figure`
  text-align: center;
  font-family: var(--common-font);
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.mainBackground};
  @media (min-width: 900px) {
    display: none;
  }
`;

export const ArticleFigureDesktop = styled.figure`
  text-align: center;
  font-family: var(--common-font);
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.mainBackground};
  display: none;
  @media (min-width: 900px) {
    display: block;
    align-self: center;

    .figure_caption {
      font-size: 1.3rem;
    }
  }
`;

export const AboutPicture = styled.img`
  width: 200px;

  @media (min-width: 900px) {
    width: 350px;
  }
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
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--common-font);
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0;
  line-height: 10px;
  @media (min-width: 900px) {
    font-size: 1.1rem;
    line-height: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
`;

export const AboutEducationSchool = styled.p`
  margin-top: 0;
  font-size: 1rem;
  font-family: var(--common-font);
  color: ${({ theme }) => theme.colors.main};
  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

export const AboutStackTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainBackground};
  font-family: var(--common-font);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  @media (min-width: 900px) {
    font-size: 1.8rem;
    text-align: left;
  }
`;

export const AboutStackIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3px;
  width: 80vw;
  justify-content: center;
  padding-bottom: 30px;
  @media (min-width: 900px) {
    width: 50vw;
    justify-content: flex-start;
  }
`;

export const AboutStackIcon = styled.img`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;
