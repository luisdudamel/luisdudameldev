import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as theme from "../../styles/Theme.styled";

export const ContactStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.oddSection};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;

export const ContactTitle = styled.h2`
  font-family: var(--common-font);
  text-align: center;
  color: ${({ theme }) => theme.colors.mainBackground};
  font-size: 1.8rem;
  margin-top: 60px;
  font-weight: 600;
  margin-bottom: 0;

  @media (min-width: 900px) {
    font-size: 2.2rem;
    text-align: center;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const ContactArticle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
  font-weight: 400;
  font-size: 1.4rem;
  font-family: var(--common-font);

  @media (min-width: 700px) {
    width: 50%;
    font-size: 2.2rem;
    text-align: center;
  }
`;

export const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 10px;

  img {
    cursor: pointer;

    @media (min-width: 700px) {
      width: 60px;
    }

    @media (min-width: 900px) {
      width: 70px;
    }
  }
`;

export const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  cursor: pointer;

  :hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.accent};
    border: solid 1px ${({ theme }) => theme.colors.accent};
  }
  @media (min-width: 900px) {
    font-size: 2rem;
    height: 60px;
  }
`;

export const StyledFooter = styled.p`
  font-size: 0.7rem;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.mainBackground};

  span {
    color: ${({ theme }) => theme.colors.accent};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.decorationBackground};
      transition: all 0.2s;
    }
  }

  @media (min-width: 900px) {
    font-size: 1.3rem;
  }
`;
