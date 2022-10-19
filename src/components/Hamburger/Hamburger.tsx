import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import {
  HamburgerStyled,
  StyledMobileSwitch,
  StyledMobileSwitchContainer,
} from "./HamburgerStyled";

interface NavbarProps {
  themeAction: () => void;
}

const Hamburger = ({ themeAction }: NavbarProps): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);

  const hidOverflow = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const isDesktopWidth = () => {
      if (window.innerWidth > 899) {
        setModalOpen(false);
      }
    };
    window.addEventListener("resize", isDesktopWidth);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [modalOpen]);

  return (
    <>
      <HamburgerStyled>
        <label htmlFor="hamburger-menu"></label>
        <input
          onClick={hidOverflow}
          type="checkbox"
          checked={modalOpen}
          className="toggler"
          id="hamburger-menu"
          name="hamburger-menu"
          readOnly
        />

        <div className="hamburger">
          <div className="hamburger_bread"></div>
          <div className="hamburger_meat"></div>
          <div className="hamburger_bread"></div>
        </div>
        <div className="menu">
          <div className="menu_container">
            <StyledMobileSwitchContainer>
              <label htmlFor="theme-switcher"></label>
              <input
                onClick={themeAction}
                type="checkbox"
                className="switch__toggler"
                id="theme-switcher"
                name="theme-switcher"
                readOnly
              />
              <StyledMobileSwitch></StyledMobileSwitch>
            </StyledMobileSwitchContainer>
            <ul className="menu_list">
              <li>
                <Link
                  onClick={hidOverflow}
                  duration={500}
                  smooth={true}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={hidOverflow}
                  duration={500}
                  smooth={true}
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={hidOverflow}
                  duration={500}
                  smooth={true}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Button
              url={process.env.REACT_APP_CV_URL as string}
              text="RESUME"
            />
          </div>
        </div>
      </HamburgerStyled>
    </>
  );
};

export default Hamburger;
