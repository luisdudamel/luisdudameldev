import Hamburger from "../Hamburger/Hamburger";
import {
  HeroDot,
  HeroStyled,
  HeroName,
  HeroSubhead,
  HeroText,
  HeroTitle,
} from "./HeroStyled";

const Hero = (): JSX.Element => {
  const hamburgerClick = () => {
    console.log("asdasd");
  };

  return (
    <>
      <HeroStyled>
        <div onClick={hamburgerClick}>
          <Hamburger />
        </div>
        <HeroSubhead>Hi, I'm</HeroSubhead>
        <HeroName>
          Luis Dudamel<HeroDot>.</HeroDot>
        </HeroName>
        <HeroTitle>
          I create stuff <br /> for the web
        </HeroTitle>
        <HeroText>
          I'm a software engineer, who loves to find new ways of solving
          problems while building great digital experiences.
        </HeroText>
      </HeroStyled>
    </>
  );
};

export default Hero;
