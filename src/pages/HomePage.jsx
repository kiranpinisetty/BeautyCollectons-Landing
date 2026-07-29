import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ShopGallery from '../components/ShopGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProducts from '../components/OurProducts';
import CustomerReviews from '../components/CustomerReviews';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Hero />
      <ShopGallery />
      <WhyChooseUs />
      <OurProducts />
      <CustomerReviews />
      <ContactSection />
    </Box>
  );
};

export default HomePage;
