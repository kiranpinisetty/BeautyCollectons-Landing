import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { REVIEWS } from '../data/reviews';

const CustomerReviews = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#0b0b0b',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#c9a96e', textTransform: 'uppercase' }}>
              Testimonials
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
            Customer Reviews
          </Typography>
        </Box>

        {/* ── Reviews grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {REVIEWS.map((review) => (
            <Box
              key={review.id}
              sx={{
                p: { xs: 3.5, md: 4 },
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
                '&:hover': {
                  borderColor: 'rgba(201,169,110,0.2)',
                  transform: 'translateY(-5px)',
                },
              }}
            >
              {/* Large decorative quote */}
              <Typography
                sx={{
                  position: 'absolute',
                  top: '-8px',
                  right: '16px',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '80px',
                  color: 'rgba(201,169,110,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                "
              </Typography>

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Stars */}
                <Typography sx={{ fontSize: '13px', color: '#c9a96e', letterSpacing: '3px', mb: 2.5, display: 'block' }}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </Typography>
                {/* Text */}
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: 'rgba(245,240,235,0.55)',
                    fontStyle: 'italic',
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  "{review.text}"
                </Typography>
              </Box>

              {/* Reviewer */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, borderTop: '1px solid rgba(255,255,255,0.06)', pt: 2.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c9a96e, #9a7a3e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#050505',
                    fontWeight: 800,
                    fontSize: '14px',
                    flexShrink: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {review.name.charAt(0)}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#f5f0eb', lineHeight: 1.3, letterSpacing: '0.5px' }}>
                    {review.name}
                  </Typography>
                  {review.verified && (
                    <Typography sx={{ fontSize: '10px', color: '#4ade80', fontWeight: 600, letterSpacing: '0.3px' }}>
                      ✓ Verified Purchase
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews;
