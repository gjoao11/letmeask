import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;

      pages: {
        Auth: {
          aside: {
            background: string;
            title: string;
            subtitle: string;
          };
          main: {
            input: {
              background: string;
              border: string;
              text: string;
            };
            createWithGoogleButton: {
              background: string;
              text: string;
            };
            label: string;
            link: string;
            separator: string;
          };
        };

        Room: {
          header: {
            border: string;
          };

          main: {
            title: {
              text: string;

              questions: {
                background: string;
                text: string;
              };
            };

            form: {
              textarea: {
                background: string;
                text: string;
              };

              footer: {
                userInfoText: string;

                label: {
                  text: string;
                  buttonText: string;
                };
              };
            };
          };
        };
      };

      components: {
        Question: {
          background: string;
          text: string;
          userInfoText: string;

          highlighted: {
            background: string;
            border: string;
            userInfoText: string;
          };

          answered: {
            background: string;
          };

          button: {
            likeButton: {
              color: string;

              liked: {
                color: string;
                stroke: string;
              };
            };
          };
        };

        Button: {
          background: string;
          text: string;

          outlined: {
            background: string;
            border: string;
            text: string;
          };
        };

        RoomCode: {
          background: string;
          border: string;
          iconBackground: string;
          text: string;
        };

        ThemeSwitch: {
          background: string;
          border: string;
        };
      };
    };
  }
}