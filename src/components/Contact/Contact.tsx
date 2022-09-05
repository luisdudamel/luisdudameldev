import {
  ContactArticle,
  ContactButton,
  ContactIconsContainer,
  ContactStyled,
  ContactTitle,
} from "./ContactStyled";

const Contact = (): JSX.Element => {
  return (
    <ContactStyled>
      <ContactTitle data-aos="fade-right" data-aos-delay="300">
        Let's talk!
      </ContactTitle>
      <ContactArticle data-aos="fade-right" data-aos-offset="300">
        I’m always looking for new oportunities. Whether you want to say hi or
        have a question. My inbox is always open.{" "}
      </ContactArticle>
      <ContactIconsContainer>
        <ContactButton data-aos="zoom-in" data-aos-offset="300">
          Get in touch
        </ContactButton>
        <img
          data-aos="zoom-in"
          data-aos-offset="300"
          src="./img/techicons/linkedin-logo.png"
          width={50}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-offset="300"
          src="./img/techicons/twitter-logo.png"
          width={50}
          alt=""
        />
        <p data-aos="fade-right" data-aos-offset="200">
          <span>Built</span> and <span>designed</span> by Luis Dudamel
        </p>
      </ContactIconsContainer>
    </ContactStyled>
  );
};

export default Contact;
