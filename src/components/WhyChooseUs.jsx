import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { WHY_CHOOSE_US } from '../data/whyChooseUs';

const WhyChooseUs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: 'transparent',
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
          WHY CHOOSE US
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
          {WHY_CHOOSE_US.map((item) => (
            <Box
              key={item.id}
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#ffffff',
                border: '1px solid #f0f0f0',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Circular Icon Container */}
              <Box
                sx={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: 2,
                }}
              >
                {item.emoji}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#000000',
                  marginBottom: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  color: '#666666',
                  lineHeight: 1.5,
                }}
              >
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
