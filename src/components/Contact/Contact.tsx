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
      <ContactTitle>Let's talk!</ContactTitle>
      <ContactArticle>
        I’m always looking for new oportunities. Whether you want to say hi or
        have a question. My inbox is always open.{" "}
      </ContactArticle>
      <ContactIconsContainer>
        <ContactButton>Get in touch</ContactButton>
        <img src="./img/techicons/linkedin-logo.png" width={50} alt="" />
        <img src="./img/techicons/twitter-logo.png" width={50} alt="" />
        <p>
          <span>Built</span> and <span>designed</span> by Luis Dudamel
        </p>
      </ContactIconsContainer>
    </ContactStyled>
  );
};

export default Contact;
