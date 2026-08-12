import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { REVIEWS } from '../data/reviews';

const CustomerReviews = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#FAF8F5',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(26,26,26,0.08)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
              Testimonials
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
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(26,26,26,0.08)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(26,26,26,0.05)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  borderColor: 'rgba(122,31,61,0.2)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 32px rgba(26,26,26,0.1)',
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
                  color: 'rgba(122,31,61,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                "
              </Typography>

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Burgundy stars */}
                <Typography sx={{ fontSize: '13px', color: '#7A1F3D', letterSpacing: '3px', mb: 2.5, display: 'block' }}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </Typography>
                {/* Text */}
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: 'rgba(26,26,26,0.6)',
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, borderTop: '1px solid rgba(26,26,26,0.07)', pt: 2.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7A1F3D, #4A1024)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAF8F5',
                    fontWeight: 800,
                    fontSize: '14px',
                    flexShrink: 0,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {review.name.charAt(0)}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3, letterSpacing: '0.5px' }}>
                    {review.name}
                  </Typography>
                  {review.verified && (
                    <Typography sx={{ fontSize: '10px', color: '#7A1F3D', fontWeight: 600, letterSpacing: '0.3px' }}>
                      ✓ Verified Customer
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
