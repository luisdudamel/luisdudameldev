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
  text-align: center;
  color: var(--lightblue);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

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
`;
