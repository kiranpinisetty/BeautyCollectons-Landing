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
        backgroundColor: '#000000',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 0',
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
              gap: 1.5,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src={logo}
              alt={BUSINESS_INFO.name}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid #c5a059',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '13px', sm: '15px' },
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              {BUSINESS_INFO.name}
            </Typography>
          </Box>

          {/* Navigation Action Buttons */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            {/* BRANDS Button */}
            <Button
              variant={location.pathname === '/brands' ? 'contained' : 'outlined'}
              onClick={() => navigate('/brands')}
              sx={{
                backgroundColor: location.pathname === '/brands' ? '#c5a059' : 'transparent',
                color: location.pathname === '/brands' ? '#000000' : '#ffffff',
                borderColor: location.pathname === '/brands' ? '#c5a059' : 'rgba(255,255,255,0.3)',
                fontWeight: 700,
                fontSize: '11px',
                padding: '7px 18px',
                borderRadius: '4px',
                letterSpacing: '0.5px',
                '&:hover': {
                  backgroundColor: '#c5a059',
                  color: '#000000',
                  borderColor: '#c5a059',
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
                fontSize: '11px',
                padding: '7px 18px',
                borderRadius: '4px',
                letterSpacing: '0.5px',
                '&:hover': {
                  backgroundColor: '#e5e5e5',
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
