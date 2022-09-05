import styled from "styled-components";

export const ProjectsStyled = styled.section`
  background-color: var(--dark);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsTitle = styled.h2`
  font-family: var(--common-font);
  padding-top: 10px;
  text-align: center;
  color: var(--lightblue);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0;
`;

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 40px;
  padding-bottom: 50px;
  img {
    margin-top: 0px;
  }

  h4 {
    color: var(--orange);
    font-size: 1.5rem;
    font-family: var(--common-font);
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  img {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ProjectItemDescription = styled.p`
  color: white;
  margin-top: 0px;
  font-family: var(--common-font);
  line-height: 1.2rem;
  font-size: 0.8rem;
`;

export const MoreProjectsContainer = styled.div`
  font-family: var(--common-font);
  padding-top: 10px;
  text-align: center;
  color: var(--lightblue);
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
