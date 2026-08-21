import { createTheme } from '@mui/material/styles';

/**
 * MUI theme — "Editorial Warm" palette
 * This theme governs MUI Dialog, Paper, and other MUI-specific surfaces.
 * The main page UI uses global.css CSS variables; this theme handles
 * MUI-managed components (modals, popovers, etc.)
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1A100C',   // warmer near-black (was #050505)
      paper:   '#231510',   // warmer dark surface (was #0e0e0e)
    },
    primary: {
      main:         '#B8862E',   // gold — replaces champagne #c9a96e
      light:        '#D4A54A',   // lighter gold
      dark:         '#8C6420',   // darker gold
      contrastText: '#F7EFE1',   // paper — warm off-white text on gold
    },
    secondary: {
      main:         '#5C1A1A',   // maroon — replaces rose #b87d8a
      contrastText: '#F7EFE1',
    },
    text: {
      primary:  '#F7EFE1',                    // paper — warm off-white
      secondary: 'rgba(247,239,225,0.55)',    // ink-dim equivalent on dark
      disabled:  'rgba(247,239,225,0.25)',
    },
    divider: 'rgba(247,239,225,0.07)',        // warm white divider (was pure white)
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundImage: 'none' },
      },
    },
  },
});

export default theme;
