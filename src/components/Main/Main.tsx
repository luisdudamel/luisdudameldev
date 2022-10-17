import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme.styled";

import About from "../About/About";

import Contact from "../Contact/Contact";
import Hamburger from "../Hamburger/Hamburger";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import { GoToTopStyled, MainStyled } from "./MainStyled";

const Main = (): JSX.Element => {
  const [scrollVisible, setScrollVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollVisible(true);
    } else if (scrolled <= 300) {
      setScrollVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <ThemeProvider theme={dark}>
        {" "}
        <Hamburger />
        <Navbar />
        <MainStyled>
          <GoToTopStyled onClick={scrollToTop}>
            <img
              className={scrollVisible ? "scrolled" : ""}
              src="./img/up-arrow.svg"
              width={20}
              height={20}
              alt="Go to top arrow"
            />
          </GoToTopStyled>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </MainStyled>
      </ThemeProvider>
    </>
  );
};

export default Main;
