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

const Projects = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <ProjectsStyled>
      <ProjectsTitle data-aos="fade-right" data-aos-delay="200">
        Curently working on
      </ProjectsTitle>
      <ProjectItem>
        <ProjectItemContainer>
          <img
            src="./img/projects/barkedin-mobile.png"
            height={300}
            alt="Mobile phone showing barkedin app"
            data-aos="fade-right"
            data-aos-offset="400"
          />
          <ProjectDescriptionContainer
            data-aos="fade-right"
            data-aos-offset="300"
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
            <div>
              <img
                src="./img/techicons/github-orange.png"
                height={40}
                alt="Github logo"
                data-aos="zoom-in"
                data-aos-offset="350"
              />
              <img
                src="./img/techicons/web-orange.png"
                height={40}
                alt="Website logo"
                data-aos="zoom-in"
                data-aos-offset="400"
              />
            </div>
          </ProjectDescriptionContainer>
        </ProjectItemContainer>
      </ProjectItem>
      <MoreProjectsContainer data-aos="fade-right" data-aos-delay="300">
        Looking for more? <br /> Check out my GitHub!
        <img
          src="./img/techicons/github-orange.png"
          height={60}
          alt="Github logo"
          data-aos="fade-right"
          data-aos-offset="300"
        />
      </MoreProjectsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
