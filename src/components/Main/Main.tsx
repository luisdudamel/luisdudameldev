import { Element } from "react-scroll";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import MainStyled from "./MainStyled";

const Main = (): JSX.Element => {
  return (
    <MainStyled>
      <Hero />
      <About />
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </MainStyled>
  );
};

export default Main;
