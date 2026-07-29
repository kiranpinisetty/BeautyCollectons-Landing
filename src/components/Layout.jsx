import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../styles/theme';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a0a0a',
          color: '#f5f5f5',
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
