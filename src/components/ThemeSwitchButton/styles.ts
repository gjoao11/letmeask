import styled from 'styled-components';

export const ThemeSwitchButtonContainer = styled.button`
  &.theme-switch {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #242424;
    background: ${props => props.theme.colors.components.ThemeSwitch.background};
    border: 1px solid ${props => props.theme.colors.components.ThemeSwitch.border};

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      justify-content: center;
      align-items: center;
    }
  }
`