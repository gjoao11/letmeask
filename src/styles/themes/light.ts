const light = {
  title: 'light',

  colors: {
    background: '#f8f8f8',
    text: '#29292e',

    pages: {
      Auth: {
        aside: {
          background: '#835afd',
          title: '#fff',
          subtitle: '#f8f8f8',
        },
        main: {
          input: {
            background: '#fff',
            border: '#a8a8b3',
            text: '#000',
          },
          createWithGoogleButton: {
            background: '#ea4335',
            text: '#fff',
          },
          label: '#737380',
          link: '#e559f9',
          separator: '#a8a8b3',
        },
      },

      Room: {
        header: {
          border: '#e2e2e2',
        },

        main: {
          title: {
            text: '#29292e',

            questions: {
              background: '#e559f9',
              text: '#fff',
            },
          },

          form: {
            textarea: {
              background: '#fefefe',
              text: '#000',
            },

            footer: {
              userInfoText: '#29292e',

              label: {
                text: '#737380',
                buttonText: '#835afd',
              },
            },
          },
        },
      },
    },

    components: {
      Question: {
        background: '#fefefe',
        text: '#29292e',
        userInfoText: '#737380',

        highlighted: {
          background: '#f4f0ff',
          border: '#835afd',
          userInfoText: '#29292e',
        },

        answered: {
          background: '#dbdcdd',
        },

        button: {
          likeButton: {
            color: '#737380',

            liked: {
              color: '#835afd',
              stroke: '#835afd',
            },
          },
        },
      },

      Button: {
        background: '#835afd',
        text: '#fff',

        outlined: {
          background: '#fff',
          border: '#835afd',
          text: '#835afd',
        },
      },

      RoomCode: {
        background: '#fff',
        border: '#835afd',
        iconBackground: '#835afd',
        text: '#000',
      },

      ThemeSwitch: {
        background: '#fff',
        border: '#835afd',
      },
    },
  },
}

export default light;