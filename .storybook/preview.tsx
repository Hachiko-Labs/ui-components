import React from 'react';
import { ConfigProvider } from 'antd';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, antdGlobalStyles } from '../src/styles/global';
import { hachickoDefaultTheme } from '../src/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={hachickoDefaultTheme}>
      <ConfigProvider theme={antdGlobalStyles}>
        <Story {...context} />
        <GlobalStyle />
      </ConfigProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
