import { techStack } from "../../utils/utils";
import {
  AboutArticle,
  AboutContainer,
  AboutEducation,
  AboutEducationItem,
  AboutEducationSchool,
  AboutEducationSchoolSection,
  AboutEducationTitle,
  AboutPicture,
  AboutStackIcon,
  AboutStackIconsContainer,
  AboutStackTitle,
  AboutStyled,
  AboutTitle,
  ArticleFigureDesktop,
  ArticleFigureMobile,
  ArticleHighlight,
} from "./AboutStyled";
import { Element } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <AboutStyled>
      <Element name="about">
        <AboutTitle data-aos="slide-right" data-aos-offset="150">
          About me
        </AboutTitle>
      </Element>
      <AboutContainer>
        <div className="about_section_desktop">
          <div className="container-desktop">
            <AboutArticle data-aos="fade-right" data-aos-offset="200">
              I love to create new ways of
              <ArticleHighlight> solving problems</ArticleHighlight>, taking
              advantage of my great eye for aesthetics.
            </AboutArticle>{" "}
            <AboutArticle data-aos="fade-right" data-aos-offset="200">
              {" "}
              With
              <ArticleHighlight> testing </ArticleHighlight>
              as my main strategy, I consider myself a clean code advocate, with
              special attention to maintainability and scalability.
            </AboutArticle>
            <ArticleFigureMobile data-aos="zoom-out" data-aos-offset="300">
              <AboutPicture
                alt="Luis Dudamel headshot"
                src="/img/luis-pic2.webp"
              ></AboutPicture>
              <figcaption
                data-aos="zoom-out"
                data-aos-offset="400"
                data-aos-once="false"
              >
                Tell your dog I said hi!
              </figcaption>
            </ArticleFigureMobile>
            <AboutEducation>
              <AboutEducationItem data-aos="fade-right" data-aos-offset="200">
                <img
                  alt="Graduation hat icon"
                  height={50}
                  src="/img/graduation-hat.png"
                ></img>
                <AboutEducationSchoolSection>
                  <AboutEducationTitle>
                    Full-stack Web Developer
                  </AboutEducationTitle>
                  <AboutEducationSchool>
                    ISDI Coders (2021 World's best coding bootcamp)
                  </AboutEducationSchool>
                </AboutEducationSchoolSection>
              </AboutEducationItem>
              <AboutEducationItem data-aos="fade-right" data-aos-offset="300">
                <img
                  alt="Graduation hat icon"
                  height={50}
                  src="/img/graduation-hat.png"
                ></img>
                <AboutEducationSchoolSection>
                  <AboutEducationTitle>
                    Professional Photographer
                  </AboutEducationTitle>
                  <AboutEducationSchool>ISEC Argentina</AboutEducationSchool>
                </AboutEducationSchoolSection>
              </AboutEducationItem>
            </AboutEducation>
            <AboutStackTitle data-aos="zoom-in" data-aos-offset="300">
              My Stack
            </AboutStackTitle>
            <div className="icons-section">
              <AboutStackIconsContainer>
                {techStack.map((stack, index) => {
                  return (
                    <AboutStackIcon
                      key={stack}
                      height={60}
                      alt={`${stack} logo`}
                      src={`./img/techicons/${stack}-logo.png`}
                      data-aos="zoom-in"
                      data-aos-offset="300"
                    ></AboutStackIcon>
                  );
                })}
              </AboutStackIconsContainer>
            </div>
          </div>
          <div>
            <ArticleFigureDesktop data-aos="zoom-out" data-aos-offset="300">
              <AboutPicture
                alt="Luis Dudamel headshot"
                src="/img/luis-pic2.webp"
              ></AboutPicture>
              <figcaption
                data-aos="zoom-out"
                data-aos-delay="500"
                data-aos-once="false"
                className="figure_caption"
              >
                Tell your dog I said hi!
              </figcaption>
            </ArticleFigureDesktop>
          </div>
        </div>
      </AboutContainer>
    </AboutStyled>
  );
};

export default About;
