import styled, { css } from 'react-emotion';

export const container = css`
  font-size: 12px;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding: 0 0 8px;
`;

export const imgContainer = css`
  height: 220px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const titleCx = css`
  font-size: 16px;
`;

export const ProgressBar = styled('div')(
  (props) => `
  position: relative;
  height: 8px;
  border-radius: 2px;
  overflow: hidden;
  background: grey;
  margin: 0 0 3px;

  &::after {
    content: '';
    background: pink;
    position: absolute;
    height: 8px;
    width: ${props.width}%;
    top: 0;
    left: 0;
    border-radius: 6px 0 0 6px;
  }
`,
);

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;
