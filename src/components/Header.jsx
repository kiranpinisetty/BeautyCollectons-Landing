import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/BCLogo.png';
import { BUSINESS_INFO } from '../data/constants';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isBrands = location.pathname === '/brands';

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: scrolled ? 'rgba(250,248,245,0.97)' : '#FAF8F5',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid rgba(26,26,26,0.09)',
        transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease',
        py: '14px',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* ── Logo + Name ── */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={BUSINESS_INFO.name}
              sx={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid rgba(122,31,61,0.3)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(122,31,61,0.6)',
                  boxShadow: '0 0 10px rgba(122,31,61,0.18)',
                },
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: { xs: '16px', sm: '19px' },
                  letterSpacing: '2.5px',
                  color: '#1A1A1A',
                  lineHeight: 1,
                }}
              >
                {BUSINESS_INFO.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '8px',
                  color: '#7A1F3D',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  display: { xs: 'none', sm: 'block' },
                  lineHeight: 1,
                  mt: '3px',
                }}
              >
                Beauty &amp; Cosmetics
              </Typography>
            </Box>
          </Box>

          {/* ── Nav links ── */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {[
              { label: 'HOME', action: () => navigate('/') },
              { label: 'BRANDS', action: () => navigate('/brands') },
              { label: 'PRODUCTS', action: () => handleNavClick('products-section') },
              { label: 'CONTACT', action: () => handleNavClick('contact-section') },
            ].map(({ label, action }) => (
              <Box
                key={label}
                onClick={action}
                sx={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: 'rgba(26,26,26,0.55)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: 0,
                    height: '1px',
                    background: '#7A1F3D',
                    transition: 'width 0.25s ease',
                  },
                  '&:hover': {
                    color: '#1A1A1A',
                    '&::after': { width: '100%' },
                  },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>

          {/* ── CTA ── */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
            {/* Mobile: brands button */}
            <Button
              onClick={() => navigate('/brands')}
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: isBrands ? '#FAF8F5' : 'rgba(26,26,26,0.65)',
                backgroundColor: isBrands ? '#7A1F3D' : 'transparent',
                border: '1px solid rgba(26,26,26,0.15)',
                borderRadius: '4px',
                px: 2,
                py: '7px',
                '&:hover': { backgroundColor: '#7A1F3D', color: '#FAF8F5', borderColor: '#7A1F3D' },
              }}
            >
              BRANDS
            </Button>

            {/* Visit store CTA */}
            <Button
              onClick={() => handleNavClick('contact-section')}
              sx={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#FAF8F5',
                backgroundColor: '#7A1F3D',
                borderRadius: '4px',
                px: { xs: 2, sm: 2.5 },
                py: '8px',
                transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  backgroundColor: '#9B2D52',
                  boxShadow: '0 4px 20px rgba(122,31,61,0.35)',
                },
              }}
            >
              VISIT STORE
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Header;
