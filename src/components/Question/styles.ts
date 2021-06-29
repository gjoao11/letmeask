import styled from 'styled-components';

export const QuestionContainer = styled.div`
  &.question {
    background: ${props => props.theme.colors.components.Question.background};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + .question {
      margin-top: 8px;
    }

    &.highlighted {
      background: ${props => props.theme.colors.components.Question.highlighted.background};
      border: 1px solid ${props => props.theme.colors.components.Question.highlighted.border};

      footer .user-info span {
        color: ${props => props.theme.colors.components.Question.highlighted.userInfoText};
      }
    }

    &.answered {
      background: ${props => props.theme.colors.components.Question.answered.background};
    }

    p {
      color: ${props => props.theme.colors.components.Question.text};
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: ${props => props.theme.colors.components.Question.userInfoText};
          font-size: 14px;
        }
      }

      > div:last-child {
        display: flex;
        gap: 16px;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: ${props => props.theme.colors.components.Question.button.likeButton.color};
          gap: 8px;

          &.liked {
            color: ${props => props.theme.colors.components.Question.button.likeButton.liked.color};

            svg path {
              stroke: ${props => props.theme.colors.components.Question.button.likeButton.liked.stroke};
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`