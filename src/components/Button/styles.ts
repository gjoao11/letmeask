import styled from 'styled-components';

export const ButtonContainer = styled.button`
  &.button {
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.colors.components.Button.background};
    color: ${props => props.theme.colors.components.Button.text};
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &.outlined {
      background: ${props => props.theme.colors.components.Button.outlined.background};
      border: 1px solid ${props => props.theme.colors.components.Button.outlined.border};
      color: ${props => props.theme.colors.components.Button.outlined.text}; 
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`