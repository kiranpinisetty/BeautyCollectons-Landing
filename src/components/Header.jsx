import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/BCLogo.png';
import { BUSINESS_INFO } from '../data/constants';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
        padding: '14px 0',
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
            onClick={() => navigate('/')}
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
                border: '2px solid #c9a84c',
                boxShadow: '0 0 12px rgba(201, 168, 76, 0.4)',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '13px', sm: '16px' },
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #e8cc7a 0%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {BUSINESS_INFO.name}
            </Typography>
          </Box>

          {/* Nav Actions */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            {/* BRANDS Button */}
            <Button
              variant={location.pathname === '/brands' ? 'contained' : 'outlined'}
              onClick={() => navigate('/brands')}
              sx={{
                backgroundColor: location.pathname === '/brands' ? '#c9a84c' : 'transparent',
                color: location.pathname === '/brands' ? '#000000' : '#c9a84c',
                borderColor: '#c9a84c',
                fontWeight: 700,
                fontSize: '12px',
                padding: '8px 20px',
                borderRadius: '4px',
                letterSpacing: '0.8px',
                '&:hover': {
                  backgroundColor: '#e8cc7a',
                  color: '#000000',
                  borderColor: '#e8cc7a',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.5)',
                },
              }}
            >
              BRANDS
            </Button>

            {/* CONTACT Button */}
            <Button
              variant="contained"
              onClick={() => handleNavClick('contact-section')}
              sx={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: 700,
                fontSize: '12px',
                padding: '8px 20px',
                borderRadius: '4px',
                letterSpacing: '0.8px',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              CONTACT
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
