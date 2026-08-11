import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/constants';

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
          backgroundColor: '#050505',
          pt: { xs: '80px', md: '120px' },
          pb: { xs: '60px', md: '100px' },
          px: 2,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Ambient gold glow behind text */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

          {/* ── Eyebrow ── */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 4,
            }}
          >
            <Box sx={{ width: 32, height: '1px', backgroundColor: '#c9a96e', opacity: 0.7 }} />
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '4px',
                color: '#c9a96e',
                textTransform: 'uppercase',
              }}
            >
              Authentic Beauty &amp; Cosmetics
            </Typography>
            <Box sx={{ width: 32, height: '1px', backgroundColor: '#c9a96e', opacity: 0.7 }} />
          </Box>

          {/* ── Giant headline ── */}
          <Box sx={{ mb: 4, position: 'relative', display: 'inline-block', width: '100%' }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: { xs: '13vw', sm: '11vw', md: '9vw', lg: '120px' },
                letterSpacing: { xs: '2px', md: '4px' },
                lineHeight: 0.92,
                color: '#f5f0eb',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              {BUSINESS_INFO.name}
            </Typography>

            {/* Gold underline accent */}
            <Box
              sx={{
                width: '180px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
                margin: '18px auto 0',
                borderRadius: '2px',
              }}
            />
          </Box>

          {/* ── Tagline ── */}
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: { xs: '16px', md: '22px' },
              color: 'rgba(245,240,235,0.5)',
              mb: 2,
              letterSpacing: '0.3px',
            }}
          >
            "{BUSINESS_INFO.tagline}"
          </Typography>

          {/* ── Description ── */}
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '15px' },
              color: 'rgba(245,240,235,0.35)',
              maxWidth: '520px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.85,
              letterSpacing: '0.2px',
            }}
          >
            {BUSINESS_INFO.description}
          </Typography>

          {/* ── CTAs ── */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              onClick={() => navigate('/brands')}
              sx={{
                px: { xs: 3.5, md: 5 },
                py: '13px',
                background: 'linear-gradient(120deg, #e8c98a 0%, #c9a96e 50%, #9a7a3e 100%)',
                color: '#050505',
                borderRadius: '4px',
                fontWeight: 800,
                fontSize: '11px',
                letterSpacing: '2px',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(201,169,110,0.45)',
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
                color: '#f5f0eb',
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '2px',
                transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
                '&:hover': {
                  borderColor: '#c9a96e',
                  color: '#c9a96e',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              VISIT STORE
            </Button>
          </Box>

        </Container>
      </Box>

      {/* ─────────── Marquee ticker strip ─────────── */}
      <Box
        sx={{
          backgroundColor: '#c9a96e',
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
                  color: '#050505',
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </Typography>
              <Box sx={{ width: 4, height: 4, backgroundColor: '#050505', borderRadius: '50%', opacity: 0.4 }} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Hero;
