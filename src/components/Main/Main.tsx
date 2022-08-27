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
      <Projects />
      <Contact />
    </MainStyled>
  );
};

export default Main;
