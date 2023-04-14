import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/styles/global'
import { hachickoDefaultTheme } from '../src/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={hachickoDefaultTheme}>
      <Story {...context} />
      <GlobalStyle />
    </ThemeProvider>
  )
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider]
};

export default preview;
