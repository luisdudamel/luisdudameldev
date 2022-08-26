import { techStack } from "../../utils/utils";
import {
  AboutArticle,
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
  ArticleFigure,
  ArticleHighlight,
} from "./AboutStyled";

const About = (): JSX.Element => {
  return (
    <AboutStyled>
      <AboutTitle>About me</AboutTitle>
      <AboutArticle>
        I love to create new ways of
        <ArticleHighlight> solving problems</ArticleHighlight>, taking advantage
        of my great eye for aesthetics.
      </AboutArticle>{" "}
      <AboutArticle>
        {" "}
        With
        <ArticleHighlight> testing </ArticleHighlight>
        as my main strategy, I consider myself a clean code advocate, with
        special attention to maintainability and scalability.
      </AboutArticle>
      <ArticleFigure>
        <AboutPicture
          alt="Luis Dudamel headshot"
          src="/img/luis-pic2.webp"
        ></AboutPicture>
        <figcaption>Tell your dog I said hi!</figcaption>
      </ArticleFigure>
      <AboutEducation>
        <AboutEducationItem>
          <img
            alt="Graduation hat icon"
            height={50}
            src="/img/graduation-hat.png"
          ></img>
          <AboutEducationSchoolSection>
            <AboutEducationTitle>Full-stack Web Developer</AboutEducationTitle>
            <AboutEducationSchool>
              ISDI Coders (2021 World's best coding bootcamp)
            </AboutEducationSchool>
          </AboutEducationSchoolSection>
        </AboutEducationItem>
        <AboutEducationItem>
          <img
            alt="Graduation hat icon"
            height={50}
            src="/img/graduation-hat.png"
          ></img>
          <AboutEducationSchoolSection>
            <AboutEducationTitle>Professional Photographer</AboutEducationTitle>
            <AboutEducationSchool>ISEC Argentina</AboutEducationSchool>
          </AboutEducationSchoolSection>
        </AboutEducationItem>
      </AboutEducation>
      <AboutStackTitle>My Stack</AboutStackTitle>
      <AboutStackIconsContainer>
        {techStack.map((stack) => {
          return (
            <AboutStackIcon
              key={stack}
              height={60}
              alt={`${stack} logo`}
              src={`./img/techicons/${stack}-logo.png`}
            ></AboutStackIcon>
          );
        })}
      </AboutStackIconsContainer>
    </AboutStyled>
  );
};

export default About;
