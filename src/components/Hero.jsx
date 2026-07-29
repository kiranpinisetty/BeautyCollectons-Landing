import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/constants';

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 10, md: 14 },
        px: 2,
        textAlign: 'center',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: '#c5a059',
            fontWeight: 700,
            letterSpacing: '3px',
            fontSize: '11px',
            display: 'block',
            mb: 2,
          }}
        >
          AUTHENTIC BEAUTY & COSMETICS
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '30px', sm: '46px', md: '54px' },
            fontWeight: 800,
            color: '#111827',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            marginBottom: 2,
            lineHeight: 1.15,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {BUSINESS_INFO.name}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '15px', sm: '18px' },
            fontWeight: 500,
            color: '#4b5563',
            letterSpacing: '0.3px',
            marginBottom: 2.5,
          }}
        >
          {BUSINESS_INFO.tagline}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', sm: '15px' },
            color: '#6b7280',
            maxWidth: '580px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          {BUSINESS_INFO.description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            onClick={() => navigate('/brands')}
            sx={{
              padding: '13px 36px',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': { backgroundColor: '#1f2937' },
            }}
          >
            EXPLORE BRANDS
          </Button>

          <Button
            onClick={() => scrollToSection('contact-section')}
            sx={{
              padding: '13px 36px',
              backgroundColor: '#ffffff',
              color: '#111827',
              border: '1.5px solid #111827',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': { backgroundColor: '#f3f4f6' },
            }}
          >
            VISIT STORE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
