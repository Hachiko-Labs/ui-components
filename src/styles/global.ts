import { css, createGlobalStyle } from 'styled-components';

export const bodyStyles = css`
  font-family: ${({ theme }) => theme.typography.family};
  color: ${({ theme }) => theme.colors.colorText};

  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;

  * {
    box-sizing: border-box;
  }
`;

export const globalStyles = css`
  body {
    ${bodyStyles}
  }
  // prevent mouse-clicks from focusing elements
  // this removes the ugly blue outline
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;
