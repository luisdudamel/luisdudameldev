import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  url: string;
}

const Button = ({ text, url }: ButtonProps): JSX.Element => {
  const openInNewTab = (urlToOpen: string): void => {
    const newWindow = window.open(urlToOpen, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return <ButtonStyled onClick={() => openInNewTab(url)}>{text}</ButtonStyled>;
};

export default Button;
