import {
  HeroDot,
  HeroStyled,
  HeroName,
  HeroSubhead,
  HeroText,
  HeroTitle,
} from "./HeroStyled";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  theme: boolean;
}

const Hero = ({ theme }: HeroProps): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, [theme]);

  return (
    <>
      <HeroStyled>
        <HeroSubhead data-aos="fade-down">Hi, I'm</HeroSubhead>
        <HeroName data-aos="slide-right" data-aos-delay="200">
          Luis Dudamel<HeroDot>.</HeroDot>
        </HeroName>
        <HeroTitle data-aos="slide-right" data-aos-delay="400">
          I create stuff for the web
        </HeroTitle>
        <HeroText data-aos="fade-up" data-aos-delay="600">
          I'm a full stack web developer, who loves to find new ways of solving
          problems while building great digital experiences.
        </HeroText>
      </HeroStyled>
    </>
  );
};

export default Hero;
