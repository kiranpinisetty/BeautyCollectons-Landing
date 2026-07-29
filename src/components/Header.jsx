import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import logo from '../assets/BCLogo.png';
import { BUSINESS_INFO } from '../data/constants';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '12px 0',
        borderBottom: '1px solid #333333',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo & Brand Name */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Box
              component="img"
              src={logo}
              alt={BUSINESS_INFO.name}
              sx={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid #333333',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '14px', sm: '16px' },
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              {BUSINESS_INFO.name}
            </Typography>
          </Box>

          {/* Contact Action Button */}
          <Button
            variant="contained"
            onClick={() => scrollToSection('contact-section')}
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 700,
              fontSize: '12px',
              padding: '8px 24px',
              borderRadius: '3px',
              border: '1px solid #ffffff',
              '&:hover': {
                backgroundColor: '#e6e6e6',
                color: '#000000',
              },
            }}
          >
            CONTACT
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
