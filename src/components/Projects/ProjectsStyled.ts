import styled from "styled-components";

export const ProjectsStyled = styled.section`
  background-color: var(--dark);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .projects-element {
    width: 100%;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ProjectsTitle = styled.h2`
  font-family: var(--common-font);
  padding-top: 10px;
  text-align: center;
  color: var(--lightblue);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    text-align: center;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const ProjectItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  .tech-icons-container {
    display: flex;
    flex-direction: row;
  }

  img {
    @media (min-width: 900px) {
      padding-right: 30px;
    }
  }

  img:nth-child(2) {
    display: none;

    @media (min-width: 900px) {
      display: inline;
      padding-right: 30px;
    }
  }
  img:nth-child(3) {
    display: none;

    @media (min-width: 1220px) {
      display: inline;
      padding-right: 30px;
    }
  }
`;

export const ProjectItemContainerImage = styled.img`
  @media (min-width: 900px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 20px;
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

    @media (min-width: 900px) {
      font-size: 2rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
`;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  img {
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;

    :hover {
      color: white;
    }

    @media (min-width: 900px) {
      height: 60px;
    }

    @media (min-width: 1200px) {
      font-size: 1.7rem;
      line-height: 2.5rem;
    }
  }
`;

export const ProjectItemDescription = styled.p`
  color: white;
  margin-top: 0px;
  font-family: var(--common-font);
  line-height: 1.2rem;
  font-size: 0.8rem;

  @media (min-width: 900px) {
    font-size: 1rem;
    line-height: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`;

export const MoreProjectsContainer = styled.div`
  font-family: var(--common-font);
  padding-top: 10px;
  text-align: center;
  color: var(--lightblue);
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
