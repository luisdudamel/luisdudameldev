import {
  ProjectDescriptionContainer,
  ProjectItem,
  ProjectItemDescription,
  ProjectsStyled,
  ProjectsTitle,
} from "./ProjectsStyled";

const Projects = (): JSX.Element => {
  return (
    <ProjectsStyled>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectItem>
        <img
          src="./img/projects/barkedin-mobile.png"
          height={300}
          alt="Mobile phone showing barkedin app"
        />
        <ProjectDescriptionContainer>
          <h4>BarkedIn</h4>
          <ProjectItemDescription>
            Social network for dogs. <br /> CRUD SPA built with React +
            Typescript.
            <br />
            State management with redux.
            <br />
            Google Maps integration.
            <br />
            Material UI.
            <br /> User auth via JWT.{" "}
          </ProjectItemDescription>
          <div>
            <img
              src="./img/techicons/github-orange.png"
              height={50}
              alt="Github logo"
            />
            <img
              src="./img/techicons/web-orange.png"
              height={50}
              alt="Website logo"
            />
          </div>
        </ProjectDescriptionContainer>
      </ProjectItem>
    </ProjectsStyled>
  );
};

export default Projects;
