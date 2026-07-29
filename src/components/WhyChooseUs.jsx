import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { WHY_CHOOSE_US } from '../data/whyChooseUs';

const WhyChooseUs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '3px', fontSize: '11px', display: 'block', textAlign: 'center', mb: 1 }}
        >
          OUR PROMISE
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
          Why Choose Us
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {WHY_CHOOSE_US.map((item) => (
            <Box
              key={item.id}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  mb: 2,
                }}
              >
                {item.emoji}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827', mb: 1 }}
              >
                {item.title}
              </Typography>

              <Typography variant="body2" sx={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>
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
