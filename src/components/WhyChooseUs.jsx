import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { WHY_CHOOSE_US } from '../data/whyChooseUs';

const WhyChooseUs = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#0b0b0b',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#c9a96e', textTransform: 'uppercase' }}>
              Our Promise
            </Typography>
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '44px', md: '72px' },
              letterSpacing: '2px',
              color: '#f5f0eb',
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
          {WHY_CHOOSE_US.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '2px',
                  height: 0,
                  backgroundColor: '#c9a96e',
                  transition: 'height 0.4s ease',
                },
                '&:hover': {
                  borderColor: 'rgba(201,169,110,0.2)',
                  transform: 'translateY(-6px)',
                  '&::before': { height: '100%' },
                },
              }}
            >
              {/* Index number */}
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '52px',
                  color: 'rgba(201,169,110,0.08)',
                  lineHeight: 1,
                  mb: 1,
                  letterSpacing: '2px',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </Typography>

              <Typography sx={{ fontSize: '28px', mb: 2, lineHeight: 1 }}>{item.emoji}</Typography>

              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#f5f0eb',
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: '13px', color: 'rgba(245,240,235,0.4)', lineHeight: 1.75 }}>
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
