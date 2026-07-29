import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    primary: {
      main: '#111827',
      light: '#374151',
      dark: '#000000',
    },
    secondary: {
      main: '#c5a059',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
  },
});

export default theme;
