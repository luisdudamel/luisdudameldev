import { Link } from "react-scroll";
import Button from "../Button/Button";
import {
  StyledNavbarContainer,
  StyledNavlinkContainer,
  StyledSwitch,
  StyledSwitchContainer,
} from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbarContainer>
      <StyledSwitchContainer>
        <StyledSwitch></StyledSwitch>
      </StyledSwitchContainer>
      <StyledNavlinkContainer>
        <Link duration={500} smooth={true} to="about">
          About
        </Link>
      </StyledNavlinkContainer>
      <StyledNavlinkContainer>
        <Link duration={500} smooth={true} to="projects">
          Projects
        </Link>
      </StyledNavlinkContainer>{" "}
      <StyledNavlinkContainer>
        <Link duration={500} smooth={true} to="contact">
          Contact
        </Link>
      </StyledNavlinkContainer>{" "}
      <Button
        url={process.env.REACT_APP_CV_URL as string}
        text="Resume"
      ></Button>
    </StyledNavbarContainer>
  );
};

export default Navbar;
