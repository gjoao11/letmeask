import styled from 'styled-components';

export const PageAuthContainer = styled.div`
  &#page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;

      background: ${props => props.theme.colors.pages.Auth.aside.background};
      color: ${props => props.theme.colors.pages.Auth.aside.title};
      
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 120px 80px;

      img {
        max-width: 320px;
      }

      strong {
        font: 700 36px "Poppins", sans-serif;
        line-height: 46px;
        margin-top: 16px;
      }

      p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: ${props => props.theme.colors.pages.Auth.aside.subtitle};
      }
    }

    main {
      flex: 9;

      padding: 0 32px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;

      > img {
        align-self: center;
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: "Poppins", sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: ${props => props.theme.colors.pages.Auth.main.input.background};
          border: 2px solid ${props => props.theme.colors.pages.Auth.main.input.border};
          color: ${props => props.theme.colors.pages.Auth.main.input.text};
        }

        button {
          margin-top: 16px;
        }

        button, input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: ${props => props.theme.colors.pages.Auth.main.label};
        margin-top: 16px;

        a {
          color: ${props => props.theme.colors.pages.Auth.main.link};
        }
      }
    }

    .create-room {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: ${props => props.theme.colors.pages.Auth.main.createWithGoogleButton.background};
      color: ${props => props.theme.colors.pages.Auth.main.createWithGoogleButton.text};

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 14px;
      color: ${props => props.theme.colors.pages.Auth.main.separator};

      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.pages.Auth.main.separator};
        margin-right: 16px;
      }

      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.pages.Auth.main.separator};
        margin-left: 16px;
      }
    }
  }
`