import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { REVIEWS } from '../data/reviews';

const CustomerReviews = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '3px', fontSize: '11px', display: 'block', textAlign: 'center', mb: 1 }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '26px', md: '36px' },
            fontWeight: 800,
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
            color: '#111827',
            mb: { xs: 5, md: 7 },
            letterSpacing: '-0.3px',
          }}
        >
          Customer Reviews
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {REVIEWS.map((review) => (
            <Box
              key={review.id}
              sx={{
                p: 4,
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '14px', mb: 1.5, color: '#c5a059', letterSpacing: '2px' }}>
                  {'★'.repeat(review.rating)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '13px', color: '#4b5563', fontStyle: 'italic', mb: 3, lineHeight: 1.7 }}
                >
                  "{review.text}"
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: '#111827', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#ffffff', fontWeight: 700, fontSize: '13px', flexShrink: 0,
                  }}
                >
                  {review.name.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontSize: '13px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                    {review.name}
                  </Typography>
                  {review.verified && (
                    <Typography sx={{ fontSize: '10px', color: '#16a34a', fontWeight: 600 }}>
                      ✓ Verified
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
