import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { REVIEWS } from '../data/reviews';

const CustomerReviews = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            marginBottom: { xs: 4, md: 6 },
            color: '#000000',
          }}
        >
          CUSTOMER REVIEWS
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {REVIEWS.map((review) => (
            <Box
              key={review.id}
              sx={{
                p: 3,
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
                border: '1px solid #f0f0f0',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
              }}
            >
              <Box>
                {/* Rating Stars */}
                <Typography sx={{ fontSize: '14px', marginBottom: 1.5, color: '#f5a623' }}>
                  {'★'.repeat(review.rating)}
                </Typography>

                {/* Review Text */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    color: '#666666',
                    fontStyle: 'italic',
                    marginBottom: 2,
                    lineHeight: 1.6,
                  }}
                >
                  "{review.text}"
                </Typography>
              </Box>

              {/* Customer Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  {review.name}
                </Typography>
                {review.verified && (
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '10px',
                      backgroundColor: '#e6f4ea',
                      color: '#137333',
                      px: 0.8,
                      py: 0.2,
                      borderRadius: '2px',
                      fontWeight: 600,
                    }}
                  >
                    Verified
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews;
