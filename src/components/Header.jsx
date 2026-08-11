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

  const isHome = location.pathname === '/';
  const isBrands = location.pathname === '/brands';

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: scrolled ? 'rgba(5,5,5,0.97)' : '#050505',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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
                filter: 'grayscale(1) brightness(1.25) contrast(1.05)',
                border: '1px solid rgba(201,169,110,0.35)',
                transition: 'filter 0.3s ease',
                '&:hover': { filter: 'grayscale(0.5) brightness(1.1)' },
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: { xs: '16px', sm: '19px' },
                  letterSpacing: '2.5px',
                  color: '#f5f0eb',
                  lineHeight: 1,
                }}
              >
                {BUSINESS_INFO.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '8px',
                  color: '#c9a96e',
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
                  color: 'rgba(245,240,235,0.6)',
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
                    background: '#c9a96e',
                    transition: 'width 0.25s ease',
                  },
                  '&:hover': {
                    color: '#f5f0eb',
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
                color: isBrands ? '#050505' : 'rgba(245,240,235,0.7)',
                backgroundColor: isBrands ? '#c9a96e' : 'transparent',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
                px: 2,
                py: '7px',
                '&:hover': { backgroundColor: '#c9a96e', color: '#050505', borderColor: '#c9a96e' },
              }}
            >
              BRANDS
            </Button>

            {/* Visit store pill */}
            <Button
              onClick={() => handleNavClick('contact-section')}
              sx={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#050505',
                background: 'linear-gradient(120deg, #e8c98a 0%, #c9a96e 50%, #9a7a3e 100%)',
                borderRadius: '4px',
                px: { xs: 2, sm: 2.5 },
                py: '8px',
                transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  opacity: 0.9,
                  boxShadow: '0 4px 20px rgba(201,169,110,0.45)',
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
