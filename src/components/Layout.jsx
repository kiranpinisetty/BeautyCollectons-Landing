import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../styles/theme';

import Header from './Header';
import Hero from './Hero';
import ShopGallery from './ShopGallery';
import WhyChooseUs from './WhyChooseUs';
import OurProducts from './OurProducts';
import CustomerReviews from './CustomerReviews';
import ContactSection from './ContactSection';
import Footer from './Footer';
import logo from '../assets/BCLogo.png';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
                zIndex: -1,
              },
            }}
          >
            <Hero />
            <ShopGallery />
            <WhyChooseUs />
          </Box>
          <OurProducts />
          <CustomerReviews />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
