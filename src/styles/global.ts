import { css, createGlobalStyle } from 'styled-components';
import { hachickoDefaultTheme } from '../theme';

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

export const antdGlobalStyles = {
  token: {
    colorPrimary: hachickoDefaultTheme.colors.primaryBg,
    colorError: hachickoDefaultTheme.colors.errorText,
    colorWarning: hachickoDefaultTheme.colors.warningText,
    colorInfo: hachickoDefaultTheme.colors.infoText,
    colorSuccess: hachickoDefaultTheme.colors.successText,
  },
};

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;
