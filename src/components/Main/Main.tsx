import MainStyled from "./MainStyled";

const Main = (): JSX.Element => {
  return (
    <MainStyled>
      <section className="hero">
        <div className="hero-headings">
          <h4 className="hero-headings-subname">Hi, I'm </h4>
          <h1 className="hero-headings-name">Luis Dudamel</h1>
        </div>
      </section>
      <section className="bio">
        <img
          className="bio-profile-picture"
          src="./img/luis-pic.webp"
          height={300}
          alt="Luis profile"
        />
      </section>
    </MainStyled>
  );
};

export default Main;
