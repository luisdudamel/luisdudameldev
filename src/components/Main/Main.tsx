import About from "../About/About";
import Hero from "../Hero/Hero";
import MainStyled from "./MainStyled";

const Main = (): JSX.Element => {
  return (
    <MainStyled>
      <Hero />
      <About />
    </MainStyled>
  );
};

export default Main;
