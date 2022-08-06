import MainStyled from "./MainStyled";

const Main = (): JSX.Element => {
  return (
    <MainStyled>
      <h1>
        In development
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </h1>
    </MainStyled>
  );
};

export default Main;
