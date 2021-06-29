const dark = {
  title: 'dark',

  colors: {
    background: '#181818',
    text: '#f5f5f5',

    pages: {
      Auth: {
        aside: {
          background: '#835afd',
          title: '#fff',
          subtitle: '#f8f8f8',
        },
        main: {
          input: {
            background: '#282828',
            border: '#9898a3',
            text: '#fff',
          },
          createWithGoogleButton: {
            background: '#ea4335',
            text: '#fff',
          },
          label: '#838390',
          link: '#e559f9',
          separator: '#9898a3',
        },
      },

      Room: {
        header: {
          border: '#323232',
        },

        main: {
          title: {
            text: '#f5f5f5',

            questions: {
              background: '#b529c9',
              text: '#fff',
            },
          },

          form: {
            textarea: {
              background: '#323232',
              text: '#fff',
            },

            footer: {
              userInfoText: '#9898a3',

              label: {
                text: '#838390',
                buttonText: '#835afd',
              },
            },
          },
        },
      },
    },

    components: {
      Question: {
        background: '#2c2a2e',
        text: '#f2f2f2',
        userInfoText: '#9898a3',

        highlighted: {
          background: '#24202f',
          border: '#835afd',
          userInfoText: '#9898a3',
        },

        answered: {
          background: '#1b1c1d',
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
          background: '#242424',
          border: '#835afd',
          text: '#835afd',
        },
      },

      RoomCode: {
        background: '#242424',
        border: '#835afd',
        iconBackground: '#835afd',
        text: '#fff',
      },

      ThemeSwitch: {
        background: '#242424',
        border: '#835afd',
      },
    },
  },
}

export default dark;