import styled from "styled-components";

export const ContactStyled = styled.section`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
`;

export const ContactTitle = styled.h2`
  font-family: var(--common-font);
  text-align: center;
  color: var(--darkblue);
  font-size: 1.8rem;
  margin-top: 60px;
  font-weight: 600;
  margin-bottom: 0;
`;

export const ContactArticle = styled.p`
  text-align: center;
  color: var(--dark);
  font-weight: 400;
  font-size: 1.4rem;

  font-family: var(--common-font);
`;

export const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  p {
    font-size: 0.7rem;
  }
  span {
    color: var(--orange);
  }
`;

export const ContactButton = styled.button`
  background-color: var(--orange);
  border: none;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 20px;
  color: white;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: white;
    color: var(--orange);
    border: solid 1px var(--orange);
    transition: all 0.3s;
  }
`;
