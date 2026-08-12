import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const WHY_ITEMS = [
  {
    id: 1,
    title: 'BEST QUALITY',
    description: 'Premium products sourced from trusted, authentic brand partners.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3L17.09 9.26L24 10.27L19 15.14L20.18 22L14 18.77L7.82 22L9 15.14L4 10.27L10.91 9.26L14 3Z" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'BEST PRICES',
    description: 'Quality beauty products at accessible, everyday prices.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="#7A1F3D" strokeWidth="1.5"/>
        <path d="M14 9V10M14 18V19M10.5 12C10.5 10.9 12.1 10 14 10C15.9 10 17.5 10.9 17.5 12C17.5 13.3 16 14 14 14C12 14 10.5 14.7 10.5 16C10.5 17.1 12.1 18 14 18C15.9 18 17.5 17.1 17.5 16" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'WIDE VARIETY',
    description: 'All your beauty essentials — makeup, skincare, hair care and bridal.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#7A1F3D" strokeWidth="1.5"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#7A1F3D" strokeWidth="1.5"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#7A1F3D" strokeWidth="1.5"/>
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#7A1F3D" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'EXPERT STAFF',
    description: 'Friendly and knowledgeable team to guide your beauty choices.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="10" r="4" stroke="#7A1F3D" strokeWidth="1.5"/>
        <path d="M6 24C6 19.582 9.582 16 14 16C18.418 16 22 19.582 22 24" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#F5F2EE',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(26,26,26,0.08)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
              Our Promise
            </Typography>
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '44px', md: '72px' },
              letterSpacing: '2px',
              color: '#1A1A1A',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            Why Choose Us
          </Typography>
        </Box>

        {/* ── Cards grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {WHY_ITEMS.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(26,26,26,0.08)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
                boxShadow: '0 2px 12px rgba(26,26,26,0.05)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '2px',
                  height: 0,
                  backgroundColor: '#7A1F3D',
                  transition: 'height 0.4s ease',
                },
                '&:hover': {
                  borderColor: 'rgba(122,31,61,0.2)',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 36px rgba(26,26,26,0.1)',
                  '&::before': { height: '100%' },
                },
              }}
            >
              {/* Index number */}
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '52px',
                  color: 'rgba(122,31,61,0.06)',
                  lineHeight: 1,
                  mb: 1,
                  letterSpacing: '2px',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </Typography>

              {/* SVG Icon */}
              <Box sx={{ mb: 2.5, lineHeight: 0 }}>
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#1A1A1A',
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: '13px', color: 'rgba(26,26,26,0.5)', lineHeight: 1.75 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
