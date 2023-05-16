import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

export function customizedTheme() {
  const palette = createPalette();
  const components = createComponents({ palette });
  const shadows = createShadows();
  const typography = createTypography();

  // @ts-ignore
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440
      }
    },
    // @ts-ignore
    components,
    // @ts-ignore
    palette,
    // @ts-ignore
    shadows,
    shape: {
      borderRadius: 8
    },
    // @ts-ignore
    typography
  });
}
