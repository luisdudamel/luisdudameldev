import Hamburger from "../Hamburger/Hamburger";
import {
  HeroDot,
  HeroStyled,
  HeroName,
  HeroSubhead,
  HeroText,
  HeroTitle,
} from "./HeroStyled";
import { Element } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <>
      <HeroStyled>
        <Element name="home">
          <Hamburger />
        </Element>
        <HeroSubhead data-aos="fade-down">Hi, I'm</HeroSubhead>
        <HeroName data-aos="slide-right">
          Luis Dudamel<HeroDot>.</HeroDot>
        </HeroName>
        <HeroTitle data-aos="slide-up" data-aos-offset="100">
          I create stuff <br /> for the web
        </HeroTitle>
        <HeroText data-aos="zoom-in" data-aos-offset="200">
          I'm a software engineer, who loves to find new ways of solving
          problems while building great digital experiences.
        </HeroText>
      </HeroStyled>
    </>
  );
};

export default Hero;
