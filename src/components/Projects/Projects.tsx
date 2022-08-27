import {
  MoreProjectsContainer,
  ProjectDescriptionContainer,
  ProjectItem,
  ProjectItemContainer,
  ProjectItemDescription,
  ProjectsStyled,
  ProjectsTitle,
} from "./ProjectsStyled";

const Projects = (): JSX.Element => {
  return (
    <ProjectsStyled>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectItem>
        <ProjectItemContainer>
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
                height={40}
                alt="Github logo"
              />
              <img
                src="./img/techicons/web-orange.png"
                height={40}
                alt="Website logo"
              />
            </div>
          </ProjectDescriptionContainer>
        </ProjectItemContainer>

        <div>
          <img
            src="./img/projects/barkedin-desktop.png"
            width={300}
            alt="Desktop showing barkedin app"
          />
        </div>
      </ProjectItem>
      <MoreProjectsContainer>
        Looking for more? <br /> Check out my github!
        <img
          src="./img/techicons/github-orange.png"
          height={60}
          alt="Github logo"
        />
      </MoreProjectsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
