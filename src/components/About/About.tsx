import {
  AboutArticle,
  AboutStyled,
  AboutTitle,
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
    </AboutStyled>
  );
};

export default About;
