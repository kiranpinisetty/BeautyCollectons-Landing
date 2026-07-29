import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: '#141414',
    },
    primary: {
      main: '#c9a84c',
      light: '#e8cc7a',
      dark: '#9a7a2a',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
  },
});

export default theme;
