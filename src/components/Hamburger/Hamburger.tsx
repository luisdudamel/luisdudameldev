import { Link } from "react-scroll";
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
            <li>
              <Link duration={500} smooth={true} to="home">
                Home
              </Link>
            </li>
            <li>
              <Link duration={500} smooth={true} to="about">
                About
              </Link>
            </li>
            <li>
              <Link duration={500} smooth={true} to="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link duration={500} smooth={true} to="contact">
                Contact
              </Link>
            </li>
          </ul>
          <Button text="RESUME" />
        </div>
      </div>
    </HamburgerStyled>
  );
};

export default Hamburger;
