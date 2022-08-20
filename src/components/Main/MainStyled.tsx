import styled from "styled-components";

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    &-headings {
      display: flex;
      flex-direction: column;
      &-subname {
        color: #55b5fa;
        margin-bottom: 0;
        font-size: 2rem;
      }
      &-name {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 8rem;
        color: white;
      }
    }
  }
  @media (min-width: 350px) {
    .hero {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      &-headings {
        display: flex;
        flex-direction: column;
        &-subname {
          color: #55b5fa;
          margin-bottom: 0;
          font-size: 2rem;
        }
        &-name {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 3rem;
          color: white;
        }
      }
    }
  }
  .bio {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    &-profile-picture {
      border-radius: 3rem;
      margin: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;

export default MainStyled;
