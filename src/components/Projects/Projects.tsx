import { useEffect } from "react";
import {
  MoreProjectsContainer,
  ProjectDescriptionContainer,
  ProjectItem,
  ProjectItemContainer,
  ProjectItemDescription,
  ProjectsStyled,
  ProjectsTitle,
} from "./ProjectsStyled";
import Aos from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";

const Projects = (): JSX.Element => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <ProjectsStyled>
      <Element name="projects">
        <ProjectsTitle data-aos="fade-right" data-aos-offset="400">
          Curently working on
        </ProjectsTitle>
      </Element>
      <ProjectItem>
        <ProjectItemContainer>
          <img
            src="./img/projects/barkedin-mobile.png"
            height={300}
            alt="Mobile phone showing barkedin app"
            data-aos="fade-right"
            data-aos-offset="600"
          />
          <ProjectDescriptionContainer
            data-aos="fade-right"
            data-aos-offset="600"
          >
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
              <br /> API rest built with Express + MongoDB.{" "}
            </ProjectItemDescription>
            <div className="tech-icons-container">
              <img
                src="./img/techicons/github-orange.png"
                height={40}
                alt="Github logo"
                data-aos="zoom-in"
                data-aos-offset="600"
                onClick={() =>
                  openInNewTab("https://github.com/luisdudamel/barkedin-front")
                }
              />

              <img
                src="./img/techicons/web-orange.png"
                height={40}
                alt="Website logo"
                data-aos="zoom-in"
                data-aos-offset="600"
                onClick={() =>
                  openInNewTab("https://www.luisdudamel.dev/barkedin")
                }
              />
            </div>
          </ProjectDescriptionContainer>
        </ProjectItemContainer>
      </ProjectItem>
      <MoreProjectsContainer data-aos="fade-right" data-aos-offset="400">
        Looking for more? <br /> Check out my GitHub!
        <img
          src="./img/techicons/github-orange.png"
          width={60}
          alt="Github logo"
          data-aos="fade-right"
          data-aos-offset="400"
        />
      </MoreProjectsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
