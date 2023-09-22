import { useEffect } from "react";
import {
  MoreProjectsContainer,
  ProjectDescriptionContainer,
  ProjectItem,
  ProjectItemContainer,
  ProjectItemContainerImage,
  ProjectItemDescription,
  ProjectsContainer,
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
      <Element className="projects-element" name="projects">
        <div>
          <ProjectsTitle data-aos="fade-right" data-aos-offset="400">
            Currently working on
          </ProjectsTitle>
        </div>
      </Element>
      <ProjectsContainer>
        <ProjectItem>
          <ProjectItemContainer>
            <div>
              <ProjectItemContainerImage
                height={297}
                alt="Mobile phone showing barkedin app"
                data-aos="fade-right"
                data-aos-offset="600"
                src="./img/projects/dog-list.webp"
              ></ProjectItemContainerImage>
              <ProjectItemContainerImage
                height={297}
                alt="Mobile phone showing barkedin app"
                data-aos="fade-right"
                data-aos-offset="600"
                src="./img/projects/edit-profile.webp"
              ></ProjectItemContainerImage>
              <ProjectItemContainerImage
                height={297}
                alt="Mobile phone showing barkedin app"
                data-aos="fade-right"
                data-aos-offset="600"
                src="./img/projects/meeting-detail.webp"
              ></ProjectItemContainerImage>
            </div>

            <ProjectDescriptionContainer
              data-aos="fade-right"
              data-aos-offset="600"
            >
              <h3>BarkedIn</h3>
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
                  src="./img/techicons/github-orange.svg"
                  height={60}
                  width={60}
                  alt="Github logo"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  onClick={() =>
                    openInNewTab(
                      "https://github.com/luisdudamel/barkedin-front"
                    )
                  }
                />

                <img
                  src="./img/techicons/web-orange.svg"
                  height={60}
                  width={60}
                  alt="Website logo"
                  data-aos="zoom-in"
                  data-aos-offset="300"
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
            src="./img/techicons/github-orange.svg"
            width={60}
            height={60}
            alt="Github logo"
            data-aos="fade-right"
            data-aos-offset="300"
            onClick={() => openInNewTab("https://github.com/luisdudamel")}
          />
        </MoreProjectsContainer>
      </ProjectsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
