import { css } from 'react-emotion';

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 16px;
`;

export const imgContainer = css`
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border: solid 1px black;
  background-color: white;
  border-radius: 50%;
  display: block;
  position: relative;

  img {
    width: 100%;
  }
`;

export const sortContainer = css`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 4px;
`;
