import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#fff' },
    background: { default: '#fff' },
  },
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700, letterSpacing: '-0.5px' },
    h2: { fontWeight: 700, letterSpacing: '-0.5px' },
    h6: { fontWeight: 700, letterSpacing: '0.5px' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '3px', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' },
      },
    },
  },
});

export default theme;
