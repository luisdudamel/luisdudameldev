import { Link } from "react-scroll";
import Button from "../Button/Button";
import { StyledNavbarContainer, StyledNavlinkContainer } from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbarContainer>
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
      <Button text="Resume"></Button>
    </StyledNavbarContainer>
  );
};

export default Navbar;
