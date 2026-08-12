import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/constants';
import heroBg from '../assets/hero_beauty.jpg';
import heroCosmetics from '../assets/hero_cosmetics.jpg';

// Ticker items
const TICKER_ITEMS = [
  '100% AUTHENTIC', 'PREMIUM BRANDS', 'BEAUTY & COSMETICS',
  'SKINCARE · MAKEUP · HAIRCARE', 'BEAUTY WITHIN EVERYONE\'S REACH',
  '100% AUTHENTIC', 'PREMIUM BRANDS', 'BEAUTY & COSMETICS',
  'SKINCARE · MAKEUP · HAIRCARE', 'BEAUTY WITHIN EVERYONE\'S REACH',
];

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─────────── Hero Section ─────────── */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#FAF8F5',
          pt: { xs: '80px', md: '100px' },
          pb: { xs: '60px', md: '80px' },
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(26,26,26,0.08)',
        }}
      >
        {/* Ambient burgundy glow — soft on light background */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(ellipse, rgba(122,31,61,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(200,168,130,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 6, lg: 4 },
              alignItems: 'center',
              minHeight: { lg: '520px' },
            }}
          >
            {/* ── Left: Text Content ── */}
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, animation: 'fadeUp 0.9s ease forwards' }}>

              {/* Eyebrow */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 4,
                }}
              >
                <Box sx={{ width: 32, height: '1px', backgroundColor: '#7A1F3D', opacity: 0.8 }} />
                <Typography
                  sx={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '4px',
                    color: '#7A1F3D',
                    textTransform: 'uppercase',
                  }}
                >
                  Authentic Beauty &amp; Cosmetics
                </Typography>
                <Box sx={{ width: 32, height: '1px', backgroundColor: '#7A1F3D', opacity: 0.8 }} />
              </Box>

              {/* Giant headline */}
              <Box sx={{ mb: 4, position: 'relative', display: 'inline-block', width: '100%' }}>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: { xs: '13vw', sm: '11vw', md: '9vw', lg: '96px' },
                    letterSpacing: { xs: '2px', md: '3px' },
                    lineHeight: 0.92,
                    color: '#1A1A1A',
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  {BUSINESS_INFO.name}
                </Typography>

                {/* Burgundy underline accent */}
                <Box
                  sx={{
                    width: '120px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #7A1F3D, transparent)',
                    mt: '16px',
                    ml: { xs: 'auto', lg: 0 },
                    mr: { xs: 'auto', lg: 0 },
                    borderRadius: '2px',
                  }}
                />
              </Box>

              {/* Tagline */}
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: { xs: '16px', md: '20px' },
                  color: 'rgba(26,26,26,0.5)',
                  mb: 2,
                  letterSpacing: '0.3px',
                }}
              >
                "{BUSINESS_INFO.tagline}"
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: { xs: '13px', md: '14px' },
                  color: 'rgba(26,26,26,0.45)',
                  maxWidth: '440px',
                  mx: { xs: 'auto', lg: 0 },
                  mb: 6,
                  lineHeight: 1.85,
                  letterSpacing: '0.2px',
                }}
              >
                Your trusted destination for makeup, skincare, hair care, bridal essentials — and more from the brands you love.
              </Typography>

              {/* CTAs */}
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' }, gap: 2, flexWrap: 'wrap' }}>
                <Button
                  onClick={() => navigate('/brands')}
                  sx={{
                    px: { xs: 3.5, md: 5 },
                    py: '13px',
                    backgroundColor: '#7A1F3D',
                    color: '#FAF8F5',
                    borderRadius: '4px',
                    fontWeight: 800,
                    fontSize: '11px',
                    letterSpacing: '2px',
                    transition: 'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                    '&:hover': {
                      backgroundColor: '#9B2D52',
                      boxShadow: '0 8px 32px rgba(122,31,61,0.35)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  EXPLORE BRANDS
                </Button>

                <Button
                  onClick={() => scrollToSection('contact-section')}
                  sx={{
                    px: { xs: 3.5, md: 5 },
                    py: '13px',
                    color: '#1A1A1A',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(26,26,26,0.22)',
                    borderRadius: '4px',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '2px',
                    transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
                    '&:hover': {
                      borderColor: '#7A1F3D',
                      color: '#7A1F3D',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  VISIT STORE
                </Button>
              </Box>
            </Box>

            {/* ── Right: Visual composition ── */}
            <Box
              sx={{
                position: 'relative',
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                height: '560px',
              }}
            >
              {/* Main hero portrait */}
              <Box
                component="img"
                src={heroBg}
                alt="Indian beauty model"
                sx={{
                  width: '320px',
                  height: '480px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  filter: 'brightness(0.95)',
                  boxShadow: '0 32px 80px rgba(26,26,26,0.22), 0 0 0 1px rgba(122,31,61,0.12)',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'transform 0.6s ease',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              />

              {/* Burgundy frame accent behind */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '32px',
                  left: '50%',
                  transform: 'translateX(-50%) translateX(24px)',
                  width: '320px',
                  height: '480px',
                  border: '1px solid rgba(122,31,61,0.2)',
                  borderRadius: '4px',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />

              {/* Floating cosmetics image — bottom left */}
              <Box
                component="img"
                src={heroCosmetics}
                alt="Beauty cosmetics"
                sx={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-30px',
                  width: '190px',
                  height: '190px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '3px',
                  boxShadow: '0 16px 48px rgba(26,26,26,0.22)',
                  border: '1px solid rgba(122,31,61,0.15)',
                  zIndex: 3,
                  animation: 'float 6s ease-in-out infinite',
                }}
              />

              {/* Small stat badge — top right */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50px',
                  right: '-20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(122,31,61,0.18)',
                  borderRadius: '4px',
                  p: '16px 20px',
                  zIndex: 4,
                  animation: 'floatAlt 7s ease-in-out infinite',
                  boxShadow: '0 8px 32px rgba(26,26,26,0.12)',
                }}
              >
                <Typography sx={{ fontSize: '22px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '2px', color: '#7A1F3D', lineHeight: 1 }}>
                  8+
                </Typography>
                <Typography sx={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', mt: '4px' }}>
                  Premium Brands
                </Typography>
              </Box>

              {/* Small stat badge — mid left */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '200px',
                  left: '-40px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(122,31,61,0.18)',
                  borderRadius: '4px',
                  p: '14px 18px',
                  zIndex: 4,
                  animation: 'float 8s ease-in-out infinite 1s',
                  boxShadow: '0 8px 32px rgba(26,26,26,0.12)',
                }}
              >
                <Typography sx={{ fontSize: '22px', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '2px', color: '#7A1F3D', lineHeight: 1 }}>
                  100%
                </Typography>
                <Typography sx={{ fontSize: '9px', letterSpacing: '2px', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', mt: '4px' }}>
                  Authentic
                </Typography>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* ─────────── Marquee ticker strip ─────────── */}
      <Box
        sx={{
          backgroundColor: '#7A1F3D',
          py: '10px',
          overflow: 'hidden',
          display: 'flex',
          borderBottom: '1px solid rgba(0,0,0,0.15)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'marquee 28s linear infinite',
            '@keyframes marquee': {
              '0%':   { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {TICKER_ITEMS.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 4,
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '2.5px',
                  color: '#FAF8F5',
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </Typography>
              <Box sx={{ width: 4, height: 4, backgroundColor: 'rgba(250,248,245,0.4)', borderRadius: '50%' }} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Hero;
