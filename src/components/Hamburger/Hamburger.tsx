import Button from "../Button/Button";
import { HamburgerStyled } from "./HamburgerStyled";

const Hamburger = (): JSX.Element => {
  return (
    <HamburgerStyled>
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div className="hamburger_bread"></div>
        <div className="hamburger_meat"></div>
        <div className="hamburger_bread"></div>
      </div>
      <div className="menu">
        <div className="menu_container">
          <ul className="menu_list">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
          <Button text="RESUME" />
        </div>
      </div>
    </HamburgerStyled>
  );
};

export default Hamburger;
