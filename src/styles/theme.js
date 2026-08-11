import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#050505',
      paper: '#0e0e0e',
    },
    primary: {
      main: '#c9a96e',
      light: '#e8c98a',
      dark: '#9a7a3e',
      contrastText: '#050505',
    },
    secondary: {
      main: '#b87d8a',
      contrastText: '#050505',
    },
    text: {
      primary: '#f5f0eb',
      secondary: 'rgba(245,240,235,0.55)',
      disabled: 'rgba(245,240,235,0.25)',
    },
    divider: 'rgba(255,255,255,0.07)',
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
