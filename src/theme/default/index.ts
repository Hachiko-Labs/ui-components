import { COLORS } from './colors';
import { TYPOGRAPHY, FONTS } from './typography';

export const hachickoDefaultTheme = Object.seal({
  colors: COLORS,
  typography: {
    ...TYPOGRAPHY,
    ...FONTS,
  },
});
