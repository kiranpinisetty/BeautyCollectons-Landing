import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundColor: 'transparent',
        py: { xs: 8, md: 12 },
        px: 2,
        textAlign: 'center',
        borderBottom: '1px solid #f0f0f0',
        zIndex: 1,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '28px', sm: '42px', md: '48px' },
            fontWeight: 800,
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            marginBottom: 2,
            lineHeight: 1.15,
          }}
        >
          {BUSINESS_INFO.name}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '16px', sm: '20px' },
            fontWeight: 600,
            color: '#666666',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: 2.5,
          }}
        >
          {BUSINESS_INFO.tagline}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '13px', sm: '15px' },
            color: '#888888',
            maxWidth: '650px',
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          {BUSINESS_INFO.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* Primary Button */}
          <Button
            onClick={() => scrollToSection('products-section')}
            sx={{
              padding: '12px 36px',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '3px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': {
                backgroundColor: '#222222',
              },
            }}
          >
            SHOP NOW
          </Button>

          {/* Secondary Button */}
          <Button
            onClick={() => scrollToSection('contact-section')}
            sx={{
              padding: '12px 36px',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              borderRadius: '3px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            VISIT US
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
