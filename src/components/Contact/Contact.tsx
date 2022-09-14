import { Element } from "react-scroll";
import {
  ContactArticle,
  ContactButton,
  ContactIconsContainer,
  ContactStyled,
  ContactTitle,
  StyledFooter,
} from "./ContactStyled";

const Contact = (): JSX.Element => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <ContactStyled>
      <Element name="contact">
        <ContactTitle data-aos="fade-right" data-aos-offset="500">
          Let's talk!
        </ContactTitle>
      </Element>
      <ContactArticle data-aos="fade-right" data-aos-offset="550">
        I’m always looking for new oportunities. Whether you want to say hi or
        have a question. My inbox is always open.{" "}
      </ContactArticle>
      <ContactButton
        onClick={() => window.open("mailto:luis@luisdudamel.dev")}
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Get in touch
      </ContactButton>
      <ContactIconsContainer>
        <img
          src="./img/techicons/linkedin-logo.svg"
          width={70}
          height={57}
          alt="Linkedin logo"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/luis-dudamel/")
          }
        />
        <img
          src="./img/techicons/twitter-logo.svg"
          width={70}
          height={57}
          alt="Twitter logo"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={() => openInNewTab("https://twitter.com/esLuisDudamel/")}
        />
      </ContactIconsContainer>
      <StyledFooter>
        <span
          onClick={() =>
            openInNewTab("https://github.com/luisdudamel/luisdudameldev")
          }
        >
          Built
        </span>{" "}
        and{" "}
        <span
          onClick={() =>
            openInNewTab("https://github.com/luisdudamel/luisdudameldev")
          }
        >
          designed
        </span>{" "}
        by Luis Dudamel
      </StyledFooter>
    </ContactStyled>
  );
};

export default Contact;
