import styled from 'styled-components';

export const RoomCodeContainer = styled.button`
  &.room-code {
    height: 40px;
    border-radius: 8px;
    overflow: hidden;

    background: ${props => props.theme.colors.components.RoomCode.background};
    border: 1px solid ${props => props.theme.colors.components.RoomCode.border};
    cursor: pointer;

    display: flex;

    &:hover {
      filter: brightness(0.9);
    }

    div {
      background: ${props => props.theme.colors.components.RoomCode.iconBackground};
      padding: 0 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    span {
      display: block;
      align-self: center;
      flex: 1;
      padding: 0 16px 0 12px;
      width: 240px;
      font-size: 14px;
      font-weight: 500;
      color: ${props => props.theme.colors.components.RoomCode.text};
    }
  }
`