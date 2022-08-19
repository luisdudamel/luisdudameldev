import MainStyled from "./MainStyled";
import Lottie from "lottie-react";
import * as json from "../../lottie.json";

const Main = (): JSX.Element => {
  return (
    <MainStyled>
      <Lottie className="lottie" animationData={json}></Lottie>
      <h1>
        In development
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </h1>

      <div className="social-icons">
        {`<`}
        <a href="https://github.com/luisdudamel">
          <img
            className="social-icons--icon"
            width={30}
            src="img/github.png"
            alt="Github Logo"
          />
        </a>
        <a href={`mailto:${`luis@luisdudamel.dev`}`}>
          <img
            className="social-icons--icon"
            width={30}
            src="img/gmail.png"
            alt="Email Logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/luis-dudamel/">
          <img
            className="social-icons--icon"
            width={30}
            src="img/linkedin.png"
            alt="Linkedin Logo"
          />
        </a>
        {` />`}
      </div>
    </MainStyled>
  );
};

export default Main;
