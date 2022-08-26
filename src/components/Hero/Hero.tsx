import { Dot, HeroStyled, Name } from "./HeroStyled";

const Hero = (): JSX.Element => {
  return (
    <>
      <HeroStyled>
        <p className="hero_subheading">Hi, I'm</p>
        <Name>
          Luis Dudamel<Dot>.</Dot>
        </Name>
        <h2 className="hero_title">
          I create stuff <br /> for the web
        </h2>
        <p className="hero_text">
          I'm a software engineer, who loves to find new ways of solving
          problems while building great digital experiences.
        </p>
      </HeroStyled>
    </>
  );
};

export default Hero;
