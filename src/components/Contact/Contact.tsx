import { Element } from "react-scroll";
import {
  ContactArticle,
  ContactButton,
  ContactIconsContainer,
  ContactStyled,
  ContactTitle,
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
      <ContactIconsContainer>
        <ContactButton
          onClick={() => window.open("mailto:luis@luisdudamel.dev")}
          data-aos="zoom-in"
          data-aos-offset="300"
        >
          Get in touch
        </ContactButton>
        <img
          data-aos="zoom-in"
          data-aos-offset="200"
          src="./img/techicons/linkedin-logo.png"
          width={50}
          alt="Linkedin logo"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/luis-dudamel/")
          }
        />
        <img
          data-aos="zoom-in"
          data-aos-offset="200"
          src="./img/techicons/twitter-logo.png"
          width={50}
          alt="Twitter logo"
          onClick={() => openInNewTab("https://twitter.com/esLuisDudamel/")}
        />
        <p data-aos="fade-right" data-aos-delay="300">
          <span>Built</span> and <span>designed</span> by Luis Dudamel
        </p>
      </ContactIconsContainer>
    </ContactStyled>
  );
};

export default Contact;
